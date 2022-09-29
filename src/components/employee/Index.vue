<template>
  <div>
    <!-- Search End -->
    <div class="card mt-4">
      <div class="card-header text-center">
        <h1 class="text-primary">Tìm việc</h1>
      </div>
      <div class="card-body">
        <form class="row g-3" v-on:submit.prevent>
          <div class="col-12 col-md-6 position-relative">
            <label class="form-label"
              >Chuyên nghành mong muốn
              <i class="fas fa-question-circle" title="Giải thích"></i
            ></label>
            <select
              class="form-select"
              v-model="job.skill"
              :disabled="job.status == 1"
            >
              <option v-for="item in skills" :value="item">{{ item }}</option>
            </select>
          </div>
          <div class="col-12 col-md-6 position-relative">
            <label for="inputState" class="form-label"
              >Chức danh mong muốn
              <i class="fas fa-question-circle" title="Giải thích"></i
            ></label>
            <input
              type="text"
              class="form-select dropdown-toggle text-dark"
              id="dropdownMenuJobTitle"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
              readonly
              v-model="job.jobtitle"
              :disabled="job.status == 1"
            />
            <ul
              class="dropdown-menu overflow-auto w-100"
              aria-labelledby="dropdownMenuJobTitle"
              :style="{ maxHeight: '400px' }"
            >
              <li class="m-2">
                <input
                  type="text"
                  v-model="searchJobTitle"
                  class="form-control"
                  placeholder="Tìm kiếm"
                />
              </li>
              <li
                v-for="item in filteredJobTitle()"
                @click="job.jobtitle = item"
              >
                <a class="dropdown-item">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Chức vụ <i class="fas fa-question-circle" title="Giải thích"></i
            ></label>
            <input
              type="text"
              class="form-select dropdown-toggle text-dark"
              id="dropdownMenuPosition"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              :value="
                job.position
                  ? job.position.toString().replaceAll(',', ', ')
                  : ''
              "
              readonly
              :disabled="job.status == 1"
              placeholder="Chọn chức vụ"
            />
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuPosition">
              <div class="form-check mx-3" v-for="(item, index) in positions">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="job.position"
                  :id="'position'+index"
                  :value="item.name"
                />
                <label class="form-check-label" :for="'position'+index"> {{item.name}} </label>
              </div>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Môi trường làm việc mong muốn
              <i class="fas fa-question-circle" title="Giải thích"></i
            ></label>
            <input
              type="text"
              class="form-select dropdown-toggle"
              id="dropdownMenuEnvironment"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              :value="
                job.work_environment
                  ? job.work_environment.toString().replaceAll(',', ', ')
                  : ''
              "
              readonly
              :disabled="job.status == 1"
              placeholder="Chọn môi trường làm việc"
            />
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuEnvironment">
              <div class="form-check mx-3" v-for="(item, index) in environments">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="job.work_environment"
                  :id="'environment'+index"
                  :value="item.name"
                />
                <label class="form-check-label" :for="'environment'+index"> {{item.name}} </label>
              </div>
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <label class="form-label"
              >Lĩnh vực mong muốn
              <i class="fas fa-question-circle" title="Giải thích"></i
            ></label>
            <select
              class="form-select"
              v-model="job.work_industry"
              :disabled="job.status == 1"
            >
              <option value="">Tất cả lĩnh vực</option>
              <option v-for="item in industries" :value="item.name">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-4">
            <label class="form-label"
              >Loại hình đơn vị tuyển dụng mong muốn
              <i class="fas fa-question-circle" title="Giải thích"></i
            ></label>
            <select
              class="form-select"
              v-model="job.type_business"
              :disabled="job.status == 1"
            >
              <option value="">Tất cả loại hình</option>
              <option v-for="item in type_businesses" :value="item.name">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-4">
            <label for="inputPoint" class="form-label"
              >Nơi làm việc mong muốn
              <i class="fas fa-question-circle" title="Giải thích"></i
            ></label>
            <select
              class="form-select"
              v-model="job.address"
              :disabled="job.status == 1"
            >
              <option value="">Tất cả tỉnh/thành phố</option>
              <option v-for="province in provinces" :value="province">
                {{ province }}
              </option>
            </select>
          </div>

          <!-- <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div> -->
          <div class="col-12 text-center">
            <button
              type="button"
              class="btn btn-lg btn-primary"
              @click="beforeFindJob()"
              v-if="job.status == 0"
            >
              Tìm việc
            </button>
            <button
              type="button"
              class="btn btn-lg btn-primary"
              @click="endFindJob()"
              v-if="job.status == 1"
            >
              Dừng tìm
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- Category End -->
    <!-- Jobs Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="job-item p-4 mb-4" v-for="position in result">
                <a class="row g-4">
                  <a
                    class="col-sm-12 col-md-7 d-flex align-items-center"
                    :href="'/employee/job-detail/' + position._id"
                  >
                    <img
                      class="flex-shrink-0 img-fluid border rounded"
                      src="@/assets/images/com-logo-1.jpg"
                      alt=""
                      style="width: 80px; height: 80px"
                    />
                    <div class="text-start ps-4">
                      <h5 class="mb-3">{{ position.jobtitle }}</h5>
                      <span class="text-truncate me-3"
                        ><i class="fa fa-map-marker-alt text-primary me-2"></i
                        >{{ position.work_location }}</span
                      >
                      <!-- <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span> -->
                      <span class="text-truncate me-3">
                        <i class="far fa-money-bill-alt text-primary me-2"></i>
                        {{
                          position.min_salary == "" && position.max_salary == ""
                            ? "Lương thỏa thuận"
                            : position.min_salary != "" &&
                              position.max_salary != ""
                            ? "Từ " +
                              position.min_salary +
                              " - " +
                              position.max_salary +
                              " triệu đồng"
                            : position.min_salary == "" &&
                              position.max_salary != ""
                            ? "trên " + position.min_salary + " triệu đồng"
                            : "Dưới " + position.min_salary + " triệu đồng"
                        }}
                      </span>
                    </div>
                  </a>
                  <div
                    class="
                      col-sm-12 col-md-4
                      d-flex
                      flex-column
                      align-items-start align-items-md-end
                      justify-content-center
                    "
                  >
                    <div class="d-flex mb-3">
                      <button
                        class="btn btn-primary"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Đánh giá sơ bộ
                      </button>
                    </div>
                    <small class="text-truncate"
                      ><i class="far fa-calendar-alt text-primary me-2"></i>Ngày
                      đăng tuyển:
                      {{
                        position.startdate
                          ? position.startdate.split("T")[0]
                          : ""
                      }}</small
                    >
                  </div>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    v-if="position != ''"
                  >
                    <div class="modal-dialog modal-xl modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Đánh giá sơ bộ
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <table class="table table-bordered border-primary">
                            <thead>
                              <tr>
                                <th scope="col">Các yêu cầu</th>
                                <th scope="col">CVID</th>
                                <th scope="col">Vị trí tuyển dụng</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">Trình độ</th>
                                <td>{{ employee.level }}</td>
                                <td>
                                  {{
                                    position.levels
                                      ? position.levels
                                          .toString()
                                          .replaceAll(",", ", ")
                                      : ""
                                  }}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Chuyên nghành</th>
                                <td>{{ employee.job.skill }}</td>
                                <td>
                                  {{
                                    position.skills
                                      ? position.skills
                                          .toString()
                                          .replaceAll(",", ", ")
                                      : ""
                                  }}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Chức danh công việc</th>
                                <td>{{ employee.job.jobtitle }}</td>
                                <td>{{ position.jobtitle }}</td>
                              </tr>
                              <tr>
                                <th scope="row">Chức vụ</th>
                                <td>
                                  {{
                                    employee.job.position == ""
                                      ? "Tất cả"
                                      : employee.job.position
                                  }}
                                </td>
                                <td>{{ position.name }}</td>
                              </tr>
                              <tr>
                                <th scope="row">Lĩnh vực làm việc</th>
                                <td>
                                  {{
                                    employee.job.work_industry == ""
                                      ? "Tất cả"
                                      : employee.job.work_industry
                                  }}
                                </td>
                                <td>
                                  {{
                                    position.work_industry == ""
                                      ? "Tất cả"
                                      : position.work_industry
                                  }}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Loại hình đơn vị tuyển dụng</th>
                                <td>
                                  {{
                                    employee.job.type_business == ""
                                      ? "Tất cả"
                                      : employee.job.type_business
                                  }}
                                </td>
                                <td></td>
                              </tr>

                              <tr>
                                <th scope="row">Môi trường làm việc</th>
                                <td>
                                  {{
                                    employee.job.work_environment == ""
                                      ? "Tất cả"
                                      : employee.job.work_environment
                                  }}
                                </td>
                                <td>
                                  {{
                                    position.work_environment == ""
                                      ? "Tất cả"
                                      : position.work_environment
                                  }}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Nơi làm việc</th>
                                <td>
                                  {{
                                    employee.job.address == ""
                                      ? "Tất cả"
                                      : employee.job.address
                                  }}
                                </td>
                                <td>
                                  {{
                                    position.work_location == ""
                                      ? "Tất cả"
                                      : position.work_location
                                  }}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Số năm kinh nghiệm</th>
                                <td>
                                  {{
                                    getExperience() == 0
                                      ? "Chưa có kinh nghiệm"
                                      : getExperience() + " năm"
                                  }}
                                </td>
                                <td>
                                  {{
                                    position.experience == 0
                                      ? "Không yêu cầu kinh nghiệm"
                                      : position.experience + " năm"
                                  }}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row" colspan="3">
                                  <h5>Tiêu chí đánh giá</h5>
                                </th>
                              </tr>
                              <tr
                                v-for="(item, index) in criteria"
                                :key="index"
                                v-if="position.criteria[index]"
                                :class="
                                  employee.assessment[index] >=
                                  position.criteria[index]
                                    ? 'bg-info'
                                    : 'bg-light'
                                "
                              >
                                <th scope="row">{{ item.name }}</th>
                                <td>{{ employee.assessment[index] }}</td>
                                <td>{{ position.criteria[index] }}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Đóng
                          </button>
                          <!-- <button type="button" class="btn btn-primary">Xác nhận</button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="d-none"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      id="mybutton"
    ></button>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Tìm việc ở xa</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Bạn đang tìm việc ở tình thành khác với thông tin đăng kí. Vui lòng
            xác nhận lại một số thông tin sau:
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Chỗ ở nơi làm mới:</label
              >
              <input
                type="email"
                class="form-control"
                placeholder="Nhập chỗ ở mới"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Tình trạng hôn nhân:</label
              >
              <select class="form-select" aria-label="Default select example">
                <option selected>Chọn tình trạng hôn nhân</option>
                <option value="1">Đã kết hôn</option>
                <option value="2">Chưa kết hôn</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Phương tiện đi lại:</label
              >
              <select class="form-select" aria-label="Default select example">
                <option selected>Chọn phương tiện</option>
                <option value="1">Phương tiện công cộng</option>
                <option value="2">Xe máy</option>
                <option value="3">Ô tô</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Huỷ
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="startFindJob()"
            >
              Tìm việc
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Jobs End -->
  </div>
</template>
<script>
const { BASE_URL } = require("../../utils/config");
export default {
  data() {
    return {
      job: "",
      result: [],
      province: "",
      skill: "",
      searchSkill: "",
      searchJobTitle: "",
      jobtitle: "",
      work_environment: "",
      work_industry: "",
      jobtitles: [],
      type_businesses: [],
      majors: [],
      provinces: [],
      environments: [],
      industries: [],
      positions: [],
      criteria: [],
      skills: [],
      employee: JSON.parse(localStorage.getItem("employee")),
    };
  },
  methods: {
    filteredJobTitle() {
      return this.jobtitles
        .filter((element) => {
          if (
            element.name
              .toLowerCase()
              .indexOf(this.searchJobTitle.toLowerCase()) != -1 &&
            this.searchJobTitle != ""
          ) {
            return true;
          }
        })
        .map((item) => item.name);
    },
    beforeFindJob() {
      if (
        this.job.address != "" &&
        this.job.address != this.employee.province
      ) {
        var element = document.getElementById("mybutton");
        element.click();
      } else {
        this.startFindJob();
      }
    },
    startFindJob() {
      this.result = [];
      this.job.status = 1;
      this.$http
        .post(`${BASE_URL}/employee/findJob`, {
          id: this.employee._id,
          job: this.job,
        })
        .then((res) => {
          this.result = res.data;
        });
    },
    endFindJob() {
      this.job.status = 0;
      this.$http
        .post(`${BASE_URL}/employee/findJob`, {
          id: this.employee._id,
          job: this.job,
        })
        .then((res) => {
          this.result = [];
        });
    },
    getExperience() {
      var sum = 0;
      if (this.employee.skillWorking && this.employee.skillWorking.length > 0) {
        this.employee.skillWorking.filter(function (company) {
          sum +=
            new Date(company.to).getTime() - new Date(company.from).getTime();
        });
      }
      return Math.round(sum / 15768000000) / 2;
    },
  },
  created() {
    this.$http
      .post(`${BASE_URL}/employee/me`, {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        this.employee = res.data.user;
        if (this.employee.job) {
          this.job = this.employee.job;
          if (this.job.status == 1) {
            this.startFindJob();
          }
        } else {
          this.job = {
            skill: this.employee.skill,
            address: this.employee.province,
            jobtitle: "",
            work_industry: "",
            work_environment: [],
            type_business: "",
            position: [],
            status: 0,
          };
        }
        this.skills = new Set([]);
        this.skills.add(this.employee.skill);
        this.employee.skillWorking.forEach((company) => {
          company.process.forEach((item) => {
            this.skills.add(item.skill);
          });
        });
        this.employee.skillEducation.forEach((item) => {
          this.skills.add(item.skill);
        });
      })
      .catch(function (error) {
        console.error(error.response);
      });

    this.$http.get(`${BASE_URL}/major/list`).then((response) => {
      this.majors = response.data;
    });

    this.$http.get(`${BASE_URL}/province/list`).then((response) => {
      this.provinces = new Set(response.data.map((item) => item.province));
    });
    this.$http.get(`${BASE_URL}/typebusiness/getall`).then((response) => {
      this.type_businesses = response.data;
    });
    this.$http.get(`${BASE_URL}/industry/getall`).then((response) => {
      this.industries = response.data;
    });
    this.$http.get(`${BASE_URL}/position/getall`).then((response) => {
      this.positions = response.data;
    });
    this.$http.get(`${BASE_URL}/jobtitle/getall`).then((response) => {
      this.jobtitles = response.data;
    });
    this.$http
      .get(`${BASE_URL}/environment/getall`)
      .then((response) => {
        this.environments = response.data;
      })
      .catch(function (error) {
        console.error(error.response);
      });
    this.$http
      .get(`${BASE_URL}/criteria/getall`)
      .then((res) => {
        this.criteria = res.data;
      })
      .catch(function (error) {
        console.error(error.response);
      });
  },
};
</script>
