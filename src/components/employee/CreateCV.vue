<template>
    <div id="create-cv" class="">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
            <div class="card card-registration my-4">
                <div class="card-body px-md-5 text-black">
                    <h3 class="mb-4 text-uppercase">{{employee.name}}</h3>
                    <div class="row">
                        <div class="col-xl-6">
                            <p><i class="bi bi-geo-alt"></i> {{employee.address + ', ' + employee.district.Name + ', ' + employee.province.Name}}</p>
                            <p><i class="bi bi-envelope"></i> {{employee.email}}</p>
                            <p><i class="bi bi-calendar"></i> {{employee.birthdate}}</p>
                        </div>
                        <div class="col-xl-6">
                            <p>Cấp bậc: {{employee.level}}</p>
                            <p>Ngành: {{employee.major}}</p>
                            <p>Chuyên nghành: {{employee.skill}}</p>
                        </div>
                    </div>  
                </div>

                <div class="card-body px-md-5">
                <div class="row">
                    <div class="col-xl-6 mt-4 border-end border-2 border-primary">
                        <h4 class="my-4 d-inline">BẰNG CẤP, CHỨNG CHỈ</h4>
                        <button @click="delDegree" class="btn btn-danger float-end mx-1 p-1"><i class="fas fa-minus"></i> Xóa</button>
                        <button @click="addDegree" class="btn btn-success float-end mx-1 p-1"><i class="fas fa-plus"></i> Thêm</button>
                        <div v-for="degree in degrees">
                        <div class="mt-4">
                            <label class="form-label">Tên bằng cấp, chứng chỉ</label>
                            <input type="text" class="form-control" v-model="degree.name">
                        </div>
                        <div class="mt-2">
                            <label class="form-label">Nghành học</label>
                            <input type="text" class="form-control" v-model="degree.major">
                        </div>
                        <div class="mt-2">
                            <label class="form-label">Trường</label>
                            <input type="text" class="form-control" v-model="degree.school">
                        </div>
                        <div class="row">
                            <div class="col-md-6 mt-2">
                                <label class="form-label">Năm tốt nghiệp</label>
                                <input type="text" class="form-control" v-model="degree.year">
                            </div>
                            <div class="col-md-6 mt-2">
                                <label class="form-label">Mã số chứng chỉ</label>
                                <input type="text" class="form-control" v-model="degree.code">
                            </div>
                        </div>
                        <hr class="bg-danger border-2 border-top border-danger"/>    
                        </div>
                        
                    </div>
                    <div class="col-xl-6 mt-4 border-start border-2 border-primary">
                        <h4 class="my-4 d-inline">KĨ NĂNG CHUYÊN BIỆT</h4>
                        <button @click="delSkill" class="btn btn-danger float-end mx-1 p-1"><i class="fas fa-minus"></i> Xóa</button>
                        <button @click="addSkill" class="btn btn-success float-end mx-1 p-1"><i class="fas fa-plus"></i> Thêm</button>
                        <div v-for="skill in skills">
                        <div class="mt-4">
                            <label class="form-label">Tên kĩ nămg</label>
                            <input type="text" class="form-control" v-model="skill.name">
                        </div>
                        <div class="mt-2">
                            <label class="form-label">Trường</label>
                            <input type="text" class="form-control" v-model="skill.school">
                        </div>
                        <div class="mt-2">
                            <label class="form-label">Năm cấp</label>
                            <input type="text" class="form-control" v-model="skill.year">
                        </div>
                        <hr class="bg-danger border-2 border-top border-danger"/>    
                        </div>
                    </div>
                    <div class="col-xl-6 mt-4 d-inline">
                        <h4 class="my-4 d-inline">QUÁ TRÌNH CÔNG TÁC</h4>
                        <button @click="delCompany" class="btn btn-danger float-end mx-1 p-1"><i class="fas fa-minus"></i> Xóa</button>
                        <button @click="addCompany" class="btn btn-success float-end mx-1 p-1"><i class="fas fa-plus"></i> Thêm</button>
                    </div>
                    <div class="col-xl-6"/>
                    <div class="col-xl-6 mt-4 p-3 border border-primary" v-for="(company, index1) in companys">
                        <div class="mt-2">
                            <label class="form-label">Tên công ty</label>
                            <input type="text" class="form-control" v-model="company.name">
                        </div>
                        <div v-for="(item, index2) in company.position">
                        <div class="mt-2">
                            <label class="form-label">Chức vụ</label>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" v-model="item.name"/>
                                <button @click="addPosition(index1)" class="btn btn-primary" v-if="index2 == 0">Thêm</button>
                                <button @click="delPosition(index1,index2)" class="btn btn-primary" v-else>Xóa</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <label class="form-label">Từ</label>
                                <input type="text" class="form-control" v-model="item.from">
                            </div>
                            <div class="col-sm-6">
                                <label class="form-label">Đến</label>
                                <input type="text" class="form-control" v-model="item.to">
                            </div>  
                        </div>
                        </div>
                    </div>
                </div>
                <table class="table table-bordered mt-5"> 
                <thead>
                    <tr>
                        <th colspan=2>
                        <h4 class="my-4 d-inline">KẾT QUẢ ĐÁNH GIÁ</h4>
                        </th>
                        <th >
                        Điểm (1-10)
                        </th>
                    </tr>
                </thead>
                <tbody class="accordion" id="accordionExample">
                    
                    <tr v-for="(item, index) in criteria">
                        <td colspan=2>
                            <div class="accordion-item">
                                <h4 class="accordion-header" :id="'flush-heading'+index">
                                <button class="accordion-button collapsed p-1" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse'+index" aria-expanded="false" :aria-controls="'flush-collapse'+index">
                                    {{index+1}}. {{item.name}}
                                </button>
                                </h4>
                                <div :id="'flush-collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-heading'+index" data-bs-parent="#accordionExample">
                                <div class="accordion-body">{{item.detail}}</div>
                                </div>
                            </div>
                        </td>
                        <td style="width: 110px">
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
            </div>
           
            
            <button type="submit" class="btn btn-primary" @click="handleSubmit">Submit</button>
        
            </div>
            
        </div>
        </div>
    </div>


        <h2 class="text-center mb-4">CVID</h2>
        
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
                    code: ''
                }],
                skills: [{
                    name: '',
                    school: '',
                    year: '',
                }],
                companys: [{
                    name: '',
                    position: [{
                        'from': '',
                        'to': '',
                        'name': ''
                    }]
                }],
                point: [],
                KPI: ['','','','',''],
                criteria: '',
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                console.log(this.companys)
            },
            addDegree(){
                this.degrees.push({
                    name: '',
                    major: '',
                    school: '',
                    year: '',
                    code: '',
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
            },
            delSkill(){
                this.skills.pop();
            },
            addCompany(){
                this.companys.push({
                    name: '',
                    position: [{
                        'from': '',
                        'to': '',
                        'name': ''
                    }]
                });
            },
            delCompany(){
                this.companys.pop();
            },
            addPosition(index){
                    this.companys[index].position.push({
                        'from': '',
                        'to': '',
                        'name': ''
                    });
            },
            delPosition(index, index1){
                this.companys[index].position.splice(index1, 1);
            },
            
      
        },
        created(){
            this.employee = JSON.parse(localStorage.getItem('employee'))
            this.employee.birthdate = this.employee.birthdate.split('T')[0]
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
