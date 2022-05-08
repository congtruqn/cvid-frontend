<template>
    <div id="register">
        <form>
            <h1>Đăng kí</h1>
                <input type="text" v-model="firstname" placeholder="Họ" /><br/><br/>
                <input type="text" v-model="lastname" placeholder="Tên" /><br/><br/>
                <input type="email" v-model="email" placeholder="Email"><br/><br/>
                <input type="password"  v-model="password" placeholder="Mật khẩu"><br/><br/>
                <input type="password"  v-model="password2" placeholder="Xác nhận mật khẩu"><br/><br/>
	        <button type="submit" class="btn btn-default" @click="handleSubmit">Đăng kí</button>
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
