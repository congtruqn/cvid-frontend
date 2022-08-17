<template>
<div class="container">
    <div class="card mt-4">
        <div class="card-header text-center">
            Tuyển dụng
        </div>
        <div class="card-body">
            <form class="row g-3" v-on:submit.prevent>
                <div class="col-md-5">
                    <label for="inputState" class="form-label">Vị trí tuyển dụng</label>
                    <select id="inputState" class="form-select" v-model="position_id">
                        <option value="" disabled>Vui lòng chọn...</option>
                        <option v-for="position in position_list" :value="position._id">{{position.name}}</option>
                    </select>
                </div>
                <div class="col-10 col-md-5">
                    <label for="inputSchool" class="form-label">Trường</label>
                    <select id="inputSchool" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-2">
                    <label for="inputPoint" class="form-label">Điểm CV</label>
                    <input type="number" class="form-control" id="inputPoint" v-model="point" max="10" min="0">
                </div>
                <!-- <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                </div> -->
                <div class="col-12 text-center">
                    <button type="button" class="btn btn-lg btn-primary" @click="recruit">Đăng tuyển</button>
                </div>
            </form>
    
        </div>
        <hr>
        <div class="card-body row">
            <div class="card mx-2" style="width: 18rem;" v-for="cv in filteredCV(list_cv_recommend)">
                <div class="card-body">
                    <h5 class="card-title">{{cv.name}}</h5>
                    <p class="card-text text-primary mb-0">{{cv.position}}</p>
                    <p class="card-text text-primary mb-0">Điểm CV: {{cv.point}}/10</p>
                    <p class="card-text text-primary mb-0">Trường: {{cv.school}}</p>
                    <p class="card-text text-primary">Chuyên nghành: {{cv.skill}}</p>
                    
                    <a :href="'/business/cvid/'+cv._id" class="btn btn-primary">Xem chi tiết</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
const {BASE_URL} =  require('../../utils/config')
export default {
    data() {
        return {
            business: JSON.parse(localStorage.getItem('business')),
            position_list: [],
            position_id: "",
            school: "",
            point: 0,
            list_cv_recommend: []
        }
    },
    methods: {
        recruit(){
            this.list_cv_recommend = [];
            if (this.position_id == "") {
                Swal.fire({
                    icon: 'info',
                    title: 'Thất bại',
                    text: 'Vui lòng chọn vị trí tuyển dụng',
                    // confirmButtonColor: 'var(--light)',
                    confirmButtonText: 'Quay lại',
                });
                return
            }
            this.$http.get(`${BASE_URL}/department/findCV/${this.position_id}`).then(res => {
                this.list_cv_recommend = res.data
            }).catch(err => {
                console.log(err)
            })
            this.list_cv = [];

            // this.$http.post(`${BASE_URL}/job/getforposition`, {
            //     id: this.position_id
            // }).then(res => {
            //     var list_id = []
            //     res.data.forEach(job =>{
            //         if (job.type == 1){
            //             list_id.push(job.employee_id)
            //         }
            //     })
            //     this.$http.post(`${BASE_URL}/employee/list/cvid`, {
            //         selected: list_id
            //     }).then(res => {
            //         this.list_cv = res.data
            //         console.log(this.list_cv)
            //     }).catch(err => {
            //         console.log(err)
            //     })
            // }).catch(err => {
            //     console.log(err)
            // })
        },
        filteredCV(list_cv) {
            return list_cv.filter((cv) =>{
                if (this.point < cv.point){
                    return true
                }
            });
        }
    },
    created(){

        this.$http.get(`${BASE_URL}/department/list/${this.business.username}`).then(res => {
            res.data.forEach(department =>{
                department.position.forEach(position => {
                    this.position_list.push(position)
                })
            })
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>
