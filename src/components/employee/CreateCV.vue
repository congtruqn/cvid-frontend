<template>
    <div id="create-cv" class="container">
        <h2 class="text-center mb-4">CVID</h2>
        <form class="row g-3 needs-validation box-infor">
            <div class="row col-md-11">
                <h4>{{infor.name}}</h4>
                <div class="col-md-6">
                    <p><i class="bi bi-geo-alt"></i> {{infor.address + ', ' + infor.district.Name + ', ' + infor.province.Name}}</p>
                    <p><i class="bi bi-envelope"></i> {{infor.email}}</p>
                    <p><i class="bi bi-calendar"></i> {{infor.birthdate}}</p>
                </div>
                <div class="col-md-6">
                    <p>Cấp bậc: {{infor.level}}</p>
                    <p>Ngành: {{infor.major}}</p>
                    <p>Chuyên nghành: {{infor.skill}}</p>
                </div>
            </div>
                
            
            <div class="col-md-8">

            </div>
            <h4>Bằng cấp, chứng chỉ</h4>

            <div class="row clearfix">
                <div class="col-md-12 column" :style="{overflowX: 'auto'}">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" :style="{minWidth: '200px' }">
                                    Bằng cấp
                                </th>
                                <th class="text-center" :style="{ minWidth: '200px' }">
                                    Nghành học
                                </th>
                                <th class="text-center" :style="{ minWidth: '200px' }">
                                    Trường
                                </th>
                                <th class="text-center" :style="{ minWidth: '150px', width: '150px' }">
                                    Năm cấp bằng
                                </th>
                                <th class="text-center" :style="{ minWidth: '150px', width: '150px'}">
                                    Mã số chứng chỉ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="degree in degrees" >
                                <td>
                                <input type="text" v-model='degree.name'  class="form-control form-control-sm"/>
                                </td>
                                <td>
                                <input type="text" v-model='degree.major'  class="form-control form-control-sm"/>
                                </td>
                                <td>
                                <input type="text" v-model='degree.school' class="form-control form-control-sm"/>
                                </td>
                                <td>
                                <input type="number" v-model='degree.year' class="form-control form-control-sm"/>
                                </td>
                                <td>
                                <input type="text" v-model='degree.ref' class="form-control form-control-sm" />
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <button @click="addDegree" type="button" class="btn btn-primary w-auto">Thêm hàng</button>
                                    <button @click="delDegree" type="button" class="btn btn-primary w-auto">Xóa hàng</button>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h4 class="mb-3">Kiến thức & kĩ năng chuyên biệt</h4>
            <div class="row clearfix">
                <div class="col-md-12 column" :style="{overflowX: 'auto'}">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" :style="{ minWidth: '200px' }">
                                    Kĩ năng
                                </th>
                                <th class="text-center" :style="{ minWidth: '200px' }">
                                    Trường
                                </th>
                                <th class="text-center" :style="{ minWidth: '100px', width: '100px' }">
                                    Năm cấp
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="skill in skills">
                                <td>
                                    <input type="text" v-model='skill.name' class="form-control form-control-sm"   />
                                </td>
                                <td>
                                <input type="text" v-model='skill.school'  class="form-control form-control-sm"/>
                                </td>
                                <td>
                                <input type="number" v-model='skill.year' class="form-control form-control-sm"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <button @click="addSkill" type="button" class="btn btn-primary w-auto">Thêm hàng</button>
                                    <button @click="delSkill" type="button" class="btn btn-primary w-auto">Xóa hàng</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <h4 class="mb-3">Quá trình công tác</h4>
            <div class="row clearfix">
                <div class="col-md-12 column" :style="{overflowX: 'auto'}">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" :style="{ minWidth: '300px', width: '400px'}">
                                    Tên công ty
                                </th>
                                <th class="text-center" :style="{ minWidth: '300px'}">
                                    Chức vụ 
                                </th>
                                <th class="text-center" :style="{ minWidth: '100px', width: '100px'}">
                                    Từ
                                </th>
                                <th class="text-center" :style="{ width: '100px', minWidth: '100px'}">
                                    Đến
                                </th>
                                
                                
                            </tr>
                        </thead>
                        <tbody >
                            <tr v-for="job in jobs">
                                <td>
                                    <input type="text" v-model='job.name' class="form-control form-control-sm" />
                                </td>
                                <td>
                                <input type="text" v-model='job.position'  class="form-control form-control-sm"/>
                                </td>
                                <td>
                                <input type="number" v-model='job.from' class="form-control form-control-sm"/>
                                </td>
                                <td>
                                <input type="number" v-model='job.to' class="form-control form-control-sm"/>
                                </td>
                            </tr >
                                <button @click="addJob" type="button" class="btn btn-primary w-auto me-4 m-3">Thêm hàng</button>
                                <button @click="delJob" type="button" class="btn btn-primary w-auto m-3">Xóa hàng</button>
                            
                            <!-- <tr>
                                <td colspan="5">
                                    
                                </td>
                                
                            </tr> -->
                        </tbody>
                        
                    </table>
                
                </div>
            </div>
            <table class="table table-bordered"> 
                <thead>
                    <tr>
                        <th>#</th>
                        <th colspan=2>
                        Kết quả tự đánh giá
                        </th>
                        <th >
                        Điểm đánh giá (1-10)
                        </th>
                    </tr>
                </thead>
                <tbody class="accordion" id="accordionExample">
                    
                    <tr v-for="(item, index) in criteria">
                        <td colspan=2>
                            <div class="accordion-item">
                                <h4 class="accordion-header" :id="'flush-heading'+index">
                                <button class="accordion-button collapsed p-1" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse'+index" aria-expanded="false" :aria-controls="'flush-collapse'+index">
                                    {{item.name}}
                                </button>
                                </h4>
                                <div :id="'flush-collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-heading'+index" data-bs-parent="#accordionExample">
                                <div class="accordion-body">{{item.detail}}</div>
                                </div>
                            </div>
                        </td>
                        <td style="width: 180px">
                            <input type="number" v-model='point[index]' class="form-control form-control-sm"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 180px">
                            Chỉ số KPI đạt được
                        </td>
                        <td colspan="2">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text">Quý 1</span>
                                <input type="text" v-model="KPI[0]" class="form-control form-control-sm">
                                <span class="input-group-text">Quý 2</span>
                                <input type="text" v-model="KPI[1]" class="form-control form-control-sm">
                                <span class="input-group-text">Quý 3</span>
                                <input type="text" v-model="KPI[2]" class="form-control form-control-sm">
                                <span class="input-group-text">Quý 4</span>
                                <input type="text" v-model="KPI[3]" class="form-control form-control-sm">
                                <span class="input-group-text">Năm</span>
                                <input type="text" v-model="KPI[4]" class="form-control form-control-sm">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="50">
                            <input class="form-check-input" type="checkbox" id="invalidCheck" >
                            <label class="form-check-label" for="invalidCheck">
                                Bạn đã hoàn thành nhiệm vụ đúng theo luật lao động quy định không?
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" class="btn btn-primary" @click="handleSubmit">Submit</button>
        </form>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    const user = JSON.parse(localStorage.getItem('user'))
    export default {  
        data(){
            return {
                infor: '',
                profession: '',
                peRegistration: '',
                peNumber: '',
                lengthOfEmployment: '',
                degrees: [{
                    name: '',
                    major: '',
                    school: '',
                    year: '',
                    ref: ''
                }],
                skills: [{
                    name: '',
                    school: '',
                    year: '',
                }],
                jobs: [{
                    name: '',
                    position: '',
                    from: '',
                    to: '',
                    
                }],
                point: [],
                KPI: ['','','','',''],
                criteria: '',
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                console.log(this.jobs)
            },
            addDegree(){
                this.degrees.push({
                    name: '',
                    major: '',
                    school: '',
                    year: '',
                    ref: '',
                });
            },
            delDegree(){
                this.degrees.pop();
            },
            addSkill(){
                this.skills.push({
                    name: '',
                    school: '',
                    year: '',
                });
                console.log(this.skills)
            },
            delSkill(){
                this.skills.pop();
            },
            addJob(){
                this.jobs.push({
                    name: '',
                    position: '',
                    from: '',
                    to: '',
                    point: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    KPI: ['','','','','']
                });
            },
            delJob(){
                this.jobs.pop();
            }
            
      
        },
        created(){
            this.infor = JSON.parse(localStorage.getItem('user'))
            this.infor.birthdate = this.infor.birthdate.split('T')[0]
            this.$http.get(`${BASE_URL}/criteria/getall`).then(res => {
                this.criteria = res.data;
                console.log(this.criteria)
            })
            
            // this.$http.post(`${BASE_URL}/employee/get-resume`, {
            //     id: JSON.parse(localStorage.getItem('user')).username
            // })
            // .then(response => {
            //     if(response.data.resume){
            //         this.$router.push('/listproject')
            //     }
            // })
            // .catch(function (error) {
            //     console.log(error)
            // });
            
        },
        watch : {
           
            
            
        }
    }
</script>
<style scoped>
    .box-infor{
        border: 2px solid #ccc;
        border-radius: 5px;
        position: relative;
        
        
        margin: 10px;
        padding: 10px;
        box-shadow: 2px 4px 8px #ccc;
    }
</style>
