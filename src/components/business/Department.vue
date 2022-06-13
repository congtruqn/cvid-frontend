<template>
    <div class="container-fluid">
        <button type="button" class="btn btn-primary btn-icon-split ms-5 my-4" data-bs-toggle="modal" data-bs-target="#addDepartment">
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
                                <button data-bs-toggle="modal" data-bs-target="#view" class="btn btn-primary btn-sm" title="Xem danh sách nhân viên">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <button data-bs-toggle="modal" data-bs-target="#editPosition" class="btn btn-primary btn-sm" @click="openModalEdit(department._id, position._id)" title="Chỉnh sửa thông tin tuyển dụng">
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                                <button href="#" class="btn btn-danger btn-sm"  title="Xóa vị trí tuyển dụng">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                        <tr >
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
                                <select name="category_id" class="form-control" v-model="new_department.position.majors">
                                    <option value="">Chọn ngành nghề</option>
                                    <!-- <option v-for="(item, index) in categories" :value="item.id">{{item.name}}</option> -->
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Địa điểm làm việc</label>
                                <select name="location_id" class="form-control" v-model="new_department.position.work_location">
                                    <option value="">Chọn địa điểm làm việc</option>
                                    <!-- <option v-for="(item, index) in locations" :value="item.id">{{item.name}}</option> -->
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
                                <select name="category_id"" class="form-control" v-model="new_department.position.majors">
                                    <option value="">Chọn ngành nghề</option>
                                    <!-- <option v-for="(item, index) in categories" :value="item.id">{{item.name}}</option> -->
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Địa điểm làm việc</label>
                                <select name="location_id" class="form-control" v-model="new_department.position.work_location">
                                    <option value="">Chọn địa điểm làm việc</option>
                                    <!-- <option v-for="(item, index) in locations" :value="item.id">{{item.name}}</option> -->
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
                        <table class="table table-sm table-hover">
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
                        <input type="text" class="form-control" placeholder="Nhập tên tài khoản">
                    </div>
                    <div class="mb-2">
                        <label class="col-form-label">Mật khẩu</label>
                        <input type="password" class="form-control" placeholder="Nhập mật khẩu">
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
    const id = JSON.parse(localStorage.getItem('business')).username
    export default {
        data (){
            return {
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
                }
            }
        },
        methods : {
            addDepartment(e){
                e.preventDefault();
                if (this.name_department == ''){
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
                        id: id,
                    }).then(res => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thông báo',
                            text: 'Thêm phòng ban thành công',
                            confirmButtonText: 'OK',
                            confirmButtonColor: 'var(--primary)',
                        });
                        this.name_department = '';
                        window.location.reload();
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            addPosition(e){
                e.preventDefault();
                
                this.$http.post(`${BASE_URL}/department/add-position`, {
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
                        department.position.filter(position => {
                            if (position._id == position_id){
                                position.enddate = position.enddate.split('T')[0]
                                this.new_department.position = position
                            }
                        })
                    }
                })
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/department/list/${id}`).then(res => {
                this.departments = res.data
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>