webpackJsonp([26,32],{C4h5:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("Xxa5"),i=s.n(e),n=s("exGp"),r=s.n(n),l=s("bzuE").BASE_URL,o={data:function(){return{business_id:"",departments:[],key:""}},methods:{setLocal:function(t){localStorage.setItem("key",t)},logout:function(){localStorage.removeItem("business"),localStorage.removeItem("token"),this.$router.push("/business/login")}},created:function(){var t=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:try{t.business_id=JSON.parse(localStorage.getItem("business")).username}catch(a){t.key=localStorage.getItem("key")}if(!t.business_id){a.next=6;break}return a.next=4,t.$http.post(l+"/department/list/get-by-id",{id:t.business_id}).then(function(a){t.departments=a.data}).catch(function(t){console.log(t)});case 4:a.next=9;break;case 6:if(!t.key){a.next=9;break}return a.next=9,t.$http.post(l+"/department/list/get-by-key",{key:t.key}).then(function(a){a.data&&(t.departments=a.data)}).catch(function(t){console.error(t)});case 9:case"end":return a.stop()}},a,t)}))()}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[s("div",{staticClass:"navbar-nav ms-auto p-4 p-lg-0"},[s("a",{staticClass:"nav-item nav-link active",attrs:{href:"index.html"}},[t._v("Home")]),t._v(" "),s("div",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown"}},[t._v("Vị trí tuyển dụng")]),t._v(" "),s("div",{staticClass:"dropdown-menu rounded-0 m-0"},t._l(t.departments,function(a){return s("a",{key:a._id,staticClass:"dropdown-item",attrs:{href:"/business/department/"+a.key}},[t._v(t._s(a.name))])}),0)]),t._v(" "),s("div",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-bs-toggle":"dropdown"}},[t._v("Tuyển dụng")]),t._v(" "),s("div",{staticClass:"dropdown-menu rounded-0 m-0"},t._l(t.departments,function(a){return s("a",{key:a._id,staticClass:"dropdown-item",attrs:{href:"/business/recruit"},on:{click:function(s){return t.setLocal(a.key)}}},[t._v(t._s(a.name)+"\n            ")])}),0)]),t._v(" "),s("a",{staticClass:"nav-item nav-link",attrs:{href:"/business/candidate"}},[t._v("Ứng viên")]),t._v(" "),s("a",{staticClass:"nav-item nav-link",attrs:{href:""},on:{click:t.logout}},[t._v("Đăng xuất")])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5",attrs:{href:"/index.html"}},[a("h1",{staticClass:"m-0 text-primary"},[this._v("CVIDPro")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler me-4",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse"}},[a("span",{staticClass:"navbar-toggler-icon"})])}]},v=s("VU/8")(o,c,!1,null,null,null);a.default=v.exports},DeqC:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"businesstLayout",components:{BusinessHeader:s("C4h5").default}},i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("header",[a("BusinessHeader")],1),this._v(" "),a("div",[a("router-view")],1),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn",attrs:{"data-wow-delay":"0.1s"}},[s("div",{staticClass:"container py-5"},[s("div",{staticClass:"row g-5"},[s("div",{staticClass:"col-lg-3 col-md-6"},[s("h5",{staticClass:"text-white mb-4"},[t._v("Company")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("About Us")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Contact Us")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Our Services")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Privacy Policy")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Terms & Condition")])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6"},[s("h5",{staticClass:"text-white mb-4"},[t._v("Quick Links")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("About Us")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Contact Us")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Our Services")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Privacy Policy")]),t._v(" "),s("a",{staticClass:"btn btn-link text-white-50",attrs:{href:""}},[t._v("Terms & Condition")])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6"},[s("h5",{staticClass:"text-white mb-4"},[t._v("Contact")]),t._v(" "),s("p",{staticClass:"mb-2"},[s("i",{staticClass:"fa fa-map-marker-alt me-3"}),t._v("123 Street, New York, USA")]),t._v(" "),s("p",{staticClass:"mb-2"},[s("i",{staticClass:"fa fa-phone-alt me-3"}),t._v("+012 345 67890")]),t._v(" "),s("p",{staticClass:"mb-2"},[s("i",{staticClass:"fa fa-envelope me-3"}),t._v("info@example.com")]),t._v(" "),s("div",{staticClass:"d-flex pt-2"},[s("a",{staticClass:"btn btn-outline-light btn-social",attrs:{href:""}},[s("i",{staticClass:"fab fa-twitter"})]),t._v(" "),s("a",{staticClass:"btn btn-outline-light btn-social",attrs:{href:""}},[s("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),s("a",{staticClass:"btn btn-outline-light btn-social",attrs:{href:""}},[s("i",{staticClass:"fab fa-youtube"})]),t._v(" "),s("a",{staticClass:"btn btn-outline-light btn-social",attrs:{href:""}},[s("i",{staticClass:"fab fa-linkedin-in"})])])]),t._v(" "),s("div",{staticClass:"col-lg-3 col-md-6"},[s("h5",{staticClass:"text-white mb-4"},[t._v("Newsletter")]),t._v(" "),s("p",[t._v("Dolor amet sit justo amet elitr clita ipsum elitr est.")]),t._v(" "),s("div",{staticClass:"position-relative mx-auto",staticStyle:{"max-width":"400px"}},[s("input",{staticClass:"form-control bg-transparent w-100 py-3 ps-4 pe-5",attrs:{type:"text",placeholder:"Your email"}}),t._v(" "),s("button",{staticClass:"btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2",attrs:{type:"button"}},[t._v("SignUp")])])])])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"copyright"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 text-center text-md-start mb-3 mb-md-0"},[t._v("\n                            © "),s("a",{staticClass:"border-bottom",attrs:{href:"#"}},[t._v("Your Site Name")]),t._v(", All Right Reserved. \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t"),t._v("\n\t\t\t\t\t\t\tDesigned By "),s("a",{staticClass:"border-bottom",attrs:{href:"https://htmlcodex.com"}},[t._v("HTML Codex")])]),t._v(" "),s("div",{staticClass:"col-md-6 text-center text-md-end"},[s("div",{staticClass:"footer-menu"},[s("a",{attrs:{href:""}},[t._v("Home")]),t._v(" "),s("a",{attrs:{href:""}},[t._v("Cookies")]),t._v(" "),s("a",{attrs:{href:""}},[t._v("Help")]),t._v(" "),s("a",{attrs:{href:""}},[t._v("FQAs")])])])])])])])}]},n=s("VU/8")(e,i,!1,null,null,null);a.default=n.exports}});
//# sourceMappingURL=26.a29103de2fa58dc6613c.js.map