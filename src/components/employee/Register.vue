<template>

    <section class="h-100 bg-dark">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
            <div class="card card-registration my-4">
            <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo" class="img-fluid"
                    style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                </div>
                <div class="col-xl-6  needs-validation">
                <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Đăng kí tài khoản CVID</h3>
                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="name" required/>
                        <label class="form-label" for="form3Example1m">Họ và tên</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="form-floating">
                        <input @click="focus" type="text" class="form-control" minlength="9" v-model="username" required />
                        <label class="form-label">Số điện thoại</label>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="form-floating">
                        <input @click="focus" type="date" class="form-control" v-model="birthdate" required :max="new Date().toISOString().substr(0, 10)"/>
                        <label class="form-label">Ngày, tháng, năm sinh</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="form-floating">
                            <select @click="focus" class="form-select" v-model="gender" required>
                                <option value="" disabled>Chọn giới tính</option>
                                <option value='Nam'>Nam</option>
                                <option value='Nữ'>Nữ</option>
                                <option value='Khác'>Khác</option>
                            </select>
                            <label class="form-label">Giới tính</label>
                        </div>
                    </div>
                    
                    <div class="mb-3">
                        <div class="form-floating">
                        <input @click="focus" type="email" class="form-control" v-model="email" required/>
                        <label class="form-label">Email</label>
                        </div>
                    </div>
                    </div>

                    <div class="mb-3 form-floating">
                        <select @click="focus" class="form-select" v-model="level" required>
                            <option value="" disabled>Chọn cấp bậc</option>
                            <option value="Phổ thông">Phổ thông</option>
                            <option value="Sơ cấp">Sơ cấp</option>
                            <option value="Trung cấp">Trung cấp</option>
                            <option value="Cao đẳng">Cao đẳng</option>
                            <option value="Đại học">Đại học</option>
                            <option value="Chuyên gia">Chuyên gia</option>
                        </select>
                        <label class="form-label">Cấp bậc</label>
                    </div>

                    <div class="mb-3 form-floating">
                        <input type="text" class="form-select dropdown-toggle text-dark w-100" id="dropdownMenuSkill" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" readonly v-model="skill"/>
                        <ul class="dropdown-menu overflow-auto w-100" aria-labelledby="dropdownMenuSkill" :style="{maxHeight: '300px'}">
                            <li class="m-2"><input type="text" v-model="searchSkill" class="form-control" placeholder="Tìm kiếm"/></li>
                            <li v-for="item in filteredSkill"  @click="skill=item"><a class="dropdown-item">{{item}}</a></li>
                        </ul>
                        <label class="form-label">Chuyên nghành</label>
                    </div>
                    <div class="mb-3 form-floating">
                        <input type="text" class="form-select dropdown-toggle text-dark w-100" id="dropdownMenuSchool" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false" readonly v-model="school"/>
                        <ul class="dropdown-menu overflow-auto w-100" aria-labelledby="dropdownMenuSchool" :style="{maxHeight: '300px'}">
                            <li class="m-2"><input type="text" v-model="searchSchool" class="form-control" placeholder="Tìm kiếm"/></li>
                            <li v-for="item in filteredSchool"  @click="school=item.name"><a class="dropdown-item">{{item.name}}</a></li>
                        </ul>
                        <label class="form-label">Trường</label>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <select class="form-select" v-model="startyear">
                                    <option value="" disabled>Chọn năm bắt đầu</option>
                                    <option :value="new Date().getFullYear()-i+1" v-for="i in 100">{{new Date().getFullYear()-i+1}}</option>
                                </select>
                                <label class="form-label">Năm bắt đầu</label>
                            </div>
                        </div>   
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <select class="form-select" v-model="endyear">
                                    <option value="" disabled>Chọn năm bắt đầu</option>
                                    <option :value="new Date().getFullYear()-i+1" v-for="i in 100">{{new Date().getFullYear() - i + 1}}</option>
                                </select>
                                <label class="form-label">Năm tốt nghiệp</label>
                            </div>
                        </div>   
                    </div>
                    <div class="mb-3">
                        <div class="form-floating">
                            <input type="texe" class="form-control" required v-model="professionaltitle"/>
                            <label class="form-label">Chức danh chuyên môn</label>
                        </div>
                    </div>
                    <div class="mb-3 form-floating">
                        <select @click="focus" class="form-select" v-model="country" required>
                            <option value="" disabled>Chọn quốc gia</option>
                            <option value='Việt Nam'>Việt Nam</option>
                        </select>
                        <label class="form-label">Quốc gia</label>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <select @click="focus" class="form-select" v-model="province" required>
                                    <option value="" disabled>Chọn tỉnh/thành phố</option>
                                    <option v-for="province in provinces" :value='province'>{{province}}</option>
                                </select>
                                <label class="form-label">Tỉnh/Thành phố</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <select @click="focus" class="form-select" v-model="district" required>
                                    <option value="" disabled>Chọn quận/huyện</option>
                                    <option v-for="district in districts" :value='district'>{{district}}</option>
                                </select>
                                <label class="form-label">Quận/Huyện</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <select @click="focus" class="form-select" v-model="ward" required>
                                    <option value="" disabled>Chọn phường/xã</option>
                                    <option v-for="ward in wards" :value='ward'>{{ward}}</option>
                                </select>
                                <label class="form-label">Phường/Xã</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <input @click="focus" type="text" class="form-control" v-model="address" required/>
                                <label class="form-label">Số nhà, tên đường</label>
                            </div>
                        </div>          
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <input @click="focus" type="password" class="form-control" v-model="password" required minlength="6"/>
                                <label class="form-label">Mật khẩu</label>
                            </div>
                        </div>   
                        <div class="col-md-6 mb-3">
                            <div class="form-floating">
                                <input @click="focus" type="password" class="form-control" v-model="password2" minlength="6" required/>
                                <label class="form-label">Nhập lại mật khẩu</label>
                            </div>
                        </div>   
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                    <!-- <button type="button" class="btn btn-light btn-lg">Reset all</button> -->
                    <button type="button" class="btn btn-primary btn-lg ms-2" @click="handleSubmit">Đăng kí</button>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>
<script>

    const {BASE_URL} =  require('../../utils/config')
    export default {  
        data(){
            return {
                searchSkill: "",
                searchSchool: "",
                name : "",
                username : "",
                birthdate : "",
                gender: "",
                level : "",
                email : "",
                country: "",
                province : "",
                district : "",
                ward : "",
                address : "",
                school: "",
                startyear: "",
                endyear: "",
                skill : "",
                professionaltitle: "",
                password : "",
                password2 : "",
                provinces: [],
                districts: [],
                wards: [],
                schools: [],
                majors: [],
            }
        },
        computed: {
            filteredSchool(){
                return this.schools.filter(school => {
                    if (school.name.toLowerCase().indexOf(this.searchSchool.toLowerCase()) != -1 && this.searchSchool != ''){
                        return true
                    }
                })
            },
            filteredSkill(){
                let result = []
                this.majors.forEach(major => {
                    if (major.level == this.level) {
                        result = major.skills.filter(skill => {
                            if (skill.toLowerCase().indexOf(this.searchSkill.toLowerCase()) != -1 && (this.searchSkill != '' || this.level == 'Phổ thông')){
                                return true
                            }
                            return false
                        })
                    }
                })
                return result
            }
        },
        methods : {
            
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/employee/register`, {
                    name : this.name,
                    username : this.username,
                    birthdate : this.birthdate,
                    gender: this.gender,
                    level : this.level,
                    school: this.school,
                    startyear: this.startyear,
                    endyear: this.endyear,
                    major : this.major,
                    skill : this.skill,
                    professionaltitle: this.professionaltitle,
                    email : this.email,
                    country: this.country,
                    province : this.province,
                    district : this.district,
                    ward : this.ward,
                    address : this.address,
                    password : this.password,
                    password2 : this.password2,

                })
                .then(response => {
                    if (response.data == 'ok'){
                        Swal.fire({
                            icon: 'success',
                            title: 'Đăng kí thành công',
                            text: 'Xác minh email để kích hoạt tài khoản',
                            confirmButtonColor: 'var(--primary)',
                            confirmButtonText: 'Đăng nhập',
                        }).then((result) => {
                            if (result.value) {
                                this.$router.push('login')
                            }
                        })
                    }
                    else {
                        
                        Swal.fire({
                            icon: 'info',
                            title: 'Đăng kí thất bại',
                            text: `${response.data[0].msg}`,
                            confirmButtonColor: 'var(--primary)',
                            confirmButtonText: 'Nhập lại',
                        });
                    }
                })
                .catch(function (error) {
                    console.error(error.response);
                });
            },
            focus(){
                //document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
            }
        },
        async created(){
            await this.$http.get(`${BASE_URL}/school/getall`)
            .then(response => {
                this.schools = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });

            this.$http.get(`${BASE_URL}/province/list`)
            .then(response => {
                this.province_list = response.data;
                this.provinces = new Set(this.province_list.map(item => item.province))
            })
            .catch(function (error) {
                console.error(error.response);
            });
            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.majors = response.data;
               
            })
            .catch(function (error) {
                console.error(error.response);
            });
            
            await this.$http.get(`${BASE_URL}/school/getall`)
            .then(response => {
                this.schools = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });
        },
        watch : {
            province(newValue){
                this.district = "";
                this.districts = new Set(this.province_list.filter(item => item.province == newValue).map(item => item.district))
            },
            district(newValue){
                this.ward = "";
                this.wards = new Set(this.province_list.filter(item => item.district == newValue).map(item => item.ward))
            },
            level(){
                this.skill = "";
            }
        }
    }
</script>
