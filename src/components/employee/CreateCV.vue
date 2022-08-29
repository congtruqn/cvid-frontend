<template>
    <div class="container">
        <h3 class="text-primary d-flex justify-content-center my-4">TẠO LÝ LỊCH ỨNG VIÊN</h3>
        <h4 class="text-primary text-decoration-underline">Hồ sơ cá nhân</h4>
        <div class="row">
            <div class="col-md-6">
                <p class="m-1">Họ và tên: {{employee.name}}</p>
                <p class="m-1">Ngày sinh: {{employee.birthdate}}</p>
                <p class="m-1">Giới tính: {{employee.gender}}</p>
            </div>
            <div class="col-md-6">
                <p class="m-1">Số điện thoại: {{employee.username}}</p>
                <p class="m-1">Email: {{employee.email}}</p>
                <p class="m-1">Địa chỉ: {{employee.address+' '+employee.ward+' '+employee.district+' '+employee.province}}</p>
            </div>
        </div>
        <h4 class="text-primary mt-2 text-decoration-underline">Kinh nghiệp làm việc</h4>
        <div class="card border-success mt-3" v-for="(compa, index1) in companies">
            <div class="card-header border-success position-relative">
                <div class="row g-3 align-items-center">
                <div class="col-md-8">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text">Công ty {{index1+1}}</span>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text">Từ</span>
                        <input type="text" class="form-control">
                        <span class="input-group-text">Đến</span>
                        <input type="text" class="form-control">
                    </div>
                </div>
                </div>
                <button class="btn position-absolute top-0 start-100 translate-middle" @click="delCompany(index1)"><i class="fas fa-times-circle text-danger fa-lg"></i></button>
            </div>
            <div class="card-body text-success">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text">Chức danh công việc</span>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text">Mô tả công việc</span>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    </div>

                    <div class="col-md-6" v-for="(posi, index2) in compa.position">
                        <div class="card border-success mb-3">
                            <div class="card-header bg-transparent border-success position-relative">
                                Quá trình làm việc
                                <button class="btn position-absolute top-0 start-100 translate-middle" @click="delPosition(index1, index2)">
                                    <i class="fas fa-times-circle text-danger fa-lg"></i>
                                </button>
                            </div>
                            <div class="card-body text-success">
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Từ</span>
                                    <input type="text" class="form-control">
                                    <span class="input-group-text">Đến</span>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Công việc</span>
                                    <input type="text" class="form-control">
                                    
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Chức danh công việc</span>
                                    <input type="text" class="form-control">
                                
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Địa chỉ</span>
                                    <input type="text" class="form-control">
                                
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Kết quả</span>
                                    <select class="form-select" id="inputGroupSelect01">
                                        <option selected disabled>Chọn...</option>
                                        <option value="1">Hoàn thành</option>
                                        <option value="0">Không hoàn thành</option>
                                    </select>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 me-auto d-grid gap-2 mb-3">
                        <button class="btn border-success" @click="addPosition(index1)"><i class="fas fa-plus fa-5x"></i></button>
                    </div>
                    <div class="input-group input-group-sm">
                        <span class="input-group-text">Lý do nghỉ việc</span>
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected disabled>Chọn...</option>
                            <option value="1">Đúng quy định</option>
                            <option value="0">Tự nghỉ</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button" @click="addCompany()">Thêm công ty</button>
        </div>
        <h5 class="text-primary m-2">Kết quả đánh giá</h5>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center bg-light">
                Tiêu chí
                <input type="text" class="form-control-plaintext form-control-sm" value="Điểm" :style="{maxWidth: '3rem'}" readonly/>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(ele, index) in criteria" :key="index">
                 {{index+1+'. '+ele.name}}
                <input type="number" class="form-control form-control-sm" :style="{maxWidth: '3.5rem'}"/>
            </li>
        </ul>
        <h4 class="text-primary mt-2 text-decoration-underline">Quá trình học tập</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="card border-primary mb-3">
                    <div class="card-header">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">Từ:</span>
                            <input type="text" class="form-control bg-white" :value="employee.startyear" readonly>    
                            <span class="input-group-text">Đến:</span>
                            <input type="text" class="form-control bg-white" :value="employee.endyear" readonly>
                        </div>
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">{{employee.school}}</h5>
                        <p class="card-text mx-2 my-1">Cấp bậc: {{employee.level}}</p>
                        <p class="card-text mx-2 my-1">Nghành: {{employee.major}}</p>
                        <p class="card-text mx-2 my-1">Chuyên nghành: {{employee.skill}}</p>
                        <div class="row mb-2">
                            <label for="colFormLabelSm" class="mx-2 col-sm-3 col-form-label col-form-label-sm">Điểm:</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm">
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label for="colFormLabelSm" class="mx-2 col-sm-3 col-form-label col-form-label-sm">Xếp loại:</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm">
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
          
            <div class="col-md-6" v-for="(degree, index) in degrees">
                <div class="card border-primary mb-3">
                    <div class="card-header">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">Từ:</span>
                            <input type="text" class="form-control" >    
                            <span class="input-group-text">Đến:</span>
                            <input type="text" class="form-control bg-white">
                        </div>
                        <button class="btn position-absolute top-0 start-100 translate-middle" @click="delDegree(index)">
                            <i class="fas fa-times-circle text-danger fa-lg"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <input type="text" class="form-control form-control-sm mb-2 dropdown-toggle" :id="'dropdownSchool'+index" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" v-model="degree.school" placeholder="Tên trường">
                        <ul class="dropdown-menu w-100 overflow-auto" :aria-labelledby="'dropdownSchool'+index" :style="{maxHeight: '400px'}">
                            <li v-for="ele in filteredSchool(degree.school)"  @click="degree.school=ele.name"><a class="dropdown-item">{{ele.name}}</a></li>
                        </ul>
                        <div class="row mb-2">
                            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Cấp bậc:</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="degree.level" @change="degree.major=''">
                                    <option value="" disabled>Chọn cấp bậc</option>
                                    <option value="Sơ cấp">Sơ cấp</option>
                                    <option value="Trung cấp">Trung cấp</option>
                                    <option value="Cao đẳng">Cao đẳng</option>
                                    <option value="Đại học">Đại học</option>
                                </select>
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Nghành:</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="degree.major" required @change="degree.skill=''">
                                    <option value="" disabled>Chọn ngành nghề</option>
                                    <option v-for="major in majors" v-if="major.level == degree.level" :value="major.name">{{major.name}}</option>   
                                </select>
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Chuyên nghành:</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option value="" disabled>Chọn chuyên nghành</option>
                                    <option v-for="skill in skillList(degree.level, degree.major)" :value="skill">{{skill}}</option>   
                                </select>
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Điểm:</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm">
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label for="colFormLabelSm" class="col-sm-4 col-form-label col-form-label-sm">Xếp loại:</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm">
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-md-6 me-auto d-grid gap-2 mb-3">
                <button class="btn border-success" @click="addDegree"><i class="fas fa-plus fa-5x"></i></button>
            </div>
        </div>
        <h4 class="text-primary mt-2 text-decoration-underline">Các khoá đào tạo ngắn hạn</h4>
        <div class="card mb-3" v-for="a in 1">
            <div class="card-body">
                <button class="btn position-absolute top-0 start-100 translate-middle">
                    <i class="fas fa-times-circle text-danger fa-lg"></i>
                </button>
                <div class="row">
                    <div class="col-md-4">
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Từ</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Đến</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Chứng chỉ đại được</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text" for="inputGroupSelect01">Đơn vị tổ chức</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="me-auto d-grid gap-2 mb-3">
            <button class="btn border-success"><i class="fas fa-plus fa-3x"></i></button>
        </div>
        <h4 class="text-primary mt-2 text-decoration-underline">Khả năng ngoại ngữ</h4>
        <table class="table table-bordered border-primary text-center">
            <thead>
                <tr>
                    <th colspan="5"><h5 class="text-primary m-1">Khả năng Tiếng Anh</h5></th>
                </tr>
                <tr>
                    <th scope="col">Kĩ năng</th>
                    <th scope="col">Giỏi</th>
                    <th scope="col">Tốt</th>
                    <th scope="col">Bình thường</th>
                    <th scope="col">Cơ bản</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nghe</th>
                    <td v-for="index in 4"><input type="radio" name="listening" :value="index"></td>
                    
                </tr>
                <tr>
                    <th scope="row">Nói</th>
                    <td v-for="index in 4"><input type="radio" name="speaking" :value="index"></td>
                </tr>
                <tr>
                    <th scope="row">Đọc</th>
                    <td v-for="index in 4"><input type="radio" name="reading" :value="index"></td>
                </tr>
                <tr>
                    <th scope="row">Viết</th>
                    <td v-for="index in 4"><input type="radio" name="writing" :value="index"></td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered border-primary text-center">
            <thead>
                <tr>
                    <th colspan="5"><input type="text" class="form-control text-center text-primary h5 fs-5" placeholder="Tên ngoại ngữ"></th>
                </tr>
                <tr>
                    <th scope="col">Kĩ năng</th>
                    <th scope="col">Giỏi</th>
                    <th scope="col">Tốt</th>
                    <th scope="col">Bình thường</th>
                    <th scope="col">Cơ bản</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nghe</th>
                    <td v-for="index in 4"><input type="radio" name="listening" :value="index"></td>
                    
                </tr>
                <tr>
                    <th scope="row">Nói</th>
                    <td v-for="index in 4"><input type="radio" name="speaking" :value="index"></td>
                </tr>
                <tr>
                    <th scope="row">Đọc</th>
                    <td v-for="index in 4"><input type="radio" name="reading" :value="index"></td>
                </tr>
                <tr>
                    <th scope="row">Viết</th>
                    <td v-for="index in 4"><input type="radio" name="writing" :value="index"></td>
                </tr>
            </tbody>
        </table>
        <div class="me-auto d-grid gap-2 mb-3">
            <button class="btn border-success"><i class="fas fa-plus fa-3x"></i></button>
        </div>

        <table class="table table-bordered border-primary text-center">
            <thead>
                <tr>
                    <th colspan="5"><h5 class="text-primary m-1">Khả năng Tin học</h5></th>
                </tr>
                <tr>
                    <th scope="col">World</th>
                    <th scope="col">Giỏi</th>
                    <th scope="col">Tốt</th>
                    <th scope="col">Bình thường</th>
                    <th scope="col">Cơ bản</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nghe</th>
                    <td v-for="index in 4"><input type="radio" name="listening" :value="index"></td>
                    
                </tr>
                <tr>
                    <th scope="row">Nói</th>
                    <td v-for="index in 4"><input type="radio" name="speaking" :value="index"></td>
                </tr>
                <tr>
                    <th scope="row">Đọc</th>
                    <td v-for="index in 4"><input type="radio" name="reading" :value="index"></td>
                </tr>
                <tr>
                    <th scope="row">Viết</th>
                    <td v-for="index in 4"><input type="radio" name="writing" :value="index"></td>
                </tr>
            </tbody>
        </table>
        <div class="d-grid gap-2 col-6 mx-auto my-5">
            <button type="submit" class="btn btn-primary" @click="handleSubmit">Submit</button>
        </div>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    export default {  
        data(){
            return {
                degrees: [{
                    name: '',
                    level: '',
                    major: '',
                    skill: '',
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
                majors: [],
                schools: [],
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
                    level: '',
                    major: '',
                    skill: '',
                    school: '',
                    year: '',
                    code: '',
                });
            },
            delDegree(index){
                this.degrees.splice(index, 1)
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
            delCompany(index){
                this.companies.splice(index, 1)
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
            delPosition(index1, index2){
                this.companies[index1].position.splice(index2, 1);
            },
            skillList(level, major){
                var result = this.majors.filter(function(item){
                    return (item.name == major && item.level == level)
                })     
                if (result.length){
                    return result[0].skills
                }           
                return []
            },
            majorList(level) {
                return this.majors.filter(function(item){
                    return (item.level == level)
                }).name
            },
            filteredSchool(key) {
                return this.schools.filter(school => {
                    if (school.name.toLowerCase().indexOf(key.toLowerCase()) != -1){
                        return true
                    }
                })
            },
            changePoint(index){
                if (this.assessment[index] > 10){
                    this.assessment[index] = 10
                }
                else if (this.assessment[index] < 0){
                    this.assessment[index] = 0
                }
            }
      
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

            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.majors = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });

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
<style scoped>

</style>
