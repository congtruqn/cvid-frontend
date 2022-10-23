<template>
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
        <div class="container">
            <div class="row gy-5 gx-4">
                <div class="col-lg-8">
                    <div class="d-flex align-items-center mb-5">
                        <img class="flex-shrink-0 img-fluid border rounded" src="../../assets/images/com-logo-2.jpg" alt="" style="width: 80px; height: 80px;">
                        <div class="text-start ps-4">
                            <h3 class="mb-3">{{position.jobtitle}}</h3>
                            <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Thời gian đăng tuyển: {{position.startdate?position.startdate.split('T')[0]:''}}</small>
                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{{position.work_location}}</span>
                            <!-- <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span>
                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span> -->
                        </div>
                    </div>

                    <div class="mb-5">
                        <h4 class="mb-3">Mô tả công việc</h4>
                        <p v-html="position.description"></p>
                        <h4 class="mb-3">Yêu cầu ứng viên</h4>
                        <h6>Cấp bậc ứng viên:</h6>
                        <ul class="list-unstyled">
                            <li v-for="item in position.levels"><i class="fa fa-angle-right text-primary me-2"></i>{{item}}.</li>
                        </ul>
                        <h6>Chuyên nghành:</h6>
                        <ul class="list-unstyled">
                            <li v-for="item in position.skills"><i class="fa fa-angle-right text-primary me-2"></i>{{item}}.</li>
                        </ul>
                        <h6>Kinh nghiệm: {{position.experience}} năm</h6>
                        <p style="white-space: pre-line;">{{ position.requirements }}</p>
                        
                    </div>
                    <div class="col-12" v-if="job.status != 1">
                        <button class="btn btn-primary w-100" type="submit" @click="onSubmit" v-if="job.type == 0 || !job.type">Ứng tuyển</button>   
                        <button class="btn btn-secondary w-100" type="submit" @click="onCancel" v-else>Hủy</button>
                    </div>
                </div>
    
                <div class="col-lg-4">
                    <div class="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
                        <h4 class="mb-4">Job Summery</h4>
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Chức vụ: {{position.name}}</p>
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Số lượng: {{position.amount}} vị trí</p>
                        <!-- <p><i class="fa fa-angle-right text-primary me-2"></i>Job Nature: Full Time</p> -->
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Mức lương:
                            {{position.min_salary == '' && position.max_salary == '' ? 'Lương thỏa thuận' 
                            : position.min_salary != '' && position.max_salary != '' ? 'Từ ' + position.min_salary + ' - ' + position.max_salary + ' triệu đồng'
                            : position.min_salary == '' && position.max_salary != '' ? 'trên ' + position.min_salary + ' triệu đồng'
                            : 'Dưới ' + position.min_salary + ' triệu đồng'}}</p>
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Địa điểm: {{position.work_location}}</p>
                        <p><i class="fa fa-angle-right text-primary me-2"></i>Môi trường làm việc: {{position.work_environment}}</p>
                    </div>
                    <div class="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
                        <h4 class="mb-4">Company Detail</h4>
                        <p class="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
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
                criteria: []
                
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/department/position/${this.$route.params.id}`)
            .then(res => {
                this.position = res.data
            }).catch(err => {
                console.log(err)
            })
            this.$http.get(`${BASE_URL}/criteria/getall`)
            .then(res => {
                this.criteria = res.data;
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
            },
            getExperience(){
                var sum = 0
                if (this.employee.skillWorking && this.employee.skillWorking.length > 0){
                this.employee.skillWorking.filter(function(company){
                    sum += ((new Date(company.to)).getTime()-(new Date(company.from)).getTime())
                    })
                }
                return Math.round(sum/15768000000)/2
            }
        }
    }
</script>