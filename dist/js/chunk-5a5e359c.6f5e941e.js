(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5e359c"],{"2cfd":function(e,t,a){"use strict";a("e314")},"73cf":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("br"),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"card mx-auto"},[e._m(0),a("div",{staticClass:"card-body"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[e._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"confirm_password"}},[e._v("Confirm Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}})]),a("input",{staticClass:"btn btn-secondary",attrs:{type:"submit",value:"Register"}}),e._v(" "),a("router-link",{staticClass:"card-link",attrs:{to:"/login"}},[e._v("Have an account?")])],1)])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-header text-white bg-dark"},[a("h4",[e._v("Register")])])}],o=a("5530"),n=(a("b0c0"),a("2f62")),i={data:function(){return{name:"",email:"",username:"",password:"",confirm_password:""}},methods:Object(o["a"])(Object(o["a"])({},Object(n["b"])(["register"])),{},{registerUser:function(){var e=this,t={name:this.name,email:this.email,username:this.username,password:this.password,confirm_password:this.confirm_password};this.register(t).then((function(t){t.data.success&&e.$router.push("/login")})).catch((function(e){console.log(e)}))}})},c=i,l=(a("2cfd"),a("2877")),m=Object(l["a"])(c,s,r,!1,null,null,null);t["default"]=m.exports},b0c0:function(e,t,a){var s=a("83ab"),r=a("9bf2").f,o=Function.prototype,n=o.toString,i=/^\s*function ([^ (]*)/,c="name";s&&!(c in o)&&r(o,c,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})},e314:function(e,t,a){}}]);
//# sourceMappingURL=chunk-5a5e359c.6f5e941e.js.map