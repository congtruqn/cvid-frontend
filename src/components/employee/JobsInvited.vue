<template>
<div class="container-xxl py-5">
            <div class="container">
                <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="job-item p-4 mb-4" v-for="item in position">
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
                                            <!-- <div v-if="item.schedule">
                                                <span class="text-truncate me-3">
                                                    <i class="fa fa-mail text-primary me-2"></i>
                                                </span>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="col-sm-11 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <button type="button" class="btn btn-primary">Xác nhận</button>
                                        </div>
                                        <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Lịch phỏng vấn: {{item.schedule?item.schedule.replace('T', ' '):'Chưa có'}}</small>
                                    </div>
                                    <!-- <div class="form-check col-sm-1 col-md-1 d-flex align-items-center justify-content-center">
                                        <input type="checkbox" class="form-check-input" v-model="selected" :value="index._id" 
                                        v-for="item in job_list" v-if="item.employee_id == index._id && item.schedule"/>
                                    </div> -->
                                </a>
                            </div>
                            
                            <!-- <a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a> -->
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
            }
        },
        methods: {
           
        },
        created(){
            this.$http.post(`${BASE_URL}/job/getforemployee`, {
                id: JSON.parse(localStorage.getItem('employee'))._id
            }).then(res => {
                res.data.forEach(job =>{
                    if (job.type == 2){
                        this.job_list.push(job)
                    }
                })
                this.$http.post(`${BASE_URL}/department/position/list`, {
                    selected: this.job_list.map((obj) => obj.position_id)
                }).then(res => {
                    this.position = this.job_list.map(t1 => ({...t1, ...res.data.find(t2 => t2._id === t1.position_id)}))
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        },
        
    }
</script>