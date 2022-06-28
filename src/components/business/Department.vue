<template>
    <div class="container-fluid">
        <button v-if="business.type==5" type="button" class="btn btn-primary btn-icon-split ms-5 my-4" data-bs-toggle="modal" data-bs-target="#addDepartment">
            <i class="fas fa-plus"></i> Thêm phòng ban
        </button>
        
        <div class="container" v-for="department in departments" style="width: 80vw">
            <h2 class="d-inline mb-2">{{department.name}}</h2>
            <a href="">
                <i class="fas fa-pencil-alt"></i>
            </a>
            
            <div class="table-responsive-xl">
                <table class="table table-hover" style="minWidth: 800px">
                    <thead>
                        <tr>
                            <th scope="col">Stt</th>
                            <th scope="col">Vị trí tuyển dụng</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Hiện có</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="row" v-for="(position, index) in department.position">    
                            <td >
                            {{index+1}}
                            </td>
                            <td>{{position.name}}</td>
                            <td>{{position.amount}}</td>
                            <td>5</td>
                            <td v-if="position.status == 0"><span class="badge rounded-pill bg-secondary">Dừng tuyển</span></td>
                            <td v-else><span class="badge rounded-pill bg-primary">Đang tuyển</span></td>
                            <td>
                                <button @click="findCV(department._id, position._id)" data-bs-toggle="modal" data-bs-target="#findCV" class="btn btn-secondary btn-sm" title="Tìm kiếm ứng viên">
                                    <i class="fas fa-search"></i>
                                </button>
                                <button data-bs-toggle="modal" data-bs-target="#view" class="btn btn-primary btn-sm" title="Xem danh sách nhân viên">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button data-bs-toggle="modal" data-bs-target="#editPosition" class="btn btn-primary btn-sm" @click="openModalEdit(department._id, position._id)" title="Chỉnh sửa thông tin tuyển dụng">
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                                <button @click="deletePosition(department._id, position._id)" class="btn btn-danger btn-sm" title="Xóa vị trí tuyển dụng">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="100">
                                <button data-bs-toggle="modal" data-bs-target="#addPosition" @click="new_department.id=department._id;new_department.name=department.name;" class="btn btn-primary btn-sm">
                                    <i class="fas fa-plus"></i> Thêm vị trí tuyển dụng
                                </button>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
        <div class="modal fade" id="findCV" tabindex="-1" aria-labelledby="findCV" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="findCVLabel">Danh sách ứng viên đề xuất</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <div class="row gy-1">
                            <a href="view-cv/idcv" v-for="index in list_cv" class="job-item p-4 mb-2">
                                <div class="row">
                                    <div class="col-md-12 col-lg-8 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">{{index.name}}</h5>
                                            <span class="text-truncate me-3"><i class="fas fa-file-alt"></i> Điểm CV: {{index.point}}/10</span>
                                            <span class="text-truncate me-3"><i class="fas fa-building"></i> Cấp bậc: {{index.level}}</span>
                                            <span class="text-truncate me-0"><i class="far fa-page"></i>Chuyên nghành: {{index.skill}}</span>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-4 d-flex flex-column align-items-start align-items-lg-end justify-content-center">
                                        <div class="d-flex my-3">
                                            <a class="btn btn-primary" href="">Gửi lời mời</a>
                                        </div>
                                    </div>
                                </div>
                            </a>          
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="editPosition">Lưu</button>
                </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="editPosition" tabindex="-1" aria-labelledby="editPosition" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editPositionLabel">Chỉnh sửa vị trí tuyển dụng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form >
                            <div class="form-group mb-3">
                                <label class="form-label">Phòng ban</label>
                                <input type="text" class="form-control" :value="new_department.name" readonly disabled>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Vị trí tuyển dụng <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" v-model="new_department.position.name" placeholder=''>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mô tả công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="new_department.position.description"></textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Số lượng <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" v-model="new_department.position.amount" placeholder="Nhập số lượng">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Ngày hết hạn <span class="text-danger">*</span></label>
                                <input type="date" class="form-control"  v-model="new_department.position.enddate" placeholder="Nhập ngày hết hạn">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Ngành nghề</label>
                                <input class="form-control" data-bs-toggle="offcanvas" href="#offcanvasMajor2" role="button" aria-controls="offcanvasMajor2" :value="'Đã chọn '+ new_department.position.majors.length +' nghành nghề'" readonly>
                                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMajor2" aria-labelledby="offcanvasMajor2Label">
                                    <div class="offcanvas-header">
                                      <h5 class="offcanvas-title" id="offcanvasMajor2Label">Chọn nghành nghề</h5>
                                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div v-for="(major, index) in majors" v-if="major.level === 'Đại học'" :key="index" class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="new_department.position.majors" :value="major.name" :id="'major'+index">
                                            <label class="form-check-label" :for="'major'+index">
                                                {{major.name}}
                                            </label>
                                          </div>
                                          
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Địa điểm làm việc <span class="text-danger">*</span></label>
                                <select class="form-control" v-model="new_department.position.work_location">
                                    <option value="">Chọn địa điểm làm việc</option>
                                    <option v-for="province in provinces" :value="province">{{province}}</option>
                                </select>
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Mức lương tối thiểu (triệu đồng)</label>
                                <input type="number" class="form-control" v-model="new_department.position.min_salary" placeholder="Nhập mức lương tối thiểu">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mức lương tối đa (triệu đồng)</label>
                                <input type="number" class="form-control" v-model="new_department.position.max_salary" placeholder="Nhập mức lương tối đa">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Yêu cầu công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="new_department.position.requirements"></textarea>
                            </div>
                            
                            <div class="form-group mb-3">
                                <label for="">Trạng thái <span class="text-danger">*</span></label>
                                <select name="status" class="form-control" v-model="new_department.position.status">
                                    <option value="">Chọn trạng thái</option>
                                    <option value="0">Dừng tuyển</option>
                                    <option value="1">Đăng tuyển</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Người liên hệ</label>
                                <input type="text" class="form-control" name="contact" v-model="new_department.position.contact" placeholder="Nhập người liên hệ">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Số điện thoại</label>
                                <input type="text" class="form-control" name="phone" v-model="new_department.position.phone" placeholder="Nhập số điện thoại">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Email</label>
                                <input type="text" class="form-control" name="email" v-model="new_department.position.email" placeholder="Nhập email">
                            </div>
                            
                            <div class="form-group mb-3">
                                <label for="">Địa chỉ</label>
                                <input type="text" class="form-control" name="address" v-model="new_department.position.address" placeholder="Nhập địa chỉ">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Nội dung</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="new_department.position.note"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="editPosition">Lưu</button>
                </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="addPosition" tabindex="-1" aria-labelledby="addPosition" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addPositionLabel">Thêm vị trí tuyển dụng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form >
                            <div class="form-group mb-3">
                                <label class="form-label">Phòng ban</label>
                                <input type="text" class="form-control" :value="new_department.name" readonly disabled>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Vị trí tuyển dụng</label>
                                <input type="text" class="form-control" v-model="new_department.position.name" placeholder=''>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mô tả công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="new_department.position.description"></textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Số lượng</label>
                                <input type="number" class="form-control" v-model="new_department.position.amount" placeholder="Nhập số lượng">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Ngày hết hạn</label>
                                <input type="date" class="form-control"  v-model="new_department.position.enddate" placeholder="Nhập ngày hết hạn">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Ngành nghề</label>
                                <input class="form-control" data-bs-toggle="offcanvas" href="#offcanvasMajor1" role="button" aria-controls="offcanvasMajor1" :value="'Đã chọn '+ new_department.position.majors.length +' nghành nghề'" readonly>
                                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMajor1" aria-labelledby="offcanvasMajor1Label">
                                    <div class="offcanvas-header">
                                      <h5 class="offcanvas-title" id="offcanvasMajor1Label">Chọn nghành nghề</h5>
                                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div v-for="(major, index) in majors" v-if="major.level === 'Đại học'" :key="index" class="form-check">
                                            <input class="form-check-input" type="checkbox" v-model="new_department.position.majors" :value="major.name" :id="'major1'+index">
                                            <label class="form-check-label" :for="'major1'+index">
                                                {{major.name}}
                                            </label>
                                          </div>
                                          
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Địa điểm làm việc</label>
                                <select class="form-control" v-model="new_department.position.work_location">
                                    <option value="">Chọn địa điểm làm việc</option>
                                    <option v-for="province in provinces" :value="province">{{province}}</option>
                                </select>
                            </div>

                            <div class="form-group mb-3">
                                <label for="">Mức lương tối thiểu</label>
                                <input type="number" class="form-control" v-model="new_department.position.min_salary" placeholder="Nhập mức lương tối thiểu">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mức lương tối đa</label>
                                <input type="number" class="form-control" v-model="new_department.position.max_salary" placeholder="Nhập mức lương tối đa">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Yêu cầu công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="new_department.position.requirements"></textarea>
                            </div>
                            
                            <div class="form-group mb-3">
                                <label for="">Trạng thái</label>
                                <select name="status" class="form-control" v-model="new_department.position.status">
                                    <option value="">Chọn trạng thái</option>
                                    <option value="0">Dừng tuyển</option>
                                    <option value="1">Đăng tuyển</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Người liên hệ</label>
                                <input type="text" class="form-control" name="contact" v-model="new_department.position.contact" placeholder="Nhập người liên hệ">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Số điện thoại</label>
                                <input type="text" class="form-control" name="phone" v-model="new_department.position.phone" placeholder="Nhập số điện thoại">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Email</label>
                                <input type="text" class="form-control" name="email" v-model="new_department.position.email" placeholder="Nhập email">
                            </div>
                            
                            <div class="form-group mb-3">
                                <label for="">Địa chỉ</label>
                                <input type="text" class="form-control" name="address" v-model="new_department.position.address" placeholder="Nhập địa chỉ">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Nội dung</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="new_department.position.note"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="addPosition">Thêm vị trí</button>
                </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="view" tabindex="-1" aria-labelledby="view" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="table-responsive-xl m-4">
                        <table class="table table-sm table-hover" :style="{minWidth: '1500px'}">
                            <thead class="table-primary">
                                <tr>
                                    <th>#</th>
                                    <th>Tên nhân viên</th>
                                    <th>Số CVID</th>
                                    <th>Điểm CV đầu vào</th>
                                    <th>Loại hợp đồng</th>
                                    <th>Ngày kí hợp đồng</th>
                                    <th>Tình trạng</th>
                                    <th>Thời gian làm việc</th>
                                    <th>Ngày nghỉ</th>
                                    <th>Kết quả làm việc</th>
                                    <th>Xếp loại cv đầu ra</th>
                                    <th>Thao tác</th>
                                </tr>
                                
                            </thead>
                            <tbody class="table-group-divider">
                                <tr v-for="(item, index) in 10">
                                    <td>{{index+1}}</td>
                                    <td>Trần Văn A</td>
                                    <td>CV103290345</td>
                                    <td>7/10</td>
                                    <td>chính thức</td>
                                    <td>21/07/2020</td>
                                    <td>Đang làm</td>
                                    <td>3 tháng</td>
                                    <td></td>
                                    <td>Chưa cập nhật</td>
                                    <td>Chưa cập nhật</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary" title="Đánh giá nhân viên"><i class="fas fa-book"></i></button>
                                        <button class="btn btn-sm btn-danger" title="Xóa nhân viên"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                   
                </div>
                </div>
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
                        <input type="text" class="form-control" placeholder="Nhập tên phòng ban" v-model="new_department.name">
                    </div>
                    <hr>
                    <h5 class="mb-2">Tài khoản phòng ban</h5>
                    <div class="mb-2">
                        <label class="col-form-label">Tên tài khoản</label>
                        <input type="text" class="form-control" placeholder="Nhập tên tài khoản" v-model="username">
                    </div>
                    <div class="mb-2">
                        <label class="col-form-label">Mật khẩu</label>
                        <input type="password" class="form-control" placeholder="Nhập mật khẩu" v-model="password">
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                  <button type="button" class="btn btn-primary" @click="addDepartment">Thêm</button>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config') 
    export default {
        data (){
            return {
                business : JSON.parse(localStorage.getItem('business')),
                majors: [],
                username: '',
                password: '',
                provinces: [],
                departments: [],
                new_department: {
                    name: '',
                    position: {
                        name: "",
                        majors: [],
                        amount: 0,
                        description: "",
                        enddate: "",
                        startdate: "",
                        work_location: "",
                        min_salary: 0,
                        max_salary: 0,
                        requirements: "",
                        status: 0,
                        contact: "",
                        phone: "",
                        email: "",
                        address: "",
                        note: "",
                    },
                    id: ''
                },
                list_cv: [],
            }
        },
        methods : {
            addDepartment(e){
                e.preventDefault();
                if (this.new_department.name == ''){
                    Swal.fire({
                        icon: 'info',
                        title: 'Thông báo',
                        text: 'Tên phòng ban không được để trống',
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'var(--primary)',
                    });    
                } else {
                    this.$http.post(`${BASE_URL}/department/new`, {
                        name : this.new_department.name,
                        id: this.business.username,
                        username: this.username,
                        password: this.password
                    }).then(res => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thông báo',
                            text: 'Thêm phòng ban thành công',
                            confirmButtonText: 'OK',
                            confirmButtonColor: 'var(--primary)',
                        });
                        this.new_department.name = '';
                        window.location.reload();
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            addPosition(e){
                e.preventDefault();
                this.$http.post(`${BASE_URL}/department/position/new`, {
                    department: this.new_department
                }).then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thông báo',
                        text: 'Thêm chức danh thành công',
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'var(--primary)',
                    });
                    this.name_position = '';
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                })
            },
            openModalEdit(department_id, position_id){
                this.departments.filter(department => {
                    if (department._id == department_id){
                        this.new_department.name = department.name
                        this.new_department.id = department._id
                        department.position.filter(position => {
                            if (position._id == position_id){
                                position.enddate = position.enddate.split('T')[0]
                                this.new_department.position = position
                        
                            }
                        })
                    }
                })
            },
            editPosition(e){
                e.preventDefault();
                this.$http.post(`${BASE_URL}/department/position/edit`, {
                    department: this.new_department
                }).then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thông báo',
                        text: 'Sửa chức danh thành công',
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'var(--primary)',
                    });
                    this.name_position = '';
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                })
            },
            deletePosition(department_id, position_id){
                Swal.fire({
                    title: 'Bạn có chắc chắn muốn xóa chức danh này?',
                    text: "Sau khi xóa, bạn sẽ không thể khôi phục lại!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: 'var(--primary)',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Xóa'
                }).then((result) => {
                    if (result.value) {
                        this.$http.post(`${BASE_URL}/department/position/delete`, {
                            department_id: department_id,
                            position_id: position_id
                        }).then(res => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Thông báo',
                                text: 'Xóa chức danh thành công',
                                confirmButtonText: 'OK',
                                confirmButtonColor: 'var(--primary)',
                            });
                            window.location.reload();
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            },
            findCV(department_id, position_id){
                this.$http.get(`${BASE_URL}/department/findCV/${department_id}/${position_id}`).then(res => {
                    this.list_cv = res.data
                    console.log(this.list_cv)
                }).catch(err => {
                    console.log(err)
                })
            },
        },
        created(){
            if (this.business.type==5){
                this.$http.get(`${BASE_URL}/department/list/${this.business.username}`).then(res => {
                    this.departments = res.data
                }).catch(err => {
                    console.log(err)
                })
            } else if (this.business.type==7){
                this.$http.get(`${BASE_URL}/department/detail/${this.business.name}`).then(res => {
                    this.departments = [res.data]
                }).catch(err => {
                    console.log(err)
                })
            }
            this.$http.get(`${BASE_URL}/province/list`)
            .then(response => {
                this.provinces = response.data;
                this.provinces = new Set(this.provinces.map(item => item.province))  
            })
            .catch(function (error) {
                console.error(error.response);
            });   
            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.majors = response.data;
            })
        }
    }
</script>