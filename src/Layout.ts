import { Container } from 'pixi.js';

export type LayoutType = 'horizontal' | 'vertical';

export type LayoutOptions = {
    elementsMargin?: number;
    children?: Container[];
    vertPadding?: number;
    horPadding?: number;
};

/**
 * Container based element for arranging pixi containers inside it basing on their sizes
 *
 * @example
 * ```
 * const layout = new Layout({
 *    type: 'horizontal',
 *    elementsMargin: 10,
 *    children: [
        new Graphics().beginFill(0x000000).drawRect(0, 0, 50, 50),
        new Graphics().beginFill(0xFFFFFF).drawRect(0, 0, 100, 100),
 *    ],
 * });
 *
 * layout.addChild(new Graphics().beginFill(0x000000).drawRect(0, 0, 50, 50));
 * ```
 */

// TODO: replace this with pixi-layout component

export class Layout extends Container {
    public view: Container;
    public type: LayoutType;

    public w: number;
    public h: number;

    public override readonly children: Container[] = [];

    constructor(
        private readonly options?: { type?: LayoutType } & LayoutOptions,
    ) {
        super();

        if (options?.type) {
            this.type = options.type;
        }

        if (options?.children) {
            options.children.map((child) => this.addChild(child));
        }
    }

    protected override onChildrenChange() {
        let x = this.options?.horPadding ?? 0;
        let y = this.options?.vertPadding ?? 0;

        const elementsMargin = this.options?.elementsMargin ?? 0;

        this.children.forEach((child) => {
            if (!this.type && x + child.width >= this.parent.width) {
                y += elementsMargin + child.height;
                x = this.options?.horPadding ?? 0;

                child.x = x;
                child.y = y;

                this.h = y;
            } else {
                child.x = x;
                child.y = y;
            }

            switch (this.type) {
                case 'horizontal':
                    x += elementsMargin + child.width;
                    this.w = x;
                    this.h = child.height;
                    break;

                case 'vertical':
                    y += elementsMargin + child.height;
                    this.h = y;
                    this.w = child.width;
                    break;

                default:
                    x += elementsMargin + child.width;
                    this.w = x;
                    break;
            }
        });
    }
}

/**
 * Helper to generate horizontal Layout for arranging pixi containers horizontally basing on their sizes
 *
 * @example
 * ```
 * row(15, // margins between elements
 *     logo, // pregenerated Layout
 *     menu, // pregenerated Layout
 *     loginForm // pregenerated Layout
 * );
 * ```
 */
export function row(elementsMargin: number, ...params: Container[]): Layout {
    const children: Container[] = [];

    params.forEach((param) => children.push(param));

    return new Layout({
        type: 'horizontal',
        elementsMargin,
        children,
    });
}

/**
 * Helper to generate vertical Layout for arranging pixi containers vertically basing on their sizes
 *
 * @example
 * ```
 * col(15, // margins between elements
 *     logo, // pregenerated Layout
 *     menu, // pregenerated Layout
 *     loginForm // pregenerated Layout
 * );
 * ```
 */
export function col(elementsMargin: number, ...params: Container[]): Layout {
    const children: Container[] = [];

    params.forEach((param) => children.push(param));

    return new Layout({
        type: 'vertical',
        elementsMargin,
        children,
    });
}