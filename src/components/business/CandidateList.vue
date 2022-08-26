<template>
<div class="container-xxl py-5">
    <div class="container">
        <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
        <div class="tab-class wow fadeInUp" data-wow-delay="0.3s">
            <ul class="nav nav-pills position-relative start-50 translate-middle d-inline-flex border-bottom mb-5">
                <li class="nav-item">
                    <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                        <h6 class="mt-n1 mb-0">CVID đã chọn</h6>
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
                <div class="card mb-3" v-for="department in departments">
                    <h5 class="card-header bg-primary text-white">
                        {{department.name}}
                    </h5>
                    <div class="card-body mx-2">
                        <div class="card mb-2" v-for="position in department.position" v-if="job_list.findIndex(x => x.position_id == position._id) != -1">
                            <div class="card-header">
                                {{position.name}}
                            </div>
                            <div class="card-body row">
                                <a :href="'/business/cvid/'+cv._id" target="_blank" class="card-body border col-md-6 mb-1" v-for="cv in job_list" v-if="cv.position_id == position._id">
                                <h5 class="card-title d-inline">{{cv.name}}<span class="badge bg-secondary float-end">{{cv.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}} VND</span></h5>
                                <p class="card-text text-primary mb-0">{{cv.position}}</p>
                                <p class="card-text text-primary mb-0">Điểm CV: {{cv.point}}/10</p>
                                <p class="card-text text-primary mb-0">Trường: {{cv.school}}</p>
                                <p class="card-text text-primary mb-0">Chuyên nghành: {{cv.skill}}</p>
                                <p class="card-text text-primary mb-0">Đánh giá: {{cv.review}}</p>
                                <p class="card-text text-primary" v-if="cv.schedule"><i class="far fa-calendar-alt text-primary my-2"></i> Lịch phỏng vấn: {{cv.schedule?cv.schedule.replace('T', ' '):'Chưa có'}}</p>
                                <button type="button" class="btn btn-light me-2 text-primary" @click="(e) => {cancelCVID(cv, e)}">Hủy</button>
                                <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ScheduleModal" @click.prevent="employee_id = cv._id" v-if="!cv.schedule">Đặt lịch phỏng vấn</button>
                                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#ScheduleModal" @click.prevent="employee_id = cv._id" v-if="cv.schedule">Thay đổi lịch phỏng vấn</button>
                                <input type="checkbox" class="form-check-input float-end me-2 p-3" v-model="selected" :value="cv._id" @change="onChange($event, cv.price)">
                                <span class="badge bg-secondary float-end me-2 p-3">{{cv.rating}}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-2 d-flex justify-content-end">
                    <div class="d-flex mb-3">
                        <a class="p-1 fs-4 me-2"><i class="fw-bold">Tổng:</i> {{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}} VNĐ</a>
                        <a class="btn btn-primary" @click="pay">Thanh toán</a>
                    </div>
                    <!-- <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: Chưa có</small> -->
                </div>
                </div>
                <div id="tab-2" class="tab-pane fade show p-0">
                <div class="row gy-1">
                    <a :href="'/business/cvid/'+index._id" target="_blank" v-for="index in cvid_list" v-if="index.status == 1" class="job-item px-3 pt-3 mb-2">
                        <div class="row">
                            <div class="col-sm-12 col-md-7 d-flex">
                                <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                <ul class="text-start overflow-auto">
                                    <h5 class="mb-2">{{index.name}}</h5>
                                    <li class="text-truncate">Điểm CV: {{index.point}}/10</li>
                                    <li class="text-truncate"><i class="fas fa-phone text-primary me-1"></i> {{index.username}}</li>
                                    <li class="text-truncate"><i class="fas fa-envelope text-primary me-1"></i>{{index.email}}</li>
                                    <li class="text-truncate"><i class="fas fa-map-marker text-primary me-1"></i>{{index.address+', '+index.ward+', '+index.district+', '+index.province}}</li>
                                </ul>
                                
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-2">
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
                    <label class="form-label">Địa điểm:</label>
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
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Yêu cầu:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="note"></textarea>
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
                business: JSON.parse(localStorage.getItem('business')),
                departments: [],
                employee_id: '',
                cvid_list: [],
                job_list: [],
                selected: [],
                schedule: '',
                phone: '',
                email: '',
                address: '',
                contact: '',
                note: '',
                totalPrice: 0
            }
        },
        computed: {
            calculator() {
                return this.selected.length*100000
            },
        },
        methods: {
            onChange(e, price) {
                if (e.target.checked == true) {
                    this.totalPrice += price
                };
                if (e.target.checked == false ) {
                    this.totalPrice -= price
                }
            },
            cancelCVID(cv, e){
                e.preventDefault()
                var job = {
                    employee_id: cv._id,
                    position_id: cv.position_id,
                    type: cv.type==2?0:cv.type,
                    confirm: (cv.type == 1)?0:cv.confirm
                }
                this.job_list.forEach((el, index) => {
                    if (cv._id == el._id){
                        this.job_list.splice(index, 1)
                    }
                })
                this.$http.post(`${BASE_URL}/job/create`, {
                    job: job
                }).then(res => {
                    if (res.data){
                    }
                    
                }).catch(err => {
                    console.log(err)
                })
            },
            setSchedule() {
                if (this.schedule == '' || this.phone == '' || this.email == '' || this.address == '' || this.contact == ''){
                    Swal.fire({
                        icon: 'info',
                        title: 'Thất bại',
                        text: 'Vui lòng nhập các trường bắt buộc',
                        // confirmButtonColor: 'var(--light)',
                        confirmButtonText: 'Quay lại',
                    });
                    return;
                }
                this.job_list.forEach(item =>{
                    if (item._id == this.employee_id){
                        item.schedule = this.schedule
                        item.address = this.address
                        item.phone = this.phone
                        item.email = this.email
                        item.contact = this.contact
                        item.note = this.note
                    }
                })
                this.schedule = ''
            },
            pay() {
                if (this.selected.length == 0){
                    Swal.fire({
                        icon: 'info',
                        title: 'Thất bại',
                        text: 'Vui lòng chọn ứng viên',
                        // confirmButtonColor: 'var(--light)',
                        confirmButtonText: 'Quay lại',
                    });
                    return;
                }
                var item = [];
                this.job_list.forEach(el => {
                    if (this.selected.includes(el._id) && el.schedule){
                        item.push(el)
                    }
                })

                if (item.length < this.selected.length){
                    Swal.fire({
                        icon: 'info',
                        title: 'Thất bại',
                        text: 'Vui lòng đặt lịch phỏng vấn cho ứng viên',
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
        async created(){
            // this.$http.post(`${BASE_URL}/job/getforbusiness`, {
            //     id: JSON.parse(localStorage.getItem('business')).username
            // }).then(res => {
            //     res.data.forEach(job =>{
            //         if (job.type == 2){
            //             this.job_list.push(job)
            //         }
            //     })
            //     this.$http.post(`${BASE_URL}/employee/list/cvid`, {
            //         selected: this.job_list.map((obj) => obj.employee_id)
            //     }).then(res => {
            //         this.cvid_list = this.job_list.map(t1 => ({...t1, ...res.data.find(t2 => t2._id === t1.employee_id)}))
            //     }).catch(err => {
            //         console.log(err)
            //     })
                
            // }).catch(err => {
            //     console.log(err)
            // })
            await this.$http.get(`${BASE_URL}/department/list/${this.business.username}`)
            .then(res => {
                this.departments = res.data
                this.departments.forEach(department => {
                    department.position.forEach(position => {
                        this.$http.post(`${BASE_URL}/job/getcvidforposition`, {
                            id: position._id
                        }).then(res => {
                            const job_list = res.data.job_list 
                            let cvid = job_list.map(t1 => ({...t1, ...res.data.cv_list.find(t2 => t2._id == t1.employee_id)}))
                            cvid.forEach(item => {
                                if (item.type == 1 && item.confirm == 1){
                                    item.price = 0
                                    this.job_list.push(item)
                                } else if (item.type == 2 && item.status == 0){
                                    item.price = 100000
                                    this.job_list.push(item)
                                }
                            })
                        })
                    })
                })
                console.log(this.departments)
            }).catch(err => {
                console.log(err)
            })
            
        },
        
    }
</script>