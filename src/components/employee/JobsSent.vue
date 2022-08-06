<template>
<div class="container-xxl py-5">
            <div class="container">
                <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="job-item p-4 mb-4" v-for="item in position">
                                <a class="row g-4" :href="'/employee/job-detail/'+item._id">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
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
                list_id: [],
            }
        },
        methods: {
           
        },
        created(){
            this.$http.post(`${BASE_URL}/job/getforemployee`, {
                id: JSON.parse(localStorage.getItem('employee'))._id
            }).then(res => {
               
                res.data.forEach(job =>{
                    if (job.type == 1){
                        this.list_id.push(job.position_id)
                       
                    }
                })
                this.$http.post(`${BASE_URL}/department/position/list`, {
                    selected: this.list_id
                }).then(res => {
                    this.position = res.data
                   
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
        },
        
    }
</script>