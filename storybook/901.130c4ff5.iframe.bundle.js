"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[901],{"./src/Button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,q:()=>ButtonContainer});var lib=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),core_lib=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),dist=__webpack_require__("./node_modules/typed-signals/dist/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}var ButtonEvents=function(){function ButtonEvents(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ButtonEvents),this.onPress=new dist.MZ,this.onDown=new dist.MZ,this.onUp=new dist.MZ,this.onHover=new dist.MZ,this.onOut=new dist.MZ,this.onUpOut=new dist.MZ}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ButtonEvents,[{key:"connectEvents",value:function connectEvents(view){core_lib.P6.isMobile.any?(view.on("pointerdown",this.processDown,this),view.on("pointerup",this.processUp,this),view.on("pointerupoutside",this.processUpOut,this),view.on("pointerout",this.processOut,this),view.on("pointertap",this.processPress,this),view.on("pointerover",this.processOver,this)):(view.on("mousedown",this.processDown,this),view.on("mouseup",this.processUp,this),view.on("mouseupoutside",this.processUpOut,this),view.on("mouseout",this.processOut,this),view.on("click",this.processPress,this),view.on("mouseover",this.processOver,this))}},{key:"disconnectEvents",value:function disconnectEvents(view){core_lib.P6.isMobile.any?(view.off("pointerdown",this.processDown,this),view.off("pointerup",this.processUp,this),view.off("pointerupoutside",this.processUpOut,this),view.off("pointerout",this.processOut,this),view.off("pointertap",this.processPress,this),view.off("pointerover",this.processOver,this)):(view.off("mousedown",this.processDown,this),view.off("mouseup",this.processUp,this),view.off("mouseupoutside",this.processUpOut,this),view.off("mouseout",this.processOut,this),view.off("click",this.processPress,this),view.off("mouseover",this.processOver,this))}},{key:"processDown",value:function processDown(e){this._isDown=!0,this.onDown.emit(this,e),this.down(e)}},{key:"processUp",value:function processUp(e){this._isDown&&(this.onUp.emit(this,e),this.up(e)),this._isDown=!1}},{key:"processUpOut",value:function processUpOut(e){this._isDown&&(this.onUp.emit(this,e),this.onUpOut.emit(this,e),this.up(e),this.upOut(e)),this._isDown=!1}},{key:"processOut",value:function processOut(e){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,e),this.out(e))}},{key:"processPress",value:function processPress(e){this._isDown=!1,this.onPress.emit(this,e),this.press(e)}},{key:"processOver",value:function processOver(e){core_lib.tq.any||(this._isMouseIn=!0,this.onHover.emit(this,e),this.hover(e))}},{key:"down",value:function down(_e){}},{key:"up",value:function up(_e){}},{key:"upOut",value:function upOut(_e){}},{key:"out",value:function out(_e){}},{key:"press",value:function press(_e){}},{key:"hover",value:function hover(_e){}},{key:"isDown",get:function get(){return this._isDown}}]),ButtonEvents}(),esm=__webpack_require__("./node_modules/ts-mixer/dist/esm/index.js");function Button_typeof(o){return Button_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Button_typeof(o)}function Button_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function Button_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function Button_toPrimitive(input,hint){if("object"!==Button_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Button_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===Button_typeof(key)?key:String(key)),descriptor)}var arg,key}function Button_createClass(Constructor,protoProps,staticProps){return protoProps&&Button_defineProperties(Constructor.prototype,protoProps),staticProps&&Button_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===Button_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Button=function(_ButtonEvents){_inherits(Button,_ButtonEvents);var _super=_createSuper(Button);function Button(view){var _this;return Button_classCallCheck(this,Button),_this=_super.call(this),view&&(_this.view=view,_this.enabled=!0),_this}return Button_createClass(Button,[{key:"view",get:function get(){return this._view},set:function set(view){!!this._view&&this.disconnectEvents(this._view),this._view=view,this.connectEvents(this._view)}},{key:"enabled",get:function get(){return"static"===this.view.eventMode},set:function set(enabled){this.view?(this.view.eventMode=enabled?"static":"auto",this.view.cursor=enabled?"pointer":"default",!enabled&&this.isDown&&this.processUp()):console.error("Button view is not set. Please set it before enabling the button.")}}]),Button}(ButtonEvents),ButtonContainer=function(_Mixin){_inherits(ButtonContainer,_Mixin);var _super2=_createSuper(ButtonContainer);function ButtonContainer(view){var _this2;return Button_classCallCheck(this,ButtonContainer),(_this2=_super2.call(this)).view=_assertThisInitialized(_this2),_this2.enabled=!0,view&&_this2.addChild(view),_this2}return Button_createClass(ButtonContainer)}((0,esm.AF)(lib.W2,Button))},"./src/FancyButton.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>FancyButton});var lib=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),display_lib=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),helpers_view=__webpack_require__("./src/utils/helpers/view.ts"),text_lib=__webpack_require__("./node_modules/@pixi/text/lib/index.mjs");function fitToView(parent,child){var padding=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,scaleX=child.scale.x,scaleY=child.scale.y,maxWidth=parent.width-2*padding,maxHeight=parent.height-2*padding,widthOverflow=maxWidth-Math.round(child.width),heightOverflow=maxHeight-Math.round(child.height);widthOverflow<0&&(scaleX=maxWidth/(child.width*scaleX)),heightOverflow<0&&(scaleY=maxHeight/(child.height*scaleY)),(scaleX<=0||scaleY<=0)&&(child.visible=!1),child.scale.set(Math.min(scaleX,scaleY))}var tweedle_es=__webpack_require__("./node_modules/tweedle.js/dist/tweedle.es.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=_superPropBase(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function set(target,property,value,receiver){return set="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function set(target,property,value,receiver){var desc,base=_superPropBase(target,property);if(base){if((desc=Object.getOwnPropertyDescriptor(base,property)).set)return desc.set.call(receiver,value),!0;if(!desc.writable)return!1}if(desc=Object.getOwnPropertyDescriptor(receiver,property)){if(!desc.writable)return!1;desc.value=value,Object.defineProperty(receiver,property,desc)}else _defineProperty(receiver,property,value);return!0},set(target,property,value,receiver)}function _set(target,property,value,receiver,isStrict){if(!set(target,property,value,receiver||target)&&isStrict)throw new TypeError("failed to set property");return value}function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}var FancyButton=function(_ButtonContainer){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(FancyButton,_ButtonContainer);var _super=_createSuper(FancyButton);function FancyButton(options){var _ref2,_ref3,_this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FancyButton),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"defaultDuration",100),_defineProperty(_assertThisInitialized(_this),"innerView",new display_lib.W2),_defineProperty(_assertThisInitialized(_this),"_views",{});var _ref=null!=options?options:{},defaultView=_ref.defaultView,hoverView=_ref.hoverView,pressedView=_ref.pressedView,disabledView=_ref.disabledView,text=_ref.text,padding=_ref.padding,offset=_ref.offset,textOffset=_ref.textOffset,iconOffset=_ref.iconOffset,scale=_ref.scale,anchor=_ref.anchor,anchorX=_ref.anchorX,anchorY=_ref.anchorY,icon=_ref.icon,animations=_ref.animations;return _this.addChild(_this.innerView),_this.anchor=new lib.AB(_this.updateAnchor,_assertThisInitialized(_this)),_this.anchor.set(null!==(_ref2=null!=anchorX?anchorX:anchor)&&void 0!==_ref2?_ref2:0,null!==(_ref3=null!=anchorY?anchorY:anchor)&&void 0!==_ref3?_ref3:0),_this.padding=null!=padding?padding:0,_this.offset=offset,_this.textOffset=textOffset,_this.iconOffset=iconOffset,_this.scale.set(null!=scale?scale:1),animations&&(_this.animations=animations,lib.vB.shared.add((function(){return tweedle_es.ZA.shared.update()}))),_this.defaultView=defaultView,_this.hoverView=hoverView,_this.pressedView=pressedView,_this.disabledView=disabledView,_this.text=text,_this.iconView=icon,_this.setState("default"),_this.initStateControl(),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(FancyButton,[{key:"text",get:function get(){var _this$_views$textView;return null===(_this$_views$textView=this._views.textView)||void 0===_this$_views$textView?void 0:_this$_views$textView.text},set:function set(text){text&&0!==text?this._views.textView?this._views.textView.text=text.toString():this.createTextView(text):this.removeView("textView")}},{key:"enabled",get:function get(){return _get(_getPrototypeOf(FancyButton.prototype),"enabled",this)},set:function set(enabled){_set(_getPrototypeOf(FancyButton.prototype),"enabled",enabled,this,!0),this.setState(enabled?"default":"disabled")}},{key:"setState",value:function setState(newState){if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]||this.state!==newState){var currentView=this.getStateView(this.state);currentView&&(currentView.visible=!1),this.state=newState;var activeView=this.getStateView(newState);activeView&&(this.setOffset(activeView,newState,this.offset),activeView.visible=!0),this.updateAnchor(),this.playAnimations(newState)}}},{key:"createTextView",value:function createTextView(text){this._views.textView=function getTextView(text){return"string"==typeof text||"number"==typeof text?new text_lib.xv(String(text)):text}(text),this._views.textView.anchor.set(0),this.innerView.addChild(this._views.textView),this.adjustTextView(this.state)}},{key:"setOffset",value:function setOffset(view,state,offset){var _stateOffset$x,_stateOffset$y,stateOffset=offset?offset[state]:{x:0,y:0},defaultStateOffset=null==offset?void 0:offset.default;if(stateOffset)view.x+=null!==(_stateOffset$x=stateOffset.x)&&void 0!==_stateOffset$x?_stateOffset$x:0,view.y+=null!==(_stateOffset$y=stateOffset.y)&&void 0!==_stateOffset$y?_stateOffset$y:0;else if(defaultStateOffset){var _defaultStateOffset$x,_defaultStateOffset$y;view.x+=null!==(_defaultStateOffset$x=defaultStateOffset.x)&&void 0!==_defaultStateOffset$x?_defaultStateOffset$x:0,view.y+=null!==(_defaultStateOffset$y=defaultStateOffset.y)&&void 0!==_defaultStateOffset$y?_defaultStateOffset$y:0}else if(offset.x||offset.y){var _offset$x,_offset$y;view.x+=null!==(_offset$x=offset.x)&&void 0!==_offset$x?_offset$x:0,view.y+=null!==(_offset$y=offset.y)&&void 0!==_offset$y?_offset$y:0}}},{key:"getStateView",value:function getStateView(state){var _ref4,_this$_views$hoverVie,_ref5,_ref6,_this$_views$pressedV,_ref7,_this$_views$disabled,_this$_views$defaultV;if(this._views)switch(state){case"hover":return null!==(_ref4=null!==(_this$_views$hoverVie=this._views.hoverView)&&void 0!==_this$_views$hoverVie?_this$_views$hoverVie:this._views.defaultView)&&void 0!==_ref4?_ref4:void 0;case"pressed":return null!==(_ref5=null!==(_ref6=null!==(_this$_views$pressedV=this._views.pressedView)&&void 0!==_this$_views$pressedV?_this$_views$pressedV:this._views.hoverView)&&void 0!==_ref6?_ref6:this._views.defaultView)&&void 0!==_ref5?_ref5:void 0;case"disabled":return null!==(_ref7=null!==(_this$_views$disabled=this._views.disabledView)&&void 0!==_this$_views$disabled?_this$_views$disabled:this._views.defaultView)&&void 0!==_ref7?_ref7:void 0;case"default":return null!==(_this$_views$defaultV=this._views.defaultView)&&void 0!==_this$_views$defaultV?_this$_views$defaultV:void 0;default:return}}},{key:"adjustTextView",value:function adjustTextView(state){if(this.text){var activeView=this.getStateView(this.state);activeView&&(fitToView(activeView,this._views.textView,this.padding),this._views.textView.x=activeView.x+activeView.width/2,this._views.textView.y=activeView.y+activeView.height/2),this._views.textView.anchor.set(.5),this.setOffset(this._views.textView,state,this.textOffset)}}},{key:"adjustIconView",value:function adjustIconView(state){var _anchor;if(this._views.iconView){var activeView=this.getStateView(state);fitToView(activeView,this._views.iconView,this.padding),null===(_anchor=this._views.iconView.anchor)||void 0===_anchor||_anchor.set(0),this._views.iconView.x=activeView.x+activeView.width/2-this._views.iconView.width/2,this._views.iconView.y=activeView.y+activeView.height/2-this._views.iconView.height/2,this.setOffset(this._views.iconView,state,this.iconOffset)}}},{key:"updateAnchor",value:function updateAnchor(){var _this$anchor$x,_this$anchor$y;if(this._views){var anchorX=null!==(_this$anchor$x=this.anchor.x)&&void 0!==_this$anchor$x?_this$anchor$x:0,anchorY=null!==(_this$anchor$y=this.anchor.y)&&void 0!==_this$anchor$y?_this$anchor$y:0;if([this._views.defaultView,this._views.hoverView,this._views.pressedView,this._views.disabledView].forEach((function(view){var _anchor2;view&&(null===(_anchor2=view.anchor)||void 0===_anchor2||_anchor2.set(0),view.x=-view.width*anchorX,view.y=-view.height*anchorY)})),this._views.defaultView){var _this$_views$defaultV2=this._views.defaultView,x=_this$_views$defaultV2.x,y=_this$_views$defaultV2.y,width=_this$_views$defaultV2.width,height=_this$_views$defaultV2.height;this.hitArea=new lib.Ae(x,y,width,height)}this.adjustIconView(this.state),this.adjustTextView(this.state)}}},{key:"defaultView",get:function get(){return this._views.defaultView},set:function set(view){this.updateView("defaultView",view)}},{key:"hoverView",get:function get(){return this._views.hoverView},set:function set(view){this.updateView("hoverView",view),this._views.hoverView&&"hover"!==this.state&&(this._views.hoverView.visible=!1)}},{key:"pressedView",get:function get(){return this._views.pressedView},set:function set(view){this.updateView("pressedView",view),this._views.pressedView&&(this._views.pressedView.visible=!1)}},{key:"disabledView",get:function get(){return this._views.disabledView},set:function set(view){this.updateView("disabledView",view),this._views.disabledView&&(this._views.disabledView.visible=!1)}},{key:"updateView",value:function updateView(viewType,view){void 0!==view&&(this.removeView(viewType),null!==view&&(this._views[viewType]=(0,helpers_view.X)(view),this.setOffset(this._views[viewType],this.state,this.offset),this._views[viewType].parent||this.innerView.addChild(this._views[viewType]),this.updateAnchor(),this._views.iconView&&this.innerView.addChild(this._views.iconView),this._views.textView&&this.innerView.addChild(this._views.textView),this.setState(this.state,!0)))}},{key:"removeView",value:function removeView(viewType){this._views[viewType]&&(this.innerView.removeChild(this._views[viewType]),this._views[viewType]=null)}},{key:"textView",get:function get(){return this._views.textView},set:function set(textView){void 0!==textView&&(this.removeView("textView"),null!==textView&&this.createTextView(textView))}},{key:"iconView",get:function get(){return this._views.iconView},set:function set(view){void 0!==view&&(this.removeView("iconView"),null!==view&&(this._views.iconView=(0,helpers_view.X)(view),this._views.iconView.parent||this.innerView.addChild(this._views.iconView),this.updateAnchor(),this.setState(this.state,!0)))}},{key:"playAnimations",value:function playAnimations(state){var _this$animations$stat;if(this.animations){if("default"===state&&!this.originalInnerViewState){var _this$animations;this.originalInnerViewState={x:this.innerView.x,y:this.innerView.y,width:this.innerView.width,height:this.innerView.height,scale:{x:this.innerView.scale.x,y:this.innerView.scale.y}};var _defaultStateAnimatio,_defaultStateAnimatio2,_defaultStateAnimatio3,_defaultStateAnimatio4,_defaultStateAnimatio5,_defaultStateAnimatio6,defaultStateAnimation=null===(_this$animations=this.animations)||void 0===_this$animations?void 0:_this$animations.default;if(defaultStateAnimation)return this.innerView.x=null!==(_defaultStateAnimatio=defaultStateAnimation.props.x)&&void 0!==_defaultStateAnimatio?_defaultStateAnimatio:this.originalInnerViewState.x,this.innerView.y=null!==(_defaultStateAnimatio2=defaultStateAnimation.props.y)&&void 0!==_defaultStateAnimatio2?_defaultStateAnimatio2:this.originalInnerViewState.y,this.innerView.width=null!==(_defaultStateAnimatio3=defaultStateAnimation.props.width)&&void 0!==_defaultStateAnimatio3?_defaultStateAnimatio3:this.originalInnerViewState.width,this.innerView.height=null!==(_defaultStateAnimatio4=defaultStateAnimation.props.height)&&void 0!==_defaultStateAnimatio4?_defaultStateAnimatio4:this.originalInnerViewState.height,this.innerView.scale.x=null!==(_defaultStateAnimatio5=defaultStateAnimation.props.scale.x)&&void 0!==_defaultStateAnimatio5?_defaultStateAnimatio5:this.originalInnerViewState.scale.x,void(this.innerView.scale.y=null!==(_defaultStateAnimatio6=defaultStateAnimation.props.scale.y)&&void 0!==_defaultStateAnimatio6?_defaultStateAnimatio6:this.originalInnerViewState.scale.y)}var stateAnimation=null!==(_this$animations$stat=this.animations[state])&&void 0!==_this$animations$stat?_this$animations$stat:this.animations.default;if(stateAnimation){var data=stateAnimation;return this.defaultDuration=data.duration,void new tweedle_es.kX(this.innerView).to(data.props,data.duration).start()}new tweedle_es.kX(this.innerView).to(this.originalInnerViewState,this.defaultDuration).start()}}},{key:"initStateControl",value:function initStateControl(){var _this2=this;this.onDown.connect((function(){_this2.setState("pressed")})),this.onUp.connect((function(){lib.P6.isMobile.any?_this2.setState("default"):_this2.setState("hover")})),this.onUpOut.connect((function(){_this2.setState("default")})),this.onOut.connect((function(){_this2.isDown||_this2.setState("default")})),this.onPress.connect((function(){lib.P6.isMobile.any?_this2.setState("default"):_this2.setState("hover")})),this.onHover.connect((function(){_this2.isDown||(lib.P6.isMobile.any?_this2.setState("default"):_this2.setState("hover"))}))}},{key:"padding",get:function get(){return this._padding},set:function set(padding){this._padding=padding,this.adjustTextView(this.state),this.adjustIconView(this.state)}},{key:"offset",get:function get(){return this._offset},set:function set(offset){this._offset=offset,this.updateAnchor()}},{key:"textOffset",get:function get(){return this._textOffset},set:function set(textOffset){this._textOffset=textOffset,this.adjustTextView(this.state)}}]),FancyButton}(__webpack_require__("./src/Button.ts").q)},"./src/stories/utils/argTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{P:()=>argTypes,V:()=>getDefaultArgs});var controls={select:{control:{type:"select"}},check:{control:{type:"check"}},color:{control:{type:"color"}},amount:{control:{type:"range"}},type:{control:{type:"radio"}},date:{control:{type:"date"}},switch:{control:{type:"boolean"}}},argTypes=function argTypes(args){var exportArgTypes={};for(var key in args)if("number"==typeof args[key]){var min=0;key.includes("font")&&(min=1),args[key]>=0?args[key]>=100?exportArgTypes[key]={control:{type:"range",min,max:1e3,step:10}}:args[key]>10?exportArgTypes[key]={control:{type:"range",min,max:100,step:1}}:0!==args[key]&&args[key]<1?exportArgTypes[key]={control:{type:"range",min:0,max:1,step:.1}}:exportArgTypes[key]={control:{type:"range",min,max:10,step:1}}:args[key]<=-100?exportArgTypes[key]={control:{type:"range",min:-1e3,max:1e3,step:10}}:args[key]<-10?exportArgTypes[key]={control:{type:"range",min:-100,max:100,step:10}}:0!==args[key]&&args[key]>-1?exportArgTypes[key]={control:{type:"range",min:-1,max:0,step:.1}}:exportArgTypes[key]={control:{type:"range",min:-10,max:10,step:1}}}else switch(getArgType(key)&&(exportArgTypes[key]=getArgType(key)),_typeof(args[key])){case"object":exportArgTypes[key]=controls.select,Array.isArray(args[key])?exportArgTypes[key].options=args[key]:exportArgTypes[key].options=Object.keys(args).map((function(key){return args[key]}));break;case"boolean":exportArgTypes[key]=controls.switch}return exportArgTypes};function getArgType(type){for(var control in controls)if(type.toLowerCase().indexOf(control)>-1)return controls[control]}var getDefaultArgs=function getDefaultArgs(args){var exportArgs={};for(var key in args)if("object"===_typeof(args[key]))Array.isArray(args[key])&&(exportArgs[key]=args[key][0]);else exportArgs[key]=args[key];return exportArgs}},"./src/utils/helpers/resize.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function centerElement(view,horPos,verPos){var canvas=document.getElementById("storybook-root");view.width>0?view.x=0===horPos?0:horPos?canvas.offsetWidth*horPos-view.width/2:canvas.offsetWidth/2-view.width/2:view.x=canvas.offsetWidth/2,view.height>0?view.y=0===verPos?0:verPos?canvas.offsetHeight*verPos-view.height/2:canvas.offsetHeight/2-view.height/2:view.y=canvas.offsetHeight/2}function centerView(view){var canvas=document.getElementById("storybook-root");view.x=canvas.offsetWidth/2,view.y=canvas.offsetHeight/2}__webpack_require__.d(__webpack_exports__,{C:()=>centerView,w:()=>centerElement})},"./src/utils/helpers/view.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>getView});var _pixi_sprite__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@pixi/sprite/lib/index.mjs");function getView(view){return"string"==typeof view?_pixi_sprite__WEBPACK_IMPORTED_MODULE_0__.j.from(view):view}}}]);