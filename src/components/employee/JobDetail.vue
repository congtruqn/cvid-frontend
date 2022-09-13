<template>
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
        <div class="container">
            <div class="row gy-5 gx-4">
                <div class="col-lg-8">
                    <div class="d-flex align-items-center mb-5">
                        <img class="flex-shrink-0 img-fluid border rounded" src="../../assets/images/com-logo-2.jpg" alt="" style="width: 80px; height: 80px;">
                        <div class="text-start ps-4">
                            <h3 class="mb-3">{{position.jobtitle}}</h3>
                            <!-- <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Thời hạn nộp hồ sơ: {{position.enddate}}</small> -->
                            <!-- <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span>
                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span> -->
                        </div>
                    </div>

                    <div class="mb-5">
                        <h4 class="mb-3">Mô tả công việc</h4>
                        <p>{{position.description}}</p>
                        <h4 class="mb-3">Yêu cầu ứng viên</h4>
                        <ul class="list-unstyled">
                            <!-- <li v-for="item in position.requirements.split('. ')" v-if="item != ''"><i class="fa fa-angle-right text-primary me-2"></i>{{item}}.</li> -->
                        </ul>
                        <!-- <h4 class="mb-3">Quyền lợi</h4>
                        <p>Magna et elitr diam sed lorem. Diam diam stet erat no est est. Accusam sed lorem stet voluptua sit sit at stet consetetur, takimata at diam kasd gubergren elitr dolor</p>
                        <ul class="list-unstyled">
                            <li><i class="fa fa-angle-right text-primary me-2"></i>Dolor justo tempor duo ipsum accusam</li>
                            <li><i class="fa fa-angle-right text-primary me-2"></i>Elitr stet dolor vero clita labore gubergren</li>
                            <li><i class="fa fa-angle-right text-primary me-2"></i>Rebum vero dolores dolores elitr</li>
                            <li><i class="fa fa-angle-right text-primary me-2"></i>Est voluptua et sanctus at sanctus erat</li>
                            <li><i class="fa fa-angle-right text-primary me-2"></i>Diam diam stet erat no est est</li>
                        </ul> -->
                    </div>
                    <div class="col-12" v-if="job.status != 1">
                        <button class="btn btn-primary w-100" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="job.type == 0 || !job.type">Ứng tuyển</button>   
                        <button class="btn btn-secondary w-100" type="submit" @click="onCancel" v-else>Hủy</button>
                    </div>
                </div>
    
                <div class="col-lg-4">
                    <div class="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
                        <h4 class="mb-4">Job Summery</h4>
                        <!-- <p><i class="fa fa-angle-right text-primary me-2"></i>Published On: 01 Jan, 2045</p> -->
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Số lượng: {{position.amount}} vị trí</p>
                        <!-- <p><i class="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p> -->
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Mức lương:
                            {{position.min_salary == '' && position.max_salary == '' ? 'Lương thỏa thuận' 
                            : position.min_salary != '' && position.max_salary != '' ? 'Từ ' + position.min_salary + ' - ' + position.max_salary + ' triệu đồng'
                            : position.min_salary == '' && position.max_salary != '' ? 'trên ' + position.min_salary + ' triệu đồng'
                            : 'Dưới ' + position.min_salary + ' triệu đồng'}}</p>
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Địa điểm: {{position.work_location}}</p>
                    </div>
                    <div class="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
                        <h4 class="mb-4">Company Detail</h4>
                        <p class="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <td>{{employee.level}}</td>
                        <td>{{position.levels.toString().replaceAll(',',', ')}}</td>
                    
                        </tr>
                        <tr>
                        <th scope="row">Chuyên nghành</th>
                        <td>{{employee.job.skill}}</td>
                        <td>{{position.skills.toString().replaceAll(',',', ')}}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Chức danh công việc</th>
                        <td>{{employee.job.jobtitle}}</td>
                        <td>{{position.jobtitle}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Chức vụ</th>
                        <td>{{employee.job.position==''?'Tất cả':employee.job.position}}</td>
                        <td>{{position.name}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Lĩnh vực làm việc</th>
                        <td>{{employee.job.work_industry==''?'Tất cả':employee.job.work_industry}}</td>
                        <td>{{position.work_industry==''?'Tất cả':position.work_industry}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Loại hình đơn vị tuyển dụng</th>
                        <td>{{employee.job.type_business==''?'Tất cả':employee.job.type_business}}</td>
                        <td></td>
                        </tr>

                        <tr>
                        <th scope="row">Môi trường làm việc</th>
                        <td>{{employee.job.work_environment==''?'Tất cả':employee.job.work_environment}}</td>
                        <td>{{position.work_environment==''?'Tất cả':position.work_environment}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Nơi làm việc</th>
                        <td>{{employee.job.address==''?'Tất cả':employee.job.address}}</td>
                        <td>{{position.work_location==''?'Tất cả':position.work_location}}</td>
                        </tr>
                        <tr>
                        <th scope="row">Số năm kinh nghiệm</th>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="onSubmit" data-bs-dismiss="modal">Xác nhận</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    export default {
        name: 'job-detail',
        data() {
            return {
                position: '',
                employee: JSON.parse(localStorage.getItem('employee')),
                status: false,
                job: '',
                
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/department/position/${this.$route.params.id}`).then(res => {
                this.position = res.data
            }).catch(err => {
                console.log(err)
            })
            this.$http.post(`${BASE_URL}/job/checkjob`, {
                employee: this.employee._id,
                position: this.$route.params.id,
            }).then(res => {
                if (res.data) {
                    this.job = res.data
                } else {
                    this.job = {
                        employee_id: this.employee._id,
                        position_id: this.$route.params.id,
                    }
                }
            }).catch(err => {
                console.log(err)
            })
        },
        methods: {
            onSubmit(){
                this.job.type = 1
                this.$http.post(`${BASE_URL}/job/create`, {
                    job: this.job
                }).then(res => {
                    this.$router.push('/employee/jobs-sent')
                }).catch(err => {
                    console.log(err)
                })
            },
            onCancel(){
                this.$http.post(`${BASE_URL}/job/delete`, {
                    employee: this.employee._id,
                    position: this.$route.params.id,
                    type: 1
                }).then(res => {
                    if (res.data)
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>