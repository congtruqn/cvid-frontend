<template>
    <div id="register">
        <form>
            <h1>Register</h1>
            <input type="text" v-model="firstname" placeholder="First Name" />
            <input type="text" v-model="lastname" placeholder="Last Name" />
            <input type="email" v-model="email" placeholder="Email">
	        <input type="password"  v-model="password" placeholder="Password">
            <input type="password"  v-model="password2" placeholder="Confirm Password">
	        <button type="submit" class="btn btn-default" @click="handleSubmit">Register</button>
        </form>
    </div>
</template>
<script>
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
                if (this.password.length > 0) {
                    this.$http.post('api/employee/register', {
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        password: this.password,
                        password2: this.password2
                    })
                    .then(response => {
                        console.log(response)
                        this.$router.push('/login')
                    })
                    .catch(function (error) {
                        console.error(error.response);
                    });
                }
            }
        }
    }
</script>
