<template>
<div class="container-xxl py-5">
    <div class="container">
        <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
        <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li class="nav-item">
                    <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                        <h6 class="mt-n1 mb-0">Danh sách đã chọn</h6>
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
                    <div class="job-item px-4 pt-3 mb-4" v-for="item in position" v-if="item.status == 0"> 
                        <a class="row g-4" :href="'/employee/job-detail/'+item._id">
                            <div class="col-sm-12 col-md-7 d-flex align-items-center">
                                <img class="flex-shrink-0 img-fluid border rounded" src="@/assets/images/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                <div class="text-start ps-4">
                                    <h5 class="mb-2">{{item.name}}</h5>
                                    <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{{item.work_location}}</span>
                                    <!-- <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span> -->
                                    <span class="text-truncate me-3">
                                        <i class="far fa-money-bill-alt text-primary me-2"></i>
                                        {{item.min_salary == '' && item.max_salary == '' ? 'Lương thỏa thuận' 
                                        : item.min_salary != '' && item.max_salary != '' ? 'Từ ' + item.min_salary + ' - ' + item.max_salary + ' triệu đồng'
                                        : item.min_salary == '' && item.max_salary != '' ? 'trên ' + item.min_salary + ' triệu đồng'
                                        : 'Dưới ' + item.min_salary + ' triệu đồng'}}
                                    </span>
                                    <ul class="text-start overflow-auto">
                                        <li class="text-truncate ms-n4">Yêu cầu chuyên nghành:</li>
                                        <li class="" v-for="skill in item.skills">{{skill}}</li>
                                        <!-- <li class="text-truncate"><i class="fas fa-phone text-primary me-1"></i> {{index.username}}</li>
                                        <li class="text-truncate"><i class="fas fa-envelope text-primary me-1"></i>{{index.email}}</li>
                                        <li class="text-truncate"><i class="fas fa-map-marker text-primary me-1"></i>{{index.address+', '+index.ward+', '+index.district+', '+index.province}}</li> -->
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-11 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <!-- <div class="d-flex mb-3">
                                    <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                    <a class="btn btn-primary" href="">Apply Now</a>
                                    
                                </div> -->
                                <!-- <span class="text-truncate">Trạng thái: Chờ thanh toán</span> -->
                                <div class="d-flex mb-3">
                                    <button type="button" class="btn btn-light text-primary">Hủy</button>
                                </div>
                                <span class="text-truncate">100.000 VNĐ</span>
                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: {{item.schedule?item.schedule.replace('T', ' '):'Chưa có'}}</small>
                            </div>
                            <div class="form-check col-sm-1 col-md-1 d-flex align-items-center justify-content-center">
                                <input type="checkbox" class="form-check-input" v-model="selected" :value="item._id" 
                                />
                            </div>
                        </a>
                    </div>
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
                    <div class="job-item p-4 mb-4" v-for="item in position" v-if="item.status == 1"> 
                        <a class="row g-4" :href="'/employee/job-detail/'+item._id">
                            <div class="col-sm-12 col-md-7 d-flex align-items-center">
                                <img class="flex-shrink-0 img-fluid border rounded" src="@/assets/images/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">{{item.name}}</h5>
                                    <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{{item.work_location}}</span>
                                    <!-- <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span> -->
                                    <span class="text-truncate me-3">
                                        <i class="far fa-money-bill-alt text-primary me-2"></i>
                                        {{item.min_salary == '' && item.max_salary == '' ? 'Lương thỏa thuận' 
                                        : item.min_salary != '' && item.max_salary != '' ? 'Từ ' + item.min_salary + ' - ' + item.max_salary + ' triệu đồng'
                                        : item.min_salary == '' && item.max_salary != '' ? 'trên ' + item.min_salary + ' triệu đồng'
                                        : 'Dưới ' + item.min_salary + ' triệu đồng'}}
                                    </span>
                                    
                                </div>
                            </div>
                            <div class="col-sm-11 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <!-- <div class="d-flex mb-3">
                                    <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                    <a class="btn btn-primary" href="">Apply Now</a>
                                    
                                </div> -->
                                <!-- <span class="text-truncate">Trạng thái: Chờ thanh toán</span> -->
                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: {{item.schedule?item.schedule.replace('T', ' '):'Chưa có'}}</small>
                            </div>
                            <div class="form-check col-sm-1 col-md-1 d-flex align-items-center justify-content-center">
                                <input type="checkbox" class="form-check-input" v-model="selected" :value="item._id" 
                                v-if="item.schedule"/>
                            </div>
                        </a>
                    </div>
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
                position: [],
                job_list: [],
                price: 1000000,
                selected: []
            }
        },
        computed: {
            calculator() {
                return this.selected.length*100000
            }
        },
        methods: {
           pay(){

           }
        },
        created(){
            this.$http.post(`${BASE_URL}/job/getforemployee`, {
                id: JSON.parse(localStorage.getItem('employee'))._id
            }).then(res => {
               
                res.data.forEach(job =>{
                    if (job.type == 1){
                        this.job_list.push(job)
                       
                    }
                })
                this.$http.post(`${BASE_URL}/department/position/list`, {
                    selected: this.job_list.map((obj) => obj.position_id)
                }).then(res => {
                    this.position = this.job_list.map(t1 => ({...t1, ...res.data.find(t2 => t2._id === t1.position_id)}))
                   console.log(this.position)
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        },
        
    }
</script>