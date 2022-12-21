<template>
  <div class="container pt-4">
    <button
      v-if="!businessInfo.confirm2 && businessInfo.confirm2.status == 1"
      type="button"
      class="btn btn-primary btn-icon-split my-4"
      data-bs-toggle="modal"
      data-bs-target="#addDepartment"
      @click="
        departmentName = '';
        departmentEmail = '';
      "
    >
      <i class="fas fa-plus"></i> Thêm phòng ban
    </button>
    <div v-if="businessInfo.confirm1 && businessInfo.confirm1.status == -1">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Thông báo!</h4>
        <p>
          Tài khoản của bạn không được duyệt. Vui lòng cập nhật thông tin để được duyệt lại.
        </p>
        <hr />
        <p class="mb-0">
          <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editInfo">Cập nhật thông tin</a>
        </p>
      </div>
      <!-- form edit information -->

      <div class="modal fade" id="editInfo" tabindex="-1" aria-labelledby="editInfoLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editInfoLabel">Cập nhật thông tin</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label class="col-form-label">Người đại diện<span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Nhập tên công ty" v-model="businessInfo.name" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Số điện thoại<span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Nhập mã số thuế" v-model="businessInfo.taxCode" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Chức vụ<span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Nhập địa chỉ" v-model="businessInfo.address" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Lĩnh vực kinh doanh<span class="text-danger">*</span></label>
                <input type="text" class="form-control" placeholder="Nhập số điện thoại" v-model="businessInfo.phone" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Ngành nghề kinh doanh chính<span class="text-danger">*</span></label>
                <input type="email" class="form-control" placeholder="Nhập email" v-model="businessInfo.email" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Giấy phép kinh doanh<span class="text-danger">*</span></label>
                <input type="file" class="form-control" placeholder="Nhập email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="
        (businessInfo.confirm1 && businessInfo.confirm1.status == 0) ||
          (businessInfo.confirm2 && businessInfo.confirm2.status == 0)
      "
    >
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Thông báo!</h4>
        <p>
          Tài khoản của bạn đang chờ duyệt. Vui lòng liên hệ với quản trị viên để được hỗ trợ.
        </p>
        <hr />
      </div>
    </div>
    <div class="modal fade" id="addDepartment" tabindex="-1" aria-labelledby="addDepartmentLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addDepartmentLabel">Thêm phòng ban</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label class="col-form-label">Tên phòng ban<span class="text-danger">*</span></label>
              <input type="text" class="form-control" placeholder="Nhập tên phòng ban" v-model="departmentName" />
            </div>
            <div class="mb-3">
              <label class="col-form-label">Email<span class="text-danger"></span></label>
              <input type="email" class="form-control" placeholder="Nhập email" v-model="departmentEmail" />
            </div>
            <hr />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Đóng
            </button>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              :disabled="departmentName.length === 0"
              @click="addDepartment"
            >
              Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { BASE_URL } = require('../../utils/config');
export default {
  data() {
    return {
      departmentName: '',
      departmentEmail: '',
      businessInfo: '',
      token: localStorage.getItem('token'),
      isModalEdit: false,
    };
  },
  methods: {
    addDepartment(e) {
      e.preventDefault();
      if (this.departmentName == '') {
        Swal.fire({
          icon: 'info',
          title: 'Thông báo',
          text: 'Tên phòng ban không được để trống',
          confirmButtonText: 'OK',
          confirmButtonColor: 'var(--primary)',
        });
      } else {
        this.$http
          .post(`${BASE_URL}/department/new`, {
            name: this.departmentName,
            id: JSON.parse(localStorage.getItem('business')).username,
            email: this.departmentEmail,
          })
          .then(res => {
            if (res.data)
              Swal.fire({
                icon: 'success',
                title: 'Thông báo',
                text: 'Thêm phòng ban thành công',
                showConfirmButton: false,
                timer: 1500,
              });
            this.departments.push(res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    openModalEdit(department) {
      this.isModalEdit = true;
    },
  },
  created() {
    if (this.token) {
      console.log(this.token);
      this.$http
        .get(`${BASE_URL}/business/me`, {
          headers: {
            Authorization: `Basic ${this.token}`,
          },
        })
        .then(res => {
          this.businessInfo = res.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
};
</script>
