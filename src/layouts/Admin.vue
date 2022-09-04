<template>
<div class="container-fluid">
    <div class="w3-sidebar w3-bar-block" style="display:none;z-index:5" id="mySidebar">
        <button class="w3-bar-item w3-button w3-xxlarge" @click="w3_close()">Close &times;</button>
        <a href="#" class="w3-bar-item w3-button">Link 1</a>
        <a href="#" class="w3-bar-item w3-button">Link 2</a>
        <div class="w3-dropdown-hover">
            <button class="w3-button"><i class="fas fa-user"></i> Khách hàng
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="w3-dropdown-content w3-bar-block">
                <a href="/admin/employee/list" class="w3-bar-item w3-button">Người tìm việc</a>
                <a href="/admin/business/list" class="w3-bar-item w3-button">Nhà tuyển dụng</a>
            </div>
        </div>
        <div class="w3-dropdown-hover">
            <button class="w3-button"><i class="fas fa-user"></i> Thông tin doanh nghiệp
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="w3-dropdown-content w3-bar-block">
                <a href="/admin/type-business/list" class="w3-bar-item w3-button">Loại hình doanh nghiệp</a>
                <a href="/admin/environment/list" class="w3-bar-item w3-button">Môi trường làm việc</a>
                <a href="/admin/industry/list" class="w3-bar-item w3-button">Ngành công nghiệp</a>
            </div>
        </div> 
        <a href="#" class="w3-bar-item w3-button">Link 3</a>
        <a href="/admin/login" class="w3-bar-item w3-button">Login</a>
    </div>

    <!-- Page Content -->
    <div class="w3-overlay" onclick="w3_close()" style="cursor:pointer" id="myOverlay"></div>

        <div>
        <button class="w3-button w3-white w3-xxlarge" @click="w3_open()">&#9776;</button>
        <div class="w3-container">
            <router-view/>
        </div>
    </div>

</div>
</template>
<script>
    
    
    export default {
        methods: {
            w3_open() {
                document.getElementById("mySidebar").style.display = "block";
                document.getElementById("myOverlay").style.display = "block";
            },
            w3_close() {
                document.getElementById("mySidebar").style.display = "none";
                document.getElementById("myOverlay").style.display = "none";
            }
        },
        created() {
            var token = localStorage.getItem('token')
            if (!token && this.$router.currentRoute.path != '/admin/login'){
                this.$router.push('/admin/login')
            }
        },
    }

</script>

<style scoped>

</style>