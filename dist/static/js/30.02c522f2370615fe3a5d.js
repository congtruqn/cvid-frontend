webpackJsonp([30],{"P/js":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("bzuE").BASE_URL;var a={name:"adduser",data:function(){return{name:"",username:"",password:"",repassword:"",email:"",phone:"",address:"",type:4,options:[{text:"Nhân viên",value:3},{text:"Người quản lý",value:2},{text:"Quản trị viên",value:1}]}},methods:{close:function(){this.$emit("close")},handleSubmit:function(t){var e=this;t.preventDefault(),this.username.length>6?this.password===this.repassword?(this.$emit("close"),this.$http.post("api/user/adduser",{name:this.name,username:this.username,password:this.password,email:this.email,phone:this.phone,address:this.address,type:this.type},{headers:{Authorization:"Basic "+localStorage.getItem("token")}}).then(function(t){e.name="",e.username="",e.password="",e.repassword="",e.email="",e.phone="",e.address="",e.$http.get("api/user/getallusers?page="+e.$route.query.page,{headers:{Authorization:"Basic "+localStorage.getItem("token")}}).then(function(t){return e.$emit("inputData",t.data)})}).catch(function(t){console.error(t.response)})):alert("Mật khẩu phải giống nhau!"):alert("Tên đăng nhập quá ngắn!")}},mounted:function(){var t=this;this.$http.get("api/projects/getallprojectnotpage",{headers:{Authorization:"Basic "+localStorage.getItem("token")}}).then(function(e){return t.listprojects=e.data})}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",[s("div",{staticClass:"panel-body_modal"},[s("button",{staticClass:"ngdialog-close",attrs:{"aria-label":"Dismiss"},on:{click:function(e){return t.$emit("close")}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Họ và Tên")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Tên đăng nhập")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Mật khẩu")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Nhập lại mật khẩu")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.repassword,expression:"repassword"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.repassword},on:{input:function(e){e.target.composing||(t.repassword=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Điện thoại")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Địa chỉ")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-sm-3 control-label"},[t._v("Phân quyền")]),t._v(" "),s("div",{staticClass:"col-sm-9"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.type=e.target.multiple?s:s[0]}}},t._l(t.options,function(e){return s("option",{domProps:{value:e.value}},[t._v("\n                  "+t._s(e.text)+"\n                ")])}),0)])]),t._v(" "),s("div",{staticClass:"panel-body_modal"},[s("button",{staticClass:"btn btn-primary m-r-5 m-b-5",on:{click:t.handleSubmit}},[t._v("Lưu")])])])])])])])},staticRenderFns:[]},l=s("VU/8")(a,o,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=30.02c522f2370615fe3a5d.js.map