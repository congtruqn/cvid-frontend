webpackJsonp([23],{"QIp+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("bzuE").BASE_URL,n={data:function(){return{items:[]}},methods:{},created:function(){var t=this;this.$http.post(a+"/admin/get-all-business",{token:localStorage.getItem("token")}).then(function(e){t.items=e.data}).catch(function(t){console.log(t.response.data)})}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-responsive-xxl"},[s("table",{staticClass:"table table-sm caption-top"},[t._m(0),t._v(" "),s("tbody",t._l(t.items,function(e,a){return s("tr",[s("th",{attrs:{scope:"row"}},[t._v(t._s(a+1))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.username))]),t._v(" "),s("td",[t._v(t._s(e.email))])])}),0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Tên doanh nghiệp")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Mã số thuế")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Email")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Thao tác")])])])}]},c=s("VU/8")(n,o,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=23.904f0f117040696291f4.js.map