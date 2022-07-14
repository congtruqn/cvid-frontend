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
                    <div class="col-md-6 mb-4">
                        <div class="form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="name" required/>
                        <label class="form-label" for="form3Example1m">Họ và tên</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="form-floating">
                        <input @click="focus" type="text" class="form-control" minlength="9" v-model="username" required />
                        <label class="form-label">Số CVID</label>
                        </div>
                        <div class="invalid-feedback">
                            CMND/CCCD/SĐT/Hộ chiếu
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-md-6 mb-4">
                        <div class="form-floating">
                        <input @click="focus" type="date" class="form-control" v-model="birthdate" required :max="new Date().toISOString().substr(0, 10)"/>
                        <label class="form-label">Ngày, tháng, năm sinh</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="form-floating">
                        <input @click="focus" type="email" class="form-control" v-model="email" required/>
                        <label class="form-label">Email</label>
                        </div>
                    </div>
                    </div>

                    <div class="mb-4 form-floating">
                        <select @click="focus" class="form-control" v-model="level" required>
                            <option value="" disabled>Chọn cấp bậc</option>
                            <option value="Sơ cấp">Sơ cấp</option>
                            <option value="Trung cấp">Trung cấp</option>
                            <option value="Cao đẳng">Cao đẳng</option>
                            <option value="Đại học">Đại học</option>
                        </select>
                        <label class="form-label">Cấp bậc</label>
                    </div>
                    
                    <div class="mb-4 form-floating">
                        <select @click="focus" class="form-control" v-model="major" required>
                            <option value="" disabled>Chọn ngành nghề</option>
                            <option v-for="(major, index) in majors" v-if="major.level === level" :key="index" :value="major.name">{{major.name}}</option>     
                        </select>
                        <label class="form-label">Nghành nghề</label>
                    </div>
                    <div class="mb-4 form-floating" v-if="level != 'Sơ cấp'">
                        <select @click="focus" class="form-control" v-model="skill" required>
                            <option value="" disabled>Chọn chuyên nghành</option>
                            <option v-for="skill in major_.skills" :value='skill'>{{skill}}</option>
                        </select>
                        <label class="form-label">Chuyên nghành</label>
                    </div>
                    <div class="mb-4 form-floating" v-if="level == 'Đại học'">
                        <select @click="focus" class="form-control" v-model="school" required>
                            <option value="" disabled>Chọn trường</option>
                            <option v-for="(school, index) in schools" :key="index" :value="school.name">{{school.name}}</option>     
                        </select>
                        <label class="form-label">Trường</label>
                    </div>
                    <div class="mb-4 form-floating" v-if="level != 'Đại học'">
                        <input @click="focus" type="text" class="form-control" v-model="school" required/>
                        <label class="form-label">Trường</label>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input @click="focus" type="number" class="form-control" required v-model="startyear"/>
                                <label class="form-label">Năm nhập học:</label>
                            </div>
                        </div>   
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input @click="focus" type="number" class="form-control" required v-model="endyear"/>
                                <label class="form-label">Năm tốt nghiệp</label>
                            </div>
                        </div>   
                    </div>
                    <div class="mb-4 form-floating">
                        <div class="dropdown form-floating">
                            <input type="text" class="form-control dropdown-toggle" placeholder='' id="dropdownposition" data-bs-toggle="dropdown" v-model="position">
                            <label class="form-label">Chức danh/ Chuyên môn</label>
                            <ul class="dropdown-menu w-100" aria-labelledby="dropdownposition">
                                <li v-for="item in major_.position"  @click="position=item"><a class="dropdown-item">{{item}}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mb-4 form-floating">
                        <select @click="focus" class="form-control" v-model="country" required>
                            <option value="" disabled>Chọn quốc gia</option>
                            <option value='Việt Nam'>Việt Nam</option>
                        </select>
                        <label class="form-label">Quốc gia</label>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <select @click="focus" class="form-control" v-model="province" required>
                                    <option value="" disabled>Chọn tỉnh/thành phố</option>
                                    <option v-for="province in provinces" :value='province'>{{province}}</option>
                                </select>
                                <label class="form-label">Tỉnh/Thành phố</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <select @click="focus" class="form-control" v-model="district" required>
                                    <option value="" disabled>Chọn quận/huyện</option>
                                    <option v-for="district in districts" :value='district'>{{district}}</option>
                                </select>
                                <label class="form-label">Quận/Huyện</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <select @click="focus" class="form-control" v-model="ward" required>
                                    <option value="" disabled>Chọn phường/xã</option>
                                    <option v-for="ward in wards" :value='ward'>{{ward}}</option>
                                </select>
                                <label class="form-label">Phường/Xã</label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input @click="focus" type="text" class="form-control" v-model="address" required/>
                                <label class="form-label">Số nhà, tên đường</label>
                            </div>
                        </div>          
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input @click="focus" type="password" class="form-control" v-model="password" required minlength="6"/>
                                <label class="form-label">Mật khẩu</label>
                            </div>
                        </div>   
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input @click="focus" type="password" class="form-control" v-model="password2" minlength="6" required/>
                                <label class="form-label">Nhập lại mật khẩu</label>
                            </div>
                        </div>   
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                    <!-- <button type="button" class="btn btn-light btn-lg">Reset all</button> -->
                    <button type="button" class="btn btn-primary btn-lg ms-2" @click="handleSubmit">Submit form</button>
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
                name : "",
                username : "",
                birthdate : "",
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
                major : "",
                skill : "",
                position: "",
                password : "",
                password2 : "",
                provinces: [],
                districts: [],
                wards: [],
                schools: [],
                majors: [],
                major_: [],
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/employee/register`, {
                    name : this.name,
                    username : this.username,
                    birthdate : this.birthdate,
                    level : this.level,
                    school: this.school,
                    startyear: this.startyear,
                    endyear: this.endyear,
                    major : this.major,
                    skill : this.skill,
                    position: this.position,
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
                document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
            }
        },
        created(){
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
            
            this.$http.get(`${BASE_URL}/school/getall`)
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
                this.major = "";
                this.skill = "";
                this.position = "";
            },
            major(newValue){
                this.major_ = []
                this.skill = "";
                if (this.major && this.level){
                    this.major_ = this.majors.find(major => major.name === this.major && major.level === this.level);
                }
                
            }
            
        }
    }
</script>
