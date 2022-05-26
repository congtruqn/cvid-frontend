<template>
    <div id="login">
        <h3 class="text-center mb-4">Đăng nhập</h3>
        <form class="row g-3 needs-validation">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <label class="form-label">Tên đăng nhập</label>
                <input @focus="focus" type="text" class="form-control" v-model="username" required placeholder="Tên đăng nhập" minlength="9">
                <div class="invalid-feedback">
                    CMND/CCCD đối với người lao động.<br/>
                    Mã số thuế đối với doanh nghiệp.
                </div>
            </div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <label class="form-label">Mật khẩu</label>
                <input @focus="focus" type="password" class="form-control" v-model="password" required placeholder="Mật khẩu">
            </div>

            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <button type="submit" class="btn btn-primary w-100" @click="handleSubmit">Đăng nhập</button>
                <div class="float-right">
                    Chưa có tài khoản? <br>
                    <a href="employee/register">Đăng kí tài khoản CVID</a><br>
                </div>
            </div>

            
            
                
            
	        
        </form>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../utils/config')
    export default {
        data(){
            return {
                username : "",
                password : ""
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                if (this.password.length > 0) {
                    this.$http.post(`${BASE_URL}/user/login`, {
                        username: this.username,
                        password: this.password
                    })
                    .then(response => {
                        console.log(response.data.userinfo)
                        if(response.data.userinfo){
                            console.log("1")
                            localStorage.setItem('user',JSON.stringify(response.data.userinfo));
                            localStorage.setItem('token',response.data.token);
                            if (localStorage.getItem('token') != null){
                                this.$emit('loggedIn')
                                if(this.$route.params.nextUrl != null){
                                    this.$router.push(this.$route.params.nextUrl)
                                }
                                else {
                                    var user = JSON.parse(localStorage.getItem('user'))
                                    if(user.type == 4){
                                        this.$router.push('/create-cv')
                                    }
                                    else {
                                        this.$router.push('/listproject')
                                    }

                                    //this.$router.push('listproject');
                                }
                            }                 
                        }
                    })
                    .catch(function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Đăng nhập thất bại',
                            text: error.response.data.massage,
                            confirmButtonColor: 'var(--primary)',
                            confirmButtonText: 'Nhập lại',
                        });
                    });
                }
            },
            focus(){
                document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
            }
        }
        
    }
</script>
