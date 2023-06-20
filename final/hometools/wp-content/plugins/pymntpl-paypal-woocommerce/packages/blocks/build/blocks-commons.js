"use strict";(self.webpackChunkwcPPCP=self.webpackChunkwcPPCP||[]).push([[107],{295:(e,t,n)=>{n.d(t,{nz:()=>l,VD:()=>i,sC:()=>c});var r=n(885),a=n(307),o=n(907),i=function(e){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),i=n[0],c=n[1];return(0,a.useEffect)((function(){i||(0,o.loadPayPalSdk)(e).then((function(e){return c(e)}))}),[i]),i},c=(n(622),function(e){var t=e.event,n=e.responseTypes,r=e.messageContext,o=void 0===r?null:r,i=e.setPaymentData;(0,a.useEffect)((function(){var e=t((function(e){var t,r;if(null!=e&&null!==(t=e.processingResponse)&&void 0!==t&&null!==(r=t.paymentDetails)&&void 0!==r&&r.ppcpErrorMessage){i(null);var a=e.processingResponse.paymentDetails.ppcpErrorMessage;return{type:n.ERROR,message:a,messageContext:o}}return null}));return function(){return e()}}),[t])}),l=function(e){var t=e.width,n=e.node,o=e.className,i=void 0===o?"wc-ppcp-sm__container":o,c=(0,a.useState)(window.innerWidth),l=(0,r.Z)(c,2),s=l[0],u=l[1],p=(0,a.useState)(n),d=(0,r.Z)(p,2),f=d[0],y=d[1];(0,a.useEffect)((function(){y(n)}),[n]),(0,a.useEffect)((function(){var e=function(){return u(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,a.useEffect)((function(){f&&(f.clientWidth<=t?f.classList.add(i):f.classList.remove(i))}),[s,t,f])}},719:(e,t,n)=>{n.r(t);var r=n(942),a=n(307),o=n(554),i=n(817),c=n(617),l=n(295);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var u=(0,c.getSetting)("paylaterParams"),p=function(e){var t=e.cart,n=(e.extensions,e.context,u.enabled),i=(0,a.useRef)(null),p=t.cartTotals,d=p.currency_code,f=p.total_price,y=(0,l.VD)((0,c.getSetting)("paypalQueryParams")),m=(0,a.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({amount:f/Math.pow(10,p.currency_minor_unit),currency:d,placement:"payment"},u.options)}));return(0,a.useEffect)((function(){y&&y.Messages(m).render(i.current)}),[y,m]),n?React.createElement(o.TotalsWrapper,null,React.createElement("div",{className:"wc-block-components-totals-item"},React.createElement("div",{ref:i,className:"wc-ppcp-paylater-msg__container"}))):null};(0,i.registerPlugin)("wc-ppcp",{render:function(){return React.createElement(o.ExperimentalOrderMeta,null,React.createElement(p,null))},scope:"woocommerce-checkout"})},870:(e,t,n)=>{n.r(t);var r=n(885),a=n(366);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=n(307),c=n(613),l=n(617),s=n(736),u=n(295),p=n(62),d=n(861),f=n(942),y=n(284),m=n.n(y),v=n(989),b=n.n(v),g=n(907),h=n(622);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=n(819);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=(0,l.getSetting)("ppcpGeneralData").isOlderVersion,S=["isExpress","context","billing","shippingData","eventRegistration","emitResponse","onError","onClick","onClose","onSubmit","activePaymentMethod","paymentMethodId"],j=function(e){var t=(0,l.getSetting)(e);return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t.hasOwnProperty(e)||(t[e]=n),t[e]}},D=j("ppcp_data"),C=(j("ppcpGeneralData"),function(e){return React.createElement(R,o({context:"express_checkout",isExpress:!0,paymentMethodId:"paymentplugins_ppcp_express"},e))}),R=function(e){var t=e.isExpress,n=void 0!==t&&t,c=e.context,f=e.billing,y=e.shippingData,v=e.eventRegistration,P=e.emitResponse,E=e.onError,j=e.onClick,C=e.onClose,R=e.onSubmit,x=e.activePaymentMethod,N=e.paymentMethodId,Z=(function(e,t){if(null==e)return{};var n,r,o=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}}(e,S),(0,i.useState)(!1)),I=(0,r.Z)(Z,2),T=I[0],M=I[1],G=(0,l.getSetting)("paypalQueryParams"),L="true"===G.vault,F=f.billingData,U=v.onPaymentProcessing,V=v.onCheckoutAfterProcessingWithError,X=v.onCheckoutValidationBeforeProcessing,q=P.responseTypes,Y=P.noticeContexts,B=(0,i.useState)(),W=(0,r.Z)(B,2),$=W[0],z=W[1];(0,u.nz)({width:375,node:$}),n||(E=(0,i.useCallback)((function(e){M(null!=e&&e.message?e.message:e)}),[]));var K=(0,i.useCallback)((function(e){var t;z(null==e||null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)}),[]),Q=function(e){var t=e.onSubmit,n=e.billingData,a=e.shippingData,o=e.onPaymentProcessing,c=e.responseTypes,l=e.activePaymentMethod,s=e.paymentMethodId,u=(0,i.useState)(null),p=(0,r.Z)(u,2),d=p[0],f=p[1],y=(0,i.useRef)(null),m=(0,i.useRef)(null),v=(0,i.useRef)(null);(0,i.useEffect)((function(){y.current=d,m.current=n,v.current=a})),(0,i.useEffect)((function(){(0,_.isEmpty)(d)||t()}),[d,t]);var b=(0,i.useCallback)((function(e){var t,n,r,a,o,i,c,l,s,u=v.current.needsShipping,p={};if((0,_.isEmpty)(null==e||null===(t=e.payer)||void 0===t||null===(n=t.address)||void 0===n?void 0:n.address_line_1)){if(u&&!(0,_.isEmpty)(null==e||null===(r=e.purchase_units)||void 0===r||null===(a=r[0])||void 0===a?void 0:a.shipping)){var d=e.purchase_units[0].shipping;p=(0,g.convertPayPalAddressToCart)(d.address)}}else p=(0,g.convertPayPalAddressToCart)(e.payer.address);return null!=e&&null!==(o=e.payer)&&void 0!==o&&o.name&&(p=w(w({},p),O(e.payer.name))),null!=e&&null!==(i=e.payer)&&void 0!==i&&i.email_address&&(p=w(w({},p),{},{email:e.payer.email_address})),null!=e&&null!==(c=e.payer)&&void 0!==c&&null!==(l=c.phone)&&void 0!==l&&null!==(s=l.phone_number)&&void 0!==s&&s.national_number&&(p=w(w({},p),{},{phone:e.payer.phone.phone_number.national_number})),p}),[]),P=(0,i.useCallback)((function(e){var t,n,r,a,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"billing",c={},l=v.current.needsShipping;return"billing"===i?null!=e&&null!==(o=e.payer_info)&&void 0!==o&&o.billing_address&&(c=(0,g.convertPayPalAddressToCart)(e.payer_info.billing_address)):l&&e.shipping_address&&(c=(0,g.convertPayPalAddressToCart)(e.shipping_address)),null!=e&&null!==(t=e.payer_info)&&void 0!==t&&t.first_name&&(c=w(w({},c),{},{first_name:e.payer_info.first_name})),null!=e&&null!==(n=e.payer_info)&&void 0!==n&&n.last_name&&(c=w(w({},c),{},{last_name:e.payer_info.last_name})),null!=e&&null!==(r=e.payer_info)&&void 0!==r&&r.email&&(c=w(w({},c),{},{email:e.payer_info.email})),null!=e&&null!==(a=e.payer_info)&&void 0!==a&&a.phone&&(c=w(w({},c),{},{phone:e.payer_info.phone})),c}),[]),O=(0,i.useCallback)((function(e){var t,n;if(Array.isArray(e)){var a=(0,r.Z)(e,2);t=a[0],n=a[1]}else t=e.given_name,n=e.surname;return{first_name:t,last_name:n}}),[]),E=(0,i.useCallback)((function(e){var t,n,r={};if(null!=e&&null!==(t=e.purchase_units)&&void 0!==t&&null!==(n=t[0])&&void 0!==n&&n.shipping){var a,o=e.purchase_units[0].shipping;if(r=(0,g.convertPayPalAddressToCart)(o.address),null!=o&&null!==(a=o.name)&&void 0!==a&&a.full_name){var i=(0,g.extractFullName)(o.name.full_name);r=w(w({},r),O(i))}}return r}),[]);return(0,i.useEffect)((function(){if(l===s){var e=o((function(){var e=m.current,t=v.current,n=t.shippingAddress,r=t.needsShipping,a=y.current,o=a.orderId,i=a.billingToken,l=a.billingTokenData,s=void 0===l?null:l,u=a.order,p=void 0===u?{}:u,d={meta:w(w({paymentMethodData:{ppcp_paypal_order_id:o,ppcp_billing_token:i}},k&&{billingData:w(w(w(w({},h.cZ),e),b(p)),s&&P(s))}),{},{billingAddress:w(w(w(w({},h.cZ),e),b(p)),s&&P(s))})};return r&&(k?d.meta.shippingData={address:w(w(w({},n),E(p)),s&&P(s,"shipping"))}:d.meta.shippingAddress=w(w(w(w({},h.e0),n),E(p)),s&&P(s,"shipping"))),w({type:c.SUCCESS},d)}));return function(){return e()}}}),[o,l]),{paymentData:d,setPaymentData:f}}({onSubmit:R,billingData:F,shippingData:y,onPaymentProcessing:U,responseTypes:q,activePaymentMethod:x,paymentMethodId:N}),H=Q.paymentData,J=Q.setPaymentData;(0,u.sC)({event:V,responseTypes:q,messageContext:n?Y.EXPRESS_PAYMENTS:null,setPaymentData:J}),function(e){var t=e.isExpress,n=e.paymentData,r=e.onCheckoutValidationBeforeProcessing;(0,i.useEffect)((function(){if(!t)return r((function(){return!(null==n||!n.orderId)||{errorMessage:(0,s.__)("Please click the PayPal button before placing your order.","pymntpl-paypal-woocommerce")}}))}),[t,n])}({isExpress:n,onCheckoutValidationBeforeProcessing:X,paymentData:H});var ee=(0,u.VD)(G),te=function(e){var t=e.isExpress,n=e.paypal,r=e.vault,a=e.buttonStyles,o=e.shippingData,c=e.billing,l=e.setError,u=e.setPaymentData,f=e.onClick,y=e.onClose,v=(0,i.useRef)(o),P=(0,i.useRef)(c),_=(0,i.useRef)({onClick:f,onClose:y,buttonState:!0,actions:{}});(0,i.useEffect)((function(){v.current=o,P.current=c,_.current=O(O({},_.current),{},{onClick:f,onClose:y});var e=o.needsShipping,t=o.shippingAddress,n=c.billingData;!(0,h.NX)(n)||e&&!(0,h.NX)(t)?E():w()}));var E=(0,i.useCallback)((function(){Object.keys(_.current.actions).forEach((function(e){_.current.actions[e].disable(),_.current.buttonState=!1}))}),[]),w=(0,i.useCallback)((function(){Object.keys(_.current.actions).forEach((function(e){_.current.actions[e].enable(),_.current.buttonState=!0}))}),[]),k=(0,i.useCallback)((function(e){var n=v.current,r=n.needsShipping,a=n.shippingAddress,o=c.billingData,i={fundingSource:e,style:S(e),onApprove:D,onError:R};return t?(i.onClick=function(){return _.current.onClick()},i.onCancel=function(){return _.current.onClose()}):i.onClick=function(){l(null),t||_.current.buttonState||l(r?(0,s.__)("Please fill out all billing and shipping fields before clicking PayPal.","pymntpl-paypal-woocommerce"):(0,s.__)("Please fill out all billing fields before clicking PayPal.","pymntpl-paypal-woocommerce"))},i.onInit=function(n,i){t||(_.current.buttonState=!0,_.current.actions[e]=i,(!(0,h.NX)(o)||r&&!(0,h.NX)(a))&&E())},j()?(i.createOrder=x,t&&r&&"venmo"!==e&&(i.onShippingChange=C)):i.createBillingAgreement=A,i}),[n,t,D,R,x,A,C,l]),S=(0,i.useCallback)((function(e){var t={};switch(e){case n.FUNDING.PAYPAL:t=a.paypal;break;case n.FUNDING.PAYLATER:t=a.paylater;break;case n.FUNDING.CREDIT:var r=["black","white"].includes(a.paylater.color)?a.paylater.color:"darkblue";t=O(O({},a.paylater),{},{color:r});break;case n.FUNDING.CARD:t=a.card;break;case n.FUNDING.VENMO:t=a.venmo}return t}),[n,a]),j=(0,i.useCallback)((function(){return!r}),[r]),D=(0,i.useCallback)(function(){var e=(0,d.Z)(m().mark((function e(t,n){var r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={order:{},orderId:t.orderID,billingToken:t.billingToken||"",billingTokenData:null},!t.billingToken){e.next=14;break}return e.prev=2,e.next=5,N(t.billingToken);case 5:r.billingTokenData=e.sent,u(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l(e.t0);case 12:e.next=15;break;case 14:n.order.get().then((function(e){u(O(O({},r),{},{order:e}))})).catch((function(e){l(e)}));case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),[l,N]),C=(0,i.useCallback)((function(e,t){var n,r=v.current.setSelectedRates,a=(0,g.convertPayPalAddressToCart)((null==e?void 0:e.shipping_address)||{},!0),o=(null==e||null===(n=e.selected_shipping_option)||void 0===n?void 0:n.id)||"";return b()({method:"POST",url:(0,h.q$)("wc-ppcp/v1/cart/shipping"),data:{order_id:e.orderID,address:a,shipping_method:(0,g.extractShippingMethod)(o),payment_method:"ppcp"}}).then((function(e){return e.code?t.reject():t.resolve()})).catch((function(e){return t.reject()})).finally((function(){o&&r.apply(void 0,(0,p.Z)((0,h.K6)(o)))}))}),[]),R=(0,i.useCallback)((function(e){var t;(null==e||null===(t=e.message)||void 0===t?void 0:t.indexOf("Window is closed"))>-1||l(e)}),[l]),x=(0,i.useCallback)(function(){var e=(0,d.Z)(m().mark((function e(n,r){var a,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.current.needsShipping,e.prev=1,e.next=4,b()({method:"POST",url:(0,h.q$)("wc-ppcp/v1/cart/order"),data:{payment_method:"ppcp",address_provided:!t&&a}});case 4:return o=e.sent,e.abrupt("return",o);case 8:throw e.prev=8,e.t0=e.catch(1),console.log(e.t0.message),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),[]),A=(0,i.useCallback)((function(e,t){return b()({method:"POST",url:(0,h.q$)("/wc-ppcp/v1/billing-agreement/token"),data:{context:"checkout",payment_method:"ppcp"}}).then((function(e){return e})).catch((function(e){return l(e)}))}),[l]),N=(0,i.useCallback)(function(){var e=(0,d.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",b()({method:"GET",path:"/wc-ppcp/v1/billing-agreement/token/".concat(t)}));case 4:throw e.prev=4,e.t0=e.catch(0),e.t0;case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{getOptions:k}}({isExpress:n,paypal:ee,vault:L,intent:G.intent,buttonStyles:D("buttons"),billing:f,shippingData:y,eventRegistration:v,setError:E,setPaymentData:J,onClick:j,onClose:C}),ne=te.getOptions,re=function(e){var t=e.data,n=e.paypal,a=e.context,o=e.vault,c=void 0!==o&&o,l=(0,i.useState)(!1),s=(0,r.Z)(l,2),u=s[0],p=s[1];return(0,i.useEffect)((function(){if(n){var e=[],r=t("buttonOrder",[]);"express_checkout"===a?t("paypalSections",[]).includes(a)&&e.push(n.FUNDING.PAYPAL):e.push(n.FUNDING.PAYPAL),t("payLaterEnabled")&&t("payLaterSections",[]).includes(a)&&(c?e.push(n.FUNDING.CREDIT):e.push(n.FUNDING.PAYLATER)),t("cardEnabled")&&t("creditCardSections",[]).includes(a)&&e.push(n.FUNDING.CARD),t("venmoEnabled")&&t("venmoSections",[]).includes(a)&&e.push(n.FUNDING.VENMO),e.sort((function(e,t){return r.indexOf(e)<r.indexOf(t)?-1:1})),p([].concat(e))}}),[n]),u}({data:D,paypal:ee,context:c,vault:L});if(n&&H){var ae=(0,h.NX)(F);return React.createElement("div",null,!ae&&React.createElement("p",{className:"wc-ppcp-payment__notice"},(0,s.__)("Please fill out all required fields and click Place Order.","pymntpl-paypal-woocommerce")),(0,h.i5)()&&!ae&&React.createElement("p",{className:"wc-ppcp-payment__notice"},(0,s.__)("Admin notice: In order for customer billing address details to be auto-populated you must contact PayPal Support and request this feature.","pymntpl-paypal-woocommerce")))}if(!n&&H)return React.createElement(React.Fragment,null,React.createElement("div",{className:"wc-ppcp-order-review__message"},(0,s.__)("Your PayPal payment method is ready to be processed. Please review your order details then click Place Order","pymntpl-paypal-woocommerce")),React.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),J(null)},className:"wc-ppcp-cancel__payment"},(0,s.__)("Cancel","pymntpl-paypal-woocommerce")));if(ee&&re){var oe=ee.Buttons.driver("react",{React,ReactDOM}),ie=re.map((function(e){var t=ne(e);return ee.Buttons(t).isEligible()?React.createElement(oe,o({key:e},t)):null}));return React.createElement(React.Fragment,null,!n&&React.createElement(A,{msg:T}),React.createElement("div",{className:"wc-ppcp-paypal__buttons",ref:K},ie))}return null},x=function(e){var t=e.components,n=e.title,r=e.icons,a=e.id;Array.isArray(r)||(r=[r]);var o=t.PaymentMethodLabel,i=t.PaymentMethodIcons;return React.createElement("div",{className:"wc-ppcp-blocks-payment-method__label ".concat(a)},React.createElement(o,{text:n}),React.createElement(i,{icons:r}))},A=function(e){var t=e.msg;return t?React.createElement("div",{className:"wc-ppcp-error__message"},t):null};(function(){for(var e=0,t=["paypalSections","payLaterSections","creditCardSections","venmoSections"];e<t.length;e++)if(D(t[e],[]).includes("express_checkout"))return!0;return!1})()&&(0,c.registerExpressPaymentMethod)({name:"paymentplugins_ppcp_express",canMakePayment:function(){return!0},content:React.createElement(C,null),edit:React.createElement(C,null),supports:{features:D("features")}}),(0,c.registerPaymentMethod)({name:"ppcp",label:React.createElement(x,{id:"ppcp",title:D("title"),icons:D("icons")}),ariaLabel:"PayPal",canMakePayment:function(){return!0},content:React.createElement(R,{context:"checkout",paymentMethodId:"ppcp"}),edit:React.createElement(R,{context:"checkout",paymentMethodId:"ppcp"}),supports:{showSavedCards:!1,showSaveOption:!1,features:D("features")}})},622:(e,t,n)=>{if(n.d(t,{K6:()=>u,NX:()=>y,cZ:()=>b,e0:()=>v,i5:()=>d,q$:()=>p}),862==n.j)var r=n(2);if(862==n.j)var a=n(885);var o=n(942),i=n(907),c=n(617);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=function(e){var t=e.match(i.SHIPPING_OPTION_REGEX);if(t){var n=t[1];return[t[2],n]}return[]},p=function(e){var t,n;return e=e.replace(/^\//,""),null===(t=(0,c.getSetting)("ppcpGeneralData"))||void 0===t||null===(n=t.ajaxRestPath)||void 0===n?void 0:n.replace("%s",e)},d=function(){var e;return null===(e=(0,c.getSetting)("ppcpGeneralData"))||void 0===e?void 0:e.isAdmin},f=function(e){var t=(0,c.getSetting)("countryLocale",{}),n=s({},t.default);return e&&t.hasOwnProperty(e)&&(n=Object.entries(t[e]).reduce((function(e,t){var n=(0,a.Z)(t,2),r=n[0],o=n[1];return e[r]=s(s({},e[r]),o),e}),n)),n},y=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=f(e.country),r=0,o=Object.entries(e);r<o.length;r++){var i=(0,a.Z)(o[r],2),c=i[0],l=i[1];if(!t.includes(c)&&null!=n&&n[c]&&n[c].required&&m(l))return!1}return!0},m=function(e){return"string"==typeof e?0==e.length||""==e:Array.isArray(e)?0==array.length:"object"!==(0,r.Z)(e)||0==Object.keys(e).length},v={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},b=s(s({},v),{},{email:""})},210:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},57:(e,t,n)=>{if(n.d(t,{Z:()=>a}),862==n.j)var r=n(210);function a(e){if(Array.isArray(e))return(0,r.Z)(e)}},861:(e,t,n)=>{function r(e,t,n,r,a,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){r(i,a,o,c,l,"next",e)}function l(e){r(i,a,o,c,l,"throw",e)}c(void 0)}))}}n.d(t,{Z:()=>a})},942:(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})},199:(e,t,n)=>{function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:()=>r})},786:(e,t,n)=>{function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:()=>r})},366:(e,t,n)=>{function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:()=>r})},885:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},62:(e,t,n)=>{if(n.d(t,{Z:()=>c}),862==n.j)var r=n(57);if(862==n.j)var a=n(199);if(862==n.j)var o=n(181);if(862==n.j)var i=n(786);function c(e){return(0,r.Z)(e)||(0,a.Z)(e)||(0,o.Z)(e)||(0,i.Z)()}},2:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:()=>r})},181:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(210);function a(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=blocks-commons.js.map