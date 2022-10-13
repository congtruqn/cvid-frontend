<template>
  <div class="container-xxl py-5">
    <div class="container">
      <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
      <div class="tab-class wow fadeInUp" data-wow-delay="0.3s">
        <ul
          class="
            nav nav-pills
            position-relative
            start-50
            translate-middle
            d-inline-flex
            border-bottom
            mb-2
          "
        >
          <li class="nav-item">
            <a
              class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
              data-bs-toggle="pill"
              href="#tab-1"
            >
              <h6 class="mt-n1 mb-0">CVID đã chọn</h6>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="d-flex align-items-center text-start mx-3 pb-3"
              data-bs-toggle="pill"
              href="#tab-2"
            >
              <h6 class="mt-n1 mb-0">Danh sách phỏng vấn</h6>
            </a>
          </li>
          <!-- <li class="nav-item">
                    <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                        <h6 class="mt-n1 mb-0">Part Time</h6>
                    </a>
                </li> -->
        </ul>
        <div class="tab-content">
          <div id="tab-1" class="tab-pane fade show p-0 active">
            <div class="d-block d-md-none">
              <div class="card" v-for="(cv, index) in list_selected_cv">
                <div class="card-body">
                  <h5 class="card-title">
                    {{ cv.name
                    }}<input
                      class="float-end form-check-input"
                      v-model="selected"
                      :value="cv._id"
                      v-if="cv.schedule"
                      @change="onChange($event, cv)"
                      type="checkbox"
                    />
                  </h5>
                  <p class="card-text my-1">
                    Phòng ban: {{ cv.department_name }}
                  </p>
                  <p class="card-text my-1">Chức danh: {{ cv.jobtitle }}</p>
                  <p class="card-text my-1">Xếp loại: {{ cv.rating }}</p>
                  <p class="card-text my-1">Đánh giá: {{ cv.review }}</p>
                  <p class="card-text my-1">
                    Trạng thái:
                    {{ cv.confirm == 0 ? "Đã gửi lời mời" : "NLD đã xác nhận" }}
                  </p>
                  <p class="card-text">
                    Lịch phỏng vấn:
                    {{
                      cv.schedule
                        ? cv.schedule.split("T")[1] +
                          " " +
                          cv.schedule.split("T")[0]
                        : ""
                    }}
                  </p>
                  <button
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ScheduleModal"
                    @click.prevent="employee_id = cv.employee_id"
                    v-if="!cv.schedule"
                  >
                    Đặt lịch pv
                  </button>
                  <button
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ScheduleModal"
                    @click.prevent="employee_id = cv.employee_id"
                    v-if="cv.schedule"
                  >
                    Thay đổi lịch pv</button
                  ><button
                    class="btn btn-danger ms-1"
                    @click="cancelCVID(index)"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
            <div class="table-fixed-right d-none d-md-block">
              <table>
                <tr>
                  <th>#</th>
                  <th scope="col" class="col-2">Họ và tên</th>
                  <th scope="col" class="col-2">Phòng ban tuyển dụng</th>
                  <th scope="col" class="col-2">Chức danh ứng viên</th>
                  <th scope="col" class="col-2">Xếp loại</th>
                  <th scope="col" class="col-2">Đánh giá</th>
                  <th scope="col" class="col-2">Trạng thái</th>
                  <th scope="col" class="col-2">Lịch phỏng vấn</th>
                  <th scope="col" class="col-2">Thao tác</th>
                  <th scope="col" class="col-2">Chọn</th>
                </tr>
                <tr v-for="(cv, index) in list_selected_cv">
                  <th>
                    {{ index + 1 }}
                  </th>
                  <td>{{ cv.name }}</td>
                  <td class="col-4">{{ cv.department_name }}</td>
                  <td class="cl-2">{{ cv.jobtitle }}</td>
                  <td>{{ cv.rating }}</td>
                  <td class="col-4">{{ cv.review }}</td>
                  <td class="col-4">
                    {{ cv.confirm == 0 ? "Đã gửi lời mời" : "NLD đã xác nhận" }}
                  </td>
                  <td class="">
                    {{
                      cv.schedule
                        ? cv.schedule.split("T")[1] +
                          " " +
                          cv.schedule.split("T")[0]
                        : ""
                    }}
                  </td>
                  <td class="py-0">
                    <button
                      class="btn btn-sm btn-success py-0"
                      data-bs-toggle="modal"
                      data-bs-target="#ScheduleModal"
                      @click.prevent="employee_id = cv.employee_id"
                      v-if="!cv.schedule"
                    >
                      Đặt lịch pv
                    </button>
                    <button
                      class="btn btn-sm btn-success py-0"
                      data-bs-toggle="modal"
                      data-bs-target="#ScheduleModal"
                      @click.prevent="employee_id = cv.employee_id"
                      v-if="cv.schedule"
                    >
                      Thay đổi lịch pv</button
                    ><button
                      class="btn btn-sm btn-danger py-0 ms-1"
                      @click="cancelCVID(index)"
                    >
                      Xóa
                    </button>
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      class="form-check-input mx-2"
                      v-model="selected"
                      :value="cv._id"
                      v-if="cv.schedule"
                      @change="onChange($event, cv)"
                    />
                  </td>
                </tr>
              </table>
            </div>

            <div class="mt-4 d-flex justify-content-end">
              <div class="d-flex mb-3">
                <a class="p-1 fs-4 me-2"
                  ><i class="fw-bold">Tổng:</i>
                  {{
                    calculator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  }}
                  VNĐ</a
                >
                <a class="btn btn-primary" @click="pay">Thanh toán</a>
              </div>
              <!-- <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: Chưa có</small> -->
            </div>
          </div>
          <div id="tab-2" class="tab-pane fade show p-0">
            <div class="d-block d-md-none">
              <div class="card" v-for="(cv, index) in list_paid_cv">
                <div class="card-body">
                  <h5 class="card-title">{{ cv.name }}</h5>
                  <p class="card-text my-1">
                    Phòng ban: {{ cv.department_name }}
                  </p>
                  <p class="card-text my-1">Chức danh: {{ cv.jobtitle }}</p>
                  <p class="card-text my-1">Số điện thoại: {{ cv.phone_cv }}</p>
                  <p class="card-text my-1">Email: {{ cv.email_cv }}</p>
                  <p class="card-text my-1">
                    Trạng thái:
                    {{ cv.confirm == 0 ? "Đã gửi lời mời" : "NLD đã xác nhận" }}
                  </p>
                  <p class="card-text my-1">
                    Lịch phỏng vấn:
                    {{
                      cv.schedule
                        ? cv.schedule.split("T")[1] +
                          " " +
                          cv.schedule.split("T")[0]
                        : ""
                    }}
                  </p>
                  <div class="row align-content-between my-1">
                    <div class="col-auto">
                      <span>Kết quả pv:</span>
                    </div>
                    <div class="col">
                      <select
                        class="form-select form-select-sm"
                        aria-label="Default select example"
                      >
                        <option selected>Chọn...</option>
                        <option value="1">Đạt</option>
                        <option value="0">Không đạt</option>
                      </select>
                    </div>
                  </div>

                  <button
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ScheduleModal"
                    @click.prevent="employee_id = cv.employee_id"
                    v-if="!cv.schedule"
                  >
                    Đặt lịch pv
                  </button>
                  <button
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ScheduleModal"
                    @click.prevent="employee_id = cv.employee_id"
                    v-if="cv.schedule"
                  >
                    Thay đổi lịch pv</button
                  ><button class="btn btn-success ms-1">Cập nhật</button>
                </div>
              </div>
            </div>
            <div class="table-fixed-right d-none d-md-block">
              <table>
                <tr>
                  <th>#</th>
                  <th scope="col" class="col-2">Họ và tên</th>
                  <th scope="col" class="col-2">Phòng ban tuyển dụng</th>
                  <th scope="col" class="col-2">Chức danh công việc</th>
                  <th scope="col" class="col-2">Thông tin liên hệ</th>
                  <th scope="col" class="col-2">Trạng thái</th>
                  <th scope="col" class="col-2">Lịch phỏng vấn</th>
                  <th scope="col" class="col-2">Kết quả</th>
                  <th scope="col" class="col-2">Thao tác</th>
                </tr>
                <tr v-for="(cv, index) in list_paid_cv">
                  <th>
                    {{ index + 1 }}
                  </th>
                  <td>{{ cv.name }}</td>
                  <td class="col-4">{{ cv.department_name }}</td>
                  <td class="col-4">{{ cv.jobtitle }}</td>
                  <td>
                    <button
                      class="btn btn-sm btn-success py-0"
                      data-bs-toggle="modal"
                      :data-bs-target="'#inforModal'+index"
                    >
                      Xem thông tin
                    </button>
                  </td>

                  
                  <td class="col-4">
                    {{ cv.confirm == 0 ? "Đã gửi lịch pv" : "NLD đã xác nhận" }}
                  </td>
                  <td class="" v-if="cv.confirm == 0">
                    <button
                      class="btn btn-sm py-0"
                      data-bs-toggle="modal"
                      data-bs-target="#ScheduleModal"
                      @click.prevent="employee_id = cv.employee_id"
                      v-if="cv.schedule"
                    >
                      {{
                        cv.schedule
                          ? cv.schedule.split("T")[1] +
                            " " +
                            cv.schedule.split("T")[0]
                          : ""
                      }}
                    </button>
                  </td>
                  <td class="">
                    <select
                      class="form-select form-select-sm"
                      aria-label="Default select example"
                      style="width: 150px"
                      :disabled="cv.confirm == 0"
                    >
                      <option selected>Chọn...</option>
                      <option value="1">Đạt</option>
                      <option value="0">Không đạt</option>
                    </select>
                  </td>
                  <td class="py-0" v-if="cv.confirm == 0">
                    <button class="btn btn-sm btn-success py-0">
                      Cập nhật
                    </button>
                  </td>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'inforModal'+index"
                    tabindex="-1"
                    :aria-labelledby="'inforModalLabel'+index"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" :id="'inforModalLabel'+index">
                            Thông tin liên hệ
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body overflow-auto">
                          <p class="card-text my-1">Email: {{ cv.email_cv }}</p>
                          <p class="card-text my-1">Số điện thoại: {{ cv.phone_cv }}</p>
                          <p class="car-text my-1 text-break">Địa chỉ: {{ cv.address_cv }}</p>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="ScheduleModal"
      tabindex="-1"
      aria-labelledby="ScheduleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ScheduleModalLabel">Đặt lịch</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Thời gian:</label>
              <input
                type="datetime-local"
                class="form-control"
                v-model="schedule"
                :min="new Date().toISOString().substr(0, 16)"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Địa điểm:</label>
              <input type="text" class="form-control" v-model="address" />
            </div>
            <div class="mb-3">
              <label class="form-label">Người liên hệ:</label>
              <input type="tel" class="form-control" v-model="contact" />
            </div>
            <div class="mb-3">
              <label class="form-label">Số điện thoại:</label>
              <input type="tel" class="form-control" v-model="phone" />
            </div>
            <div class="mb-3">
              <label class="form-label">Email:</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Yêu cầu:</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                v-model="note"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="setSchedule"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { BASE_URL } = require("../../utils/config");

export default {
  data() {
    return {
      business: JSON.parse(localStorage.getItem("business")),
      positions: [],
      employee_id: "",
      cvid_list: [],
      list_selected_cv: [],
      job_list: [],
      list_paid_cv: [],
      selected: [],
      schedule: "",
      phone: "",
      email: "",
      address: "",
      contact: "",
      note: "",
      bill: [],
    };
  },
  computed: {
    calculator() {
      let price = 0;
      this.bill.forEach((item) => {
        item.price_list.forEach((item2, index2) => {
          if (index2 < item.quantity_needed) {
            price += item2;
          } else {
            price += item2 / item.quantity_needed;
          }
        });
      });
      return price;
    },
  },
  methods: {
    onChange(e, cv) {
      if (e.target.checked == true) {
        let index = this.bill.findIndex(
          (item) => item.position_id == cv.position_id
        );
        if (index == -1) {
          this.bill.push({
            position_id: cv.position_id,
            quantity_needed: cv.amount,
            price_list: [cv.price],
          });
        } else {
          this.bill[index].price_list.push(cv.price);
        }
      }
      if (e.target.checked == false) {
        let index1 = this.bill.findIndex(
          (item) => item.position_id == cv.position_id
        );
        let index2 = this.bill[index1].price_list.findIndex(
          (item) => item == cv.price
        );
        this.bill[index1].price_list.splice(index2, 1);
      }
    },
    cancelCVID(index) {
      const cv = this.list_selected_cv[index];
      var job = {
        employee_id: cv.employee_id,
        position_id: cv.position_id,
        type: cv.type == 2 ? 0 : cv.type,
        confirm: cv.type == 1 ? 0 : cv.confirm,
      };
      this.$http
        .post(`${BASE_URL}/job/create`, {
          job: job,
        })
        .then((res) => {
          if (res.data) {
            this.list_selected_cv.splice(index, 1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setSchedule() {
      if (
        this.schedule == "" ||
        this.phone == "" ||
        this.email == "" ||
        this.address == "" ||
        this.contact == ""
      ) {
        Swal.fire({
          icon: "info",
          title: "Thất bại",
          text: "Vui lòng nhập các trường bắt buộc",
          // confirmButtonColor: 'var(--light)',
          confirmButtonText: "Quay lại",
        });
        return;
      }
      this.list_selected_cv.forEach((item, index) => {
        if (item.employee_id == this.employee_id) {
          this.list_selected_cv[index].schedule = this.schedule;
          this.list_selected_cv[index].address = this.address;
          this.list_selected_cv[index].phone = this.phone;
          this.list_selected_cv[index].email = this.email;
          this.list_selected_cv[index].contact = this.contact;
          this.list_selected_cv[index].note = this.note;
          this.schedule = "";
        }
      });
    },
    pay() {
      if (this.selected.length == 0) {
        Swal.fire({
          icon: "info",
          title: "Thất bại",
          text: "Vui lòng chọn ứng viên",
          // confirmButtonColor: 'var(--light)',
          confirmButtonText: "Quay lại",
        });
        return;
      }
      var item = [];
      this.list_selected_cv.forEach((el) => {
        if (this.selected.includes(el._id)) {
          item.push(el);
        }
      });

      Swal.fire({
        icon: "warning",
        title: "Xác nhận thanh toán",
        // text: 'Vui lòng chọn ứng viên',
        confirmButtonColor: "var(--primary)",
        showCancelButton: true,
        confirmButtonText: "Xác nhận",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http
            .post(`${BASE_URL}/job/pay`, {
              job_list: item,
            })
            .then((res) => {
              Swal.fire({
                icon: "success",
                title: "Thanh toán thành công",
                showConfirmButton: false,
                timer: 1500,
              });
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
  async created() {
    try {
      this.business_id = JSON.parse(localStorage.getItem("business")).username;
    } catch (err) {
      this.key = localStorage.getItem("key");
    }
    if (this.business_id) {
      await this.$http
        .post(`${BASE_URL}/department/list/get-by-id`, {
          id: this.business_id,
        })
        .then((res) => {
          res.data.forEach((department) => {
            department.position.forEach((position) => {
              this.$http
                .post(`${BASE_URL}/job/getcvidforposition`, {
                  id: position._id,
                })
                .then((res) => {
                  const job_list = res.data.job_list;
                  job_list.forEach((job) => {
                    if (job.position_id == position._id) {
                      const cv = res.data.cv_list.find(
                        (item) => item._id == job.employee_id
                      );
                      if (job.status == 1) {
                        this.list_paid_cv.push({
                          ...job,
                          name: cv.name,
                          department_name: department.name,
                          jobtitle: position.jobtitle,
                          phone_cv: cv.username,
                          email_cv: cv.email,
                          address_cv: cv.address + ', ' + cv.ward + ', ' + cv.district + ', ' + cv.province
                        });
                      }
                      if (job.type == 2 && job.status == 0) {
                        this.list_selected_cv.push({
                          ...job,
                          name: cv.name,
                          jobtitle: position.jobtitle,
                          department_name: department.name,
                          amount: position.amount,
                          price: 500000,
                        });
                      }
                    }
                  });
                });
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
<style scoped>
.table-fixed-left table,
.table-fixed-right table {
  border-collapse: collapse;
}
.table-fixed-right td,
.table-fixed-right th,
.table-fixed-left td,
.table-fixed-left th {
  border: 1px solid #ddd;
  padding: 5px 5px;
}
.table-fixed-left {
  width: 200px;
  float: left;
  position: static;
  overflow-x: scroll;
  white-space: nowrap;
  text-align: left;
  border: 1px solid #ddd;
  z-index: 2;
}
.table-fixed-right {
  margin-right: 0rem;
  margin-left: 0px;
  width: auto;
  position: static;
  overflow-x: scroll;
  border: 1px solid #ddd;
  white-space: nowrap;
}
.table-fixed-right td,
.table-fixed-right th {
  padding: 5px 10px;
}

.table-fixed-right::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
</style>