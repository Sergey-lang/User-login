(this.webpackJsonpuser_login=this.webpackJsonpuser_login||[]).push([[0],{15:function(e,t,r){e.exports={form_wrapper:"LoginForm_form_wrapper__2zl6s",header:"LoginForm_header__jC63n",form:"LoginForm_form__1pcpS",input:"LoginForm_input__3kL8k",form_btn_wrapper:"LoginForm_form_btn_wrapper__KVwxh",form_btn:"LoginForm_form_btn__oVNS4",input_label:"LoginForm_input_label__13BOd"}},17:function(e,t,r){e.exports={wrapper:"UserPage_wrapper__2mid2",use_block:"UserPage_use_block__7HN15",user_info:"UserPage_user_info__z4mtE",info:"UserPage_info___jNbQ",logout_btn_wrapper:"UserPage_logout_btn_wrapper__3p3nK",logout_btn:"UserPage_logout_btn__3xjIW"}},22:function(e,t,r){e.exports={input_wrapper:"SuperInputText_input_wrapper__3c1LH",superInput:"SuperInputText_superInput__3Hv_Z",errorInput:"SuperInputText_errorInput__1Vdvd",error:"SuperInputText_error__3VwaK",red:"SuperInputText_red__2rpZx"}},29:function(e,t,r){e.exports={default:"SuperButton_default__jvmih",red:"SuperButton_red__Vh0YM"}},34:function(e,t,r){e.exports={preloader_wrapper:"Preloader_preloader_wrapper__H0b0v",loader:"Preloader_loader__2bGH8",load1:"Preloader_load1__3Uu_k"}},35:function(e,t,r){e.exports={error_wrapper:"Error_error_wrapper__M1ZKT",error:"Error_error__7H07g"}},38:function(e,t,r){e.exports={app:"App_app__3QElB"}},51:function(e,t,r){e.exports={wrapper:"LoginPage_wrapper__1HQt-",headline:"LoginPage_headline__2a2ob"}},82:function(e,t,r){},83:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(24),c=r.n(a),s=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,84)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},o=r(3),i=r(5),u=function(e){return e.authState.user},l=function(e){return e.authState.isLoggedIn},p=function(e){return e.app.status},d=function(e){return e.app.error},_=r(53),j=r(6),b=r(28),f=r(22),h=r.n(f),m=r(1),O=function(e){e.type;var t=e.onChange,r=e.onChangeText,n=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(b.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u=c?"".concat(c," ").concat(h.a.superInput," "):h.a.superInput,l="".concat(h.a.error," ").concat(o||"");return Object(m.jsxs)("div",{className:h.a.input_wrapper,children:[Object(m.jsx)("input",Object(j.a)({type:"text",onChange:function(e){t&&t(e),r&&r(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&a&&a()},className:"".concat(u," ").concat(s)},i)),c&&Object(m.jsx)("span",{className:l,children:c})]})},g=r(29),x=r.n(g),v=function(e){var t=e.red,r=e.className,n=Object(b.a)(e,["red","className"]),a=t?"".concat(x.a.red," ").concat(x.a.default):"".concat(r," ").concat(x.a.default);return Object(m.jsx)("button",Object(j.a)({className:a},n))},S=r(15),w=r.n(S),I=function(e){var t={};return e.clientId?0===e.clientId.toString().length?t.clientId="Must be 1 characters or more":e.clientId.toString().length>5&&(t.clientId="Must be 10 characters or less"):t.clientId="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<4?t.password="Must be 4 characters or more":e.password.length>10&&(t.password="Must be 10 characters or less"):t.password="Required",t},T=function(e){var t=e.callback,r=Object(_.a)({initialValues:{clientId:1,email:"user@ozitag.com",password:"user"},validate:I,onSubmit:function(e,r){var n=r.setSubmitting;t(e),n(!1)}}),n=function(e,t,r,n,a,c,s,o){return Object(m.jsx)(O,{id:e,name:t,type:r,className:n,error:a,onChange:c,value:s,placeholder:o})};return Object(m.jsxs)("div",{className:w.a.form_wrapper,children:[Object(m.jsx)("div",{className:w.a.header,children:Object(m.jsx)("h1",{children:"FLy&TAG"})}),Object(m.jsxs)("div",{className:w.a.form,children:[Object(m.jsx)("p",{children:"Login into your account"}),Object(m.jsxs)("form",{onSubmit:r.handleSubmit,children:[n("clientId","clientId","text",w.a.input,r.errors.clientId,r.handleChange,r.values.clientId,"Enter ID"),n("email","email","text",w.a.input,r.errors.email,r.handleChange,r.values.email,"Enter Email"),n("password","password","text",w.a.input,r.errors.password,r.handleChange,r.values.password,"Enter Password"),Object(m.jsx)("div",{className:w.a.form_btn_wrapper,children:Object(m.jsx)(v,{type:"submit",className:w.a.form_btn,children:"Log in"})})]})]})]})},N=r(18),P=r.n(N),E=r(30),L={status:"idle",error:null,isInitialized:!1},k=function(e){return{type:"SP/APP/SET_STATUS",status:e}},A=function(e){return{type:"SP/APP/SET_ERROR",error:e}},y=r(50),U=r.n(y).a.create({withCredentials:!1,baseURL:"https://tager.dev.ozitag.com",headers:{Accept:"application/json"}}),C=function(e){var t=localStorage.getItem("accessToken");return Boolean(t)?e.headers.Authorization="Bearer ".concat(t):delete e.headers.Authorization,e};U.interceptors.request.use(C);var R=function(e,t,r){return U.post("/api/auth/user",{clientId:e,email:t,password:r}).then((function(e){return e}))},F=function(){return U.post("/api/tager/user/profile/logout").then((function(e){return e}))},H=function(){return U.get("/api/tager/user/profile").then((function(e){return e}))},G={isLoggedIn:!1,user:{}},z=function(e){return{type:"SP/AUTH/SET_IS_LOGGED",value:e}},B=function(){return function(){var e=Object(E.a)(P.a.mark((function e(t){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k("loading")),e.prev=1,e.next=4,H();case 4:200===(r=e.sent).status?(t({type:"SP/AUTH/SET_USER_DATA",user:r.data.data}),t(z(!0)),t(k("succeeded"))):t(k("failed")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(A(e.t0.message)),t(k("failed"));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},K=r(34),Z=r.n(K),D=function(){return Object(m.jsx)("div",{className:Z.a.preloader_wrapper,children:Object(m.jsx)("div",{className:Z.a.loader,children:"Loading..."})})},M=r(51),V=r.n(M),q=r(35),Q=r.n(q),J=function(e){var t=e.error;return Object(m.jsx)("div",{className:Q.a.error_wrapper,children:Object(m.jsx)("div",{className:Q.a.error,children:t||""})})},W=function(){var e=Object(i.c)(p),t=Object(i.c)(d),r=Object(i.c)(l),n=Object(i.b)();return r?Object(m.jsx)(o.a,{to:"/"}):Object(m.jsx)("div",{className:V.a.wrapper,children:"loading"===e?Object(m.jsx)(D,{}):Object(m.jsxs)("div",{children:[Object(m.jsx)(T,{callback:function(e){var t=e.clientId,r=e.email,a=e.password;n(function(e,t,r){return function(){var n=Object(E.a)(P.a.mark((function n(a){var c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(k("loading")),n.prev=1,n.next=4,R(e,t,r);case 4:if(200!==(c=n.sent).status){n.next=15;break}return localStorage.setItem("accessToken",c.data.data.accessToken),localStorage.setItem("refreshToken",c.data.data.refreshToken),n.next=10,a(B());case 10:return a(z(!0)),a(A("")),n.abrupt("return");case 15:return a(k("failed")),n.abrupt("return");case 17:n.next=23;break;case 19:n.prev=19,n.t0=n.catch(1),a(A(n.t0.message)),a(k("failed"));case 23:case"end":return n.stop()}}),n,null,[[1,19]])})));return function(e){return n.apply(this,arguments)}}()}(t,r,a))}}),t&&Object(m.jsx)(J,{error:t})]})})},Y=r(17),$=r.n(Y),X=function(){var e=Object(i.c)(u),t=e.email,r=e.name,a=Object(i.c)(p),c=Object(i.c)(d),s=Object(i.c)(l),_=Object(i.b)();if(Object(n.useEffect)((function(){s&&_(B())}),[s,_]),!s)return Object(m.jsx)(o.a,{to:re.LOGIN});return Object(m.jsx)("div",{className:$.a.wrapper,children:"loading"===a?Object(m.jsx)(D,{}):Object(m.jsxs)("div",{className:$.a.use_block,children:[Object(m.jsxs)("div",{className:$.a.user_info,children:[Object(m.jsx)("div",{className:$.a.info,children:t}),Object(m.jsx)("div",{className:$.a.info,children:r})]}),s&&Object(m.jsx)("div",{className:$.a.logout_btn_wrapper,children:Object(m.jsx)(v,{onClick:function(){_(function(){var e=Object(E.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k("loading")),e.prev=1,e.next=4,F();case 4:200===e.sent.status&&(localStorage.clear(),t(z(!1)),t(A("")),t(k("succeeded"))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(A(e.t0.message)),t(k("failed"));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())},className:$.a.logout_btn,children:"LOGOUT"})}),c&&Object(m.jsx)(J,{error:c})]})})},ee=r(38),te=r.n(ee),re={LOGIN:"/login",USER:"/user"},ne=function(){var e=Object(i.c)(l),t=Object(i.b)();return Object(n.useEffect)((function(){localStorage.length&&t(z(!0))}),[e]),Object(m.jsx)("div",{className:te.a.app,children:Object(m.jsx)("div",{className:te.a.content,children:Object(m.jsxs)(o.d,{children:[Object(m.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(m.jsx)(o.a,{to:re.USER})}}),Object(m.jsx)(o.b,{path:re.LOGIN,exact:!0,render:function(){return Object(m.jsx)(W,{})}}),Object(m.jsx)(o.b,{path:re.USER,exact:!0,render:function(){return Object(m.jsx)(X,{})}})]})})})},ae=r(21),ce=r(20),se=r(52),oe=Object(ce.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SP/APP/SET_STATUS":return Object(j.a)(Object(j.a)({},e),{},{status:t.status});case"SP/APP/SET_ERROR":return Object(j.a)(Object(j.a)({},e),{},{error:t.error});case"SP/APP/SET_INITIALIZE":return Object(j.a)(Object(j.a)({},e),{},{isInitialized:!0});default:return e}},authState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SP/AUTH/SET_IS_LOGGED":return Object(j.a)(Object(j.a)({},e),{},{isLoggedIn:t.value});case"SP/AUTH/SET_USER_DATA":return Object(j.a)(Object(j.a)({},e),{},{user:t.user});default:return e}}}),ie=Object(ce.d)(oe,Object(ce.a)(se.a));r(82);c.a.render(Object(m.jsx)(ae.a,{children:Object(m.jsx)(i.a,{store:ie,children:Object(m.jsx)(ne,{})})}),document.getElementById("root")),s()}},[[83,1,2]]]);
//# sourceMappingURL=main.f6c0e341.chunk.js.map