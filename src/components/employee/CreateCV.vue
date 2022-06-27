<template>
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
            <div class="card card-registration my-4">
                <div class="card-body px-md-5 text-black">
                    <h3 class="mb-4 text-uppercase">{{employee.name}}</h3>
                    <div class="row">
                        
                        <div class="col-xl-6">
                            <p>Cấp bậc: {{employee.level}}</p>
                            <p>Ngành: {{employee.major}}</p>
                            <p>Chuyên nghành: {{employee.skill}}</p>
                        </div>
                        <div class="col-xl-6">
                            <p><i class="bi bi-geo-alt"></i> {{employee.address + ', ' + employee.ward + ', ' + employee.district + ', ' + employee.province}}</p>
                            <p><i class="bi bi-envelope"></i> {{employee.email}}</p>
                            <p><i class="bi bi-calendar"></i> {{employee.birthdate}}</p>
                        </div>
                    </div>  
                </div>

                <div class="card-body px-md-5">
                <div class="row">
                    <div class="col-xl-6 mt-4 border-end border-2 border-primary">
                        <h5 class="ms-n2 my-4 d-inline">Bằng cấp, chứng chỉ</h5>
                        <button @click="delDegree" class="btn btn-sm btn-danger float-end me-n3 p-1"><i class="fas fa-minus"></i> Xóa</button>
                        <button @click="addDegree" class="btn btn-sm btn-success float-end me-1 p-1"><i class="fas fa-plus"></i> Thêm</button>

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
                            <div class="col-md-6 mt-2 ">
                                <label class="form-label">Năm tốt nghiệp</label>
                                <input v-model="degree.year" type="month" class="form-control" required>
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
                        <h5 class="ms-n2 my-4 d-inline">Kỹ năng chuyên biệt</h5>
                        <button @click="delSkill" class="btn btn-sm btn-danger float-end me-n3 p-1"><i class="fas fa-minus"></i> Xóa</button>
                        <button @click="addSkill" class="btn btn-sm btn-success float-end me-1 p-1"><i class="fas fa-plus"></i> Thêm</button>
                        <div v-for="skill in skills">
                        <div class="mt-4">
                            <label class="form-label">Tên kĩ năng</label>
                            <input type="text" class="form-control" v-model="skill.name">
                        </div>
                        <div class="mt-2">
                            <label class="form-label">Trường</label>
                            <input type="text" class="form-control" v-model="skill.school">
                        </div>
                        <div class="mt-2 ">
                            <label class="form-label">Năm cấp</label>
                            <input type="month" class="form-control" required v-model="skill.year">
                        </div>
                        <hr class="bg-danger border-2 border-top border-danger"/>    
                        </div>
                    </div>
                    <div class="col-xl-6 mt-4 d-inline">
                        <h5 class="ms-n2 my-4 d-inline">Quá trình công tác</h5>
                        <button @click="delCompany" class="btn btn-sm btn-danger float-end me-n3 p-1"><i class="fas fa-minus"></i> Xóa</button>
                        <button @click="addCompany" class="btn btn-sm btn-success float-end me-1 p-1"><i class="fas fa-plus"></i> Thêm</button>
                    </div>
                    <div class="col-xl-6"/>
                    <div class="col-xl-6 mt-4 p-3 border border-primary" v-for="(company, index1) in companies">
                        <div class="mt-2">
                            <label class="form-label">Tên công ty</label>
                            <input type="text" class="form-control" v-model="company.name">
                        </div>
                        <div v-for="(item, index2) in company.position">
                        <div class="mt-2">
                            <label class="form-label">Công việc thực hiện</label>
                            <div class="input-group">
                                <input type="text" class="form-control" v-model="item.work"/>
                                <button @click="addPosition(index1)" class="btn btn-primary" v-if="index2 == 0">Thêm</button>
                                <button @click="delPosition(index1,index2)" class="btn btn-danger" v-else>Xóa</button>
                            </div>
                        </div>
                        <div class="mt-2">
                            <label class="form-label">Chức vụ</label>
                            <input type="text" class="form-control" v-model="item.name">
                        </div>
                        <div class="mt-2">
                            <label class="form-label">Địa chỉ làm việc</label>
                            <input type="text" class="form-control" v-model="item.address">
                        </div>
                        <div class="row">
                            <div class="col-sm-6 mt-2 ">
                                <label class="form-label">Từ</label>
                                <input type="month" class="form-control" required v-model="item.from">
                            </div>
                            <div class="col-sm-6 mt-2 ">
                                <label class="form-label">Đến</label>
                                <input type="month" class="form-control" required v-model="item.to">
                            </div>  
                        </div>
                        </div>
                    </div>
                </div>
                <table class="table table-bordered mt-5"> 
                <thead>
                    <tr>
                        <th colspan=2>
                        <h5 class="my-4 d-inline">Kết quả đánh giá</h5>
                        </th>
                        <th >
                        Điểm (1-10)
                        </th>
                    </tr>
                </thead>
                <tbody class="accordion " id="accordionExample">
                    <tr v-for="(item, index) in criteria">
                        <td colspan=2>
                            <div class="accordion-item">
                                <h4 class="accordion-header" :id="'flush-heading'+index">
                                <button class="accordion-button collapsed p-1" type="button" data-bs-toggle="collapse" :data-bs-target="'#flush-collapse'+index" aria-expanded="false" :aria-controls="'flush-collapse'+index">
                                    {{index+1}}. {{item.name}}
                                </button>
                                </h4>
                                <div :id="'flush-collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'flush-heading'+index" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <li v-for="mess in item.detail.split('.,')">{{mess}}</li>
                                </div>
                                </div>
                            </div>
                        </td>
                        <td style="width: 110px">
                            <input type="number" v-model='assessment[index]' min="1" max="10" class="form-control form-control-sm" required/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td colspan="100">
                            <h6 class="display-6 text-primary text-center">Điểm CV: {{point_cv}}</h6>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span class="">Câu cam kết...</span>
            </div>
            
            <button type="submit" class="btn btn-primary" @click="handleSubmit">Submit</button>
        
            </div>
            
        </div>
        </div>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    const user = JSON.parse(localStorage.getItem('user'))
    export default {  
        data(){
            return {
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
                companies: [{
                    name: '',
                    position: [{
                        'from': '',
                        'to': '',
                        'name': '',
                        'work': '',
                        'address': ''
                    }]
                }],
                assessment: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            
                criteria: '',
                point_cv: '',
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/employee/createCV`, {
                    id : this.employee._id,
                    degrees: this.degrees,
                    skills: this.skills,
                    companies: this.companies,
                    assessment: this.assessment,
                    
                })
                .then(response => {
                    if (response.data.success){
                        this.$router.push('/employee')
                    } else {
                        Swal.fire({
                            icon: 'info',
                            title: 'Cập nhật thất bại',
                            text: `${response.data.message}`,
                            confirmButtonColor: 'var(--primary)',
                            confirmButtonText: 'Nhập lại',
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error)
                });
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
                this.companies.push({
                    name: '',
                    position: [{
                        'from': '',
                        'to': '',
                        'name': '',
                        'position': '',
                        'address': ''
                    }]
                });
            },
            delCompany(){
                this.companies.pop();
            },
            addPosition(index){
                    this.companies[index].position.push({
                        'from': '',
                        'to': '',
                        'name': '',
                        'position': '',
                        'address': ''
                    });
            },
            delPosition(index, index1){
                this.companies[index].position.splice(index1, 1);
            },
      
        },
        created(){
            this.employee = JSON.parse(localStorage.getItem('employee'))
            this.employee.birthdate = this.employee.birthdate.split('T')[0]
            if (this.employee.point) {
                this.$router.push('/employee')
            }
            this.$http.get(`${BASE_URL}/criteria/getall`)
            .then(res => {
                this.criteria = res.data;
            })  
        },

        watch : {
        }
    }
</script>
<style scoped>

</style>
