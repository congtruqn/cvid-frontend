<template>
    <div id="register">
        <form>
            <h1>Register</h1>
            
                <p v-if="errors.length > 0">{{errors[0].msg}}</p>
                <input type="text" v-model="firstname" placeholder="First Name" /><br/>
                <input type="text" v-model="lastname" placeholder="Last Name" /><br/>
                <input type="email" v-model="email" placeholder="Email"><br/>
                <input type="password"  v-model="password" placeholder="Password"><br/>
                <input type="password"  v-model="password2" placeholder="Confirm Password"><br/>
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
                errors : []
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                this.$http.post('api/employee/register', {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    password2: this.password2
                })
                .then(response => {
                    if (response.data == 'ok'){
                        this.$router.push('/login')
                    }
                    else {
                        this.errors = response.data;
                    }
                })
                .catch(function (error) {
                    console.error(error.response);
                });
            }
        }
    }
</script>
