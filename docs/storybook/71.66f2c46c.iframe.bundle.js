"use strict";(self.webpackChunk_pixijs_ui=self.webpackChunk_pixijs_ui||[]).push([[71],{"./src/Button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),typed_signals__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/typed-signals/dist/index.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/system/devices/Device.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var Button=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Button,_Container);var _super=_createSuper(Button);function Button(_ref){var _this,_textOffset$x,_textOffset$y,_this$defaultView,view=_ref.view,hoverView=_ref.hoverView,pressedView=_ref.pressedView,disabledView=_ref.disabledView,accessible=_ref.accessible,accessibleTitle=_ref.accessibleTitle,tabIndex=_ref.tabIndex,textView=_ref.textView,padding=_ref.padding,textOffset=_ref.textOffset;if((function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Button),function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"padding",0),padding&&(_this.padding=2*padding),_this.defaultView=view,_this.defaultView.zIndex=1,_this.addChild(_this.defaultView),hoverView&&(_this.hoverView=hoverView,_this.hoverView.zIndex=2,_this.addChild(_this.hoverView),_this.hoverView.visible=!1),pressedView&&(_this.pressedView=pressedView,_this.pressedView.zIndex=3,_this.addChild(_this.pressedView),_this.pressedView.visible=!1),disabledView&&(_this.disabledView=disabledView,_this.disabledView.zIndex=4,_this.addChild(_this.disabledView),_this.disabledView.visible=!1),textView)&&(_this.text=textView,_this.text.zIndex=4,textView.anchor.set(.5),textView.x=_this.width/2+(null!==(_textOffset$x=null==textOffset?void 0:textOffset.x)&&void 0!==_textOffset$x?_textOffset$x:0),textView.y=_this.height/2+(null!==(_textOffset$y=null==textOffset?void 0:textOffset.y)&&void 0!==_textOffset$y?_textOffset$y:0),_this.addChild(_this.text),textView.width+_this.padding>(null===(_this$defaultView=_this.defaultView)||void 0===_this$defaultView?void 0:_this$defaultView.width))){var _this$defaultView2,maxWidth=null===(_this$defaultView2=_this.defaultView)||void 0===_this$defaultView2?void 0:_this$defaultView2.width;textView.scale.set(maxWidth/(textView.width+_this.padding))}return _this._enabled=!0,_this.onPress=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this.onDown=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this.onUp=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this.onHover=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this.onOut=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this.onUpOut=new typed_signals__WEBPACK_IMPORTED_MODULE_1__.MZ,_this.accessible=null==accessible||accessible,_this.accessibleTitle=null!=accessibleTitle?accessibleTitle:"",_this.tabIndex=null!=tabIndex?tabIndex:0,_this.on("pointerdown",(function(e){_this._isDown=!0,_this.onDown.emit(_assertThisInitialized(_this),e)})),_this.on("pointerup",(function(e){_this._processUp(e)})),_this.on("pointerupoutside",(function(e){_this._processUpOut(e)})),_this.on("pointertap",(function(e){_this._isDown=!1,_this.onPress.emit(_assertThisInitialized(_this),e)})),_this.on("pointerover",(function(e){_this.onHover.emit(_assertThisInitialized(_this),e)})),_this.on("pointerout",(function(e){_this._processOut(e)})),_this.onDown.connect((function(_btn,e){_this.down(e),_this.pressedView&&(_this.pressedView.visible=!0)})),_this.onUp.connect((function(_btn,e){_this.up(e),_this.pressedView&&(_this.pressedView.visible=!1)})),_this.onUpOut.connect((function(_bth,e){_this._upOut(e),_this.pressedView&&(_this.pressedView.visible=!1)})),_utils__WEBPACK_IMPORTED_MODULE_2__.AS.desktop&&_this.onHover.connect((function(_bth,e){_this.hoverView&&(_this.hoverView.visible=!0),_this.hover(e)})),_this.onOut.connect((function(_bth,e){_this.hoverView&&(_this.hoverView.visible=!1),_this._out(e)})),_this._isDown=!1,_this.enabled=!0,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Button,[{key:"down",value:function down(_e){}},{key:"up",value:function up(_e){}},{key:"hover",value:function hover(_e){}},{key:"isDown",get:function get(){return this._isDown}},{key:"enabled",get:function get(){return this._enabled},set:function set(value){this._enabled=value,this.interactive=value,this.buttonMode=value,this.accessible=this.accessible&&value,this.disabledView&&(this.disabledView.visible=!value),value||this._processUp()}},{key:"shown",get:function get(){return this._shown},set:function set(value){this._shown=value,this.enabled=value,this.defaultView&&(this.defaultView.visible=value)}},{key:"_processUp",value:function _processUp(e){this._isDown&&this.onUp.emit(this,e),this._isDown=!1}},{key:"_processUpOut",value:function _processUpOut(e){this._isDown&&this.onUpOut.emit(this,e),this.pressedView&&(this.pressedView.visible=!1),this._isDown=!1}},{key:"_processOut",value:function _processOut(e){this.onOut.emit(this,e),this._isDown=!1}},{key:"_upOut",value:function _upOut(e){this.up(e)}},{key:"_out",value:function _out(e){this.up(e)}},{key:"getText",value:function getText(){return this.text.text}}]),Button}(pixi_js__WEBPACK_IMPORTED_MODULE_0__.W20)},"./src/CheckBox.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>CheckBox});var pixi=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs"),dist=__webpack_require__("./node_modules/typed-signals/dist/index.js"),Button=__webpack_require__("./src/Button.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function CheckBox_typeof(obj){return CheckBox_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},CheckBox_typeof(obj)}function CheckBox_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function CheckBox_setPrototypeOf(o,p){return CheckBox_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},CheckBox_setPrototypeOf(o,p)}function CheckBox_createSuper(Derived){var hasNativeReflectConstruct=function CheckBox_isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=CheckBox_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=CheckBox_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return CheckBox_possibleConstructorReturn(this,result)}}function CheckBox_possibleConstructorReturn(self,call){if(call&&("object"===CheckBox_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function CheckBox_assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function CheckBox_getPrototypeOf(o){return CheckBox_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},CheckBox_getPrototypeOf(o)}var CheckBox=function(_Switch){!function CheckBox_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&CheckBox_setPrototypeOf(subClass,superClass)}(CheckBox,_Switch);var _super=CheckBox_createSuper(CheckBox);function CheckBox(options){var _this;!function CheckBox_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,CheckBox);var unchecked="string"==typeof options.style.unchecked?new pixi.jyi(pixi.xEZ.from(options.style.unchecked)):options.style.unchecked,checked="string"==typeof options.style.checked?new pixi.jyi(pixi.xEZ.from(options.style.checked)):options.style.checked;return _this=_super.call(this,[unchecked,checked],options.checked?1:0),options.style.text&&(_this.label=new pixi.xvT(options.style.text.text,options.style.text.style),_this.label.x=unchecked.width+10,_this.label.y=(unchecked.height-_this.label.height)/2,unchecked.addChild(_this.label),_this.label=new pixi.xvT(options.style.text.text,options.style.text.style),_this.label.x=checked.width+10,_this.label.y=(checked.height-_this.label.height)/2,checked.addChild(_this.label)),_this.update(),_this.onChange=new dist.MZ,_this}return function CheckBox_createClass(Constructor,protoProps,staticProps){return protoProps&&CheckBox_defineProperties(Constructor.prototype,protoProps),staticProps&&CheckBox_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(CheckBox,[{key:"update",value:function update(){this.hitArea=new pixi.AeJ(0,0,this.width,this.height)}},{key:"text",get:function get(){return this.label.text},set:function set(text){this.label.text=text,this.update()}},{key:"checked",get:function get(){return 1===this.activeViewID},set:function set(checked){this.switch(checked?1:0),this.update()}}]),CheckBox}(function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Switch,_Container);var _super=_createSuper(Switch);function Switch(views){var _this,activeViewID=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return _classCallCheck(this,Switch),_defineProperty(_assertThisInitialized(_this=_super.call(this)),"view",new pixi.W20),_this.views=views,_this.activeViewID=activeViewID,views.forEach((function(state,id){_this.view.addChild(state),state.visible=id===_this.activeViewID})),_this.button=new Button.z({view:_this.view}),_this.addChild(_this.button),_this.onChange=new dist.MZ,_this.button.onPress.connect((function(){_this.switch(),_this.onChange.emit(_this.activeViewID)})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Switch,[{key:"activeView",get:function get(){return this.views[this.activeViewID]}},{key:"switch",value:function _switch(id){this.activeView.visible=!1,this.activeViewID=void 0===id?this.activeViewID+1:id,this.activeViewID>this.views.length-1&&(this.activeViewID=0),this.views[this.activeViewID].visible=!0}}]),Switch}(pixi.W20))},"./src/Layout.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}__webpack_require__.d(__webpack_exports__,{Ar:()=>Layout});var Layout=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Layout,_Container);var _super=_createSuper(Layout);function Layout(options){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Layout),function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"children",[]),_this.options=options,null!=options&&options.type&&(_this.type=options.type),null!=options&&options.children&&options.children.map((function(child){return _this.addChild(child)})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Layout,[{key:"onChildrenChange",value:function onChildrenChange(){var _this$options$horPadd,_this$options,_this$options$vertPad,_this$options2,_this$options$element,_this$options3,_this2=this,x=null!==(_this$options$horPadd=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.horPadding)&&void 0!==_this$options$horPadd?_this$options$horPadd:0,y=null!==(_this$options$vertPad=null===(_this$options2=this.options)||void 0===_this$options2?void 0:_this$options2.vertPadding)&&void 0!==_this$options$vertPad?_this$options$vertPad:0,elementsMargin=null!==(_this$options$element=null===(_this$options3=this.options)||void 0===_this$options3?void 0:_this$options3.elementsMargin)&&void 0!==_this$options$element?_this$options$element:0;this.children.forEach((function(child){var _this2$options$horPad,_this2$options;!_this2.type&&x+child.width>=_this2.parent.width?(y+=elementsMargin+child.height,x=null!==(_this2$options$horPad=null===(_this2$options=_this2.options)||void 0===_this2$options?void 0:_this2$options.horPadding)&&void 0!==_this2$options$horPad?_this2$options$horPad:0,child.x=x,child.y=y,_this2.h=y):(child.x=x,child.y=y);switch(_this2.type){case"horizontal":x+=elementsMargin+child.width,_this2.w=x,_this2.h=child.height;break;case"vertical":y+=elementsMargin+child.height,_this2.h=y,_this2.w=child.width;break;default:x+=elementsMargin+child.width,_this2.w=x}}))}}]),Layout}(__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.mjs").W20)}}]);