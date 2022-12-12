"use strict";(self.webpackChunkpixi_ui=self.webpackChunkpixi_ui||[]).push([[41],{"./src/stories/slider/SliderGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Layout.ts"),_utils_storybook_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/storybook/argTypes.ts"),_Slider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Slider.ts"),_utils_storybook_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/storybook/resize.ts"),args={min:0,max:100,value:50,meshColor:"#35b600",fillColor:"#ff4545",borderColor:"#FFFFFF",backgroundColor:"#F1D583",fontColor:"#FFFFFF",width:450,height:35,radius:25,fontSize:20,border:3,handleBorder:3,showValue:!0,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Slider changed")},Single=function Single(_ref){var min=_ref.min,max=_ref.max,value=_ref.value,meshColor=_ref.meshColor,borderColor=_ref.borderColor,backgroundColor=_ref.backgroundColor,fillColor=_ref.fillColor,handleBorder=_ref.handleBorder,width=_ref.width,height=_ref.height,radius=_ref.radius,fontSize=_ref.fontSize,fontColor=_ref.fontColor,border=_ref.border,onChange=_ref.onChange,showValue=_ref.showValue,view=new _Layout__WEBPACK_IMPORTED_MODULE_2__.Ar({type:"vertical",elementsMargin:10});meshColor=Number(meshColor.replace("#","0x")),fillColor=Number(fillColor.replace("#","0x")),borderColor=Number(borderColor.replace("#","0x")),backgroundColor=Number(backgroundColor.replace("#","0x"));var bg=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius).beginFill(backgroundColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),fill=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(borderColor).drawRoundedRect(0,0,width,height,radius).beginFill(fillColor).drawRoundedRect(border,border,width-2*border,height-2*border,radius),slider=(new pixi_js__WEBPACK_IMPORTED_MODULE_0__.TCu).beginFill(borderColor).drawCircle(0,0,20+handleBorder).beginFill(meshColor).drawCircle(0,0,20).endFill(),singleSlider=new _Slider__WEBPACK_IMPORTED_MODULE_3__.i({bg,fill,slider,min,max,value,valueTextStyle:{fill:fontColor,fontSize},showValue});return singleSlider.onChange.connect((function(value){onChange("Slider changed > ".concat(value))})),view.addChild(singleSlider),{view,resize:function resize(){return(0,_utils_storybook_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics as PixiGraphics } from \"pixi.js\";\nimport { action } from '@storybook/addon-actions';\nimport { Layout } from \"../../Layout\";\nimport { argTypes, getDefaultArgs } from '../../utils/storybook/argTypes';\nimport { Slider } from \"../../Slider\";\nimport { centerElement } from '../../utils/storybook/resize';\n\nconst args = {\n    min: 0,\n    max: 100,\n    value: 50,\n    meshColor: '#35b600',\n    fillColor: '#ff4545',\n    borderColor: '#FFFFFF',\n    backgroundColor: '#F1D583',\n    fontColor: '#FFFFFF',\n    width: 450,\n    height: 35,\n    radius: 25,\n    fontSize: 20,\n    border: 3,\n    handleBorder: 3,\n    showValue: true,\n    onChange: action('Slider changed'),\n}\n\nexport const Single = ({\n    min,\n    max,\n    value,\n    meshColor,\n    borderColor,\n    backgroundColor,\n    fillColor,\n    handleBorder,\n    width,\n    height,\n    radius,\n    fontSize,\n    fontColor,\n    border,\n    onChange,\n    showValue,\n}: any) => {\n    const view = new Layout({ type: 'vertical', elementsMargin: 10 });\n\n    meshColor = Number(meshColor.replace('#', '0x'));\n    fillColor = Number(fillColor.replace('#', '0x'));\n    borderColor = Number(borderColor.replace('#', '0x'));\n    backgroundColor = Number(backgroundColor.replace('#', '0x'));\n\n    const bg = new PixiGraphics()\n        .beginFill(borderColor).drawRoundedRect(0, 0, width, height, radius)\n        .beginFill(backgroundColor).drawRoundedRect(border, border, width - border * 2, height - border * 2, radius);\n\n    const fill = new PixiGraphics()\n        .beginFill(borderColor).drawRoundedRect(0, 0, width, height, radius)\n        .beginFill(fillColor).drawRoundedRect(border, border, width - border * 2, height - border * 2, radius);\n\n    const slider = new PixiGraphics()\n        .beginFill(borderColor).drawCircle(0, 0, 20 + handleBorder)\n        .beginFill(meshColor).drawCircle(0, 0, 20)\n        .endFill();\n\n    const singleSlider = new Slider({\n        bg,\n        fill,\n        slider,\n        min,\n        max,\n        value,\n        valueTextStyle: {\n            fill: fontColor,\n            fontSize: fontSize,\n        },\n        showValue,\n    });\n\n    singleSlider.onChange.connect((value) => {\n        onChange(`Slider changed > ${value}`)\n    });\n\n    view.addChild(singleSlider);\n    \n    return { view, resize: () => centerElement(view)};\n};\n\nexport default {\n    title: 'UI components/Slider/Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};",locationsMap:{single:{startLoc:{col:22,line:27},endLoc:{col:1,line:86},startBody:{col:22,line:27},endBody:{col:1,line:86}}}}},title:"UI components/Slider/Graphics",argTypes:(0,_utils_storybook_argTypes__WEBPACK_IMPORTED_MODULE_5__.P)(args),args:(0,_utils_storybook_argTypes__WEBPACK_IMPORTED_MODULE_5__.V)(args)};var __namedExportsOrder=["Single"]},"./src/Layout.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}__webpack_require__.d(__webpack_exports__,{Ar:()=>Layout});var Layout=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Layout,_Container);var _super=_createSuper(Layout);function Layout(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Layout),function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"children",[]),_this.options=options,null!=options&&options.type&&(_this.type=options.type),null!=options&&options.children&&options.children.map((function(child){return _this.addChild(child)})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Layout,[{key:"onChildrenChange",value:function onChildrenChange(){var _this$options$horPadd,_this$options,_this$options$vertPad,_this$options2,_this$options$element,_this$options3,_this2=this,x=null!==(_this$options$horPadd=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.horPadding)&&void 0!==_this$options$horPadd?_this$options$horPadd:0,y=null!==(_this$options$vertPad=null===(_this$options2=this.options)||void 0===_this$options2?void 0:_this$options2.vertPadding)&&void 0!==_this$options$vertPad?_this$options$vertPad:0,elementsMargin=null!==(_this$options$element=null===(_this$options3=this.options)||void 0===_this$options3?void 0:_this$options3.elementsMargin)&&void 0!==_this$options$element?_this$options$element:0;this.children.forEach((function(child){var _this2$options$horPad,_this2$options;!_this2.type&&x+child.width>=_this2.parent.width?(y+=elementsMargin+child.height,x=null!==(_this2$options$horPad=null===(_this2$options=_this2.options)||void 0===_this2$options?void 0:_this2$options.horPadding)&&void 0!==_this2$options$horPad?_this2$options$horPad:0,child.x=x,child.y=y,_this2.h=y):(child.x=x,child.y=y);switch(_this2.type){case"horizontal":x+=elementsMargin+child.width,_this2.w=x,_this2.h=child.height;break;case"vertical":y+=elementsMargin+child.height,_this2.h=y,_this2.w=child.width;break;default:x+=elementsMargin+child.width,_this2.w=x}}))}}]),Layout}(__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs").W20)}}]);