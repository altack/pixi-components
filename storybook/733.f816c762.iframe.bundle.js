"use strict";(self.webpackChunk_pixi_ui=self.webpackChunk_pixi_ui||[]).push([[733],{"./src/List.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}__webpack_require__.d(__webpack_exports__,{a:()=>List});var List=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(List,_Container);var _super=_createSuper(List);function List(options){var _options$items,_this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,List),function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_assertThisInitialized(_this=_super.call(this)),"children",[]),options&&_this.init(options),null==options||null===(_options$items=options.items)||void 0===_options$items||_options$items.forEach((function(item){return _this.addChild(item)})),_this.on("added",(function(){return _this.arrangeChildren()})),_this.on("childAdded",(function(){return _this.arrangeChildren()})),_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(List,[{key:"init",value:function init(options){var _this2=this;this.options=options,null!=options&&options.type&&(this.type=options.type),null!=options&&options.children&&options.children.forEach((function(child){return _this2.addChild(child)}))}},{key:"type",get:function get(){return this._type},set:function set(type){this._type=type,this.arrangeChildren()}},{key:"elementsMargin",get:function get(){return this.options.elementsMargin},set:function set(margin){this.options.elementsMargin=margin,this.arrangeChildren()}},{key:"vertPadding",get:function get(){return this.options.vertPadding},set:function set(padding){this.options.vertPadding=padding,this.arrangeChildren()}},{key:"horPadding",get:function get(){return this.options.horPadding},set:function set(padding){this.options.horPadding=padding,this.arrangeChildren()}},{key:"arrangeChildren",value:function arrangeChildren(){var _this$options$horPadd,_this$options,_this$options$vertPad,_this$options2,_this$options$element,_this$options3,_this$parent,_this$options4,_this3=this,x=null!==(_this$options$horPadd=null===(_this$options=this.options)||void 0===_this$options?void 0:_this$options.horPadding)&&void 0!==_this$options$horPadd?_this$options$horPadd:0,y=null!==(_this$options$vertPad=null===(_this$options2=this.options)||void 0===_this$options2?void 0:_this$options2.vertPadding)&&void 0!==_this$options$vertPad?_this$options$vertPad:0,elementsMargin=null!==(_this$options$element=null===(_this$options3=this.options)||void 0===_this$options3?void 0:_this$options3.elementsMargin)&&void 0!==_this$options$element?_this$options$element:0,maxWidth=null===(_this$parent=this.parent)||void 0===_this$parent?void 0:_this$parent.width;null!==(_this$options4=this.options)&&void 0!==_this$options4&&_this$options4.horPadding&&(maxWidth-=this.options.horPadding),this.children.forEach((function(child,id){switch(_this3.type){case"vertical":child.y=y,child.x=x,y+=elementsMargin+child.height;break;case"horizontal":child.x=x,child.y=y,x+=elementsMargin+child.width;break;default:var _this3$options$horPad,_this3$options;if(child.x=x,child.y=y,child.x+child.width>=maxWidth&&id>0)y+=elementsMargin+child.height,x=null!==(_this3$options$horPad=null===(_this3$options=_this3.options)||void 0===_this3$options?void 0:_this3$options.horPadding)&&void 0!==_this3$options$horPad?_this3$options$horPad:0,child.x=x,child.y=y;x+=elementsMargin+child.width}}))}}]),List}(__webpack_require__("./node_modules/@pixi/display/lib/index.mjs").W2)},"./src/ScrollBox.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ScrollBox});var lib=__webpack_require__("./node_modules/@pixi/core/lib/index.mjs"),display_lib=__webpack_require__("./node_modules/@pixi/display/lib/index.mjs"),graphics_lib=__webpack_require__("./node_modules/@pixi/graphics/lib/index.mjs"),List=__webpack_require__("./src/List.ts");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===_typeof(key)?key:String(key)),descriptor)}var arg,key}var Spring=function(){function Spring(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Spring),this.x=0,this.ax=0,this.dx=0,this.tx=0,this._options=options,this._options.max=options.max||160,this._options.damp=options.damp||.8,this._options.springiness=options.springiness||.1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Spring,[{key:"update",value:function update(){this.ax=(this.tx-this.x)*this._options.springiness,this.dx+=this.ax,this.dx*=this._options.damp,this.dx<-this._options.max?this.dx=-this._options.max:this.dx>this._options.max&&(this.dx=this._options.max),this.x+=this.dx}},{key:"reset",value:function reset(){this.x=0,this.ax=0,this.dx=0,this.tx=0}},{key:"max",get:function get(){return this._options.max},set:function set(value){this._options.max=value}},{key:"damp",get:function get(){return this._options.damp},set:function set(value){this._options.damp=value}},{key:"springiness",get:function get(){return this._options.springiness},set:function set(value){this._options.springiness=value}}]),Spring}();function ScrollSpring_typeof(o){return ScrollSpring_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ScrollSpring_typeof(o)}function ScrollSpring_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,key=function ScrollSpring_toPrimitive(input,hint){if("object"!==ScrollSpring_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==ScrollSpring_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"),"symbol"===ScrollSpring_typeof(key)?key:String(key)),descriptor)}var arg,key}var ScrollSpring=function(){function ScrollSpring(){!function ScrollSpring_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ScrollSpring),this._spring=new Spring,this._pos=0,this.to=0}return function ScrollSpring_createClass(Constructor,protoProps,staticProps){return protoProps&&ScrollSpring_defineProperties(Constructor.prototype,protoProps),staticProps&&ScrollSpring_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ScrollSpring,[{key:"start",value:function start(speed,pos,to){this._speed=speed,this._pos=pos,this.to=to,this.done=!1,this._spring.x=this._pos,this._spring.tx=this.to;var diff=this.to-this._pos,toDirection=Math.abs(diff)/diff,currentDirection=Math.abs(this._speed)/this._speed;this._correctSpeed=toDirection!==currentDirection}},{key:"update",value:function update(){if(this._correctSpeed)this._speed*=.6,Math.abs(this._speed)<2&&(this._correctSpeed=!1),this._pos+=this._speed,this._spring.x=this._pos;else{var diff=this.to-this._pos;Math.abs(diff)<.05?(this._pos=this.to,this.done=!0):(this._spring.tx=this.to,this._spring.update(),this._pos=this._spring.x)}return this._pos}},{key:"cancel",value:function cancel(){}}]),ScrollSpring}();function SlidingNumber_typeof(o){return SlidingNumber_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},SlidingNumber_typeof(o)}function SlidingNumber_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,SlidingNumber_toPropertyKey(descriptor.key),descriptor)}}function _defineProperty(obj,key,value){return(key=SlidingNumber_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SlidingNumber_toPropertyKey(arg){var key=function SlidingNumber_toPrimitive(input,hint){if("object"!==SlidingNumber_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==SlidingNumber_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===SlidingNumber_typeof(key)?key:String(key)}var SlidingNumber=function(){function SlidingNumber(){var _options$constrain,_options$maxSpeed,_options$ease,options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function SlidingNumber_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SlidingNumber),_defineProperty(this,"position",0),_defineProperty(this,"constrain",!0),_defineProperty(this,"min",0),_defineProperty(this,"max",0),_defineProperty(this,"maxSpeed",400),_defineProperty(this,"_offset",0),_defineProperty(this,"_prev",0),_defineProperty(this,"_speed",0),_defineProperty(this,"_targetSpeed",0),_defineProperty(this,"_speedChecker",0),_defineProperty(this,"_grab",0),this.constrain=null===(_options$constrain=options.constrain)||void 0===_options$constrain||_options$constrain,this.maxSpeed=null!==(_options$maxSpeed=options.maxSpeed)&&void 0!==_options$maxSpeed?_options$maxSpeed:400,this._ease=null!==(_options$ease=options.ease)&&void 0!==_options$ease?_options$ease:new ScrollSpring}return function SlidingNumber_createClass(Constructor,protoProps,staticProps){return protoProps&&SlidingNumber_defineProperties(Constructor.prototype,protoProps),staticProps&&SlidingNumber_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(SlidingNumber,[{key:"value",get:function get(){return this.position},set:function set(n){this._speed=0,this.position=n}},{key:"grab",value:function grab(offset){this._grab=offset,this._offset=this.position-offset,this._speedChecker=0,this._targetSpeed=this._speed=0,this._hasStopped=!1}},{key:"hold",value:function hold(newPosition){this._speedChecker++,this.position=newPosition+this._offset,this._speedChecker>1&&(this._targetSpeed=this.position-this._prev),this._speed+=(this._targetSpeed-this._speed)/2,this._speed>this.maxSpeed?this._speed=this.maxSpeed:this._speed<-this.maxSpeed&&(this._speed=-this.maxSpeed),this._prev=this.position,this.constrain&&(this._activeEase=null,this.position>this.min?this.position-=(this.position-this.min)/1.5:this.position<this.max&&(this.position+=(this.max-this.position)/1.5))}},{key:"slide",value:function slide(){var instant=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._hasStopped||(this.constrain?this._updateConstrain(instant):this._updateDefault())}},{key:"moveAmount",get:function get(){return-(this.position-this._offset-this._grab)}},{key:"_updateDefault",value:function _updateDefault(){this._speed*=.9,this.position+=this._speed,(this._speed<0?-1*this._speed:this._speed)<.01&&(this._hasStopped=!0)}},{key:"_updateConstrain",value:function _updateConstrain(){var instant=arguments.length>0&&void 0!==arguments[0]&&arguments[0],max=this.max;instant?(this.value>0&&(this.value=0),this.value>0&&(this.value=0),this.value<this.max&&(this.value=this.max),this.value<this.max&&(this.value=this.max)):this.position>this.min||this.position<max||this._activeEase?(this._activeEase||(this._activeEase=this._ease,this.position>this.min?this._activeEase.start(this._speed,this.position,this.min):this._activeEase.start(this._speed,this.position,max)),this.position=this._activeEase.update(),this._activeEase.done&&(this.position=this._activeEase.to,this._speed=0,this._activeEase=null)):this._updateDefault()}}]),SlidingNumber}();function Trackpad_typeof(o){return Trackpad_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Trackpad_typeof(o)}function Trackpad_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,Trackpad_toPropertyKey(descriptor.key),descriptor)}}function Trackpad_toPropertyKey(arg){var key=function Trackpad_toPrimitive(input,hint){if("object"!==Trackpad_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Trackpad_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Trackpad_typeof(key)?key:String(key)}var Trackpad=function(){function Trackpad(options){var _options$disableEasin;!function Trackpad_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Trackpad),function Trackpad_defineProperty(obj,key,value){return(key=Trackpad_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(this,"disableEasing",!1),this.xAxis=new SlidingNumber({ease:options.xEase,maxSpeed:options.maxSpeed,constrain:options.constrain}),this.yAxis=new SlidingNumber({ease:options.yEase,maxSpeed:options.maxSpeed,constrain:options.constrain}),this.disableEasing=null!==(_options$disableEasin=options.disableEasing)&&void 0!==_options$disableEasin&&_options$disableEasin,this._frame=new lib.Ae,this._bounds=new lib.Ae,this._globalPosition=new lib.E9}return function Trackpad_createClass(Constructor,protoProps,staticProps){return protoProps&&Trackpad_defineProperties(Constructor.prototype,protoProps),staticProps&&Trackpad_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Trackpad,[{key:"pointerDown",value:function pointerDown(pos){this._globalPosition=pos,this.xAxis.grab(pos.x),this.yAxis.grab(pos.y),this._isDown=!0}},{key:"pointerUp",value:function pointerUp(){this._isDown=!1}},{key:"pointerMove",value:function pointerMove(pos){this._globalPosition=pos}},{key:"update",value:function update(){this._dirty&&(this._dirty=!1,this.xAxis.min=this._bounds.left,this.xAxis.min=this._bounds.right-this._frame.width,this.xAxis.min=this._bounds.top,this.xAxis.min=this._bounds.bottom-this._frame.height),this._isDown?(this.xAxis.hold(this._globalPosition.x),this.yAxis.hold(this._globalPosition.y)):(this.xAxis.slide(this.disableEasing),this.yAxis.slide(this.disableEasing))}},{key:"resize",value:function resize(w,h){this._frame.x=0,this._frame.width=w,this._frame.y=0,this._frame.height=h,this._dirty=!0}},{key:"setBounds",value:function setBounds(minX,maxX,minY,maxY){this._bounds.x=minX,this._bounds.width=maxX-minX,this._bounds.y=minY,this._bounds.height=maxY-minY,this._dirty=!0}},{key:"x",get:function get(){return this.xAxis.value}},{key:"y",get:function get(){return this.yAxis.value}}]),Trackpad}();function ScrollBox_typeof(o){return ScrollBox_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ScrollBox_typeof(o)}function ScrollBox_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,ScrollBox_toPropertyKey(descriptor.key),descriptor)}}function _get(){return _get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function _get(target,property,receiver){var base=function _superPropBase(object,property){for(;!Object.prototype.hasOwnProperty.call(object,property)&&null!==(object=_getPrototypeOf(object)););return object}(target,property);if(base){var desc=Object.getOwnPropertyDescriptor(base,property);return desc.get?desc.get.call(arguments.length<3?target:receiver):desc.value}},_get.apply(this,arguments)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===ScrollBox_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function ScrollBox_defineProperty(obj,key,value){return(key=ScrollBox_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ScrollBox_toPropertyKey(arg){var key=function ScrollBox_toPrimitive(input,hint){if("object"!==ScrollBox_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==ScrollBox_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===ScrollBox_typeof(key)?key:String(key)}var ScrollBox=function(_Container){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(ScrollBox,_Container);var _super=_createSuper(ScrollBox);function ScrollBox(options){var _this;return function ScrollBox_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ScrollBox),ScrollBox_defineProperty(_assertThisInitialized(_this=_super.call(this)),"__width",0),ScrollBox_defineProperty(_assertThisInitialized(_this),"__height",0),ScrollBox_defineProperty(_assertThisInitialized(_this),"isDragging",0),ScrollBox_defineProperty(_assertThisInitialized(_this),"interactiveStorage",[]),ScrollBox_defineProperty(_assertThisInitialized(_this),"visibleItems",[]),ScrollBox_defineProperty(_assertThisInitialized(_this),"ticker",lib.vB.shared),options&&_this.init(options),_this.ticker.add(_this.update,_assertThisInitialized(_this)),_this}return function ScrollBox_createClass(Constructor,protoProps,staticProps){return protoProps&&ScrollBox_defineProperties(Constructor.prototype,protoProps),staticProps&&ScrollBox_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(ScrollBox,[{key:"init",value:function init(options){var _ref,_options$vertPadding,_ref2,_options$horPadding;this.options=options,this.setBackground(options.background),this.__width=options.width|this.background.width,this.__height=options.height|this.background.height,options.vertPadding=null!==(_ref=null!==(_options$vertPadding=options.vertPadding)&&void 0!==_options$vertPadding?_options$vertPadding:options.padding)&&void 0!==_ref?_ref:0,options.horPadding=null!==(_ref2=null!==(_options$horPadding=options.horPadding)&&void 0!==_options$horPadding?_options$horPadding:options.padding)&&void 0!==_ref2?_ref2:0,this.list||(this.list=new List.a,_get(_getPrototypeOf(ScrollBox.prototype),"addChild",this).call(this,this.list)),this.list.init({type:options.type,elementsMargin:options.elementsMargin,vertPadding:options.vertPadding,horPadding:options.horPadding}),this.addItems(options.items),this.hasBounds&&(this.addMask(),this.makeScrollable()),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.resize()}},{key:"hasBounds",get:function get(){return!!this.__width||!!this.__height}},{key:"onChildrenChange",value:function onChildrenChange(){}},{key:"addItems",value:function addItems(items){var _this2=this;null!=items&&items.length&&items.forEach((function(item){return _this2.addItem(item)}))}},{key:"removeItems",value:function removeItems(){this.list.removeChildren()}},{key:"addItem",value:function addItem(){for(var _this3=this,_len=arguments.length,items=new Array(_len),_key=0;_key<_len;_key++)items[_key]=arguments[_key];if(items.length>1)items.forEach((function(item){return _this3.addItem(item)}));else{var child=items[0];child.width&&child.height||console.error("ScrollBox item should have size"),child.eventMode="static",this.list.addChild(child),this.options.disableDynamicRendering||(child.renderable=this.isItemVisible(child))}return this.resize(),items[0]}},{key:"removeItem",value:function removeItem(itemID){var child=this.list.children[itemID];child&&(this.list.removeChild(child),this.resize())}},{key:"isItemVisible",value:function isItemVisible(item){var isVertical="vertical"===this.options.type||!this.options.type,isVisible=!1,list=this.list;if(isVertical){var posY=item.y+list.y;posY+item.height+this.options.vertPadding>=0&&posY-this.options.vertPadding<=this.options.height&&(isVisible=!0)}else{var posX=item.x+list.x;posX+item.width>=0&&posX<=this.options.width&&(isVisible=!0)}return isVisible}},{key:"items",get:function get(){var _this$list$children,_this$list;return null!==(_this$list$children=null===(_this$list=this.list)||void 0===_this$list?void 0:_this$list.children)&&void 0!==_this$list$children?_this$list$children:[]}},{key:"setBackground",value:function setBackground(background){this.background&&this.removeChild(this.background),this.options.background=background,this.background=new graphics_lib.TC,this.addChildAt(this.background,0),this.resize()}},{key:"addMask",value:function addMask(){this.borderMask||(this.borderMask=new graphics_lib.TC,_get(_getPrototypeOf(ScrollBox.prototype),"addChild",this).call(this,this.borderMask),this.mask=this.borderMask),this.resize()}},{key:"makeScrollable",value:function makeScrollable(){var _this4=this;this._trackpad||(this._trackpad=new Trackpad({disableEasing:this.options.disableEasing})),this.on("pointerdown",(function(e){_this4.renderAllItems(),_this4.isDragging=1;var touchPoint=_this4.worldTransform.applyInverse(e.global);_this4._trackpad.pointerDown(touchPoint);var listTouchPoint=_this4.list.worldTransform.applyInverse(e.global);_this4.visibleItems.forEach((function(item){item.x<listTouchPoint.x&&item.x+item.width>listTouchPoint.x&&item.y<listTouchPoint.y&&item.y+item.height>listTouchPoint.y&&(_this4.pressedChild=item)}))})),this.on("pointerup",(function(){_this4.isDragging=0,_this4._trackpad.pointerUp(),_this4.restoreItemsInteractivity(),_this4.pressedChild=null,_this4.stopRenderHiddenItems()})),this.on("pointerupoutside",(function(){_this4.isDragging=0,_this4._trackpad.pointerUp(),_this4.restoreItemsInteractivity(),_this4.pressedChild=null,_this4.stopRenderHiddenItems()})),this.on("globalpointermove",(function(e){var touchPoint=_this4.worldTransform.applyInverse(e.global);_this4._trackpad.pointerMove(touchPoint),_this4.isDragging&&_this4.pressedChild&&(_this4.revertClick(_this4.pressedChild),_this4.pressedChild=null)})),document.addEventListener("wheel",(function(e){return _this4.onMouseScroll(e)}))}},{key:"setInteractive",value:function setInteractive(interactive){this.eventMode=interactive?"static":"auto"}},{key:"listHeight",get:function get(){return this.list.height+2*this.options.vertPadding}},{key:"listWidth",get:function get(){return this.list.width+2*this.options.horPadding}},{key:"resize",value:function resize(){if(this.hasBounds){if(this.renderAllItems(),this.borderMask&&(this.lastWidth!==this.listWidth||this.lastHeight!==this.listHeight)){var verPadding=this.options.vertPadding,horPadding=this.options.horPadding;this.options.width||(this.__width+=this.listWidth),this.options.height||(this.__height+=this.listHeight),this.borderMask.clear().lineStyle(0).beginFill(16777215).drawRoundedRect(0,0,this.__width,this.__height,0|this.options.radius),this.borderMask.eventMode="none",this.background.clear().lineStyle(0);var color=this.options.background;this.background.beginFill(null!=color?color:0,color?1:1e-7),this.background.drawRoundedRect(0,0,this.__width+horPadding,this.__height+verPadding,0|this.options.radius),"horizontal"===this.options.type?this.setInteractive(this.listWidth>this.__width):this.setInteractive(this.listHeight>this.__height),this.lastWidth=this.listWidth,this.lastHeight=this.listHeight}if(this._trackpad){var maxWidth=this.borderMask.width-this.list.width-2*this.options.horPadding,maxHeight=this.borderMask.height-this.list.height-2*this.options.vertPadding;"vertical"===this.options.type?this._trackpad.yAxis.max=-Math.abs(maxHeight):("horizontal"===this.options.type||(this._trackpad.yAxis.max=-Math.abs(maxHeight)),this._trackpad.xAxis.max=-Math.abs(maxWidth))}this.updateVisibleItems()}}},{key:"onMouseScroll",value:function onMouseScroll(event){if(this.renderAllItems(),"horizontal"!==this.options.type||void 0===event.deltaX&&void 0===event.deltaY){if(void 0!==event.deltaY){var _targetPos=this.list.y-event.deltaY;_targetPos<0&&_targetPos+this.listHeight+this.options.vertPadding<this.__height?this._trackpad.yAxis.value=this.__height-this.listHeight:_targetPos>this.options.vertPadding?this._trackpad.yAxis.value=0:this._trackpad.yAxis.value=_targetPos}}else{var targetPos=event.deltaY?this.list.x-event.deltaY:this.list.x-event.deltaX;targetPos<0&&targetPos+this.listWidth+this.options.horPadding<this.__width?this._trackpad.xAxis.value=this.__width-this.listWidth:targetPos>this.options.horPadding?this._trackpad.xAxis.value=0:this._trackpad.xAxis.value=targetPos}this.stopRenderHiddenItems()}},{key:"scrollBottom",value:function scrollBottom(){this.interactive?this.scrollTo(this.list.children.length-1):this.scrollTop()}},{key:"scrollTop",value:function scrollTop(){this.renderAllItems(),this._trackpad.xAxis.value=0,this._trackpad.yAxis.value=0,this.stopRenderHiddenItems()}},{key:"renderAllItems",value:function renderAllItems(){clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null,this.options.disableDynamicRendering||this.items.forEach((function(child){child.renderable=!0}))}},{key:"stopRenderHiddenItems",value:function stopRenderHiddenItems(){var _this5=this;this.options.disableDynamicRendering||(this.stopRenderHiddenItemsTimeout&&(clearTimeout(this.stopRenderHiddenItemsTimeout),this.stopRenderHiddenItemsTimeout=null),this.stopRenderHiddenItemsTimeout=setTimeout((function(){return _this5.updateVisibleItems()}),2e3))}},{key:"updateVisibleItems",value:function updateVisibleItems(){var _this6=this;this.visibleItems.length=0,this.items.forEach((function(child){child.renderable=_this6.isItemVisible(child),_this6.visibleItems.push(child)}))}},{key:"scrollTo",value:function scrollTo(elementID){if(this.interactive){var target=this.list.children[elementID];target&&(this.renderAllItems(),this._trackpad.xAxis.value="horizontal"===this.options.type?this.__width-target.x-target.width-this.options.horPadding:0,this._trackpad.yAxis.value=this.options.type&&"vertical"!==this.options.type?0:this.__height-target.y-target.height-this.options.vertPadding,this.stopRenderHiddenItems())}}},{key:"height",get:function get(){return this.__height}},{key:"width",get:function get(){return this.__width}},{key:"update",value:function update(){if(this.list){this._trackpad.update();var type="horizontal"===this.options.type?"x":"y";this.list[type]!==this._trackpad[type]&&(this.list[type]=this._trackpad[type])}}},{key:"destroy",value:function destroy(){this.ticker.remove(this.update,this),this.background.destroy(),this.list.destroy(),_get(_getPrototypeOf(ScrollBox.prototype),"destroy",this).call(this)}},{key:"restoreItemsInteractivity",value:function restoreItemsInteractivity(){this.interactiveStorage.forEach((function(element){element.item.eventMode=element.eventMode})),this.interactiveStorage.length=0}},{key:"revertClick",value:function revertClick(item){var _this7=this;"auto"!==item.eventMode&&(lib.P6.isMobile.any?item.emit("pointerupoutside",null):item.emit("mouseupoutside",null),this.interactiveStorage.push({item,eventMode:item.eventMode}),item.eventMode="auto"),item instanceof display_lib.W2&&item.children&&item.children.forEach((function(child){return _this7.revertClick(child)}))}}]),ScrollBox}(display_lib.W2)},"./src/stories/utils/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Lq:()=>getColor});var pixi_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/pixi.js/lib/index.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function getColor(color){if("transparent"!==color&&void 0!==color)switch(_typeof(color)){case"string":if(color.startsWith("#")||color.startsWith("0x"))return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex(color);if(color.startsWith("rgba("))return function rgba2Hex(_ref){var _ref2=_slicedToArray(_ref,3),r=_ref2[0],g=_ref2[1],b=_ref2[2];return Number("0x".concat(getHex(r)).concat(getHex(g)).concat(getHex(b)))}(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})));if(color.startsWith("rgb(")){var _rgbData=color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)}));return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.rgb2hex(_rgbData)}if(color.startsWith("hsla(")){var _colorData2$map2=_slicedToArray(color.slice(5,-1).split(",").map((function(v){return parseInt(v,10)})),3);return function hsl2Hex(h,s,l){l/=100;var a=s*Math.min(l,1-l)/100,f=function f(n){var k=(n+h/30)%12,color=l-a*Math.max(Math.min(k-3,9-k,1),-1);return Math.round(255*color).toString(16).padStart(2,"0")};return pixi_js__WEBPACK_IMPORTED_MODULE_0__.P6Y.string2hex("#".concat(f(0)).concat(f(8)).concat(f(4)))}(_colorData2$map2[0],_colorData2$map2[1],_colorData2$map2[2])}throw new Error("Unknown color format: ".concat(color));case"number":return color;default:return parseInt(color,16)}}function getHex(n){var hex=n.toString(16);return 1===hex.length?"0".concat(hex):hex}},"./src/utils/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>defaultTextStyle});var defaultTextStyle=new(__webpack_require__("./node_modules/@pixi/text/lib/index.mjs").pn)({fill:16777215,fontSize:42,fontWeight:"bold",dropShadow:!0,dropShadowAlpha:.5,dropShadowDistance:0,dropShadowBlur:3})}}]);