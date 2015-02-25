/**
 * React (with addons) v0.13.0-beta.1
 *
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.React=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t){"use strict";var n=e(25),r=e(31),o=e(42),i=e(34),a=e(93),s=e(95),u=e(122),l=e(117),c=e(162);r.addons={CSSTransitionGroup:i,LinkedStateMixin:n,PureRenderMixin:o,TransitionGroup:a,batchedUpdates:s.batchedUpdates,classSet:u,cloneWithProps:l,update:c},t.exports=r},{}],2:[function(e,t){"use strict";var n=e(129),r={componentDidMount:function(){this.props.autoFocus&&n(this.getDOMNode())}};t.exports=r},{}],3:[function(e,t){"use strict";function n(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function r(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function o(e){switch(e){case N.topCompositionStart:return P.compositionStart;case N.topCompositionEnd:return P.compositionEnd;case N.topCompositionUpdate:return P.compositionUpdate}}function i(e,t){return e===N.topKeyDown&&t.keyCode===E}function a(e,t){switch(e){case N.topKeyUp:return-1!==C.indexOf(t.keyCode);case N.topKeyDown:return t.keyCode!==E;case N.topKeyPress:case N.topMouseDown:case N.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function u(e,t,n,r){var u,l;if(b?u=o(e):O?a(e,r)&&(u=P.compositionEnd):i(e,r)&&(u=P.compositionStart),!u)return null;x&&(O||u!==P.compositionStart?u===P.compositionEnd&&O&&(l=O.getData()):O=m.getPooled(t));var c=v.getPooled(u,n,r);if(l)c.data=l;else{var p=s(r);null!==p&&(c.data=p)}return f.accumulateTwoPhaseDispatches(c),c}function l(e,t){switch(e){case N.topCompositionEnd:return s(t);case N.topKeyPress:var n=t.which;return n!==M?null:(w=!0,T);case N.topTextInput:var r=t.data;return r===T&&w?null:r;default:return null}}function c(e,t){if(O){if(e===N.topCompositionEnd||a(e,t)){var n=O.getData();return m.release(O),O=null,n}return null}switch(e){case N.topPaste:return null;case N.topKeyPress:return t.which&&!r(t)?String.fromCharCode(t.which):null;case N.topCompositionEnd:return x?null:t.data;default:return null}}function p(e,t,n,r){var o;if(o=D?l(e,r):c(e,r),!o)return null;var i=g.getPooled(P.beforeInput,n,r);return i.data=o,I=null,f.accumulateTwoPhaseDispatches(i),i}var d=e(16),f=e(21),h=e(22),m=e(23),v=e(101),g=e(105),y=e(152),C=[9,13,27,32],E=229,b=h.canUseDOM&&"CompositionEvent"in window,_=null;h.canUseDOM&&"documentMode"in document&&(_=document.documentMode);var D=h.canUseDOM&&"TextEvent"in window&&!_&&!n(),x=h.canUseDOM&&(!b||_&&_>8&&11>=_),M=32,T=String.fromCharCode(M),N=d.topLevelTypes,P={beforeInput:{phasedRegistrationNames:{bubbled:y({onBeforeInput:null}),captured:y({onBeforeInputCapture:null})},dependencies:[N.topCompositionEnd,N.topKeyPress,N.topTextInput,N.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:y({onCompositionEnd:null}),captured:y({onCompositionEndCapture:null})},dependencies:[N.topBlur,N.topCompositionEnd,N.topKeyDown,N.topKeyPress,N.topKeyUp,N.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:y({onCompositionStart:null}),captured:y({onCompositionStartCapture:null})},dependencies:[N.topBlur,N.topCompositionStart,N.topKeyDown,N.topKeyPress,N.topKeyUp,N.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:y({onCompositionUpdate:null}),captured:y({onCompositionUpdateCapture:null})},dependencies:[N.topBlur,N.topCompositionUpdate,N.topKeyDown,N.topKeyPress,N.topKeyUp,N.topMouseDown]}},I=null,w=!1,O=null,R={eventTypes:P,extractEvents:function(e,t,n,r){return[u(e,t,n,r),p(e,t,n,r)]}};t.exports=R},{}],4:[function(e,t){var n=e(145),r={addClass:function(e,t){return n(!/\s/.test(t)),t&&(e.classList?e.classList.add(t):r.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return n(!/\s/.test(t)),t&&(e.classList?e.classList.remove(t):r.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?r.addClass:r.removeClass)(e,t)},hasClass:function(e,t){return n(!/\s/.test(t)),e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}};t.exports=r},{}],5:[function(e,t){"use strict";function n(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var r={columnCount:!0,flex:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeOpacity:!0},o=["Webkit","ms","Moz","O"];Object.keys(r).forEach(function(e){o.forEach(function(t){r[n(t,e)]=r[e]})});var i={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},a={isUnitlessNumber:r,shorthandPropertyExpansions:i};t.exports=a},{}],6:[function(e,t){"use strict";var n=e(5),r=e(22),o=(e(116),e(123)),i=e(143),a=e(154),s=(e(163),a(function(e){return i(e)})),u="cssFloat";r.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(u="styleFloat");var l={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=o(n,r)+";")}return t||null},setValueForStyles:function(e,t){var r=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=o(i,t[i]);if("float"===i&&(i=u),a)r[i]=a;else{var s=n.shorthandPropertyExpansions[i];if(s)for(var l in s)r[l]="";else r[i]=""}}}};t.exports=l},{}],7:[function(e,t){"use strict";function n(){this._callbacks=null,this._contexts=null}var r=e(30),o=e(29),i=e(145);o(n.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){i(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{}],8:[function(e,t){"use strict";function n(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function r(e){var t=_.getPooled(N.change,I,e);C.accumulateTwoPhaseDispatches(t),b.batchedUpdates(o,t)}function o(e){y.enqueueEvents(e),y.processEventQueue()}function i(e,t){P=e,I=t,P.attachEvent("onchange",r)}function a(){P&&(P.detachEvent("onchange",r),P=null,I=null)}function s(e,t,n){return e===T.topChange?n:void 0}function u(e,t,n){e===T.topFocus?(a(),i(t,n)):e===T.topBlur&&a()}function l(e,t){P=e,I=t,w=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(P,"value",A),P.attachEvent("onpropertychange",p)}function c(){P&&(delete P.value,P.detachEvent("onpropertychange",p),P=null,I=null,w=null,O=null)}function p(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==w&&(w=t,r(e))}}function d(e,t,n){return e===T.topInput?n:void 0}function f(e,t,n){e===T.topFocus?(c(),l(t,n)):e===T.topBlur&&c()}function h(e){return e!==T.topSelectionChange&&e!==T.topKeyUp&&e!==T.topKeyDown||!P||P.value===w?void 0:(w=P.value,I)}function m(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function v(e,t,n){return e===T.topClick?n:void 0}var g=e(16),y=e(18),C=e(21),E=e(22),b=e(95),_=e(103),D=e(146),x=e(148),M=e(152),T=g.topLevelTypes,N={change:{phasedRegistrationNames:{bubbled:M({onChange:null}),captured:M({onChangeCapture:null})},dependencies:[T.topBlur,T.topChange,T.topClick,T.topFocus,T.topInput,T.topKeyDown,T.topKeyUp,T.topSelectionChange]}},P=null,I=null,w=null,O=null,R=!1;E.canUseDOM&&(R=D("change")&&(!("documentMode"in document)||document.documentMode>8));var S=!1;E.canUseDOM&&(S=D("input")&&(!("documentMode"in document)||document.documentMode>9));var A={get:function(){return O.get.call(this)},set:function(e){w=""+e,O.set.call(this,e)}},k={eventTypes:N,extractEvents:function(e,t,r,o){var i,a;if(n(t)?R?i=s:a=u:x(t)?S?i=d:(i=h,a=f):m(t)&&(i=v),i){var l=i(e,t,r);if(l){var c=_.getPooled(N.change,l,o);return C.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,r)}};t.exports=k},{}],9:[function(e,t){"use strict";var n=0,r={createReactRootIndex:function(){return n++}};t.exports=r},{}],10:[function(e,t){"use strict";function n(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var r,o=e(13),i=e(75),a=e(140),s=e(145),u=a();r="textContent"===u?function(e,t){e.textContent=t}:function(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);if(t){var n=e.ownerDocument||document;e.appendChild(n.createTextNode(t))}};var l={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:r,processUpdates:function(e,t){for(var a,u=null,l=null,c=0;c<e.length;c++)if(a=e[c],a.type===i.MOVE_EXISTING||a.type===i.REMOVE_NODE){var p=a.fromIndex,d=a.parentNode.childNodes[p],f=a.parentID;s(d),u=u||{},u[f]=u[f]||[],u[f][p]=d,l=l||[],l.push(d)}var h=o.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(a=e[v],a.type){case i.INSERT_MARKUP:n(a.parentNode,h[a.markupIndex],a.toIndex);break;case i.MOVE_EXISTING:n(a.parentNode,u[a.parentID][a.fromIndex],a.toIndex);break;case i.TEXT_CONTENT:r(a.parentNode,a.textContent);break;case i.REMOVE_NODE:}}};t.exports=l},{}],11:[function(e,t){"use strict";function n(e,t){return(e&t)===t}var r=e(145),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},i=e.DOMAttributeNames||{},s=e.DOMPropertyNames||{},u=e.DOMMutationMethods||{};e.isCustomAttribute&&a._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){r(!a.isStandardName.hasOwnProperty(l)),a.isStandardName[l]=!0;var c=l.toLowerCase();if(a.getPossibleStandardName[c]=l,i.hasOwnProperty(l)){var p=i[l];a.getPossibleStandardName[p]=l,a.getAttributeName[l]=p}else a.getAttributeName[l]=c;a.getPropertyName[l]=s.hasOwnProperty(l)?s[l]:l,a.getMutationMethod[l]=u.hasOwnProperty(l)?u[l]:null;var d=t[l];a.mustUseAttribute[l]=n(d,o.MUST_USE_ATTRIBUTE),a.mustUseProperty[l]=n(d,o.MUST_USE_PROPERTY),a.hasSideEffects[l]=n(d,o.HAS_SIDE_EFFECTS),a.hasBooleanValue[l]=n(d,o.HAS_BOOLEAN_VALUE),a.hasNumericValue[l]=n(d,o.HAS_NUMERIC_VALUE),a.hasPositiveNumericValue[l]=n(d,o.HAS_POSITIVE_NUMERIC_VALUE),a.hasOverloadedBooleanValue[l]=n(d,o.HAS_OVERLOADED_BOOLEAN_VALUE),r(!a.mustUseAttribute[l]||!a.mustUseProperty[l]),r(a.mustUseProperty[l]||!a.hasSideEffects[l]),r(!!a.hasBooleanValue[l]+!!a.hasNumericValue[l]+!!a.hasOverloadedBooleanValue[l]<=1)}}},i={},a={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<a._isCustomAttributeFunctions.length;t++){var n=a._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=i[e];return r||(i[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:o};t.exports=a},{}],12:[function(e,t){"use strict";function n(e,t){return null==t||r.hasBooleanValue[e]&&!t||r.hasNumericValue[e]&&isNaN(t)||r.hasPositiveNumericValue[e]&&1>t||r.hasOverloadedBooleanValue[e]&&t===!1}var r=e(11),o=e(126),i=e(154),a=(e(163),i(function(e){return o(e)+'="'})),s={createMarkupForID:function(e){return a(r.ID_ATTRIBUTE_NAME)+o(e)+'"'},createMarkupForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(e)&&r.isStandardName[e]){if(n(e,t))return"";var i=r.getAttributeName[e];return r.hasBooleanValue[e]||r.hasOverloadedBooleanValue[e]&&t===!0?o(i):a(i)+o(t)+'"'}return r.isCustomAttribute(e)?null==t?"":a(e)+o(t)+'"':null},setValueForProperty:function(e,t,o){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var i=r.getMutationMethod[t];if(i)i(e,o);else if(n(t,o))this.deleteValueForProperty(e,t);else if(r.mustUseAttribute[t])e.setAttribute(r.getAttributeName[t],""+o);else{var a=r.getPropertyName[t];r.hasSideEffects[t]&&""+e[a]==""+o||(e[a]=o)}}else r.isCustomAttribute(t)&&(null==o?e.removeAttribute(t):e.setAttribute(t,""+o))},deleteValueForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var n=r.getMutationMethod[t];if(n)n(e,void 0);else if(r.mustUseAttribute[t])e.removeAttribute(r.getAttributeName[t]);else{var o=r.getPropertyName[t],i=r.getDefaultValueForProperty(e.nodeName,o);r.hasSideEffects[t]&&""+e[o]===i||(e[o]=i)}}else r.isCustomAttribute(t)&&e.removeAttribute(t)}};t.exports=s},{}],13:[function(e,t){"use strict";function n(e){return e.substring(1,e.indexOf(" "))}var r=e(22),o=e(121),i=e(124),a=e(137),s=e(145),u=/^(<[^ \/>]+)/,l="data-danger-index",c={dangerouslyRenderMarkup:function(e){s(r.canUseDOM);for(var t,c={},p=0;p<e.length;p++)s(e[p]),t=n(e[p]),t=a(t)?t:"*",c[t]=c[t]||[],c[t][p]=e[p];var d=[],f=0;for(t in c)if(c.hasOwnProperty(t)){var h,m=c[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(u,"$1 "+l+'="'+h+'" ')}for(var g=o(m.join(""),i),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(l)&&(h=+C.getAttribute(l),C.removeAttribute(l),s(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(r.canUseDOM),s(t),s("html"!==e.tagName.toLowerCase());var n=o(t,i)[0];e.parentNode.replaceChild(n,e)}};t.exports=c},{}],14:[function(e,t){"use strict";var n=e(152),r=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({BeforeInputEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];t.exports=r},{}],15:[function(e,t){"use strict";var n=e(16),r=e(21),o=e(107),i=e(73),a=e(152),s=n.topLevelTypes,u=i.getFirstReactDOM,l={mouseEnter:{registrationName:a({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:a({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},c=[null,null],p={eventTypes:l,extractEvents:function(e,t,n,a){if(e===s.topMouseOver&&(a.relatedTarget||a.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var p;if(t.window===t)p=t;else{var d=t.ownerDocument;p=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=u(a.relatedTarget||a.toElement)||p):(f=p,h=t),f===h)return null;var m=f?i.getID(f):"",v=h?i.getID(h):"",g=o.getPooled(l.mouseLeave,m,a);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=o.getPooled(l.mouseEnter,v,a);return y.type="mouseenter",y.target=h,y.relatedTarget=f,r.accumulateEnterLeaveDispatches(g,y,m,v),c[0]=g,c[1]=y,c}};t.exports=p},{}],16:[function(e,t){"use strict";var n=e(151),r=n({bubbled:null,captured:null}),o=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),i={topLevelTypes:o,PropagationPhases:r};t.exports=i},{}],17:[function(e,t){var n=e(124),r={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,r){return e.addEventListener?(e.addEventListener(t,r,!0),{remove:function(){e.removeEventListener(t,r,!0)}}):{remove:n}},registerDefault:function(){}};t.exports=r},{}],18:[function(e,t){"use strict";var n=e(19),r=e(20),o=e(113),i=e(130),a=e(145),s={},u=null,l=function(e){if(e){var t=r.executeDispatch,o=n.getPluginModuleForEvent(e);o&&o.executeDispatch&&(t=o.executeDispatch),r.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},c=null,p={injection:{injectMount:r.injection.injectMount,injectInstanceHandle:function(e){c=e},getInstanceHandle:function(){return c},injectEventPluginOrder:n.injectEventPluginOrder,injectEventPluginsByName:n.injectEventPluginsByName},eventNameDispatchConfigs:n.eventNameDispatchConfigs,registrationNameModules:n.registrationNameModules,putListener:function(e,t,n){a(!n||"function"==typeof n);var r=s[t]||(s[t]={});r[e]=n},getListener:function(e,t){var n=s[t];return n&&n[e]},deleteListener:function(e,t){var n=s[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in s)delete s[t][e]},extractEvents:function(e,t,r,i){for(var a,s=n.plugins,u=0,l=s.length;l>u;u++){var c=s[u];if(c){var p=c.extractEvents(e,t,r,i);p&&(a=o(a,p))}}return a},enqueueEvents:function(e){e&&(u=o(u,e))},processEventQueue:function(){var e=u;u=null,i(e,l),a(!u)},__purge:function(){s={}},__getListenerBank:function(){return s}};t.exports=p},{}],19:[function(e,t){"use strict";function n(){if(a)for(var e in s){var t=s[e],n=a.indexOf(e);if(i(n>-1),!u.plugins[n]){i(t.extractEvents),u.plugins[n]=t;var o=t.eventTypes;for(var l in o)i(r(o[l],t,l))}}}function r(e,t,n){i(!u.eventNameDispatchConfigs.hasOwnProperty(n)),u.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var a in r)if(r.hasOwnProperty(a)){var s=r[a];o(s,t,n)}return!0}return e.registrationName?(o(e.registrationName,t,n),!0):!1}function o(e,t,n){i(!u.registrationNameModules[e]),u.registrationNameModules[e]=t,u.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=e(145),a=null,s={},u={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){i(!a),a=Array.prototype.slice.call(e),n()},injectEventPluginsByName:function(e){var t=!1;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];s.hasOwnProperty(r)&&s[r]===o||(i(!s[r]),s[r]=o,t=!0)}t&&n()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return u.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=u.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){a=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];u.plugins.length=0;var t=u.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=u.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=u},{}],20:[function(e,t){"use strict";function n(e){return e===m.topMouseUp||e===m.topTouchEnd||e===m.topTouchCancel}function r(e){return e===m.topMouseMove||e===m.topTouchMove}function o(e){return e===m.topMouseDown||e===m.topTouchStart}function i(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function a(e,t,n){e.currentTarget=h.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function s(e,t){i(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function u(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function l(e){var t=u(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function c(e){var t=e._dispatchListeners,n=e._dispatchIDs;f(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function p(e){return!!e._dispatchListeners}var d=e(16),f=e(145),h={Mount:null,injectMount:function(e){h.Mount=e}},m=d.topLevelTypes,v={isEndish:n,isMoveish:r,isStartish:o,executeDirectDispatch:c,executeDispatch:a,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,injection:h,useTouchEvents:!1};t.exports=v},{}],21:[function(e,t){"use strict";function n(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return m(e,r)}function r(e,t,r){var o=t?h.bubbled:h.captured,i=n(e,r,o);i&&(r._dispatchListeners=d(r._dispatchListeners,i),r._dispatchIDs=d(r._dispatchIDs,e))}function o(e){e&&e.dispatchConfig.phasedRegistrationNames&&p.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,r,e)}function i(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=m(e,r);o&&(n._dispatchListeners=d(n._dispatchListeners,o),n._dispatchIDs=d(n._dispatchIDs,e))}}function a(e){e&&e.dispatchConfig.registrationName&&i(e.dispatchMarker,null,e)}function s(e){f(e,o)}function u(e,t,n,r){p.injection.getInstanceHandle().traverseEnterLeave(n,r,i,e,t)}function l(e){f(e,a)}var c=e(16),p=e(18),d=e(113),f=e(130),h=c.PropagationPhases,m=p.getListener,v={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:l,accumulateEnterLeaveDispatches:u};t.exports=v},{}],22:[function(e,t){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};t.exports=r},{}],23:[function(e,t){"use strict";function n(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var r=e(30),o=e(29),i=e(140);o(n.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[i()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var s=t>1?1-t:void 0;return this._fallbackText=o.slice(e,s),this._fallbackText}}),r.addPoolingTo(n),t.exports=n},{}],24:[function(e,t){"use strict";var n,r=e(11),o=e(22),i=r.injection.MUST_USE_ATTRIBUTE,a=r.injection.MUST_USE_PROPERTY,s=r.injection.HAS_BOOLEAN_VALUE,u=r.injection.HAS_SIDE_EFFECTS,l=r.injection.HAS_NUMERIC_VALUE,c=r.injection.HAS_POSITIVE_NUMERIC_VALUE,p=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(o.canUseDOM){var d=document.implementation;n=d&&d.hasFeature&&d.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var f={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:i|s,allowTransparency:i,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:i,checked:a|s,classID:i,className:n?i:a,cols:i|c,colSpan:null,content:null,contentEditable:null,contextMenu:i,controls:a|s,coords:null,crossOrigin:null,data:null,dateTime:i,defer:s,dir:null,disabled:i|s,download:p,draggable:null,encType:null,form:i,formAction:i,formEncType:i,formMethod:i,formNoValidate:s,formTarget:i,frameBorder:i,headers:null,height:i,hidden:i|s,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:a,label:null,lang:null,list:i,loop:a|s,manifest:i,marginHeight:null,marginWidth:null,max:null,maxLength:i,media:i,mediaGroup:null,method:null,min:null,multiple:a|s,muted:a|s,name:null,noValidate:s,open:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:a|s,rel:null,required:s,role:i,rows:i|c,rowSpan:null,sandbox:null,scope:null,scrolling:null,seamless:i|s,selected:a|s,shape:null,size:i|c,sizes:i,span:c,spellCheck:null,src:null,srcDoc:a,srcSet:i,start:l,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:a|u,width:i,wmode:i,autoCapitalize:null,autoCorrect:null,itemProp:i,itemScope:i|s,itemType:i,property:null},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"enctype",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=f},{}],25:[function(e,t){"use strict";var n=e(71),r=e(90),o={linkState:function(e){return new n(this.state[e],r.createStateKeySetter(this,e))}};t.exports=o},{}],26:[function(e,t){"use strict";function n(e){u(null==e.props.checkedLink||null==e.props.valueLink)}function r(e){n(e),u(null==e.props.value&&null==e.props.onChange)}function o(e){n(e),u(null==e.props.checked&&null==e.props.onChange)}function i(e){this.props.valueLink.requestChange(e.target.value)}function a(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e(82),u=e(145),l={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},c={Mixin:{propTypes:{value:function(e,t){return!e[t]||l[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:s.func}},getValue:function(e){return e.props.valueLink?(r(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(o(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(r(e),i):e.props.checkedLink?(o(e),a):e.props.onChange}};t.exports=c},{}],27:[function(e,t){"use strict";function n(e){e.remove()}var r=e(33),o=e(113),i=e(130),a=e(145),s={trapBubbledEvent:function(e,t){a(this.isMounted());var n=this.getDOMNode();a(n);var i=r.trapBubbledEvent(e,t,n);this._localEventListeners=o(this._localEventListeners,i)},componentWillUnmount:function(){this._localEventListeners&&i(this._localEventListeners,n)}};t.exports=s},{}],28:[function(e,t){"use strict";var n=e(16),r=e(124),o=n.topLevelTypes,i={eventTypes:null,extractEvents:function(e,t,n,i){if(e===o.topTouchStart){var a=i.target;a&&!a.onclick&&(a.onclick=r)}}};t.exports=i},{}],29:[function(e,t){"use strict";function n(e){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var t=Object(e),n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o){var i=Object(o);for(var a in i)n.call(i,a)&&(t[a]=i[a])}}return t}t.exports=n},{}],30:[function(e,t){"use strict";var n=e(145),r=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},o=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},i=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},a=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},s=function(e){var t=this;n(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},u=10,l=r,c=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||l,n.poolSize||(n.poolSize=u),n.release=s,n},p={addPoolingTo:c,oneArgumentPooler:r,twoArgumentPooler:o,threeArgumentPooler:i,fiveArgumentPooler:a};t.exports=p},{}],31:[function(e,t){"use strict";var n=e(12),r=e(20),o=e(37),i=e(39),a=e(38),s=e(44),u=e(45),l=e(60),c=(e(61),e(46)),p=e(48),d=e(56),f=e(59),h=e(68),m=e(73),v=e(74),g=e(78),y=e(82),C=e(88),E=e(29),b=e(127),_=e(156);f.inject();var D=l.createElement,x=l.createFactory,M=g.measure("React","render",m.render),T={Children:{map:o.map,forEach:o.forEach,count:o.count,only:_},Component:i,DOM:c,PropTypes:y,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:D,createFactory:x,createMixin:function(e){return e},constructAndRenderComponent:m.constructAndRenderComponent,constructAndRenderComponentByID:m.constructAndRenderComponentByID,findDOMNode:b,render:M,renderToString:C.renderToString,renderToStaticMarkup:C.renderToStaticMarkup,unmountComponentAtNode:m.unmountComponentAtNode,isValidElement:l.isValidElement,withContext:s.withContext,__spread:E};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:u,DOMComponent:p,DOMPropertyOperations:n,InstanceHandles:h,Mount:m,MultiChild:v,TextComponent:d});T.version="0.13.0-beta.1",t.exports=T},{}],32:[function(e,t){"use strict";var n=e(127),r={getDOMNode:function(){return n(this)}};t.exports=r},{}],33:[function(e,t){"use strict";function n(e){return Object.prototype.hasOwnProperty.call(e,h)||(e[h]=d++,c[e[h]]={}),c[e[h]]}var r=e(16),o=e(18),i=e(19),a=e(64),s=e(112),u=e(29),l=e(146),c={},p=!1,d=0,f={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},h="_reactListenersID"+String(Math.random()).slice(2),m=u({},a,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(m.handleTopLevel),m.ReactEventListener=e}},setEnabled:function(e){m.ReactEventListener&&m.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!m.ReactEventListener||!m.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var o=t,a=n(o),s=i.registrationNameDependencies[e],u=r.topLevelTypes,c=0,p=s.length;p>c;c++){var d=s[c];a.hasOwnProperty(d)&&a[d]||(d===u.topWheel?l("wheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",o):l("mousewheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",o):m.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",o):d===u.topScroll?l("scroll",!0)?m.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",o):m.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE):d===u.topFocus||d===u.topBlur?(l("focus",!0)?(m.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",o),m.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",o)):l("focusin")&&(m.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",o),m.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",o)),a[u.topBlur]=!0,a[u.topFocus]=!0):f.hasOwnProperty(d)&&m.ReactEventListener.trapBubbledEvent(d,f[d],o),a[d]=!0)
}},trapBubbledEvent:function(e,t,n){return m.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return m.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!p){var e=s.refreshScrollValues;m.ReactEventListener.monitorScrollValue(e),p=!0}},eventNameDispatchConfigs:o.eventNameDispatchConfigs,registrationNameModules:o.registrationNameModules,putListener:o.putListener,getListener:o.getListener,deleteListener:o.deleteListener,deleteAllListeners:o.deleteAllListeners});t.exports=m},{}],34:[function(e,t){"use strict";var n=e(31),r=e(29),o=n.createFactory(e(93)),i=n.createFactory(e(35)),a=n.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:n.PropTypes.string.isRequired,transitionAppear:n.PropTypes.bool,transitionEnter:n.PropTypes.bool,transitionLeave:n.PropTypes.bool},getDefaultProps:function(){return{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return i({name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave},e)},render:function(){return o(r({},this.props,{childFactory:this._wrapChild}))}});t.exports=a},{}],35:[function(e,t){"use strict";var n=e(31),r=e(4),o=e(92),i=e(156),a=17,s=n.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(e,t){var n=this.getDOMNode(),i=this.props.name+"-"+e,a=i+"-active",s=function(e){e&&e.target!==n||(r.removeClass(n,i),r.removeClass(n,a),o.removeEndEventListener(n,s),t&&t())};o.addEndEventListener(n,s),r.addClass(n,i),this.queueClass(a)},queueClass:function(e){this.classNameQueue.push(e),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,a))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(r.addClass.bind(r,this.getDOMNode())),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillAppear:function(e){this.props.appear?this.transition("appear",e):e()},componentWillEnter:function(e){this.props.enter?this.transition("enter",e):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e):e()},render:function(){return i(this.props.children)}});t.exports=s},{}],36:[function(e,t){"use strict";var n=e(85),r=e(128),o=e(144),i=e(159),a={instantiateChildren:function(e){var t=r(e);for(var n in t)if(t.hasOwnProperty(n)){var i=t[n],a=o(i,null);t[n]=a}return t},updateChildren:function(e,t,a,s){var u=r(t);if(!u&&!e)return null;var l;for(l in u)if(u.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=u[l];if(i(p,d))n.receiveComponent(c,d,a,s),u[l]=c;else{c&&n.unmountComponent(c,l);var f=o(d,null);u[l]=f}}for(l in e)!e.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||n.unmountComponent(e[l]);return u},unmountChildren:function(e){for(var t in e){var r=e[t];n.unmountComponent(r)}}};t.exports=a},{}],37:[function(e,t){"use strict";function n(e,t){this.forEachFunction=e,this.forEachContext=t}function r(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function o(e,t,o){if(null==e)return e;var i=n.getPooled(t,o);p(e,r,i),n.release(i)}function i(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function a(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var s=o.mapFunction.call(o.mapContext,t,r);i[n]=s}}function s(e,t,n){if(null==e)return e;var r={},o=i.getPooled(r,t,n);return p(e,a,o),i.release(o),r}function u(){return null}function l(e){return p(e,u,null)}var c=e(30),p=e(161),d=(e(163),c.twoArgumentPooler),f=c.threeArgumentPooler;c.addPoolingTo(n,d),c.addPoolingTo(i,f);var h={forEach:o,map:s,count:l};t.exports=h},{}],38:[function(e,t){"use strict";function n(e,t){var n=D.hasOwnProperty(t)?D[t]:null;M.hasOwnProperty(t)&&g(n===b.OVERRIDE_BASE),e.hasOwnProperty(t)&&g(n===b.DEFINE_MANY||n===b.DEFINE_MANY_MERGED)}function r(e,t){if(t){g("function"!=typeof t),g(!p.isValidElement(t));var r=e.prototype;t.hasOwnProperty(E)&&x.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==E){var i=t[o];if(n(r,o),x.hasOwnProperty(o))x[o](e,i);else{var u=D.hasOwnProperty(o),l=r.hasOwnProperty(o),c=i&&i.__reactDontBind,d="function"==typeof i,f=d&&!u&&!l&&!c;if(f)r.__reactAutoBindMap||(r.__reactAutoBindMap={}),r.__reactAutoBindMap[o]=i,r[o]=i;else if(l){var h=D[o];g(u&&(h===b.DEFINE_MANY_MERGED||h===b.DEFINE_MANY)),h===b.DEFINE_MANY_MERGED?r[o]=a(r[o],i):h===b.DEFINE_MANY&&(r[o]=s(r[o],i))}else r[o]=i}}}}function o(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in x;g(!o);var i=n in e;g(!i),e[n]=r}}}function i(e,t){g(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(g(void 0===e[n]),e[n]=t[n]);return e}function a(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return i(o,n),i(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function u(e,t){var n=t.bind(e);return n}function l(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=u(e,d.guard(n,e.constructor.displayName+"."+t))}}var c=e(39),p=e(60),d=e(63),f=e(69),h=e(70),m=(e(81),e(80),e(94)),v=e(29),g=e(145),y=e(151),C=e(152),E=(e(155),e(163),C({mixins:null})),b=y({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),_=[],D={mixins:b.DEFINE_MANY,statics:b.DEFINE_MANY,propTypes:b.DEFINE_MANY,contextTypes:b.DEFINE_MANY,childContextTypes:b.DEFINE_MANY,getDefaultProps:b.DEFINE_MANY_MERGED,getInitialState:b.DEFINE_MANY_MERGED,getChildContext:b.DEFINE_MANY_MERGED,render:b.DEFINE_ONCE,componentWillMount:b.DEFINE_MANY,componentDidMount:b.DEFINE_MANY,componentWillReceiveProps:b.DEFINE_MANY,shouldComponentUpdate:b.DEFINE_ONCE,componentWillUpdate:b.DEFINE_MANY,componentDidUpdate:b.DEFINE_MANY,componentWillUnmount:b.DEFINE_MANY,updateComponent:b.OVERRIDE_BASE},x={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=v({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=v({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?a(e.getDefaultProps,t):t},propTypes:function(e,t){e.propTypes=v({},e.propTypes,t)},statics:function(e,t){o(e,t)}},M={replaceState:function(e,t){m.enqueueReplaceState(this,e),t&&m.enqueueCallback(this,t)},isMounted:function(){var e=f.get(this);return e&&e!==h.currentlyMountingInstance},setProps:function(e,t){m.enqueueSetProps(this,e),t&&m.enqueueCallback(this,t)},replaceProps:function(e,t){m.enqueueReplaceProps(this,e),t&&m.enqueueCallback(this,t)}},T=function(){};v(T.prototype,c.prototype,M);var N={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&l(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;g("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new T,t.prototype.constructor=t,_.forEach(r.bind(null,t)),r(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),g(t.prototype.render);for(var n in D)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){_.push(e)}}};t.exports=N},{}],39:[function(e,t){"use strict";function n(e,t){this.props=e,this.context=t}{var r=e(94),o=e(145);e(163)}n.prototype.setState=function(e,t){o("object"==typeof e||null==e),r.enqueueSetState(this,e),t&&r.enqueueCallback(this,t)},n.prototype.forceUpdate=function(e){r.enqueueForceUpdate(this),e&&r.enqueueCallback(this,e)};t.exports=n},{}],40:[function(e,t){"use strict";var n=e(50),r=e(73),o={processChildrenUpdates:n.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:n.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){r.purgeID(e)}};t.exports=o},{}],41:[function(e,t){"use strict";var n=e(145),r=!1,o={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){n(!r),o.unmountIDFromEnvironment=e.unmountIDFromEnvironment,o.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,o.processChildrenUpdates=e.processChildrenUpdates,r=!0}}};t.exports=o},{}],42:[function(e,t){"use strict";var n=e(158),r={shouldComponentUpdate:function(e,t){return!n(this.props,e)||!n(this.state,t)}};t.exports=r},{}],43:[function(e,t){"use strict";function n(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var r=e(41),o=e(44),i=e(45),a=e(60),s=(e(61),e(69)),u=e(70),l=e(76),c=e(78),p=e(81),d=(e(80),e(85)),f=e(95),h=e(29),m=e(125),v=e(145),g=e(159),y=(e(163),1),C={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingState=null,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=y++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=l.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=m,this._instance=a,s.set(a,this);var c=a.state;if(void 0===c&&(a.state=c=null),v("object"==typeof c&&!Array.isArray(c)),this._pendingState=null,this._pendingForceUpdate=!1,a.componentWillMount){var p=u.currentlyMountingInstance;u.currentlyMountingInstance=this;try{a.componentWillMount()}finally{u.currentlyMountingInstance=p}this._pendingState&&(a.state=this._pendingState,this._pendingState=null)}var f=this._renderValidatedComponent();this._renderedComponent=this._instantiateReactComponent(f,this._currentElement.type);var h=d.mountComponent(this._renderedComponent,e,t,this._processChildContext(n));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),h},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=u.currentlyUnmountingInstance;u.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{u.currentlyUnmountingInstance=t}}d.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingState=null,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,r.unmountIDFromEnvironment(this._rootNodeID),this._context=null,this._rootNodeID=null,s.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=a.cloneAndReplaceProps(n,h({},n.props,e)),f.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return m;var n=this._currentElement.type.contextTypes;if(!n)return m;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_processChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){v("object"==typeof t.constructor.childContextTypes);for(var r in n)v(r in t.constructor.childContextTypes);return h({},e,n)}return e},_processProps:function(e){return e},_checkPropTypes:function(e,t,r){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{v("function"==typeof e[i]),a=e[i](t,i,o,r)}catch(s){a=s}a instanceof Error&&(n(this),r===p.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&d.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!=this._pendingState||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,s=i.props,u=a,l=s;t!==n&&(u=this._processContext(n._context),l=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(l,u));var c=this._pendingState||i.state;this._pendingState=null;var p=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(l,c,u);p?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,l,c,u,e,o)):(this._currentElement=n,this._context=o,i.props=l,i.state=c,i.context=u)},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,s=(this._currentElement,a.props),u=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,s,u,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._renderValidatedComponent();if(g(r,o))d.receiveComponent(n,o,e,this._processChildContext(t));else{var i=this._rootNodeID,a=n._rootNodeID;d.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(o,this._currentElement.type);var s=d.mountComponent(this._renderedComponent,i,e,t);this._replaceNodeWithMarkupByID(a,s)}},_replaceNodeWithMarkupByID:function(e,t){r.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(){var e,t=o.current;o.current=this._processChildContext(this._currentElement._context),i.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{o.current=t,i.current=null}return v(null===e||e===!1||a.isValidElement(e)),e},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===m?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};c.measureMethods(C,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var E={Mixin:C};t.exports=E},{}],44:[function(e,t){"use strict";var n=e(29),r=e(125),o=e(155),i={current:r,withContext:function(e,t){o("react_with_context",{newContext:e});var r,a=i.current;i.current=n({},a,e);try{r=t()}finally{i.current=a}return r}};t.exports=i},{}],45:[function(e,t){"use strict";var n={current:null};t.exports=n},{}],46:[function(e,t){"use strict";function n(e){return r.createFactory(e)}var r=e(60),o=(e(61),e(153)),i=o({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},n);t.exports=i},{}],47:[function(e,t){"use strict";var n=e(2),r=e(32),o=e(38),i=e(60),a=e(151),s=i.createFactory("button"),u=a({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),l=o.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[n,r],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&u[t]||(e[t]=this.props[t]);return s(e,this.props.children)}});t.exports=l},{}],48:[function(e,t){"use strict";function n(e){e&&(null!=e.dangerouslySetInnerHTML&&(m(null==e.children),m(null!=e.dangerouslySetInnerHTML.__html)),m(null==e.style||"object"==typeof e.style))}function r(e,t,n,r){var o=c.findReactContainerForID(e);if(o){var i=o.nodeType===_?o.ownerDocument:o;y(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function o(e){N.call(T,e)||(m(M.test(e)),T[e]=!0)}function i(e){o(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var a=e(6),s=e(11),u=e(12),l=e(33),c=e(73),p=e(74),d=e(78),f=e(29),h=e(126),m=e(145),v=(e(146),e(152)),g=(e(155),e(163),l.deleteListener),y=l.listenTo,C=l.registrationNameModules,E={string:!0,number:!0},b=v({style:null}),_=1,D=null,x={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},M=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,T={},N={}.hasOwnProperty;i.displayName="ReactDOMComponent",i.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,r){this._rootNodeID=e,n(this._currentElement.props);var o=x[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,r)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var o in t)if(t.hasOwnProperty(o)){var i=t[o];if(null!=i)if(C.hasOwnProperty(o))r(this._rootNodeID,o,i,e);else{o===b&&(i&&(i=this._previousStyleCopy=f({},t.style)),i=a.createMarkupForStyles(i));var s=u.createMarkupForProperty(o,i);s&&(n+=" "+s)}}if(e.renderToStaticMarkup)return n+">";var l=u.createMarkupForID(this._rootNodeID);return n+" "+l+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=E[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+h(i);if(null!=a){var s=this.mountChildren(a,e,t);return n+s.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,r,o){n(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,o,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===b){var u=this._previousStyleCopy;for(o in u)u.hasOwnProperty(o)&&(i=i||{},i[o]="")}else C.hasOwnProperty(n)?g(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&D.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===b?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===b)if(l&&(l=this._previousStyleCopy=f({},l)),c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(i=i||{},i[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(i=i||{},i[o]=l[o])}else i=l;else C.hasOwnProperty(n)?r(this._rootNodeID,n,l,t):(s.isStandardName[n]||s.isCustomAttribute(n))&&D.updatePropertyByID(this._rootNodeID,n,l)}i&&D.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=E[typeof e.children]?e.children:null,i=E[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,s=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,u=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=s;null!=u&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=s?a!==s&&D.updateInnerHTMLByID(this._rootNodeID,s):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),l.deleteAllListeners(this._rootNodeID),c.purgeID(this._rootNodeID),this._rootNodeID=null}},d.measureMethods(i,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),f(i.prototype,i.Mixin,p.Mixin),i.injection={injectIDOperations:function(e){i.BackendIDOperations=D=e}},t.exports=i},{}],49:[function(e,t){"use strict";var n=e(16),r=e(27),o=e(32),i=e(38),a=e(60),s=a.createFactory("form"),u=i.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[o,r],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(n.topLevelTypes.topSubmit,"submit")}});t.exports=u},{}],50:[function(e,t){"use strict";var n=e(6),r=e(10),o=e(12),i=e(73),a=e(78),s=e(145),u=e(157),l={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},c={updatePropertyByID:function(e,t,n){var r=i.getNode(e);s(!l.hasOwnProperty(t)),null!=n?o.setValueForProperty(r,t,n):o.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=i.getNode(e);s(!l.hasOwnProperty(t)),o.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var r=i.getNode(e);n.setValueForStyles(r,t)},updateInnerHTMLByID:function(e,t){var n=i.getNode(e);u(n,t)},updateTextContentByID:function(e,t){var n=i.getNode(e);r.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=i.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=i.getNode(e[n].parentID);r.processUpdates(e,t)}};a.measureMethods(c,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=c},{}],51:[function(e,t){"use strict";var n=e(16),r=e(27),o=e(32),i=e(38),a=e(60),s=a.createFactory("img"),u=i.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[o,r],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(n.topLevelTypes.topError,"error")}});t.exports=u},{}],52:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(12),i=e(26),a=e(32),s=e(38),u=e(60),l=e(73),c=e(95),p=e(29),d=e(145),f=u.createFactory("input"),h={},m=s.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=p({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=i.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=i.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,f(e,this.props.children)},componentDidMount:function(){var e=l.getID(this.getDOMNode());h[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=l.getID(e);delete h[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&o.setValueForProperty(e,"checked",this.props.checked||!1);var t=i.getValue(this);null!=t&&o.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,r=i.getOnChange(this);r&&(t=r.call(this,e)),c.asap(n,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var a=this.getDOMNode(),s=a;s.parentNode;)s=s.parentNode;for(var u=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),p=0,f=u.length;f>p;p++){var m=u[p];if(m!==a&&m.form===a.form){var v=l.getID(m);d(v);var g=h[v];d(g),c.asap(n,g)}}}return t}});t.exports=m},{}],53:[function(e,t){"use strict";var n=e(32),r=e(38),o=e(60),i=(e(163),o.createFactory("option")),a=r.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[n],componentWillMount:function(){},render:function(){return i(this.props,this.props.children)}});t.exports=a},{}],54:[function(e,t){"use strict";function n(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=a.getValue(this);null!=e&&this.isMounted()&&o(this,e)}}function r(e,t){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function o(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i[0].selected=!0}}var i=e(2),a=e(26),s=e(32),u=e(38),l=e(60),c=e(95),p=e(29),d=l.createFactory("select"),f=u.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[i,a.Mixin,s],propTypes:{defaultValue:r,value:r},render:function(){var e=p({},this.props);return e.onChange=this._handleChange,e.value=null,d(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=a.getValue(this);null!=e?o(this,e):null!=this.props.defaultValue&&o(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=a.getValue(this);null!=t?(this._pendingUpdate=!1,o(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?o(this,this.props.defaultValue):o(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,r=a.getOnChange(this);return r&&(t=r.call(this,e)),this._pendingUpdate=!0,c.asap(n,this),t}});t.exports=f},{}],55:[function(e,t){"use strict";function n(e,t,n,r){return e===n&&t===r}function r(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function o(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var r=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,s=t.getRangeAt(0),u=n(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=u?0:s.toString().length,c=s.cloneRange();c.selectNodeContents(e),c.setEnd(s.startContainer,s.startOffset);var p=n(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(r,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function i(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function a(e,t){if(window.getSelection){var n=window.getSelection(),r=e[l()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var s=u(e,o),c=u(e,i);if(s&&c){var p=document.createRange();p.setStart(s.node,s.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),n.addRange(p))}}}var s=e(22),u=e(138),l=e(140),c=s.canUseDOM&&"selection"in document&&!("getSelection"in window),p={getOffsets:c?r:o,setOffsets:c?i:a};t.exports=p},{}],56:[function(e,t){"use strict";var n=e(12),r=e(40),o=e(48),i=e(29),a=e(126),s=(e(145),function(){});i(s.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t){this._rootNodeID=e;var r=a(this._stringText);return t.renderToStaticMarkup?r:"<span "+n.createMarkupForID(e)+">"+r+"</span>"},receiveComponent:function(e){if(e!==this._currentElement){this._currentElement=e;var t=""+e;t!==this._stringText&&(this._stringText=t,o.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}},unmountComponent:function(){r.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=s},{}],57:[function(e,t){"use strict";function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(12),i=e(26),a=e(32),s=e(38),u=e(60),l=e(95),c=e(29),p=e(145),d=(e(163),u.createFactory("textarea")),f=s.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[r,i.Mixin,a],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(p(null==e),Array.isArray(t)&&(p(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=i.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=c({},this.props);return p(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,d(e,this.state.initialValue)},componentDidUpdate:function(){var e=i.getValue(this);if(null!=e){var t=this.getDOMNode();o.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,r=i.getOnChange(this);return r&&(t=r.call(this,e)),l.asap(n,this),t}});t.exports=f},{}],58:[function(e,t){"use strict";function n(){this.reinitializeTransaction()}var r=e(95),o=e(111),i=e(29),a=e(124),s={initialize:a,close:function(){p.isBatchingUpdates=!1}},u={initialize:a,close:r.flushBatchedUpdates.bind(r)},l=[u,s];i(n.prototype,o.Mixin,{getTransactionWrappers:function(){return l}});var c=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=p.isBatchingUpdates;p.isBatchingUpdates=!0,i?e(t,n,r,o):c.perform(e,null,t,n,r,o)}};t.exports=p},{}],59:[function(e,t){"use strict";function n(){M.EventEmitter.injectReactEventListener(x),M.EventPluginHub.injectEventPluginOrder(a),M.EventPluginHub.injectInstanceHandle(T),M.EventPluginHub.injectMount(N),M.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:O,EnterLeaveEventPlugin:s,ChangeEventPlugin:o,MobileSafariClickEventPlugin:c,SelectEventPlugin:I,BeforeInputEventPlugin:r}),M.NativeComponent.injectGenericComponentClass(h),M.NativeComponent.injectTextComponentClass(D),M.Class.injectMixin(p),M.NativeComponent.injectComponentClasses({button:m,form:v,img:g,input:C,option:E,select:b,textarea:_,html:S("html"),head:S("head"),body:S("body")}),M.DOMProperty.injectDOMPropertyConfig(l),M.DOMProperty.injectDOMPropertyConfig(R),M.EmptyComponent.injectEmptyComponent("noscript"),M.Updates.injectReconcileTransaction(P),M.Updates.injectBatchingStrategy(f),M.RootIndex.injectCreateReactRootIndex(u.canUseDOM?i.createReactRootIndex:w.createReactRootIndex),M.Component.injectEnvironment(d),M.DOMComponent.injectIDOperations(y)}var r=e(3),o=e(8),i=e(9),a=e(14),s=e(15),u=e(22),l=e(24),c=e(28),p=e(32),d=e(40),f=e(58),h=e(48),m=e(47),v=e(49),g=e(51),y=e(50),C=e(52),E=e(53),b=e(54),_=e(57),D=e(56),x=e(65),M=e(66),T=e(68),N=e(73),P=e(84),I=e(97),w=e(98),O=e(99),R=e(96),S=e(120);t.exports={inject:n}},{}],60:[function(e,t){"use strict";var n=e(44),r=e(45),o=(e(29),e(163),{key:!0,ref:!0}),i=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i
};i.prototype={_isReactElement:!0},i.createElement=function(e,t,a){var s,u={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(s in t)t.hasOwnProperty(s)&&!o.hasOwnProperty(s)&&(u[s]=t[s])}var p=arguments.length-2;if(1===p)u.children=a;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];u.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(s in h)"undefined"==typeof u[s]&&(u[s]=h[s])}return new i(e,l,c,r.current,n.current,u)},i.createFactory=function(e){var t=i.createElement.bind(null,e);return t.type=e,t},i.cloneAndReplaceProps=function(e,t){var n=new i(e.type,e.key,e.ref,e._owner,e._context,t);return n},i.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=i},{}],61:[function(e,t){"use strict";function n(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function r(){var e=d.current;return e&&n(e)||void 0}function o(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,a("react_key_warning",'Each child in an array or iterator should have a unique "key" prop.',e,t))}function i(e,t,n){y.test(e)&&a("react_numeric_key_warning","Child objects should have non-numeric keys so ordering is preserved.",t,n)}function a(e,t,o,i){var a=r(),s=i.displayName||i.name,u=a||s,l=v[e];if(!l.hasOwnProperty(u)){l[u]=!0,t+=a?" Check the render method of "+a+".":" Check the React.render call using <"+s+">.";var c=null;o&&o._owner&&o._owner!==d.current&&(c=n(o._owner),t+=" It was passed a child from "+c+"."),t+=" See http://fb.me/react-warning-keys for more information.",m(e,{component:u,componentOwner:c}),console.warn(t)}}function s(){var e=r()||"";g.hasOwnProperty(e)||(g[e]=!0,m("react_object_map_children"))}function u(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];p.isValidElement(r)&&o(r,t)}else if(p.isValidElement(e))e._store.validated=!0;else if(e){var a=h(e);if(a&&a!==e.entries)for(var u,l=a.call(e);!(u=l.next()).done;)p.isValidElement(u.value)&&o(u.value,t);else if("object"==typeof e){s();for(var c in e)e.hasOwnProperty(c)&&i(c,e[c],t)}}}function l(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!C.hasOwnProperty(i)){C[i]=!0;var a="";r&&(a=" <"+r+" />");var s="";o&&(s=" The element was created by "+o+".")}}function c(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&t[r]===n[r]||(l(r,e),t[r]=n[r]))}}var p=e(60),d=(e(81),e(80),e(45)),f=e(76),h=e(136),m=e(155),v=(e(145),e(163),{react_key_warning:{},react_numeric_key_warning:{}}),g={},y=/^\d+$/,C={},E={checkAndWarnForMutatedProps:c,createElement:function(e){var t=p.createElement.apply(this,arguments);if(null==t)return t;for(var n=2;n<arguments.length;n++)u(arguments[n],e);if(e){var r=f.getComponentClassForElement(t);r.displayName||r.name,"function"==typeof r.getDefaultProps}return t},createFactory:function(e){var t=E.createElement.bind(null,e);return t.type=e,t}};t.exports=E},{}],62:[function(e,t){"use strict";function n(e){l[e]=!0}function r(e){delete l[e]}function o(e){return!!l[e]}var i,a=e(60),s=e(69),u=e(145),l={},c={injectEmptyComponent:function(e){i=a.createFactory(e)}},p=function(){};p.prototype.componentDidMount=function(){var e=s.get(this);e&&n(e._rootNodeID)},p.prototype.componentWillUnmount=function(){var e=s.get(this);e&&r(e._rootNodeID)},p.prototype.render=function(){return u(i),i()};var d=a.createElement(p),f={emptyElement:d,injection:c,isNullComponentID:o};t.exports=f},{}],63:[function(e,t){"use strict";var n={guard:function(e){return e}};t.exports=n},{}],64:[function(e,t){"use strict";function n(e){r.enqueueEvents(e),r.processEventQueue()}var r=e(18),o={handleTopLevel:function(e,t,o,i){var a=r.extractEvents(e,t,o,i);n(a)}};t.exports=o},{}],65:[function(e,t){"use strict";function n(e){var t=c.getID(e),n=l.getReactRootIDFromNodeID(t),r=c.findReactContainerForID(n),o=c.getFirstReactDOM(r);return o}function r(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function o(e){for(var t=c.getFirstReactDOM(f(e.nativeEvent))||window,r=t;r;)e.ancestors.push(r),r=n(r);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=c.getID(t)||"";m._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function i(e){var t=h(window);e(t)}var a=e(17),s=e(22),u=e(30),l=e(68),c=e(73),p=e(95),d=e(29),f=e(135),h=e(141);d(r.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),u.addPoolingTo(r,u.twoArgumentPooler);var m={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:s.canUseDOM?window:null,setHandleTopLevel:function(e){m._handleTopLevel=e},setEnabled:function(e){m._enabled=!!e},isEnabled:function(){return m._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?a.listen(r,t,m.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?a.capture(r,t,m.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=i.bind(null,e);a.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(m._enabled){var n=r.getPooled(e,t);try{p.batchedUpdates(o,n)}finally{r.release(n)}}}};t.exports=m},{}],66:[function(e,t){"use strict";var n=e(11),r=e(18),o=e(41),i=e(38),a=e(62),s=e(33),u=e(76),l=e(48),c=e(78),p=e(87),d=e(95),f={Component:o.injection,Class:i.injection,DOMComponent:l.injection,DOMProperty:n.injection,EmptyComponent:a.injection,EventPluginHub:r.injection,EventEmitter:s.injection,NativeComponent:u.injection,Perf:c.injection,RootIndex:p.injection,Updates:d.injection};t.exports=f},{}],67:[function(e,t){"use strict";function n(e){return o(document.documentElement,e)}var r=e(55),o=e(118),i=e(129),a=e(131),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=a();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=a(),r=e.focusedElem,o=e.selectionRange;t!==r&&n(r)&&(s.hasSelectionCapabilities(r)&&s.setSelection(r,o),i(r))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=r.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,o=t.end;if("undefined"==typeof o&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",o-n),i.select()}else r.setOffsets(e,t)}};t.exports=s},{}],68:[function(e,t){"use strict";function n(e){return d+e.toString(36)}function r(e,t){return e.charAt(t)===d||t===e.length}function o(e){return""===e||e.charAt(0)===d&&e.charAt(e.length-1)!==d}function i(e,t){return 0===t.indexOf(e)&&r(t,e.length)}function a(e){return e?e.substr(0,e.lastIndexOf(d)):""}function s(e,t){if(p(o(e)&&o(t)),p(i(e,t)),e===t)return e;var n,a=e.length+f;for(n=a;n<t.length&&!r(t,n);n++);return t.substr(0,n)}function u(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var i=0,a=0;n>=a;a++)if(r(e,a)&&r(t,a))i=a;else if(e.charAt(a)!==t.charAt(a))break;var s=e.substr(0,i);return p(o(s)),s}function l(e,t,n,r,o,u){e=e||"",t=t||"",p(e!==t);var l=i(t,e);p(l||i(e,t));for(var c=0,d=l?a:s,f=e;;f=d(f,t)){var m;if(o&&f===e||u&&f===t||(m=n(f,l,r)),m===!1||f===t)break;p(c++<h)}}var c=e(87),p=e(145),d=".",f=d.length,h=100,m={createReactRootID:function(){return n(c.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===d&&e.length>1){var t=e.indexOf(d,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=u(e,t);i!==e&&l(e,i,n,r,!1,!0),i!==t&&l(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(l("",e,t,n,!0,!1),l(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){l("",e,t,n,!0,!1)},_getFirstCommonAncestorID:u,_getNextDescendantID:s,isAncestorIDOf:i,SEPARATOR:d};t.exports=m},{}],69:[function(e,t){"use strict";var n={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=n},{}],70:[function(e,t){"use strict";var n={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=n},{}],71:[function(e,t){"use strict";function n(e,t){this.value=e,this.requestChange=t}function r(e){var t={value:"undefined"==typeof e?o.PropTypes.any.isRequired:e.isRequired,requestChange:o.PropTypes.func.isRequired};return o.PropTypes.shape(t)}var o=e(31);n.PropTypes={link:r},t.exports=n},{}],72:[function(e,t){"use strict";var n=e(114),r={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=n(e);return e.replace(">"," "+r.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var o=t.getAttribute(r.CHECKSUM_ATTR_NAME);o=o&&parseInt(o,10);var i=n(e);return i===o}};t.exports=r},{}],73:[function(e,t){"use strict";function n(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function r(e){var t=P(e);return t&&W.getID(t)}function o(e){var t=i(e);if(t)if(k.hasOwnProperty(t)){var n=k[t];n!==e&&(w(!l(n,t)),k[t]=e)}else k[t]=e;return t}function i(e){return e&&e.getAttribute&&e.getAttribute(A)||""}function a(e,t){var n=i(e);n!==t&&delete k[n],e.setAttribute(A,t),k[t]=e}function s(e){return k.hasOwnProperty(e)&&l(k[e],e)||(k[e]=W.findReactNodeByID(e)),k[e]}function u(e){var t=E.get(e)._rootNodeID;return y.isNullComponentID(t)?null:(k.hasOwnProperty(t)&&l(k[t],t)||(k[t]=W.findReactNodeByID(t)),k[t])}function l(e,t){if(e){w(i(e)===t);var n=W.findReactContainerForID(t);if(n&&N(n,e))return!0}return!1}function c(e){delete k[e]}function p(e){var t=k[e];return t&&l(t,e)?void(V=t):!1}function d(e){V=null,C.traverseAncestors(e,p);var t=V;return V=null,t}function f(e,t,n,r,o){var i=D.mountComponent(e,t,r,T);e._isTopLevel=!0,W._mountImageIntoNode(i,n,o)}function h(e,t,n,r){var o=M.ReactReconcileTransaction.getPooled();o.perform(f,null,e,t,n,o,r),M.ReactReconcileTransaction.release(o)}var m=e(11),v=e(33),g=(e(45),e(60)),y=(e(61),e(62)),C=e(68),E=e(69),b=e(72),_=e(78),D=e(85),x=e(94),M=e(95),T=e(125),N=e(118),P=e(139),I=e(144),w=e(145),O=e(157),R=e(159),S=(e(163),C.SEPARATOR),A=m.ID_ATTRIBUTE_NAME,k={},L=1,U=9,F={},B={},j=[],V=null,W={_instancesByReactRootID:F,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return W.scrollMonitor(n,function(){x.enqueueElementInternal(e,t),r&&x.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){w(t&&(t.nodeType===L||t.nodeType===U)),v.ensureScrollValueMonitoring();var n=W.registerContainer(t);return F[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=I(e,null),o=W._registerComponent(r,t);return M.batchedUpdates(h,r,o,t,n),r},render:function(e,t,n){w(g.isValidElement(e));var o=F[r(t)];if(o){var i=o._currentElement;if(R(i,e))return W._updateRootComponent(o,e,t,n).getPublicInstance();W.unmountComponentAtNode(t)}var a=P(t),s=a&&W.isRenderedByReact(a),u=s&&!o,l=W._renderNewRootComponent(e,t,u).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=g.createElement(e,t);return W.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return w(r),W.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=r(e);return t&&(t=C.getReactRootIDFromNodeID(t)),t||(t=C.createReactRootID()),B[t]=e,t},unmountComponentAtNode:function(e){w(e&&(e.nodeType===L||e.nodeType===U));var t=r(e),n=F[t];return n?(W.unmountComponentFromNode(n,e),delete F[t],delete B[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===U&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=C.getReactRootIDFromNodeID(e),n=B[t];return n},findReactNodeByID:function(e){var t=W.findReactContainerForID(e);return W.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=W.getID(e);return t?t.charAt(0)===S:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(W.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=j,r=0,o=d(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var s=W.getID(a);s?t===s?i=a:C.isAncestorIDOf(s,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,w(!1)},_mountImageIntoNode:function(e,t,r){if(w(t&&(t.nodeType===L||t.nodeType===U)),r){var o=P(t);if(b.canReuseMarkup(e,o))return;var i=o.getAttribute(b.CHECKSUM_ATTR_NAME);o.removeAttribute(b.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(b.CHECKSUM_ATTR_NAME,i);var s=n(e,a);" (client) "+e.substring(s-20,s+20)+"\n (server) "+a.substring(s-20,s+20),w(t.nodeType!==U)}w(t.nodeType!==U),O(t,e)},getReactRootID:r,getID:o,setID:a,getNode:s,getNodeFromInstance:u,purgeID:c};_.measureMethods(W,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=W},{}],74:[function(e,t){"use strict";function n(e,t,n){f.push({parentID:e,parentNode:null,type:l.INSERT_MARKUP,markupIndex:h.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function r(e,t,n){f.push({parentID:e,parentNode:null,type:l.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function o(e,t){f.push({parentID:e,parentNode:null,type:l.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function i(e,t){f.push({parentID:e,parentNode:null,type:l.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function a(){f.length&&(u.processChildrenUpdates(f,h),s())}function s(){f.length=0,h.length=0}var u=e(41),l=e(75),c=e(85),p=e(36),d=0,f=[],h=[],m={Mixin:{mountChildren:function(e,t,n){var r=p.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a],u=this._rootNodeID+a,l=c.mountComponent(s,u,t,n);s._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){d++;var t=!0;try{var n=this._renderedChildren;p.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{d--,d||(t?s():a())}},updateChildren:function(e,t,n){d++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{d--,d||(r?s():a())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=p.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,s=0;for(i in o)if(o.hasOwnProperty(i)){var u=r&&r[i],l=o[i];u===l?(this.moveChild(u,s,a),a=Math.max(u._mountIndex,a),u._mountIndex=s):(u&&(a=Math.max(u._mountIndex,a),this._unmountChildByName(u,i)),this._mountChildByNameAtIndex(l,i,s,t,n)),s++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;p.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&r(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){n(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){o(this._rootNodeID,e._mountIndex)},setTextContent:function(e){i(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=c.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e){this.removeChild(e),e._mountIndex=null}}};t.exports=m},{}],75:[function(e,t){"use strict";var n=e(151),r=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=r},{}],76:[function(e,t){"use strict";function n(e){return s.createClass({tagName:e.toUpperCase(),render:function(){return new u(e,null,null,null,null,this.props)}})}function r(e){if("function"==typeof e.type)return e.type;var t=e.type,r=d[t];return null==r&&(d[t]=r=n(t)),r}function o(e){return c(p),new p(e.type,e.props)}function i(e){return new f(e)}function a(e){return e instanceof f}var s=e(38),u=e(60),l=e(29),c=e(145),p=null,d={},f=null,h={injectGenericComponentClass:function(e){p=e},injectTextComponentClass:function(e){f=e},injectComponentClasses:function(e){l(d,e)}},m={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:h};t.exports=m},{}],77:[function(e,t){"use strict";var n=e(145),r={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,o){n(r.isValidOwner(o)),o.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,o){n(r.isValidOwner(o)),o.getPublicInstance().refs[t]===e.getPublicInstance()&&o.detachRef(t)}};t.exports=r},{}],78:[function(e,t){"use strict";function n(e,t,n){return n}var r={enableMeasure:!1,storedMeasure:n,measureMethods:function(){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){r.storedMeasure=e}}};t.exports=r},{}],79:[function(e,t){"use strict";function n(e){return function(t,n,r){t[n]=t.hasOwnProperty(n)?e(t[n],r):r}}function r(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=u[n];r&&u.hasOwnProperty(n)?r(e,n,t[n]):e.hasOwnProperty(n)||(e[n]=t[n])}return e}var o=e(29),i=e(124),a=e(150),s=n(function(e,t){return o({},t,e)}),u={children:i,className:n(a),style:s},l={mergeProps:function(e,t){return r(o({},e),t)}};t.exports=l},{}],80:[function(e,t){"use strict";var n={};t.exports=n},{}],81:[function(e,t){"use strict";var n=e(151),r=n({prop:null,context:null,childContext:null});t.exports=r},{}],82:[function(e,t){"use strict";function n(e){function t(t,n,r,o,i){if(o=o||C,null==n[r]){var a=g[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function r(e){function t(t,n,r,o){var i=t[n],a=h(i);if(a!==e){var s=g[o],u=m(i);return new Error("Invalid "+s+" `"+n+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return n(t)}function o(){return n(y.thatReturns(null))}function i(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=g[o],s=h(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<i.length;u++){var l=e(i,u,r,o);if(l instanceof Error)return l}return null}return n(t)}function a(){function e(e,t,n,r){if(!v.isValidElement(e[t])){var o=g[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return n(e)}function s(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=g[o],a=e.name||C;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return n(t)}function u(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var s=g[o],u=JSON.stringify(e);return new Error("Invalid "+s+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+u+"."))}return n(t)}function l(e){function t(t,n,r,o){var i=t[n],a=h(i);if("object"!==a){var s=g[o];return new Error("Invalid "+s+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var u in i)if(i.hasOwnProperty(u)){var l=e(i,u,r,o);if(l instanceof Error)return l}return null}return n(t)}function c(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var s=g[o];return new Error("Invalid "+s+" `"+n+"` supplied to "+("`"+r+"`."))}return n(t)}function p(){function e(e,t,n,r){if(!f(e[t])){var o=g[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return n(e)}function d(e){function t(t,n,r,o){var i=t[n],a=h(i);if("object"!==a){var s=g[o];return new Error("Invalid "+s+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var u in e){var l=e[u];if(l){var c=l(i,u,r,o);if(c)return c}}return null}return n(t,"expected `object`")}function f(e){switch(typeof e){case"number":case"string":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(f);if(v.isValidElement(e))return!0;for(var t in e)if(!f(e[t]))return!1;return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var v=e(60),g=e(80),y=e(124),C="<<anonymous>>",E=a(),b=p(),_={array:r("array"),bool:r("boolean"),func:r("function"),number:r("number"),object:r("object"),string:r("string"),any:o(),arrayOf:i,element:E,instanceOf:s,node:b,objectOf:l,oneOf:u,oneOfType:c,shape:d};t.exports=_},{}],83:[function(e,t){"use strict";function n(){this.listenersToPut=[]}var r=e(30),o=e(33),i=e(29);i(n.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];o.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{}],84:[function(e,t){"use strict";function n(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=r.getPooled(null),this.putListenerQueue=s.getPooled()}var r=e(7),o=e(30),i=e(33),a=e(67),s=e(83),u=e(111),l=e(29),c={initialize:a.getSelectionInformation,close:a.restoreSelection},p={initialize:function(){var e=i.isEnabled();return i.setEnabled(!1),e},close:function(e){i.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},h=[f,c,p,d],m={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){r.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};l(n.prototype,u.Mixin,m),o.addPoolingTo(n),t.exports=n},{}],85:[function(e,t){"use strict";function n(){r.attachRefs(this,this._currentElement)}var r=e(86),o=(e(61),{mountComponent:function(e,t,r,o){var i=e.mountComponent(t,r,o);return r.getReactMountReady().enqueue(n,e),i},unmountComponent:function(e){r.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,o,i){var a=e._currentElement;if(t!==a||null==t._owner){var s=r.shouldUpdateRefs(this,a,t);s&&r.detachRefs(e,a),e.receiveComponent(t,o,i),s&&o.getReactMountReady().enqueue(n,e)}}});t.exports=o},{}],86:[function(e,t){"use strict";function n(e,t,n){"function"==typeof e?e(t.getPublicInstance()):o.addComponentAsRefTo(t,e,n)}function r(e,t,n){"function"==typeof e?e(null):o.removeComponentAsRefFrom(t,e,n)}var o=e(77),i=(e(95),{});i.attachRefs=function(e,t){var r=t.ref;null!=r&&n(r,e,t._owner)},i.shouldUpdateRefs=function(e,t,n){return n._owner!==t._owner||n.ref!==t.ref},i.detachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},t.exports=i},{}],87:[function(e,t){"use strict";var n={injectCreateReactRootIndex:function(e){r.createReactRootIndex=e}},r={createReactRootIndex:null,injection:n};t.exports=r},{}],88:[function(e,t){"use strict";function n(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=l(e,null),o=r.mountComponent(n,t,u);return a.addChecksumToMarkup(o)},null)}finally{s.release(t)}}function r(e){c(o.isValidElement(e));var t;try{var n=i.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=l(e,null);return r.mountComponent(n,t,u)},null)}finally{s.release(t)}}var o=e(60),i=e(68),a=e(72),s=e(89),u=e(125),l=e(144),c=e(145);t.exports={renderToString:n,renderToStaticMarkup:r}},{}],89:[function(e,t){"use strict";function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=o.getPooled(null),this.putListenerQueue=i.getPooled()}var r=e(30),o=e(7),i=e(83),a=e(111),s=e(29),u=e(124),l={initialize:function(){this.reactMountReady.reset()},close:u},c={initialize:function(){this.putListenerQueue.reset()},close:u},p=[c,l],d={getTransactionWrappers:function(){return p},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,i.release(this.putListenerQueue),this.putListenerQueue=null}};s(n.prototype,a.Mixin,d),r.addPoolingTo(n),t.exports=n},{}],90:[function(e,t){"use strict";function n(e,t){var n={};return function(r){n[t]=r,e.setState(n)}}var r={createStateSetter:function(e,t){return function(n,r,o,i,a,s){var u=t.call(e,n,r,o,i,a,s);u&&e.setState(u)}},createStateKeySetter:function(e,t){var r=e.__keySetters||(e.__keySetters={});return r[t]||(r[t]=n(e,t))}};r.Mixin={createStateSetter:function(e){return r.createStateSetter(this,e)},createStateKeySetter:function(e){return r.createStateKeySetter(this,e)}},t.exports=r},{}],91:[function(e,t){"use strict";var n=e(37),r={getChildMapping:function(e){return n.map(e,function(e){return e})},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a,s={};for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var l=r[u][a];s[r[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}};t.exports=r},{}],92:[function(e,t){"use strict";function n(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete a.animationend.animation,"TransitionEvent"in window||delete a.transitionend.transition;for(var n in a){var r=a[n];for(var o in r)if(o in t){s.push(r[o]);break}}}function r(e,t,n){e.addEventListener(t,n,!1)}function o(e,t,n){e.removeEventListener(t,n,!1)}var i=e(22),a={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},s=[];i.canUseDOM&&n();var u={addEndEventListener:function(e,t){return 0===s.length?void window.setTimeout(t,0):void s.forEach(function(n){r(e,n,t)})},removeEndEventListener:function(e,t){0!==s.length&&s.forEach(function(n){o(e,n,t)})}};t.exports=u},{}],93:[function(e,t){"use strict";var n=e(31),r=e(91),o=e(29),i=e(117),a=e(124),s=n.createClass({displayName:"ReactTransitionGroup",propTypes:{component:n.PropTypes.any,childFactory:n.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:a.thatReturnsArgument}},getInitialState:function(){return{children:r.getChildMapping(this.props.children)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidMount:function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t)},componentWillReceiveProps:function(e){var t=r.getChildMapping(e.children),n=this.state.children;this.setState({children:r.mergeChildMappings(n,t)});var o;for(o in t){var i=n&&n.hasOwnProperty(o);!t[o]||i||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(o in n){var a=t&&t.hasOwnProperty(o);!n[o]||a||this.currentlyTransitioningKeys[o]||this.keysToLeave.push(o)}},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},performAppear:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillAppear?t.componentWillAppear(this._handleDoneAppearing.bind(this,e)):this._handleDoneAppearing(e)},_handleDoneAppearing:function(e){var t=this.refs[e];t.componentDidAppear&&t.componentDidAppear(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e];t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e];t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);if(n&&n.hasOwnProperty(e))this.performEnter(e);else{var i=o({},this.state.children);delete i[e],this.setState({children:i})}},render:function(){var e={};for(var t in this.state.children){var r=this.state.children[t];r&&(e[t]=i(this.props.childFactory(r),{ref:t}))}return n.createElement(this.props.component,this.props,e)}});t.exports=s},{}],94:[function(e,t){"use strict";function n(e){e!==o.currentlyMountingInstance&&u.enqueueUpdate(e)}function r(e){c(null==i.current);var t=s.get(e);return c(t),c(t!==o.currentlyUnmountingInstance),t}var o=e(70),i=e(45),a=e(60),s=e(69),u=e(95),l=e(29),c=e(145),p={enqueueCallback:function(e,t){c("function"==typeof t);var r=s.get(e);c(r),r!==o.currentlyMountingInstance&&(r._pendingCallbacks?r._pendingCallbacks.push(t):r._pendingCallbacks=[t],n(r))},enqueueCallbackInternal:function(e,t){c("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t]},enqueueForceUpdate:function(e){var t=r(e,"forceUpdate");t._pendingForceUpdate=!0,n(t)},enqueueReplaceState:function(e,t){var o=r(e,"replaceState");o._pendingState=t,n(o)},enqueueSetState:function(e,t){var o=r(e,"setState");o._pendingState=l({},o._pendingState||o._instance.state,t),n(o)},enqueueSetProps:function(e,t){var o=r(e,"setProps");c(o._isTopLevel);var i=o._pendingElement||o._currentElement,s=l({},i.props,t);o._pendingElement=a.cloneAndReplaceProps(i,s),n(o)},enqueueReplaceProps:function(e,t){var o=r(e,"replaceProps");c(o._isTopLevel);var i=o._pendingElement||o._currentElement;o._pendingElement=a.cloneAndReplaceProps(i,t),n(o)},enqueueElementInternal:function(e,t){e._pendingElement=t,n(e)}};t.exports=p},{}],95:[function(e,t){"use strict";function n(){h(x.ReactReconcileTransaction&&y)}function r(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=l.getPooled(),this.reconcileTransaction=x.ReactReconcileTransaction.getPooled()}function o(e,t,r,o,i){n(),y.batchedUpdates(e,t,r,o,i)}function i(e,t){return e._mountOrder-t._mountOrder}function a(e){var t=e.dirtyComponentsLength;h(t===m.length),m.sort(i);for(var n=0;t>n;n++){var r=m[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,r.performUpdateIfNecessary(e.reconcileTransaction),o)for(var a=0;a<o.length;a++)e.callbackQueue.enqueue(o[a],r.getPublicInstance())}}function s(e){return n(),y.isBatchingUpdates?void m.push(e):void y.batchedUpdates(s,e)}function u(e,t){h(y.isBatchingUpdates),v.enqueue(e,t),g=!0}var l=e(7),c=e(30),p=(e(45),e(78)),d=e(111),f=e(29),h=e(145),m=(e(163),[]),v=l.getPooled(),g=!1,y=null,C={initialize:function(){this.dirtyComponentsLength=m.length},close:function(){this.dirtyComponentsLength!==m.length?(m.splice(0,this.dirtyComponentsLength),_()):m.length=0}},E={initialize:function(){this.callbackQueue.reset()
},close:function(){this.callbackQueue.notifyAll()}},b=[C,E];f(r.prototype,d.Mixin,{getTransactionWrappers:function(){return b},destructor:function(){this.dirtyComponentsLength=null,l.release(this.callbackQueue),this.callbackQueue=null,x.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return d.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),c.addPoolingTo(r);var _=function(){for(;m.length||g;){if(m.length){var e=r.getPooled();e.perform(a,null,e),r.release(e)}if(g){g=!1;var t=v;v=l.getPooled(),t.notifyAll(),l.release(t)}}};_=p.measure("ReactUpdates","flushBatchedUpdates",_);var D={injectReconcileTransaction:function(e){h(e),x.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){h(e),h("function"==typeof e.batchedUpdates),h("boolean"==typeof e.isBatchingUpdates),y=e}},x={ReactReconcileTransaction:null,batchedUpdates:o,enqueueUpdate:s,flushBatchedUpdates:_,injection:D,asap:u};t.exports=x},{}],96:[function(e,t){"use strict";var n=e(11),r=n.injection.MUST_USE_ATTRIBUTE,o={Properties:{cx:r,cy:r,d:r,dx:r,dy:r,fill:r,fillOpacity:r,fontFamily:r,fontSize:r,fx:r,fy:r,gradientTransform:r,gradientUnits:r,markerEnd:r,markerMid:r,markerStart:r,offset:r,opacity:r,patternContentUnits:r,patternUnits:r,points:r,preserveAspectRatio:r,r:r,rx:r,ry:r,spreadMethod:r,stopColor:r,stopOpacity:r,stroke:r,strokeDasharray:r,strokeLinecap:r,strokeOpacity:r,strokeWidth:r,textAnchor:r,transform:r,version:r,viewBox:r,x1:r,x2:r,x:r,y1:r,y2:r,y:r},DOMAttributeNames:{fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=o},{}],97:[function(e,t){"use strict";function n(e){if("selectionStart"in e&&a.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function r(e){if(g||null==h||h!==u())return null;var t=n(h);if(!v||!p(v,t)){v=t;var r=s.getPooled(f.select,m,e);return r.type="select",r.target=h,i.accumulateTwoPhaseDispatches(r),r}}var o=e(16),i=e(21),a=e(67),s=e(103),u=e(131),l=e(148),c=e(152),p=e(158),d=o.topLevelTypes,f={select:{phasedRegistrationNames:{bubbled:c({onSelect:null}),captured:c({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}},h=null,m=null,v=null,g=!1,y={eventTypes:f,extractEvents:function(e,t,n,o){switch(e){case d.topFocus:(l(t)||"true"===t.contentEditable)&&(h=t,m=n,v=null);break;case d.topBlur:h=null,m=null,v=null;break;case d.topMouseDown:g=!0;break;case d.topContextMenu:case d.topMouseUp:return g=!1,r(o);case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return r(o)}}};t.exports=y},{}],98:[function(e,t){"use strict";var n=Math.pow(2,53),r={createReactRootIndex:function(){return Math.ceil(Math.random()*n)}};t.exports=r},{}],99:[function(e,t){"use strict";var n=e(16),r=e(20),o=e(21),i=e(100),a=e(103),s=e(104),u=e(106),l=e(107),c=e(102),p=e(108),d=e(109),f=e(110),h=e(132),m=e(145),v=e(152),g=(e(163),n.topLevelTypes),y={blur:{phasedRegistrationNames:{bubbled:v({onBlur:!0}),captured:v({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:v({onClick:!0}),captured:v({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:v({onContextMenu:!0}),captured:v({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:v({onCopy:!0}),captured:v({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:v({onCut:!0}),captured:v({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:v({onDoubleClick:!0}),captured:v({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:v({onDrag:!0}),captured:v({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:v({onDragEnd:!0}),captured:v({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:v({onDragEnter:!0}),captured:v({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:v({onDragExit:!0}),captured:v({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:v({onDragLeave:!0}),captured:v({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:v({onDragOver:!0}),captured:v({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:v({onDragStart:!0}),captured:v({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:v({onDrop:!0}),captured:v({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:v({onFocus:!0}),captured:v({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:v({onInput:!0}),captured:v({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:v({onKeyDown:!0}),captured:v({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:v({onKeyPress:!0}),captured:v({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:v({onKeyUp:!0}),captured:v({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:v({onLoad:!0}),captured:v({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:v({onError:!0}),captured:v({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:v({onMouseDown:!0}),captured:v({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:v({onMouseMove:!0}),captured:v({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:v({onMouseOut:!0}),captured:v({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:v({onMouseOver:!0}),captured:v({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:v({onMouseUp:!0}),captured:v({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:v({onPaste:!0}),captured:v({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:v({onReset:!0}),captured:v({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:v({onScroll:!0}),captured:v({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:v({onSubmit:!0}),captured:v({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:v({onTouchCancel:!0}),captured:v({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:v({onTouchEnd:!0}),captured:v({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:v({onTouchMove:!0}),captured:v({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:v({onTouchStart:!0}),captured:v({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:v({onWheel:!0}),captured:v({onWheelCapture:!0})}}},C={topBlur:y.blur,topClick:y.click,topContextMenu:y.contextMenu,topCopy:y.copy,topCut:y.cut,topDoubleClick:y.doubleClick,topDrag:y.drag,topDragEnd:y.dragEnd,topDragEnter:y.dragEnter,topDragExit:y.dragExit,topDragLeave:y.dragLeave,topDragOver:y.dragOver,topDragStart:y.dragStart,topDrop:y.drop,topError:y.error,topFocus:y.focus,topInput:y.input,topKeyDown:y.keyDown,topKeyPress:y.keyPress,topKeyUp:y.keyUp,topLoad:y.load,topMouseDown:y.mouseDown,topMouseMove:y.mouseMove,topMouseOut:y.mouseOut,topMouseOver:y.mouseOver,topMouseUp:y.mouseUp,topPaste:y.paste,topReset:y.reset,topScroll:y.scroll,topSubmit:y.submit,topTouchCancel:y.touchCancel,topTouchEnd:y.touchEnd,topTouchMove:y.touchMove,topTouchStart:y.touchStart,topWheel:y.wheel};for(var E in C)C[E].dependencies=[E];var b={eventTypes:y,executeDispatch:function(e,t,n){var o=r.executeDispatch(e,t,n);o===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var v=C[e];if(!v)return null;var y;switch(e){case g.topInput:case g.topLoad:case g.topError:case g.topReset:case g.topSubmit:y=a;break;case g.topKeyPress:if(0===h(r))return null;case g.topKeyDown:case g.topKeyUp:y=u;break;case g.topBlur:case g.topFocus:y=s;break;case g.topClick:if(2===r.button)return null;case g.topContextMenu:case g.topDoubleClick:case g.topMouseDown:case g.topMouseMove:case g.topMouseOut:case g.topMouseOver:case g.topMouseUp:y=l;break;case g.topDrag:case g.topDragEnd:case g.topDragEnter:case g.topDragExit:case g.topDragLeave:case g.topDragOver:case g.topDragStart:case g.topDrop:y=c;break;case g.topTouchCancel:case g.topTouchEnd:case g.topTouchMove:case g.topTouchStart:y=p;break;case g.topScroll:y=d;break;case g.topWheel:y=f;break;case g.topCopy:case g.topCut:case g.topPaste:y=i}m(y);var E=y.getPooled(v,n,r);return o.accumulateTwoPhaseDispatches(E),E}};t.exports=b},{}],100:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(103),o={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};r.augmentClass(n,o),t.exports=n},{}],101:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(103),o={data:null};r.augmentClass(n,o),t.exports=n},{}],102:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(107),o={dataTransfer:null};r.augmentClass(n,o),t.exports=n},{}],103:[function(e,t){"use strict";function n(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var a=r[o];this[o]=a?a(n):n[o]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=s?i.thatReturnsTrue:i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse}var r=e(30),o=e(29),i=e(124),a=e(135),s={type:null,target:a,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};o(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=i.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=i.thatReturnsTrue},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=s,n.augmentClass=function(e,t){var n=this,i=Object.create(n.prototype);o(i,e.prototype),e.prototype=i,e.prototype.constructor=e,e.Interface=o({},n.Interface,t),e.augmentClass=n.augmentClass,r.addPoolingTo(e,r.threeArgumentPooler)},r.addPoolingTo(n,r.threeArgumentPooler),t.exports=n},{}],104:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(109),o={relatedTarget:null};r.augmentClass(n,o),t.exports=n},{}],105:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(103),o={data:null};r.augmentClass(n,o),t.exports=n},{}],106:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(109),o=e(132),i=e(133),a=e(134),s={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:a,charCode:function(e){return"keypress"===e.type?o(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?o(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};r.augmentClass(n,s),t.exports=n},{}],107:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(109),o=e(112),i=e(134),a={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:i,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+o.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+o.currentScrollTop}};r.augmentClass(n,a),t.exports=n},{}],108:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(109),o=e(134),i={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:o};r.augmentClass(n,i),t.exports=n},{}],109:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(103),o=e(135),i={view:function(e){if(e.view)return e.view;var t=o(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};r.augmentClass(n,i),t.exports=n},{}],110:[function(e,t){"use strict";function n(e,t,n){r.call(this,e,t,n)}var r=e(107),o={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};r.augmentClass(n,o),t.exports=n},{}],111:[function(e,t){"use strict";var n=e(145),r={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,r,o,i,a,s,u){n(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,r,o,i,a,s,u),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=o.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===o.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(i){}}}},closeAll:function(e){n(this.isInTransaction());for(var t=this.transactionWrappers,r=e;r<t.length;r++){var i,a=t[r],s=this.wrapperInitData[r];try{i=!0,s!==o.OBSERVED_ERROR&&a.close&&a.close.call(this,s),i=!1}finally{if(i)try{this.closeAll(r+1)}catch(u){}}}this.wrapperInitData.length=0}},o={Mixin:r,OBSERVED_ERROR:{}};t.exports=o},{}],112:[function(e,t){"use strict";var n={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){n.currentScrollLeft=e.x,n.currentScrollTop=e.y}};t.exports=n},{}],113:[function(e,t){"use strict";function n(e,t){if(r(null!=t),null==e)return t;var n=Array.isArray(e),o=Array.isArray(t);return n&&o?(e.push.apply(e,t),e):n?(e.push(t),e):o?[e].concat(t):[e,t]}var r=e(145);t.exports=n},{}],114:[function(e,t){"use strict";function n(e){for(var t=1,n=0,o=0;o<e.length;o++)t=(t+e.charCodeAt(o))%r,n=(n+t)%r;return t|n<<16}var r=65521;t.exports=n},{}],115:[function(e,t){function n(e){return e.replace(r,function(e,t){return t.toUpperCase()})}var r=/-(.)/g;t.exports=n},{}],116:[function(e,t){"use strict";function n(e){return r(e.replace(o,"ms-"))}var r=e(115),o=/^-ms-/;t.exports=n},{}],117:[function(e,t){"use strict";function n(e,t){var n=o.mergeProps(t,e.props);return!n.hasOwnProperty(a)&&e.props.hasOwnProperty(a)&&(n.children=e.props.children),r.createElement(e.type,n)}var r=e(60),o=e(79),i=e(152),a=(e(163),i({children:null}));t.exports=n},{}],118:[function(e,t){function n(e,t){return e&&t?e===t?!0:r(e)?!1:r(t)?n(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var r=e(149);t.exports=n},{}],119:[function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function r(e){return n(e)?Array.isArray(e)?e.slice():o(e):[e]}var o=e(160);t.exports=r},{}],120:[function(e,t){"use strict";function n(e){var t=o.createFactory(e),n=r.createClass({displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){i(!1)},render:function(){return t(this.props)}});return n}var r=e(38),o=e(60),i=e(145);t.exports=n},{}],121:[function(e,t){function n(e){var t=e.match(l);return t&&t[1].toLowerCase()}function r(e,t){var r=u;s(!!u);var o=n(e),l=o&&a(o);if(l){r.innerHTML=l[1]+e+l[2];for(var c=l[0];c--;)r=r.lastChild}else r.innerHTML=e;var p=r.getElementsByTagName("script");p.length&&(s(t),i(p).forEach(t));for(var d=i(r.childNodes);r.lastChild;)r.removeChild(r.lastChild);return d}var o=e(22),i=e(119),a=e(137),s=e(145),u=o.canUseDOM?document.createElement("div"):null,l=/^\s*<(\w+)/;t.exports=r},{}],122:[function(e,t){function n(e){return"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}t.exports=n},{}],123:[function(e,t){"use strict";function n(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||o.hasOwnProperty(e)&&o[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var r=e(5),o=r.isUnitlessNumber;t.exports=n},{}],124:[function(e,t){function n(e){return function(){return e}}function r(){}r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},t.exports=r},{}],125:[function(e,t){"use strict";var n={};t.exports=n},{}],126:[function(e,t){"use strict";function n(e){return o[e]}function r(e){return(""+e).replace(i,n)}var o={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},i=/[&><"']/g;t.exports=r},{}],127:[function(e,t){"use strict";function n(e){return null==e?null:a(e)?e:r.has(e)?o.getNodeFromInstance(e):(i(null==e.render||"function"!=typeof e.render),void i(!1))}var r=e(69),o=e(73),i=e(145),a=e(147);t.exports=n},{}],128:[function(e,t){"use strict";function n(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function r(e){if(null==e)return e;var t={};return o(e,n,t),t}{var o=e(161);e(163)}t.exports=r},{}],129:[function(e,t){"use strict";function n(e){try{e.focus()}catch(t){}}t.exports=n},{}],130:[function(e,t){"use strict";var n=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=n},{}],131:[function(e,t){function n(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=n},{}],132:[function(e,t){"use strict";function n(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=n},{}],133:[function(e,t){"use strict";function n(e){if(e.key){var t=o[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=r(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?i[e.keyCode]||"Unidentified":""}var r=e(132),o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=n},{}],134:[function(e,t){"use strict";function n(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=o[e];return r?!!n[r]:!1}function r(){return n}var o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=r},{}],135:[function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=n},{}],136:[function(e,t){"use strict";function n(e){var t=e&&(r&&e[r]||e[o]);return"function"==typeof t?t:void 0}var r="function"==typeof Symbol&&Symbol.iterator,o="@@iterator";t.exports=n},{}],137:[function(e,t){function n(e){return o(!!i),p.hasOwnProperty(e)||(e="*"),a.hasOwnProperty(e)||(i.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",a[e]=!i.firstChild),a[e]?p[e]:null}var r=e(22),o=e(145),i=r.canUseDOM?document.createElement("div"):null,a={circle:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],u=[1,"<table>","</table>"],l=[3,"<table><tbody><tr>","</tr></tbody></table>"],c=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:u,colgroup:u,tbody:u,tfoot:u,thead:u,td:l,th:l,circle:c,defs:c,ellipse:c,g:c,line:c,linearGradient:c,path:c,polygon:c,polyline:c,radialGradient:c,rect:c,stop:c,text:c};t.exports=n},{}],138:[function(e,t){"use strict";function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function o(e,t){for(var o=n(e),i=0,a=0;o;){if(3===o.nodeType){if(a=i+o.textContent.length,t>=i&&a>=t)return{node:o,offset:t-i};i=a}o=n(r(o))}}t.exports=o},{}],139:[function(e,t){"use strict";function n(e){return e?e.nodeType===r?e.documentElement:e.firstChild:null}var r=9;t.exports=n},{}],140:[function(e,t){"use strict";function n(){return!o&&r.canUseDOM&&(o="textContent"in document.documentElement?"textContent":"innerText"),o}var r=e(22),o=null;t.exports=n},{}],141:[function(e,t){"use strict";function n(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=n},{}],142:[function(e,t){function n(e){return e.replace(r,"-$1").toLowerCase()}var r=/([A-Z])/g;t.exports=n},{}],143:[function(e,t){"use strict";function n(e){return r(e).replace(o,"-ms-")}var r=e(142),o=/^ms-/;t.exports=n},{}],144:[function(e,t){"use strict";function n(e){return"function"==typeof e&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function r(e,t){var r;if((null===e||e===!1)&&(e=i.emptyElement),"object"==typeof e){var o=e;r=t===o.type&&"string"==typeof o.type?a.createInternalComponent(o):n(o.type)?new o.type(o):new l}else"string"==typeof e||"number"==typeof e?r=a.createInstanceForText(e):u(!1);return r.construct(e),r._mountIndex=0,r._mountImage=null,r}var o=e(43),i=e(62),a=e(76),s=e(29),u=e(145),l=(e(163),function(){});s(l.prototype,o.Mixin,{_instantiateReactComponent:r}),t.exports=r},{}],145:[function(e,t){"use strict";var n=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,s],c=0;u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw u.framesToPop=1,u}};t.exports=n},{}],146:[function(e,t){"use strict";function n(e,t){if(!o.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,i=n in document;if(!i){var a=document.createElement("div");a.setAttribute(n,"return;"),i="function"==typeof a[n]}return!i&&r&&"wheel"===e&&(i=document.implementation.hasFeature("Events.wheel","3.0")),i}var r,o=e(22);o.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=n},{}],147:[function(e,t){function n(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=n},{}],148:[function(e,t){"use strict";function n(e){return e&&("INPUT"===e.nodeName&&r[e.type]||"TEXTAREA"===e.nodeName)}var r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=n},{}],149:[function(e,t){function n(e){return r(e)&&3==e.nodeType}var r=e(147);t.exports=n},{}],150:[function(e,t){"use strict";function n(e){e||(e="");var t,n=arguments.length;if(n>1)for(var r=1;n>r;r++)t=arguments[r],t&&(e=(e?e+" ":"")+t);return e}t.exports=n},{}],151:[function(e,t){"use strict";var n=e(145),r=function(e){var t,r={};n(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(r[t]=t);return r};t.exports=r},{}],152:[function(e,t){var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=n},{}],153:[function(e,t){"use strict";function n(e,t,n){if(!e)return null;var o={};for(var i in e)r.call(e,i)&&(o[i]=t.call(n,e[i],i,e));return o}var r=Object.prototype.hasOwnProperty;t.exports=n},{}],154:[function(e,t){"use strict";function n(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=n},{}],155:[function(e,t){"use strict";function n(e){r(e&&!/[^a-z0-9_]/.test(e))}var r=e(145);t.exports=n},{}],156:[function(e,t){"use strict";function n(e){return o(r.isValidElement(e)),e}var r=e(60),o=e(145);t.exports=n},{}],157:[function(e,t){"use strict";var n=e(22),r=/^[ \r\n\t\f]/,o=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,i=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(i=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),n.canUseDOM){var a=document.createElement("div");a.innerHTML=" ",""===a.innerHTML&&(i=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),r.test(t)||"<"===t[0]&&o.test(t)){e.innerHTML=""+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=i},{}],158:[function(e,t){"use strict";function n(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=n},{}],159:[function(e,t){"use strict";function n(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(155);t.exports=n},{}],160:[function(e,t){function n(e){var t=e.length;if(r(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),r("number"==typeof t),r(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var o=Array(t),i=0;t>i;i++)o[i]=e[i];return o}var r=e(145);t.exports=n},{}],161:[function(e,t){"use strict";function n(e){return h[e]}function r(e,t){return e&&null!=e.key?i(e.key):t.toString(36)}function o(e){return(""+e).replace(m,n)}function i(e){return"$"+o(e)}function a(e,t,n,o,s){var l=typeof e;if(("undefined"===l||"boolean"===l)&&(e=null),null===e||"string"===l||"number"===l||u.isValidElement(e))return o(s,e,""===t?d+r(e,0):t,n),1;var h,m,v,g=0;if(Array.isArray(e))for(var y=0;y<e.length;y++)h=e[y],m=(""!==t?t+f:d)+r(h,y),v=n+g,g+=a(h,m,v,o,s);else{var C=c(e);if(C){var E,b=C.call(e);if(C!==e.entries)for(var _=0;!(E=b.next()).done;)h=E.value,m=(""!==t?t+f:d)+r(h,_++),v=n+g,g+=a(h,m,v,o,s);else for(;!(E=b.next()).done;){var D=E.value;D&&(h=D[1],m=(""!==t?t+f:d)+i(D[0])+f+r(h,0),v=n+g,g+=a(h,m,v,o,s))}}else if("object"===l){p(1!==e.nodeType);for(var x in e)e.hasOwnProperty(x)&&(h=e[x],m=(""!==t?t+f:d)+i(x)+f+r(h,0),v=n+g,g+=a(h,m,v,o,s))}}return g}function s(e,t,n){return null==e?0:a(e,"",0,t,n)}var u=e(60),l=e(68),c=e(136),p=e(145),d=l.SEPARATOR,f=":",h={"=":"=0",".":"=1",":":"=2"},m=/[=.:]/g;t.exports=s},{}],162:[function(e,t){"use strict";function n(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?i(new e.constructor,e):e}function r(e,t,n){s(Array.isArray(e));var r=t[n];s(Array.isArray(r))}function o(e,t){if(s("object"==typeof t),t.hasOwnProperty(p))return s(1===Object.keys(t).length),t[p];var a=n(e);if(t.hasOwnProperty(d)){var h=t[d];s(h&&"object"==typeof h),s(a&&"object"==typeof a),i(a,t[d])}t.hasOwnProperty(u)&&(r(e,t,u),t[u].forEach(function(e){a.push(e)})),t.hasOwnProperty(l)&&(r(e,t,l),t[l].forEach(function(e){a.unshift(e)})),t.hasOwnProperty(c)&&(s(Array.isArray(e)),s(Array.isArray(t[c])),t[c].forEach(function(e){s(Array.isArray(e)),a.splice.apply(a,e)})),t.hasOwnProperty(f)&&(s("function"==typeof t[f]),a=t[f](a));for(var v in t)m.hasOwnProperty(v)&&m[v]||(a[v]=o(e[v],t[v]));return a}var i=e(29),a=e(152),s=e(145),u=a({$push:null}),l=a({$unshift:null}),c=a({$splice:null}),p=a({$set:null}),d=a({$merge:null}),f=a({$apply:null}),h=[u,l,c,p,d,f],m={};h.forEach(function(e){m[e]=!0}),t.exports=o},{}],163:[function(e,t){"use strict";var n=e(124),r=n;t.exports=r},{}]},{},[1])(1)});
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return Bb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){vb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return o(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){sc[a]||(e(b),sc[a]=!0)}function h(a,b){return function(c){return r(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function k(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function l(){}function m(a,b){b!==!1&&H(a),p(this,a),this._d=new Date(+a._d),uc===!1&&(uc=!0,vb.updateOffset(this),uc=!1)}function n(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=vb.localeData(),this._bubble()}function o(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function p(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Kb.length>0)for(c in Kb)d=Kb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function s(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function t(a,b){var c;return b=M(b,a),a.isBefore(b)?c=s(a,b):(c=s(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function u(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=vb.duration(c,d),v(this,e,a),this}}function v(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&pb(a,"Date",ob(a,"Date")+f*c),g&&nb(a,ob(a,"Month")+g*c),d&&vb.updateOffset(a,f||g)}function w(a){return"[object Array]"===Object.prototype.toString.call(a)}function x(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function y(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&C(a[d])!==C(b[d]))&&g++;return g+f}function z(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=lc[a]||mc[b]||b}return a}function A(a){var b,d,e={};for(d in a)c(a,d)&&(b=z(d),b&&(e[b]=a[d]));return e}function B(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}vb[b]=function(e,f){var g,h,i=vb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=vb().utc().set(d,a);return i.call(vb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function C(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function D(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function E(a,b,c){return jb(vb([a,11,31+b-c]),b,c).week}function F(a){return G(a)?366:365}function G(a){return a%4===0&&a%100!==0||a%400===0}function H(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Db]<0||a._a[Db]>11?Db:a._a[Eb]<1||a._a[Eb]>D(a._a[Cb],a._a[Db])?Eb:a._a[Fb]<0||a._a[Fb]>24||24===a._a[Fb]&&(0!==a._a[Gb]||0!==a._a[Hb]||0!==a._a[Ib])?Fb:a._a[Gb]<0||a._a[Gb]>59?Gb:a._a[Hb]<0||a._a[Hb]>59?Hb:a._a[Ib]<0||a._a[Ib]>999?Ib:-1,a._pf._overflowDayOfYear&&(Cb>b||b>Eb)&&(b=Eb),a._pf.overflow=b)}function I(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function J(a){return a?a.toLowerCase().replace("_","-"):a}function K(a){for(var b,c,d,e,f=0;f<a.length;){for(e=J(a[f]).split("-"),b=e.length,c=J(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=L(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&y(e,c,!0)>=b-1)break;b--}f++}return null}function L(a){var b=null;if(!Jb[a]&&Lb)try{b=vb.locale(),require("./locale/"+a),vb.locale(b)}catch(c){}return Jb[a]}function M(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(vb.isMoment(a)||x(a)?+a:+vb(a))-+c,c._d.setTime(+c._d+d),vb.updateOffset(c,!1),c):vb(a).local()}function N(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function O(a){var b,c,d=a.match(Pb);for(b=0,c=d.length;c>b;b++)d[b]=rc[d[b]]?rc[d[b]]:N(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function P(a,b){return a.isValid()?(b=Q(b,a.localeData()),nc[b]||(nc[b]=O(b)),nc[b](a)):a.localeData().invalidDate()}function Q(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Qb.lastIndex=0;d>=0&&Qb.test(a);)a=a.replace(Qb,c),Qb.lastIndex=0,d-=1;return a}function R(a,b){var c,d=b._strict;switch(a){case"Q":return _b;case"DDDD":return bc;case"YYYY":case"GGGG":case"gggg":return d?cc:Tb;case"Y":case"G":case"g":return ec;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?dc:Ub;case"S":if(d)return _b;case"SS":if(d)return ac;case"SSS":if(d)return bc;case"DDD":return Sb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Wb;case"a":case"A":return b._locale._meridiemParse;case"x":return Zb;case"X":return $b;case"Z":case"ZZ":return Xb;case"T":return Yb;case"SSSS":return Vb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?ac:Rb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Rb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp($(Z(a.replace("\\","")),"i"))}}function S(a){a=a||"";var b=a.match(Xb)||[],c=b[b.length-1]||[],d=(c+"").match(jc)||["-",0,0],e=+(60*d[1])+C(d[2]);return"+"===d[0]?e:-e}function T(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Db]=3*(C(b)-1));break;case"M":case"MM":null!=b&&(e[Db]=C(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Db]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Eb]=C(b));break;case"Do":null!=b&&(e[Eb]=C(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=C(b));break;case"YY":e[Cb]=vb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Cb]=C(b);break;case"a":case"A":c._meridiem=b;break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Fb]=C(b);break;case"m":case"mm":e[Gb]=C(b);break;case"s":case"ss":e[Hb]=C(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Ib]=C(1e3*("0."+b));break;case"x":c._d=new Date(C(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=S(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=C(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=vb.parseTwoDigitYear(b)}}function U(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Cb],jb(vb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Cb],jb(vb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=kb(d,e,f,h,g),a._a[Cb]=i.year,a._dayOfYear=i.dayOfYear}function V(a){var c,d,e,f,g=[];if(!a._d){for(e=X(a),a._w&&null==a._a[Eb]&&null==a._a[Db]&&U(a),a._dayOfYear&&(f=b(a._a[Cb],e[Cb]),a._dayOfYear>F(f)&&(a._pf._overflowDayOfYear=!0),d=fb(f,0,a._dayOfYear),a._a[Db]=d.getUTCMonth(),a._a[Eb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Fb]&&0===a._a[Gb]&&0===a._a[Hb]&&0===a._a[Ib]&&(a._nextDay=!0,a._a[Fb]=0),a._d=(a._useUTC?fb:eb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Fb]=24)}}function W(a){var b;a._d||(b=A(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],V(a))}function X(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function Y(b){if(b._f===vb.ISO_8601)return void ab(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Q(b._f,b._locale).match(Pb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(R(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),rc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),T(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Fb]<=12&&(b._pf.bigHour=a),b._a[Fb]=k(b._locale,b._a[Fb],b._meridiem),V(b),H(b)}function Z(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function $(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function _(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],Y(b),I(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));o(a,c||b)}function ab(a){var b,c,d=a._i,e=fc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=hc.length;c>b;b++)if(hc[b][1].exec(d)){a._f=hc[b][0]+(e[6]||" ");break}for(b=0,c=ic.length;c>b;b++)if(ic[b][1].exec(d)){a._f+=ic[b][0];break}d.match(Xb)&&(a._f+="Z"),Y(a)}else a._isValid=!1}function bb(a){ab(a),a._isValid===!1&&(delete a._isValid,vb.createFromInputFallback(a))}function cb(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function db(b){var c,d=b._i;d===a?b._d=new Date:x(d)?b._d=new Date(+d):null!==(c=Mb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?bb(b):w(d)?(b._a=cb(d.slice(0),function(a){return parseInt(a,10)}),V(b)):"object"==typeof d?W(b):"number"==typeof d?b._d=new Date(d):vb.createFromInputFallback(b)}function eb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function gb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function hb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ib(a,b,c){var d=vb.duration(a).abs(),e=Ab(d.as("s")),f=Ab(d.as("m")),g=Ab(d.as("h")),h=Ab(d.as("d")),i=Ab(d.as("M")),j=Ab(d.as("y")),k=e<oc.s&&["s",e]||1===f&&["m"]||f<oc.m&&["mm",f]||1===g&&["h"]||g<oc.h&&["hh",g]||1===h&&["d"]||h<oc.d&&["dd",h]||1===i&&["M"]||i<oc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,hb.apply({},k)}function jb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=vb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function kb(a,b,c,d,e){var f,g,h=fb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:F(a-1)+g}}function lb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||vb.localeData(b._l),null===d||e===a&&""===d?vb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),vb.isMoment(d)?new m(d,!0):(e?w(e)?_(b):Y(b):db(b),c=new m(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function mb(a,b){var c,d;if(1===b.length&&w(b[0])&&(b=b[0]),!b.length)return vb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function nb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),D(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function ob(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function pb(a,b,c){return"Month"===b?nb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function qb(a,b){return function(c){return null!=c?(pb(this,a,c),vb.updateOffset(this,b),this):ob(this,a)}}function rb(a){return 400*a/146097}function sb(a){return 146097*a/400}function tb(a){vb.duration.fn[a]=function(){return this._data[a]}}function ub(a){"undefined"==typeof ender&&(wb=zb.moment,zb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vb):vb)}for(var vb,wb,xb,yb="2.9.0",zb="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Ab=Math.round,Bb=Object.prototype.hasOwnProperty,Cb=0,Db=1,Eb=2,Fb=3,Gb=4,Hb=5,Ib=6,Jb={},Kb=[],Lb="undefined"!=typeof module&&module&&module.exports,Mb=/^\/?Date\((\-?\d+)/i,Nb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ob=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Pb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Qb=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rb=/\d\d?/,Sb=/\d{1,3}/,Tb=/\d{1,4}/,Ub=/[+\-]?\d{1,6}/,Vb=/\d+/,Wb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Xb=/Z|[\+\-]\d\d:?\d\d/gi,Yb=/T/i,Zb=/[\+\-]?\d+/,$b=/[\+\-]?\d+(\.\d{1,3})?/,_b=/\d/,ac=/\d\d/,bc=/\d{3}/,cc=/\d{4}/,dc=/[+-]?\d{6}/,ec=/[+-]?\d+/,fc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gc="YYYY-MM-DDTHH:mm:ssZ",hc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ic=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],jc=/([\+\-]|\d\d)/gi,kc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),lc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},mc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},nc={},oc={s:45,m:45,h:22,d:26,M:11},pc="DDD w W M D d".split(" "),qc="M D H h m s w W".split(" "),rc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return r(this.year()%100,2)},YYYY:function(){return r(this.year(),4)},YYYYY:function(){return r(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+r(Math.abs(a),6)},gg:function(){return r(this.weekYear()%100,2)},gggg:function(){return r(this.weekYear(),4)},ggggg:function(){return r(this.weekYear(),5)},GG:function(){return r(this.isoWeekYear()%100,2)},GGGG:function(){return r(this.isoWeekYear(),4)},GGGGG:function(){return r(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return C(this.milliseconds()/100)},SS:function(){return r(C(this.milliseconds()/10),2)},SSS:function(){return r(this.milliseconds(),3)},SSSS:function(){return r(this.milliseconds(),3)},Z:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+":"+r(C(a)%60,2)},ZZ:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+r(C(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},sc={},tc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],uc=!1;pc.length;)xb=pc.pop(),rc[xb+"o"]=i(rc[xb],xb);for(;qc.length;)xb=qc.pop(),rc[xb+xb]=h(rc[xb],2);rc.DDDD=h(rc.DDD,3),o(l.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=vb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=vb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return jb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),lb(g)},vb.suppressDeprecationWarnings=!1,vb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),vb.min=function(){var a=[].slice.call(arguments,0);return mb("isBefore",a)},vb.max=function(){var a=[].slice.call(arguments,0);return mb("isAfter",a)},vb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),lb(g).utc()},vb.unix=function(a){return vb(1e3*a)},vb.duration=function(a,b){var d,e,f,g,h=a,i=null;return vb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Nb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:C(i[Eb])*d,h:C(i[Fb])*d,m:C(i[Gb])*d,s:C(i[Hb])*d,ms:C(i[Ib])*d}):(i=Ob.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):null==h?h={}:"object"==typeof h&&("from"in h||"to"in h)&&(g=t(vb(h.from),vb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new n(h),vb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},vb.version=yb,vb.defaultFormat=gc,vb.ISO_8601=function(){},vb.momentProperties=Kb,vb.updateOffset=function(){},vb.relativeTimeThreshold=function(b,c){return oc[b]===a?!1:c===a?oc[b]:(oc[b]=c,!0)},vb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return vb.locale(a,b)}),vb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?vb.defineLocale(a,b):vb.localeData(a),c&&(vb.duration._locale=vb._locale=c)),vb._locale._abbr},vb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Jb[a]||(Jb[a]=new l),Jb[a].set(b),vb.locale(a),Jb[a]):(delete Jb[a],null)},vb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return vb.localeData(a)}),vb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return vb._locale;if(!w(a)){if(b=L(a))return b;a=[a]}return K(a)},vb.isMoment=function(a){return a instanceof m||null!=a&&c(a,"_isAMomentObject")},vb.isDuration=function(a){return a instanceof n};for(xb=tc.length-1;xb>=0;--xb)B(tc[xb]);vb.normalizeUnits=function(a){return z(a)},vb.invalid=function(a){var b=vb.utc(0/0);return null!=a?o(b._pf,a):b._pf.userInvalidated=!0,b},vb.parseZone=function(){return vb.apply(null,arguments).parseZone()},vb.parseTwoDigitYear=function(a){return C(a)+(C(a)>68?1900:2e3)},vb.isDate=x,o(vb.fn=m.prototype,{clone:function(){return vb(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=vb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():P(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):P(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return I(this)},isDSTShifted:function(){return this._a?this.isValid()&&y(this._a,(this._isUTC?vb.utc(this._a):vb(this._a)).toArray())>0:!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.utcOffset(0,a)},local:function(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(a){var b=P(this,a||vb.defaultFormat);return this.localeData().postformat(b)},add:u(1,"add"),subtract:u(-1,"subtract"),diff:function(a,b,c){var d,e,f=M(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=j(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:q(e)},from:function(a,b){return vb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(vb(),a)},calendar:function(a){var b=a||vb(),c=M(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,vb(b)))},isLeapYear:function(){return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=gb(a,this.localeData()),this.add(a-b,"d")):b},month:qb("Month",!0),startOf:function(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=z(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this>+a):(c=vb.isMoment(a)?+a:+vb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+a>+this):(c=vb.isMoment(a)?+a:+vb(a),+this.clone().endOf(b)<c)},isBetween:function(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)},isSame:function(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this===+a):(c=+vb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),a>this?this:a}),zone:f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}),utcOffset:function(a,b){var c,d=this._offset||0;return null!=a?("string"==typeof a&&(a=S(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateUtcOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.add(c,"m"),d!==a&&(!b||this._changeInProgress?v(this,vb.duration(a-d,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vb.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?d:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(S(this._i)),this},hasAlignedHourOffset:function(a){return a=a?vb(a).utcOffset():0,(this.utcOffset()-a)%60===0},daysInMonth:function(){return D(this.year(),this.month())},dayOfYear:function(a){var b=Ab((vb(this).startOf("day")-vb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=jb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=jb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=jb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return E(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return E(this.year(),a.dow,a.doy)},get:function(a){return a=z(a),this[a]()},set:function(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else a=z(a),"function"==typeof this[a]&&this[a](b);return this},locale:function(b){var c;return b===a?this._locale._abbr:(c=vb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),vb.fn.millisecond=vb.fn.milliseconds=qb("Milliseconds",!1),vb.fn.second=vb.fn.seconds=qb("Seconds",!1),vb.fn.minute=vb.fn.minutes=qb("Minutes",!1),vb.fn.hour=vb.fn.hours=qb("Hours",!0),vb.fn.date=qb("Date",!0),vb.fn.dates=f("dates accessor is deprecated. Use date instead.",qb("Date",!0)),vb.fn.year=qb("FullYear",!0),vb.fn.years=f("years accessor is deprecated. Use year instead.",qb("FullYear",!0)),vb.fn.days=vb.fn.day,vb.fn.months=vb.fn.month,vb.fn.weeks=vb.fn.week,vb.fn.isoWeeks=vb.fn.isoWeek,vb.fn.quarters=vb.fn.quarter,vb.fn.toJSON=vb.fn.toISOString,vb.fn.isUTC=vb.fn.isUtc,o(vb.duration.fn=n.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=q(d/1e3),g.seconds=a%60,b=q(a/60),g.minutes=b%60,c=q(b/60),g.hours=c%24,e+=q(c/24),h=q(rb(e)),e-=q(sb(h)),f+=q(e/30),e%=30,h+=q(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return q(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*C(this._months/12)
},humanize:function(a){var b=ib(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=vb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=vb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=z(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=z(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*rb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(sb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:vb.fn.lang,locale:vb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),vb.duration.fn.toString=vb.duration.fn.toISOString;for(xb in kc)c(kc,xb)&&tb(xb.toLowerCase());vb.duration.fn.asMilliseconds=function(){return this.as("ms")},vb.duration.fn.asSeconds=function(){return this.as("s")},vb.duration.fn.asMinutes=function(){return this.as("m")},vb.duration.fn.asHours=function(){return this.as("h")},vb.duration.fn.asDays=function(){return this.as("d")},vb.duration.fn.asWeeks=function(){return this.as("weeks")},vb.duration.fn.asMonths=function(){return this.as("M")},vb.duration.fn.asYears=function(){return this.as("y")},vb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===C(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Lb?module.exports=vb:"function"==typeof define&&define.amd?(define(function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(zb.moment=wb),vb}),ub(!0)):ub()}).call(this);
/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.md5=t}(this);
/* mousetrap v1.4.6 craig.is/killing/mice */
(function(J,r,f){function s(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function A(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return h[a.which]?h[a.which]:B[a.which]?B[a.which]:String.fromCharCode(a.which).toLowerCase()}function t(a){a=a||{};var b=!1,d;for(d in n)a[d]?b=!0:n[d]=0;b||(u=!1)}function C(a,b,d,c,e,v){var g,k,f=[],h=d.type;if(!l[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(g=0;g<l[a].length;++g)if(k=
l[a][g],!(!c&&k.seq&&n[k.seq]!=k.level||h!=k.action||("keypress"!=h||d.metaKey||d.ctrlKey)&&b.sort().join(",")!==k.modifiers.sort().join(","))){var m=c&&k.seq==c&&k.level==v;(!c&&k.combo==e||m)&&l[a].splice(g,1);f.push(k)}return f}function K(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function x(a,b,d,c){m.stopCallback(b,b.target||b.srcElement,d,c)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?
b.stopPropagation():b.cancelBubble=!0)}function y(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=A(a);b&&("keyup"==a.type&&z===b?z=!1:m.handleKey(b,K(a),a))}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||"meta"==a}function L(a,b,d,c){function e(b){return function(){u=b;++n[a];clearTimeout(D);D=setTimeout(t,1E3)}}function v(b){x(d,b,a);"keyup"!==c&&(z=A(b));setTimeout(t,10)}for(var g=n[a]=0;g<b.length;++g){var f=g+1===b.length?v:e(c||E(b[g+1]).action);F(b[g],f,c,a,g)}}function E(a,b){var d,
c,e,f=[];d="+"===a?["+"]:a.split("+");for(e=0;e<d.length;++e)c=d[e],G[c]&&(c=G[c]),b&&"keypress"!=b&&H[c]&&(c=H[c],f.push("shift")),w(c)&&f.push(c);d=c;e=b;if(!e){if(!p){p={};for(var g in h)95<g&&112>g||h.hasOwnProperty(g)&&(p[h[g]]=g)}e=p[d]?"keydown":"keypress"}"keypress"==e&&f.length&&(e="keydown");return{key:c,modifiers:f,action:e}}function F(a,b,d,c,e){q[a+":"+d]=b;a=a.replace(/\s+/g," ");var f=a.split(" ");1<f.length?L(a,f,b,d):(d=E(a,d),l[d.key]=l[d.key]||[],C(d.key,d.modifiers,{type:d.action},
c,a,e),l[d.key][c?"unshift":"push"]({callback:b,modifiers:d.modifiers,action:d.action,seq:c,level:e,combo:a}))}var h={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},B={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},H={"~":"`","!":"1",
"@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},G={option:"alt",command:"meta","return":"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p,l={},q={},n={},D,z=!1,I=!1,u=!1;for(f=1;20>f;++f)h[111+f]="f"+f;for(f=0;9>=f;++f)h[f+96]=f;s(r,"keypress",y);s(r,"keydown",y);s(r,"keyup",y);var m={bind:function(a,b,d){a=a instanceof Array?a:[a];for(var c=0;c<a.length;++c)F(a[c],b,d);return this},
unbind:function(a,b){return m.bind(a,function(){},b)},trigger:function(a,b){if(q[a+":"+b])q[a+":"+b]({},a);return this},reset:function(){l={};q={};return this},stopCallback:function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable},handleKey:function(a,b,d){var c=C(a,b,d),e;b={};var f=0,g=!1;for(e=0;e<c.length;++e)c[e].seq&&(f=Math.max(f,c[e].level));for(e=0;e<c.length;++e)c[e].seq?c[e].level==f&&(g=!0,
b[c[e].seq]=1,x(c[e].callback,d,c[e].combo,c[e].seq)):g||x(c[e].callback,d,c[e].combo);c="keypress"==d.type&&I;d.type!=u||w(a)||c||t(b);I=g&&"keydown"==d.type}};J.Mousetrap=m;"function"===typeof define&&define.amd&&define(m)})(window,document);

Mousetrap=function(a){var d={},e=a.stopCallback;a.stopCallback=function(b,c,a){return d[a]?!1:e(b,c,a)};a.bindGlobal=function(b,c,e){a.bind(b,c,e);if(b instanceof Array)for(c=0;c<b.length;c++)d[b[c]]=!0;else d[b]=!0};return a}(Mousetrap);

this.basicContext={_overflow:null,_dom:function(t){return null==t?$(".basicContext"):$(".basicContext").find(""+t)},_valid:function(t){return null!=t?(null==t["class"]&&(t["class"]=""),null==t.type&&(t.type="item"),null==t.icon&&(t.icon=""),null==t.title&&(t.title="Undefined"),null==t.fn&&"separator"!==t.type?(console.warn("Missing fn for item '"+t.title+"'"),!1):!0):!1},_build:function(t){var n,e,o;return e=0,n=function(t){var n;if(!basicContext._valid(t))return"";switch(t.num=e++,n="<span class='"+t.icon+"'></span>",""===t.icon&&(n=""),t.type){case"item":return"<tr class='"+t["class"]+"'><td data-num='"+t.num+"'>"+n+t.title+"</td></tr>";case"separator":return"<tr class='separator'></tr>"}},"<div class='basicContextContainer'>\n	<div class='basicContext'>\n		<table>\n			<tbody>\n				"+function(){var e,i,l;for(l=[],e=0,i=t.length;i>e;e++)o=t[e],l.push(n(o));return l}().join("")+"\n			</tbody>\n		</table>\n	</div>\n</div>"},_normalizeEvent:function(t){var n;return null!=t&&"touchend"===t.type&&null==t.pageX&&null==t.pageY&&(n=t.originalEvent.changedTouches,n.length>0&&(t.pageX=n[0].pageX,t.pageY=n[0].pageY)),t},_getPosition:function(t){var n,e,o,i;return t=basicContext._normalizeEvent(t),o=t.pageX,i=t.pageY-$(document).scrollTop(),n={width:$("html").width(),height:$("html").height()},(null==o||0>o)&&(o=0),(null==i||0>i)&&(i=0),o>n.width&&(o=n.width),i>n.height&&(i=n.height),e={width:basicContext._dom().outerWidth(!0),height:basicContext._dom().outerHeight(!0)},o+e.width>n.width&&(o-=e.width),i+e.height>n.height&&(i-=i+e.height-n.height),e.height>n.height&&(i=0,basicContext._dom().addClass("basicContext--scrollable")),{x:o,y:i}},_bind:function(t){return basicContext._dom("td[data-num='"+t.num+"']").click(t.fn)},show:function(t,n,e,o){var i,l,a,s;for($("body").append(basicContext._build(t)),null==basicContext._overflow&&(basicContext._overflow=$("body").css("overflow"),$("body").css("overflow","hidden")),i=basicContext._getPosition(n),basicContext._dom().css({top:""+i.y+"px",left:""+i.x+"px",opacity:1}),null==e&&(e=basicContext.close),basicContext._dom().parent().click(e),a=0,s=t.length;s>a;a++)l=t[a],basicContext._bind(l);return n.preventDefault(),null!=o&&o(),!0},visible:function(){return 0===basicContext._dom().length?!1:!0},close:function(){return basicContext._dom().parent().remove(),null!=basicContext._overflow&&($("body").css("overflow",basicContext._overflow),basicContext._overflow=null),!0}};
this.basicModal={_lastFocus:null,_dom:function(a){return null==a?$(".basicModal"):$(".basicModal").find(""+a)},_valid:function(a){var l,o,n;return null!=a?(null==a.body&&(a.body=""),null==a["class"]&&(a["class"]=""),null==a.closable&&(a.closable=!0),null!=(null!=(l=a.buttons)?l.action:void 0)&&(null==a.buttons.action["class"]&&(a.buttons.action["class"]=""),null==a.buttons.action.title&&(a.buttons.action.title="OK")),null!=(null!=(o=a.buttons)?o.cancel:void 0)?null==a.buttons.cancel.title&&(a.buttons.cancel.title="Cancel"):null!=(null!=(n=a.buttons)?n.action:void 0)&&(a.buttons.action["class"]+=" basicModal__button--full"),!0):!1},_build:function(a){var l,o,n;return l="<div class='basicModalContainer basicModalContainer--fadeIn' data-closable='"+a.closable+"'>\n	<div class='basicModal basicModal--fadeIn "+a["class"]+'\' role="dialog">\n		'+a.body,null!=(null!=(o=a.buttons)?o.cancel:void 0)&&(l+=-1===a["class"].indexOf("login")?"<a id='basicModal__cancel' class='basicModal__button'>"+a.buttons.cancel.title+"</a>":"<div id='basicModal__cancel' class='basicModal__button' aria-label='close'><a class='ion-close'></a></div>"),null!=(null!=(n=a.buttons)?n.action:void 0)&&(l+="<a id='basicModal__action' class='basicModal__button "+a.buttons.action["class"]+"'>"+a.buttons.action.title+"</a>"),l+="	</div>\n</div>"},_getValues:function(){var a;return a=null,(0!==basicModal._dom("input").length||0!==basicModal._dom(".basicModal__dropdown").length)&&(a={},basicModal._dom("input").each(function(){var l,o;return l=$(this).attr("data-name"),o=$(this).val(),a[l]=o}),basicModal._dom(".basicModal__dropdown").each(function(){var l,o;return l=$(this).attr("data-name"),o=$(this).attr("data-value"),a[l]=o})),a},_bind:function(a){var l,o,n,t,s;return null!=(null!=(o=a.buttons)&&null!=(n=o.cancel)?n.fn:void 0)&&basicModal._dom("#basicModal__cancel").click(function(){return $(this).hasClass("basicModal__button--active")?!1:($(this).addClass("basicModal__button--active"),a.buttons.cancel.fn())}),null!=(null!=(t=a.buttons)&&null!=(s=t.action)?s.fn:void 0)&&basicModal._dom("#basicModal__action").click(function(){return $(this).hasClass("basicModal__button--active")?!1:($(this).addClass("basicModal__button--active"),a.buttons.action.fn(basicModal._getValues()))}),basicModal._dom("input").keydown(function(){return $(this).removeClass("error")}),l=null,basicModal._dom(".basicModal__dropdown .front").click(function(){var a;return a=$(this).parent(),clearTimeout(l),a.find(".back").show(),a.addClass("flip")}),basicModal._dom('.basicModal__dropdown .back ul li[class!="separator"]').click(function(){var a,o;return a=$(this).parent().parent().parent(),o=$(this).clone(),o.find("span").remove(),o=o.html().trim(),a.find(".front span").html(o),a.attr("data-value",$(this).data("value")),a.removeClass("flip"),l=setTimeout(function(){return a.find(".back").hide()},3e3)})},show:function(a){return basicModal._valid(a)?(basicModal._lastFocus=document.activeElement,0!==basicModal._dom().parent().length?(basicModal.close(!0),setTimeout(function(){return basicModal.show(a)},301),!1):($("body").append(basicModal._build(a)),basicModal._bind(a),0!==basicModal._dom("input").length&&basicModal._dom("input")[0].focus(),null!=a.callback&&a.callback(),!0)):!1},error:function(a){return basicModal.reset(),basicModal._dom("input[data-name='"+a+"'], .basicModal__dropdown[data-name='"+a+"']").addClass("error").focus().select(),basicModal._dom().removeClass("basicModal--fadeIn basicModal--shake"),setTimeout(function(){return basicModal._dom().addClass("basicModal--shake")},1)},visible:function(){return 0===basicModal._dom().parent().length?!1:!0},action:function(){return 0!==basicModal._dom("#basicModal__action").length?(basicModal._dom("#basicModal__action").click(),!0):!1},cancel:function(){return 0!==basicModal._dom("#basicModal__cancel").length?(basicModal._dom("#basicModal__cancel").click(),!0):!1},reset:function(){return basicModal._dom(".basicModal__button").removeClass("basicModal__button--active"),basicModal._dom(".input, .basicModal__dropdown").removeClass("error"),!0},close:function(a){var l;return l=basicModal._dom().parent(),null==a||a===!0?"true"!==l.attr("data-closable")&&a!==!0?!1:(l.removeClass("basicModalContainer--fadeIn").addClass("basicModalContainer--fadeOut"),setTimeout(function(){return l.remove()},300),null!=basicModal._lastFocus&&(basicModal._lastFocus.focus(),basicModal._lastFocus=null),!0):!1}};
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AlbumList = (function (_React$Component) {
	function AlbumList() {
		_classCallCheck(this, AlbumList);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(AlbumList, _React$Component);

	_prototypeProperties(AlbumList, null, {
		render: {
			value: function render() {
				var albumThumbs = [];

				$.each(this.props.data, function (key, value) {
					albumThumbs.push(React.createElement(AlbumThumb, { key: value.id,
						id: value.id,
						title: value.title,
						sysstamp: value.sysstamp,
						unsorted: value.unsorted,
						star: value.star,
						"public": value["public"],
						recent: value.recent,
						password: value.password,
						thumbs: [value.thumb0, value.thumb1, value.thumb2] }));
				});

				return React.createElement(
					"div",
					null,
					albumThumbs
				);
			},
			writable: true,
			configurable: true
		}
	});

	return AlbumList;
})(React.Component);
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AlbumThumb = (function (_React$Component) {
	function AlbumThumb() {
		_classCallCheck(this, AlbumThumb);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(AlbumThumb, _React$Component);

	_prototypeProperties(AlbumThumb, null, {
		parseThumbs: {
			value: function parseThumbs(thumbs) {
				var passwordThumb = "src/images/password.svg",
				    noImagesThumb = "src/images/no_images.svg";

				if (album.password && lychee.publicMode) {
					thumbs[0] = passwordThumb;
					thumbs[1] = passwordThumb;
					thumbs[2] = passwordThumb;
				} else {
					if (!thumbs[0]) thumbs[0] = noImagesThumb;
					if (!thumbs[1]) thumbs[1] = noImagesThumb;
					if (!thumbs[2]) thumbs[2] = noImagesThumb;
				}

				return thumbs;
			},
			writable: true,
			configurable: true
		},
		generateClasses: {
			value: function generateClasses() {
				var cx = React.addons.classSet,
				    classes = {};

				classes.unsorted = cx({
					badge: true,
					"badge--show": this.props.unsorted,
					"icn-unsorted": true
				});

				classes.star = cx({
					badge: true,
					"badge--show": this.props.star,
					"icn-star": true
				});

				classes["public"] = cx({
					badge: true,
					"badge--show": this.props["public"],
					"icn-public": true
				});

				classes.recent = cx({
					badge: true,
					"badge--show": this.props.recent,
					"icn-recent": true
				});

				classes.password = cx({
					badge: true,
					"badge--show": this.props.password,
					"icn-password": true
				});

				return classes;
			},
			writable: true,
			configurable: true
		},
		handleClick: {
			value: function handleClick(albumID) {
				lychee.goto(albumID);
			},
			writable: true,
			configurable: true
		},
		handleContextMenu: {
			value: function handleContextMenu(albumID, e) {
				contextMenu.album(albumID, e);
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var thumbs = this.parseThumbs(this.props.thumbs),
				    classes = this.generateClasses();

				return React.createElement(
					"div",
					{ className: "album contentZoomIn",
						"data-id": this.props.id,
						"data-password": this.props.password,
						onClick: this.handleClick.bind(this, this.props.id),
						onContextMenu: this.handleContextMenu.bind(this, this.props.id) },
					React.createElement("img", { src: thumbs[2], width: "200", height: "200", alt: "thumb", "data-type": "nonretina" }),
					React.createElement("img", { src: thumbs[1], width: "200", height: "200", alt: "thumb", "data-type": "nonretina" }),
					React.createElement("img", { src: thumbs[0], width: "200", height: "200", alt: "thumb", "data-type": this.props.type }),
					React.createElement(ThumbOverlay, { title: this.props.title, sysstamp: this.props.sysstamp }),
					React.createElement("a", { className: classes.star, dangerouslySetInnerHTML: { __html: build.iconic("star") } }),
					React.createElement("a", { className: classes["public"], dangerouslySetInnerHTML: { __html: build.iconic("eye") } }),
					React.createElement("a", { className: classes.unsorted, dangerouslySetInnerHTML: { __html: build.iconic("list") } }),
					React.createElement("a", { className: classes.recent, dangerouslySetInnerHTML: { __html: build.iconic("clock") } }),
					React.createElement("a", { className: classes.password, dangerouslySetInnerHTML: { __html: build.iconic("lock-locked") } })
				);
			},
			writable: true,
			configurable: true
		}
	});

	return AlbumThumb;
})(React.Component);
"use strict";

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AlbumsApp = (function (_React$Component) {
	function AlbumsApp(props) {
		_classCallCheck(this, AlbumsApp);

		_get(Object.getPrototypeOf(AlbumsApp.prototype), "constructor", this).call(this, props);
		this.state = {
			smartalbums: {},
			albums: {},
			data: {}
		};
	}

	_inherits(AlbumsApp, _React$Component);

	_prototypeProperties(AlbumsApp, null, {
		update: {
			value: function update(id, key, value) {
				var newState = React.addons.update(this.state, {
					albums: _defineProperty({}, id, _defineProperty({}, key, { $set: value }))
				});

				this.setState(newState);
			},
			writable: true,
			configurable: true
		},
		componentDidMount: {
			value: function componentDidMount() {
				var startTime,
				    durationTime,
				    waitTime,
				    that = this;

				// lychee.animate('.album, .photo', 'contentZoomOut');
				// lychee.animate('.divider', 'fadeOut');

				startTime = new Date().getTime();

				api.post("Album::getAll", {}, function (data) {
					/* Smart Albums */
					data.unsortedAlbum = {
						id: 0,
						title: "Unsorted",
						sysdate: data.unsortedNum + " photos",
						unsorted: true,
						thumb0: data.unsortedThumb0,
						thumb1: data.unsortedThumb1,
						thumb2: data.unsortedThumb2
					};

					data.starredAlbum = {
						id: "f",
						title: "Starred",
						sysdate: data.starredNum + " photos",
						star: true,
						thumb0: data.starredThumb0,
						thumb1: data.starredThumb1,
						thumb2: data.starredThumb2
					};

					data.publicAlbum = {
						id: "s",
						title: "Public",
						sysdate: data.publicNum + " photos",
						"public": true,
						thumb0: data.publicThumb0,
						thumb1: data.publicThumb1,
						thumb2: data.publicThumb2
					};

					data.recentAlbum = {
						id: "r",
						title: "Recent",
						sysdate: data.recentNum + " photos",
						recent: true,
						thumb0: data.recentThumb0,
						thumb1: data.recentThumb1,
						thumb2: data.recentThumb2
					};

					albums.json = data;

					data.smartalbums = (function () {
						var _data$smartalbums = {};

						_defineProperty(_data$smartalbums, data.unsortedAlbum.id, data.unsortedAlbum);

						_defineProperty(_data$smartalbums, data.starredAlbum.id, data.starredAlbum);

						_defineProperty(_data$smartalbums, data.publicAlbum.id, data.publicAlbum);

						_defineProperty(_data$smartalbums, data.recentAlbum.id, data.recentAlbum);

						return _data$smartalbums;
					})();

					// Calculate delay
					durationTime = new Date().getTime() - startTime;
					if (durationTime > 300) waitTime = 0;else waitTime = 300 - durationTime;

					// Skip delay when opening a blank Lychee
					if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0;
					if (visible.album() && lychee.content.html() === "") waitTime = 0;

					setTimeout(function () {
						header.setMode("albums");
						// console.log(data);
						// view.albums.init();
						console.log({
							smartalbums: data.smartalbums,
							albums: data.content,
							data: data
						});
						that.setState({
							smartalbums: data.smartalbums,
							albums: data.content,
							data: data
						});
						// lychee.animate('.album, .photo', 'contentZoomIn');
					}, waitTime);
				});
			},
			writable: true,
			configurable: true
		},
		setTitle: {
			value: function setTitle(id, title) {
				this.update(id, "title", title);
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(Divider, { title: "Smart Albums" }),
					React.createElement(AlbumList, { data: this.state.smartalbums }),
					React.createElement(Divider, { title: "Albums" }),
					React.createElement(AlbumList, { data: this.state.albums })
				);
			},
			writable: true,
			configurable: true
		}
	});

	return AlbumsApp;
})(React.Component);
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Divider = (function (_React$Component) {
	function Divider() {
		_classCallCheck(this, Divider);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(Divider, _React$Component);

	_prototypeProperties(Divider, null, {
		render: {
			value: function render() {
				return React.createElement(
					"div",
					{ className: "divider fadeIn" },
					React.createElement(
						"h1",
						null,
						this.props.title
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Divider;
})(React.Component);
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ThumbOverlay = (function (_React$Component) {
	function ThumbOverlay() {
		_classCallCheck(this, ThumbOverlay);

		if (_React$Component != null) {
			_React$Component.apply(this, arguments);
		}
	}

	_inherits(ThumbOverlay, _React$Component);

	_prototypeProperties(ThumbOverlay, null, {
		parseTitle: {
			value: function parseTitle(title) {
				if (title === undefined || title.length === 0) title = "Untitled";
				if (title.length > 18) title = title.substr(0, 18) + "...";

				return title;
			},
			writable: true,
			configurable: true
		},
		parseDate: {
			value: function parseDate(timestamp) {
				// No additional validating required
				// Momentjs returns 'Invalid date' when timestamp is invalid
				return moment.unix(timestamp).format("MMMM YYYY");
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				// Parse data
				var title = this.parseTitle(this.props.title),
				    date = this.parseDate(this.props.sysstamp);

				return React.createElement(
					"div",
					{ className: "overlay" },
					React.createElement(
						"h1",
						{ title: this.props.title },
						title
					),
					React.createElement(
						"a",
						null,
						date
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return ThumbOverlay;
})(React.Component);
"use strict";

function gup(b) {
	b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");

	var a = "[\\?&]" + b + "=([^&#]*)",
	    d = new RegExp(a),
	    c = d.exec(window.location.href);

	if (c === null) {
		return "";
	} else {
		return c[1];
	}
};
"use strict";

/*! jQuery Retina Plugin */
(function (a) {
    a.fn.retina = function (c) {
        var d = {
            "retina-background": false,
            "retina-suffix": "@2x"
        };
        if (c) {
            a.extend(d, c);
        }
        var b = function (f, g) {
            var e = new Image();
            e.onload = function () {
                g(e);
            };
            e.src = f;
        };
        if (window.devicePixelRatio > 1) {
            this.each(function () {
                var e = a(this);
                if (this.tagName.toLowerCase() == "img" && e.attr("src")) {
                    var g = e.attr("src").replace(/\.(?!.*\.)/, d["retina-suffix"] + ".");
                    b(g, function (h) {
                        e.attr("src", h.src);
                        var i = a("<div>").append(e.clone()).remove().html();
                        if (!/(width|height)=["']\d+["']/.test(i)) {
                            e.attr("width", h.width / 2);
                        }
                    });
                }
                if (d["retina-background"]) {
                    var f = e.css("background-image");
                    if (/^url\(.*\)$/.test(f)) {
                        var g = f.substring(4, f.length - 1).replace(/\.(?!.*\.)/, d["retina-suffix"] + ".");
                        b(g, function (h) {
                            e.css("background-image", "url(" + h.src + ")");
                            if (e.css("background-size") == "auto auto") {
                                e.css("background-size", h.width / 2 + "px auto");
                            }
                        });
                    }
                }
            });
        }
    };
})(jQuery);
"use strict";

(function ($) {
	var Swipe = function (el) {
		var self = this;

		this.el = $(el);
		this.pos = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
		this.startTime;

		el.on("touchstart", function (e) {
			self.touchStart(e);
		});
		el.on("touchmove", function (e) {
			self.touchMove(e);
		});
		el.on("touchend", function (e) {
			self.swipeEnd();
		});
		el.on("mousedown", function (e) {
			self.mouseDown(e);
		});
	};

	Swipe.prototype = {
		touchStart: function (e) {
			var touch = e.originalEvent.touches[0];

			this.swipeStart(e, touch.pageX, touch.pageY);
		},

		touchMove: function (e) {
			var touch = e.originalEvent.touches[0];

			this.swipeMove(e, touch.pageX, touch.pageY);
		},

		mouseDown: function (e) {
			var self = this;

			this.swipeStart(e, e.pageX, e.pageY);

			this.el.on("mousemove", function (e) {
				self.mouseMove(e);
			});
			this.el.on("mouseup", function () {
				self.mouseUp();
			});
		},

		mouseMove: function (e) {
			this.swipeMove(e, e.pageX, e.pageY);
		},

		mouseUp: function (e) {
			this.swipeEnd(e);

			this.el.off("mousemove");
			this.el.off("mouseup");
		},

		swipeStart: function (e, x, y) {
			this.pos.start.x = x;
			this.pos.start.y = y;
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.startTime = new Date().getTime();

			this.trigger("swipeStart", e);
		},

		swipeMove: function (e, x, y) {
			this.pos.end.x = x;
			this.pos.end.y = y;

			this.trigger("swipeMove", e);
		},

		swipeEnd: function (e) {
			this.trigger("swipeEnd", e);
		},

		trigger: function (e, originalEvent) {
			var self = this;

			var event = $.Event(e),
			    x = self.pos.start.x - self.pos.end.x,
			    y = self.pos.end.y - self.pos.start.y,
			    radians = Math.atan2(y, x),
			    direction = "up",
			    distance = Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))),
			    angle = Math.round(radians * 180 / Math.PI),
			    speed = Math.round(distance / (new Date().getTime() - self.startTime) * 1000);

			if (angle < 0) {
				angle = 360 - Math.abs(angle);
			}

			if (angle <= 45 && angle >= 0 || angle <= 360 && angle >= 315) {
				direction = "left";
			} else if (angle >= 135 && angle <= 225) {
				direction = "right";
			} else if (angle > 45 && angle < 135) {
				direction = "down";
			}

			event.originalEvent = originalEvent;

			event.swipe = { x: x, y: y, direction: direction, distance: distance, angle: angle, speed: speed };

			$(self.el).trigger(event);
		}
	};

	$.fn.swipe = function () {
		var swipe = new Swipe(this);

		return this;
	};
})(jQuery);
"use strict";

/**
 * @description	Takes care of every action an album can handle and execute.
 * @copyright	2015 by Tobias Reich
 */

album = {

	json: null

};

album.getID = function () {
	var id;

	if (photo.json) id = photo.json.album;else if (album.json) id = album.json.id;else id = $(".album:hover, .album.active").attr("data-id");

	// Search
	if (!id) id = $(".album:hover, .album.active").attr("data-id");
	if (!id) id = $(".photo:hover, .photo.active").attr("data-album-id");

	if (id) return id;else return false;
};

album.load = function (albumID, refresh) {
	var startTime, params, durationTime, waitTime;

	password.get(albumID, function () {
		if (!refresh) {
			lychee.animate(".album, .photo", "contentZoomOut");
			lychee.animate(".divider", "fadeOut");
		}

		startTime = new Date().getTime();

		params = {
			albumID: albumID,
			password: password.value
		};

		api.post("Album::get", params, function (data) {
			if (data === "Warning: Album private!") {
				if (document.location.hash.replace("#", "").split("/")[1] != undefined) {
					// Display photo only
					lychee.setMode("view");
				} else {
					// Album not public
					lychee.content.show();
					lychee.goto("");
				}
				return false;
			}

			if (data === "Warning: Wrong password!") {
				album.load(albumID, refresh);
				return false;
			}

			album.json = data;

			// Calculate delay
			durationTime = new Date().getTime() - startTime;
			if (durationTime > 300) waitTime = 0;else waitTime = 300 - durationTime;

			// Skip delay when refresh is true
			// Skip delay when opening a blank Lychee
			if (refresh === true) waitTime = 0;
			if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0;

			setTimeout(function () {
				view.album.init();

				if (!refresh) {
					lychee.animate(".album, .photo", "contentZoomIn");
					header.setMode("album");
				}
			}, waitTime);
		});
	});
};

album.parse = function () {
	if (!album.json.title) album.json.title = "Untitled";
};

album.add = function () {
	var action;

	action = function (data) {
		var isNumber,
		    title = data.title;

		basicModal.close();

		isNumber = function (n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		};

		if (title.length === 0) title = "Untitled";

		api.post("Album::add", { title: title }, function (data) {
			// Avoid first album to be true
			if (data === true) data = 1;

			if (data !== false && isNumber(data)) {
				albums.refresh();
				lychee.goto(data);
			} else {
				lychee.error(null, params, data);
			}
		});
	};

	basicModal.show({
		body: "<p>Enter a title for the new album: <input class='text' data-name='title' type='text' maxlength='30' placeholder='Title' value='Untitled'></p>",
		buttons: {
			action: {
				title: "Create Album",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};

album["delete"] = function (albumIDs) {
	var action = {},
	    cancel = {},
	    msg = "",
	    albumTitle = "";

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	action.fn = function () {
		var params;

		basicModal.close();

		params = {
			albumIDs: albumIDs.join()
		};

		api.post("Album::delete", params, function (data) {
			if (visible.albums()) {
				albumIDs.forEach(function (id) {
					albums.json.num--;
					view.albums.content["delete"](id);
					delete albums.json.content[id];
				});
			} else {
				albums.refresh();
				lychee.goto("");
			}

			if (data !== true) lychee.error(null, params, data);
		});
	};

	if (albumIDs.toString() === "0") {
		action.title = "Clear Unsorted";
		cancel.title = "Keep Unsorted";

		msg = "<p>Are you sure you want to delete all photos from 'Unsorted'?<br>This action can't be undone!</p>";
	} else if (albumIDs.length === 1) {
		action.title = "Delete Album and Photos";
		cancel.title = "Keep Album";

		// Get title
		if (album.json) albumTitle = album.json.title;else if (albums.json) albumTitle = albums.json.content[albumIDs].title;

		msg = "<p>Are you sure you want to delete the album '" + albumTitle + "' and all of the photos it contains? This action can't be undone!</p>";
	} else {
		action.title = "Delete Albums and Photos";
		cancel.title = "Keep Albums";

		msg = "<p>Are you sure you want to delete all " + albumIDs.length + " selected albums and all of the photos they contain? This action can't be undone!</p>";
	}

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: action.title,
				fn: action.fn,
				"class": "red"
			},
			cancel: {
				title: cancel.title,
				fn: basicModal.close
			}
		}
	});
};

album.setTitle = function (albumIDs) {
	var oldTitle = "",
	    input = "",
	    msg = "",
	    action;

	if (!albumIDs) return false;
	if (albumIDs instanceof Array === false) albumIDs = [albumIDs];

	if (albumIDs.length === 1) {
		// Get old title if only one album is selected
		if (album.json) oldTitle = album.json.title;else if (albums.json) oldTitle = albums.json.content[albumIDs].title;

		if (!oldTitle) oldTitle = "";
		oldTitle = oldTitle.replace("'", "&apos;");
	}

	action = function (data) {
		var params,
		    newTitle = data.title;

		basicModal.close();

		// Remove html from input
		newTitle = lychee.removeHTML(newTitle);

		// Set to Untitled when empty
		newTitle = newTitle === "" ? "Untitled" : newTitle;

		if (visible.album()) {
			album.json.title = newTitle;
			view.album.title();

			if (albums.json) {
				var id = albumIDs[0];
				albums.json.content[id].title = newTitle;
			}
		} else if (visible.albums()) {
			albumIDs.forEach(function (id) {
				// albums.json.content[id].title = newTitle;
				// view.albums.content.title(id);
				test.setTitle(id, newTitle);
			});
		}

		params = {
			albumIDs: albumIDs.join(),
			title: newTitle
		};

		api.post("Album::setTitle", params, function (data) {
			if (data !== true) lychee.error(null, params, data);
		});
	};

	input = "<input class='text' data-name='title' type='text' maxlength='30' placeholder='Title' value='" + oldTitle + "'>";

	if (albumIDs.length === 1) msg = "<p>Enter a new title for this album: " + input + "</p>";else msg = "<p>Enter a title for all " + albumIDs.length + " selected albums: " + input + "</p>";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Set Title",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};

album.setDescription = function (albumID) {
	var oldDescription = album.json.description.replace("'", "&apos;"),
	    action;

	action = function (data) {
		var params,
		    description = data.description;

		basicModal.close();

		// Remove html from input
		description = lychee.removeHTML(description);

		if (visible.album()) {
			album.json.description = description;
			view.album.description();
		}

		params = {
			albumID: albumID,
			description: description
		};

		api.post("Album::setDescription", params, function (data) {
			if (data !== true) lychee.error(null, params, data);
		});
	};

	basicModal.show({
		body: "<p>Please enter a description for this album: <input class='text' data-name='description' type='text' maxlength='800' placeholder='Description' value='" + oldDescription + "'></p>",
		buttons: {
			action: {
				title: "Set Description",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};

album.setPublic = function (albumID, e) {
	var params,
	    password = "",
	    listed = false,
	    downloadable = false;

	albums.refresh();

	if (!basicModal.visible() && album.json["public"] == 0) {
		var msg = "",
		    action;

		action = function () {
			basicModal.close();
			album.setPublic(album.getID(), e);
		};

		msg = "\n\t\t\t\t<p class='less'>This album will be shared with the following properties:</p>\n\t\t\t\t<form>\n\t\t\t\t\t<div class='choice'>\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type='checkbox' name='listed' checked>\n\t\t\t\t\t\t\t<span class='checkbox'>" + build.iconic("check") + "</span>\n\t\t\t\t\t\t\t<span class='label'>Visible</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p>Listed to visitors of your Lychee.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='choice'>\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type='checkbox' name='downloadable'>\n\t\t\t\t\t\t\t<span class='checkbox'>" + build.iconic("check") + "</span>\n\t\t\t\t\t\t\t<span class='label'>Downloadable</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p>Visitors of your Lychee can download this album.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='choice'>\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t<input type='checkbox' name='password'>\n\t\t\t\t\t\t\t<span class='checkbox'>" + build.iconic("check") + "</span>\n\t\t\t\t\t\t\t<span class='label'>Password protected</span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p>Only accessible with a valid password.</p>\n\t\t\t\t\t\t<input class='text' data-name='password' type='password' placeholder='password' value=''>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t";

		basicModal.show({
			body: msg,
			buttons: {
				action: {
					title: "Share Album",
					fn: action
				},
				cancel: {
					title: "Cancel",
					fn: basicModal.close
				}
			}
		});

		$(".basicModal .choice input[name=\"password\"]").on("change", function () {
			if ($(this).prop("checked") === true) $(".basicModal .choice input[data-name=\"password\"]").show().focus();else $(".basicModal .choice input[data-name=\"password\"]").hide();
		});

		return true;
	}

	if (basicModal.visible()) {
		if ($(".basicModal .choice input[name=\"password\"]:checked").length === 1) {
			password = $(".basicModal .choice input[data-name=\"password\"]").val();
			album.json.password = 1;
		} else {
			password = "";
			album.json.password = 0;
		}

		if ($(".basicModal .choice input[name=\"listed\"]:checked").length === 1) listed = true;
		if ($(".basicModal .choice input[name=\"downloadable\"]:checked").length === 1) downloadable = true;
	}

	if (visible.album()) {
		album.json["public"] = album.json["public"] == 0 ? 1 : 0;
		album.json.password = album.json["public"] == 0 ? 0 : album.json.password;

		view.album["public"]();
		view.album.password();

		if (album.json["public"] == 1) contextMenu.shareAlbum(albumID, e);
	}

	params = {
		albumID: albumID,
		password: password,
		visible: listed,
		downloadable: downloadable
	};

	api.post("Album::setPublic", params, function (data) {
		if (data !== true) lychee.error(null, params, data);
	});
};

album.share = function (service) {
	var link = "",
	    url = location.href;

	switch (service) {
		case 0:
			link = "https://twitter.com/share?url=" + encodeURI(url);
			break;
		case 1:
			link = "http://www.facebook.com/sharer.php?u=" + encodeURI(url) + "&t=" + encodeURI(album.json.title);
			break;
		case 2:
			link = "mailto:?subject=" + encodeURI(album.json.title) + "&body=" + encodeURI(url);
			break;
		default:
			link = "";
			break;
	}

	if (link.length > 5) location.href = link;
};

album.getArchive = function (albumID) {
	var link,
	    url = api.path + "?function=Album::getArchive&albumID=" + albumID;

	if (location.href.indexOf("index.html") > 0) link = location.href.replace(location.hash, "").replace("index.html", url);else link = location.href.replace(location.hash, "") + url;

	if (lychee.publicMode) link += "&password=" + password.value;

	location.href = link;
};
"use strict";

/**
 * @description	Takes care of every action albums can handle and execute.
 * @copyright	2015 by Tobias Reich
 */

albums = {

	json: null

};

albums.load = function () {
	test = React.render(React.createElement(AlbumsApp, null), document.getElementById("content"));

	return true;

	var startTime, durationTime, waitTime;

	lychee.animate(".album, .photo", "contentZoomOut");
	lychee.animate(".divider", "fadeOut");

	startTime = new Date().getTime();

	if (albums.json === null) {
		api.post("Album::getAll", {}, function (data) {
			/* Smart Albums */
			data.unsortedAlbum = {
				id: 0,
				title: "Unsorted",
				sysdate: data.unsortedNum + " photos",
				unsorted: "1",
				thumb0: data.unsortedThumb0,
				thumb1: data.unsortedThumb1,
				thumb2: data.unsortedThumb2
			};

			data.starredAlbum = {
				id: "f",
				title: "Starred",
				sysdate: data.starredNum + " photos",
				star: "1",
				thumb0: data.starredThumb0,
				thumb1: data.starredThumb1,
				thumb2: data.starredThumb2
			};

			data.publicAlbum = {
				id: "s",
				title: "Public",
				sysdate: data.publicNum + " photos",
				"public": "1",
				thumb0: data.publicThumb0,
				thumb1: data.publicThumb1,
				thumb2: data.publicThumb2
			};

			data.recentAlbum = {
				id: "r",
				title: "Recent",
				sysdate: data.recentNum + " photos",
				recent: "1",
				thumb0: data.recentThumb0,
				thumb1: data.recentThumb1,
				thumb2: data.recentThumb2
			};

			albums.json = data;

			// Calculate delay
			durationTime = new Date().getTime() - startTime;
			if (durationTime > 300) waitTime = 0;else waitTime = 300 - durationTime;

			// Skip delay when opening a blank Lychee
			if (!visible.albums() && !visible.photo() && !visible.album()) waitTime = 0;
			if (visible.album() && lychee.content.html() === "") waitTime = 0;

			setTimeout(function () {
				header.setMode("albums");
				view.albums.init();
				lychee.animate(".album, .photo", "contentZoomIn");
			}, waitTime);
		});
	} else {
		setTimeout(function () {
			header.setMode("albums");
			view.albums.init();
			lychee.animate(".album, .photo", "contentZoomIn");
		}, 300);
	}
};

albums.parse = function (album) {
	if (album.password && lychee.publicMode) {
		album.thumb0 = "src/images/password.svg";
		album.thumb1 = "src/images/password.svg";
		album.thumb2 = "src/images/password.svg";
	} else {
		if (!album.thumb0) album.thumb0 = "src/images/no_images.svg";
		if (!album.thumb1) album.thumb1 = "src/images/no_images.svg";
		if (!album.thumb2) album.thumb2 = "src/images/no_images.svg";
	}
};

albums.refresh = function () {
	albums.json = null;
};
"use strict";

/**
 * @description	This module communicates with Lychee's API
 * @copyright	2015 by Tobias Reich
 */

api = {

	path: "php/api.php"

};

api.post = function (fn, params, callback) {
	var success, error;

	loadingBar.show();

	params = $.extend({ "function": fn }, params);

	success = function (data) {
		setTimeout(function () {
			loadingBar.hide();
		}, 100);

		// Catch errors
		if (typeof data === "string" && data.substring(0, 7) === "Error: ") {
			lychee.error(data.substring(7, data.length), params, data);
			return false;
		}

		// Convert 1 to true and an empty string to false
		if (data === "1") data = true;else if (data === "") data = false;

		// Convert to JSON if string start with '{' and ends with '}'
		if (typeof data === "string" && data.substring(0, 1) === "{" && data.substring(data.length - 1, data.length) === "}") data = $.parseJSON(data);

		// Output response when debug mode is enabled
		if (lychee.debugMode) console.log(data);

		callback(data);
	};

	error = function (jqXHR, textStatus, errorThrown) {
		lychee.error("Server error or API not found.", params, errorThrown);
	};

	$.ajax({
		type: "POST",
		url: api.path,
		data: params,
		dataType: "text",
		success: success,
		error: error
	});
};
"use strict";

/**
 * @description	This module is used to generate HTML-Code.
 * @copyright	2015 by Tobias Reich
 */

window.build = {};

build.iconic = function (icon, classes, file) {
	var html = "",
	    path = "src/images/";

	file = file || "iconic";
	classes = classes || "";

	html = "\n\t\t\t<svg viewBox='0 0 8 8' class='iconic " + classes + "'>\n\t\t\t\t<use xlink:href='" + path + "" + file + ".svg#" + icon + "' />\n\t\t\t</svg>\n\t\t\t";

	return html;
};

build.divider = function (title) {
	var html = "";

	html = "\n\t\t\t<div class='divider fadeIn'>\n\t\t\t\t<h1>" + title + "</h1>\n\t\t\t</div>\n\t\t\t";

	return html;
};

build.editIcon = function (id) {
	var html = "";

	html = "<div id='" + id + "' class='edit'>" + build.iconic("pencil") + "</div>";

	return html;
};

build.multiselect = function (top, left) {
	var html = "";

	html = "<div id='multiselect' style='top: " + top + "px; left: " + left + "px;'></div>";

	return html;
};

build.album = function (data) {
	if (data === null || data === undefined) return "";

	var html = "",
	    title = data.title,
	    longTitle = "",
	    typeThumb = "";

	if (title !== null && title.length > 18) {
		title = data.title.substr(0, 18) + "...";
		longTitle = data.title;
	}

	if (data.thumb0.split(".").pop() === "svg") typeThumb = "nonretina";

	html = "\n\t\t\t<div class='album' data-id='" + data.id + "' data-password='" + data.password + "'>\n\t\t\t\t<img src='" + data.thumb2 + "' width='200' height='200' alt='thumb' data-type='nonretina'>\n\t\t\t\t<img src='" + data.thumb1 + "' width='200' height='200' alt='thumb' data-type='nonretina'>\n\t\t\t\t<img src='" + data.thumb0 + "' width='200' height='200' alt='thumb' data-type='" + typeThumb + "'>\n\t\t\t\t<div class='overlay'>\n\t\t\t\t\t<h1 title='" + longTitle + "'>" + title + "</h1>\n\t\t\t\t\t<a>" + data.sysdate + "</a>\n\t\t\t\t</div>\n\t\t\t";

	if (lychee.publicMode === false) {
		if (data.star === "1") html += "<a class='badge icn-star'>" + build.iconic("star") + "</a>";
		if (data["public"] === "1") html += "<a class='badge icn-share'>" + build.iconic("eye") + "</a>";
		if (data.unsorted === "1") html += "<a class='badge'>" + build.iconic("list") + "</a>";
		if (data.recent === "1") html += "<a class='badge'>" + build.iconic("clock") + "</a>";
		if (data.password === true) html += "<a class='badge'>" + build.iconic("lock-locked") + "</a>";
	}

	html += "</div>";

	return html;
};

build.photo = function (data) {
	if (data === null || data === undefined) return "";

	var html = "",
	    title = data.title,
	    longTitle = "";

	if (title !== null && title.length > 18) {
		title = data.title.substr(0, 18) + "...";
		longTitle = data.title;
	}

	html = "\n\t\t\t<div class='photo' data-album-id='" + data.album + "' data-id='" + data.id + "'>\n\t\t\t\t<img src='" + data.thumbUrl + "' width='200' height='200' alt='thumb'>\n\t\t\t\t<div class='overlay'>\n\t\t\t\t\t<h1 title='" + longTitle + "'>" + title + "</h1>\n\t\t\t";

	if (data.cameraDate === 1) html += "<a><span title='Camera Date'>" + build.iconic("camera-slr") + "</span>" + data.sysdate + "</a>";else html += "<a>" + data.sysdate + "</a>";

	html += "</div>";

	if (lychee.publicMode === false) {
		if (data.star === "1") html += "<a class='badge iconic-star'>" + build.iconic("star") + "</a>";
		if (data["public"] === "1" && album.json["public"] !== "1") html += "<a class='badge iconic-share'>" + build.iconic("eye") + "</a>";
	}

	html += "</div>";

	return html;
};

build.imageview = function (data, size, visibleControls) {
	if (data === null || data === undefined) return "";

	var html = "";

	html = "\n\t\t\t<div class='arrow_wrapper arrow_wrapper--previous'><a id='previous'>" + build.iconic("caret-left") + "</a></div>\n\t\t\t<div class='arrow_wrapper arrow_wrapper--next'><a id='next'>" + build.iconic("caret-right") + "</a></div>\n\t\t\t";

	if (size === "big") {
		if (visibleControls === true) html += "<div id='image' style='background-image: url(" + data.url + ")'></div>";else html += "<div id='image' style='background-image: url(" + data.url + ");' class='full'></div>";
	} else if (size === "medium") {
		if (visibleControls === true) html += "<div id='image' style='background-image: url(" + data.medium + ")'></div>";else html += "<div id='image' style='background-image: url(" + data.medium + ");' class='full'></div>";
	} else if (size === "small") {
		if (visibleControls === true) html += "<div id='image' class='small' style='background-image: url(" + data.url + "); width: " + data.width + "px; height: " + data.height + "px; margin-top: -" + parseInt(data.height / 2 - 20) + "px; margin-left: -" + data.width / 2 + "px;'></div>";else html += "<div id='image' class='small' style='background-image: url(" + data.url + "); width: " + data.width + "px; height: " + data.height + "px; margin-top: -" + parseInt(data.height / 2) + "px; margin-left: -" + data.width / 2 + "px;'></div>";
	}

	return html;
};

build.no_content = function (typ) {
	var html;

	html = "\n\t\t\t<div class='no_content fadeIn'>\n\t\t\t\t" + build.iconic(typ) + "\n\t\t\t";

	switch (typ) {
		case "magnifying-glass":
			html += "<p>No results</p>";
			break;
		case "eye":
			html += "<p>No public albums</p>";
			break;
		case "cog":
			html += "<p>No configuration</p>";
			break;
	}

	html += "</div>";

	return html;
};

build.uploadModal = function (title, files) {
	var html = "",
	    i = 0,
	    file = null;

	html = "\n\t\t\t<h1>" + title + "</h1>\n\t\t\t<div class='rows'>\n\t\t\t";

	while (i < files.length) {
		file = files[i];

		if (file.name.length > 40) file.name = file.name.substr(0, 17) + "..." + file.name.substr(file.name.length - 20, 20);

		html += "\n\t\t\t\t<div class='row'>\n\t\t\t\t\t<a class='name'>" + lychee.escapeHTML(file.name) + "</a>\n\t\t\t\t";

		if (file.supported === true) html += "<a class='status'></a>";else html += "<a class='status error'>Not supported</a>";

		html += "\n\t\t\t\t\t<p class='notice'></p>\n\t\t\t\t</div>\n\t\t\t\t";

		i++;
	}

	html += "</div>";

	return html;
};

build.tags = function (tags, forView) {
	var html = "",
	    editTagsHTML = "";

	if (forView !== true && lychee.publicMode !== true) editTagsHTML = " " + build.editIcon("edit_tags");

	if (tags !== "") {
		tags = tags.split(",");

		tags.forEach(function (tag, index, array) {
			html += "<a class='tag'>" + tag + "<span data-index='" + index + "'>" + build.iconic("x") + "</span></a>";
		});

		html += editTagsHTML;
	} else {
		html = "<div class='empty'>No Tags" + editTagsHTML + "</div>";
	}

	return html;
};

build.infoboxPhoto = function (data, forView) {
	var html = "",
	    visible = "",
	    editTitleHTML = "",
	    editDescriptionHTML = "",
	    exifHash = "",
	    info = [];

	switch (data["public"]) {

		case "0":
			visible = "No";
			break;
		case "1":
			visible = "Yes";
			break;
		case "2":
			visible = "Yes (Album)";
			break;
		default:
			visible = "-";
			break;

	}

	if (forView !== true && lychee.publicMode !== true) {
		editTitleHTML = " " + build.editIcon("edit_title");
		editDescriptionHTML = " " + build.editIcon("edit_description");
	}

	infos = [["", "Basics"], ["Title", data.title + editTitleHTML], ["Uploaded", data.sysdate], ["Description", data.description + editDescriptionHTML], ["", "Image"], ["Size", data.size], ["Format", data.type], ["Resolution", data.width + " x " + data.height], ["Tags", build.tags(data.tags, forView)]];

	exifHash = data.takestamp + data.make + data.model + data.shutter + data.aperture + data.focal + data.iso;

	if (exifHash !== "0") {
		infos = infos.concat([["", "Camera"], ["Captured", data.takedate], ["Make", data.make], ["Type/Model", data.model], ["Shutter Speed", data.shutter], ["Aperture", data.aperture], ["Focal Length", data.focal], ["ISO", data.iso]]);
	}

	infos = infos.concat([["", "Share"], ["Public", visible]]);

	infos.forEach(function (info, i, items) {
		// Set default for empty values
		if (info[1] === "" || info[1] === null || info[1] === undefined) info[1] = "-";

		switch (info[0]) {

			case "":


				// Divider
				html += "\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<div class='divider'>\n\t\t\t\t\t\t\t<h1>" + info[1] + "</h1>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t";

				break;

			case "Tags":


				// Tags
				if (forView !== true && lychee.publicMode === false) {
					html += "\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t<div class='divider'>\n\t\t\t\t\t\t\t\t<h1>" + info[0] + "</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id='tags'>" + info[1] + "</div>\n\t\t\t\t\t\t\t";
				}

				break;

			default:


				// Item
				html += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>" + info[0] + "</td>\n\t\t\t\t\t\t\t<td class='attr_" + info[0].toLowerCase() + "'>" + info[1] + "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t";

				break;

		}

	});

	html += "\n\t\t\t</table>\n\t\t\t<div class='bumper'></div>\n\t\t\t";

	return html;
};

build.infoboxAlbum = function (data, forView) {
	var html = "",
	    visible = "",
	    password = "",
	    downloadable = "",
	    editTitleHTML = "",
	    editDescriptionHTML = "",
	    infos = [];

	switch (data["public"]) {

		case "0":
			visible = "No";
			break;
		case "1":
			visible = "Yes";
			break;
		default:
			visible = "-";
			break;

	}

	switch (data.password) {

		case false:
			password = "No";
			break;
		case true:
			password = "Yes";
			break;
		default:
			password = "-";
			break;

	}

	switch (data.downloadable) {

		case "0":
			downloadable = "No";
			break;
		case "1":
			downloadable = "Yes";
			break;
		default:
			downloadable = "-";
			break;

	}

	if (forView !== true && lychee.publicMode !== true) {
		editTitleHTML = " " + build.editIcon("edit_title_album");
		editDescriptionHTML = " " + build.editIcon("edit_description_album");
	}

	infos = [["", "Basics"], ["Title", data.title + editTitleHTML], ["Description", data.description + editDescriptionHTML], ["", "Album"], ["Created", data.sysdate], ["Images", data.num], ["", "Share"], ["Public", visible], ["Downloadable", downloadable], ["Password", password]];

	infos.forEach(function (info, i, items) {
		// Set default for empty values
		if (info[1] === "" || info[1] === null || info[1] === undefined) info[1] = "-";

		if (info[0] === "") {
			// Divider
			html += "\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class='divider'>\n\t\t\t\t\t\t<h1>" + info[1] + "</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<table id='infos'>\n\t\t\t\t\t";
		} else {
			// Item
			html += "\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>" + info[0] + "</td>\n\t\t\t\t\t\t<td class='attr_" + info[0].toLowerCase() + "'>" + info[1] + "</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t";
		}
	});

	html += "\n\t\t\t</table>\n\t\t\t<div class='bumper'></div>\n\t\t\t";

	return html;
};
"use strict";

/**
 * @description	This module is used for the context menu.
 * @copyright	2015 by Tobias Reich
 */

contextMenu = {};

contextMenu.add = function (e) {
	var items = [{ type: "item", title: build.iconic("image") + "Upload Photo", fn: function () {
			$("#upload_files").click();
		} }, { type: "separator" }, { type: "item", title: build.iconic("link-intact") + "Import from Link", fn: upload.start.url }, { type: "item", title: build.iconic("dropbox", "ionicons", "ionicons") + "Import from Dropbox", fn: upload.start.dropbox }, { type: "item", title: build.iconic("terminal") + "Import from Server", fn: upload.start.server }, { type: "separator" }, { type: "item", title: build.iconic("folder") + "New Album", fn: album.add }];

	basicContext.show(items, e);

	upload.notify();
};

contextMenu.settings = function (e) {
	var items = [{ type: "item", title: build.iconic("person") + "Change Login", fn: settings.setLogin }, { type: "item", title: build.iconic("sort-ascending") + "Change Sorting", fn: settings.setSorting }, { type: "item", title: build.iconic("dropbox", "ionicons", "ionicons") + "Set Dropbox", fn: settings.setDropboxKey }, { type: "separator" }, { type: "item", title: build.iconic("info") + "About Lychee", fn: function () {
			window.open(lychee.website);
		} }, { type: "item", title: build.iconic("wrench") + "Diagnostics", fn: function () {
			window.open("plugins/check/");
		} }, { type: "item", title: build.iconic("align-left") + "Show Log", fn: function () {
			window.open("plugins/displaylog/");
		} }, { type: "separator" }, { type: "item", title: build.iconic("account-logout") + "Sign Out", fn: lychee.logout }];

	basicContext.show(items, e);
};

contextMenu.album = function (albumID, e) {
	if (albumID === "0" || albumID === "f" || albumID === "s" || albumID === "r") return false;

	var items = [{ type: "item", title: build.iconic("pencil") + "Rename", fn: function () {
			album.setTitle([albumID]);
		} }, { type: "item", title: build.iconic("trash") + "Delete", fn: function () {
			album["delete"]([albumID]);
		} }];

	$(".album[data-id=\"" + albumID + "\"]").addClass("active");

	basicContext.show(items, e, contextMenu.close);
};

contextMenu.albumMulti = function (albumIDs, e) {
	multiselect.stopResize();

	var items = [{ type: "item", title: build.iconic("pencil") + "Rename All", fn: function () {
			album.setTitle(albumIDs);
		} }, { type: "item", title: build.iconic("trash") + "Delete All", fn: function () {
			album["delete"](albumIDs);
		} }];

	basicContext.show(items, e, contextMenu.close);
};

contextMenu.albumTitle = function (albumID, e) {
	var items = [{ type: "item", title: build.iconic("pencil") + "Rename", fn: function () {
			album.setTitle([albumID]);
		} }];

	api.post("Album::getAll", {}, function (data) {
		if (data.num > 1) {
			items.push({ type: "separator" });

			// Generate list of albums
			$.each(data.content, function (index) {
				var that = this,
				    title = "";

				if (!that.thumb0) that.thumb0 = "src/images/no_cover.svg";

				title = "<img class='cover' width='16' height='16' src='" + that.thumb0 + "'><div class='title'>" + that.title + "</div>";

				if (that.id != albumID) items.push({ type: "item", title: title, fn: function () {
						lychee.goto(that.id);
					} });
			});
		}

		basicContext.show(items, e, contextMenu.close);
	});
};

contextMenu.photo = function (photoID, e) {
	// Notice for 'Move':
	// fn must call basicContext.close() first,
	// in order to keep the selection

	var items = [{ type: "item", title: build.iconic("star") + "Star", fn: function () {
			photo.setStar([photoID]);
		} }, { type: "item", title: build.iconic("tag") + "Tags", fn: function () {
			photo.editTags([photoID]);
		} }, { type: "separator" }, { type: "item", title: build.iconic("pencil") + "Rename", fn: function () {
			photo.setTitle([photoID]);
		} }, { type: "item", title: build.iconic("layers") + "Duplicate", fn: function () {
			photo.duplicate([photoID]);
		} }, { type: "item", title: build.iconic("folder") + "Move", fn: function () {
			basicContext.close();contextMenu.move([photoID], e);
		} }, { type: "item", title: build.iconic("trash") + "Delete", fn: function () {
			photo["delete"]([photoID]);
		} }];

	$(".photo[data-id=\"" + photoID + "\"]").addClass("active");

	basicContext.show(items, e, contextMenu.close);
};

contextMenu.photoMulti = function (photoIDs, e) {
	// Notice for 'Move All':
	// fn must call basicContext.close() first,
	// in order to keep the selection and multiselect

	multiselect.stopResize();

	var items = [{ type: "item", title: build.iconic("star") + "Star All", fn: function () {
			photo.setStar(photoIDs);
		} }, { type: "item", title: build.iconic("tag") + "Tag All", fn: function () {
			photo.editTags(photoIDs);
		} }, { type: "separator" }, { type: "item", title: build.iconic("pencil") + "Rename All", fn: function () {
			photo.setTitle(photoIDs);
		} }, { type: "item", title: build.iconic("layers") + "Duplicate All", fn: function () {
			photo.duplicate(photoIDs);
		} }, { type: "item", title: build.iconic("folder") + "Move All", fn: function () {
			basicContext.close();contextMenu.move(photoIDs, e);
		} }, { type: "item", title: build.iconic("trash") + "Delete All", fn: function () {
			photo["delete"](photoIDs);
		} }];

	basicContext.show(items, e, contextMenu.close);
};

contextMenu.photoTitle = function (albumID, photoID, e) {
	var items = [{ type: "item", title: build.iconic("pencil") + "Rename", fn: function () {
			photo.setTitle([photoID]);
		} }];

	var data = album.json;

	if (data.num > 1) {
		items.push({ type: "separator" });

		// Generate list of albums
		$.each(data.content, function (index) {
			var that = this,
			    title = "";

			title = "<img class='cover' width='16' height='16' src='" + that.thumbUrl + "'><div class='title'>" + that.title + "</div>";

			if (that.id != photoID) items.push({ type: "item", title: title, fn: function () {
					lychee.goto(albumID + "/" + that.id);
				} });
		});
	}

	basicContext.show(items, e, contextMenu.close);
};

contextMenu.photoMore = function (photoID, e) {
	var items = [{ type: "item", title: build.iconic("fullscreen-enter") + "Full Photo", fn: function () {
			window.open(photo.getDirectLink());
		} }, { type: "item", title: build.iconic("cloud-download") + "Download", fn: function () {
			photo.getArchive(photoID);
		} }];

	// Remove download-item when
	// 1) In public mode
	// 2) Downloadable not 1 or not found
	if (!(album.json && album.json.downloadable && album.json.downloadable === "1") && lychee.publicMode === true) items.splice(1, 1);

	basicContext.show(items, e);
};

contextMenu.move = function (photoIDs, e) {
	var items = [];

	// Show Unsorted when unsorted is not the current album
	if (album.getID() !== "0") {
		items = [{ type: "item", title: "Unsorted", fn: function () {
				photo.setAlbum(photoIDs, 0);
			} }, { type: "separator" }];
	}

	api.post("Album::getAll", {}, function (data) {
		if (data.num === 0) {
			// Show only 'Add album' when no album available
			items = [{ type: "item", title: "New Album", fn: album.add }];
		} else {
			// Generate list of albums
			$.each(data.content, function (index) {
				var that = this;

				if (!that.thumb0) that.thumb0 = "src/images/no_cover.svg";
				that.title = "<img class='albumCover' width='16' height='16' src='" + that.thumb0 + "'><div class='albumTitle'>" + that.title + "</div>";

				if (that.id != album.getID()) items.push({ type: "item", title: that.title, fn: function () {
						photo.setAlbum(photoIDs, that.id);
					} });
			});
		}

		basicContext.show(items, e, contextMenu.close);
	});
};

contextMenu.sharePhoto = function (photoID, e) {
	var link = photo.getViewLink(photoID),
	    file = "ionicons";

	if (photo.json["public"] === "2") link = location.href;

	var items = [{ type: "item", title: "<input readonly id=\"link\" value=\"" + link + "\">", fn: function () {}, "class": "noHover" }, { type: "separator" }, { type: "item", title: build.iconic("twitter", file, file) + "Twitter", fn: function () {
			photo.share(photoID, 0);
		} }, { type: "item", title: build.iconic("facebook", file, file) + "Facebook", fn: function () {
			photo.share(photoID, 1);
		} }, { type: "item", title: build.iconic("envelope-closed") + "Mail", fn: function () {
			photo.share(photoID, 2);
		} }, { type: "item", title: build.iconic("dropbox", file, file) + "Dropbox", fn: function () {
			photo.share(photoID, 3);
		} }, { type: "item", title: build.iconic("link-intact") + "Direct Link", fn: function () {
			window.open(photo.getDirectLink());
		} }, { type: "separator" }, { type: "item", title: build.iconic("ban") + "Make Private", fn: function () {
			photo.setPublic(photoID);
		} }];

	basicContext.show(items, e);
	$(".basicContext input#link").focus().select();
};

contextMenu.shareAlbum = function (albumID, e) {
	var file = "ionicons";

	var items = [{ type: "item", title: "<input readonly id=\"link\" value=\"" + location.href + "\">", fn: function () {}, "class": "noHover" }, { type: "separator" }, { type: "item", title: build.iconic("twitter", file, file) + "Twitter", fn: function () {
			album.share(0);
		} }, { type: "item", title: build.iconic("facebook", file, file) + "Facebook", fn: function () {
			album.share(1);
		} }, { type: "item", title: build.iconic("envelope-closed") + "Mail", fn: function () {
			album.share(2);
		} }, { type: "separator" }, { type: "item", title: build.iconic("ban") + "Make Private", fn: function () {
			album.setPublic(albumID);
		} }];

	basicContext.show(items, e);
	$(".basicContext input#link").focus().select();
};

contextMenu.close = function () {
	if (!visible.contextMenu()) return false;

	basicContext.close();

	$(".photo.active, .album.active").removeClass("active");
	if (visible.multiselect()) multiselect.close();
};
"use strict";

/**
 * @description	This module takes care of the header.
 * @copyright	2015 by Tobias Reich
 */

header = {

	_dom: $("header")

};

header.dom = function (selector) {
	if (selector === undefined || selector === null || selector === "") return header._dom;
	return header._dom.find(selector);
};

header.show = function () {
	var newMargin = -1 * ($("#imageview #image").height() / 2) + 20;

	clearTimeout($(window).data("timeout"));

	lychee.imageview.removeClass("full");
	header.dom().removeClass("hidden");
	lychee.loadingBar.css("opacity", 1);

	// Adjust position or size of photo
	if ($("#imageview #image.small").length > 0) $("#imageview #image").css("margin-top", newMargin);else $("#imageview #image").removeClass("full");
};

header.hide = function (e, delay) {
	var newMargin = -1 * ($("#imageview #image").height() / 2);

	if (delay === undefined) delay = 500;

	if (visible.photo() && !visible.infobox() && !visible.contextMenu() && !visible.message()) {
		clearTimeout($(window).data("timeout"));

		$(window).data("timeout", setTimeout(function () {
			lychee.imageview.addClass("full");
			header.dom().addClass("hidden");
			lychee.loadingBar.css("opacity", 0);

			// Adjust position or size of photo
			if ($("#imageview #image.small").length > 0) $("#imageview #image").css("margin-top", newMargin);else $("#imageview #image").addClass("full");
		}, delay));
	}
};

header.setTitle = function (title) {
	var $title = header.dom("#title"),
	    title = title || "Untitled";

	$title.html(title + build.iconic("caret-bottom"));
};

header.setMode = function (mode) {
	var albumID = album.getID();

	switch (mode) {

		case "albums":


			header.dom().removeClass("view");
			$("#tools_album, #tools_photo").hide();
			$("#tools_albums").show();

			break;

		case "album":


			header.dom().removeClass("view");
			$("#tools_albums, #tools_photo").hide();
			$("#tools_album").show();

			// Hide download button when album empty
			album.json.content === false ? $("#button_archive").hide() : $("#button_archive").show();

			// Hide download button when not logged in and album not downloadable
			if (lychee.publicMode && album.json.downloadable === "0") $("#button_archive").hide();

			if (albumID === "s" || albumID === "f" || albumID === "r") {
				$("#button_info_album, #button_trash_album, #button_share_album").hide();
			} else if (albumID === "0") {
				$("#button_info_album, #button_share_album").hide();
				$("#button_trash_album").show();
			} else {
				$("#button_info_album, #button_trash_album, #button_share_album").show();
			}

			break;

		case "photo":


			header.dom().addClass("view");
			$("#tools_albums, #tools_album").hide();
			$("#tools_photo").show();

			break;

	}
};

header.setEditable = function (editable) {
	var $title = header.dom("#title");

	// Hide editable icon when not logged in
	if (lychee.publicMode === true) editable = false;

	if (editable) $title.addClass("editable");else $title.removeClass("editable");
};
"use strict";

/**
 * @description	This module is used for bindings.
 * @copyright	2015 by Tobias Reich
 */

$(document).ready(function () {
	/* Event Name */
	var eventName = "ontouchend" in document.documentElement ? "touchend" : "click";

	/* Multiselect */
	$("#content").on("mousedown", function (e) {
		if (e.which === 1) multiselect.show(e);
	});
	$(document).on("mouseup", function (e) {
		if (e.which === 1) multiselect.getSelection(e);
	});

	/* Header */
	header.dom("#title").on(eventName, function (e) {
		if (!$(this).hasClass("editable")) return false;
		if (visible.photo()) contextMenu.photoTitle(album.getID(), photo.getID(), e);else contextMenu.albumTitle(album.getID(), e);
	});
	header.dom("#button_share").on(eventName, function (e) {
		if (photo.json["public"] == 1 || photo.json["public"] == 2) contextMenu.sharePhoto(photo.getID(), e);else photo.setPublic(photo.getID(), e);
	});
	header.dom("#button_share_album").on(eventName, function (e) {
		if (album.json["public"] == 1) contextMenu.shareAlbum(album.getID(), e);else album.setPublic(album.getID(), e);
	});
	header.dom("#button_signin").on(eventName, lychee.loginDialog);
	header.dom("#button_settings").on(eventName, contextMenu.settings);
	header.dom("#button_info_album").on(eventName, view.infobox.show);
	header.dom("#button_info").on(eventName, view.infobox.show);
	header.dom(".button_add").on(eventName, contextMenu.add);
	header.dom("#button_more").on(eventName, function (e) {
		contextMenu.photoMore(photo.getID(), e);
	});
	header.dom("#button_move").on(eventName, function (e) {
		contextMenu.move([photo.getID()], e);
	});
	header.dom("#hostedwith").on(eventName, function () {
		window.open(lychee.website);
	});
	header.dom("#button_trash_album").on(eventName, function () {
		album["delete"]([album.getID()]);
	});
	header.dom("#button_trash").on(eventName, function () {
		photo["delete"]([photo.getID()]);
	});
	header.dom("#button_archive").on(eventName, function () {
		album.getArchive(album.getID());
	});
	header.dom("#button_star").on(eventName, function () {
		photo.setStar([photo.getID()]);
	});
	header.dom("#button_back_home").on(eventName, function () {
		lychee.goto("");
	});
	header.dom("#button_back").on(eventName, function () {
		lychee.goto(album.getID());
	});

	/* Search */
	header.dom("#search").on("keyup click", function () {
		search.find($(this).val());
	});

	/* Clear Search */
	header.dom("#clearSearch").on(eventName, function () {
		header.dom("#search").focus();
		search.reset();
	});

	/* Infobox */
	lychee.infobox.find(".header .close").on(eventName, view.infobox.hide);

	/* Image View */
	lychee.imageview.on(eventName, ".arrow_wrapper--previous", photo.previous).on(eventName, ".arrow_wrapper--next", photo.next);

	/* Infobox */
	lychee.infobox.on(eventName, "#edit_title_album", function () {
		album.setTitle([album.getID()]);
	}).on(eventName, "#edit_description_album", function () {
		album.setDescription(album.getID());
	}).on(eventName, "#edit_title", function () {
		photo.setTitle([photo.getID()]);
	}).on(eventName, "#edit_description", function () {
		photo.setDescription(photo.getID());
	}).on(eventName, "#edit_tags", function () {
		photo.editTags([photo.getID()]);
	}).on(eventName, "#tags .tag span", function () {
		photo.deleteTag(photo.getID(), $(this).data("index"));
	});

	/* Keyboard */
	Mousetrap.bind("left", function () {
		if (visible.photo()) $("#imageview a#previous").click();
	}).bind("right", function () {
		if (visible.photo()) $("#imageview a#next").click();
	}).bind("u", function () {
		$("#upload_files").click();
	}).bind(["s", "f"], function (e) {
		if (visible.photo()) {
			header.dom("#button_star").click();
		} else if (visible.albums()) {
			e.preventDefault();
			header.dom("#search").focus();
		}
	}).bind("r", function (e) {
		e.preventDefault();
		if (visible.album()) album.setTitle(album.getID());else if (visible.photo()) photo.setTitle([photo.getID()]);
	}).bind("d", function (e) {
		e.preventDefault();
		if (visible.photo()) photo.setDescription(photo.getID());else if (visible.album()) album.setDescription(album.getID());
	}).bind("t", function (e) {
		if (visible.photo()) {
			e.preventDefault();
			photo.editTags([photo.getID()]);
		}
	}).bind("i", function () {
		if (visible.infobox()) view.infobox.hide();else if (visible.multiselect()) return false;else if (visible.infoboxbutton()) view.infobox.show();
	}).bind(["command+backspace", "ctrl+backspace"], function () {
		if (visible.photo() && !visible.message()) photo["delete"]([photo.getID()]);else if (visible.album() && !visible.message()) album["delete"]([album.getID()]);
	}).bind(["command+a", "ctrl+a"], function () {
		if (visible.album() && !visible.message()) multiselect.selectAll();else if (visible.albums() && !visible.message()) multiselect.selectAll();
	});

	Mousetrap.bindGlobal("enter", function () {
		if (basicModal.visible() === true) basicModal.action();
	});

	Mousetrap.bindGlobal(["esc", "command+up"], function (e) {
		e.preventDefault();
		if (basicModal.visible() === true) basicModal.cancel();else if (visible.contextMenu()) contextMenu.close();else if (visible.infobox()) view.infobox.hide();else if (visible.photo()) lychee.goto(album.getID());else if (visible.album()) lychee.goto("");else if (visible.albums() && $("#search").val().length !== 0) search.reset();
	});


	if ("ontouchend" in document.documentElement) {
		$(document)

		/* Fullscreen on mobile */
		.on("touchend", "#image", function (e) {
			if (swipe.obj === null || swipe.offset >= -5 && swipe.offset <= 5) {
				if (visible.controls()) header.hide(e, 0);else header.show();
			}
		})

		/* Swipe on mobile */
		.swipe().on("swipeStart", function () {
			if (visible.photo()) swipe.start($("#image"));
		}).swipe().on("swipeMove", function (e) {
			if (visible.photo()) swipe.move(e.swipe);
		}).swipe().on("swipeEnd", function (e) {
			if (visible.photo()) swipe.stop(e.swipe, photo.previous, photo.next);
		});
	}

	/* Document */
	$(document)

	/* Login */
	.on("keyup", "#password", function () {
		if ($(this).val().length > 0) $(this).removeClass("error");
	})

	/* Navigation */
	// .on('click', '.album', function() { lychee.goto($(this).attr('data-id')) })
	.on("click", ".photo", function () {
		lychee.goto(album.getID() + "/" + $(this).attr("data-id"));
	})

	/* Context Menu */
	.on("contextmenu", ".photo", function (e) {
		contextMenu.photo(photo.getID(), e);
	})
	// .on('contextmenu', '.album', function(e) { contextMenu.album(album.getID(), e) })

	/* Infobox */
	.on(eventName, "#infobox_overlay", view.infobox.hide)

	/* Upload */
	.on("change", "#upload_files", function () {
		basicModal.close();upload.start.local(this.files);
	}).on("dragover", function (e) {
		e.preventDefault();
	}, false).on("drop", function (e) {
		e.stopPropagation();
		e.preventDefault();

		// Close open overlays or views which are correlating with the upload
		if (visible.photo()) lychee.goto(album.getID());
		if (visible.contextMenu()) contextMenu.close();

		// Detect if dropped item is a file or a link
		if (e.originalEvent.dataTransfer.files.length > 0) upload.start.local(e.originalEvent.dataTransfer.files);else if (e.originalEvent.dataTransfer.getData("Text").length > 3) upload.start.url(e.originalEvent.dataTransfer.getData("Text"));

		return true;
	});

	/* Init */
	lychee.init();
});
"use strict";

/**
 * @description	This module is used to show and hide the loading bar.
 * @copyright	2015 by Tobias Reich
 */

loadingBar = {

	status: null

};

loadingBar.show = function (status, errorText) {
	if (status === "error") {
		// Set status
		loadingBar.status = "error";

		// Parse text
		if (errorText) errorText = errorText.replace("<br>", "");
		if (!errorText) errorText = "Whoops, it looks like something went wrong. Please reload the site and try again!";

		// Move header down
		if (visible.controls()) header.dom().addClass("error");

		// Modify loading
		lychee.loadingBar.removeClass("loading uploading error").addClass(status).html("<h1>Error: <span>" + errorText + "</span></h1>").show().css("height", "40px");

		// Set timeout
		clearTimeout(lychee.loadingBar.data("timeout"));
		lychee.loadingBar.data("timeout", setTimeout(function () {
			loadingBar.hide(true);
		}, 3000));

		return true;
	}

	if (loadingBar.status === null) {
		// Set status
		loadingBar.status = "loading";

		// Set timeout
		clearTimeout(lychee.loadingBar.data("timeout"));
		lychee.loadingBar.data("timeout", setTimeout(function () {
			// Move header down
			if (visible.controls()) header.dom().addClass("loading");

			// Modify loading
			lychee.loadingBar.removeClass("loading uploading error").addClass("loading").show();
		}, 1000));

		return true;
	}
};

loadingBar.hide = function (force) {
	if (loadingBar.status !== "error" && loadingBar.status !== null || force) {
		// Remove status
		loadingBar.status = null;

		// Move header up
		if (visible.controls()) header.dom().removeClass("error loading");

		// Modify loading
		lychee.loadingBar.html("").css("height", "3px");

		// Set timeout
		clearTimeout(lychee.loadingBar.data("timeout"));
		setTimeout(function () {
			lychee.loadingBar.hide();
		}, 300);
	}
};
"use strict";

/**
 * @description	This module provides the basic functions of Lychee.
 * @copyright	2015 by Tobias Reich
 */

lychee = {

	title: document.title,
	version: "3.0.0",
	version_code: "030000",

	update_path: "http://lychee.electerious.com/version/index.php",
	updateURL: "https://github.com/electerious/Lychee",
	website: "http://lychee.electerious.com",

	publicMode: false,
	viewMode: false,
	debugMode: false,

	checkForUpdates: false,
	username: "",
	sorting: "",
	location: "",

	dropbox: false,
	dropboxKey: "",

	loadingBar: $("#loading"),
	content: $("#content"),
	imageview: $("#imageview"),
	infobox: $("#infobox")

};

lychee.init = function () {
	var params;

	params = {
		version: lychee.version_code
	};

	api.post("Session::init", params, function (data) {
		if (data.loggedIn !== true) {
			lychee.setMode("public");
		} else {
			lychee.username = data.config.username || "";
			lychee.sorting = data.config.sorting || "";
			lychee.dropboxKey = data.config.dropboxKey || "";
			lychee.location = data.config.location || "";
		}

		// No configuration
		if (data === "Warning: No configuration!") {
			header.dom().hide();
			lychee.content.hide();
			$("body").append(build.no_content("cog"));
			settings.createConfig();
			return true;
		}

		// No login
		if (data.config.login === false) {
			settings.createLogin();
		}

		lychee.checkForUpdates = data.config.checkForUpdates;
		$(window).bind("popstate", lychee.load);
		lychee.load();
	});
};

lychee.login = function (data) {
	var user = data.username,
	    password = data.password,
	    params;

	params = {
		user: user,
		password: password
	};

	api.post("Session::login", params, function (data) {
		if (data === true) {
			// Use 'try' to catch a thrown error when Safari is in private mode
			try {
				localStorage.setItem("lychee_username", user);
			} catch (err) {}

			window.location.reload();
		} else {
			// Show error and reactive button
			basicModal.error("password");
		}
	});
};

lychee.loginDialog = function () {
	var localUsername,
	    msg = "";

	msg = "\n\t\t\t<p class='signIn'>\n\t\t\t\t<input class='text' data-name='username' type='text' value='' placeholder='username' autocapitalize='off' autocorrect='off'>\n\t\t\t\t<input class='text' data-name='password' type='password' value='' placeholder='password'>\n\t\t\t</p>\n\t\t\t<p class='version'>Lychee " + lychee.version + "<span> &#8211; <a target='_blank' href='" + lychee.updateURL + "'>Update available!</a><span></p>\n\t\t\t";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Sign In",
				fn: lychee.login
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});

	if (localStorage) {
		localUsername = localStorage.getItem("lychee_username");
		if (localUsername !== null) {
			if (localUsername.length > 0) $(".basicModal input[data-name=\"username\"]").val(localUsername);
			$(".basicModal input[data-name=\"password\"]").focus();
		}
	}

	if (lychee.checkForUpdates === "1") lychee.getUpdate();
};

lychee.logout = function () {
	api.post("Session::logout", {}, function () {
		window.location.reload();
	});
};

lychee.goto = function (url) {
	if (url === undefined) url = "#";else url = "#" + url;

	history.pushState(null, null, url);
	lychee.load();
};

lychee.load = function () {
	var albumID = "",
	    photoID = "",
	    hash = document.location.hash.replace("#", "").split("/");

	$(".no_content").remove();
	contextMenu.close();
	multiselect.close();

	if (hash[0] !== undefined) albumID = hash[0];
	if (hash[1] !== undefined) photoID = hash[1];

	if (albumID && photoID) {
		// Trash data
		photo.json = null;

		// Show Photo
		if (lychee.content.html() === "" || $("#search").length && $("#search").val().length !== 0) {
			lychee.content.hide();
			album.load(albumID, true);
		}
		photo.load(photoID, albumID);
	} else if (albumID) {
		// Trash data
		photo.json = null;

		// Show Album
		if (visible.photo()) view.photo.hide();
		if (album.json && albumID == album.json.id) view.album.title();else album.load(albumID);
	} else {
		// Trash albums.json when filled with search results
		if (search.code !== "") {
			albums.json = null;
			search.code = "";
		}

		// Trash data
		album.json = null;
		photo.json = null;

		// Show Albums
		if (visible.album()) view.album.hide();
		if (visible.photo()) view.photo.hide();
		albums.load();
	}
};

lychee.getUpdate = function () {
	$.ajax({
		url: lychee.update_path,
		success: function (data) {
			if (parseInt(data) > parseInt(lychee.version_code)) $(".version span").show();
		}
	});
};

lychee.setTitle = function (title, editable) {
	document.title = lychee.title + " - " + title;

	header.setEditable(editable);
	header.setTitle(title);
};

lychee.setMode = function (mode) {
	$("#button_settings, #button_settings, #button_search, #search, #button_trash_album, #button_share_album, .button_add, .button_divider").remove();
	$("#button_trash, #button_move, #button_share, #button_star").remove();

	$(document).off("click", "#title.editable").off("touchend", "#title.editable").off("contextmenu", ".photo").off("contextmenu", ".album").off("drop");

	Mousetrap.unbind("u").unbind("s").unbind("f").unbind("r").unbind("d").unbind("t").unbind(["command+backspace", "ctrl+backspace"]).unbind(["command+a", "ctrl+a"]);

	if (mode === "public") {
		header.dom("#button_signin, #hostedwith").show();
		lychee.publicMode = true;
	} else if (mode === "view") {
		Mousetrap.unbind(["esc", "command+up"]);
		$("#button_back, a#next, a#previous").remove();
		$(".no_content").remove();

		lychee.publicMode = true;
		lychee.viewMode = true;
	}
};

lychee.animate = function (obj, animation) {
	var animations = [["fadeIn", "fadeOut"], ["contentZoomIn", "contentZoomOut"]];

	if (!obj.jQuery) obj = $(obj);

	for (var i = 0; i < animations.length; i++) {
		for (var x = 0; x < animations[i].length; x++) {
			if (animations[i][x] == animation) {
				obj.removeClass(animations[i][0] + " " + animations[i][1]).addClass(animation);
				return true;
			}
		}
	}

	return false;
};

lychee.escapeHTML = function (s) {
	return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

lychee.loadDropbox = function (callback) {
	if (!lychee.dropbox && lychee.dropboxKey) {
		loadingBar.show();

		var g = document.createElement("script"),
		    s = document.getElementsByTagName("script")[0];

		g.src = "https://www.dropbox.com/static/api/1/dropins.js";
		g.id = "dropboxjs";
		g.type = "text/javascript";
		g.async = "true";
		g.setAttribute("data-app-key", lychee.dropboxKey);
		g.onload = g.onreadystatechange = function () {
			var rs = this.readyState;
			if (rs && rs !== "complete" && rs !== "loaded") return;
			lychee.dropbox = true;
			loadingBar.hide();
			callback();
		};
		s.parentNode.insertBefore(g, s);
	} else if (lychee.dropbox && lychee.dropboxKey) {
		callback();
	} else {
		settings.setDropboxKey(callback);
	}
};

lychee.removeHTML = function (html) {
	var tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText;
};

lychee.error = function (errorThrown, params, data) {
	console.error({
		description: errorThrown,
		params: params,
		response: data
	});

	loadingBar.show("error", errorThrown);
};
"use strict";

/**
 * @description	Select multiple albums or photos.
 * @copyright	2015 by Tobias Reich
 */

multiselect = {};

multiselect.position = {

	top: null,
	right: null,
	bottom: null,
	left: null

};

multiselect.show = function (e) {
	if (lychee.publicMode) return false;
	if (visible.search()) return false;
	if (visible.infobox()) return false;
	if (!visible.albums() && !visible.album) return false;
	if ($(".album:hover, .photo:hover").length !== 0) return false;
	if (visible.multiselect()) $("#multiselect").remove();

	multiselect.position.top = e.pageY;
	multiselect.position.right = -1 * (e.pageX - $(document).width());
	multiselect.position.bottom = -1 * (multiselect.position.top - $(window).height());
	multiselect.position.left = e.pageX;

	$("body").append(build.multiselect(multiselect.position.top, multiselect.position.left));
	$(document).on("mousemove", multiselect.resize);
};

multiselect.selectAll = function () {
	var e, newWidth, newHeight;

	if (lychee.publicMode) return false;
	if (visible.search()) return false;
	if (visible.infobox()) return false;
	if (!visible.albums() && !visible.album) return false;
	if (visible.multiselect()) $("#multiselect").remove();

	multiselect.position.top = 70;
	multiselect.position.right = 40;
	multiselect.position.bottom = 90;
	multiselect.position.left = 20;

	$("body").append(build.multiselect(multiselect.position.top, multiselect.position.left));

	newWidth = $(document).width() - multiselect.position.right + 2;
	newHeight = $(document).height() - multiselect.position.bottom;

	$("#multiselect").css({
		width: newWidth,
		height: newHeight
	});

	e = {
		pageX: $(document).width() - multiselect.position.right / 2,
		pageY: $(document).height() - multiselect.position.bottom
	};

	multiselect.getSelection(e);
};

multiselect.resize = function (e) {
	var mouse_x = e.pageX,
	    mouse_y = e.pageY,
	    newHeight,
	    newWidth;

	if (multiselect.position.top === null || multiselect.position.right === null || multiselect.position.bottom === null || multiselect.position.left === null) return false;

	if (mouse_y >= multiselect.position.top) {
		// Do not leave the screen
		newHeight = mouse_y - multiselect.position.top;
		if (multiselect.position.top + newHeight >= $(document).height()) newHeight -= multiselect.position.top + newHeight - $(document).height() + 2;

		$("#multiselect").css({
			top: multiselect.position.top,
			bottom: "inherit",
			height: newHeight
		});
	} else {
		$("#multiselect").css({
			top: "inherit",
			bottom: multiselect.position.bottom,
			height: multiselect.position.top - e.pageY
		});
	}

	if (mouse_x >= multiselect.position.left) {
		// Do not leave the screen
		newWidth = mouse_x - multiselect.position.left;
		if (multiselect.position.left + newWidth >= $(document).width()) newWidth -= multiselect.position.left + newWidth - $(document).width() + 2;

		$("#multiselect").css({
			right: "inherit",
			left: multiselect.position.left,
			width: newWidth
		});
	} else {
		$("#multiselect").css({
			right: multiselect.position.right,
			left: "inherit",
			width: multiselect.position.left - e.pageX
		});
	}
};

multiselect.stopResize = function () {
	$(document).off("mousemove");
};

multiselect.getSize = function () {
	if (!visible.multiselect()) return false;

	return {
		top: $("#multiselect").offset().top,
		left: $("#multiselect").offset().left,
		width: parseInt($("#multiselect").css("width").replace("px", "")),
		height: parseInt($("#multiselect").css("height").replace("px", ""))
	};
};

multiselect.getSelection = function (e) {
	var tolerance = 150,
	    id,
	    ids = [],
	    offset,
	    size = multiselect.getSize();

	if (visible.contextMenu()) return false;
	if (!visible.multiselect()) return false;

	$(".photo, .album").each(function () {
		offset = $(this).offset();

		if (offset.top >= size.top - tolerance && offset.left >= size.left - tolerance && offset.top + 206 <= size.top + size.height + tolerance && offset.left + 206 <= size.left + size.width + tolerance) {
			id = $(this).data("id");

			if (id !== "0" && id !== 0 && id !== "f" && id !== "s" && id !== "r" && id !== null && id !== undefined) {
				ids.push(id);
				$(this).addClass("active");
			}
		}
	});

	if (ids.length !== 0 && visible.album()) contextMenu.photoMulti(ids, e);else if (ids.length !== 0 && visible.albums()) contextMenu.albumMulti(ids, e);else multiselect.close();
};

multiselect.close = function () {
	multiselect.stopResize();

	multiselect.position.top = null;
	multiselect.position.right = null;
	multiselect.position.bottom = null;
	multiselect.position.left = null;

	lychee.animate("#multiselect", "fadeOut");
	setTimeout(function () {
		$("#multiselect").remove();
	}, 300);
};
"use strict";

/**
 * @description	Controls the access to password-protected albums and photos.
 * @copyright   2015 by Tobias Reich
 */

password = {

	value: ""

};

password.get = function (albumID, callback) {
	var passwd = $(".basicModal input.text").val(),
	    params;

	if (!lychee.publicMode) callback();else if (album.json && album.json.password == false) callback();else if (albums.json && albums.json.content[albumID].password == false) callback();else if (!albums.json && !album.json) {
		// Continue without password
		album.json = { password: true };
		callback("");
	} else if (passwd == undefined) {
		// Request password
		password.getDialog(albumID, callback);
	} else {
		// Check password

		params = {
			albumID: albumID,
			password: passwd
		};

		api.post("Album::getPublic", params, function (data) {
			if (data === true) {
				basicModal.close();
				password.value = passwd;
				callback();
			} else {
				basicModal.error("password");
			}
		});
	}
};

password.getDialog = function (albumID, callback) {
	var action,
	    cancel,
	    msg = "";

	action = function () {
		password.get(albumID, callback);
	};

	cancel = function () {
		basicModal.close();
		lychee.goto();
	};

	msg = "\n\t\t\t<p>\n\t\t\t\tThis album is protected by a password. Enter the password below to view the photos of this album:\n\t\t\t\t<input data-name='password' class='text' type='password' placeholder='password' value=''>\n\t\t\t</p>\n\t\t\t";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Enter",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: cancel
			}
		}
	});
};
"use strict";

/**
 * @description	Takes care of every action a photo can handle and execute.
 * @copyright	2015 by Tobias Reich
 */

photo = {

	json: null,
	cache: null

};

photo.getID = function () {
	var id;

	if (photo.json) id = photo.json.id;else id = $(".photo:hover, .photo.active").attr("data-id");

	if (id) return id;else return false;
};

photo.load = function (photoID, albumID) {
	var params, checkPasswd;

	params = {
		photoID: photoID,
		albumID: albumID,
		password: password.value
	};

	api.post("Photo::get", params, function (data) {
		if (data === "Warning: Wrong password!") {
			checkPasswd = function () {
				if (password.value !== "") photo.load(photoID, albumID);else setTimeout(checkPasswd, 250);
			};
			checkPasswd();
			return false;
		}

		photo.json = data;
		if (!visible.photo()) view.photo.show();
		view.photo.init();

		lychee.imageview.show();
		setTimeout(function () {
			lychee.content.show();
			//photo.preloadNext(photoID, albumID);
		}, 300);
	});
};

// Preload the next photo for better response time
photo.preloadNext = function (photoID) {
	var nextPhoto, url;

	// Never preload on mobile devices with bare RAM and
	// mostly mobile internet
	// {{ code }}

	if (album.json && album.json.content && album.json.content[photoID] && album.json.content[photoID].nextPhoto != "") {
		nextPhoto = album.json.content[photoID].nextPhoto;
		url = album.json.content[nextPhoto].url;

		photo.cache = new Image();
		photo.cache.src = url;
		photo.cache.onload = function () {
			photo.cache = null;
		};
	}
};

photo.parse = function () {
	if (!photo.json.title) photo.json.title = "Untitled";
};

photo.previous = function (animate) {
	var delay = 0;

	if (photo.getID() !== false && album.json && album.json.content[photo.getID()] && album.json.content[photo.getID()].previousPhoto !== "") {
		if (animate === true) {
			delay = 200;

			$("#image").css({
				WebkitTransform: "translateX(100%)",
				MozTransform: "translateX(100%)",
				transform: "translateX(100%)",
				opacity: 0
			});
		}

		setTimeout(function () {
			if (photo.getID() === false) return false;
			lychee.goto(album.getID() + "/" + album.json.content[photo.getID()].previousPhoto);
		}, delay);
	}
};

photo.next = function (animate) {
	var delay = 0;

	if (photo.getID() !== false && album.json && album.json.content[photo.getID()] && album.json.content[photo.getID()].nextPhoto !== "") {
		if (animate === true) {
			delay = 200;

			$("#image").css({
				WebkitTransform: "translateX(-100%)",
				MozTransform: "translateX(-100%)",
				transform: "translateX(-100%)",
				opacity: 0
			});
		}

		setTimeout(function () {
			if (photo.getID() === false) return false;
			lychee.goto(album.getID() + "/" + album.json.content[photo.getID()].nextPhoto);
		}, delay);
	}
};

photo.duplicate = function (photoIDs) {
	var params;

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	albums.refresh();

	params = {
		photoIDs: photoIDs.join()
	};

	api.post("Photo::duplicate", params, function (data) {
		if (data !== true) lychee.error(null, params, data);else album.load(album.getID());
	});
};

photo["delete"] = function (photoIDs) {
	var action = {},
	    cancel = {},
	    msg = "",
	    photoTitle = "";

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	if (photoIDs.length === 1) {
		// Get title if only one photo is selected
		if (visible.photo()) photoTitle = photo.json.title;else photoTitle = album.json.content[photoIDs].title;

		// Fallback for photos without a title
		if (photoTitle === "") photoTitle = "Untitled";
	}

	action.fn = function () {
		var params = "",
		    nextPhoto = "",
		    previousPhoto = "";

		basicModal.close();

		photoIDs.forEach(function (id, index, array) {
			// Change reference for the next and previous photo
			if (album.json.content[id].nextPhoto !== "" || album.json.content[id].previousPhoto !== "") {
				nextPhoto = album.json.content[id].nextPhoto;
				previousPhoto = album.json.content[id].previousPhoto;

				album.json.content[previousPhoto].nextPhoto = nextPhoto;
				album.json.content[nextPhoto].previousPhoto = previousPhoto;
			}

			album.json.content[id] = null;
			view.album.content["delete"](id);
		});

		albums.refresh();

		// Go to next photo if there is a next photo and
		// next photo is not the current one. Show album otherwise.
		if (visible.photo() && nextPhoto !== "" && nextPhoto !== photo.getID()) lychee.goto(album.getID() + "/" + nextPhoto);else if (!visible.albums()) lychee.goto(album.getID());

		params = {
			photoIDs: photoIDs.join()
		};

		api.post("Photo::delete", params, function (data) {
			if (data !== true) lychee.error(null, params, data);
		});
	};

	if (photoIDs.length === 1) {
		action.title = "Delete Photo";
		cancel.title = "Keep Photo";

		msg = "<p>Are you sure you want to delete the photo '" + photoTitle + "'?<br>This action can't be undone!</p>";
	} else {
		action.title = "Delete Photo";
		cancel.title = "Keep Photo";

		msg = "<p>Are you sure you want to delete all " + photoIDs.length + " selected photo?<br>This action can't be undone!</p>";
	}

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: action.title,
				fn: action.fn,
				"class": "red"
			},
			cancel: {
				title: cancel.title,
				fn: basicModal.close
			}
		}
	});
};

photo.setTitle = function (photoIDs) {
	var oldTitle = "",
	    input = "",
	    msg = "",
	    action;

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	if (photoIDs.length === 1) {
		// Get old title if only one photo is selected
		if (photo.json) oldTitle = photo.json.title;else if (album.json) oldTitle = album.json.content[photoIDs].title;
		oldTitle = oldTitle.replace("'", "&apos;");
	}

	action = function (data) {
		var params,
		    newTitle = data.title;

		basicModal.close();

		// Remove html from input
		newTitle = lychee.removeHTML(newTitle);

		if (visible.photo()) {
			photo.json.title = newTitle === "" ? "Untitled" : newTitle;
			view.photo.title();
		}

		photoIDs.forEach(function (id, index, array) {
			album.json.content[id].title = newTitle;
			view.album.content.title(id);
		});

		params = {
			photoIDs: photoIDs.join(),
			title: newTitle
		};

		api.post("Photo::setTitle", params, function (data) {
			if (data !== true) lychee.error(null, params, data);
		});
	};

	input = "<input class='text' data-name='title' type='text' maxlength='30' placeholder='Title' value='" + oldTitle + "'>";

	if (photoIDs.length === 1) msg = "<p>Enter a new title for this photo: " + input + "</p>";else msg = "<p>Enter a title for all " + photoIDs.length + " selected photos: " + input + "</p>";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Set title",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};

photo.setAlbum = function (photoIDs, albumID) {
	var params, nextPhoto, previousPhoto;

	if (!photoIDs) return false;
	if (visible.photo) lychee.goto(album.getID());
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	photoIDs.forEach(function (id, index, array) {
		// Change reference for the next and previous photo
		if (album.json.content[id].nextPhoto !== "" || album.json.content[id].previousPhoto !== "") {
			nextPhoto = album.json.content[id].nextPhoto;
			previousPhoto = album.json.content[id].previousPhoto;

			album.json.content[previousPhoto].nextPhoto = nextPhoto;
			album.json.content[nextPhoto].previousPhoto = previousPhoto;
		}

		album.json.content[id] = null;
		view.album.content["delete"](id);
	});

	albums.refresh();

	params = {
		photoIDs: photoIDs.join(),
		albumID: albumID
	};

	api.post("Photo::setAlbum", params, function (data) {
		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setStar = function (photoIDs) {
	var params;

	if (!photoIDs) return false;
	if (visible.photo()) {
		photo.json.star = photo.json.star == 0 ? 1 : 0;
		view.photo.star();
	}

	photoIDs.forEach(function (id, index, array) {
		album.json.content[id].star = album.json.content[id].star == 0 ? 1 : 0;
		view.album.content.star(id);
	});

	albums.refresh();

	params = {
		photoIDs: photoIDs.join()
	};

	api.post("Photo::setStar", params, function (data) {
		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setPublic = function (photoID, e) {
	if (photo.json["public"] == 2) {
		var action;

		action = function () {
			basicModal.close();
			lychee.goto(photo.json.original_album);
		};

		basicModal.show({
			body: "<p>This photo is located in a public album. To make this photo private or public, edit the visibility of the associated album.</p>",
			buttons: {
				action: {
					title: "Show Album",
					fn: action
				},
				cancel: {
					title: "Cancel",
					fn: basicModal.close
				}
			}
		});

		return false;
	}

	if (visible.photo()) {
		photo.json["public"] = photo.json["public"] == 0 ? 1 : 0;
		view.photo["public"]();
		if (photo.json["public"] == 1) contextMenu.sharePhoto(photoID, e);
	}

	album.json.content[photoID]["public"] = album.json.content[photoID]["public"] == 0 ? 1 : 0;
	view.album.content["public"](photoID);

	albums.refresh();

	api.post("Photo::setPublic", { photoID: photoID }, function (data) {
		if (data !== true) lychee.error(null, params, data);
	});
};

photo.setDescription = function (photoID) {
	var oldDescription = photo.json.description.replace("'", "&apos;"),
	    action;

	action = function (data) {
		var params,
		    description = data.description;

		basicModal.close();

		// Remove html from input
		description = lychee.removeHTML(description);

		if (visible.photo()) {
			photo.json.description = description;
			view.photo.description();
		}

		params = {
			photoID: photoID,
			description: description
		};

		api.post("Photo::setDescription", params, function (data) {
			if (data !== true) lychee.error(null, params, data);
		});
	};

	basicModal.show({
		body: "<p>Enter a description for this photo: <input class='text' data-name='description' type='text' maxlength='800' placeholder='Description' value='" + oldDescription + "'></p>",
		buttons: {
			action: {
				title: "Set Description",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};

photo.editTags = function (photoIDs) {
	var oldTags = "",
	    msg = "",
	    input = "";

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	// Get tags
	if (visible.photo()) oldTags = photo.json.tags;
	if (visible.album() && photoIDs.length === 1) oldTags = album.json.content[photoIDs].tags;
	if (visible.album() && photoIDs.length > 1) {
		var same = true;
		photoIDs.forEach(function (id, index, array) {
			if (album.json.content[id].tags === album.json.content[photoIDs[0]].tags && same === true) same = true;else same = false;
		});
		if (same) oldTags = album.json.content[photoIDs[0]].tags;
	}

	// Improve tags
	oldTags = oldTags.replace(/,/g, ", ");

	action = function (data) {
		basicModal.close();
		photo.setTags(photoIDs, data.tags);
	};

	input = "<input class='text' data-name='tags' type='text' maxlength='800' placeholder='Tags' value='" + oldTags + "'>";

	if (photoIDs.length === 1) msg = "<p>Enter your tags for this photo. You can add multiple tags by separating them with a comma: " + input + "</p>";else msg = "<p>Enter your tags for all " + photoIDs.length + " selected photos. Existing tags will be overwritten. You can add multiple tags by separating them with a comma: " + input + "</p>";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Set Tags",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};

photo.setTags = function (photoIDs, tags) {
	var params;

	if (!photoIDs) return false;
	if (photoIDs instanceof Array === false) photoIDs = [photoIDs];

	// Parse tags
	tags = tags.replace(/(\ ,\ )|(\ ,)|(,\ )|(,{1,}\ {0,})|(,$|^,)/g, ",");
	tags = tags.replace(/,$|^,|(\ ){0,}$/g, "");

	// Remove html from input
	tags = lychee.removeHTML(tags);

	if (visible.photo()) {
		photo.json.tags = tags;
		view.photo.tags();
	}

	photoIDs.forEach(function (id, index, array) {
		album.json.content[id].tags = tags;
	});

	params = {
		photoIDs: photoIDs.join(),
		tags: tags
	};

	api.post("Photo::setTags", params, function (data) {
		if (data !== true) lychee.error(null, params, data);
	});
};

photo.deleteTag = function (photoID, index) {
	var tags;

	// Remove
	tags = photo.json.tags.split(",");
	tags.splice(index, 1);

	// Save
	photo.json.tags = tags.toString();
	photo.setTags([photoID], photo.json.tags);
};

photo.share = function (photoID, service) {
	var link = "",
	    url = photo.getViewLink(photoID),
	    filename = "unknown";

	switch (service) {
		case 0:
			link = "https://twitter.com/share?url=" + encodeURI(url);
			break;
		case 1:
			link = "http://www.facebook.com/sharer.php?u=" + encodeURI(url) + "&t=" + encodeURI(photo.json.title);
			break;
		case 2:
			link = "mailto:?subject=" + encodeURI(photo.json.title) + "&body=" + encodeURI(url);
			break;
		case 3:
			lychee.loadDropbox(function () {
				filename = photo.json.title + "." + photo.getDirectLink().split(".").pop();
				Dropbox.save(photo.getDirectLink(), filename);
			});
			break;
		default:
			link = "";
			break;
	}

	if (link.length > 5) location.href = link;
};

photo.getSize = function () {
	// Size can be 'big', 'medium' or 'small'
	// Default is big
	// Small is centered in the middle of the screen
	var size = "big",
	    scaled = false,
	    hasMedium = photo.json.medium !== "",
	    pixelRatio = window.devicePixelRatio,
	    view = {
		width: $(window).width() - 60,
		height: $(window).height() - 100
	};

	// Detect if the photo will be shown scaled,
	// because the screen size is smaller than the photo
	if (photo.json.width > view.width || photo.json.height > view.height) scaled = true;

	// Calculate pixel ratio of screen
	if (pixelRatio !== undefined && pixelRatio > 1) {
		view.width = view.width * pixelRatio;
		view.height = view.height * pixelRatio;
	}

	// Medium available and
	// Medium still bigger than screen
	if (hasMedium === true && (1920 > view.width && 1080 > view.height)) size = "medium";

	// Photo not scaled
	// Photo smaller then screen
	if (scaled === false && (photo.json.width < view.width && photo.json.width < view.height)) size = "small";

	return size;
};

photo.getArchive = function (photoID) {
	var link,
	    url = api.path + "?function=Photo::getArchive&photoID=" + photoID;

	if (location.href.indexOf("index.html") > 0) link = location.href.replace(location.hash, "").replace("index.html", url);else link = location.href.replace(location.hash, "") + url;

	if (lychee.publicMode) link += "&password=" + password.value;

	location.href = link;
};

photo.getDirectLink = function () {
	var url = "";

	if (photo.json && photo.json.url && photo.json.url !== "") url = photo.json.url;

	return url;
};

photo.getViewLink = function (photoID) {
	var url = "view.php?p=" + photoID;

	if (location.href.indexOf("index.html") > 0) return location.href.replace("index.html" + location.hash, url);else return location.href.replace(location.hash, url);
};
"use strict";

/**
 * @description	Searches through your photos and albums.
 * @copyright	2015 by Tobias Reich
 */

search = {

	code: null

};

search.find = function (term) {
	var albumsData = "",
	    photosData = "",
	    code;

	clearTimeout($(window).data("timeout"));
	$(window).data("timeout", setTimeout(function () {
		if ($("#search").val().length !== 0) {
			api.post("search", { term: term }, function (data) {
				// Build albums
				if (data && data.albums) {
					albums.json = { content: data.albums };
					$.each(albums.json.content, function () {
						albums.parse(this);
						albumsData += build.album(this);
					});
				}

				// Build photos
				if (data && data.photos) {
					album.json = { content: data.photos };
					$.each(album.json.content, function () {
						photosData += build.photo(this);
					});
				}

				// 1. No albums and photos found
				// 2. Only photos found
				// 3. Only albums found
				// 4. Albums and photos found
				if (albumsData === "" && photosData === "") code = "error";else if (albumsData === "") code = build.divider("Photos") + photosData;else if (photosData === "") code = build.divider("Albums") + albumsData;else code = build.divider("Photos") + photosData + build.divider("Albums") + albumsData;

				// Only refresh view when search results are different
				if (search.code !== md5(code)) {
					$(".no_content").remove();

					lychee.animate(".album, .photo", "contentZoomOut");
					lychee.animate(".divider", "fadeOut");

					search.code = md5(code);

					setTimeout(function () {
						if (code === "error") {
							lychee.content.html("");
							$("body").append(build.no_content("magnifying-glass"));
						} else {
							lychee.content.html(code);
							lychee.animate(".album, .photo", "contentZoomIn");
							$("img[data-type!=\"svg\"]").retina();
						}
					}, 300);
				}
			});
		} else search.reset();
	}, 250));
};

search.reset = function () {
	$("#search").val("");
	$(".no_content").remove();

	if (search.code !== "") {
		// Trash data
		albums.json = null;
		album.json = null;
		photo.json = null;
		search.code = "";

		lychee.animate(".divider", "fadeOut");
		albums.load();
	}
};
"use strict";

/**
 * @description	Lets you change settings.
 * @copyright	2015 by Tobias Reich
 */

settings = {};

settings.createConfig = function () {
	var msg = "",
	    action;

	action = function (data) {
		var dbName = data.dbName || "",
		    dbUser = data.dbUser || "",
		    dbPassword = data.dbPassword || "",
		    dbHost = data.dbHost || "",
		    dbTablePrefix = data.dbTablePrefix || "",
		    params;

		if (dbUser.length < 1) {
			basicModal.error("dbUser");
			return false;
		}

		if (dbHost.length < 1) dbHost = "localhost";
		if (dbName.length < 1) dbName = "lychee";

		params = {
			dbName: dbName,
			dbUser: dbUser,
			dbPassword: dbPassword,
			dbHost: dbHost,
			dbTablePrefix: dbTablePrefix
		};

		api.post("Database::createConfig", params, function (data) {
			if (data !== true) {
				// Connection failed
				if (data.indexOf("Warning: Connection failed!") !== -1) {
					basicModal.show({
						body: "<p>Unable to connect to host database because access was denied. Double-check your host, username and password and ensure that access from your current location is permitted.</p>",
						buttons: {
							action: {
								title: "Retry",
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Creation failed
				if (data.indexOf("Warning: Creation failed!") !== -1) {
					basicModal.show({
						body: "<p>Unable to create the database. Double-check your host, username and password and ensure that the specified user has the rights to modify and add content to the database.</p>",
						buttons: {
							action: {
								title: "Retry",
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Could not create file
				if (data.indexOf("Warning: Could not create file!") !== -1) {
					basicModal.show({
						body: "<p>Unable to save this configuration. Permission denied in <b>'data/'</b>. Please set the read, write and execute rights for others in <b>'data/'</b> and <b>'uploads/'</b>. Take a look at the readme for more information.</p>",
						buttons: {
							action: {
								title: "Retry",
								fn: settings.createConfig
							}
						}
					});

					return false;
				}

				// Something went wrong
				basicModal.show({
					body: "<p>Something unexpected happened. Please try again and check your installation and server. Take a look at the readme for more information.</p>",
					buttons: {
						action: {
							title: "Retry",
							fn: settings.createConfig
						}
					}
				});

				return false;
			} else {
				// Configuration successful
				window.location.reload();
			}
		});
	};

	msg = "\n\t\t\t<p>\n\t\t\t\tEnter your database connection details below:\n\t\t\t\t<input data-name='dbHost' class='text' type='text' placeholder='Database Host (optional)' value=''>\n\t\t\t\t<input data-name='dbUser' class='text' type='text' placeholder='Database Username' value=''>\n\t\t\t\t<input data-name='dbPassword' class='text' type='password' placeholder='Database Password' value=''>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tLychee will create its own database. If required, you can enter the name of an existing database instead:\n\t\t\t\t<input data-name='dbName' class='text' type='text' placeholder='Database Name (optional)' value=''>\n\t\t\t\t<input data-name='dbTablePrefix' class='text' type='text' placeholder='Table prefix (optional)' value=''>\n\t\t\t</p>\n\t\t\t";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Connect",
				fn: action
			}
		}
	});
};

settings.createLogin = function () {
	var action,
	    msg = "";

	action = function (data) {
		var params,
		    username = data.username,
		    password = data.password;

		if (username.length < 1) {
			basicModal.error("username");
			return false;
		}

		if (password.length < 1) {
			basicModal.error("password");
			return false;
		}

		basicModal.close();

		params = {
			username: username,
			password: password
		};

		api.post("Settings::setLogin", params, function (data) {
			if (data !== true) {
				basicModal.show({
					body: "<p>Unable to save login. Please try again with another username and password!</p>",
					buttons: {
						action: {
							title: "Retry",
							fn: settings.createLogin
						}
					}
				});
			}
		});
	};

	msg = "\n\t\t\t<p>\n\t\t\t\tEnter a username and password for your installation:\n\t\t\t\t<input data-name='username' class='text' type='text' placeholder='New Username' value=''>\n\t\t\t\t<input data-name='password' class='text' type='password' placeholder='New Password' value=''>\n\t\t\t</p>\n\t\t\t";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Create Login",
				fn: action
			}
		}
	});
};

settings.setLogin = function () {
	var msg = "",
	    action;

	action = function (data) {
		var oldPassword = data.oldPassword || "",
		    username = data.username || "",
		    password = data.password || "",
		    params;

		if (oldPassword.length < 1) {
			basicModal.error("oldPassword");
			return false;
		}

		if (username.length < 1) {
			basicModal.error("username");
			return false;
		}

		if (password.length < 1) {
			basicModal.error("password");
			return false;
		}

		basicModal.close();

		params = {
			oldPassword: oldPassword,
			username: username,
			password: password
		};

		api.post("Settings::setLogin", params, function (data) {
			if (data !== true) lychee.error(null, params, data);
		});
	};

	msg = "\n\t\t\t<p>\n\t\t\t\tEnter your current password:\n\t\t\t\t<input data-name='oldPassword' class='text' type='password' placeholder='Current Password' value=''>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tYour username and password will be changed to the following:\n\t\t\t\t<input data-name='username' class='text' type='text' placeholder='New Username' value=''>\n\t\t\t\t<input data-name='password' class='text' type='password' placeholder='New Password' value=''>\n\t\t\t</p>\n\t\t\t";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Change Login",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};

settings.setSorting = function () {
	var sorting = [],
	    action,
	    msg = "";

	action = function () {
		var params;

		sorting[0] = $(".basicModal select#settings_type").val();
		sorting[1] = $(".basicModal select#settings_order").val();

		basicModal.close();
		albums.refresh();

		params = {
			type: sorting[0],
			order: sorting[1]
		};

		api.post("Settings::setSorting", params, function (data) {
			if (data === true) {
				lychee.sorting = "ORDER BY " + sorting[0] + " " + sorting[1];
				lychee.load();
			} else lychee.error(null, params, data);
		});
	};

	msg = "\n\t\t\t<p>\n\t\t\t\tSort photos by\n\t\t\t\t<select id='settings_type'>\n\t\t\t\t\t<option value='id'>Upload Time</option>\n\t\t\t\t\t<option value='takestamp'>Take Date</option>\n\t\t\t\t\t<option value='title'>Title</option>\n\t\t\t\t\t<option value='description'>Description</option>\n\t\t\t\t\t<option value='public'>Public</option>\n\t\t\t\t\t<option value='star'>Star</option>\n\t\t\t\t\t<option value='type'>Photo Format</option>\n\t\t\t\t</select>\n\t\t\t\tin an\n\t\t\t\t<select id='settings_order'>\n\t\t\t\t\t<option value='ASC'>Ascending</option>\n\t\t\t\t\t<option value='DESC'>Descending</option>\n\t\t\t\t</select>\n\t\t\t\torder.\n\t\t\t</p>\n\t\t\t";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Change Sorting",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});

	if (lychee.sorting !== "") {
		sorting = lychee.sorting.replace("ORDER BY ", "").split(" ");

		$(".basicModal select#settings_type").val(sorting[0]);
		$(".basicModal select#settings_order").val(sorting[1]);
	}
};

settings.setDropboxKey = function (callback) {
	var action,
	    msg = "";

	action = function (data) {
		var key = data.key;

		if (data.key.length < 1) {
			basicModal.error("key");
			return false;
		}

		basicModal.close();

		api.post("Settings::setDropboxKey", { key: key }, function (data) {
			if (data === true) {
				lychee.dropboxKey = key;
				if (callback) lychee.loadDropbox(callback);
			} else lychee.error(null, params, data);
		});
	};

	msg = "\n\t\t\t<p>\n\t\t\t\tIn order to import photos from your Dropbox, you need a valid drop-ins app key from <a href='https://www.dropbox.com/developers/apps/create'>their website</a>. Generate yourself a personal key and enter it below:\n\t\t\t\t<input class='text' data-name='key' type='text' placeholder='Dropbox API Key' value='" + lychee.dropboxKey + "'>\n\t\t\t</p>\n\t\t\t";

	basicModal.show({
		body: msg,
		buttons: {
			action: {
				title: "Set Dropbox Key",
				fn: action
			},
			cancel: {
				title: "Cancel",
				fn: basicModal.close
			}
		}
	});
};
"use strict";

/**
 * @description	Swipes and moves an object.
 * @copyright	2015 by Tobias Reich
 */

swipe = {

	obj: null,
	tolerance: 150,
	offset: 0

};

swipe.start = function (obj, tolerance) {
	if (obj) swipe.obj = obj;
	if (tolerance) swipe.tolerance = tolerance;

	return true;
};

swipe.move = function (e) {
	if (swipe.obj === null) return false;

	swipe.offset = -1 * e.x;

	swipe.obj.css({
		WebkitTransform: "translateX(" + swipe.offset + "px)",
		MozTransform: "translateX(" + swipe.offset + "px)",
		transform: "translateX(" + swipe.offset + "px)"
	});
};

swipe.stop = function (e, left, right) {
	if (e.x <= -swipe.tolerance) left(true);else if (e.x >= swipe.tolerance) right(true);else if (swipe.obj !== null) {
		swipe.obj.css({
			WebkitTransform: "translateX(0px)",
			MozTransform: "translateX(0px)",
			transform: "translateX(0px)"
		});
	}

	swipe.obj = null;
	swipe.offset = 0;
};
"use strict";

/**
 * @description	Takes care of every action an album can handle and execute.
 * @copyright	2015 by Tobias Reich
 */

upload = {};

upload.show = function (title, files, callback) {
	basicModal.show({
		body: build.uploadModal(title, files),
		buttons: {
			action: {
				title: "Close",
				"class": "hidden",
				fn: basicModal.close
			}
		},
		callback: callback
	});
};

upload.notify = function (title, text) {
	var popup;

	if (!text || text === "") text = "You can now manage your new photo(s).";

	if (!window.webkitNotifications) return false;

	if (window.webkitNotifications.checkPermission() !== 0) window.webkitNotifications.requestPermission();

	if (window.webkitNotifications.checkPermission() === 0 && title) {
		popup = window.webkitNotifications.createNotification("", title, text);
		popup.show();
	}
};

upload.start = {

	local: function (files) {
		var albumID = album.getID(),
		    error = false,
		    process = function (files, file) {
			var formData = new FormData(),
			    xhr = new XMLHttpRequest(),
			    pre_progress = 0,
			    progress = 0,
			    finish = function () {
				window.onbeforeunload = null;

				$("#upload_files").val("");

				if (error === false) {
					// Success
					basicModal.close();
					upload.notify("Upload complete");
				} else {
					// Error
					$(".basicModal #basicModal__action.hidden").show();
					upload.notify("Upload complete", "Failed to upload one or more photos.");
				}

				albums.refresh();

				if (album.getID() === false) lychee.goto("0");else album.load(albumID);
			};

			// Check if file is supported
			if (file.supported === false) {
				// Skip file
				if (file.next !== null) process(files, file.next);else {
					// Look for supported files
					// If zero files are supported, hide the upload after a delay

					var hasSupportedFiles = false;

					for (var i = 0; i < files.length; i++) {
						if (files[i].supported === true) {
							hasSupportedFiles = true;
							break;
						}
					}

					if (hasSupportedFiles === false) setTimeout(finish, 2000);
				}

				return false;
			}

			formData.append("function", "Photo::add");
			formData.append("albumID", albumID);
			formData.append("tags", "");
			formData.append(0, file);

			xhr.open("POST", api.path);

			xhr.onload = function () {
				var wait = false,
				    errorText = "";

				file.ready = true;

				// Set status
				if (xhr.status === 200 && xhr.responseText === "1") {
					// Success
					$(".basicModal .rows .row:nth-child(" + (file.num + 1) + ") .status").html("Finished").addClass("success");
				} else {
					// Error
					$(".basicModal .rows .row:nth-child(" + (file.num + 1) + ") .status").html("Error").addClass("error");

					if (xhr.responseText.substr(0, 6) === "Error:") errorText = xhr.responseText.substr(6) + " Please take a look at the console of your browser for further details.";else errorText = "Server returned an unknown response. Please take a look at the console of your browser for further details.";

					$(".basicModal .rows .row:nth-child(" + (file.num + 1) + ") p.notice").html(errorText).show();

					// Set global error
					error = true;

					// Throw error
					lychee.error("Upload failed. Server returned the status code " + xhr.status + "!", xhr, xhr.responseText);
				}

				// Check if there are file which are not finished
				for (var i = 0; i < files.length; i++) {
					if (files[i].ready === false) {
						wait = true;
						break;
					}
				}

				// Finish upload when all files are finished
				if (wait === false) finish();
			};

			xhr.upload.onprogress = function (e) {
				if (e.lengthComputable) {
					// Calculate progress
					progress = e.loaded / e.total * 100 | 0;

					// Set progress when progress has changed
					if (progress > pre_progress) {
						$(".basicModal .rows .row:nth-child(" + (file.num + 1) + ") .status").html(progress + "%");
						pre_progress = progress;
					}

					if (progress >= 100) {
						// Scroll to the uploading file
						var scrollPos = 0;
						if (file.num + 1 > 4) scrollPos = (file.num + 1 - 4) * 40;
						$(".basicModal .rows").scrollTop(scrollPos);

						// Set status to processing
						$(".basicModal .rows .row:nth-child(" + (file.num + 1) + ") .status").html("Processing");

						// Upload next file
						if (file.next !== null) process(files, file.next);
					}
				}
			};

			xhr.send(formData);
		};

		if (files.length <= 0) return false;
		if (albumID === false || visible.albums() === true) albumID = 0;

		for (var i = 0; i < files.length; i++) {
			files[i].num = i;
			files[i].ready = false;
			files[i].supported = true;

			if (i < files.length - 1) files[i].next = files[i + 1];else files[i].next = null;

			// Check if file is supported
			if (files[i].type !== "image/jpeg" && files[i].type !== "image/jpg" && files[i].type !== "image/png" && files[i].type !== "image/gif") {
				files[i].ready = true;
				files[i].supported = false;
			}
		}

		window.onbeforeunload = function () {
			return "Lychee is currently uploading!";
		};

		upload.show("Uploading", files, function () {
			// Upload first file
			process(files, files[0]);
		});
	},

	url: function () {
		var albumID = album.getID(),
		    action;

		if (albumID === false) albumID = 0;

		action = function (data) {
			var extension,
			    files = [];

			if (data.link && data.link.length > 3) {
				basicModal.close();

				extension = data.link.split(".").pop();
				if (extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "gif" && extension !== "webp") {
					loadingBar.show("error", "The file format of this link is not supported.");
					return false;
				}

				files[0] = {
					name: data.link,
					supported: true
				};

				upload.show("Importing URL", files, function () {
					var params;

					$(".basicModal .rows .row .status").html("Importing");

					params = {
						url: data.link,
						albumID: albumID
					};

					api.post("Import::url", params, function (data) {
						basicModal.close();
						upload.notify("Import complete");

						albums.refresh();

						if (album.getID() === false) lychee.goto("0");else album.load(albumID);

						if (data !== true) lychee.error(null, params, data);
					});
				});
			} else basicModal.error("link");
		};

		basicModal.show({
			body: "<p>Please enter the direct link to a photo to import it: <input class='text' data-name='link' type='text' placeholder='http://' value=''></p>",
			buttons: {
				action: {
					title: "Import",
					fn: action
				},
				cancel: {
					title: "Cancel",
					fn: basicModal.close
				}
			}
		});
	},

	server: function () {
		var albumID = album.getID(),
		    action;

		if (albumID === false) albumID = 0;

		action = function (data) {
			var files = [];

			files[0] = {
				name: data.path,
				supported: true
			};

			upload.show("Importing from server", files, function () {
				var params;

				$(".basicModal .rows .row .status").html("Importing");

				params = {
					albumID: albumID,
					path: data.path
				};

				api.post("Import::server", params, function (data) {
					basicModal.close();
					upload.notify("Import complete");

					albums.refresh();

					if (data === "Notice: Import only contains albums!") {
						if (visible.albums()) lychee.load();else lychee.goto("");
					} else if (album.getID() === false) lychee.goto("0");else album.load(albumID);

					if (data === "Notice: Import only contains albums!") return true;else if (data === "Warning: Folder empty!") lychee.error("Folder empty. No photos imported!", params, data);else if (data !== true) lychee.error(null, params, data);
				});
			});
		};

		basicModal.show({
			body: "<p>This action will import all photos, folders and sub-folders which are located in the following directory. The <b>original files will be deleted</b> after the import when possible. <input class='text' data-name='path' type='text' maxlength='100' placeholder='Absolute path to directory' value='" + lychee.location + "uploads/import/'></p>",
			buttons: {
				action: {
					title: "Import",
					fn: action
				},
				cancel: {
					title: "Cancel",
					fn: basicModal.close
				}
			}
		});
	},

	dropbox: function () {
		var albumID = album.getID(),
		    links = "",
		    success;

		if (albumID === false) albumID = 0;

		success = function (files) {
			for (var i = 0; i < files.length; i++) {
				links += files[i].link + ",";

				files[i] = {
					name: files[i].link,
					supported: true
				};
			}

			// Remove last comma
			links = links.substr(0, links.length - 1);

			upload.show("Importing from Dropbox", files, function () {
				var params;

				$(".basicModal .rows .row .status").html("Importing");

				params = {
					url: links,
					albumID: albumID
				};

				api.post("Import::url", params, function (data) {
					basicModal.close();
					upload.notify("Import complete");

					albums.refresh();

					if (album.getID() === false) lychee.goto("0");else album.load(albumID);

					if (data !== true) lychee.error(null, params, data);
				});
			});
		};

		lychee.loadDropbox(function () {
			Dropbox.choose({
				linkType: "direct",
				multiselect: true,
				success: success
			});
		});
	}

};
"use strict";

/**
 * @description	Responsible to reflect data changes to the UI.
 * @copyright	2015 by Tobias Reich
 */

view = {};

view.infobox = {

	show: function () {
		if (!visible.infobox()) $("body").append("<div id='infobox_overlay' class='fadeIn'></div>");
		lychee.infobox.addClass("active");
	},

	hide: function () {
		lychee.animate("#infobox_overlay", "fadeOut");
		setTimeout(function () {
			$("#infobox_overlay").remove();
		}, 300);
		lychee.infobox.removeClass("active");
	}

};

view.albums = {

	init: function () {
		view.albums.title();
		view.albums.content.init();
	},

	title: function () {
		lychee.setTitle("Albums", false);
	},

	content: {

		scrollPosition: 0,

		init: function () {
			var smartData = "",
			    albumsData = "";

			/* Smart Albums */
			albums.parse(albums.json.unsortedAlbum);
			albums.parse(albums.json.publicAlbum);
			albums.parse(albums.json.starredAlbum);
			albums.parse(albums.json.recentAlbum);
			if (!lychee.publicMode) smartData = build.divider("Smart Albums") + build.album(albums.json.unsortedAlbum) + build.album(albums.json.starredAlbum) + build.album(albums.json.publicAlbum) + build.album(albums.json.recentAlbum);

			/* Albums */
			if (albums.json.content && albums.json.num !== 0) {
				$.each(albums.json.content, function () {
					albums.parse(this);

					// Display albums in reverse order
					albumsData = build.album(this) + albumsData;
				});

				if (!lychee.publicMode) albumsData = build.divider("Albums") + albumsData;
			}

			if (smartData === "" && albumsData === "") {
				lychee.content.html("");
				$("body").append(build.no_content("eye"));
			} else {
				lychee.content.html(smartData + albumsData);
			}

			$("img[data-type!=\"nonretina\"]").retina();

			// Restore scroll position
			if (view.albums.content.scrollPosition !== null) {
				$(document).scrollTop(view.albums.content.scrollPosition);
			}
		},

		title: function (albumID) {
			var longTitle = "",
			    title = albums.json.content[albumID].title;

			if (title !== null && title.length > 18) {
				longTitle = title;
				title = title.substr(0, 18) + "...";
			}

			$(".album[data-id=\"" + albumID + "\"] .overlay h1").html(title).attr("title", longTitle);
		},

		"delete": function (albumID) {
			$(".album[data-id=\"" + albumID + "\"]").css("opacity", 0).animate({
				width: 0,
				marginLeft: 0
			}, 300, function () {
				$(this).remove();
				if (albums.json.num <= 0) lychee.animate(".divider:last-of-type", "fadeOut");
			});
		}

	}

};

view.album = {

	init: function () {
		album.parse();

		view.album.infobox();
		view.album.title();
		view.album["public"]();
		view.album.content.init();

		album.json.init = 1;
	},

	hide: function () {
		view.infobox.hide();
	},

	title: function () {
		if ((visible.album() || !album.json.init) && !visible.photo()) {
			switch (album.getID()) {
				case "f":
					lychee.setTitle("Starred", false);
					break;
				case "s":
					lychee.setTitle("Public", false);
					break;
				case "r":
					lychee.setTitle("Recent", false);
					break;
				case "0":
					lychee.setTitle("Unsorted", false);
					break;
				default:
					if (album.json.init) $("#infobox .attr_title").html(album.json.title + " " + build.editIcon("edit_title_album"));
					lychee.setTitle(album.json.title, true);
					break;
			}
		}
	},

	content: {

		init: function () {
			var photosData = "";

			// Save and reset scroll position
			view.albums.content.scrollPosition = $(document).scrollTop();
			$("html, body").scrollTop(0);

			$.each(album.json.content, function () {
				photosData += build.photo(this);
			});
			lychee.content.html(photosData);

			$("img[data-type!=\"svg\"]").retina();
		},

		title: function (photoID) {
			var longTitle = "",
			    title = album.json.content[photoID].title;

			if (title !== null && title.length > 18) {
				longTitle = title;
				title = title.substr(0, 18) + "...";
			}

			$(".photo[data-id=\"" + photoID + "\"] .overlay h1").html(title).attr("title", longTitle);
		},

		star: function (photoID) {
			$(".photo[data-id=\"" + photoID + "\"] .iconic-star").remove();
			if (album.json.content[photoID].star == 1) $(".photo[data-id=\"" + photoID + "\"]").append("<a class='badge iconic-star'>" + build.iconic("star") + "</a>");
		},

		"public": function (photoID) {
			$(".photo[data-id=\"" + photoID + "\"] .iconic-share").remove();
			if (album.json.content[photoID]["public"] == 1) $(".photo[data-id=\"" + photoID + "\"]").append("<a class='badge iconic-share'>" + build.iconic("eye") + "</a>");
		},

		"delete": function (photoID) {
			$(".photo[data-id=\"" + photoID + "\"]").css("opacity", 0).animate({
				width: 0,
				marginLeft: 0
			}, 300, function () {
				$(this).remove();
				// Only when search is not active
				if (!visible.albums()) {
					album.json.num--;
					view.album.num();
					view.album.title();
				}
			});
		}

	},

	description: function () {
		$("#infobox .attr_description").html(album.json.description + " " + build.editIcon("edit_description_album"));
	},

	num: function () {
		$("#infobox .attr_images").html(album.json.num);
	},

	"public": function () {
		if (album.json["public"] == 1) {
			$("#button_share_album").addClass("active").attr("title", "Share Album");

			$(".photo .iconic-share").remove();

			if (album.json.init) $("#infobox .attr_visibility").html("Public");
		} else {
			$("#button_share_album").removeClass("active").attr("title", "Make Public");

			if (album.json.init) $("#infobox .attr_visibility").html("Private");
		}
	},

	password: function () {
		if (album.json.password == 1) $("#infobox .attr_password").html("Yes");else $("#infobox .attr_password").html("No");
	},

	infobox: function () {
		if ((visible.album() || !album.json.init) && !visible.photo()) lychee.infobox.find(".wrapper").html(build.infoboxAlbum(album.json));
	}

};

view.photo = {

	init: function () {
		photo.parse();

		view.photo.infobox();
		view.photo.title();
		view.photo.star();
		view.photo["public"]();
		view.photo.photo();

		photo.json.init = 1;
	},

	show: function () {
		// Change header
		lychee.content.addClass("view");
		header.setMode("photo");

		// Make body not scrollable
		$("body").css("overflow", "hidden");

		// Fullscreen
		$(document).bind("mouseenter", header.show).bind("mouseleave", header.hide);

		lychee.animate(lychee.imageview, "fadeIn");
	},

	hide: function () {
		header.show();
		if (visible.infobox) view.infobox.hide();

		lychee.content.removeClass("view");
		header.setMode("album");

		// Make body scrollable
		$("body").css("overflow", "auto");

		// Disable Fullscreen
		$(document).unbind("mouseenter").unbind("mouseleave");

		// Hide Photo
		lychee.animate(lychee.imageview, "fadeOut");
		setTimeout(function () {
			lychee.imageview.hide();
			view.album.infobox();
		}, 300);
	},

	title: function () {
		if (photo.json.init) $("#infobox .attr_title").html(photo.json.title + " " + build.editIcon("edit_title"));
		lychee.setTitle(photo.json.title, true);
	},

	description: function () {
		if (photo.json.init) $("#infobox .attr_description").html(photo.json.description + " " + build.editIcon("edit_description"));
	},

	star: function () {
		if (photo.json.star == 1) {
			// Starred
			$("#button_star").addClass("active").attr("title", "Unstar Photo");
		} else {
			// Unstarred
			$("#button_star").removeClass("active");
			$("#button_star").attr("title", "Star Photo");
		}
	},

	"public": function () {
		if (photo.json["public"] == 1 || photo.json["public"] == 2) {
			// Photo public
			$("#button_share").addClass("active").attr("title", "Share Photo");
			if (photo.json.init) $("#infobox .attr_visibility").html("Public");
		} else {
			// Photo private
			$("#button_share").removeClass("active").attr("title", "Make Public");
			if (photo.json.init) $("#infobox .attr_visibility").html("Private");
		}
	},

	tags: function () {
		$("#infobox #tags").html(build.tags(photo.json.tags));
	},

	photo: function () {
		lychee.imageview.html(build.imageview(photo.json, photo.getSize(), visible.controls()));

		var $nextArrow = lychee.imageview.find("a#next"),
		    $previousArrow = lychee.imageview.find("a#previous"),
		    hasNext = album.json && album.json.content && album.json.content[photo.getID()] && album.json.content[photo.getID()].nextPhoto === "",
		    hasPrevious = album.json && album.json.content && album.json.content[photo.getID()] && album.json.content[photo.getID()].previousPhoto === "";

		if (hasNext || lychee.viewMode) {
			$nextArrow.hide();
		} else {
			var nextPhotoID = album.json.content[photo.getID()].nextPhoto,
			    nextPhoto = album.json.content[nextPhotoID];

			$nextArrow.css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(\"" + nextPhoto.thumbUrl + "\")");
		}

		if (hasPrevious || lychee.viewMode) {
			$previousArrow.hide();
		} else {
			var previousPhotoID = album.json.content[photo.getID()].previousPhoto,
			    previousPhoto = album.json.content[previousPhotoID];

			$previousArrow.css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(\"" + previousPhoto.thumbUrl + "\")");
		};
	},

	infobox: function () {
		lychee.infobox.find(".wrapper").html(build.infoboxPhoto(photo.json));
	}

};
"use strict";

/**
 * @description	This module is used to check if elements are visible or not.
 * @copyright	2015 by Tobias Reich
 */

visible = {};

visible.albums = function () {
	if ($("#tools_albums").css("display") === "block") return true;
	return false;
};

visible.album = function () {
	if ($("#tools_album").css("display") === "block") return true;
	return false;
};

visible.photo = function () {
	if ($("#imageview.fadeIn").length > 0) return true;
	return false;
};

visible.search = function () {
	if (search.code !== null && search.code !== "") return true;
	return false;
};

visible.infobox = function () {
	if ($("#infobox.active").length > 0) return true;
	return false;
};

visible.infoboxbutton = function () {
	if (visible.albums()) return false;
	if (visible.photo()) return true;
	if (visible.album() && $("#button_info_album:visible").length > 0) return true;
	return false;
};

visible.controls = function () {
	if (lychee.loadingBar.css("opacity") < 1) return false;
	return true;
};

visible.message = function () {
	if ($(".message").length > 0) return true;
	return false;
};

visible.signin = function () {
	if ($(".message .sign_in").length > 0) return true;
	return false;
};

visible.contextMenu = function () {
	return basicContext.visible();
};

visible.multiselect = function () {
	if ($("#multiselect").length > 0) return true;
	return false;
};