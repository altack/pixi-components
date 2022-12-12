"use strict";(self.webpackChunkpixi_ui=self.webpackChunkpixi_ui||[]).push([[260],{"./src/stories/slider/SliderSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_utils_storybook_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/storybook/argTypes.ts"),_Slider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Slider.ts"),_utils_storybook_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/storybook/resize.ts"),_utils_storybook_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/storybook/loader.ts"),pixi_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),args={min:0,max:100,value:50,fontSize:20,fontColor:"#FFFFFF",showValue:!1,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("Slider changed")},Single=function Single(_ref){var min=_ref.min,max=_ref.max,value=_ref.value,fontSize=_ref.fontSize,fontColor=_ref.fontColor,onChange=_ref.onChange,showValue=_ref.showValue,view=new pixi_js__WEBPACK_IMPORTED_MODULE_1__.W20;return(0,_utils_storybook_loader__WEBPACK_IMPORTED_MODULE_2__.z)(["slider_bg.png","slider.png"]).then((function(){var singleSlider=new _Slider__WEBPACK_IMPORTED_MODULE_3__.i({bg:"slider_bg.png",slider:"slider.png",min,max,value,valueTextStyle:{fill:fontColor,fontSize},showValue,valueTextOffset:{y:-40}});singleSlider.onChange.connect((function(value){onChange("Slider changed > ".concat(value))})),view.addChild(singleSlider),(0,_utils_storybook_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view)})),{view,resize:function resize(){return(0,_utils_storybook_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { action } from '@storybook/addon-actions';\nimport { argTypes, getDefaultArgs } from '../../utils/storybook/argTypes';\nimport { Slider } from \"../../Slider\";\nimport { centerElement } from '../../utils/storybook/resize';\nimport { preloadAssets } from '../../utils/storybook/loader';\nimport { Container } from 'pixi.js';\n\nconst args = {\n    min: 0,\n    max: 100,\n    value: 50,\n    fontSize: 20,\n    fontColor: '#FFFFFF',\n    showValue: false,\n    onChange: action('Slider changed'),\n}\n\nexport const Single = ({\n    min,\n    max,\n    value,\n    fontSize,\n    fontColor,\n    onChange,\n    showValue,\n}: any) => {\n    const view = new Container();\n\n    const assets = [\n        'slider_bg.png',\n        'slider.png',\n    ];\n\n    preloadAssets(assets).then(() => {\n        // Component usage !!!\n        const singleSlider = new Slider({\n            bg: 'slider_bg.png',\n            slider: 'slider.png',\n            min,\n            max,\n            value,\n            valueTextStyle: {\n                fill: fontColor,\n                fontSize,\n            },\n            showValue,\n            valueTextOffset: {\n                y: -40,\n            }\n        });\n\n        singleSlider.onChange.connect((value) => {\n            onChange(`Slider changed > ${value}`)\n        });\n\n        view.addChild(singleSlider);\n\n        centerElement(view);\n    });\n\n    return { view, resize: () => centerElement(view)};\n};\n\nexport default {\n    title: 'UI components/Slider/Sprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};",locationsMap:{single:{startLoc:{col:22,line:18},endLoc:{col:1,line:62},startBody:{col:22,line:18},endBody:{col:1,line:62}}}}},title:"UI components/Slider/Sprite",argTypes:(0,_utils_storybook_argTypes__WEBPACK_IMPORTED_MODULE_5__.P)(args),args:(0,_utils_storybook_argTypes__WEBPACK_IMPORTED_MODULE_5__.V)(args)};var __namedExportsOrder=["Single"]},"./src/utils/storybook/loader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>preloadAssets});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs");function preloadAssets(assets){return new Promise((function(resolve){var loader=pixi_js__WEBPACK_IMPORTED_MODULE_0__.aNw.shared;assets.forEach((function(asset){!loader.resources[asset]&&loader.add(asset)})),loader.load((function(){resolve()}))}))}}}]);