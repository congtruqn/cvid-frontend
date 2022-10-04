<template>
  <div class="container">
    <div class="card mt-4">
      <div
        class="card-header text-center h5 bg-info bg-gradient text-white mb-2"
      >
        Đăng tuyển
      </div>
      <div class="card-body">
        <div
          class="form-check form-switch my-3"
          v-for="(position, index) in position_list"
          :key="index"
        >
          <input
            class="form-check-input"
            type="checkbox"
            v-model="position.status"
            readonly
            true-value="1"
            false-value="0"
          />
          <label class="form-check-label"
            >{{ position.jobtitle
            }}<i data-bs-toggle="modal" :data-bs-target="'#position'+index" class="ms-2 fas fa-circle-exclamation"></i
          ></label>
          <button
            type="button"
            class="btn btn-sm btn-success position-relative float-end"
            @click="getCvApplied(position._id)"
          >
            CV ứng tuyển
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{
                list_cv_applied.filter(
                  (cv) => cv.type == 1 && cv.position_id == position._id
                ).length
              }}
            </span>
          </button>
          <button class="btn btn-sm btn-success float-end me-2" @click="getCvRecommend(position)">Tìm CV</button>
          <div class="modal fade" :id="'position'+index" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Thông tin vị trí tuyển dụng</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label class="form-label">Phòng ban:</label>
        <span>{{position.department_name}}</span><br/>
        <label class="form-label">Chức danh công việc: </label>
        <span>{{position.jobtitle}}</span><br/>
        <label class="form-label">Chức vụ: </label>
        <span>{{position.name}}</span><br/>
        <label class="form-label">Cấp bậc: </label>
        <span>{{position.levels.toString().replaceAll(',', ', ')}}</span><br/>
        <label class="form-label">Chuyên nghành: </label>
        <span>{{position.skills.toString().replaceAll(',', ', ')}}</span><br/>
        <label class="form-label">Lĩnh vực kinh doanh: </label>
        <span>{{position.work_industry}}</span><br/>
        <label class="form-label">Nơi làm việc: </label>
        <span>{{position.work_location}}</span><br/>
        <label class="form-label">Môi trường làm việc: </label>
        <span>{{position.work_environment}}</span><br/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
      <div class="card-footer bg-transparent">
        <h5 class="text-primary fw-bold text-center mb-4">Danh sách CV</h5>
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 g-4">
          <div class="col" v-for="cv in list_cv">
            <div class="card h-100">
              <img
                src="@/assets/images/user.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title"><a href="">{{cv.name}}</a></h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-4" v-if="false">
      <div
        class="card-header text-center h5 bg-info bg-gradient text-white mb-2"
      >
        Tìm ứng viên nhanh
      </div>
      <div class="card-body">
        <form class="row g-3" v-on:submit.prevent>
          <div class="col-12 col-md-6">
            <label class="form-label">Phòng ban</label>
            <select class="form-select" v-model="department_name">
              <option
                v-for="(item, index) in new Set(
                  position_list.map((x) => x.department_name)
                )"
                :value="item"
              >
                {{ item }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Chức danh công việc <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-select dropdown-toggle text-dark"
              id="dropdownMenuJobTitle"
              data-bs-toggle="dropdown"
              data-bs-auto-close="inside"
              aria-expanded="false"
              v-model="searchJobTitle"
              placeholder="Tìm kiếm"
            />
            <ul
              class="dropdown-menu overflow-auto"
              aria-labelledby="dropdownMenuJobTitle"
              :style="{ maxHeight: '400px' }"
            >
              <li
                v-for="item in filteredJobTitle"
                @click="
                  position.jobtitle = item;
                  searchJobTitle = item;
                "
              >
                <a class="dropdown-item">{{ item }}</a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-md-6">
            <label class="form-label"
              >Chức vụ <span class="text-danger">*</span></label
            >
            <select class="form-select" v-model="position.name">
              <option value="" disabled>Chọn ...</option>
              <option v-for="item in positions" :value="item.name">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Cấp bậc ứng viên <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-select dropdown-toggle"
              id="dropdownMenuLevel"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              :value="
                position.levels
                  ? position.levels.toString().replaceAll(',', ', ')
                  : ''
              "
              placeholder="Chọn cấp bậc của ứng viên"
            />
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLevel">
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="position.levels"
                  id="lv00"
                  value="Phổ thông"
                />
                <label class="form-check-label" for="lv00"> Phổ thông </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="position.levels"
                  id="lv01"
                  value="Sơ cấp"
                />
                <label class="form-check-label" for="lv01"> Sơ cấp </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="position.levels"
                  id="lv02"
                  value="Trung cấp"
                />
                <label class="form-check-label" for="lv02"> Trung cấp </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="position.levels"
                  id="lv03"
                  value="Cao đẳng"
                />
                <label class="form-check-label" for="lv03"> Cao đẳng </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="position.levels"
                  id="lv04"
                  value="Đại học"
                />
                <label class="form-check-label" for="lv04"> Đại học </label>
              </div>
              <div class="form-check mx-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="position.levels"
                  id="lv05"
                  value="Chuyên gia"
                />
                <label class="form-check-label" for="lv05"> Chuyên gia </label>
              </div>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Chuyên nghành ứng viên <span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-select dropdown-toggle"
              id="dropdownMenuSkill"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              v-model="searchSkill"
              placeholder="Chọn cấp bậc trước"
            />
            <ul
              class="dropdown-menu col-12 col-md-6 overflow-auto"
              aria-labelledby="dropdownMenuSkill"
              :style="{ maxHeight: '300px' }"
            >
              <div
                class="form-check mx-3"
                v-for="(skill, index) in filteredSkill"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="position.skills"
                  :id="'0skill' + index"
                  :value="skill"
                />
                <label class="form-check-label" :for="'0skill' + index">
                  {{ skill }}
                </label>
              </div>
            </ul>
            <ul class="list-group m-2 px-4">
              <li class="" v-for="skill in position.skills">{{ skill }}</li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Lĩnh vực kinh doanh</label>
            <select class="form-select" v-model="position.work_industry">
              <option value="" disabled>Chọn ...</option>
              <option v-for="item in industries" :value="item.name">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Nơi làm việc <span class="text-danger">*</span></label
            >
            <select class="form-select" v-model="position.work_location">
              <option value="">Chọn địa điểm làm việc</option>
              <option v-for="province in provinces" :value="province">
                {{ province }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Môi trường làm việc</label>
            <select class="form-select" v-model="position.work_environment">
              <option value="" disabled>Chọn ...</option>
              <option v-for="item in environments" :value="item.name">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label">Yêu cầu kinh nghiệm</label>
            <input
              type="number"
              class="form-control"
              v-model="position.experience"
              placeholder="Nhập số năm kinh nghiệm"
            />
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Số lượng <span class="text-danger">*</span></label
            >
            <input
              type="number"
              class="form-control"
              v-model="position.amount"
              placeholder="Nhập số lượng"
            />
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Trường<span class="text-danger">*</span></label
            >
            <input
              type="text"
              class="form-select dropdown-toggle"
              id="dropdownMenuSchool"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              v-model="searchSchool"
              placeholder="Tìm kiếm"
            />
            <ul
              class="dropdown-menu col-12 col-md-6 overflow-auto"
              aria-labelledby="dropdownMenuSchool"
              :style="{ maxHeight: '300px' }"
            >
              <div
                class="form-check mx-3"
                v-for="(item, index) in filteredSchool"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="school"
                  :id="'school' + index"
                  :value="item.name"
                />
                <label class="form-check-label" :for="'school' + index">
                  {{ item.name }}
                </label>
              </div>
            </ul>
            <ul class="list-group m-2 px-4">
              <li class="" v-for="item in school">{{ item }}</li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <label class="form-label"
              >Điểm CV <span class="text-danger"></span
            ></label>
            <input
              type="number"
              class="form-control"
              v-model="position.amount"
              placeholder="Nhập số lượng"
            />
          </div>
          <div class="col-12 text-center">
            <button
              type="button"
              class="btn btn-lg btn-primary"
              @click="getCv(position)"
            >
              Tìm ngay
            </button>
          </div>
        </form>
      </div>
      <!-- <div :id="'collaoseRecommend'+id" class="accordion-collapse collapse show" :aria-labelledby="'headingRecommend'+id">
                        <div class="accordion-body0 col-md-6">
                            <div class="card mb-3" v-for="cv in filteredCV(list_cv_recommend)" v-if="cv.position_id == position._id">
                             -->
      <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="position!=''">
                                <div class="modal-dialog modal-xl modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Đánh giá sơ bộ</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                            <td>{{cv.level}}</td>
                                            <td>{{position.levels?position.levels.toString().replaceAll(',',', '):''}}</td>
                                        
                                            </tr>
                                            <tr>
                                            <th scope="row">Chuyên nghành</th>
                                            <td>{{cv.job.skill}}</td>
                                            <td>{{position.skills?position.skills.toString().replaceAll(',',', '):''}}</td>
                    
                                            </tr>
                                            <tr>
                                            <th scope="row">Chức danh công việc</th>
                                            <td>{{cv.job.jobtitle}}</td>
                                            <td>{{position.jobtitle}}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Chức vụ</th>
                                            <td>{{cv.job.position==''?'Tất cả':cv.job.position}}</td>
                                            <td>{{position.name}}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Lĩnh vực làm việc</th>
                                            <td>{{cv.job.work_industry==''?'Tất cả':cv.job.work_industry}}</td>
                                            <td>{{position.work_industry==''?'Tất cả':position.work_industry}}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Loại hình đơn vị tuyển dụng</th>
                                            <td>{{cv.job.type_business==''?'Tất cả':cv.job.type_business}}</td>
                                            <td></td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Môi trường làm việc</th>
                                            <td>{{cv.job.work_environment==''?'Tất cả':cv.job.work_environment}}</td>
                                            <td>{{position.work_environment==''?'Tất cả':position.work_environment}}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Nơi làm việc</th>
                                            <td>{{cv.job.address==''?'Tất cả':cv.job.address}}</td>
                                            <td>{{position.work_location==''?'Tất cả':position.work_location}}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Số năm kinh nghiệm</th>
                                            <td>{{getExperience(cv.skillWorking)== 0?'Chưa có kinh nghiệm':getExperience(cv.skillWorking)+' năm'}}</td>
                                            <td>{{position.experience==0?'Không yêu cầu kinh nghiệm':position.experience+' năm'}}</td>
                                            </tr>
                                            <tr>
                                            <th scope="row" colspan="3"><h5>Tiêu chí đánh giá</h5></th>
                                            </tr>
                                            <tr v-for="(item, index) in criteria" v-if="position.criteria[index]" :class="cv.assessment[index]>=position.criteria[index]?'bg-info':'bg-light'">
                                            <th scope="row">{{item.name}}</th>
                                            <td>{{cv.assessment[index]}}</td>
                                            <td>{{position.criteria[index]}}</td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                                        <!-- <button type="button" class="btn btn-primary">Xác nhận</button> -->
      <!-- </div>
                    </div>
                    </div> -->
    </div>
  </div>
</template>
<script>
const { BASE_URL } = require("../../utils/config");
export default {
  data() {
    return {
      business_id: null,
      key: null,
      position_list: [],
      department_name: "",
      position_id: "",
      position: {
        name: "",
        jobtitle: "",
        levels: [],
        skills: [],
        amount: 1,
        description: "",
        work_location: "",
        work_industry: "",
        work_environment: "",
        min_salary: 0,
        max_salary: 0,
        requirements: "",
        experience: 0,
        questions: [],
        criteria: new Array(),
        status: 0,
      },
      selected: [],
      school: [],
      schools: [],
      searchSchool: "",
      searchSkill: "",
      searchJobTitle: "",
      point: 0,
      criteria: [],
      list_cv_recommend: [],
      list_cv_applied: [],
      list_cv: [],
      positions: [],
      jobtitles: [],
      environments: [],
      provinces: [],
      industries: [],
      majors: [],
    };
  },
  computed: {
    filteredSchool() {
      return this.schools.filter((school) => {
        return (
          school.name.toLowerCase().indexOf(this.searchSchool.toLowerCase()) !=
            -1 && this.searchSchool != ""
        );
      });
    },
    filteredSkill() {
      this.searchSkill = this.searchSkill.trim();
      this.skills = new Set([]);
      this.majors.forEach((element) => {
        if (
          this.position.levels.includes(element.level) &&
          this.searchSkill != ""
        ) {
          element.skills.forEach((skill) => {
            if (
              skill.toLowerCase().indexOf(this.searchSkill.toLowerCase()) != -1
            ) {
              this.skills.add(skill);
            }
          });
        }
      });
      return this.skills;
    },
    filteredJobTitle() {
      let jobtitles = new Set();
      this.position_list.forEach((pos) => {
        if (pos.department_name == this.department_name) {
          jobtitles.add(pos.jobtitle);
        }
      });
      return this.jobtitles
        .filter((element) => {
          if (
            element.name
              .toLowerCase()
              .indexOf(this.searchJobTitle.toLowerCase()) != -1 &&
            this.searchJobTitle != "" &&
            jobtitles.has(element.name) == false
          ) {
            return true;
          }
        })
        .map((item) => item.name);
    },
  },
  methods: {
    getCvApplied(position_id) {
      this.list_cv = [];
      this.list_cv = this.list_cv_applied.filter(
        (cv) => cv.position_id == position_id
      );
    },
    getCvRecommend(position) {
      this.list_cv = [];
      this.$http
        .post(`${BASE_URL}/department/findcvforposition`, {
          position: position,
        })
        .then((res) => {
          this.list_cv = res.data;
          //let cvid_recommend = res.data.map(t1 => ({...t1, ...job_list.find(t2 => t2.employee_id == t1._id)}))
          // cvid_recommend.forEach(el => {
          //     if (el.type != 1){
          //         el.position_id = id
          //         el._id = el.employee_id?el.employee_id:el._id
          //         this.list_cv_recommend.push(el)
          //     }
          // })
          console.log(this.list_cv)
          if (position.status != 1) {
            Swal.fire({
              title: "Bạn có muốn đăng tuyển?",
              text: "Đăng tuyển giúp cho người tìm việc có thể thấy vị trí tuyển dụng!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Đăng tuyển!",
            }).then((result) => {
              if (result.isConfirmed) {
                this.publishRecruiting(position._id);
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filteredCV(list_cv) {
      if (!list_cv) {
        list_cv = [];
      }
      return list_cv.filter((cv) => {
        if (this.point > cv.point || !cv.point) {
          return false;
        }
        if (this.school.length > 0 && !this.school.includes(cv.school)) {
          return false;
        }
        return true;
      });
    },
    publishRecruiting(id) {
      this.$http
        .post(`${BASE_URL}/department/position/publish`, {
          position_id: id,
        })
        .then((res) => {
          if (res.data) {
            this.position_list.forEach((element, index) => {
              if (element._id == id) {
                this.position_list[index].status = 1;
                this.getCvRecommend(element);
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    stopRecruiting(id) {
      this.$http
        .post(`${BASE_URL}/department/position/stop`, {
          position_id: id,
        })
        .then((res) => {
          if (res.data) {
            this.position_list.forEach((element, index) => {
              if (element._id == id) {
                this.position_list[index].status = 0;
              }
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onChange(e, cv) {
      if (e.target.checked == true) {
        var job = {
          employee_id: cv._id,
          position_id: cv.position_id,
          type: !cv.type || cv.type == 0 ? 2 : cv.type,
          confirm: cv.type == 1 ? 1 : cv.confirm,
        };
        this.$http
          .post(`${BASE_URL}/job/create`, {
            job: job,
          })
          .then((res) => {
            console.log(res.data);
            alert("CV đã được chuyển sang phòng nhân sự");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (e.target.checked == false) {
        var job = {
          employee_id: cv._id,
          position_id: cv.position_id,
          type: cv.type == 2 ? 0 : cv.type,
          confirm: cv.type == 1 ? 0 : cv.confirm,
        };
        this.$http
          .post(`${BASE_URL}/job/create`, {
            job: job,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getExperience(skillWorking) {
      var sum = 0;
      if (skillWorking && skillWorking.length > 0) {
        skillWorking.filter(function (company) {
          sum +=
            new Date(company.to).getTime() - new Date(company.from).getTime();
        });
      }
      return Math.round(sum / 15768000000) / 2;
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
          this.position_list = [];
          res.data.forEach((department) => {
            this.department_name = department.name;
            department.position.forEach((position) => {
              position.department_name = department.name;
              this.position_list.push(position);
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (this.key) {
      await this.$http
        .post(`${BASE_URL}/department/list/get-by-key`, {
          key: this.key,
        })
        .then((res) => {
          if (res.data) {
            this.business_id = res.data[0].id;
            this.position_list = [];
            res.data.forEach((department) => {
              this.department_name = department.name;
              department.position.forEach((position) => {
                position.department_name = department.name;
                this.position_list.push(position);
              });
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    this.position_list.forEach((position) => {
      this.$http
        .post(`${BASE_URL}/job/getcvidforposition`, {
          id: position._id,
        })
        .then((res) => {
          const job_list = res.data.job_list;
          let cvid = job_list.map((t1) => ({
            ...t1,
            ...res.data.cv_list.find((t2) => t2._id == t1.employee_id),
          }));
          cvid.forEach((el) => {
            if (el.type == 1) {
              this.list_cv_applied.push(el);
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
    this.$http
      .get(`${BASE_URL}/position/getall`)
      .then((response) => {
        this.positions = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.$http
      .get(`${BASE_URL}/province/list`)
      .then((response) => {
        this.provinces = new Set(response.data.map((item) => item.province));
      })
      .catch(function (error) {
        console.error(error);
      });
    this.$http
      .get(`${BASE_URL}/major/list`)
      .then((response) => {
        this.majors = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.$http
      .get(`${BASE_URL}/industry/getall`)
      .then((response) => {
        this.industries = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.$http
      .get(`${BASE_URL}/environment/getall`)
      .then((response) => {
        this.environments = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.$http
      .get(`${BASE_URL}/jobtitle/getall`)
      .then((response) => {
        this.jobtitles = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.$http
      .get(`${BASE_URL}/school/getall`)
      .then((response) => {
        this.schools = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    this.$http
      .get(`${BASE_URL}/criteria/getall`)
      .then((res) => {
        this.criteria = res.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  watch: {},
};
</script>
