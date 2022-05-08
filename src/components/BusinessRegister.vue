<template>
    <div id="register">
        <form class="register-form__employee col-11	col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-5">
            <h2 class="text-center mb-4">Đăng kí tài khoản</h2>
                <h4 class="mb-3">Thông tin đăng nhập</h4>
                <div class="input-group mb-4">
                    <span class="input-group-text">Email</span>
                    <input type="email" v-model="email" class="form-control" placeholder="Email">
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text">Mật khẩu</span>
                    <input type="password" v-model="password" class="form-control" placeholder="Mật khẩu">
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text">Nhập lại mật khẩu</span>
                    <input type="password" v-model="password2" class="form-control" placeholder="Nhập lại mật khẩu">
                </div>
                
                <h4 class="mb-3">Thông tin doanh nghiệp</h4>
                <div class="input-group mb-4">
                    <span class="input-group-text">Tên doanh nghiệp</span>
                    <input type="text" v-model="name" class="form-control" placeholder="Tên doanh nghiệp">
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text">Mã số thuế</span>
                    <input type="text" v-model="MST" class="form-control" placeholder="Mã số thuế">
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text">Địa chỉ</span>
                    <select class="form-select" v-model="province">
                        <option disabled value="">Chọn tỉnh/thành phố</option>
                        <option v-for="province in provinces" :key="province.Id" :value=[province.Id,province.Name]>{{province.Name}}</option>
                    </select>
                    <select class="form-select" v-model="district">
                        <option disabled value="">Chọn quận/huyện</option>
                        <option v-for="district in districts" :key="district.Id" :value=[district.Id,district.DistrictName]>{{district.DistrictName}}</option>
                    </select>
                </div>
                <div class="input-group mb-4">
                    <span class="input-group-text">Nghành nghề</span>
                    <button class="btn btn-light dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="input-group__major">Đã chọn {{majors.length}} nghành nghề</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu__major">
                        <li v-for="major in list_major" :key="major.name">
                            <span class="input-group-text">{{major.name}}</span>
                            <div v-for="skill in major.skills" :key="skill.name">
                                <input type="checkbox" :id="skill.name" class="form-check-input" v-model="majors" :value=[major.name,skill.name]>
                                <label class="form-check-label" :for="skill.name">{{skill.name}}</label>
                            </div>
                        </li>
                    </ul>
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
                name: "",
                MST: "",
                province: "",
                district: "",
                majors: [],
                email : "",
                password : "",
                password2 : "",
                provinces: [],
                districts: [],
                list_major: [],
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/business/register`, {
                    name: this.name,
                    MST: this.MST,
                    province: this.province,
                    district: this.district,
                    majors: this.majors,
                    email: this.email,
                    password: this.password,
                    password2: this.password2
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

            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.list_major = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });
        },
        watch : {
            province(newVal){
                this.district = "";
                this.districts = this.provinces.find(province => province.Id === newVal[0]).Districts;
                
            },
            majors(newVal){
                console.log(newVal);
            }
       
        }
    }
</script>
