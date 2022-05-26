<template>
    <div id="register" class="container">
        <form class="row g-3 needs-validation">
            <h2 class="text-center mb-4">Đăng kí tài khoản cho doanh nghiệp</h2>
                <div class="col-md-4">
                    <label class="form-label">Tên doanh nghiệp</label>
                    <input @click="focus" type="text" class="form-control" v-model="name" required>
                    <div class="invalid-feedback">
                        Vui lòng nhập tên doanh nghiệp.
                    </div>
                </div>

                <div class="col-md-3">
                    <label class="form-label">Mã số thuế</label>
                    <input @click="focus" type="text" class="form-control" v-model="MST" required>
                    <div class="invalid-feedback">
                        Mã này sẽ được sử dụng để đăng nhập. Không thể thay đổi vui lòng nhập chính xác!
                    </div>
                </div>
                <div class="col-md-5">
                    <label class="form-label">Email</label>
                    <input @click="focus" type="email" class="form-control" v-model="email" required>
                    <div class="invalid-feedback">
                        Vui lòng nhập email.
                    </div>
                </div>

                <div class="col-md-6">
                    <label class="form-label">Địa chỉ</label>
                    <div class="row">
                        <div class="col-md-6">
                        <select @click="focus" class="form-control" v-model="province" required>
                            <option value="" disabled>Chọn tỉnh/thành phố</option>
                            <option v-for="province in provinces" :key="province.Id" :value=[province.Id,province.Name]>{{province.Name}}</option>
                        </select>
                        </div>
                        <div class="col-md-6">
                            <select @click="focus" class="form-control" v-model="district" required>
                                <option value="" disabled>Chọn quận/huyện</option>
                                <option v-for="district in districts" :key="district.Id" :value=[district.Id,district.DistrictName]>{{district.DistrictName}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label class="form-label">Nghành nghề kinh doanh</label>
                    <input @click="focus" type="text" class="form-control" v-model="major" required placeholder="Số nhà, tên đường">
                </div>

                <div class="col-md-4">
                    <label class="form-label">Mật khẩu</label>
                    <input @click="focus" type="password" class="form-control" v-model="password" required>
                </div>

                <div class="col-md-4">
                    <label class="form-label">Nhập lại mật khẩu</label>
                    <input @click="focus" type="password" class="form-control" v-model="password2" required>
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
                major: "",
                email : "",
                password : "",
                password2 : "",
                provinces: [],
                districts: [],
               
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

            
        },
        watch : {
            province(newVal){
                this.district = "";
                this.districts = this.provinces.find(province => province.Id === newVal[0]).Districts;
                
            },

        }
    }
</script>
