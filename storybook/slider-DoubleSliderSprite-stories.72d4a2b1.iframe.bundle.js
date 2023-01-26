/*! For license information please see slider-DoubleSliderSprite-stories.72d4a2b1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[329],{"./src/stories/slider/DoubleSliderSprite.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Double:()=>Double,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_display__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/utils/argTypes.ts"),_DoubleSlider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/DoubleSlider.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_loader__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/utils/loader.ts"),args={fontColor:"#FFFFFF",min:0,max:100,value1:15,value2:85,fontSize:20,showValue:!0,showFill:!0,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("Slider")},Double=function Double(_ref){var min=_ref.min,max=_ref.max,value1=_ref.value1,value2=_ref.value2,fontSize=_ref.fontSize,fontColor=_ref.fontColor,showValue=_ref.showValue,onChange=_ref.onChange,showFill=_ref.showFill,view=new _pixi_display__WEBPACK_IMPORTED_MODULE_0__.W2;return(0,_utils_loader__WEBPACK_IMPORTED_MODULE_2__.z)(["slider_bg.png","slider.png","slider_progress.png"]).then((function(){var doubleSlider=new _DoubleSlider__WEBPACK_IMPORTED_MODULE_3__.D({bg:"slider_bg.png",fill:showFill?"slider_progress.png":"",slider1:"slider.png",slider2:"slider.png",min,max,valueTextStyle:{fill:fontColor,fontSize},showValue,valueTextOffset:{y:-40},fillOffset:{x:-1,y:-2}});doubleSlider.value1=value1,doubleSlider.value2=value2,doubleSlider.onChange.connect((function(value1,value2){onChange("".concat(value1," - ").concat(value2))})),view.addChild(doubleSlider),(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view)})),{view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_4__.w)(view)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Container } from '@pixi/display';\nimport { action } from '@storybook/addon-actions';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { DoubleSlider } from '../../DoubleSlider';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { preloadAssets } from '../utils/loader';\nimport type { StoryFn } from '@storybook/types';\n\nconst args = {\n    fontColor: '#FFFFFF',\n    min: 0,\n    max: 100,\n    value1: 15,\n    value2: 85,\n    fontSize: 20,\n    showValue: true,\n    showFill: true,\n    onChange: action('Slider')\n};\n\nexport const Double: StoryFn = ({ min, max, value1, value2, fontSize, fontColor, showValue, onChange, showFill }: any) =>\n{\n    const view = new Container();\n    const assets = ['slider_bg.png', 'slider.png', 'slider_progress.png'];\n\n    preloadAssets(assets).then(() =>\n    {\n    // Component usage !!!\n        const doubleSlider = new DoubleSlider({\n            bg: 'slider_bg.png',\n            fill: showFill ? 'slider_progress.png' : '',\n            slider1: 'slider.png',\n            slider2: 'slider.png',\n            min,\n            max,\n            valueTextStyle: {\n                fill: fontColor,\n                fontSize\n            },\n            showValue,\n            valueTextOffset: {\n                y: -40\n            },\n            fillOffset: {\n                x: -1,\n                y: -2\n            }\n        });\n\n        doubleSlider.value1 = value1;\n        doubleSlider.value2 = value2;\n\n        doubleSlider.onChange.connect((value1, value2) =>\n        {\n            onChange(`${value1} - ${value2}`);\n        });\n\n        view.addChild(doubleSlider);\n\n        centerElement(view);\n    });\n\n    return {\n        view,\n        resize: () => centerElement(view)\n    };\n};\n\nexport default {\n    title: 'Components/Slider/Sprite',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{double:{startLoc:{col:31,line:21},endLoc:{col:1,line:67},startBody:{col:31,line:21},endBody:{col:1,line:67}}}}},title:"Components/Slider/Sprite",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_5__.V)(args)};var __namedExportsOrder=["Double"]},"./src/DoubleSlider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DoubleSlider});var _SliderBase__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SliderBase.ts"),typed_signals__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=_superPropBase(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var DoubleSlider=function(_SliderBase){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(DoubleSlider,_SliderBase);var _super=_createSuper(DoubleSlider);function DoubleSlider(options){var _options$value,_options$value2,_this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DoubleSlider),_defineProperty(_assertThisInitialized(_this=_super.call(this,options)),"onChange",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.MZ),_defineProperty(_assertThisInitialized(_this),"onUpdate",new typed_signals__WEBPACK_IMPORTED_MODULE_0__.MZ),_this.options=options,_this.value2=null!==(_options$value=options.value2)&&void 0!==_options$value?_options$value:_this.max,_this.value1=null!==(_options$value2=options.value1)&&void 0!==_options$value2?_options$value2:_this.min,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DoubleSlider,[{key:"value1",get:function get(){return this._value1},set:function set(value1){var _this$onUpdate;if(value1!==this._value1){value1<this.min&&(value1=this.min),value1>this._value2&&(value1=this._value2),this._value1=value1,this.updateProgress();var progress=(this.max-this.min)/100*value1;if(this.slider1.x=(this.bg.width-this.slider1.width)/100*progress,this.options.showValue){var _this$options$valueTe,_this$options$valueTe2,_this$options$valueTe3,_this$options$valueTe4;this.value1Text.text="".concat(value1);var sliderPosX=this.slider1.x+this.slider1.width/2,sliderPosY=this.slider1.y;this.value1Text.x=sliderPosX+(null!==(_this$options$valueTe=null===(_this$options$valueTe2=this.options.valueTextOffset)||void 0===_this$options$valueTe2?void 0:_this$options$valueTe2.x)&&void 0!==_this$options$valueTe?_this$options$valueTe:0),this.value1Text.y=sliderPosY+(null!==(_this$options$valueTe3=null===(_this$options$valueTe4=this.options.valueTextOffset)||void 0===_this$options$valueTe4?void 0:_this$options$valueTe4.y)&&void 0!==_this$options$valueTe3?_this$options$valueTe3:0)}null===(_this$onUpdate=this.onUpdate)||void 0===_this$onUpdate||_this$onUpdate.emit(this.value1,this.value2)}}},{key:"value2",get:function get(){return this._value2},set:function set(value2){var _this$onUpdate2;if(value2!==this._value2){value2<this._value1&&(value2=this._value1),value2>this.max&&(value2=this.max),this._value2=value2,this.updateProgress();var progress=(this.max-this.min)/100*value2;if(this.slider2.x=(this.bg.width-this.slider2.width)/100*progress,this.options.showValue){var _this$options$valueTe5,_this$options$valueTe6,_this$options$valueTe7,_this$options$valueTe8;this.value2Text.text="".concat(value2);var sliderPosX=this.slider2.x+this.slider2.width/2,sliderPosY=this.slider2.y;this.value2Text.x=sliderPosX+(null!==(_this$options$valueTe5=null===(_this$options$valueTe6=this.options.valueTextOffset)||void 0===_this$options$valueTe6?void 0:_this$options$valueTe6.x)&&void 0!==_this$options$valueTe5?_this$options$valueTe5:0),this.value2Text.y=sliderPosY+(null!==(_this$options$valueTe7=null===(_this$options$valueTe8=this.options.valueTextOffset)||void 0===_this$options$valueTe8?void 0:_this$options$valueTe8.y)&&void 0!==_this$options$valueTe7?_this$options$valueTe7:0)}null===(_this$onUpdate2=this.onUpdate)||void 0===_this$onUpdate2||_this$onUpdate2.emit(this.value1,this.value2)}}},{key:"update",value:function update(event){if(this.dragging){var x=event.currentTarget.parent.worldTransform.applyInverse(event.global).x,slider1Dist=Math.abs(x-this.slider1.x-this.slider1.width),slider2Dist=Math.abs(x-this.slider2.x);this.activeValue||(this.activeValue=slider1Dist<slider2Dist?"value1":"value2");var progress=this.validate(x/this.bg.width*100);"value1"===this.activeValue?this.value1=(this.max-this.min)/100*progress:this.value2=(this.max-this.min)/100*progress}}},{key:"endUpdate",value:function endUpdate(){_get(_getPrototypeOf(DoubleSlider.prototype),"endUpdate",this).call(this),this.activeValue=null}},{key:"updateProgress",value:function updateProgress(){this.progressStart=(this.max-this.min)/100*this._value1,this.progress=(this.max-this.min)/100*this._value2}}]),DoubleSlider}(_SliderBase__WEBPACK_IMPORTED_MODULE_1__.V)},"./src/stories/utils/loader.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>preloadAssets});var _pixi_assets__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/assets/lib/index.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==_typeof(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName,nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function preloadAssets(_x){return _preloadAssets.apply(this,arguments)}function _preloadAssets(){return(_preloadAssets=_asyncToGenerator(_regeneratorRuntime().mark((function _callee(assets){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_pixi_assets__WEBPACK_IMPORTED_MODULE_0__.de.load(assets);case 2:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}}}]);