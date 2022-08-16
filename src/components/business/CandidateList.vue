<template>
<div class="container-xxl py-5">
    <div class="container">
        <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li class="nav-item">
                    <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                        <h6 class="mt-n1 mb-0">Chưa thanh toán</h6>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                        <h6 class="mt-n1 mb-0">Đã thanh toán</h6>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                        <h6 class="mt-n1 mb-0">Part Time</h6>
                    </a>
                </li> -->
            </ul>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="row gy-1">
                    <a :href="'/business/cvid/'+index._id" target="_blank" v-for="index in cvid_list" v-if="index.status == 0" class="job-item p-4 mb-2">
                        <div class="row">
                            
                            <div class="col-sm-12 col-md-7 d-flex align-items-center">
                                <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">{{index.name}}</h5>
                                    <span class="text-truncate me-3"><i class="fas fa-file-alt"></i> Điểm CV: {{index.point}}/10</span>
                                    <span class="text-truncate me-3"><i class="fas fa-building"></i> Cấp bậc: {{index.level}}</span>
                                    <span class="text-truncate me-0"><i class="far fa-page"></i>Chuyên nghành: {{index.skill}}</span>
                                </div>
                            </div>
                            <div class="col-sm-11 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <!-- <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a> -->
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ScheduleModal" @click.prevent="employee_id = index._id" v-if="!index.schedule">Đặt lịch phỏng vấn</button>
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#ScheduleModal" @click.prevent="employee_id = index._id" v-if="index.schedule">Thay đổi lịch phỏng vấn</button>
                                </div>
                                <span class="text-truncate">100.000 VNĐ</span>
                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: {{index.schedule?index.schedule.replace('T', ' '):'Chưa có'}}</small>
                            </div>
                            <div class="form-check col-sm-1 col-md-1 d-flex align-items-center justify-content-center">
                                <input type="checkbox" class="form-check-input" v-model="selected" :value="index._id" 
                                v-if="index.schedule"/>
                            </div>
                        </div>
                    </a>   
                </div>
                <div class="mt-2 d-flex justify-content-end">
                    <div class="d-flex mb-3">
                        <a class="p-1 fs-4 me-2"><i class="fw-bold">Tổng:</i> {{calculator.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}} VNĐ</a>
                        <a class="btn btn-primary" @click="pay">Thanh toán</a>
                    </div>
                    <!-- <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: Chưa có</small> -->
                </div>
                </div>
                <div id="tab-2" class="tab-pane fade show p-0">
                <div class="row gy-1">
                    <a :href="'/business/cvid/'+index._id" target="_blank" v-for="index in cvid_list" v-if="index.status == 1" class="job-item p-4 mb-2">
                        <div class="row">
                            <div class="col-sm-12 col-md-7 d-flex align-items-center">
                                <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">{{index.name}} <span class="text-primary"> - {{index.username}}</span></h5>
                                    <span class="text-truncate me-3"><i class="fas fa-file-alt"></i> Điểm CV: {{index.point}}/10</span>
                                    <span class="text-truncate me-3"><i class="fas fa-building"></i> Cấp bậc: {{index.level}}</span>
                                    <span class="text-truncate me-3"><i class="far fa-page"></i>Chuyên nghành: {{index.skill}}</span>
                                    <span class="text-truncate me-3"><i class="far fa-email"></i>Email: {{index.email}}</span>
                                    <span class="text-truncate me-3"><i class="far fa-email"></i>Địa chỉ: {{index.address + ', ' + index.ward + ', ' + index.district + ', ' + index.province}}</span>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <!-- <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a> -->
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#ScheduleModal" @click.prevent="employee_id = index._id">Thay đổi lịch phỏng vấn</button>
                                </div>
                                
                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: {{index.schedule?index.schedule.replace('T', ' '):'Chưa có'}}</small>
                            </div>
                        </div>
                    </a>   
                </div>
                </div>
            </div>
            
        </div>
        <div class="modal fade" id="ScheduleModal" tabindex="-1" aria-labelledby="ScheduleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ScheduleModalLabel">Đặt lịch</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label class="form-label">Thời gian:</label>
                    <input type="datetime-local" class="form-control" v-model="schedule" :min="new Date().toISOString().substr(0, 16)">
                </div>
                <div class="mb-3">
                    <label class="form-label">Địa chỉ:</label>
                    <input type="text" class="form-control" v-model="address">
                </div>
                <div class="mb-3">
                    <label class="form-label">Người liên hệ:</label>
                    <input type="tel" class="form-control" v-model="contact">
                </div>
                <div class="mb-3">
                    <label class="form-label">Số điện thoại:</label>
                    <input type="tel" class="form-control" v-model="phone">
                </div>
                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="mb-3">
                    <label class="form-label">Yêu cầu:</label>
                    <input type="text" class="form-control" v-model="email">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="setSchedule">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
</template>
<script>
const {BASE_URL} =  require('../../utils/config')
    export default {
        data() {
            return {
                employee_id: '',
                cvid_list: [],
                job_list: [],
                selected: [],
                schedule: '',
                phone: '',
                email: ''
            }
        },
        computed: {
            calculator() {
                return this.selected.length*100000
            }
        },
        methods: {
            setSchedule() {
                if (this.schedule == '' || this.phone == '' || this.email == ''){
                    Swal.fire({
                        icon: 'info',
                        title: 'Thất bại',
                        text: 'Vui lòng nhập các trường bắt buộc',
                        // confirmButtonColor: 'var(--light)',
                        confirmButtonText: 'Quay lại',
                    });
                }
                this.cvid_list.forEach(item =>{
                    if (item._id == this.employee_id){
                        item.schedule = this.schedule
                        item.phone = this.phone
                        item.email = this.email
                    }
                })
                this.schedule = ''
            },
            pay() {
                var item = [];
                this.job_list.forEach(el => {
                    if (this.selected.includes(el.employee_id)){
                        item.push(el)
                    }
                })
                if (item.length == 0){
                    Swal.fire({
                        icon: 'info',
                        title: 'Thất bại',
                        text: 'Vui lòng chọn ứng viên',
                        // confirmButtonColor: 'var(--light)',
                        confirmButtonText: 'Quay lại',
                    });
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Xác nhận thanh toán',
                        // text: 'Vui lòng chọn ứng viên',
                        confirmButtonColor: 'var(--primary)',
                        showCancelButton: true,
                        confirmButtonText: 'Xác nhận',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.$http.post(`${BASE_URL}/job/pay`, {
                                job_list: item
                            }).then(res => {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Thanh toán thành công',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                window.location.reload();
                            }).catch(err => {
                                console.log(err)
                            })
                        }
                    });
                }
            }
        },
        created(){
            this.$http.post(`${BASE_URL}/job/getforbusiness`, {
                id: JSON.parse(localStorage.getItem('business'))._id
            }).then(res => {
                res.data.forEach(job =>{
                    if (job.type == 2){
                        this.job_list.push(job)
                    }
                })
                this.$http.post(`${BASE_URL}/employee/list/cvid`, {
                    selected: this.job_list.map((obj) => obj.employee_id)
                }).then(res => {
                    this.cvid_list = this.job_list.map(t1 => ({...t1, ...res.data.find(t2 => t2._id === t1.employee_id)}))
                }).catch(err => {
                    console.log(err)
                })
                
            }).catch(err => {
                console.log(err)
            })
        },
        
    }
</script>