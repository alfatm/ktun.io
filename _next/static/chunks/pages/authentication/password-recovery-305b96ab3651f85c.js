(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9964],{2104:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/password-recovery",function(){return r(25705)}])},75006:function(e,t,r){"use strict";r.d(t,{U:function(){return x}});var n=r(85893),i=r(41664),s=r(87357),a=r(27948),o=r(87918),c=r(15861),l=r(50122),u=r(30479),d="/static/icons/amplify.svg",f="/static/icons/auth0.svg",h="/static/icons/firebase.svg",m="/static/icons/jwt.svg",x=function(){return(0,n.jsx)(s.Z,{sx:{backgroundColor:"background.paper",borderBottom:1,borderColor:"divider",py:1},children:(0,n.jsx)(a.Z,{maxWidth:"md",children:(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[(0,n.jsx)(o.Z,{color:"primary",label:"NEW",sx:{mr:2},size:"small"}),(0,n.jsxs)(c.Z,{variant:"subtitle2",children:["Visit our"," ",(0,n.jsx)(i.default,{href:"/docs/welcome",passHref:!0,children:(0,n.jsx)(l.Z,{variant:"subtitle2",children:"docs"})})," ","and find out how to switch between"]}),(0,n.jsxs)(s.Z,{sx:{alignItems:"center",display:"flex","& img":{height:30,m:1}},children:[(0,n.jsx)(u.Z,{title:"Amplify",children:(0,n.jsx)("img",{alt:"Amplify",src:d})}),(0,n.jsx)(u.Z,{title:"Auth0",children:(0,n.jsx)("img",{alt:"Auth0",src:f})}),(0,n.jsx)(u.Z,{title:"Firebase",children:(0,n.jsx)("img",{alt:"Firebase",src:h})}),(0,n.jsx)(u.Z,{title:"JSON Web Token",children:(0,n.jsx)("img",{alt:"JWT",src:m})})]})]})})})}},3761:function(e,t,r){"use strict";r.d(t,{A:function(){return l}});var n=r(85893),i=r(67294),s=r(11163),a=r(45697),o=r.n(a),c=r(37704),l=function(e){var t=e.children,r=(0,c.a)(),a=(0,s.useRouter)(),o=(0,i.useState)(!1),l=o[0],u=o[1],d=a.query.disableGuard;return(0,i.useEffect)((function(){a.isReady&&(r.isAuthenticated&&"true"!==d?a.push("/dashboard"):u(!0))}),[a.isReady]),l?(0,n.jsx)(n.Fragment,{children:t}):null};l.propTypes={children:o().node}},37704:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(67294),i=r(76303),s=function(){return(0,n.useContext)(i.Vo)}},44455:function(e,t,r){"use strict";r.d(t,{s:function(){return i}});var n=r(67294),i=function(){var e=(0,n.useRef)(!1);return(0,n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),(0,n.useCallback)((function(){return e.current}),[])}},25705:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(85893),i=r(67294),s=r(9008),a=r(41664),o=r(87357),c=r(27948),l=r(15861),u=r(66242),d=r(3761),f=r(75006),h=r(28520),m=r.n(h),x=r(11163),p=r(74231),v=r(82580),b=r(50135),j=r(56815),g=r(11057),y=r(37704),w=r(44455);function Z(e,t,r,n,i,s,a){try{var o=e[s](a),c=o.value}catch(l){return void r(l)}o.done?t(c):Promise.resolve(c).then(n,i)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=function(e){var t,r=(0,w.s)(),i=(0,y.a)().passwordRecovery,s=(0,x.useRouter)(),a=(0,v.TA)({initialValues:{email:"",submit:null},validationSchema:p.Ry({email:p.Z_().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:(t=m().mark((function e(t,n){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i(t.email);case 3:r()&&(sessionStorage.setItem("username",t.email),s.push("/authentication/password-reset")),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0),r()&&(n.setStatus({success:!1}),n.setErrors({submit:e.t0.message}),n.setSubmitting(!1));case 10:case"end":return e.stop()}}),e,null,[[0,6]])})),function(){var e=this,r=arguments;return new Promise((function(n,i){var s=t.apply(e,r);function a(e){Z(s,n,i,a,o,"next",e)}function o(e){Z(s,n,i,a,o,"throw",e)}a(void 0)}))})});return(0,n.jsxs)("form",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){k(e,t,r[t])}))}return e}({noValidate:!0,onSubmit:a.handleSubmit},e,{children:[(0,n.jsx)(b.Z,{autoFocus:!0,error:Boolean(a.touched.email&&a.errors.email),fullWidth:!0,helperText:a.touched.email&&a.errors.email,label:"Email Address",margin:"normal",name:"email",onBlur:a.handleBlur,onChange:a.handleChange,type:"email",value:a.values.email}),a.errors.submit&&(0,n.jsx)(o.Z,{sx:{mt:3},children:(0,n.jsx)(j.Z,{error:!0,children:a.errors.submit})}),(0,n.jsx)(o.Z,{sx:{mt:3},children:(0,n.jsx)(g.Z,{disabled:a.isSubmitting,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Recover Password"})})]}))},C=r(37510),_=r(59084),A={Amplify:"/static/icons/amplify.svg",Auth0:"/static/icons/auth0.svg",Firebase:"/static/icons/firebase.svg",JWT:"/static/icons/jwt.svg"},E=function(){var e=(0,y.a)().platform;return(0,i.useEffect)((function(){_.w.push({event:"page_view"})}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{children:(0,n.jsx)("title",{children:"Password Recovery | Material Kit Pro"})}),(0,n.jsxs)(o.Z,{component:"main",sx:{backgroundColor:"background.default",display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,n.jsx)(f.U,{}),(0,n.jsxs)(c.Z,{maxWidth:"sm",sx:{py:{xs:"60px",md:"120px"}},children:[(0,n.jsxs)(o.Z,{sx:{alignItems:"center",backgroundColor:function(e){return"dark"===e.palette.mode?"neutral.900":"neutral.100"},borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1,display:"flex",flexWrap:"wrap",justifyContent:"space-between",mb:4,p:2,"& > img":{height:32,width:"auto",flexGrow:0,flexShrink:0}},children:[(0,n.jsxs)(l.Z,{color:"textSecondary",variant:"caption",children:["The app authenticates via ",e]}),(0,n.jsx)("img",{alt:"Auth platform",src:A[e]})]}),(0,n.jsxs)(u.Z,{elevation:16,sx:{p:4},children:[(0,n.jsxs)(o.Z,{sx:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,n.jsx)(a.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{children:(0,n.jsx)(C.T,{sx:{height:40,width:40}})})}),(0,n.jsx)(l.Z,{variant:"h4",children:"Password Recovery"}),(0,n.jsx)(l.Z,{color:"textSecondary",sx:{mt:2},variant:"body2",children:"Tell us your email so we can send you a reset link"})]}),(0,n.jsx)(o.Z,{sx:{flexGrow:1,mt:3},children:"Amplify"===e&&(0,n.jsx)(S,{})})]})]})]})]})};E.getLayout=function(e){return(0,n.jsx)(d.A,{children:e})};var P=E}},function(e){e.O(0,[2180,5464,135,939,551,2192,9774,2888,179],(function(){return t=2104,e(e.s=t);var t}));var t=e.O();_N_E=t}]);