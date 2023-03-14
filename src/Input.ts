import { Texture, utils, Ticker } from '@pixi/core';
import { Container } from '@pixi/display';
import { FederatedPointerEvent } from '@pixi/events';
import { Graphics } from '@pixi/graphics';
import { Sprite } from '@pixi/sprite';
import { TextStyle, Text } from '@pixi/text';
import { Signal } from 'typed-signals';
import { getView } from './utils/helpers/view';
import { DragObject, Padding } from './utils/HelpTypes';

export type InputOptions = {
    bg?: Container | string;
    textStyle?: Partial<TextStyle>;
    placeholder?: string;
    value?: string;
    maxLength?: number;
    align?: 'left' | 'center' | 'right';
    padding?: Padding;
    cursorColor?: number;
    cursorWidth?: number;
    selectionColor?: number;
    selectionOpacity?: number;
};

/**
 * Container-based component that creates an input to read the user's text.
 * @example
 * new Input({
 *     bg: Sprite.from('input.png'),
 *     placeholder: 'Enter text',
 *     padding: {
 *      top: 11,
 *      right: 11,
 *      bottom: 11,
 *      left: 11
 *     } // alternatively you can use [11, 11, 11, 11] or [11, 11] or just 11
 * });
 */
export class Input extends Container
{
    private readonly bg: Container;
    private readonly inputField: Text;
    private readonly _textMeasureHelper: Text;
    private readonly inputMask: Graphics;
    private readonly placeholder: Text;
    private editing = false;
    private selectStart!: number;
    private tick = 0;
    private textStyle: TextStyle;
    private selectionPointer: Sprite;
    private _cursorPosition = 0;
    private _cursor: Sprite;

    private activation = false;
    private readonly options: InputOptions;

    /** Fires when input loses focus. */
    public readonly onEnter: Signal<(text: string) => void>;

    /** Fires every time input string is changed. */
    public readonly onChange: Signal<(text: string) => void>;

    /** Top side padding */
    public paddingTop = 0;

    /** Right side padding */
    public paddingRight = 0;

    /** Bottom side padding */
    public paddingBottom = 0;

    /** Left side padding */
    public paddingLeft = 0;

    constructor(options: InputOptions)
    {
        super();

        this.options = options;
        this.bg = getView(options.bg);
        this.bg.cursor = 'text';
        this.bg.interactive = true;

        const defaultTextStyle = {
            fill: 0x000000,
            align: 'center'
        } as TextStyle;

        this.textStyle = new TextStyle(options.textStyle ?? defaultTextStyle);

        this.inputField = new Text('', this.textStyle);
        this._textMeasureHelper = new Text('', this.textStyle);

        this.padding = options.padding;

        this.selectionPointer = new Sprite(Texture.WHITE);
        this.selectionPointer.width = 0;
        this.selectionPointer.tint = options.selectionColor ?? 0x000000;
        this.selectionPointer.alpha = options.selectionOpacity ?? 0.5;

        this.inputMask = new Graphics()
            .beginFill(0xffffff)
            .drawRect(
                this.paddingLeft,
                this.paddingTop,
                this.bg.width - this.paddingRight - this.paddingLeft,
                this.bg.height - this.paddingBottom - this.paddingTop
            );

        this.inputField.mask = this.inputMask;

        this._cursor = new Sprite(Texture.WHITE);
        this._cursor.tint = options.cursorColor || 0x000000;
        this._cursor.anchor.set(0.5);
        this._cursor.width = options.cursorWidth || 2;
        this._cursor.height = this.inputField.height * 0.8;
        this._cursor.alpha = 0;
        this._cursor.mask = this.inputMask;

        this.placeholder = new Text(options.placeholder, this.textStyle ?? defaultTextStyle);
        this.placeholder.visible = !!options.placeholder;

        this.value = options.value ?? '';

        this.addChild(this.bg, this.inputField, this.placeholder, this._cursor, this.inputMask, this.selectionPointer);

        this.alignElements();

        this.cursor = 'text';
        this.interactive = true;

        this.on('pointertap', () => (this.activation = true));

        if (utils.isMobile.any)
        {
            window.addEventListener('touchstart', (e) => this.handleActivation(e));

            let keyboard = document.getElementById('v-keyboard') as HTMLInputElement;

            if (!keyboard)
            {
                keyboard = document.createElement('input');

                document.body.appendChild(keyboard);
                keyboard.setAttribute('id', 'v-keyboard');

                keyboard.style.opacity = '0';
            }

            keyboard.oninput = () =>
            {
                let value = keyboard.value;

                const maxLength = this.options.maxLength;

                if (maxLength && value.length > this.options.maxLength)
                {
                    value = value.substring(0, maxLength);
                    keyboard.value = value;
                }

                this.value = value;

                this.onChange.emit(this.value);
            };
        }
        else
        {
            window.addEventListener('click', (e) =>
            {
                this.handleActivation(e);
                this.onEnter.emit(this.value);
            });

            window.addEventListener('keydown', (e) => this.onKeyDown(e));
        }

        this.onEnter = new Signal();
        this.onChange = new Signal();

        Ticker.shared.add((delta) => this.update(delta));
    }

    private add(key: string): void
    {
        if (!this.editing)
        {
            return;
        }

        if (this.options.maxLength && this.value.length >= this.options.maxLength)
        {
            return;
        }

        this.insert(key);

        this.onChange.emit(this.value);
    }

    private insert(string: string): void
    {
        const prevText = this.value.substring(0, this.cursorPosition);
        const postText = this.value.substring(this.cursorPosition, this.value.length);

        this.cursorPosition++;

        this.value = prevText + string + postText;
    }

    private backspace(): void
    {
        if (!this.editing || this.value.length === 0) return;

        if (this.cursorPosition === 0 && this.selectedText === '') return;

        if (this.selectedText !== '')
        {
            this.value = this.value.replace(this.selectedText, '');
            this.cursorPosition = this.selectStart;
            this.selectStart = null;
            this.alignCursor();

            this.onChange.emit(this.value);

            return;
        }

        const array = this.value.split('');

        array.splice(this.cursorPosition - 1, 1);
        this.value = array.join('');
        this.cursorPosition--;

        this.onChange.emit(this.value);
    }

    private delete(): void
    {
        if (!this.editing || this.value.length === 0) return;

        if (this.cursorPosition === this.value.length && this.selectedText === '') return;

        if (this.selectedText !== '')
        {
            this.value = this.value.replace(this.selectedText, '');
            this.cursorPosition = this.selectStart;
            this.selectStart = null;
            this.alignCursor();

            this.onChange.emit(this.value);

            return;
        }

        const array = this.value.split('');

        array.splice(this.cursorPosition, 1);
        this.value = array.join('');

        this.onChange.emit(this.value);
    }

    private _startEditing(e: FederatedPointerEvent | TouchEvent): void
    {
        this.tick = 0;
        this.editing = true;
        this.placeholder.visible = false;
        this._cursor.alpha = 1;

        if (utils.isMobile.any)
        {
            const keyboard = document.getElementById('v-keyboard') as HTMLInputElement;

            keyboard.focus();
            keyboard.click();
            keyboard.value = this.value;
        }

        const obj = e.currentTarget as DragObject;
        // const { x } = obj.parent.worldTransform.applyInverse(e.global);

        console.log({
            obj,
            x: e.x,
            start: this.inputFieldLeftPos,
            width: this.inputField.width
            // x
        });

        this.cursorPosition = this.value.length;

        this.alignElements();
    }

    private onKeyDown(e: KeyboardEvent)
    {
        if (!this.editing) return;

        const key = e.key;

        if (e.metaKey)
        {
            switch (key.toLowerCase())
            {
                case 'a':
                    this.selectAll();
                    break;
                case 'x':
                    this.cutText();
                    break;
                case 'c':
                    this.copyText();
                    break;
                case 'v':
                    this.pasteText();
                    break;
            }

            return;
        }

        if (e.altKey)
        {
            switch (key)
            {
                case 'ArrowLeft':
                    this.onHomeKey(e);
                    break;
                case 'ArrowRight':
                    this.onEndKey(e);
                    break;
            }

            return;
        }

        switch (key)
        {
            case 'Backspace':
                this.backspace();
                break;
            case 'Delete':
                this.delete();
                break;
            case 'Escape':
            case 'Enter':
            case 'Tab':
                this.stopEditing();
                this.onEnter.emit(this.value);
                break;
            case 'ArrowLeft':
                this.detectSelection(e);
                this.cursorPosition = Math.max(0, this.cursorPosition - 1);
                break;
            case 'ArrowRight':
                this.detectSelection(e);
                this.cursorPosition = Math.min(this.value.length, this.cursorPosition + 1);
                break;
            case 'Home':
                this.onHomeKey(e);
                break;
            case 'End':
                this.onEndKey(e);
                break;
            default:
                if (key.length === 1)
                {
                    this.add(key);

                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
        }
    }

    private onHomeKey(e: KeyboardEvent)
    {
        this.detectSelection(e);
        this.cursorPosition = 0;

        e.preventDefault();
        e.stopPropagation();
    }

    private onEndKey(e: KeyboardEvent)
    {
        this.detectSelection(e);
        this.cursorPosition = this.value.length;

        e.preventDefault();
        e.stopPropagation();
    }

    private handleActivation(e: FederatedPointerEvent | TouchEvent)
    {
        this.stopEditing();

        if (this.activation)
        {
            this._startEditing(e);

            this.activation = false;
        }
    }

    private stopEditing(): void
    {
        this._cursor.alpha = 0;
        this.editing = false;
        this.selectStart = null;

        if (this.inputField.text === '')
        {
            this.placeholder.visible = true;
        }

        if (this.value.length === 0) this.placeholder.visible = true;
        if (utils.isMobile.any) document.getElementById('v-keyboard')?.blur();

        this.alignElements();
    }

    private update(dt: number): void
    {
        if (!this.editing || this.selectedText !== '') return;
        this.tick += dt * 0.1;
        this._cursor.alpha = Math.round((Math.sin(this.tick) * 0.5) + 0.5);
    }

    private alignElements()
    {
        const align = this.getInputAlign();

        this.inputField.anchor.set(align, 0.5);
        this.inputField.x = (this.bg.width * align) + (align === 1 ? -this.paddingRight : this.paddingLeft);
        this.inputField.y = (this.bg.height / 2) + this.paddingTop - this.paddingBottom;

        this.placeholder.anchor.set(align, 0.5);
        this.placeholder.x = (this.bg.width * align) + (align === 1 ? -this.paddingRight : this.paddingLeft);
        this.placeholder.y = this.bg.height / 2;

        this._cursor.y = this.inputField.y;
        this.alignCursor();
    }

    private getInputAlign(): 0 | 1 | 0.5
    {
        const maxWidth = this.bg.width * 0.95;
        const paddings = this.paddingLeft + this.paddingRight - 10;
        const isOverflowed = this.inputField.width + paddings > maxWidth;

        if (isOverflowed)
        {
            return this.editing ? 1 : 0;
        }
        switch (this.options.align)
        {
            case 'left':
                return 0;
            case 'center':
                return 0.5;
            case 'right':
                return 1;
            default:
                return 0;
        }
    }

    /** Sets the input text. */
    set value(text: string)
    {
        this.inputField.text = text;

        if (text.length !== 0)
        {
            this.placeholder.visible = false;
        }
        else
        {
            this.placeholder.visible = !this.editing;
        }

        this.alignElements();
    }

    /** Return text of the input. */
    get value(): string
    {
        return this.inputField.text;
    }

    /**
     * Set paddings
     * @param value - number, array of 4 numbers or object with keys: top, right, bottom, left
     * or: [top, right, bottom, left]
     * or: [top&bottom, right&left]
     * or: {
     *  left: 10,
     *  right: 10,
     *  top: 10,
     *  bottom: 10,
     * }
     */
    public set padding(value: Padding)
    {
        if (typeof value === 'number')
        {
            this.paddingTop = value;
            this.paddingRight = value;
            this.paddingBottom = value;
            this.paddingLeft = value;
        }

        if (Array.isArray(value))
        {
            this.paddingTop = value[0] ?? 0;
            this.paddingRight = value[1] ?? value[0] ?? 0;
            this.paddingBottom = value[2] ?? value[0] ?? 0;
            this.paddingLeft = value[3] ?? value[1] ?? value[0] ?? 0;
        }
        else if (typeof value === 'object')
        {
            this.paddingTop = value.top ?? 0;
            this.paddingRight = value.right ?? 0;
            this.paddingBottom = value.bottom ?? 0;
            this.paddingLeft = value.left ?? 0;
        }
    }

    // Return array of paddings [top, right, bottom, left]
    public get padding(): [number, number, number, number]
    {
        return [this.paddingTop, this.paddingRight, this.paddingBottom, this.paddingLeft];
    }

    private get inputFieldLeftPos()
    {
        const align = this.getInputAlign();

        switch (align)
        {
            case 0:
                return this.inputField.x - this.inputField.width;
            case 0.5:
                return this.inputField.x - (this.inputField.width * 0.5);
            case 1:
                return this.inputField.x;
            default:
                return 0;
        }
    }

    private set cursorPosition(value: number)
    {
        this._cursorPosition = value;
        this.alignCursor();
    }

    private get cursorPosition(): number
    {
        return this._cursorPosition;
    }

    private alignCursor()
    {
        const cursorOffset = this.getTextWidth(this.textBeforeCursor);
        const inputX = this.inputFieldLeftPos;

        if (typeof this.selectStart === 'number')
        {
            const top = this.inputField.y - (this.inputField.height * 0.5);
            const bottom = this.inputField.height;

            const selectStartOffset = this.getTextWidth(this.textBeforeSelection);

            this.selectionPointer.x = inputX + Math.min(cursorOffset, selectStartOffset);
            this.selectionPointer.y = top;
            this.selectionPointer.height = bottom;
            this.selectionPointer.width = Math.abs(cursorOffset - selectStartOffset);
        }

        this._cursor.visible = this.selectedText.length === 0;

        this._cursor.x = inputX + cursorOffset;
    }

    private detectSelection(e: KeyboardEvent)
    {
        if (e.shiftKey)
        {
            if (typeof this.selectStart !== 'number')
            {
                this.selectStart = this.cursorPosition;
            }
        }
        else
        {
            this.selectionPointer.width = 0;
            this.selectStart = null;
        }
    }

    private getTextWidth(text: string): number
    {
        if (text.length === 0) return 0;

        this._textMeasureHelper.text = text;

        return this._textMeasureHelper.width;
    }

    private get textBeforeSelection(): string
    {
        return typeof this.selectStart === 'number' ? this.value.slice(0, this.selectStart) : '';
    }

    private get textBeforeCursor(): string
    {
        return this.value.slice(0, this._cursorPosition);
    }

    /** Return selected text. */
    public get selectedText(): string
    {
        const startPos = Math.min(this.selectStart, this.cursorPosition);
        const endPos = Math.max(this.selectStart, this.cursorPosition);

        return typeof this.selectStart === 'number' ? this.value.slice(startPos, endPos) : '';
    }

    private cutText()
    {
        if (this.selectedText.length === 0)
        {
            return;
        }

        navigator.clipboard.writeText(this.selectedText);
        this.delete();
    }

    private copyText()
    {
        if (this.selectedText.length === 0)
        {
            return;
        }

        navigator.clipboard.writeText(this.selectedText);
    }

    private pasteText()
    {
        navigator.clipboard.readText().then((text) =>
        {
            if ((typeof text === 'string' || typeof text === 'number') && text.length > 0)
            {
                this.insertText(text);
            }
        });
    }

    private insertText(text: string)
    {
        if (this.selectedText.length > 0)
        {
            this.delete();
        }

        this.value = this.value.slice(0, this.cursorPosition) + text + this.value.slice(this.cursorPosition);
        this.cursorPosition += text.length;
    }

    private selectAll()
    {
        this.selectStart = 0;
        this.cursorPosition = this.value.length;
        this.alignCursor();
    }
}
