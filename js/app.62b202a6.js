(function(e){function t(t){for(var n,o,i=t[0],l=t[1],u=t[2],c=0,p=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"aeea77ea"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container",attrs:{id:"container"}},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"form-container sign-up-container "},[a("form",{attrs:{action:"/"},on:{submit:function(t){return t.preventDefault(),e.validateForm(t)}}},[a("h1",[e._v("Create Account")]),e._m(0),a("p",[e._v("or use your email for registration")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.nameVal,expression:"nameVal"}],attrs:{type:"text",placeholder:"Name",name:"name",id:"name"},domProps:{value:e.nameVal},on:{input:function(t){t.target.composing||(e.nameVal=t.target.value)}}}),a("p",{staticClass:"error"},[e._v(e._s(e.errorMessage))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailVal,expression:"emailVal"}],attrs:{type:"email",placeholder:"Email",name:"email",id:"email"},domProps:{value:e.emailVal},on:{input:function(t){t.target.composing||(e.emailVal=t.target.value)}}}),a("p",{staticClass:"error"},[e._v(e._s(e.errorMessageEmail))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passVal,expression:"passVal"}],staticClass:"password",attrs:{type:"text",autocomplete:"off",placeholder:"Password",name:"password",id:"pass"},domProps:{value:e.passVal},on:{input:function(t){t.target.composing||(e.passVal=t.target.value)}}}),a("p",{staticClass:"error"},[e._v(e._s(e.errorMessagePass))]),a("button",{attrs:{type:"submit"}},[e._v("Sign Up")])])]),a("div",{staticClass:"form-container sign-in-container"},[a("form",{attrs:{action:"/",method:"get",name:"RegForm"},on:{submit:function(t){return t.preventDefault(),e.validateSignInForm(t)}}},[a("h1",[e._v("Sign In")]),e._m(1),a("p",[e._v("or use your account")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailValue,expression:"emailValue"}],attrs:{type:"email",placeholder:"Email",name:"Email",id:"emailValue"},domProps:{value:e.emailValue},on:{input:function(t){t.target.composing||(e.emailValue=t.target.value)}}}),a("p",{staticClass:"error"},[e._v(e._s(e.errorMessageSign1))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passValue,expression:"passValue"}],staticClass:"password",attrs:{type:"text",autocomplete:"off",placeholder:"Password",name:"Pass",id:"Pass"},domProps:{value:e.passValue},on:{input:function(t){t.target.composing||(e.passValue=t.target.value)}}}),a("p",{staticClass:"error"},[e._v(e._s(e.errorMessageSign2))]),a("p",[e._v("Forget Your Password?")]),a("button",{attrs:{type:"submit"}},[e._v("Sign In")])])])]),a("div",{staticClass:"col-lg-6 overlay-container"},[a("div",{staticClass:"overlay"},[a("div",{staticClass:"overlay-panel overlay-left"},[a("h1",[e._v("Welcome Back!")]),a("p",[e._v(" To keep connected with us please login with your personal info ")]),a("button",{on:{click:e.deleteSign}},[e._v("Sign In")])]),a("div",{staticClass:"overlay-panel overlay-right"},[a("h1",[e._v("Hello, Friend!")]),a("p",[e._v("Enter your personal details and start journey with us")]),a("button",{on:{click:e.signUp}},[e._v("Sign Up")])])])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"social-media"},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{attrs:{href:""}},[a("i",{staticClass:"fab fa-google-plus-g"})]),a("a",{attrs:{href:""}},[a("i",{staticClass:"fab fa-linkedin-in"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"social-media"},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{attrs:{href:""}},[a("i",{staticClass:"fab fa-google-plus-g"})]),a("a",{attrs:{href:""}},[a("i",{staticClass:"fab fa-linkedin-in"})])])}],o={data:function(){return{nameVal:null,errorMessage:null,emailVal:null,errorMessageEmail:null,passVal:null,errorMessagePass:null,errorMessageSign1:null,emailValue:null,passValue:null,errorMessageSign2:null}},methods:{signUp:function(){document.getElementById("container").classList.add("container-panel-active")},deleteSign:function(){document.getElementById("container").classList.remove("container-panel-active")},validateForm:function(){return this.nameVal?(this.errorMessage=null,this.emailVal?(this.errorMessageEmail=null,this.passVal?(this.errorMessagePass=null,!0):(this.errorMessagePass="the password is not found!!",document.getElementById("pass").focus(),!1)):(this.errorMessageEmail="the email is not found!!",document.getElementById("email").focus(),!1)):(this.errorMessage="the name is not found!!",document.getElementById("name").focus(),!1)},validateSignInForm:function(){return this.emailValue?(this.errorMessageSign1=null,this.passValue?void(this.errorMessageSign2=null):(this.errorMessageSign2="the Password is not found!!",document.getElementById("passValue").focus(),!1)):(this.errorMessageSign1="the email is not found!!",document.getElementById("emailValue").focus(),!1)}}},i=o,l=(a("5c0b"),a("2877")),u=Object(l["a"])(i,r,s,!1,null,null,null),c=u.exports,m=(a("d3b7"),a("8c4f")),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"})},d=[],f={name:"Home",components:{}},v=f,g=Object(l["a"])(v,p,d,!1,null,null,null),h=g.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"error"},[a("h1",[e._v("404")]),a("p",[e._v("Page not found")])])}],_={},V=Object(l["a"])(_,b,y,!1,null,null,null),w=V.exports;n["a"].use(m["a"]);var C=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"*",component:w}],P=new m["a"]({mode:"history",base:"",routes:C}),E=P,M=a("2f62");n["a"].use(M["a"]);var S=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("4989"),a("ab8b"),a("5ed1"),a("15f5"),a("7051"),a("b107");n["a"].config.productionTip=!1,new n["a"]({router:E,store:S,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},b107:function(e,t,a){}});
//# sourceMappingURL=app.62b202a6.js.map