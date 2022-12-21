webpackJsonp([18],{nc4H:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("bzuE").BASE_URL,n={data:function(){return{departmentName:"",departmentEmail:"",businessInfo:"",token:localStorage.getItem("token"),isModalEdit:!1}},methods:{addDepartment:function(t){var s=this;t.preventDefault(),""==this.departmentName?Swal.fire({icon:"info",title:"Thông báo",text:"Tên phòng ban không được để trống",confirmButtonText:"OK",confirmButtonColor:"var(--primary)"}):this.$http.post(e+"/department/new",{name:this.departmentName,id:JSON.parse(localStorage.getItem("business")).username,email:this.departmentEmail}).then(function(t){t.data&&Swal.fire({icon:"success",title:"Thông báo",text:"Thêm phòng ban thành công",showConfirmButton:!1,timer:1500}),s.departments.push(t.data)}).catch(function(t){console.log(t)})},openModalEdit:function(t){this.isModalEdit=!0},updateInfo:function(){this.$http.put(e+"/business/update",{id:JSON.parse(localStorage.getItem("business")).username,name:this.businessInfo.name,address:this.businessInfo.address,majors:this.businessInfo.majors}).then(function(t){t.data&&Swal.fire({icon:"success",title:"Thông báo",text:"Cập nhật thông tin thành công",showConfirmButton:!1,timer:1500})}).catch(function(t){console.log(t)})}},created:function(){var t=this;this.token&&(console.log(this.token),this.$http.get(e+"/business/me",{headers:{Authorization:"Basic "+this.token}}).then(function(s){t.businessInfo=s.data,console.log(s.data)}).catch(function(t){console.log(t)}))}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container pt-4"},[t.businessInfo.confirm2&&1==t.businessInfo.confirm2.status?a("button",{staticClass:"btn btn-primary btn-icon-split my-4",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#addDepartment"},on:{click:function(s){t.departmentName="",t.departmentEmail=""}}},[a("i",{staticClass:"fas fa-plus"}),t._v(" Thêm phòng ban\n  ")]):t._e(),t._v(" "),t.businessInfo.confirm1&&-1==t.businessInfo.confirm1.status?a("div",[t._m(0),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"editInfo",tabindex:"-1","aria-labelledby":"editInfoLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"mb-3"},[t._m(2),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.businessInfo.manager,expression:"businessInfo.manager"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập người đại diện"},domProps:{value:t.businessInfo.manager},on:{input:function(s){s.target.composing||t.$set(t.businessInfo,"manager",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"mb-3"},[t._m(3),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.businessInfo.phone,expression:"businessInfo.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập số điện thoại"},domProps:{value:t.businessInfo.phone},on:{input:function(s){s.target.composing||t.$set(t.businessInfo,"phone",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"mb-3"},[t._m(4),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.businessInfo.majors,expression:"businessInfo.majors"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập chức vụ"},domProps:{value:t.businessInfo.majors},on:{input:function(s){s.target.composing||t.$set(t.businessInfo,"majors",s.target.value)}}})]),t._v(" "),a("div",{staticClass:"mb-3"},[t._m(5),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.businessInfo.majors,expression:"businessInfo.majors"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Nhập ngành nghề kinh doanh chính"},domProps:{value:t.businessInfo.majors},on:{input:function(s){s.target.composing||t.$set(t.businessInfo,"majors",s.target.value)}}})]),t._v(" "),t._m(6),t._v(" "),a("div",{staticClass:"d-grid gap-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateInfo}},[t._v("Cập nhật")])])])])])])]):t._e(),t._v(" "),t.businessInfo.confirm1&&-1!=t.businessInfo.confirm1.status&&t.businessInfo.confirm2&&0==t.businessInfo.confirm2.status?a("div",[t._m(7)]):t._e(),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"addDepartment",tabindex:"-1","aria-labelledby":"addDepartmentLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[t._m(8),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"mb-3"},[t._m(9),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.departmentName,expression:"departmentName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập tên phòng ban"},domProps:{value:t.departmentName},on:{input:function(s){s.target.composing||(t.departmentName=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"mb-3"},[t._m(10),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.departmentEmail,expression:"departmentEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Nhập email"},domProps:{value:t.departmentEmail},on:{input:function(s){s.target.composing||(t.departmentEmail=s.target.value)}}})]),t._v(" "),a("hr")]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("\n            Đóng\n          ")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal",disabled:0===t.departmentName.length},on:{click:t.addDepartment}},[t._v("\n            Thêm\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[s("h4",{staticClass:"alert-heading"},[this._v("Thông báo!")]),this._v(" "),s("p",[this._v("\n        Tài khoản của bạn không được duyệt. Vui lòng cập nhật thông tin để được duyệt lại.\n      ")]),this._v(" "),s("hr"),this._v(" "),s("p",{staticClass:"mb-0"},[s("a",{staticClass:"btn btn-primary",attrs:{"data-bs-toggle":"modal","data-bs-target":"#editInfo"}},[this._v("Cập nhật thông tin")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"editInfoLabel"}},[this._v("Cập nhật thông tin")]),this._v(" "),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"col-form-label"},[this._v("Người đại diện"),s("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"col-form-label"},[this._v("Số điện thoại"),s("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"col-form-label"},[this._v("Chức vụ"),s("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"col-form-label"},[this._v("Ngành nghề kinh doanh chính"),s("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mb-3"},[s("label",{staticClass:"col-form-label"},[this._v("Giấy phép kinh doanh"),s("span",{staticClass:"text-danger"},[this._v("*")])]),this._v(" "),s("input",{staticClass:"form-control",attrs:{type:"file",placeholder:"Nhập email"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[s("h4",{staticClass:"alert-heading"},[this._v("Thông báo!")]),this._v(" "),s("p",[this._v("\n        Tài khoản của bạn đang chờ duyệt. Vui lòng liên hệ với quản trị viên để được hỗ trợ.\n      ")]),this._v(" "),s("hr")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"addDepartmentLabel"}},[this._v("Thêm phòng ban")]),this._v(" "),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"col-form-label"},[this._v("Tên phòng ban"),s("span",{staticClass:"text-danger"},[this._v("*")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("label",{staticClass:"col-form-label"},[this._v("Email"),s("span",{staticClass:"text-danger"})])}]},o=a("VU/8")(n,i,!1,null,null,null);s.default=o.exports}});
//# sourceMappingURL=18.45e36e9764bbdff93de4.js.map