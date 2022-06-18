<template>
    <div class="container">
        <div class="row g-4 mt-2">
            <a v-for="item in position" :href="'job-detail/'+item._id" class="col-lg-6">
                <div class="p-3 active job-item">
                    <div class="d-flex align-items-center">
                        <img class="flex-shrink-0 img-fluid border rounded" src="@/assets/images/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                        <div class="text-start ps-4">
                            <h5 class="mb-3">{{item.name}}
                                <button type="button" class="btn btn-primary btn-sm position-relative ms-2 disabled float-end">
                                    New
                                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        5
                                    <span class="visually-hidden">unread messages</span>
                                </span>
                            </button>
                            </h5>
                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{{item.work_location}}</span>
                            <span class="text-truncate me-3">
                                <i class="far fa-money-bill-alt text-primary me-2"></i>
                                {{item.min_salary == '' && item.max_salary == '' ? 'Lương thỏa thuận' 
                                : item.min_salary != '' && item.max_salary != '' ? 'Từ ' + item.min_salary + ' - ' + item.max_salary + ' triệu đồng'
                                : item.min_salary == '' && item.max_salary != '' ? 'trên ' + item.min_salary + ' triệu đồng'
                                : 'Dưới ' + item.min_salary + ' triệu đồng'}}
                            </span>
                            <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: {{item.enddate.split('T')[0]}}</small>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    const id = JSON.parse(localStorage.getItem('business')).username
    export default {
        data (){
            return {
                position: [],
            }
        },
        methods : {
        },
        created(){
            this.$http.get(`${BASE_URL}/department/list/${id}`).then(res => {
                res.data.forEach(item => {
                    item.position.forEach(position => {
                        if (position.status == '1' && position.enddate > new Date().toISOString().split('T')[0] && position.amount > 0) {
                            this.position.push(position)
                        }
                    })
                })
                console.log(this.position)
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>