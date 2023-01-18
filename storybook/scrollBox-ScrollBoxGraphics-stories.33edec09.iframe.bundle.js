"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[204],{"./src/stories/scrollBox/ScrollBoxGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Graphics:()=>Graphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/utils/argTypes.ts"),_ScrollBox__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/ScrollBox.ts"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Button.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/styles.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/helpers/resize.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var args={type:["vertical","horizontal"],fontColor:"#000000",backgroundColor:"#F5E3A9",width:320,height:420,radius:20,elementsMargin:10,elementsPadding:10,elementsWidth:300,elementsHeight:80,itemsCount:100,onPress:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.aD)("Button was pressed > ")},Graphics=function Graphics(_ref,context){var type=_ref.type,fontColor=_ref.fontColor,elementsMargin=_ref.elementsMargin,elementsPadding=_ref.elementsPadding,elementsWidth=_ref.elementsWidth,elementsHeight=_ref.elementsHeight,width=_ref.width,height=_ref.height,radius=_ref.radius,itemsCount=_ref.itemsCount,backgroundColor=_ref.backgroundColor,onPress=_ref.onPress;context.parameters.pixi.app.renderer.events.rootBoundary.moveOnAll=!0;var view=new _pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2;backgroundColor=Number(backgroundColor.replace("#","0x")),fontColor=Number(fontColor.replace("#","0x"));for(var items=[],_loop=function _loop(i){var button=new _Button__WEBPACK_IMPORTED_MODULE_4__.z({view:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(10871373).drawRoundedRect(0,0,elementsWidth,elementsHeight,radius),hoverView:(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(16695856).drawRoundedRect(0,0,elementsWidth,elementsHeight,radius),textView:new _pixi_text__WEBPACK_IMPORTED_MODULE_2__.xv("Item ".concat(i+1),_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__.B),{},{fill:fontColor||_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_5__.B.fill}))});button.onPress.connect((function(){return onPress(i+1)})),items.push(button)},i=0;i<itemsCount;i++)_loop(i);var scrollBox=new _ScrollBox__WEBPACK_IMPORTED_MODULE_6__.D({background:backgroundColor,type,elementsMargin,width,height,radius,padding:elementsPadding});return items.forEach((function(item){return scrollBox.addItem(item)})),view.addChild(scrollBox),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics as PixiGraphics } from '@pixi/graphics';\nimport { Container } from '@pixi/display';\nimport { Text } from '@pixi/text';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { ScrollBox } from '../../ScrollBox';\nimport { Button } from '../../Button';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { action } from '@storybook/addon-actions';\nimport { centerElement } from '../../utils/helpers/resize';\nimport type { StoryFn } from '@storybook/types';\n\nconst args = {\n    type: ['vertical', 'horizontal'],\n    fontColor: '#000000',\n    backgroundColor: '#F5E3A9',\n    width: 320,\n    height: 420,\n    radius: 20,\n    elementsMargin: 10,\n    elementsPadding: 10,\n    elementsWidth: 300,\n    elementsHeight: 80,\n    itemsCount: 100,\n    onPress: action('Button was pressed > '),\n};\n\nexport const Graphics: StoryFn = ({\n    type,\n    fontColor,\n    elementsMargin,\n    elementsPadding,\n    elementsWidth,\n    elementsHeight,\n    width,\n    height,\n    radius,\n    itemsCount,\n    backgroundColor,\n    onPress,\n}: any, context) =>\n{\n    const { app } = context.parameters.pixi;\n\n    app.renderer.events.rootBoundary.moveOnAll = true;\n    const view = new Container();\n\n    backgroundColor = Number(backgroundColor.replace('#', '0x'));\n    fontColor = Number(fontColor.replace('#', '0x'));\n\n    const items = [];\n\n    for (let i = 0; i < itemsCount; i++)\n    {\n        const button = new Button({\n            view: new PixiGraphics()\n                .beginFill(0xa5e24d)\n                .drawRoundedRect(0, 0, elementsWidth, elementsHeight, radius),\n            hoverView: new PixiGraphics()\n                .beginFill(0xfec230)\n                .drawRoundedRect(0, 0, elementsWidth, elementsHeight, radius),\n            textView: new Text(`Item ${i + 1}`, {\n                ...defaultTextStyle,\n                fill: fontColor || defaultTextStyle.fill,\n            }),\n        });\n\n        button.onPress.connect(() => onPress(i + 1));\n\n        items.push(button);\n    }\n\n    // Component usage !!!\n    const scrollBox = new ScrollBox({\n        background: backgroundColor,\n        type,\n        elementsMargin,\n        width,\n        height,\n        radius,\n        padding: elementsPadding,\n    });\n\n    items.forEach((item) => scrollBox.addItem(item));\n\n    view.addChild(scrollBox);\n\n    return {\n        view,\n        resize: () => centerElement(view)\n    };\n};\n\nexport default {\n    title: 'UI components/ScrollBox/Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{graphics:{startLoc:{col:33,line:27},endLoc:{col:1,line:91},startBody:{col:33,line:27},endBody:{col:1,line:91}}}}},title:"UI components/ScrollBox/Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__.V)(args)};var __namedExportsOrder=["Graphics"]}}]);