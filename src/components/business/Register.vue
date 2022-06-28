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
                    <h3 class="mb-5 text-uppercase">Đăng kí tài khoản tuyển dụng</h3>
        
                    <div class="mb-4 form-floating">
                        <select @click="focus" class="form-control" v-model="type" required>
                            <option value="" disabled>Chọn loại hình tuyển dụng</option>
                            <option value="6">Cá nhân</option>
                            <option value="5">Doanh nghiệp</option>
                        </select>
                        <label class="form-label">Loại hình tuyển dụng</label>
                    </div>
                    <div v-if="type==5" class="mb-4 form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="username" required>
                        <label class="form-label">Mã số thuế</label>
                    </div>
                    <div v-if="type!=5" class="mb-4 form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="username" required>
                        <label class="form-label">Số điện thoại</label>
                    </div>
                    <div v-if="type==5" class="mb-4 form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="name" required>
                        <label class="form-label" for="form3Example1m">Tên doanh nghiệp</label>
                    </div>
                    <div v-if="type==5" class="mb-4 form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="nameforeign" required>
                        <label class="form-label" for="form3Example1m">Tên doanh nghiệp viết bằng tiếng nước ngoài</label>
                    </div>
                    <div v-if="type==5" class="mb-4 form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="nameacronym" required>
                        <label class="form-label" for="form3Example1m">Tên doanh nghiệp viết tắt</label>
                    </div>

                    <div class="mb-4 form-floating">
                        <input @click="focus" type="email" class="form-control" v-model="email" required/>
                        <label class="form-label">Email</label>
                    </div>
                    <div class="mb-4 form-floating">
                        <input @click="focus" type="text" class="form-control" v-model="major" required/>
                        <label class="form-label" for="form3Example1m">Nghành, nghề kinh doanh</label>
                    </div>  
                    <div class="mb-4 form-floating">
                        <select @click="focus" class="form-control" v-model="country" required>
                            <option value="" disabled>Chọn quốc gia</option>
                            <option  value="Việt Nam">Việt Nam</option>
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
                                <label class="form-label">Địa chỉ doanh nghiệp</label>
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
                type: "",
                name: "",
                nameforeign: "",
                nameacronym: "",
                username: "",
                country: "",
                province: "",
                district: "",
                ward: "",
                address: "",
                major: "",
                email : "",
                password : "",
                password2 : "",
                province_list: [],
                provinces: [],
                districts: [],
                wards: [],
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/business/register`, {
                    type: this.type,
                    name: this.name,
                    nameforeign: this.nameforeign,
                    nameacronym: this.nameacronym,
                    username: this.username,
                    country: this.country,
                    province: this.province,
                    district: this.district,
                    ward: this.ward,
                    address: this.address,
                    major: this.major,
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
                                this.$router.push('/business/login')
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

        }
    }
</script>
