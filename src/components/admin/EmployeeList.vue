<template>
<div class="table-responsive-xxl">
    <table class="table table-sm caption-top" style="minWidth: 1000px">
        <caption>Danh sách người tìm việc</caption>
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
            <tr v-for="(item, index) in items">
                <th scope="row">{{index+1}}</th>
                <td>{{item.name}}</td>
                <td>{{item.username}}</td>
                <td>{{item.email}}</td>
                <td>
                    <a :href="'/employee/cvid/'+item._id" target="_blank" class="btn btn-sm text-primary"><i class="fas fa-eye"></i></a>
                    <button class="btn btn-sm" ><i class="fas fa-pen"></i></button>
                    <button class="btn btn-sm text-danger" @click="deleteEmployee(item._id)"><i class="fas fa-trash"></i></button>
                </td>
                
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
        deleteEmployee(id) {
            this.$http.post(`${BASE_URL}/admin/delete-employee-by-id`,{
                token: localStorage.getItem('token'),
                id: id
            })
            .then(res=> {
                if (res.data.ok == 1){
                    this.items.forEach((item, index) => {
                        if (item._id == id){
                            this.items.splice(index, 1)
                        }
                    })
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        }

     
    },
    created(){
        this.$http.post(`${BASE_URL}/admin/get-all-employee`,{
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