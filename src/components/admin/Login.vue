<template>
    <div>
        <label>Tên đăng nhâp:</label>
        <input type="text" class="form-control" v-model="username"/>
        <label>Mật khẩu:</label>
        <input type="password" class="form-control" v-model="password"/>
        <button class="btn btn-primary" @click="handleSubmit">Đănng nhập</button>

    </div>
</template>

<script>
const {BASE_URL} =  require('../../utils/config')

    export default {
        data (){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            handleSubmit() {
                this.$http.post(`${BASE_URL}/admin/login`,{
                    username: this.username,
                    password: this.password
                })
                .then(response => {
                    localStorage.setItem('token',response.data.token);
                    this.$router.push('/admin/employee')   
                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Đăng nhập thất bại',
                        text: error.response.data,
                        confirmButtonColor: 'var(--primary)',
                        confirmButtonText: 'Nhập lại',
                    });
                    console.log(error.response.data)
                });
            }
        }
    }
</script>