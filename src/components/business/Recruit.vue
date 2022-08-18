<template>
<div class="container">
    <div class="card mt-4">
        <div class="card-header text-center">
            Tuyển dụng
        </div>
        <div class="card-body">
            <form class="row g-3" v-on:submit.prevent>
                <div class="col-12 col-md-5">
                    <label for="inputState" class="form-label">Vị trí tuyển dụng</label>
                    <input type="text" class="form-control dropdown-toggle" id="dropdownMenuPosition" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" readonly/>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuPosition">
                        <div class="form-check mx-3" v-for="position in position_list" :key="position._id">
                            <input class="form-check-input" type="checkbox" v-model="selected" :value="position._id" :id="'position'+position._id">
                            <label class="form-check-label" :for="'position'+position._id">
                                {{position.name}}
                            </label>
                        </div>
                    </ul>
                </div>
                <div class="col-9 col-md-5">
                    <label for="inputSchool" class="form-label">Trường</label>
                    <input type="text" class="form-control dropdown-toggle" id="dropdownMenuSchool" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" v-model="searchSchool"/>
                    <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuSchool" style="max-height: 400px;">
                        <div class="form-check mx-3" v-for="(item,index) in filteredSchool" :key="item._id">
                            <input class="form-check-input" type="checkbox" v-model="school" :value="item.name" :id="'school'+item._id">
                            <label class="form-check-label" :for="'school'+item._id">
                                {{item.name}}
                            </label>
                        </div>
                    </ul>
                </div>
                <div class="col-3 col-md-2">
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
        <div class="card-body">
            <div class="row g-md-4">
                <div class="col-md-6">
                    <h5 class="text-primary text-center pb-2">CV đề xuất</h5>
                    <div>
                        <div class="d-flex justify-content-around my-2">
                            <div class="text-muted h5"></div>
                            <button class="btn btn-sm btn-secondary">Dừng tuyển</button>
                        </div>
                        <div class="card mb-3" v-for="cv in filteredCV(list_cv_recommend)">
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
                <div class="col-md-6">
                    <h5 class="text-primary text-center pb-2">CV ứng tuyển</h5>
                    <div v-for="position in position_list">
                        <div class="d-flex justify-content-around my-2">
                            <div class="text-muted h5">{{position.name}}</div>
                            <!-- <button class="btn btn-sm btn-secondary">Dừng tuyển</button> -->
                        </div>
                        <div class="card mb-3" v-for="cv in getCV(position._id)">
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
            selected: [],
            school: [],
            schools: [],
            searchSchool: "",
            point: 0,
            list_cv_recommend: []
        }
    },
    computed: {
        filteredSchool() {
            return this.schools.filter((school) =>{
                return school.name.toLowerCase().indexOf(this.searchSchool.toLowerCase()) != -1
            });
        },
    },
    methods: {
        recruit(){
            this.list_cv_recommend = [];
            if (this.selected.length == 0) {
                Swal.fire({
                    icon: 'info',
                    title: 'Thất bại',
                    text: 'Vui lòng chọn vị trí tuyển dụng',
                    // confirmButtonColor: 'var(--light)',
                    confirmButtonText: 'Quay lại',
                });
                return
            }
            this.$http.get(`${BASE_URL}/department/findCV/${this.selected[0]}`).then(res => {
                this.list_cv_recommend = res.data
            }).catch(err => {
                console.log(err)
            })
            this.list_cv = [];

           
        },
        filteredCV(list_cv) {
            return list_cv.filter((cv) =>{
                if (this.point > cv.point || !cv.point){
                    return false
                }
                if (this.school.length > 0 && !this.school.includes(cv.school)){
                    return false
                }
                return true
            });
        },
        
        getCV(position){
            this.$http.post(`${BASE_URL}/job/getforposition`, {
                id: position
            }).then(res => {
                var list_id = []
                res.data.forEach(job =>{
                    if (job.type == 1){
                        list_id.push(job.employee_id)
                    }
                })
                this.$http.post(`${BASE_URL}/employee/list/cvid`, {
                    selected: list_id
                }).then(res => {
                    return res.data
                }).catch(err => {
                    console.log(err)
                })
            }).catch(err => {
                console.log(err)
            })
            return []
        },
        
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
        this.$http.get(`${BASE_URL}/school/getall`)
            .then(response => {
                this.schools = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });
    }
}
</script>
