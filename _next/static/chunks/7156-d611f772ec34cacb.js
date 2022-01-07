(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7156],{78462:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(63366),a=t(87462),o=t(67294),i=(t(45697),t(86010)),s=t(71993),u=t(11496),c=t(33616),f=t(59773),l=t(15773);function d(e){return(0,l.Z)("MuiList",e)}(0,t(88858).Z)("MuiList",["root","padding","dense","subheader"]);var v=t(85893);const p=["children","className","component","dense","disablePadding","subheader"],h=(0,u.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disablePadding&&n.padding,t.dense&&n.dense,t.subheader&&n.subheader]}})((({ownerState:e})=>(0,a.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})));var m=o.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiList"}),{children:u,className:l,component:m="ul",dense:y=!1,disablePadding:b=!1,subheader:g}=t,Z=(0,r.Z)(t,p),M=o.useMemo((()=>({dense:y})),[y]),D=(0,a.Z)({},t,{component:m,dense:y,disablePadding:b}),w=(e=>{const{classes:n,disablePadding:t,dense:r,subheader:a}=e,o={root:["root",!t&&"padding",r&&"dense",a&&"subheader"]};return(0,s.Z)(o,d,n)})(D);return(0,v.jsx)(f.Z.Provider,{value:M,children:(0,v.jsxs)(h,(0,a.Z)({as:m,className:(0,i.Z)(w.root,l),ref:n,ownerState:D},Z,{children:[g,u]}))})}))},59773:function(e,n,t){"use strict";const r=t(67294).createContext({});n.Z=r},71579:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(67294);var a=function(e,n){return r.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}},58974:function(e,n,t){"use strict";var r=t(16600);n.Z=r.Z},82268:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(52149);function a(e){return(0,r.Z)({},e)}},73015:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(49474),a=t(62337),o=t(11699),i=t(35077),s=t(19013),u=t(82268),c=t(24262),f=t(13882),l=1440,d=43200;function v(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,f.Z)(2,arguments);var v=t.locale||i.Z;if(!v.formatDistance)throw new RangeError("locale must contain formatDistance property");var p=(0,r.Z)(e,n);if(isNaN(p))throw new RangeError("Invalid time value");var h,m,y=(0,u.Z)(t);y.addSuffix=Boolean(t.addSuffix),y.comparison=p,p>0?(h=(0,s.Z)(n),m=(0,s.Z)(e)):(h=(0,s.Z)(e),m=(0,s.Z)(n));var b,g=(0,o.Z)(m,h),Z=((0,c.Z)(m)-(0,c.Z)(h))/1e3,M=Math.round((g-Z)/60);if(M<2)return t.includeSeconds?g<5?v.formatDistance("lessThanXSeconds",5,y):g<10?v.formatDistance("lessThanXSeconds",10,y):g<20?v.formatDistance("lessThanXSeconds",20,y):g<40?v.formatDistance("halfAMinute",null,y):g<60?v.formatDistance("lessThanXMinutes",1,y):v.formatDistance("xMinutes",1,y):0===M?v.formatDistance("lessThanXMinutes",1,y):v.formatDistance("xMinutes",M,y);if(M<45)return v.formatDistance("xMinutes",M,y);if(M<90)return v.formatDistance("aboutXHours",1,y);if(M<l){var D=Math.round(M/60);return v.formatDistance("aboutXHours",D,y)}if(M<2520)return v.formatDistance("xDays",1,y);if(M<d){var w=Math.round(M/l);return v.formatDistance("xDays",w,y)}if(M<86400)return b=Math.round(M/d),v.formatDistance("aboutXMonths",b,y);if((b=(0,a.Z)(m,h))<12){var x=Math.round(M/d);return v.formatDistance("xMonths",x,y)}var E=b%12,L=Math.floor(b/12);return E<3?v.formatDistance("aboutXYears",L,y):E<9?v.formatDistance("overXYears",L,y):v.formatDistance("almostXYears",L+1,y)}function p(e,n){return(0,f.Z)(1,arguments),v(e,Date.now(),n)}},48418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,o=(a=t(67294))&&a.__esModule?a:{default:a},i=t(76273),s=t(90387),u=t(57190);var c={};function f(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(a?"%"+a:"")]=!0}}var l=function(e){var n,t=!1!==e.prefetch,a=s.useRouter(),l=o.default.useMemo((function(){var n=r(i.resolveHref(a,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?i.resolveHref(a,e.as):o||t}}),[a,e.href,e.as]),d=l.href,v=l.as,p=e.children,h=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var g=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,Z=r(u.useIntersection({rootMargin:"200px"}),2),M=Z[0],D=Z[1],w=o.default.useCallback((function(e){M(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,M]);o.default.useEffect((function(){var e=D&&t&&i.isLocalURL(d),n="undefined"!==typeof b?b:a&&a.locale,r=c[d+"%"+v+(n?"%"+n:"")];e&&!r&&f(a,d,v,{locale:n})}),[v,d,D,b,t,a]);var x={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,s,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:u,scroll:s}))}(e,a,d,v,h,m,y,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(a,d,v,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof b?b:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(v,E,a&&a.locales,a&&a.domainLocales);x.href=L||i.addBasePath(i.addLocale(v,E,a&&a.defaultLocale))}return o.default.cloneElement(n,x)};n.default=l},57190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,u=a.useRef(),c=r(a.useState(!1),2),f=c[0],l=c[1],d=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&l(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return l(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[d,f]};var a=t(67294),o=t(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map},41664:function(e,n,t){e.exports=t(48418)}}]);