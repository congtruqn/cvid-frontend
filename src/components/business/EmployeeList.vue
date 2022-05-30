<template>
    <div class="table-responsive-xxl m-4">
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
</template>