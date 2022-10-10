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
              <h6 class="mt-n1 mb-0">Đã thanh toán</h6>
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
            <div class="table-fixed-left">
              <table>
                <tr>
                  <th>#</th>
                  <th scope="row" class="col-12">Họ và tên</th>
                </tr>
                <tr v-for="cv in list_selected_cv">
                  <th><input type="checkbox"
                        class="form-check-input"
                        v-model="selected"
                        :value="cv._id"
                        @change="onChange($event, cv)" /></th>
                  <td>{{ cv.name }}</td>
                </tr>
              </table>
            </div>
            <div class="table-fixed-right">
              <table>
                <tr>
                  <th scope="col">Phòng ban</th>
                  <th scope="col">Chức danh</th>
                  <th scope="col">Xếp loại</th>
                  <th scope="col">Đánh giá</th>
                  <th scope="col">Lịch phỏng vấn</th>
                  <th scope="col">Thao tác</th>
                </tr>
                <tr v-for="(cv, index) in list_selected_cv">
                  <td class="col-4">{{ cv.department_name }}</td>
                  <td class="col-4">{{ cv.jobtitle }}</td>
                  <td>{{ cv.rating }}</td>
                  <td class="col-4">{{ cv.review }}</td>
                  <td class="">{{ cv.schedule?cv.schedule.split('T')[1]+' '+cv.schedule.split('T')[0]:'' }}</td>
                  <td class="py-0">
                    <button
                      class="btn btn-sm btn-success py-0"
                      data-bs-toggle="modal"
                      :data-bs-target="'#ScheduleModal'+index"
                      @click.prevent="employee_id = cv.employee_id"
                      v-if="!cv.schedule"
                    >
                      Đặt lịch pv
                    </button>
                    <button
                      class="btn btn-sm btn-success py-0"
                      data-bs-toggle="modal"
                      :data-bs-target="'#ScheduleModal'+index"
                      @click.prevent="employee_id = cv._id"
                      v-if="cv.schedule"
                    >
                      Thay đổi lịch pv</button
                    ><button class="btn btn-sm btn-danger py-0 ms-1" @click="cancelCVID(index)">Xóa</button>
                  </td>
                  <div
                    class="modal fade"
                    :id="'ScheduleModal' + index"
                    tabindex="-1"
                    :aria-labelledby="'ScheduleModalLabel' + index"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title"
                            :id="'ScheduleModalLabel' + index"
                          >
                            Đặt lịch
                          </h5>
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
                              v-model="cv.schedule"
                              :min="new Date().toISOString().substr(0, 16)"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Địa điểm:</label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="cv.address"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Người liên hệ:</label>
                            <input
                              type="tel"
                              class="form-control"
                              v-model="cv.contact"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Số điện thoại:</label>
                            <input
                              type="tel"
                              class="form-control"
                              v-model="cv.phone"
                            />
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Email:</label>
                            <input
                              type="email"
                              class="form-control"
                              v-model="cv.email"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1"
                              >Yêu cầu:</label
                            >
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              v-model="cv.note"
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
                </tr>
              </table>
            </div>

            <div class="table-responsive-sm" v-if="false">
              <table
                id="example"
                class="table table-sm table-bordered caption-top"
                style="min-width: 600px"
              >
                <thead>
                  <tr>
                    <th scope="col" class="">Họ và tên</th>
                    <th scope="col">Phòng ban</th>
                    <th scope="col">Chức danh</th>
                    <th scope="col">Xếp loại</th>
                    <th scope="col">Đánh giá</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cv, index) in job_list" class="align-middle">
                    <td class="">{{ cv.name }}</td>
                    <td class="">{{ cv.department_name }}</td>

                    <td>{{ cv.job.jobtitle }}</td>
                    <td>{{ cv.rating }}</td>
                    <td>{{ cv.review }}</td>
                    <td>
                      <button
                        class="btn btn-sm btn-success"
                        data-bs-toggle="modal"
                        :data-bs-target="'#ScheduleModal' + index"
                        @click.prevent="employee_id = cv._id"
                        v-if="!cv.schedule"
                      >
                        Đặt lịch pv
                      </button>
                      <button
                        class="btn btn-sm btn-success"
                        data-bs-toggle="modal"
                        :data-bs-target="'#ScheduleModal' + index"
                        @click.prevent="employee_id = cv._id"
                        v-if="cv.schedule"
                      >
                        Thay đổi lịch pv
                      </button>
                      <button
                        class="ms-2 btn btn-sm btn-danger"
                        @click="cancelCVID(cv)"
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="card mb-3" v-for="position in positions">
              <h5 class="card-header bg-primary text-white">{{}}</h5>
              <div class="card-body mx-2">
                <div
                  class="card mb-2"
                  v-for="position in position"
                  v-if="
                    job_list.findIndex((x) => x.position_id == position._id) !=
                    -1
                  "
                >
                  <div class="card-header">
                    {{ position.jobtitle }}
                  </div>
                  <div class="card-body row">
                    <a
                      :href="'/business/cvid/' + cv._id"
                      target="_blank"
                      class="card-body border col-md-6 mb-1"
                      v-for="cv in job_list"
                      v-if="cv.position_id == position._id"
                    >
                      <!-- <span class="badge bg-secondary float-end">{{cv.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}} VND</span> -->
                      <h5 class="card-title d-inline">{{ cv.name }}</h5>
                      <p class="card-text text-primary mb-0">
                        {{ cv.position }}
                      </p>
                      <p class="card-text text-primary mb-0">
                        Điểm CV: {{ cv.point }}/10
                      </p>
                      <p class="card-text text-primary mb-0">
                        Trường: {{ cv.school }}
                      </p>
                      <p class="card-text text-primary mb-0">
                        Chuyên nghành: {{ cv.skill }}
                      </p>
                      <p class="card-text text-primary mb-0">
                        Đánh giá: {{ cv.review }}
                      </p>
                      <p class="card-text text-primary" v-if="cv.schedule">
                        <i class="far fa-calendar-alt text-primary my-2"></i>
                        Lịch phỏng vấn:
                        {{
                          cv.schedule
                            ? cv.schedule.replace("T", " ")
                            : "Chưa có"
                        }}
                      </p>
                      <button
                        type="button"
                        class="btn btn-light me-2 text-primary"
                        @click="cancelCVID(cv)"
                      >
                        Hủy
                      </button>
                      <button
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#ScheduleModal"
                        @click.prevent="employee_id = cv._id"
                        v-if="!cv.schedule"
                      >
                        Đặt lịch phỏng vấn
                      </button>
                      <button
                        class="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#ScheduleModal"
                        @click.prevent="employee_id = cv._id"
                        v-if="cv.schedule"
                      >
                        Thay đổi lịch phỏng vấn
                      </button>
                      <input
                        type="checkbox"
                        class="form-check-input float-end me-2 p-3"
                        v-model="selected"
                        :value="cv._id"
                        
                      />
                      <span class="badge bg-secondary float-end me-2 p-3">{{
                        cv.rating
                      }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-2 d-flex justify-content-end">
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
            <div class="table-responsive-sm">
              <table
                class="table table-sm table-bordered caption-top"
                style="min-width: 600px"
              >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Họ và tên</th>
                    <th scope="col">Phòng ban</th>
                    <th scope="col">Chức danh</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cv in job_list" class="align-middle">
                    <th scope="col" class="text-center">
                      <input type="checkbox" />
                    </th>
                    <td>{{ cv.name }}</td>
                    <td>{{ cv.department_name }}</td>

                    <td>{{ cv.job.jobtitle }}</td>
                    <td>{{ cv.username }}</td>
                    <td>{{ cv.email }}</td>
                    <td>
                      <button
                        class="btn btn-sm btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#ScheduleModal"
                        @click.prevent="employee_id = cv._id"
                        v-if="!cv.schedule"
                      >
                        Đặt lịch pv
                      </button>
                      <button
                        class="btn btn-sm btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#ScheduleModal"
                        @click.prevent="employee_id = cv._id"
                        v-if="cv.schedule"
                      >
                        Thay đổi lịch pv
                      </button>
                      <button
                        class="ms-2 btn btn-sm btn-danger"
                        :disabled="!cv.schedule"
                        @click="cancelCVID(cv)"
                      >
                        Xác nhận
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
      const cv = this.list_selected_cv[index]
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
          list_selected_cv[index].schedule = this.schedule;
          list_selected_cv[index].address = this.address;
          list_selected_cv[index].phone = this.phone;
          list_selected_cv[index].email = this.email;
          list_selected_cv[index].contact = this.contact;
          list_selected_cv[index].note = this.note;
        }
      });
      this.schedule = "";
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
      this.job_list.forEach((el) => {
        if (this.selected.includes(el._id) && el.schedule) {
          item.push(el);
        }
      });

      if (item.length < this.selected.length) {
        Swal.fire({
          icon: "info",
          title: "Thất bại",
          text: "Vui lòng đặt lịch phỏng vấn cho ứng viên",
          // confirmButtonColor: 'var(--light)',
          confirmButtonText: "Quay lại",
        });
      } else {
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
      }
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
                        });
                      }
                      if (job.type == 2 && job.status == 0) {
                        this.list_selected_cv.push({
                          ...job,
                          name: cv.name,
                          jobtitle: position.jobtitle,
                          department_name: department.name,
                          amount: position.amount,
                          price: 500000
                        });
                      }
                    }
                  });
                  console.log(this.list_selected_cv);
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
  margin-left: 200px;
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
</style>