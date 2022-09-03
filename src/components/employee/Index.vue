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
        <div class="card">
            <div class="card-header text-center">
                <h1 class="text-primary">Tìm việc</h1>
            </div>
            <div class="card-body">
                <form class="row g-3" v-on:submit.prevent>
                    <div class="col-12 col-md-6">
                        <label for="inputState" class="form-label">Chuyên nghành mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <input type="text" class="form-control dropdown-toggle text-dark" id="dropdownMenuSkill" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" readonly v-model="job.skill" :disabled="job.status==1"/>
                        <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuSkill" :style="{maxHeight: '400px'}">
                            <li class="m-2"><input type="text" v-model="searchSkill" class="form-control" placeholder="Tìm kiếm"/></li>
                            <li v-for="item in filteredSkill()"  @click="job.skill=item"><a class="dropdown-item">{{item}}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label">Môi trường làm việc mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label> 
                        <select id="inputState" class="form-select" v-model="job.work_environment" :disabled="job.status==1">
                            <option value="">Chọn ...</option>
                            <option v-for="item in environments" :value="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label">Lĩnh vực mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label> 
                        <select id="inputState" class="form-select" v-model="job.work_industry" :disabled="job.status==1">
                            <option value="">Chọn ...</option>
                            <option v-for="item in industries" :value="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="inputPoint" class="form-label">Loại hình đơn vị tuyển dụng mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <select id="inputState" class="form-select" v-model="job.type_business" :disabled="job.status==1">
                            <option value="">Chọn ...</option>
                            <option v-for="item in type_businesses" :value="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="inputPoint" class="form-label">Nơi làm việc mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <select class="form-control" v-model="job.address" :disabled="job.status==1">
                            <option value="">Chọn tỉnh/thành phố</option>
                            <option v-for="province in provinces" :value='province'>{{province}}</option>
                        </select>
                    </div>
                    
                    <!-- <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity">
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div> -->
                    <div class="col-12 text-center">
                        <button type="button" class="btn btn-lg btn-primary" @click="startFindJob()" v-if="job.status==0">Tìm việc</button>
                        <button type="button" class="btn btn-lg btn-primary" @click="endFindJob()" v-if="job.status==1">Dừng tìm</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- Category End -->
                <!-- Jobs Start -->
        <div class="container-xxl py-5">
            <div class="container">
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
    var employee = JSON.parse(localStorage.getItem('employee'))
    export default {  
        data(){
            return {
                job: '',
                position: [],
                province: '',
                skill: '',
                searchSkill: '',
                work_environment: '',
                work_industry: '',
                type_businesses: [],
                majors: [],
                provinces: [],
                environments: [],
                industries: []
            }
        },
        methods: {
            filteredSkill(){
                var skills = new Set([])
                this.majors.forEach(element => {
                    element.skills.forEach(skill => {
                        if (skill.toLowerCase().indexOf(this.searchSkill.toLowerCase()) != -1)
                        {
                            skills.add(skill)
                        }
                    })
                });
                return skills
            },
            startFindJob(){
                this.position = []
                this.job.status = 1
                this.$http.post(`${BASE_URL}/employee/findJob`,{
                    id: employee._id,
                    job: this.job
                })
                .then(res => {
                    this.position = res.data
                })
            },
            endFindJob(){
                this.position = []
                this.job.status = 0
            }
        },
        created(){
            this.$http.post(`${BASE_URL}/employee/me`,{
                token: localStorage.getItem('token')
            })
            .then(res => {
                let user = res.data.user
                if (user.job){
                    this.job = user.job
                } else {
                    this.job = {
                        skill: user.skill,
                        address: user.province,
                        work_industry: '',
                        work_environment: '',
                        type_business: '',
                        status: 0
                    }
                }
            })
            .catch(function (error) {
                console.error(error.response);
            });
            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.majors = response.data
            })

            this.$http.get(`${BASE_URL}/province/list`)
            .then(response => {
                this.provinces = new Set(response.data.map(item => item.province))
              
            })
            this.$http.get(`${BASE_URL}/typebusiness/getall`)
            .then(response => {
                this.type_businesses = response.data
              
            })
            this.$http.get(`${BASE_URL}/industry/getall`)
            .then(response => {
                this.industries = response.data
              
            })
            this.$http.get(`${BASE_URL}/environment/getall`)
            .then(response => {
                this.environments = response.data
              
            })
            .catch(function (error) {
                console.error(error.response);
            });
        }
    }
  
</script>
