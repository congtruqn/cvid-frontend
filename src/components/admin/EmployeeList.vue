<template>
<div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">SĐT</th>
                <th scope="col">Email</th>
                <th scope="col">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items">
                <th scope="row">1</th>
                <td>{{item.name}}</td>
                <td>{{item.username}}</td>
                <td>{{item.email}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
const {BASE_URL} =  require('../../utils/config')
export default {
    data (){
        return {
            items: []
        }
    },
    methods: {
     
    },
    created(){
        this.$http.post(`${BASE_URL}/admin/get-all-employee`,{
            token: localStorage.getItem('token')
        })
        .then(res=> {
            this.items = res.data
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Có lỗi',
                text: error.response.data,
                confirmButtonColor: 'var(--primary)',
                confirmButtonText: 'Nhập lại',
            });
        });
    }
}
</script>