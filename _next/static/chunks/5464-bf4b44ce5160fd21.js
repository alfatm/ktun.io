"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5464],{25464:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(87462),o=n(63366),i=n(67294),s=(n(59864),n(45697),n(86010)),a=n(71993),l=n(84118),c=n(55113),u=n(14564),p=n(11496),f=n(2734),d=n(33616),h=n(15773);function v(e){return(0,h.Z)("MuiMenu",e)}(0,n(88858).Z)("MuiMenu",["root","paper","list"]);var m=n(85893);const g=["onEntering"],Z=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],P={vertical:"top",horizontal:"right"},b={vertical:"top",horizontal:"left"},y=(0,p.ZP)(u.ZP,{shouldForwardProp:e=>(0,p.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),M=(0,p.ZP)(c.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),w=(0,p.ZP)(l.Z,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0});var C=i.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiMenu"}),{autoFocus:l=!0,children:c,disableAutoFocusItem:u=!1,MenuListProps:p={},onClose:h,open:C,PaperProps:E={},PopoverClasses:x,transitionDuration:T="auto",TransitionProps:{onEntering:k}={},variant:D="selectedMenu"}=n,F=(0,o.Z)(n.TransitionProps,g),R=(0,o.Z)(n,Z),z=(0,f.Z)(),O="rtl"===z.direction,I=(0,r.Z)({},n,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:p,onEntering:k,PaperProps:E,transitionDuration:T,TransitionProps:F,variant:D}),N=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"],list:["list"]},v,t)})(I),S=l&&!u&&C,L=i.useRef(null);let j=-1;return i.Children.map(c,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===D&&e.props.selected||-1===j)&&(j=t))})),(0,m.jsx)(y,(0,r.Z)({classes:x,onClose:h,anchorOrigin:{vertical:"bottom",horizontal:O?"right":"left"},transformOrigin:O?P:b,PaperProps:(0,r.Z)({component:M},E,{classes:(0,r.Z)({},E.classes,{root:N.paper})}),className:N.root,open:C,ref:t,transitionDuration:T,TransitionProps:(0,r.Z)({onEntering:(e,t)=>{L.current&&L.current.adjustStyleForScrollbar(e,z),k&&k(e,t)}},F),ownerState:I},R,{children:(0,m.jsx)(w,(0,r.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),h&&h(e,"tabKeyDown"))},actions:L,autoFocus:l&&(-1===j||u),autoFocusItem:S,variant:D},p,{className:(0,s.Z)(N.list,p.className),children:c}))}))}))},84118:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(87462),o=n(63366),i=n(67294),s=(n(59864),n(45697),n(8038)),a=n(78462),l=n(95806).Z,c=n(51705),u=n(58974),p=n(85893);const f=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function d(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function h(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function v(e,t){if(void 0===t)return!0;let n=e.innerText;return void 0===n&&(n=e.textContent),n=n.trim().toLowerCase(),0!==n.length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function m(e,t,n,r,o,i){let s=!1,a=o(e,t,!!t&&n);for(;a;){if(a===e.firstChild){if(s)return!1;s=!0}const t=!r&&(a.disabled||"true"===a.getAttribute("aria-disabled"));if(a.hasAttribute("tabindex")&&v(a,i)&&!t)return a.focus(),!0;a=o(e,a,n)}return!1}var g=i.forwardRef((function(e,t){const{actions:n,autoFocus:g=!1,autoFocusItem:Z=!1,children:P,className:b,disabledItemsFocusable:y=!1,disableListWrap:M=!1,onKeyDown:w,variant:C="selectedMenu"}=e,E=(0,o.Z)(e,f),x=i.useRef(null),T=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,u.Z)((()=>{g&&x.current.focus()}),[g]),i.useImperativeHandle(n,(()=>({adjustStyleForScrollbar:(e,t)=>{const n=!x.current.style.width;if(e.clientHeight<x.current.clientHeight&&n){const n=`${l((0,s.Z)(e))}px`;x.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=n,x.current.style.width=`calc(100% + ${n})`}return x.current}})),[]);const k=(0,c.Z)(x,t);let D=-1;i.Children.forEach(P,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===C&&e.props.selected||-1===D)&&(D=t))}));const F=i.Children.map(P,((e,t)=>{if(t===D){const t={};return Z&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===C&&(t.tabIndex=0),i.cloneElement(e,t)}return e}));return(0,p.jsx)(a.Z,(0,r.Z)({role:"menu",ref:k,className:b,onKeyDown:e=>{const t=x.current,n=e.key,r=(0,s.Z)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),m(t,r,M,y,d);else if("ArrowUp"===n)e.preventDefault(),m(t,r,M,y,h);else if("Home"===n)e.preventDefault(),m(t,null,M,y,d);else if("End"===n)e.preventDefault(),m(t,null,M,y,h);else if(1===n.length){const o=T.current,i=n.toLowerCase(),s=performance.now();o.keys.length>0&&(s-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=s,o.keys.push(i);const a=r&&!o.repeating&&v(r,o);o.previousKeyMatched&&(a||m(t,r,!1,y,d,o))?e.preventDefault():o.previousKeyMatched=!1}w&&w(e)},tabIndex:g?0:-1},E,{children:F}))}))},14564:function(e,t,n){n.d(t,{ZP:function(){return k}});var r=n(87462),o=n(63366),i=n(67294),s=(n(45697),n(86010)),a=n(71993),l=n(11496),c=n(33616),u=n(57144),p=n(8038),f=n(5340),d=n(51705),h=n(96514),v=n(41935),m=n(55113),g=n(15773);function Z(e){return(0,g.Z)("MuiPopover",e)}(0,n(88858).Z)("MuiPopover",["root","paper"]);var P=n(85893);const b=["onEntering"],y=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function M(e,t){let n=0;return"number"===typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function w(e,t){let n=0;return"number"===typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function C(e){return[e.horizontal,e.vertical].map((e=>"number"===typeof e?`${e}px`:e)).join(" ")}function E(e){return"function"===typeof e?e():e}const x=(0,l.ZP)(v.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),T=(0,l.ZP)(m.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0});var k=i.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiPopover"}),{action:l,anchorEl:v,anchorOrigin:m={vertical:"top",horizontal:"left"},anchorPosition:g,anchorReference:k="anchorEl",children:D,className:F,container:R,elevation:z=8,marginThreshold:O=16,open:I,PaperProps:N={},transformOrigin:S={vertical:"top",horizontal:"left"},TransitionComponent:L=h.Z,transitionDuration:j="auto",TransitionProps:{onEntering:H}={}}=n,K=(0,o.Z)(n.TransitionProps,b),A=(0,o.Z)(n,y),W=i.useRef(),$=(0,d.Z)(W,N.ref),_=(0,r.Z)({},n,{anchorOrigin:m,anchorReference:k,elevation:z,marginThreshold:O,PaperProps:N,transformOrigin:S,TransitionComponent:L,transitionDuration:j,TransitionProps:K}),B=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"],paper:["paper"]},Z,t)})(_),V=i.useCallback((()=>{if("anchorPosition"===k)return g;const e=E(v),t=(e&&1===e.nodeType?e:(0,p.Z)(W.current).body).getBoundingClientRect();return{top:t.top+M(t,m.vertical),left:t.left+w(t,m.horizontal)}}),[v,m.horizontal,m.vertical,g,k]),U=i.useCallback((e=>({vertical:M(e,S.vertical),horizontal:w(e,S.horizontal)})),[S.horizontal,S.vertical]),X=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},n=U(t);if("none"===k)return{top:null,left:null,transformOrigin:C(n)};const r=V();let o=r.top-n.vertical,i=r.left-n.horizontal;const s=o+t.height,a=i+t.width,l=(0,f.Z)(E(v)),c=l.innerHeight-O,u=l.innerWidth-O;if(o<O){const e=o-O;o-=e,n.vertical+=e}else if(s>c){const e=s-c;o-=e,n.vertical+=e}if(i<O){const e=i-O;i-=e,n.horizontal+=e}else if(a>u){const e=a-u;i-=e,n.horizontal+=e}return{top:`${Math.round(o)}px`,left:`${Math.round(i)}px`,transformOrigin:C(n)}}),[v,k,V,U,O]),Y=i.useCallback((()=>{const e=W.current;if(!e)return;const t=X(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}),[X]);i.useEffect((()=>{I&&Y()})),i.useImperativeHandle(l,(()=>I?{updatePosition:()=>{Y()}}:null),[I,Y]),i.useEffect((()=>{if(!I)return;const e=(0,u.Z)((()=>{Y()})),t=(0,f.Z)(v);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[v,I,Y]);let q=j;"auto"!==j||L.muiSupportAuto||(q=void 0);const G=R||(v?(0,p.Z)(E(v)).body:void 0);return(0,P.jsx)(x,(0,r.Z)({BackdropProps:{invisible:!0},className:(0,s.Z)(B.root,F),container:G,open:I,ref:t,ownerState:_},A,{children:(0,P.jsx)(L,(0,r.Z)({appear:!0,in:I,onEntering:(e,t)=>{H&&H(e,t),Y()},timeout:q},K,{children:(0,P.jsx)(T,(0,r.Z)({elevation:z},N,{ref:$,className:(0,s.Z)(B.paper,N.className),children:D}))}))}))}))},8038:function(e,t,n){var r=n(57094);t.Z=r.Z}}]);