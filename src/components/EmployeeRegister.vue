<template>
    <div id="register" class="container ">
        <h3 class="text-center mb-4">Đăng ký tài khoản</h3>
        <form class="row g-3 needs-validation">
                <div class="col-md-6">
                    <label class="form-label">Họ và tên</label>
                    <input type="text" class="form-control" v-model="name" required>
                    <div class="invalid-feedback">
                        Vui lòng nhập họ và tên.
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Số CMND/CCCD</label>
                    <input type="text" class="form-control" pattern="[0-9]{9}|[0-9]{12}" v-model="username" required >
                    <div class="invalid-feedback">
                    Số CMND/CCCD phải có 9 hoặc 12 số.
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Ngày tháng năm sinh</label>
                    <input type="date" class="form-control" v-model="birthdate" required :max="new Date().toISOString().substr(0, 10)">
                </div>
                <div class="col-md-6">
                    <label class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="email" required>
                </div>
                <div class="col-12">
                    <label class="form-label">Địa chỉ</label>
                    <div class="row">
                        <div class="col-md-3 mb-4">
                        <select class="form-control" v-model="province" required>
                            <option value="" disabled>Chọn tỉnh/thành phố</option>
                            <option v-for="province in provinces" :key="province.Id" :value=[province.Id,province.Name]>{{province.Name}}</option>
                        </select>
                        </div>
                        <div class="col-md-3 mb-4">
                            <select class="form-control" v-model="district" required>
                                <option value="" disabled>Chọn quận/huyện</option>
                                <option v-for="district in districts" :key="district.Id" :value=[district.Id,district.DistrictName]>{{district.DistrictName}}</option>
                            </select>
                        </div>
                            
                        <div class="col-md-6">
                            <input type="text" class="form-control" v-model="address" required placeholder="Số nhà, tên đường">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Cấp bậc</label>
                    <select class="form-control" v-model="level" required>
                        <option value="" disabled>Chọn cấp bậc</option>
                        <option value="Cử nhân">Cử nhân</option>
                        <option value="Trung cấp">Trung cấp</option>
                        <option value="Cao đẳng">Cao đẳng</option>
                        <option value="Đại học">Đại học</option>
                        <option value="Thạc sĩ">Thạc sĩ</option>
                        <option value="Tiến sĩ">Tiến sĩ</option>
                    </select>
                    <div class="invalid-feedback">
                        Vui lòng chọn cấp bậc.
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Chuyên môn</label>
                    <input type="text" class="form-control" v-model="specialty" required>
                    <div class="invalid-feedback">
                    Chuyên môn không được để trống.
                    </div>
                </div>

                <div class="col-12">
                    <label class="form-label">Kinh nghiệm <span v-if="total_experience != 0">{{total_experience}} tháng</span></label>
                    <div class="mb-6 row">
                        <label class="col-md-2 col-form-label">Tháng bắt đầu</label>
                        <div class="col-md-3">
                        <input type="month" class="form-control" v-model="experience[0]" :max="experience[1]" required>
                        </div>
                        <div class="col-md-1"></div>
                        <label class="col-md-2 col-form-label">Tháng kết thúc</label>
                        <div class="col-md-3">
                        <input type="month" class="form-control" v-model="experience[1]" :min="experience[0]" :max="new Date().toISOString().substr(0, 7)" required>
                        </div>
                    </div>
                </div>
                

                <div class="col-md-5">
                    <label class="form-label">Mật khẩu</label>
                    <input type="password" class="form-control" v-model="password" required minlength="6">
                    <div class="invalid-feedback">
                        Mật khẩu phải có ít nhất 6 ký tự.
                    </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-5">
                    <label class="form-label">Nhập lại mật khẩu</label>
                    <input type="password" class="form-control" v-model="password2" minlength="6" required>
                    <div class="invalid-feedback">
                        Mật khẩu phải có ít nhất 6 ký tự.
                    </div>
                </div>
	        <button type="submit" class="btn btn-primary float-right" @click="handleSubmit">Đăng kí</button>
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
                specialty : "",
                experience : ["",""],
                total_experience : 0,
                password : "",
                password2 : "",
                provinces: [],
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
                    specialty : this.specialty,
                    experience : this.experience,
                    password : this.password,
                    password2 : this.password2,

                })
                .then(response => {
                    if (response.data == 'ok'){
                        Swal.fire({
                            icon: 'success',
                            title: 'Đăng kí thành công',
                            text: 'Bạn có thể đăng nhập ngay bây giờ',
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

        },
        watch : {
            province(newValue){
                this.district = "";
                this.districts = this.provinces.find(province => province.Id === newValue[0]).Districts;
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            name(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            username(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            birthdate(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            level(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            email(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            specialty(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            experience(newValue){
                if (newValue !== ""){
                    if (this.experience[1] !== "" && this.experience[0] !== ""){
                        this.total_experience = Math.round(new Date(this.experience[1]).getTime()/1000/60/60/24/30) - Math.round(new Date(this.experience[0]).getTime()/1000/60/60/24/30)
                    }
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            password(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            password2(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },
            address(newValue){
                if (newValue !== ""){
                    document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
                }
            },


        }
    }
</script>
