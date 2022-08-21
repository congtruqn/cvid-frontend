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
                            <input class="form-check-input" type="checkbox" v-model="selected" :value="position._id" :id="'position'+position._id" :disabled="position.status == 1">
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
                        <div class="form-check mx-3" v-for="item in filteredSchool" :key="item._id">
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
                    <div class="accordion" id="accordionRecommend">
                    <div class="accordion-item" v-for="(position,id) in selected" :key="id">
                        <h2 class="accordion-header row m-0" :id="'headingRecommend'+id">
                        <button class="accordion-button" :style="{width: '75%'}" type="button" data-bs-toggle="collapse" :data-bs-target="'#collaoseRecommend'+id" aria-expanded="true" :aria-controls="'collaoseRecommend'+id">
                            {{getNamePosition(position)}}
                        </button>
                        <button class="btn btn-sm btn-secondary col-3" @click="stopRecruiting(item.id, e)">Dừng tuyển</button>

                        </h2>
                        <div :id="'collaoseRecommend'+id" class="accordion-collapse collapse show" :aria-labelledby="'headingRecommend'+id">
                        <div class="accordion-body0">
                            <div class="card mb-3" v-for="cv in filteredCV(list_cv_recommend)" v-if="cv.position_id == position">
                            <div class="card-body">
                                <h5 class="card-title">{{cv.name}}</h5>
                                <p class="card-text text-primary mb-0">{{cv.position}}</p>
                                <p class="card-text text-primary mb-0">Điểm CV: {{cv.point}}/10</p>
                                <p class="card-text text-primary mb-0">Trường: {{cv.school}}</p>
                                <p class="card-text text-primary">Chuyên nghành: {{cv.skill}}</p>
                                <a :href="'/business/cvid/'+cv._id+'?position='+position" target="_blank" class="btn btn-primary">Xem chi tiết</a>
                                <span class="m-auto">{{cv.review}}</span>
                                <input type="checkbox" class="form-check-input float-end me-2 p-3">
                                <span class="badge bg-secondary float-end me-2 p-3">{{cv.rating}}</span>
                            </div>
                            </div>                        
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h5 class="text-primary text-center pb-2">CV ứng tuyển</h5>
                    <div class="accordion" id="accordionRecruitment">
                    <div class="accordion-item" v-for="(position,id) in selected" :key="id">
                        <h2 class="accordion-header row m-0" :id="'headingRecruitment'+id">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collaoseRecruitment'+id" aria-expanded="true" :aria-controls="'collaoseRecruitment'+id">
                            {{getNamePosition(position)}}
                        </button>
                        </h2>
                        <div :id="'collaoseRecruitment'+id" class="accordion-collapse collapse show" :aria-labelledby="'headingRecruitment'+id">
                        <div class="accordion-body0">
                            <div class="card mb-3" v-for="cv in list_cv" v-if="cv.position_id == id">
                            <div class="card-body">
                                <h5 class="card-title">{{cv.name}}</h5>
                                <p class="card-text text-primary mb-0">{{cv.position}}</p>
                                <p class="card-text text-primary mb-0">Điểm CV: {{cv.point}}/10</p>
                                <p class="card-text text-primary mb-0">Trường: {{cv.school}}</p>
                                <p class="card-text text-primary">Chuyên nghành: {{cv.skill}}</p>
                                <a :href="'/business/cvid/'+cv._id+'?position='+id" target="_blank" class="btn btn-primary">Xem chi tiết</a>
                            </div>
                            </div>                        
                        </div>
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
            list_cv_recommend: [],
            list_cv: []
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
            this.list_cv = [];
            this.selected.forEach(id => {
                this.$http.post(`${BASE_URL}/job/getcvidforposition`, {
                    id: id
                }).then(res => {
                    const job_list = res.data.job_list 
                    const cvid = job_list.map(t1 => ({...t1, ...res.data.cv_list.find(t2 => t2._id == t1.employee_id)}))
                    cvid.forEach(el => {
                        if (el.type == 1){
                            this.list_cv.push(el)
                        }
                    })
                    this.$http.get(`${BASE_URL}/department/findcvforposition/${id}`, {
                    }).then(res => {
                        let cvid_recommend = res.data.map(t1 => ({...t1, ...job_list.find(t2 => t2.employee_id == t1._id)}))
                        cvid_recommend.forEach(el => {
                            if (el.type == 0 || !el.type){
                                el.position_id = id
                                el._id = el.employee_id?el.employee_id:el._id
                                this.list_cv_recommend.push(el)
                            }
                        })
                        console.log(this.list_cv_recommend)  
                    }).catch(err => {
                        console.log(err)
                    })
                }).catch(err => {
                    console.log(err)
                })
                
            })
          
        },
        filteredCV(list_cv) {
            if (!list_cv){list_cv = []}
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
        getNamePosition(id){
            return this.position_list.find(element => element._id == id).name
        },
        stopRecruiting(id, e){
            e.preventDefault()
            this.$http.post(`${BASE_URL}/department/position/stop`,{
                position_id: id
            })
            .then(res => {
                if (res.data) window.location.reload();
            }).catch(err => {
                console.log(err)
            })
        }
        
    },
    async created(){

        await this.$http.get(`${BASE_URL}/department/list/${this.business.username}`)
        .then(res => {
            res.data.forEach(department =>{
                department.position.forEach(position => {
                    this.position_list.push(position)
                    if (position.status == 1){
                        this.selected.push(position._id)
                    }
                })
            })
            this.recruit();
            
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

     
    },
}
</script>
