<template>
    <div>
        <!-- Carousel Start -->
        <div class="container-fluid p-0">
            <div class="">
                <div class="owl-carousel-item position-relative">
                    <img class="img-fluid" src="@/assets/images/carousel-1.jpg" alt="">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(43, 57, 64, .5);">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-3 text-white animated slideInDown mb-4">Find The Perfect Job That You Deserved</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                                    <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Carousel End -->
        <!-- Search Start -->
        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <input type="text" class="form-control border-0" placeholder="Keyword" />
                            </div>
                            <!-- <div class="col-md-4">
                                <select class="form-select border-0">
                                    <option selected>Category</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0">
                                    <option selected>Location</option>
                                    <option v-for="province in provinces" :value="province">{{province}}</option>
                                </select>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Search End -->
    
        <!-- Category End -->
                <!-- Jobs Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
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
                            
                            <a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Jobs End -->
    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    export default {  
        data(){
            return {
                employee: JSON.parse(localStorage.getItem('employee')),
                position: [],
                provinces: '',
            }
        },
        created(){
            this.$http.post(`${BASE_URL}/employee/findPosition`,{
                major: this.employee.major,
                skill: this.employee.skill
            })
            .then(res => {
                res.data.forEach(item => {
                    item.position.forEach(position => {
                        if (position.skills.includes(this.employee.skill) || position.majors.includes(this.employee.major)) {
                            this.position.push(position)
                        }
                    })
                })
            }) 
            // this.$http.get(`${BASE_URL}/province/list`)
            // .then(response => {
            //     this.provinces = response.data;
            //     this.provinces = new Set(this.provinces.map(item => item.province))
              
            // })
            // .catch(function (error) {
            //     console.error(error.response);
            // });
        }
    }
  
</script>
