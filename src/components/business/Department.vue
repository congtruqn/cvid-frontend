<template>
    <div class="container-fluid">
        <a href="#" class="btn btn-success btn-icon-split m-4">
            <span class="icon text-white-50">
                <i class="fas fa-plus"></i> 
            </span> 
            <span class="text">Thêm phòng ban</span>
        </a>
        <div v-for="index in 3" class="my-3 p-3 bg-body rounded shadow-sm table-responsive-xl">
            <h6 class="border-bottom pb-2 mb-0">Tên phòng ban</h6>
            <table class="table table-sm table-hover">
                <thead class="table-light">
                    <tr>
                        <th>#</th>
                        <th>Vị trí tuyển dụng</th>
                        <th>Số lượng</th>
                        <th>Số lượng hiện có</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                    
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="index1 in 3">
                        <td>{{index}}</td>
                        <td>
                            Tên vị trí tuyển dụng
                        </td>
                        <td>
                            10
                        </td>
                        <td>
                            8
                        </td>
                        <td>
                            Đang tuyển dụng
                        </td>
                        <td>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary btn-sm">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button data-bs-toggle="modal" data-bs-target="#edit" href="#" class="btn btn-primary btn-sm">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button href="#" class="btn btn-danger btn-sm">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                    <tr colspan="4">
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form action="" method="post" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="">Vị trí tuyển dụng</label>
                                <input type="text" class="form-control" name="name" v-model="name" placeholder=''>
                            </div>
                            <div class="form-group">
                                <label for="">Mô tả công việc</label>
                                <textarea name="description" id="description" cols="30" rows="10" class="form-control" v-model="description"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="">Số lượng</label>
                                <input type="number" class="form-control" name="quantity" v-model="quantity" placeholder="Nhập số lượng">
                            </div>
                            <div class="form-group">
                                <label for="">Ngày hết hạn</label>
                                <input type="date" class="form-control" name="expired_date" v-model="expired_date" placeholder="Nhập ngày hết hạn">
                            </div>
                            <div class="form-group">
                                <label for="">Ngành nghề</label>
                                <select name="category_id" id="category_id" class="form-control" v-model="category_id">
                                    <option value="">Chọn ngành nghề</option>
                                    <option v-for="(item, index) in categories" :value="item.id">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Địa điểm làm việc</label>
                                <select name="location_id" id="location_id" class="form-control" v-model="location_id">
                                    <option value="">Chọn địa điểm làm việc</option>
                                    <option v-for="(item, index) in locations" :value="item.id">{{item.name}}</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="">Ngày tuyển dụng</label>
                                <input type="date" class="form-control" name="recruit_date" v-model="recruit_date" placeholder="Nhập ngày tuyển dụng">
                            </div>
                            <div class="form-group">
                                <label for="">Ngày hết hạn tuyển dụng</label>
                                <input type="date" class="form-control" name="expired_recruit_date" v-model="expired_recruit_date" placeholder="Nhập ngày hết hạn tuyển dụng">
                            </div>
                            <div class="form-group">
                                <label for="">Mức lương tối thiểu</label>
                                <input type="number" class="form-control" name="min_salary" v-model="min_salary" placeholder="Nhập mức lương tối thiểu">
                            </div>
                            <div class="form-group">
                                <label for="">Mức lương tối đa</label>
                                <input type="number" class="form-control" name="max_salary" v-model="max_salary" placeholder="Nhập mức lương tối đa">
                            </div>
                            <div class="form-group">
                                <label for="">Yêu cầu công việc</label>
                                <textarea name="job_requirement" id="job_requirement" cols="30" rows="10" class="form-control" v-model="requirement"></textarea>
                            </div>
                            
                            <div class="form-group">
                                <label for="">Trạng thái</label>
                                <select name="status" id="status" class="form-control" v-model="status">
                                    <option value="">Chọn trạng thái</option>
                                    <option value="1">Đang tuyển</option>
                                    <option value="2">Đã hết hạn</option>
                                    <option value="3">Đã hết hạn</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="">Người tuyển</label>
                                <input type="text" class="form-control" name="recruiter" v-model="recruiter" placeholder="Nhập người tuyển">
                            </div>
                            <div class="form-group">
                                <label for="">Người liên hệ</label>
                                <input type="text" class="form-control" name="contact" v-model="contact" placeholder="Nhập người liên hệ">
                            </div>
                            <div class="form-group">
                                <label for="">Số điện thoại</label>
                                <input type="text" class="form-control" name="phone" v-model="phone" placeholder="Nhập số điện thoại">
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="text" class="form-control" name="email" v-model="email" placeholder="Nhập email">
                            </div>
                            
                            <div class="form-group">
                                <label for="">Địa chỉ</label>
                                <input type="text" class="form-control" name="address" v-model="address" placeholder="Nhập địa chỉ">
                            </div>
                            <div class="form-group">
                                <label for="">Nội dung</label>
                                <textarea name="content" id="content" cols="30" rows="10" class="form-control" v-model="content"></textarea>
                            </div>

                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
</template>