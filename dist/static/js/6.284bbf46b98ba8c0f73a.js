webpackJsonp([6],{Lxlb:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Xxa5"),i=s.n(a),l=s("Dd8w"),n=s.n(l),c=s("exGp"),o=s.n(c),d=s("bzuE").BASE_URL,r={data:function(){return{business:JSON.parse(localStorage.getItem("business")),positions:[],employee_id:"",cvid_list:[],list_selected_cv:[],job_list:[],list_paid_cv:[],selected:[],schedule:"",phone:"",email:"",address:"",contact:"",note:"",bill:[]}},computed:{calculator:function(){var t=0;return this.bill.forEach(function(e){e.price_list.forEach(function(s,a){a<e.quantity_needed?t+=s:t+=s/e.quantity_needed})}),t}},methods:{onChange:function(t,e){if(1==t.target.checked){var s=this.bill.findIndex(function(t){return t.position_id==e.position_id});-1==s?this.bill.push({position_id:e.position_id,quantity_needed:e.amount,price_list:[e.price]}):this.bill[s].price_list.push(e.price)}if(0==t.target.checked){var a=this.bill.findIndex(function(t){return t.position_id==e.position_id}),i=this.bill[a].price_list.findIndex(function(t){return t==e.price});this.bill[a].price_list.splice(i,1)}},cancelCVID:function(t){var e=this,s=this.list_selected_cv[t],a={employee_id:s.employee_id,position_id:s.position_id,type:2==s.type?0:s.type,confirm:1==s.type?0:s.confirm};this.$http.post(d+"/job/create",{job:a}).then(function(s){s.data&&e.list_selected_cv.splice(t,1)}).catch(function(t){console.log(t)})},setSchedule:function(){var t=this;""!=this.schedule&&""!=this.phone&&""!=this.email&&""!=this.address&&""!=this.contact?this.list_selected_cv.forEach(function(e,s){e.employee_id==t.employee_id&&(t.list_selected_cv[s].schedule=t.schedule,t.list_selected_cv[s].address=t.address,t.list_selected_cv[s].phone=t.phone,t.list_selected_cv[s].email=t.email,t.list_selected_cv[s].contact=t.contact,t.list_selected_cv[s].note=t.note,t.schedule="")}):Swal.fire({icon:"info",title:"Thất bại",text:"Vui lòng nhập các trường bắt buộc",confirmButtonText:"Quay lại"})},pay:function(){var t=this;if(0!=this.selected.length){var e=[];this.list_selected_cv.forEach(function(s){t.selected.includes(s._id)&&e.push(s)}),Swal.fire({icon:"warning",title:"Xác nhận thanh toán",confirmButtonColor:"var(--primary)",showCancelButton:!0,confirmButtonText:"Xác nhận"}).then(function(s){s.isConfirmed&&t.$http.post(d+"/job/pay",{job_list:e}).then(function(t){Swal.fire({icon:"success",title:"Thanh toán thành công",showConfirmButton:!1,timer:1500}),window.location.reload()}).catch(function(t){console.log(t)})})}else Swal.fire({icon:"info",title:"Thất bại",text:"Vui lòng chọn ứng viên",confirmButtonText:"Quay lại"})}},created:function(){var t=this;return o()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{t.business_id=JSON.parse(localStorage.getItem("business")).username}catch(e){t.key=localStorage.getItem("key")}if(!t.business_id){e.next=4;break}return e.next=4,t.$http.post(d+"/department/list/get-by-id",{id:t.business_id}).then(function(e){e.data.forEach(function(e){e.position.forEach(function(s){t.$http.post(d+"/job/getcvidforposition",{id:s._id}).then(function(a){a.data.job_list.forEach(function(i){if(i.position_id==s._id){var l=a.data.cv_list.find(function(t){return t._id==i.employee_id});1==i.status&&t.list_paid_cv.push(n()({},i,{name:l.name,department_name:e.name,jobtitle:s.jobtitle,phone_cv:l.username,email_cv:l.email,address_cv:l.address+", "+l.ward+", "+l.district+", "+l.province})),2==i.type&&0==i.status&&t.list_selected_cv.push(n()({},i,{name:l.name,jobtitle:s.jobtitle,department_name:e.name,amount:s.amount,price:5e5}))}})})})})}).catch(function(t){console.log(t)});case 4:case"end":return e.stop()}},e,t)}))()}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-xxl py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"tab-class wow fadeInUp",attrs:{"data-wow-delay":"0.3s"}},[t._m(0),t._v(" "),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane fade show p-0 active",attrs:{id:"tab-1"}},[s("div",{staticClass:"d-block d-md-none"},t._l(t.list_selected_cv,function(e,a){return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("\n                  "+t._s(e.name)),e.schedule?s("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"float-end form-check-input",attrs:{type:"checkbox"},domProps:{value:e._id,checked:Array.isArray(t.selected)?t._i(t.selected,e._id)>-1:t.selected},on:{change:[function(s){var a=t.selected,i=s.target,l=!!i.checked;if(Array.isArray(a)){var n=e._id,c=t._i(a,n);i.checked?c<0&&(t.selected=a.concat([n])):c>-1&&(t.selected=a.slice(0,c).concat(a.slice(c+1)))}else t.selected=l},function(s){return t.onChange(s,e)}]}}):t._e()]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("\n                  Phòng ban: "+t._s(e.department_name)+"\n                ")]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("Chức danh: "+t._s(e.jobtitle))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("Xếp loại: "+t._s(e.rating))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("Đánh giá: "+t._s(e.review))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("\n                  Trạng thái:\n                  "+t._s(0==e.confirm?"Đã gửi lời mời":"NLD đã xác nhận")+"\n                ")]),t._v(" "),s("p",{staticClass:"card-text"},[t._v("\n                  Lịch phỏng vấn:\n                  "+t._s(e.schedule?e.schedule.split("T")[1]+" "+e.schedule.split("T")[0]:"")+"\n                ")]),t._v(" "),e.schedule?t._e():s("button",{staticClass:"btn btn-success",attrs:{"data-bs-toggle":"modal","data-bs-target":"#ScheduleModal"},on:{click:function(s){s.preventDefault(),t.employee_id=e.employee_id}}},[t._v("\n                  Đặt lịch pv\n                ")]),t._v(" "),e.schedule?s("button",{staticClass:"btn btn-success",attrs:{"data-bs-toggle":"modal","data-bs-target":"#ScheduleModal"},on:{click:function(s){s.preventDefault(),t.employee_id=e.employee_id}}},[t._v("\n                  Thay đổi lịch pv")]):t._e(),s("button",{staticClass:"btn btn-danger ms-1",on:{click:function(e){return t.cancelCVID(a)}}},[t._v("\n                  Xóa\n                ")])])])}),0),t._v(" "),s("div",{staticClass:"table-fixed-right d-none d-md-block"},[s("table",[t._m(1),t._v(" "),t._l(t.list_selected_cv,function(e,a){return s("tr",[s("th",[t._v("\n                  "+t._s(a+1)+"\n                ")]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"col-4"},[t._v(t._s(e.department_name))]),t._v(" "),s("td",{staticClass:"cl-2"},[t._v(t._s(e.jobtitle))]),t._v(" "),s("td",[t._v(t._s(e.rating))]),t._v(" "),s("td",{staticClass:"col-4"},[t._v(t._s(e.review))]),t._v(" "),s("td",{staticClass:"col-4"},[t._v("\n                  "+t._s(0==e.confirm?"Đã gửi lời mời":"NLD đã xác nhận")+"\n                ")]),t._v(" "),s("td",{},[t._v("\n                  "+t._s(e.schedule?e.schedule.split("T")[1]+" "+e.schedule.split("T")[0]:"")+"\n                ")]),t._v(" "),s("td",{staticClass:"py-0"},[e.schedule?t._e():s("button",{staticClass:"btn btn-sm btn-success py-0",attrs:{"data-bs-toggle":"modal","data-bs-target":"#ScheduleModal"},on:{click:function(s){s.preventDefault(),t.employee_id=e.employee_id}}},[t._v("\n                    Đặt lịch pv\n                  ")]),t._v(" "),e.schedule?s("button",{staticClass:"btn btn-sm btn-success py-0",attrs:{"data-bs-toggle":"modal","data-bs-target":"#ScheduleModal"},on:{click:function(s){s.preventDefault(),t.employee_id=e.employee_id}}},[t._v("\n                    Thay đổi lịch pv")]):t._e(),s("button",{staticClass:"btn btn-sm btn-danger py-0 ms-1",on:{click:function(e){return t.cancelCVID(a)}}},[t._v("\n                    Xóa\n                  ")])]),t._v(" "),s("td",[e.schedule?s("input",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"form-check-input mx-2",attrs:{type:"checkbox"},domProps:{value:e._id,checked:Array.isArray(t.selected)?t._i(t.selected,e._id)>-1:t.selected},on:{change:[function(s){var a=t.selected,i=s.target,l=!!i.checked;if(Array.isArray(a)){var n=e._id,c=t._i(a,n);i.checked?c<0&&(t.selected=a.concat([n])):c>-1&&(t.selected=a.slice(0,c).concat(a.slice(c+1)))}else t.selected=l},function(s){return t.onChange(s,e)}]}}):t._e()])])})],2)]),t._v(" "),s("div",{staticClass:"mt-4 d-flex justify-content-end"},[s("div",{staticClass:"d-flex mb-3"},[s("a",{staticClass:"p-1 fs-4 me-2"},[s("i",{staticClass:"fw-bold"},[t._v("Tổng:")]),t._v("\n                "+t._s(t.calculator.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."))+"\n                VNĐ")]),t._v(" "),s("a",{staticClass:"btn btn-primary",on:{click:t.pay}},[t._v("Thanh toán")])])])]),t._v(" "),s("div",{staticClass:"tab-pane fade show p-0",attrs:{id:"tab-2"}},[s("div",{staticClass:"d-block d-md-none"},t._l(t.list_paid_cv,function(e,a){return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("\n                  Phòng ban: "+t._s(e.department_name)+"\n                ")]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("Chức danh: "+t._s(e.jobtitle))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("Số điện thoại: "+t._s(e.phone_cv))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("Email: "+t._s(e.email_cv))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("\n                  Trạng thái:\n                  "+t._s(0==e.confirm?"Đã gửi lời mời":"NLD đã xác nhận")+"\n                ")]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("\n                  Lịch phỏng vấn:\n                  "+t._s(e.schedule?e.schedule.split("T")[1]+" "+e.schedule.split("T")[0]:"")+"\n                ")]),t._v(" "),t._m(2,!0),t._v(" "),e.schedule?t._e():s("button",{staticClass:"btn btn-success",attrs:{"data-bs-toggle":"modal","data-bs-target":"#ScheduleModal"},on:{click:function(s){s.preventDefault(),t.employee_id=e.employee_id}}},[t._v("\n                  Đặt lịch pv\n                ")]),t._v(" "),e.schedule?s("button",{staticClass:"btn btn-success",attrs:{"data-bs-toggle":"modal","data-bs-target":"#ScheduleModal"},on:{click:function(s){s.preventDefault(),t.employee_id=e.employee_id}}},[t._v("\n                  Thay đổi lịch pv")]):t._e(),s("button",{staticClass:"btn btn-success ms-1"},[t._v("Cập nhật")])])])}),0),t._v(" "),s("div",{staticClass:"table-fixed-right d-none d-md-block"},[s("table",[t._m(3),t._v(" "),t._l(t.list_paid_cv,function(e,a){return s("tr",[s("th",[t._v("\n                  "+t._s(a+1)+"\n                ")]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",{staticClass:"col-4"},[t._v(t._s(e.department_name))]),t._v(" "),s("td",{staticClass:"col-4"},[t._v(t._s(e.jobtitle))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-sm btn-success py-0",attrs:{"data-bs-toggle":"modal","data-bs-target":"#inforModal"+a}},[t._v("\n                    Xem thông tin\n                  ")])]),t._v(" "),s("td",{staticClass:"col-4"},[t._v("\n                  "+t._s(0==e.confirm?"Đã gửi lịch pv":"NLD đã xác nhận")+"\n                ")]),t._v(" "),0==e.confirm?s("td",{},[e.schedule?s("button",{staticClass:"btn btn-sm py-0",attrs:{"data-bs-toggle":"modal","data-bs-target":"#ScheduleModal"},on:{click:function(s){s.preventDefault(),t.employee_id=e.employee_id}}},[t._v("\n                    "+t._s(e.schedule?e.schedule.split("T")[1]+" "+e.schedule.split("T")[0]:"")+"\n                  ")]):t._e()]):t._e(),t._v(" "),s("td",{},[s("select",{staticClass:"form-select form-select-sm",staticStyle:{width:"150px"},attrs:{"aria-label":"Default select example",disabled:0==e.confirm}},[s("option",{attrs:{selected:""}},[t._v("Chọn...")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("Đạt")]),t._v(" "),s("option",{attrs:{value:"0"}},[t._v("Không đạt")])])]),t._v(" "),0==e.confirm?s("td",{staticClass:"py-0"},[s("button",{staticClass:"btn btn-sm btn-success py-0"},[t._v("\n                    Cập nhật\n                  ")])]):t._e(),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"inforModal"+a,tabindex:"-1","aria-labelledby":"inforModalLabel"+a,"aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"inforModalLabel"+a}},[t._v("\n                          Thông tin liên hệ\n                        ")]),t._v(" "),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),t._v(" "),s("div",{staticClass:"modal-body overflow-auto"},[s("p",{staticClass:"card-text my-1"},[t._v("Email: "+t._s(e.email_cv))]),t._v(" "),s("p",{staticClass:"card-text my-1"},[t._v("Số điện thoại: "+t._s(e.phone_cv))]),t._v(" "),s("p",{staticClass:"car-text my-1 text-break"},[t._v("Địa chỉ: "+t._s(e.address_cv))])]),t._v(" "),t._m(4,!0)])])])])})],2)])])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"ScheduleModal",tabindex:"-1","aria-labelledby":"ScheduleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[t._m(5),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v("Thời gian:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.schedule,expression:"schedule"}],staticClass:"form-control",attrs:{type:"datetime-local",min:(new Date).toISOString().substr(0,16)},domProps:{value:t.schedule},on:{input:function(e){e.target.composing||(t.schedule=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v("Địa điểm:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v("Người liên hệ:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"}],staticClass:"form-control",attrs:{type:"tel"},domProps:{value:t.contact},on:{input:function(e){e.target.composing||(t.contact=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v("Số điện thoại:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"tel"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v("Email:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleFormControlTextarea1"}},[t._v("Yêu cầu:")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note,expression:"note"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"},domProps:{value:t.note},on:{input:function(e){e.target.composing||(t.note=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("\n            Close\n          ")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.setSchedule}},[t._v("\n            Save changes\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"nav nav-pills position-relative start-50 translate-middle d-inline-flex border-bottom mb-2"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"d-flex align-items-center text-start mx-3 ms-0 pb-3 active",attrs:{"data-bs-toggle":"pill",href:"#tab-1"}},[e("h6",{staticClass:"mt-n1 mb-0"},[this._v("CVID đã chọn")])])]),this._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"d-flex align-items-center text-start mx-3 pb-3",attrs:{"data-bs-toggle":"pill",href:"#tab-2"}},[e("h6",{staticClass:"mt-n1 mb-0"},[this._v("Danh sách phỏng vấn")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Họ và tên")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Phòng ban tuyển dụng")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Chức danh ứng viên")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Xếp loại")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Đánh giá")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Trạng thái")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Lịch phỏng vấn")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Thao tác")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Chọn")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row align-content-between my-1"},[e("div",{staticClass:"col-auto"},[e("span",[this._v("Kết quả pv:")])]),this._v(" "),e("div",{staticClass:"col"},[e("select",{staticClass:"form-select form-select-sm",attrs:{"aria-label":"Default select example"}},[e("option",{attrs:{selected:""}},[this._v("Chọn...")]),this._v(" "),e("option",{attrs:{value:"1"}},[this._v("Đạt")]),this._v(" "),e("option",{attrs:{value:"0"}},[this._v("Không đạt")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("#")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Họ và tên")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Phòng ban tuyển dụng")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Chức danh công việc")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Thông tin liên hệ")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Trạng thái")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Lịch phỏng vấn")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Kết quả")]),t._v(" "),s("th",{staticClass:"col-2",attrs:{scope:"col"}},[t._v("Thao tác")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[this._v("\n                          Close\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"ScheduleModalLabel"}},[this._v("Đặt lịch")]),this._v(" "),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}]};var v=s("VU/8")(r,_,!1,function(t){s("azle")},"data-v-dfd4f10c",null);e.default=v.exports},azle:function(t,e){}});
//# sourceMappingURL=6.284bbf46b98ba8c0f73a.js.map