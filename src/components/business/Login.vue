<template>
<div id="login" >
    <div class="wrapper login-1">
        <div class="container">
            <div class="col-left">
                <div class="login-text">
                    <h3>Chào mừng bạn quay trở lại</h3>
                    <p>Bạn chưa có tài khoản?<br>Đăng ký dễ dàng,<br> hoàn toàn miễn phí</p>
                    <a class="btn" href="/business/register">Đăng ký</a>
                </div>
            </div>
            <div class="col-right">
                <div class="login-form">
                    <h2>DÀNH CHO NHÀ TUYỂN DỤNG</h2>
                    <form>
                        <p>
                            <label>Username<span>*</span></label>
                            <input type="text" v-model="username" placeholder="Username" required>
                        </p>
                        <p>
                            <label>Password<span>*</span></label>
                            <input type="password" v-model="password" placeholder="Password" required>
                        </p>
                        <p>
                            <input type="submit" @click="handleSubmit" value="Đăng nhập" />
                        </p>
                        <p>
                            <a href="">Quên mật khẩu?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
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
                            localStorage.setItem('token',response.data.token);
                            if (localStorage.getItem('token') != null){
                                this.$emit('loggedIn')
                                if(this.$route.params.nextUrl != null){
                                    this.$router.push(this.$route.params.nextUrl)
                                }
                                else {
                                    var user = response.data.userinfo
                                    localStorage.setItem('business',JSON.stringify(user));
                                    this.$router.push('/business/department')
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
<style scoped>

#login {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #666666;
    background: #eaeff4;
}

.wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: auto;
    display: flex;
    background: #ffffff;
    box-shadow: 0 0 5px #999999;
}

.login-1 .col-left,
.login-1 .col-right {
    padding: 30px;
    display: flex;
   
}

.login-1 .col-left {
    width: 60%;
    -webkit-clip-path: polygon(0 0, 0% 100%, 100% 0);
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    background: #44c7f5;
}

.login-1 .col-right {
    padding: 60px 30px;
    width: 50%;
    margin-left: -10%;
}

@media(max-width: 575.98px) {
    .login-1 .container {
        flex-direction: column;
        box-shadow: none;
    }
    
    .login-1 .col-left,
    .login-1 .col-right {
        width: 100%;
        margin: 0;
        -webkit-clip-path: none;
        clip-path: none;
    }
    
    .login-1 .col-right {
        padding: 30px;
    }
}

.login-1 .login-text {
    position: relative;
    width: 100%;
    color: #ffffff;
}

.login-1 .login-text h2 {
    margin: 0 0 15px 0;
    font-size: 30px;
    font-weight: 700;
}

.login-1 .login-text p {
    margin: 0 0 20px 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
}

.login-1 .login-text .btn {
    display: inline-block;
    padding: 7px 20px;
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration: none;
    border-radius: 30px;
    color: #ffffff;
    outline: none;
    border: 1px solid #ffffff;
    box-shadow: inset 0 0 0 0 #ffffff;
    transition: .3s;
    -webkit-transition: .3s;
}

.login-1 .login-text .btn:hover {
    color: #44c7f5;
    box-shadow: inset 150px 0 0 0 #ffffff;
}

.login-1 .login-form {
    position: relative;
    width: 100%;
}

.login-1 .login-form h2 {
    margin: 0 0 15px 0;
    font-size: 22px;
    font-weight: 700;
}

.login-1 .login-form p {
    margin: 0 0 10px 0;
    text-align: left;
    color: #666666;
    font-size: 15px;
}

.login-1 .login-form p:last-child {
    margin: 0;
    padding-top: 3px;
}

.login-1 .login-form p a {
    color: #44c7f5;
    font-size: 14px;
    text-decoration: none;
}

.login-1 .login-form label {
    display: block;
    width: 100%;
    margin-bottom: 2px;
    letter-spacing: .5px;
}

.login-1 .login-form p:last-child label {
    width: 60%;
    float: left;
}

.login-1 .login-form label span {
    color: #ff574e;
    padding-left: 2px;
}

.login-1 .login-form input {
    display: block;
    width: 100%;
    height: 35px;
    padding: 0 10px;
    outline: none;
    border: 1px solid #cccccc;
    border-radius: 30px;
}

.login-1 .login-form input:focus {
    border-color: #ff574e;
}

.login-1 .login-form button,
.login-1 .login-form input[type=submit] {
    display: inline-block;
    width: 100%;
    margin-top: 5px;
    color: #44c7f5;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #44c7f5;
    border-radius: 30px;
    box-shadow: inset 0 0 0 0 #44c7f5;
    transition: .3s;
    -webkit-transition: .3s;
}

.login-1 .login-form button:hover,
.login-1 .login-form input[type=submit]:hover {
    color: #ffffff;
    box-shadow: inset 250px 0 0 0 #44c7f5;
}
</style>