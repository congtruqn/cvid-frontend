webpackJsonp([32],{C4h5:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Xxa5"),n=e.n(s),r=e("exGp"),i=e.n(r),o=e("bzuE").BASE_URL,d={data:function(){return{business_id:"",departments:[],key:""}},methods:{setLocal:function(t){localStorage.setItem("key",t)},logout:function(){localStorage.removeItem("business"),localStorage.removeItem("token"),this.$router.push("/business/login")}},created:function(){var t=this;return i()(n.a.mark(function a(){return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{t.business_id=JSON.parse(localStorage.getItem("business")).username}catch(a){t.key=localStorage.getItem("key")}if(!t.business_id){a.next=6;break}return a.next=4,t.$http.post(o+"/department/list/get-by-id",{id:t.business_id}).then(function(a){t.departments=a.data}).catch(function(t){console.log(t)});case 4:a.next=9;break;case 6:if(!t.key){a.next=9;break}return a.next=9,t.$http.post(o+"/department/list/get-by-key",{key:t.key}).then(function(a){a.data&&(t.departments=a.data)}).catch(function(t){console.error(t)});case 9:case"end":return a.stop()}},a,t)}))()}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[e("div",{staticClass:"navbar-nav ms-auto p-4 p-lg-0"},[e("a",{staticClass:"nav-item nav-link active",attrs:{href:"/business"}},[t._v("Home")]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown"}},[t._v("Chức danh tuyển dụng")]),t._v(" "),e("div",{staticClass:"dropdown-menu rounded-0 m-0"},t._l(t.departments,function(a){return e("a",{key:a._id,staticClass:"dropdown-item",attrs:{href:"/business/department/"+a.key}},[t._v(t._s(a.name))])}),0)]),t._v(" "),e("div",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown"}},[t._v("Tuyển dụng")]),t._v(" "),e("div",{staticClass:"dropdown-menu rounded-0 m-0"},t._l(t.departments,function(a){return e("a",{key:a._id,staticClass:"dropdown-item",attrs:{href:"/business/recruit"},on:{click:function(e){return t.setLocal(a.key)}}},[t._v(t._s(a.name)+"\n          ")])}),0)]),t._v(" "),e("a",{staticClass:"nav-item nav-link",attrs:{href:"/business/candidate"}},[t._v("Ứng viên")]),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5",attrs:{href:"/index.html"}},[a("h1",{staticClass:"m-0 text-primary"},[this._v("CVIDPro")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler me-4",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown"}},[t._v("Quản trị nhân sự")]),t._v(" "),e("div",{staticClass:"dropdown-menu rounded-0 m-0"},[e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Phòng ban")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Nhân viên")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Chấm công")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Các module khác")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown"}},[t._v("Tài khoản")]),t._v(" "),e("div",{staticClass:"dropdown-menu rounded-0 m-0"},[e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Thông tin tài khoản")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Đổi mật khẩu")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Đổi email")]),t._v(" "),e("a",{staticClass:"dropdown-item",attrs:{href:""}},[t._v("Đăng xuất")])])])}]},c=e("VU/8")(d,l,!1,null,null,null);a.default=c.exports}});
//# sourceMappingURL=32.62ca5a5b07e231b912b7.js.map