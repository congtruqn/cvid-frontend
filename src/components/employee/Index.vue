<template>
    <div>
        <!-- Search End -->
        <div class="card mt-4">
            <div class="card-header text-center">
                <h1 class="text-primary">Tìm việc</h1>
            </div>
            <div class="card-body">
                <form class="row g-3" v-on:submit.prevent>
                    <div class="col-12 col-md-4">
                        <label for="inputState" class="form-label">Chuyên nghành mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <input type="text" class="form-control dropdown-toggle text-dark w-100" id="dropdownMenuSkill" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" readonly v-model="job.skill" :disabled="job.status==1"/>
                        <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuSkill" :style="{maxHeight: '400px'}">
                            <li class="m-2"><input type="text" v-model="searchSkill" class="form-control" placeholder="Tìm kiếm"/></li>
                            <li v-for="item in filteredSkill()"  @click="job.skill=item"><a class="dropdown-item">{{item}}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="inputState" class="form-label">Chức danh mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <input type="text" class="form-control dropdown-toggle text-dark" id="dropdownMenuJobTitle" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" readonly v-model="job.jobtitle" :disabled="job.status==1"/>
                        <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuJobTitle" :style="{maxHeight: '400px'}">
                            <li class="m-2"><input type="text" v-model="searchJobTitle" class="form-control" placeholder="Tìm kiếm"/></li>
                            <li v-for="item in filteredJobTitle()"  @click="job.jobtitle=item"><a class="dropdown-item">{{item}}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label">Chức vụ <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <select class="form-select" v-model="job.position" :disabled="job.status==1">
                            <option value="">Tất cả chức vụ</option>
                            <option v-for="item in positions" :value="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label">Môi trường làm việc mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label> 
                        <select class="form-select" v-model="job.work_environment" :disabled="job.status==1">
                            <option value="">Tất cả môi trường làm việc</option>
                            <option v-for="item in environments" :value="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label">Lĩnh vực mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label> 
                        <select class="form-select" v-model="job.work_industry" :disabled="job.status==1">
                            <option value="">Tất cả lĩnh vực</option>
                            <option v-for="item in industries" :value="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label class="form-label">Loại hình đơn vị tuyển dụng mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <select class="form-select" v-model="job.type_business" :disabled="job.status==1">
                            <option value="">Tất cả loại hình</option>
                            <option v-for="item in type_businesses" :value="item.name">{{item.name}}</option>
                        </select>
                    </div>
                    <div class="col-12 col-md-4">
                        <label for="inputPoint" class="form-label">Nơi làm việc mong muốn <i class="fas fa-question-circle" title="Giải thích"></i></label>
                        <select class="form-control" v-model="job.address" :disabled="job.status==1">
                            <option value="">Tất cả tỉnh/thành phố</option>
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
                        <button type="button" class="btn btn-lg btn-primary" @click="beforeFindJob()" v-if="job.status==0">Tìm việc</button>
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
                            <div class="job-item p-4 mb-4" v-for="item in result">
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
        <button type="button" class="d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="mybutton"></button>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Tìm việc ở xa</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Bạn đang tìm việc ở tình thành khác với thông tin đăng kí. Vui lòng xác nhận lại một số thông tin sau:
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Chỗ ở nơi làm mới:</label>
                    <input type="email" class="form-control" placeholder="Nhập chỗ ở mới">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Tình trạng hôn nhân:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Chọn tình trạng hôn nhân</option>
                        <option value="1">Đã kết hôn</option>
                        <option value="2">Chưa kết hôn</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phương tiện đi lại:</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Chọn phương tiện</option>
                        <option value="1">Phương tiện công cộng</option>
                        <option value="2">Xe máy</option>
                        <option value="3">Ô tô</option>
                    </select>
                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Huỷ</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="startFindJob()">Tìm việc</button>
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
                job: '',
                result: [],
                province: '',
                skill: '',
                searchSkill: '',
                searchJobTitle: '',
                jobtitle: '',
                work_environment: '',
                work_industry: '',
                jobtitles: [],
                type_businesses: [],
                majors: [],
                provinces: [],
                environments: [],
                industries: [],
                positions: [],
                employee: ''
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
            filteredJobTitle(){
                return this.jobtitles.filter(element => {
                    if (element.name.toLowerCase().indexOf(this.searchJobTitle.toLowerCase()) != -1){
                        return true
                    }
                }).map(item => item.name);
            },
            beforeFindJob(){
                if (this.job.address != "" && this.job.address != this.employee.province){
                    var element = document.getElementById("mybutton");
                    element.click()
                } else {
                    this.startFindJob()
                }
            },
            startFindJob(){
                this.result = []
                this.job.status = 1
                this.$http.post(`${BASE_URL}/employee/findJob`,{
                    id: this.employee._id,
                    job: this.job
                })
                .then(res => {
                    this.result = res.data
                })
            },
            endFindJob(){
                this.job.status = 0
                this.$http.post(`${BASE_URL}/employee/findJob`,{
                    id: this.employee._id,
                    job: this.job
                })
                .then(res => {
                    this.result = []
                })
            }
        },
        created(){
            this.$http.post(`${BASE_URL}/employee/me`,{
                token: localStorage.getItem('token')
            })
            .then(res => {
                this.employee = res.data.user
                if (this.employee.job){
                    this.job = this.employee.job
                } else {
                    this.job = {
                        skill: this.employee.skill,
                        address: this.employee.province,
                        jobtitle: '',
                        work_industry: '',
                        work_environment: '',
                        type_business: '',
                        position: '',
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
            this.$http.get(`${BASE_URL}/position/getall`)
            .then(response => {
                this.positions = response.data
              
            })
            this.$http.get(`${BASE_URL}/jobtitle/getall`)
            .then(response => {
                this.jobtitles = response.data
              
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
