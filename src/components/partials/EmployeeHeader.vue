<template>
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="/index.html" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
            <h1 class="m-0 text-primary">JobEntry</h1>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/employee" class="nav-item nav-link active">Home</a>
                <a :href="'/employee/cvid/'+cvid" class="nav-item nav-link">CVID</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Việc làm</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="/employee/jobs-sent" class="dropdown-item">Đã nộp</a>
                        <a href="/employee/jobs-invited" class="dropdown-item">Lời mời</a>
                    </div>
                </div>
                <!-- <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="category.html" class="dropdown-item">Job Category</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link">Contact</a>-->
                <a href="/employee/login" class="nav-item nav-link">Login</a> 
            </div>
            <a href="" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Post A Job<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    const token= localStorage.getItem('token')
    
    export default {  
        data(){
            return {
                cvid: JSON.parse(localStorage.getItem('employee'))._id
            }
        },
        created(){
            if (token){
                this.$http.post(`${BASE_URL}/employee/me`,{
                    token: token
                })
                .then(res => {
                    if (res.data.code == 200 && res.data.user.type == 4){
                        localStorage.setItem('employee', JSON.stringify(res.data.user))
                    } else if (res.data.code != 200){
                        localStorage.removeItem('employee')
                    }
                })
                .catch(function (error) {
                    console.error(error.response);
                });
            } 
        }
    }
</script>
