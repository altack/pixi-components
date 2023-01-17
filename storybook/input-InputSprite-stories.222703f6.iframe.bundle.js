/*! For license information please see input-InputSprite-stories.222703f6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[786],{"./src/stories/input/InputSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sprite:()=>Sprite,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_pixi_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Layout.ts"),_Input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Input.ts"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/utils/helpers/styles.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/utils/loader.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/utils/helpers/resize.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var args={text:"",placeholder:"Enter text",align:["center","left","right"],textColor:"#000000",maxLength:100,fontSize:24,padding:5,count:1,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("Input: ")},Sprite=function Sprite(_ref){var text=_ref.text,count=_ref.count,padding=_ref.padding,textColor=_ref.textColor,fontSize=_ref.fontSize,maxLength=_ref.maxLength,align=_ref.align,placeholder=_ref.placeholder,onChange=_ref.onChange,view=new _Layout__WEBPACK_IMPORTED_MODULE_3__.Ar({type:"vertical",elementsMargin:10});return(0,_utils_loader__WEBPACK_IMPORTED_MODULE_4__.z)(["input.png"]).then((function(){for(var _loop=function _loop(){var input=new _Input__WEBPACK_IMPORTED_MODULE_5__.I({bg:new _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.j(_pixi_core__WEBPACK_IMPORTED_MODULE_1__.xE.from("input.png")),padding,textStyle:_objectSpread(_objectSpread({},_utils_helpers_styles__WEBPACK_IMPORTED_MODULE_6__.B),{},{fill:textColor,fontSize}),maxLength,align,placeholder,value:text});input.onChange.connect((function(){return onChange(input.value)})),view.addChild(input)},i=0;i<count;i++)_loop();(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__.w)(view)})),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_7__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Sprite as PixiSprite } from '@pixi/sprite';\nimport { Texture } from '@pixi/core';\nimport { action } from '@storybook/addon-actions';\nimport { Layout } from '../../Layout';\nimport { Input } from '../../Input';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { defaultTextStyle } from '../../utils/helpers/styles';\nimport { preloadAssets } from '../utils/loader';\nimport { centerElement } from '../../utils/helpers/resize';\n\nconst args = {\n    text: '',\n    placeholder: 'Enter text',\n    align: ['center', 'left', 'right'],\n    textColor: '#000000',\n    maxLength: 100,\n    fontSize: 24,\n    padding: 5,\n    count: 1,\n    onChange: action('Input: '),\n};\n\nexport const Sprite = ({\n    text,\n    count,\n    padding,\n    textColor,\n    fontSize,\n    maxLength,\n    align,\n    placeholder,\n    onChange,\n}: any) =>\n{\n    const view = new Layout({ type: 'vertical', elementsMargin: 10 });\n\n    const assets = [`input.png`];\n\n    preloadAssets(assets).then(() =>\n    {\n        for (let i = 0; i < count; i++)\n        {\n            // Component usage\n            const input = new Input({\n                bg: new PixiSprite(Texture.from('input.png')),\n                padding,\n                textStyle: {\n                    ...defaultTextStyle,\n                    fill: textColor,\n                    fontSize,\n                },\n                maxLength,\n                align,\n                placeholder,\n                value: text,\n            });\n\n            input.onChange.connect(() => onChange(input.value));\n\n            view.addChild(input);\n        }\n\n        centerElement(view);\n    });\n\n    return { view, resize: () => centerElement(view) };\n};\n\nexport default {\n    title: 'UI components/Input/Sprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args),\n};\n",locationsMap:{sprite:{startLoc:{col:22,line:23},endLoc:{col:1,line:67},startBody:{col:22,line:23},endBody:{col:1,line:67}}}}},title:"UI components/Input/Sprite",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_8__.V)(args)};var __namedExportsOrder=["Sprite"]},"./src/Input.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _pixi_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),_pixi_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_pixi_graphics__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_sprite__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var Input=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Input,_Container);var _super=_createSuper(Input);function Input(options){var _options$textStyle,_options$value,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Input),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"editing",!1),_defineProperty(_assertThisInitialized(_this),"tick",0),_defineProperty(_assertThisInitialized(_this),"activation",!1),_this.options=options,_this.bg="string"==typeof options.bg?new _pixi_sprite__WEBPACK_IMPORTED_MODULE_3__.j(_pixi_core__WEBPACK_IMPORTED_MODULE_0__.xE.from(options.bg)):options.bg,_this.bg.cursor="text",_this.bg.interactive=!0;var defaultTextStyle={fill:0,align:"center"},textStyle=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.pn(null!==(_options$textStyle=options.textStyle)&&void 0!==_options$textStyle?_options$textStyle:defaultTextStyle);if(_this.inputField=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.xv("",textStyle),_this.inputMask=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_2__.TC).beginFill(16777215).drawRect(_this.padding,_this.padding,_this.bg.width-2*_this.padding,_this.bg.height-2*_this.padding),_this._cursor=new _pixi_sprite__WEBPACK_IMPORTED_MODULE_3__.j(_pixi_core__WEBPACK_IMPORTED_MODULE_0__.xE.WHITE),_this._cursor.tint=Number(options.textStyle.fill)||0,_this._cursor.anchor.set(.5),_this._cursor.width=2,_this._cursor.height=.8*_this.inputField.height,_this._cursor.alpha=0,_this.inputField.mask=_this.inputMask,_this._cursor.mask=_this.inputMask,_this.placeholder=new _pixi_text__WEBPACK_IMPORTED_MODULE_4__.xv(options.placeholder,null!=textStyle?textStyle:defaultTextStyle),_this.placeholder.visible=!!options.placeholder,_this.value=null!==(_options$value=options.value)&&void 0!==_options$value?_options$value:"",_this.addChild(_this.bg,_this.inputField,_this.placeholder,_this._cursor,_this.inputMask),_this.align(),_this.cursor="text",_this.interactive=!0,_this.on("pointertap",(function(){return _this.activation=!0})),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any){window.addEventListener("touchstart",(function(){return _this.handleActivation()}));var keyboard=document.getElementById("v-keyboard");keyboard||(keyboard=document.createElement("input"),document.body.appendChild(keyboard),keyboard.setAttribute("id","v-keyboard"),keyboard.style.opacity="0"),keyboard.oninput=function(){var value=keyboard.value,maxLength=_this.options.maxLength;maxLength&&value.length>_this.options.maxLength&&(value=value.substring(0,maxLength),keyboard.value=value),_this.value=value,_this.onChange.emit(_this.value)}}else window.addEventListener("click",(function(){_this.handleActivation(),_this.onEnter.emit(_this.value)})),window.addEventListener("keydown",(function(e){var key=e.key;"Backspace"===key?_this._delete():"Escape"===key||"Enter"===key?(_this.stopEditing(),_this.onEnter.emit(_this.value)):1===key.length&&_this._add(key)}));return _this.onEnter=new typed_signals__WEBPACK_IMPORTED_MODULE_5__.MZ,_this.onChange=new typed_signals__WEBPACK_IMPORTED_MODULE_5__.MZ,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Input,[{key:"_add",value:function _add(key){this.editing&&(this.options.maxLength&&this.value.length>=this.options.maxLength||(this.value=this.value+key,this.onChange.emit(this.value)))}},{key:"_delete",value:function _delete(){if(this.editing&&0!==this.value.length){var array=this.value.split("");array.pop(),this.value=array.join(""),this.onChange.emit(this.value)}}},{key:"_startEditing",value:function _startEditing(){if(this.tick=0,this.editing=!0,this.placeholder.visible=!1,this._cursor.alpha=1,_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any){var keyboard=document.getElementById("v-keyboard");keyboard.focus(),keyboard.click(),keyboard.value=this.value}this.align()}},{key:"handleActivation",value:function handleActivation(){this.stopEditing(),this.activation&&(this._startEditing(),this.activation=!1)}},{key:"stopEditing",value:function stopEditing(){var _document$getElementB;this._cursor.alpha=0,this.editing=!1,""===this.inputField.text&&(this.placeholder.visible=!0),0===this.value.length&&(this.placeholder.visible=!0),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any&&(null===(_document$getElementB=document.getElementById("v-keyboard"))||void 0===_document$getElementB||_document$getElementB.blur()),this.align()}},{key:"update",value:function update(dt){this.editing&&(this.tick+=.1*dt,this._cursor.alpha=Math.round(.5*Math.sin(this.tick)+.5))}},{key:"align",value:function align(){var align=this.getAlign();this.inputField.anchor.set(align,.5),this.inputField.x=this.bg.width*align+(1===align?-this.padding:this.padding),this.inputField.y=this.bg.height/2,this.placeholder.anchor.set(align,.5),this.placeholder.x=this.bg.width*align+(1===align?-this.padding:this.padding),this.placeholder.y=this.bg.height/2,this._cursor.x=this.getCursorPosX(),this._cursor.y=this.inputField.y}},{key:"padding",get:function get(){return 0|this.options.padding}},{key:"getAlign",value:function getAlign(){var maxWidth=.95*this.bg.width;if(this.inputField.width+3*this.padding>maxWidth)return this.editing?1:0;switch(this.options.align){case"left":default:return 0;case"center":return.5;case"right":return 1}}},{key:"getCursorPosX",value:function getCursorPosX(){switch(this.getAlign()){case 0:return this.inputField.x+this.inputField.width;case.5:return this.inputField.x+.5*this.inputField.width;case 1:return this.inputField.x;default:return 0}}},{key:"value",get:function get(){return this.inputField.text},set:function set(text){this.inputField.text=text,0!==text.length?this.placeholder.visible=!1:this.placeholder.visible=!this.editing,this.align()}}]),Input}(_pixi_display__WEBPACK_IMPORTED_MODULE_1__.W2)},"./src/stories/utils/loader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>preloadAssets});var _pixi_assets__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/assets/lib/index.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function preloadAssets(_x){return _preloadAssets.apply(this,arguments)}function _preloadAssets(){return(_preloadAssets=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(assets){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_pixi_assets__WEBPACK_IMPORTED_MODULE_0__.de.load(assets);case 2:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>defaultTextStyle});var defaultTextStyle=new(__webpack_require__("./node_modules/@pixi/text/lib/index.mjs").pn)({fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:!0,dropShadowAlpha:.5,dropShadowDistance:0,dropShadowBlur:3})}}]);