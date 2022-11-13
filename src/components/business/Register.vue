<!-- eslint-disable no-unused-expressions -->
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
                  <h3 class="mb-5 text-uppercase">
                    Đăng kí tài khoản tuyển dụng
                  </h3>
                  <div id="formCountry" class="mb-4 form-floating" v-if="false">
                    <select class="form-select" v-model="country" required>
                      <option value="" disabled>Chọn quốc gia</option>
                      <option value="Việt Nam">Việt Nam</option>
                    </select>
                    <label class="form-label">Quốc gia</label>
                  </div>
                  <div class="mb-4 form-floating">
                    <select class="form-select" v-model="type" required>
                      <option value="" disabled>
                        Chọn loại hình tuyển dụng
                      </option>
                      <option value="6">Cá nhân</option>
                      <option value="5">Doanh nghiệp</option>
                    </select>
                    <label class="form-label">Loại hình tuyển dụng</label>
                  </div>
                <!-- Doanh nghiệp -->
                  <div v-if="type == 5">
                    <div class="mb-4 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        v-model="manager"
                        required
                      />
                      <label class="form-label">Người đại diện</label>
                    </div>
                    <div class="mb-4 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        v-model="phone"
                        required
                      />
                      <label class="form-label">Số điện thoại</label>
                    </div>

                    <div class="mb-4 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        v-model="position"
                        required
                      />
                      <label class="form-label">Chức vụ</label>
                    </div>

                    <div class="mb-4 form-floating">
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        required
                      />
                      <label class="form-label">Email</label>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div id="formPassword" class="form-floating">
                          <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            required
                            minlength="6"
                          />
                          <label class="form-label">Mật khẩu</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating">
                          <input
                            type="password"
                            class="form-control"
                            v-model="password2"
                            minlength="6"
                            required
                          />
                          <label class="form-label">Nhập lại mật khẩu</label>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 form-floating">
                      <select class="form-select" v-model="type_business">
                        <option value="" disabled>
                          Chọn loại hình doanh nghiệp
                        </option>
                        <option
                          v-for="(item, index) in type_businesses"
                          :value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                      <label class="form-label">Loại hình</label>
                    </div>
                    <div class="mb-4 form-floating">
                      <input
                        type="text"
                        class="form-control dropdown-toggle"
                        id="dropdownMenuField"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                        :value="industry.toString().replaceAll(',', ', ')"
                      />
                      <label class="form-label">Lĩnh vực kinh doanh</label>
                      <ul
                        class="dropdown-menu w-100"
                        aria-labelledby="dropdownMenuField"
                      >
                        <div
                          class="form-check mx-3"
                          v-for="(item, index) in industries"
                          :key="index"
                        >
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="industry"
                            :id="'industry' + index"
                            :value="item.name"
                          />
                          <label
                            class="form-check-label"
                            :for="'industry' + index"
                          >
                            {{ item.name }}
                          </label>
                        </div>
                      </ul>
                    </div>
                    <div class="mb-4 form-floating">
                      <input
                        @blur="getBusiness"
                        type="number"
                        class="form-control"
                        v-model="username"
                        required
                      />
                      <label class="form-label">Mã số thuế</label>
                    </div>
                    <div class="mb-4 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        v-model="name"
                        disabled
                      />
                      <label class="form-label">Tên doanh nghiệp</label>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 form-floating">
                        <input
                          type="text"
                          class="form-control"
                          v-model="province"
                          disabled
                        />
                        <label class="ms-2 form-label">Tỉnh/Thành phố</label>
                      </div>
                      <div class="col-md-6 mb-4 form-floating">
                        <input
                          type="text"
                          class="form-control"
                          v-model="district"
                          disabled
                        />
                        <label class="ms-2 form-label">Chọn quận/huyện</label>
                      </div>
                      <div class="col-md-6 mb-4 form-floating">
                        <input
                          type="text"
                          class="form-control"
                          v-model="ward"
                          disabled
                        />
                        <label class="ms-2 form-label">Chọn phường/xã</label>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div id="formAddress" class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address"
                            disabled
                          />
                          <label class="form-label">Số và tên đường</label>
                        </div>
                      </div>
                    </div>

                    <div class="mb-4 form-floating">
                      <input type="text" class="form-control" v-model="major"/>
                      <label class="form-label"
                        >Nghành nghề kinh doanhh chính</label
                      >
                    </div>
                    <div id="formFile" class="mb-4 form-floating">
                      <input
                        type="file"
                        class="form-control"
                        id="file-upload"
                        @change="onFileUpload"
                        accept="image/*"
                        required
                      />
                      <label class="form-label">Giấy phép kinh doanh</label>
                    </div>
                  </div>


                  
                  <div v-else>
                    <div class="mb-4 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        v-model="username"
                        required
                      />
                      <label class="form-label">Số điện thoại</label>
                    </div>
                    <div class="mb-4 form-floating">
                      <input
                        type="text"
                        class="form-control"
                        v-model="name"
                        required
                      />
                      <label class="form-label">Họ và tên</label>
                    </div>
                    <div class="mb-4 form-floating">
                      <select class="form-select" required>
                        <option value="" selected disabled>
                          Chọn loại hình
                        </option>
                        <option value="Việt Na">Hiệp hội</option>
                        <option value="Việt N">Cửa hàng</option>
                        <option value="">Hộ kinh doanh cá thể</option>
                      </select>
                      <label class="form-label">Loại hình</label>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating">
                          <select
                            class="form-select"
                            v-model="province"
                            required
                          >
                            <option value="" disabled>
                              Chọn tỉnh/thành phố
                            </option>
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
                      <div class="col-md-6 mb-4">
                        <div class="form-floating">
                          <select
                            class="form-select"
                            v-model="district"
                            required
                          >
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
                      <div class="col-md-6 mb-4">
                        <div class="form-floating">
                          <select class="form-select" v-model="ward" required>
                            <option value="" disabled>Chọn phường/xã</option>
                            <option v-for="ward in wards" :value="ward">
                              {{ ward }}
                            </option>
                          </select>
                          <label class="form-label">Phường/Xã</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div id="formAddress" class="form-floating">
                          <input
                            type="text"
                            class="form-control"
                            v-model="address"
                            required
                          />
                          <label class="form-label">Địa chỉ doanh nghiệp</label>
                        </div>
                      </div>
                    </div>
                    <div class="mb-4 form-floating">
                      <input
                        type="email"
                        class="form-control"
                        v-model="email"
                        required
                      />
                      <label class="form-label">Email</label>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-floating">
                          <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            required
                            minlength="6"
                          />
                          <label class="form-label">Mật khẩu</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-floating">
                          <input
                            type="password"
                            class="form-control"
                            v-model="password2"
                            minlength="6"
                            required
                          />
                          <label class="form-label">Nhập lại mật khẩu</label>
                        </div>
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
                      Đăng kí
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
const { BASE_URL } = require('../../utils/config')
export default {
  data () {
    return {
      type: '5',
      name: '',
      username: '',
      phone: '',
      manager: '',
      position: '',
      country: 'Việt Nam',
      province: '',
      district: '',
      major: '',
      ward: '',
      address: '',
      type_business: '',
      industry: [],
      image: null,
      email: '',
      password: '',
      password2: '',
      province_list: [],
      type_businesses: [],
      industries: [],
      provinces: [],
      districts: [],
      wards: [],
      error: []
    }
  },
  methods: {
    getBusiness () {
      if (this.username == '') {
        this.name = ''
        this.province = ''
        this.district = ''
        this.ward = ''
        this.address = ''
        return
      }
      this.$http
        .post(`${BASE_URL}/business/getinfo`, {
          mst: this.username
        })
        .then((response) => {
          var htmlObject = document.createElement('div')
          htmlObject.innerHTML = response.data
          htmlObject = htmlObject.getElementsByClassName('search-results')
          if (htmlObject.length == 0) {
            this.name = ''
            this.province = ''
            this.district = ''
            this.ward = ''
            this.address = ''
          } else {
            this.name = htmlObject[0].getElementsByTagName('a')[0].innerHTML
            var address = htmlObject[0].getElementsByTagName('p')[0].innerHTML
            this.username = htmlObject[0]
              .getElementsByTagName('p')[0]
              .getElementsByTagName('a')[0].innerHTML
            this.address = ''
            address = address.split('Địa chỉ:')[1].trim().split(', ').reverse()
            address.forEach((item, index) => {
              if (index == 0) this.province = item
              else if (index == 1) this.district = item
              else if (index == 2) this.ward = item
              else this.address = item + ' ' + this.address
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    onFileUpload (e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = async (e) => {
        this.image = await e.target.result
      }
    },
    isValid () {
      this.error = []
      this.name == '' ? this.error.push('Chưa nhập họ và tên!') : null
      this.username == '' ? this.error.push('Chưa nhập mã số thuế!') : null
      this.email == '' ? this.error.push('Chưa nhập email!') : null
      this.gender == '' ? this.error.push('Chưa nhập giới tính!') : null
      this.province == '' ? this.error.push('Chưa nhập Tỉnh/Thành phố!') : null
      this.district == '' ? this.error.push('Chưa nhập Quận/Huyện!') : null
      this.ward == '' ? this.error.push('Chưa nhập Phường/Xã!') : null
      this.address == '' ? this.error.push('Chưa nhập địa chỉ!') : null
      this.professionaltitle == '' ? this.error.push('Chưa nhập chức danh chuyên môn!') : null
      // this.startyear==''?this.error.push('Chưa nhập thời gian bắt đầu!'):null
      // this.endyear==''?this.error.push('Chưa nhập thời gian kết thúc!'):null
      this.password == '' ? this.error.push('Chưa nhập mật khẩu!') : null
      this.password.length < 6 ? this.error.push('Mật khẩu tối thiểu 6 kí tự!') : null
      this.password2 != this.password ? this.error.push('Mật khẩu nhập lại không khớp!') : null
      this.image == null ? this.error.push('Chưa chọn giấy phép kinh doanh!') : null
      return !(this.error.length > 0)
    },
    handleSubmit (e) {
      console.log(this.email)
      e.preventDefault()
      if (!this.isValid()) {
        Swal.fire({
          icon: 'info',
          title: 'Đăng kí thất bại',
          text: this.error[0],
          confirmButtonColor: 'var(--primary)',
          confirmButtonText: 'Nhập lại'
        })
        return
      }

      this.$http
        .post(`${BASE_URL}/business/register`, {
          type: this.type,
          name: this.name,
          image: this.image,
          phone: this.phone,
          manager: this.manager,
          username: this.username,
          type_business: this.type_business,
          majors: this.major,
          country: this.country,
          province: this.province,
          district: this.district,
          ward: this.ward,
          address: this.address,
          email: this.email,
          industries: this.industry,
          password: this.password,
          password2: this.password2
        })
        .then((response) => {
          if (response.data == 'ok') {
            Swal.fire({
              icon: 'success',
              title: 'Đăng kí thành công',
              text: 'Bạn có thể đăng nhập ngay bây giờ',
              confirmButtonColor: 'var(--primary)',
              confirmButtonText: 'Đăng nhập'
            }).then((result) => {
              if (result.value) {
                this.$router.push('/business/login')
              }
            })
          } else {
            Swal.fire({
              icon: 'info',
              title: 'Đăng kí thất bại',
              text: `${response.data[0].msg}`,
              confirmButtonColor: 'var(--primary)',
              confirmButtonText: 'Nhập lại'
            })
          }
        })
        .catch(function (error) {
          console.error(error.response)
        })
    }
  },
  created () {
    this.$http
      .get(`${BASE_URL}/province/list`)
      .then((response) => {
        this.province_list = response.data
        this.provinces = new Set(
          this.province_list.map((item) => item.province)
        )
      })
      .catch(function (error) {
        console.error(error.response)
      })
    this.$http
      .get(`${BASE_URL}/industry/getall`)
      .then((response) => {
        this.industries = response.data
      })
      .catch(function (error) {
        console.error(error.response)
      })
    this.$http
      .get(`${BASE_URL}/typebusiness/getall`)
      .then((response) => {
        this.type_businesses = response.data
      })
      .catch(function (error) {
        console.error(error.response)
      })
  },
  watch: {
    name (newValue) {
      $('#formName').addClass('was-validated')
    },
    username () {
      $('#formPhone').addClass('was-validated')
    },
    password () {
      $('#formPassword').addClass('was-validated')
    },
    password2 (newValue) {
      if (newValue != this.password || newValue.length < 6) {
        $('#password2').addClass('is-invalid')
        $('#password2').removeClass('is-valid')
      } else {
        $('#password2').addClass('is-valid')
        $('#password2').removeClass('is-invalid')
      }
    },
    country (newValue) {
      $('#formCountry').addClass('was-validated')
    },
    province (newValue) {
      $('#formProvince').addClass('was-validated')
      if (this.type == 5) return
      this.district = ''
      this.districts = new Set(
        this.province_list
          .filter((item) => item.province == newValue)
          .map((item) => item.district)
      )
    },
    district (newValue) {
      $('#formDistrict').addClass('was-validated')
      if (this.type == 5) return
      this.ward = ''
      this.wards = new Set(
        this.province_list
          .filter((item) => item.district == newValue)
          .map((item) => item.ward)
      )
    },
    ward () {
      $('#formWard').addClass('was-validated')
    },
    address () {
      $('#formAddress').addClass('was-validated')
    },
    FILE () {
      $('#formFile').addClass('was-validated')
    }

  }
}
</script>
