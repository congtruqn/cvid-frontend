<template>
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
        <div class="container">
            <div class="row gy-5 gx-4">
                <div class="col-lg-8">
                    <div class="d-flex align-items-center mb-5">
                        <img class="flex-shrink-0 img-fluid border rounded" src="../../assets/images/com-logo-2.jpg" alt="" style="width: 80px; height: 80px;">
                        <div class="text-start ps-4">
                            <h3 class="mb-3">{{position.name}}</h3>
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
                            <li v-for="item in position.requirements.split('. ')" v-if="item != ''"><i class="fa fa-angle-right text-primary me-2"></i>{{item}}.</li>
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
                    <!-- <div class="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
                        <h4 class="mb-4">Company Detail</h4>
                        <p class="m-0">Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum sadipscing elitr vero dolores. Lorem dolore elitr justo et no gubergren sadipscing, ipsum et takimata aliquyam et rebum est ipsum lorem diam. Et lorem magna eirmod est et et sanctus et, kasd clita labore.</p>
                    </div> -->
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
                position: ''
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/department/position/${this.$route.params.id}`).then(res => {
                this.position = res.data
               
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>