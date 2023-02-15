(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[255],{"./node_modules/@storybook/addon-actions/dist/chunk-3CDXZIO2.mjs":(module,__unused_webpack_exports,__webpack_require__)=>{(module=__webpack_require__.nmd(module))&&module.hot},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_WLCP77WC_action});__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-3CDXZIO2.mjs");var v4=__webpack_require__("./node_modules/uuid-browser/v4.js"),v4_default=__webpack_require__.n(v4),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),chunk_WLCP77WC_config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if(e=a,Boolean("object"==typeof e&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist)){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a};function chunk_WLCP77WC_action(name,options={}){let actionOptions={...chunk_WLCP77WC_config,...options},handler=function(...args){let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=v4_default()(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./src/stories/button/ButtonGraphics.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UseGraphics:()=>UseGraphics,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),_pixi_text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs"),_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Button.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/utils/argTypes.ts"),_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/helpers/resize.ts"),_utils_color__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/utils/color.ts"),args={color:"#A5E24D",size:150,radius:150,disabled:!1,action:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("Button")},UseGraphics=function UseGraphics(_ref){var size=_ref.size,color=_ref.color,disabled=_ref.disabled,radius=_ref.radius,action=_ref.action;color=(0,_utils_color__WEBPACK_IMPORTED_MODULE_3__.Lq)(color);var buttonView=(new _pixi_graphics__WEBPACK_IMPORTED_MODULE_0__.TC).beginFill(color).drawRoundedRect(0,0,size,size,radius),text=new _pixi_text__WEBPACK_IMPORTED_MODULE_1__.xv("🤙",{fontSize:70});text.anchor.set(.5),text.x=buttonView.width/2,text.y=buttonView.height/2,buttonView.addChild(text);var button=new _Button__WEBPACK_IMPORTED_MODULE_4__.z(buttonView);return button.enabled=!disabled,button.onPress.connect((function(){return action("onPress")})),button.onDown.connect((function(){return action("onDown")})),button.onUp.connect((function(){return action("onUp")})),button.onHover.connect((function(){return action("onHover")})),button.onOut.connect((function(){return action("onOut")})),button.onUpOut.connect((function(){return action("onUpOut")})),{view:button.view,resize:function resize(){return(0,_utils_helpers_resize__WEBPACK_IMPORTED_MODULE_5__.w)(buttonView)}}};const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:"import { Graphics } from '@pixi/graphics';\nimport { Text } from '@pixi/text';\nimport { Button } from '../../Button';\nimport { action } from '@storybook/addon-actions';\nimport { argTypes, getDefaultArgs } from '../utils/argTypes';\nimport { centerElement } from '../../utils/helpers/resize';\nimport { getColor } from '../utils/color';\n\nconst args = {\n    color: '#A5E24D',\n    size: 150,\n    radius: 150,\n    disabled: false,\n    action: action('Button')\n};\n\nexport const UseGraphics = ({ size, color, disabled, radius, action }: any) =>\n{\n    color = getColor(color);\n\n    const buttonView = new Graphics().beginFill(color).drawRoundedRect(0, 0, size, size, radius);\n    const text = new Text('🤙', { fontSize: 70 });\n\n    text.anchor.set(0.5);\n    text.x = buttonView.width / 2;\n    text.y = buttonView.height / 2;\n\n    buttonView.addChild(text);\n\n    // Component usage !!!\n    const button = new Button(buttonView);\n\n    button.enabled = !disabled;\n\n    button.onPress.connect(() => action('onPress'));\n    button.onDown.connect(() => action('onDown'));\n    button.onUp.connect(() => action('onUp'));\n    button.onHover.connect(() => action('onHover'));\n    button.onOut.connect(() => action('onOut'));\n    button.onUpOut.connect(() => action('onUpOut'));\n\n    return { view: button.view, resize: () => centerElement(buttonView) };\n};\n\nexport default {\n    title: 'Components/Button/Use Graphics',\n    argTypes: argTypes(args),\n    args: getDefaultArgs(args)\n};\n",locationsMap:{"use-graphics":{startLoc:{col:27,line:17},endLoc:{col:1,line:43},startBody:{col:27,line:17},endBody:{col:1,line:43}}}}},title:"Components/Button/Use Graphics",argTypes:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.P)(args),args:(0,_utils_argTypes__WEBPACK_IMPORTED_MODULE_6__.V)(args)};var __namedExportsOrder=["UseGraphics"]},"./src/Button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var _pixi_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}var Button=function(){function Button(view){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Button),this.view=view,this.createEvents(),this.enabled=!0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Button,[{key:"down",value:function down(_e){}},{key:"up",value:function up(_e){}},{key:"hover",value:function hover(_e){}},{key:"press",value:function press(_e){}},{key:"out",value:function out(_e){}},{key:"upOut",value:function upOut(_e){}},{key:"isDown",get:function get(){return this._isDown}},{key:"enabled",get:function get(){return this._enabled},set:function set(enabled){this._enabled=enabled,this.view.interactive=enabled,this.view.cursor=enabled?"pointer":"default",enabled||this._processUp()}},{key:"_processUp",value:function _processUp(e){this._isDown&&this.onUp.emit(this,e),this._isDown=!1}},{key:"_processUpOut",value:function _processUpOut(e){this._isDown&&(this.onUp.emit(this,e),this.onUpOut.emit(this,e)),this._isDown=!1}},{key:"_processOut",value:function _processOut(e){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,e))}},{key:"_upOut",value:function _upOut(e){this.upOut(e)}},{key:"_out",value:function _out(e){this.out(e)}},{key:"createEvents",value:function createEvents(){var _this=this;this.onPress=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,this.onDown=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,this.onUp=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,this.onHover=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,this.onOut=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,this.onUpOut=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,this.view.on("pointerdown",(function(e){_this._isDown=!0,_this.onDown.emit(_this,e)})),this.view.on("pointerup",(function(e){_this._processUp(e)})),this.view.on("pointerupoutside",(function(e){_this._processUpOut(e)})),this.view.on("pointerout",(function(e){_this._processOut(e)})),this.view.on("pointertap",(function(e){_this._isDown=!1,_this.onPress.emit(_this,e),_this.press(e)})),this.view.on("pointerover",(function(e){_this._isMouseIn=!0,_this.onHover.emit(_this,e)})),this.onDown.connect((function(_btn,e){_this.down(e)})),this.onUp.connect((function(_btn,e){_this.up(e)})),this.onUpOut.connect((function(_bth,e){_this._upOut(e)})),_pixi_core__WEBPACK_IMPORTED_MODULE_0__.P6.isMobile.any||this.onHover.connect((function(_bth,e){_this.hover(e)})),this.onOut.connect((function(_bth,e){_this._out(e)}))}}]),Button}()},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:0!==args[key]&&args[key]<1?exportArgTypes[key]={control:{type:"range",min:0,max:1,step:.1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:0!==args[key]&&args[key]>-1?exportArgTypes[key]={control:{type:"range",min:-1,max:0,step:.1}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/stories/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lq:()=>getColor});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function getColor(color){if("transparent"!==color&&void 0!==color)switch(_typeof(color)){case"string":if(color.startsWith("#")||color.startsWith("0x"))return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex(color);if(color.startsWith("rgba("))return function rgba2Hex(_ref){var _ref2=_slicedToArray(_ref,3),r=_ref2[0],g=_ref2[1],b=_ref2[2];return Number("0x".concat(getHex(r)).concat(getHex(g)).concat(getHex(b)))}(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})));if(color.startsWith("rgb(")){var _rgbData=color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)}));return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.rgb2hex(_rgbData)}if(color.startsWith("hsla(")){var _colorData2$map2=_slicedToArray(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})),3);return function hsl2Hex(h,s,l){l/=100;var a=s*Math.min(l,1-l)/100,f=function f(n){var k=(n+h/30)%12,color=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*color).toString(16).padStart(2,"0")};return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex("#".concat(f(0)).concat(f(8)).concat(f(4)))}(_colorData2$map2[0],_colorData2$map2[1],_colorData2$map2[2])}throw new Error("Unknown color format: ".concat(color));case"number":return color;default:return parseInt(color,16)}}function getHex(n){var hex=n.toString(16);return 1===hex.length?"0".concat(hex):hex}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{C:()=>centerView,w:()=>centerElement})},"./node_modules/typed-signals/dist/Collector.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Collector=void 0;exports.Collector=class Collector{constructor(signal){this.emit=(...args)=>{signal.emitCollecting(this,args)}}}},"./node_modules/typed-signals/dist/CollectorArray.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorArray=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorArray extends Collector_1.Collector{constructor(){super(...arguments),this.result=[]}handleResult(result){return this.result.push(result),!0}getResult(){return this.result}reset(){this.result.length=0}}exports.CollectorArray=CollectorArray},"./node_modules/typed-signals/dist/CollectorLast.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorLast=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorLast extends Collector_1.Collector{handleResult(result){return this.result=result,!0}getResult(){return this.result}reset(){delete this.result}}exports.CollectorLast=CollectorLast},"./node_modules/typed-signals/dist/CollectorUntil0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorUntil0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorUntil0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorUntil0=CollectorUntil0},"./node_modules/typed-signals/dist/CollectorWhile0.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CollectorWhile0=void 0;const Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");class CollectorWhile0 extends Collector_1.Collector{constructor(){super(...arguments),this.result=!1}handleResult(result){return this.result=result,!this.result}getResult(){return this.result}reset(){this.result=!1}}exports.CollectorWhile0=CollectorWhile0},"./node_modules/typed-signals/dist/Signal.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Signal=void 0;const SignalConnection_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnection.js"),SignalLink_1=__webpack_require__("./node_modules/typed-signals/dist/SignalLink.js");exports.Signal=class Signal{constructor(){this.head=new SignalLink_1.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(callback,order=0){this.connectionsCount++;const link=this.head.insert(callback,order);return this.emitDepth>0&&(this.hasNewLinks=!0,link.newLink=!0),new SignalConnection_1.SignalConnectionImpl(link,(()=>this.decrementConnectionCount()))}decrementConnectionCount(){this.connectionsCount--}disconnect(callback){for(let link=this.head.next;link!==this.head;link=link.next)if(link.callback===callback)return this.decrementConnectionCount(),link.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)link.isEnabled()&&link.callback&&link.callback.apply(null,args);this.emitDepth--,this.unsetNewLink()}emitCollecting(collector,args){this.emitDepth++;for(let link=this.head.next;link!==this.head;link=link.next)if(link.isEnabled()&&link.callback){const result=link.callback.apply(null,args);if(!collector.handleResult(result))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&0===this.emitDepth){for(let link=this.head.next;link!==this.head;link=link.next)link.newLink=!1;this.hasNewLinks=!1}}}},"./node_modules/typed-signals/dist/SignalConnection.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnectionImpl=void 0;exports.SignalConnectionImpl=class SignalConnectionImpl{constructor(link,parentCleanup){this.link=link,this.parentCleanup=parentCleanup}disconnect(){return null!==this.link&&(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0)}set enabled(enable){this.link&&this.link.setEnabled(enable)}get enabled(){return null!==this.link&&this.link.isEnabled()}}},"./node_modules/typed-signals/dist/SignalConnections.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalConnections=void 0;exports.SignalConnections=class SignalConnections{constructor(){this.list=[]}add(connection){this.list.push(connection)}disconnectAll(){for(const connection of this.list)connection.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return 0===this.list.length}}},"./node_modules/typed-signals/dist/SignalLink.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.SignalLink=void 0;class SignalLink{constructor(prev=null,next=null,order=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=null!=prev?prev:this,this.next=null!=next?next:this,this.order=order}isEnabled(){return this.enabled&&!this.newLink}setEnabled(flag){this.enabled=flag}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(callback,order){let after=this.prev;for(;after!==this&&!(after.order<=order);)after=after.prev;const link=new SignalLink(after,after.next,order);return link.callback=callback,after.next=link,link.next.prev=link,link}}exports.SignalLink=SignalLink},"./node_modules/typed-signals/dist/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.MZ=void 0;var Collector_1=__webpack_require__("./node_modules/typed-signals/dist/Collector.js");var CollectorArray_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorArray.js");var CollectorLast_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorLast.js");var CollectorUntil0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorUntil0.js");var CollectorWhile0_1=__webpack_require__("./node_modules/typed-signals/dist/CollectorWhile0.js");var Signal_1=__webpack_require__("./node_modules/typed-signals/dist/Signal.js");Object.defineProperty(exports,"MZ",{enumerable:!0,get:function(){return Signal_1.Signal}});var SignalConnections_1=__webpack_require__("./node_modules/typed-signals/dist/SignalConnections.js")}}]);