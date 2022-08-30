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
                        <label for="inputState" class="form-label">Chuyên nghành</label>
                        <input type="text" class="form-control dropdown-toggle" id="dropdownMenuSkill" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" readonly v-model="skill"/>
                        <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuSkill" :style="{maxHeight: '400px'}">
                            <li class="m-2"><input type="text" v-model="searchSkill" class="form-control" placeholder="Tìm kiếm"/></li>
                            <li v-for="item in filteredSkill()"  @click="skill=item"><a class="dropdown-item">{{item}}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6">
                        <label class="form-label">Môi trường làm việc</label> 
                        <input type="text" class="form-control dropdown-toggle" id="dropdownMenuEnvironment" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" v-model="work_environment">
                        <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuEnvironment" :style="{maxHeight: '400px'}">
                            <li @click="work_environment='Văn phòng'"><a class="dropdown-item">Văn phòng</a></li>
                            <li @click="work_environment='Công trường'"><a class="dropdown-item">Công trường</a></li>
                            <li @click="work_environment='Nhà máy'"><a class="dropdown-item">Nhà máy</a></li>
                            <li @click="work_environment='Dàn khoan'"><a class="dropdown-item">Dàn khoan</a></li>
                             
                        </ul>
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="inputPoint" class="form-label">Loại hình đơn vị tuyển dụng</label>
                        <input type="number" class="form-control" id="inputPoint"  max="10" min="0">
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="inputPoint" class="form-label">Địa điểm</label>
                        <select class="form-control" v-model="province" required>
                            <option value="" disabled>Chọn tỉnh/thành phố</option>
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
                        <button type="button" class="btn btn-lg btn-primary" @click="findJob()">Tìm việc</button>
                    </div>
                </form>
            </div>
        </div>
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
                provinces: [],
                province: '',
                skill: '',
                searchSkill: '',
                work_environment: '',
                majors: [],
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
            findJob(){
                this.position = []
                this.$http.post(`${BASE_URL}/employee/findPosition`,{
                    major: this.employee.major,
                    skill: this.skill
                })
                .then(res => {
                    res.data.forEach(item => {
                        item.position.forEach(position => {
                            if (position.skills.includes(this.skill) && position.status == 1) {
                                this.position.push(position)
                            }
                        })
                    })
                })
            }
        },
        created(){
            this.skill = this.employee.skill
            // this.$http.post(`${BASE_URL}/employee/findPosition`,{
            //     major: this.employee.major,
            //     skill: this.employee.skill
            // })
            // .then(res => {
            //     res.data.forEach(item => {
            //         item.position.forEach(position => {
            //             if ((position.skills.includes(this.employee.skill) || position.majors.includes(this.employee.major)) && position.status == 1) {
            //                 this.position.push(position)
            //             }
            //         })
            //     })
            // }) 
            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.majors = response.data
            })
            this.$http.get(`${BASE_URL}/province/list`)
            .then(response => {
                this.provinces = new Set(response.data.map(item => item.province))
              
            })
            // .catch(function (error) {
            //     console.error(error.response);
            // });
        }
    }
  
</script>
