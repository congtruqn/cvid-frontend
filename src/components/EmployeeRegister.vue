<template>
    <div id="register" class="container">
        <h3 class="text-center mb-4">Đăng ký tài khoản CVID</h3>
        <form class="row g-3 needs-validation">
                <div class="col-md-6">
                    <label class="form-label">Họ và tên</label>
                    <input @click="focus" type="text" class="form-control" v-model="name" required>
                    <div class="invalid-feedback">
                        Vui lòng nhập họ và tên.
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Số CVID</label>
                    <input @click="focus" type="text" class="form-control" minlength="9" v-model="username" required >
                    <div class="invalid-feedback">
                        Nhập số CVID là số CMND/CCCD/Hộ chiếu/Số điện thoại
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Ngày tháng năm sinh</label>
                    <input @click="focus" type="date" class="form-control" v-model="birthdate" required :max="new Date().toISOString().substr(0, 10)">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Email</label>
                    <input @click="focus" type="email" class="form-control" v-model="email" required>
                </div>
                <div class="col-12">
                    <label class="form-label">Địa chỉ</label>
                    <div class="row">
                        <div class="col-md-3 mb-4">
                        <select @click="focus" class="form-control" v-model="province" required>
                            <option value="" disabled>Chọn tỉnh/thành phố</option>
                            <option v-for="province in provinces" :key="province.Id" :value=[province.Id,province.Name]>{{province.Name}}</option>
                        </select>
                        </div>
                        <div class="col-md-3 mb-4">
                            <select @click="focus" class="form-control" v-model="district" required>
                                <option value="" disabled>Chọn quận/huyện</option>
                                <option v-for="district in districts" :key="district.Id" :value=[district.Id,district.DistrictName]>{{district.DistrictName}}</option>
                            </select>
                        </div>
                            
                        <div class="col-md-6">
                            <input @click="focus" type="text" class="form-control" v-model="address" required placeholder="Số nhà, tên đường, phường/xã">
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <label class="form-label">Cấp bậc</label>
                    <select @click="focus" class="form-control" v-model="level" required>
                        <option value="" disabled>Chọn cấp bậc</option>
                        <option value="Sơ cấp">Sơ cấp</option>
                        <option value="Trung cấp">Trung cấp</option>
                        <option value="Cao đẳng">Cao đẳng</option>
                        <option value="Đại học">Đại học</option>
                        <option value="Trên đại học">Trên đại học</option>
                       
                    </select>
                    <div class="invalid-feedback">
                        Vui lòng chọn cấp bậc.
                    </div>
                </div>
                <div class="col-md-5">
                    <label class="form-label">Ngành nghề</label>
                    <select @click="focus" class="form-control" v-model="major" required>
                        <option value="" disabled>Chọn ngành nghề</option>
                        <option v-for="major in majors" :key="major.code" :value="major.name">{{major.name}}</option>     
                    </select>
                    <div class="invalid-feedback">
                        Vui lòng chọn nghành nghề.
                    </div>
                </div>         
                <div class="col-md-4">
                    <label class="form-label">Chuyên nghành</label>
                    <select @click="focus" class="form-control" v-model="skill" required>
                        <option value="" disabled>Chọn chuyên nghành</option>
                        <option v-for="skill in skills" :key="skill.code" :value='skill.name'>{{skill.name}}</option>
                        
                    </select>
                    <div class="invalid-feedback">
                        Vui lòng chọn chuyên nghành.
                    </div>
                </div>       
                <div class="col-md-5">
                    <label class="form-label">Mật khẩu</label>
                    <input @click="focus" type="password" class="form-control" v-model="password" required minlength="6">
                    <div class="invalid-feedback">
                        Mật khẩu phải có ít nhất 6 ký tự.
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <label class="form-label">Nhập lại mật khẩu</label>
                    <input @click="focus" type="password" class="form-control" v-model="password2" minlength="6" required>
                    <div class="invalid-feedback">
                        Mật khẩu phải có ít nhất 6 ký tự.
                    </div>
                </div>
	        <button type="submit" class="btn btn-primary" @click="handleSubmit">Đăng kí</button>
        </form>
    </div>
</template>
<script>

    const {BASE_URL} =  require('../utils/config')
    export default {  
        data(){
            return {
                name : "",
                username : "",
                birthdate : "",
                level : "",
                email : "",
                province : "",
                district : "",
                address : "",
                major : "",
                skill : "",
                password : "",
                password2 : "",
                provinces: [],
                districts: [],
                listMajor: [],
                majors: [],
                skills: [],
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
                    email : this.email,
                    province : this.province,
                    district : this.district,
                    address : this.address,
                    major : this.major,
                    skill : this.skill,
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
                                this.$router.push('/login')
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
                this.provinces = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });

            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.listMajor = response.data;
                console.log(this.listMajor)
            })
            .catch(function (error) {
                console.error(error.response);
            });
            
        },
        watch : {
            province(newValue){
                this.district = "";
                this.districts = this.provinces.find(province => province.Id === newValue[0]).Districts;
                console.log(this.major)
            },
            level(newValue){
                this.major = "";
                this.skill = "";
                this.majors = this.listMajor.find(major => major.level === newValue).majors;
                this.skills = [];
            },
            major(newValue){
                this.skill = "";
                this.skills = this.majors.find(major => major.name === newValue).skills;
            }
            
        }
    }
</script>
