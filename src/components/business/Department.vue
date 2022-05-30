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
                        <!-- <td>{{item.name}}</td>
                        <td>{{item.cvid}}</td>
                        <td>{{item.cv_score}}</td>
                        <td>{{item.contract_type}}</td>
                        <td>{{item.contract_date}}</td>
                        <td>{{item.status}}</td>
                        <td>{{item.working_time}}</td>
                        <td>{{item.leave_date}}</td>
                        <td>{{item.result}}</td>
                        <td>{{item.cv_type}}</td> -->
                        <td>Trần Văn A</td>
                        <td>CV103290345</td>
                        <td>7/10</td>
                        <td>Chính thức</td>
                        <td>21/07/2020</td>
                        <td>Đang làm</td>
                        <td>3 tháng</td>
                        <td></td>
                        <td>Chưa cập nhật</td>
                        <td>Chưa cập nhật</td>
                    </tr>
                </tbody>
            </table>
            <small class="d-block text-end mt-3">
                <a href="#">All updates</a>
            </small>
            <div class="row">
                <div class="col-md-6">

                </div>
            </div>
        </div>
    </div>
</template>