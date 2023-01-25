import { Graphics } from '@pixi/graphics';
import { FancyButton } from '../../FancyButton';
import { action } from '@storybook/addon-actions';
import { argTypes, getDefaultArgs } from '../utils/argTypes';
import { centerView } from '../../utils/helpers/resize';
import { preloadAssets } from '../utils/loader';
import { Container } from '@pixi/display';
import { Sprite } from '@pixi/sprite';
import { MaskedFrame } from '../../MaskedFrame';

const args = {
    color: '#A5E24D',
    hoverColor: '#FEC230',
    pressedColor: '#FE6048',
    disabledColor: '#6E6E6E',
    width: 250,
    height: 250,
    padding: 10,
    radius: 200,
    iconOffsetX: 0,
    iconOffsetY: 0,
    defaultOffset: 0,
    hoverOffset: -1,
    pressedOffset: 5,
    disabledOffset: 0,
    animationDuration: 100,
    anchorX: 0.5,
    anchorY: 0.5,
    disabled: false,
    action: action('button Event:')
};

export const UseIcon = ({
    width,
    height,
    radius,
    color,
    hoverColor,
    pressedColor,
    disabledColor,
    disabled,
    padding,
    iconOffsetX,
    iconOffsetY,
    defaultOffset,
    hoverOffset,
    pressedOffset,
    disabledOffset,
    action,
    anchorX,
    anchorY,
    animationDuration
}: any) =>
{
    color = Number(color.replace('#', '0x'));
    hoverColor = Number(hoverColor.replace('#', '0x'));
    pressedColor = Number(pressedColor.replace('#', '0x'));
    disabledColor = Number(disabledColor.replace('#', '0x'));

    const view = new Container();

    const assets = [`avatar-01.png`];

    preloadAssets(assets).then(() =>
    {
        const target = Sprite.from(`avatar-01.png`);

        const icon = new MaskedFrame({
            target,
            mask: new Graphics().beginFill(0x000000).drawCircle(target.width / 2, target.height / 2, target.width / 2),
            borderWidth: 5,
            borderColor: 0xffffff
        });

        // Component usage !!!
        const button = new FancyButton({
            defaultView: new Graphics().beginFill(color).drawRoundedRect(0, 0, width, height, radius),
            hoverView: new Graphics().beginFill(hoverColor).drawRoundedRect(0, 0, width, height, radius),
            pressedView: new Graphics().beginFill(pressedColor).drawRoundedRect(0, 0, width, height, radius),
            disabledView: new Graphics().beginFill(disabledColor).drawRoundedRect(0, 0, width, height, radius),
            icon,
            padding,
            offset: {
                default: { y: defaultOffset },
                disabled: { y: disabledOffset }
            },
            iconOffset: {
                x: iconOffsetX,
                y: iconOffsetY
            },
            anchorX,
            anchorY,
            animations: {
                hover: {
                    props: {
                        scale: { x: 1.03, y: 1.03 },
                        y: hoverOffset
                    },
                    duration: animationDuration
                },
                pressed: {
                    props: {
                        scale: { x: 0.9, y: 0.9 },
                        y: pressedOffset
                    },
                    duration: animationDuration
                }
            }
        });

        if (disabled)
        {
            button.enabled = false;
        }

        button.onPress.connect(() => action('onPress'));
        button.onDown.connect(() => action('onDown'));
        button.onUp.connect(() => action('onUp'));
        button.onHover.connect(() => action('onHover'));
        button.onOut.connect(() => action('onOut'));
        button.onUpOut.connect(() => action('onUpOut'));

        view.addChild(button);

        centerView(view);
    });

    return { view, resize: () => centerView(view) };
};

export default {
    title: 'Components/FancyButton/Use Icon',
    argTypes: argTypes(args),
    args: getDefaultArgs(args)
};