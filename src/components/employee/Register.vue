<template>
  <section class="h-100 bg-dark">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample photo"
                  class="img-fluid"
                  style="
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                  "
                />
              </div>
              <div class="col-xl-6 needs-validation">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Đăng ký tài khoản CVID</h3>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div id="formName" class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          v-model="name"
                          required
                          placeholder="Họ và tên"
                        />
                        <label class="form-label">Họ và tên</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formPhone" class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          min="99999999"
                          v-model="username"
                          required
                          placeholder="Số điện thoại"
                        />
                        <label class="form-label">Số điện thoại</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div id="formBirthdate" class="form-floating">
                        <input
                          type="date"
                          class="form-control"
                          v-model="birthdate"
                          required
                          :max="new Date().toISOString().substr(0, 10)"
                        />
                        <label class="form-label">Ngày, tháng, năm sinh</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formGender" class="form-floating">
                        <select class="form-select" v-model="gender" required>
                          <option value="" disabled>Chọn giới tính</option>
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                          <option value="Khác">Khác</option>
                        </select>
                        <label class="form-label">Giới tính</label>
                      </div>
                    </div>
                    <div
                      id="formCountry"
                      class="mb-3 form-floating"
                      v-if="false"
                    >
                      <select class="form-select" v-model="country" required>
                        <option value="" disabled>Chọn quốc gia</option>
                        <option value="Việt Nam">Việt Nam</option>
                      </select>
                      <label class="form-label">Quốc gia</label>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formProvince" class="form-floating">
                        <select class="form-select" v-model="province" required>
                          <option value="" disabled>Chọn tỉnh/thành phố</option>
                          <option
                            v-for="province in provinces"
                            :value="province"
                          >
                            {{ province }}
                          </option>
                        </select>
                        <label class="form-label">Tỉnh/Thành phố</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formDistrict" class="form-floating">
                        <select class="form-select" v-model="district" required>
                          <option value="" disabled>Chọn quận/huyện</option>
                          <option
                            v-for="district in districts"
                            :value="district"
                          >
                            {{ district }}
                          </option>
                        </select>
                        <label class="form-label">Quận/Huyện</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formWard" class="form-floating">
                        <select class="form-select" v-model="ward" required>
                          <option value="" disabled>Chọn phường/xã</option>
                          <option v-for="ward in wards" :value="ward">
                            {{ ward }}
                          </option>
                        </select>
                        <label class="form-label">Phường/Xã</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formAddress" class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          v-model="address"
                          required
                          placeholder="Số điện thoại"
                        />
                        <label class="form-label">Địa chỉ</label>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div id="formLevel" class="form-floating">
                      <select class="form-select" v-model="level" required>
                        <option value="" disabled>Chọn cấp bậc</option>
                        <option value="Phổ thông">Phổ thông</option>
                        <option value="Sơ cấp">Sơ cấp</option>
                        <option value="Trung cấp">Trung cấp</option>
                        <option value="Cao đẳng">Cao đẳng</option>
                        <option value="Đại học">Đại học</option>
                        <option value="Chuyên gia">Chuyên gia</option>
                      </select>
                      <label class="form-label">Cấp bậc</label>
                    </div>
                  </div>
                  <div
                    class="mb-3"
                    v-if="level != 'Phổ thông' && level != 'Sơ cấp'"
                  >
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-select dropdown-toggle text-dark w-100"
                        id="dropdownMenuSchool"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        aria-expanded="false"
                        v-model="searchSchool"
                        placeholder="Tìm kiếm"
                      />
                      <ul
                        class="dropdown-menu overflow-auto w-100"
                        aria-labelledby="dropdownMenuSchool"
                        :style="{ maxHeight: '300px' }"
                      >
                        <li
                          v-for="item in filteredSchool"
                          @click="
                            school = item.name;
                            searchSchool = item.name;
                          "
                        >
                          <a class="dropdown-item">{{ item.name }}</a>
                        </li>
                      </ul>
                      <label for="searchSchool" class="form-label"
                        >Trường</label
                      >
                    </div>
                  </div>
                  <div class="mb-3">
                    <div id="formSkill" class="form-floating">
                      <input
                        type="text"
                        class="form-select dropdown-toggle text-dark w-100"
                        id="dropdownMenuSkill"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="true"
                        aria-expanded="false"
                        v-model="searchSkill"
                        placeholder="Tìm kiếm"
                      />
                      <ul
                        class="dropdown-menu overflow-auto w-100"
                        aria-labelledby="dropdownMenuSkill"
                        :style="{ maxHeight: '300px' }"
                      >
                        <li
                          v-for="item in filteredSkill"
                          @click="
                            skill = item;
                            searchSkill = item;
                          "
                        >
                          <a class="dropdown-item">{{ item }}</a>
                        </li>
                      </ul>
                      <label class="form-label">Chuyên nghành</label>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div id="formProfessionaltitle" class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        v-model="professionaltitle"
                        required
                        placeholder="Chức danh chuyên môn"
                      />
                      <label class="form-label">Chức danh chuyên môn</label>
                    </div>
                  </div>
                  <div
                    class="row"
                    v-if="level != 'Phổ thông' && level != 'Sơ cấp'"
                  >
                    <div class="col-md-6 mb-3">
                      <div id="formStartyear" class="form-floating">
                        <input
                          type="month"
                          class="form-control"
                          v-model="startyear"
                          placeholder="yyyy-mm"
                          required
                        />
                        <label class="form-label">Năm bắt đầu</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formEndyear" class="form-floating">
                        <input
                          type="month"
                          class="form-control"
                          v-model="endyear"
                          required
                          placeholder="yyyy-mm"
                        />
                        <label class="form-label">Năm tốt nghiệp</label>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div id="formEmail" class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        required
                        placeholder="Email"
                      />
                      <label class="form-label">Email</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div id="formPassword" class="form-floating">
                        <input
                          type="password"
                          class="form-control"
                          v-model="password"
                          minlength="6"
                          required
                          placeholder="Mật khẩu"
                        />
                        <label class="form-label">Mật khẩu</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div id="formPassword2" class="form-floating">
                        <input
                          id="password2"
                          type="password"
                          class="form-control"
                          v-model="password2"
                          minlength="6"
                          required
                          placeholder="Mật khẩu"
                        />
                        <label class="form-label">Nhập lại mật khẩu</label>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end pt-3">
                    <!-- <button type="button" class="btn btn-light btn-lg">Reset all</button> -->
                    <button
                      type="button"
                      class="btn btn-primary btn-lg ms-2"
                      @click="handleSubmit"
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
const { BASE_URL } = require("../../utils/config");
export default {
  data() {
    return {
      searchSkill: "",
      searchSchool: "",
      name: "",
      username: "",
      birthdate: "",
      gender: "",
      level: "",
      email: "",
      country: "",
      province: "",
      district: "",
      ward: "",
      address: "",
      school: "",
      startyear: "",
      endyear: "",
      skill: "",
      professionaltitle: "",
      password: "",
      password2: "",
      provinces: [],
      districts: [],
      wards: [],
      schools: [],
      majors: [],
      error: []
    };
  },
  computed: {
    filteredSchool() {
      return this.schools.filter(school => {
        if (
          school.name
            .toLowerCase()
            .indexOf(this.searchSchool.trim().toLowerCase()) != -1 &&
          this.searchSchool != ""
        ) {
          return true;
        }
      });
    },
    filteredSkill() {
      let result = [];
      this.majors.forEach(major => {
        if (major.level == this.level) {
          result = major.skills.filter(skill => {
            if (
              skill
                .toLowerCase()
                .indexOf(this.searchSkill.trim().toLowerCase()) != -1 &&
              (this.searchSkill != "" || this.level == "Phổ thông")
            ) {
              return true;
            }
            return false;
          });
        }
      });
      return result;
    }
  },
  methods: {
    isValid() {
      this.error = [];
      this.name == "" ? this.error.push("Chưa nhập họ và tên!") : null;
      this.name.indexOf(' ') <= 0 ? this.error.push("Nhập đủ họ và tên!") : null;
      this.username == "" ? this.error.push("Chưa nhập số điện thoại!") : null;
      this.username.length < 9
        ? this.error.push("Số điện thoại không hợp lệ!")
        : null;
      this.email == "" ? this.error.push("Chưa nhập email!") : null;
      this.birthdate == ""
        ? this.error.push("Chưa nhập ngày, tháng, năm sinh!")
        : null;
      this.gender == "" ? this.error.push("Chưa nhập giới tính!") : null;
      this.province == "" ? this.error.push("Chưa nhập Tỉnh/Thành phố!") : null;
      this.district == "" ? this.error.push("Chưa nhập Quận/Huyện!") : null;
      this.ward == "" ? this.error.push("Chưa nhập Phường/Xã!") : null;
      this.address == "" ? this.error.push("Chưa nhập địa chỉ!") : null;
      this.level == "" ? this.error.push("Chưa nhập cấp bậc!") : null;
      // this.school==''?this.error.push('Chưa nhập trường!'):null
      this.skill == "" ? this.error.push("Chưa nhập chuyên nghành!") : null;
      this.professionaltitle == ""
        ? this.error.push("Chưa nhập chức danh chuyên môn!")
        : null;
      // this.startyear==''?this.error.push('Chưa nhập thời gian bắt đầu!'):null
      // this.endyear==''?this.error.push('Chưa nhập thời gian kết thúc!'):null
      this.password == "" ? this.error.push("Chưa nhập mật khẩu!") : null;
      this.password.length < 6
        ? this.error.push("Mật khẩu tối thiểu 6 kí tự!")
        : null;
      this.password2 != this.password
        ? this.error.push("Mật khẩu nhập lại không khớp!")
        : null;
      return !(this.error.length > 0);
    },
    handleSubmit(e) {
      e.preventDefault();
      if (!this.isValid()) {
        Swal.fire({
          icon: "info",
          title: "Đăng ký thất bại",
          text: this.error[0],
          confirmButtonColor: "var(--primary)",
          confirmButtonText: "Nhập lại"
        });
        return;
      }
      this.$http
        .post(`${BASE_URL}/employee/register`, {
          name: this.name,
          username: this.username,
          birthdate: this.birthdate,
          gender: this.gender,
          level: this.level,
          school: this.school,
          startyear: this.startyear,
          endyear: this.endyear,
          skill: this.skill,
          professionaltitle: this.professionaltitle,
          email: this.email,
          country: this.country,
          province: this.province,
          district: this.district,
          ward: this.ward,
          address: this.address,
          password: this.password,
          password2: this.password2
        })
        .then(response => {
          if (response.data == "ok") {
            Swal.fire({
              icon: "success",
              title: "Đăng ký thành công",
              text: "Xác minh email để kích hoạt tài khoản",
              confirmButtonColor: "var(--primary)",
              confirmButtonText: "Đăng nhập"
            }).then(result => {
              if (result.value) {
                this.$router.push("login");
              }
            });
          } else {
            Swal.fire({
              icon: "info",
              title: "Đăng ký thất bại",
              text: `${response.data[0].msg}`,
              confirmButtonColor: "var(--primary)",
              confirmButtonText: "Nhập lại"
            });
          }
        })
        .catch(function(error) {
          console.error(error.response);
        });
    }
  },
  async created() {
    await this.$http
      .get(`${BASE_URL}/school/getall`)
      .then(response => {
        this.schools = response.data;
      })
      .catch(function(error) {
        console.error(error.response);
      });
    this.$http
      .get(`${BASE_URL}/province/list`)
      .then(response => {
        this.province_list = response.data;
        this.provinces = new Set(this.province_list.map(item => item.province));
      })
      .catch(function(error) {
        console.error(error.response);
      });
    this.$http
      .get(`${BASE_URL}/major/list`)
      .then(response => {
        this.majors = response.data;
      })
      .catch(function(error) {
        console.error(error.response);
      });
  },
  watch: {
    name(newValue) {
      $("#formName").addClass("was-validated");
    },
    username() {
      $("#formPhone").addClass("was-validated");
    },
    birthdate() {
      $("#formBirthdate").addClass("was-validated");
    },
    gender() {
      $("#formGender").addClass("was-validated");
    },
    level() {
      $("#formLevel").addClass("was-validated");
      this.skill = "";
    },
    startyear() {
      $("#formStartyear").addClass("was-validated");
    },
    endyear() {
      $("#formEndyear").addClass("was-validated");
    },
    professionaltitle() {
      $("#formProfessionaltitle").addClass("was-validated");
    },
    email() {
      $("#formEmail").addClass("was-validated");
    },
    searchSkill(newValue) {
      if (newValue != this.skill || this.skill == "") {
        $("#dropdownMenuSkill").addClass("is-invalid");
      } else {
        $("#dropdownMenuSkill").addClass("is-valid");
        $("#dropdownMenuSkill").removeClass("is-invalid");
      }
    },
    searchSchool(newValue) {
      if (newValue != this.school || this.school == "") {
        $("#dropdownMenuSchool").addClass("is-invalid");
      } else {
        $("#dropdownMenuSchool").addClass("is-valid");
        $("#dropdownMenuSchool").removeClass("is-invalid");
      }
    },
    password() {
      $("#formPassword").addClass("was-validated");
    },
    password2(newValue) {
      if (newValue != this.password || newValue.length < 6) {
        $("#password2").addClass("is-invalid");
        $("#password2").removeClass("is-valid");
      } else {
        $("#password2").addClass("is-valid");
        $("#password2").removeClass("is-invalid");
      }
    },
    country(newValue) {
      $("#formCountry").addClass("was-validated");
    },
    province(newValue) {
      $("#formProvince").addClass("was-validated");
      this.district = "";
      this.districts = new Set(
        this.province_list
          .filter(item => item.province == newValue)
          .map(item => item.district)
      );
    },
    district(newValue) {
      $("#formDistrict").addClass("was-validated");
      this.ward = "";
      this.wards = new Set(
        this.province_list
          .filter(item => item.district == newValue)
          .map(item => item.ward)
      );
    },
    ward() {
      $("#formWard").addClass("was-validated");
    },
    address() {
      $("#formAddress").addClass("was-validated");
    }
  }
};
</script>
