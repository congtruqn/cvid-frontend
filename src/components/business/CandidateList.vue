<template>
<div class="container-xxl py-5">
            <div class="container">
                <!-- <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1> -->
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div class="row gy-1">
                        <a :href="'/business/cvid/'+index._id+'/'+position_id" target="_blank" v-for="index in cvid_list" class="job-item p-4 mb-2">
                            <div class="row">
                                <div class="col-12 d-flex align-items-center">
                                    <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                                    <div class="text-start ps-4">
                                        <h5 class="mb-3">{{index.name}}</h5>
                                        <span class="text-truncate me-3"><i class="fas fa-file-alt"></i> Điểm CV: {{index.point}}/10</span>
                                        <span class="text-truncate me-3"><i class="fas fa-building"></i> Cấp bậc: {{index.level}}</span>
                                        <span class="text-truncate me-0"><i class="far fa-page"></i>Chuyên nghành: {{index.skill}}</span>
                                    </div>
                                </div>
                            </div>
                        </a>   
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