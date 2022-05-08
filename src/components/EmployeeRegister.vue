<template>
    <div id="register">
        <form class="register-form__employee col-11	col-sm-9 col-md-7 col-lg-6	col-xl-5 col-xxl-4">
            <h3 class="mb-4">Đăng kí tài khoản</h3>
                <div class="input-group mb-4">
                    <span class="input-group-text">Họ và Tên</span>
                    <input type="text" v-model="lastname" class="form-control" placeholder="Họ">
                    <input type="text" v-model="firstname" class="form-control" placeholder="Tên">
                </div>
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
	        <button type="submit" class="btn btn-primary float-right" @click="handleSubmit">Đăng kí</button>
        </form>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../utils/config')
    export default {  
        data(){
            return {
                firstname: "",
                lastname: "",
                email : "",
                password : "",
                password2 : "",
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/employee/register`, {
                    firstname: this.firstname,
                    lastname: this.lastname,
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
        }
    }
</script>
