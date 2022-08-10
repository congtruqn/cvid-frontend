<template>
<div class="container-xxl py-5">
            <div class="container">
                <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div class="row gy-1">
                        <a :href="'/business/cvid/'+index._id+'/'+position_id" target="_blank" v-for="index in cvid_list" class="job-item p-4 mb-2">
                            <div class="row">
                                <input type="checkbox" class="col-auto" v-model="selected" :value="index._id"/>
                                <div class="col-sm-11 col-md-7 d-flex align-items-center">
                                    <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                    <div class="text-start ps-4">
                                        <h5 class="mb-3">{{index.name}}</h5>
                                        <span class="text-truncate me-3"><i class="fas fa-file-alt"></i> Điểm CV: {{index.point}}/10</span>
                                        <span class="text-truncate me-3"><i class="fas fa-building"></i> Cấp bậc: {{index.level}}</span>
                                        <span class="text-truncate me-0"><i class="far fa-page"></i>Chuyên nghành: {{index.skill}}</span>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <!-- <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a> -->
                                            <a class="btn btn-primary" href="">Đặt lịch phỏng vấn</a>
                                           
                                        </div>
                                        <span class="text-truncate">Trạng thái: Chờ thanh toán</span>
                                        <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: Chưa có</small>
                                    </div>
                            </div>
                        </a>   
                    </div>
                    <div class="mt-2 d-flex justify-content-end">
                        <div class="d-flex mb-3">
                            <a class="p-1 fs-4 me-2"><i class="fw-bold">Tổng:</i> {{calculator.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}} VNĐ</a>
                            <a class="btn btn-primary" href="">Thanh toán</a>
                        </div>
                        <!-- <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: Chưa có</small> -->
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
                cvid_list: [],
                list_id: [],
                selected: []
            }
        },
        computed: {
            calculator() {
                return this.selected.length*100000
            }
        },
        methods: {
           
        },
        created(){
            this.$http.post(`${BASE_URL}/job/getforbusiness`, {
                id: JSON.parse(localStorage.getItem('business'))._id
            }).then(res => {
                res.data.forEach(job =>{
                    if (job.type == 2 && job.status == 0){
                        this.list_id.push(job.employee_id)
                    }
                })
                this.$http.post(`${BASE_URL}/employee/list/cvid`, {
                    selected: this.list_id
                }).then(res => {
                    this.cvid_list = res.data
                 
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        },
        
    }
</script>