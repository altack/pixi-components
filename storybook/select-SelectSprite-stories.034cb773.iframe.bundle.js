"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[701],{"./src/stories/select/SelectSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseSprite:()=>UseSprite,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_display__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/utils/argTypes.ts"),_Select__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Select.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_utils_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/utils/loader.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/color.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var args={dropDownHoverColor:"#A5E24D",fontColor:"#FFFFFF",fontSize:28,itemsAmount:100,onSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Item selected")},UseSprite=function UseSprite(_ref){var select,fontColor=_ref.fontColor,fontSize=_ref.fontSize,itemsAmount=_ref.itemsAmount,dropDownHoverColor=_ref.dropDownHoverColor,onSelect=_ref.onSelect,view=new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2;return(0,_utils_loader__WEBPACK_IMPORTED_MODULE_2__.M)(["select_closed.png","select_open.png"]).then((function(){var hoverColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_3__.Lq)(dropDownHoverColor);fontColor=(0,_utils_color__WEBPACK_IMPORTED_MODULE_3__.Lq)(fontColor);var textStyle=_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_4__.B),{},{fill:fontColor,fontSize}),items=function getItems(itemsAmount,text){for(var items=[],i=0;i<itemsAmount;i++)items.push("".concat(text," ").concat(i+1));return items}(itemsAmount,"Item");(select=new _Select__WEBPACK_IMPORTED_MODULE_5__.P({closedBG:"select_closed.png",openBG:"select_open.png",textStyle,items:{items,backgroundColor:"RGBA(0, 0, 0, 0.0001)",hoverColor,width:200,height:50,textStyle,radius:25},selectedTextOffset:{y:-13},scrollBox:{width:200,height:350,radius:30,offset:{y:-16,x:24}}})).y=10,select.onSelect.connect((function(_,text){onSelect({id:select.value,text})})),view.addChild(select),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__.w)(view,.5,0)})),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_6__.w)(view,.5,0)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Container } from '@pixi/display';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { Select } from '../../Select';\nimport { action } from '@storybook/addon-actions';\nimport { preload } from '../utils/loader';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { centerElement } from '../../utils/helpers/resize';\nimport type { StoryFn } from '@storybook/types';\nimport { getColor } from '../utils/color';\n\nconst args = {\n    dropDownHoverColor: '#A5E24D',\n    fontColor: '#FFFFFF',\n    fontSize: 28,\n    itemsAmount: 100,\n    onSelect: action('Item selected')\n};\n\nexport const UseSprite: StoryFn = ({ fontColor, fontSize, itemsAmount, dropDownHoverColor, onSelect }: any) =>\n{\n    const view = new Container();\n    const assets = [`select_closed.png`, `select_open.png`];\n\n    let select: Select;\n\n    preload(assets).then(() =>\n    {\n        const hoverColor = getColor(dropDownHoverColor);\n\n        fontColor = getColor(fontColor);\n        const textStyle = { ...defaultTextStyle, fill: fontColor, fontSize };\n\n        const items = getItems(itemsAmount, 'Item');\n\n        // Component usage !!!\n        // Important: in order scroll to work, you have to call update() method in your game loop.\n        select = new Select({\n            closedBG: `select_closed.png`,\n            openBG: `select_open.png`,\n            textStyle,\n            items: {\n                items,\n                backgroundColor: 'RGBA(0, 0, 0, 0.0001)',\n                hoverColor,\n                width: 200,\n                height: 50,\n                textStyle,\n                radius: 25\n            },\n            selectedTextOffset: {\n                y: -13\n            },\n            scrollBox: {\n                width: 200,\n                height: 350,\n                radius: 30,\n                offset: {\n                    y: -16,\n                    x: 24\n                }\n            }\n        });\n\n        select.y = 10;\n\n        select.onSelect.connect((_, text) =>\n        {\n            onSelect({\n                id: select.value,\n                text\n            });\n        });\n\n        view.addChild(select);\n\n        centerElement(view, 0.5, 0);\n    });\n\n    return {\n        view,\n        resize: () => centerElement(view, 0.5, 0)\n    };\n};\n\nfunction getItems(itemsAmount: number, text: string): string[]\n{\n    const items: string[] = [];\n\n    for (let i = 0; i < itemsAmount; i++)\n    {\n        items.push(`${text} ${i + 1}`);\n    }\n\n    return items;\n}\n\nexport default {\n    title: 'Components/Select/Use Sprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"use-sprite":{startLoc:{col:34,line:19},endLoc:{col:1,line:83},startBody:{col:34,line:19},endBody:{col:1,line:83}}}}},title:"Components/Select/Use Sprite",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_7__.V)(args)};var __namedExportsOrder=["UseSprite"]}}]);