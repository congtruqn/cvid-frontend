<template>
<div class="container mt-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Quản lý tài khoản</h5>
        </div>
    </div>
    <div class="card mt-2">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Email đăng nhập và mật khẩu</h6>
            <p class="card-text p-2 m-0">Email hiện tại: {{employee.email}}</p>
            <p class="card-text p-2 m-0">Số điện thoại: {{employee.username}}</p>
            <h6></h6>
        </div>
        <div class="card-footer bg-white text-end">
            <a href="#" class="card-link">Đổi email</a>
            <a href="#" class="card-link">Đổi số điện thoại</a>
            <a href="#" class="card-link">Đổi mật khẩu</a>
        </div>
    </div>
    
</div>
    
</template>

<script>
export default {
    components: {
       
    },
    data() {
        return {
            employee: JSON.parse(localStorage.getItem('employee')),
            error: '',
            cccd: JSON.parse(localStorage.getItem('employee')).cccd,
            torch: false,
            camera: 'rear',
        }
    },
    methods: {
      
    }
}
</script>
