<template>
<div class="table-responsive-xxl">
    <table class="table table-sm caption-top">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tên doanh nghiệp</th>
                <th scope="col">Mã số thuế</th>
                <th scope="col">Email</th>
                <th scope="col">Thao tác</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in items">
                <th scope="row">{{index+1}}</th>
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
        this.$http.post(`${BASE_URL}/admin/get-all-business`,{
            token: localStorage.getItem('token')
        })
        .then(res=> {
            this.items = res.data
        })
        .catch(function (error) {
            console.log(error.response.data)
        });
    }
}
</script>
