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
    <div class="card mt-2">
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Xác thực căn cước công dân </h6>
            <p>Quét mã qr trên căn cước công dân: <a @click="torch=!torch"><i class="fas fa-qrcode fa-2x m-1"></i></a></p>
            <p class="card-text p-2 m-0">Số căn cước công dân: {{cccd}}</p>
            {{error}}
            <h6></h6>
        </div>
        <qrcode-stream @init="onInit" @decode="onDecode" :torch="false"></qrcode-stream>
        <!-- <div class="card-footer bg-white text-end">
            <a href="#" class="card-link">Đổi email</a>
            <a href="#" class="card-link">Đổi số điện thoại</a>
            <a href="#" class="card-link">Đổi mật khẩu</a>
        </div> -->
    </div>
    
</div>
    
</template>

<script>
import  {QrcodeStream} from 'vue-qrcode-reader'
export default {
    components: {
        QrcodeStream
    },
    data() {
        return {
            employee: JSON.parse(localStorage.getItem('employee')),
            error: '',
            cccd: '',
            torch: false
        }
    },
    methods: {
        async onInit (promise) {
            // show loading indicator
            try {
            const { capabilities } = await promise

            // successfully initialized
            } catch (error) {
            if (error.name === 'NotAllowedError') {
                this.error = "user denied camera access permisson"
            } else if (error.name === 'NotFoundError') {
                this.error = "no suitable camera device installed"
            } else if (error.name === 'NotSupportedError') {
                this.error = "page is not served over HTTPS (or localhost)"
            } else if (error.name === 'NotReadableError') {
                this.error = "maybe camera is already in use"
            } else if (error.name === 'OverconstrainedError') {
                this.error = "did you requested the front camera although there is none?"
            } else if (error.name === 'StreamApiNotSupportedError') {
                this.error = "browser seems to be lacking features"
            }
            } finally {
            // hide loading indicator
            }
        },
        onDecode(decodedString){
            this.cccd = decodedString
        }
    }
}
</script>
