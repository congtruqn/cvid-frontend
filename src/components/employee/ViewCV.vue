<template>
  	<div class="container">
		<h3 class="text-primary d-flex justify-content-center my-4">LÝ LỊCH ỨNG VIÊN</h3>
        <h4 class="text-primary text-decoration-underline">Hồ sơ cá nhân</h4>
        <div class="row">
            <div class="col-md-6">
                <p class="m-1">Họ và tên: <span class="fw-bold">{{employee.name}}</span></p>
                <p class="m-1">Ngày sinh: {{new Date(employee.birthdate).toLocaleDateString("en-US")}}</p>
                <p class="m-1">Giới tính: {{employee.gender}}</p>
                <p class="m-1">Chức danh: <span class="fw-bold">{{employee.position}}</span></p>
            </div>
            <div class="col-md-6">
                <p class="m-1">Số điện thoại: {{employee.username}}</p>
                <p class="m-1">Email: {{employee.email}}</p>
                <p class="m-1">Địa chỉ: {{employee.address+' '+employee.ward+' '+employee.district+' '+employee.province}}</p>
            </div>
        </div>
        <div class="row justify-content-between">
            <div class="col-md-6">
                <h4 class="text-primary mt-2 text-decoration-underline">Kinh nghiệm làm việc</h4>
            </div>
            <div class="col-md-6 text-md-end mt-2">
                <span class="badge bg-primary fs-6">Số năm kinh nghiệm: {{getExperience}} năm</span>
            </div>
        </div>
        <div class="card border-success mt-3" v-for="(company, index1) in employee.skillWorking" v-if="employee.skillWorking.length>0">
            <div class="card-header border-success position-relative">
                <div class="row g-3 align-items-center">
                <div class="col-md-8">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text">Nơi làm việc {{index1+1}}</span>
                        <span class="border p-1 bg-white col">{{company.name}}</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text">Từ</span>
                        <span class="border p-1 bg-white col">{{new Date(company.from).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric'})}}</span>
                        <span class="input-group-text">Đến</span>
                        <span class="border p-1 bg-white col">{{new Date(company.to).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric'})}}</span>

                    </div>
                    
                </div>
                </div>
            </div>
            <div class="card-body text-success">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group input-group-sm mb-3">
                            <span class="input-group-text">Chức danh công việc</span>
                            <span class="border p-1 bg-white col">{{company.title}}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group input-group-sm mb-3">
                        <span class="input-group-text">Mô tả công việc</span>
                        <span class="border p-1 bg-white col">{{company.detail}}</span>
                    </div>
                    </div>
                    <h5 class="text-primary">Quá trình làm việc</h5>
                    <div class="col-md-6 mb-3" v-for="(element, index2) in company.process">
                        <div class="card border-success">
                            <div class="card-header bg-transparent border-success position-relative">
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Từ</span>
                                    <span class="border p-1 bg-white col">{{new Date(element.from).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric'})}}</span>
                                    <span class="input-group-text">Đến</span>
                                    <span class="border p-1 bg-white col">{{new Date(element.to).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric'})}}</span>
                                </div>
                            </div>
                            <div class="card-body text-success">
                                
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text w-100">Chức danh công việc</span>
                                    <span class="border p-1 bg-white col">{{element.title}}</span>
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text w-100">Công việc đã thực hiện</span>
                                    <textarea class="form-control fs-6 bg-white" disabled v-model="element.work" style></textarea>
                                    <!-- <span class="border p-1 bg-white col">{{element.work}}</span> -->
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text w-100">Địa chỉ</span>
                                    <span class="border p-1 bg-white col">{{element.address}}</span>
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Kết quả</span>
                                    <span class="border p-1 bg-white col">{{element.result==1?'Hoàn thành':'Không hoàn thành'}}</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6" v-for="(element, index2) in company.process">
                        <div class="card border-success mb-3">
                            <div class="card-header bg-transparent border-success position-relative">
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Từ</span>
                                    <span class="border p-1 bg-white col">{{new Date(element.from).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric'})}}</span>
                                    <span class="input-group-text">Đến</span>
                                    <span class="border p-1 bg-white col">{{new Date(element.to).toLocaleDateString('en-US', {year: 'numeric', month: 'numeric'})}}</span>
                                </div>
                            </div>
                            <div class="card-body text-success">
                                
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text w-100">Chức danh công việc</span>
                                    <span class="border p-1 bg-white col">{{element.title}}</span>
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text w-100">Công việc đã thực hiện</span>
                                    <span class="border p-1 bg-white col">{{element.work}}</span>
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text w-100">Địa chỉ</span>
                                    <span class="border p-1 bg-white col">{{element.address}}</span>
                                </div>
                                <div class="input-group input-group-sm mb-2">
                                    <span class="input-group-text">Kết quả</span>
                                    <span class="border p-1 bg-white col">{{element.result==1?'Hoàn thành':'Không hoàn thành'}}</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="input-group input-group-sm">
                        <span class="input-group-text">Lý do nghỉ việc</span>
                        <span class="border p-1 bg-white col">{{company.leaving==1?'Đúng quy định':'Tự nghỉ'}}</span>
                    </div>
                </div>
            </div>
        </div>
        <h5 class="text-primary m-2">Kết quả đánh giá</h5>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center bg-light">
                Tiêu chí
                <input type="text" class="form-control-plaintext form-control-sm" value="Điểm" :style="{maxWidth: '3rem'}" disabled/>
            </li>
            <li class="list-group-item" v-for="(ele, index) in criteria" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                    <span>{{index+1+'. '+ele.name}} <a data-bs-toggle="collapse" :href="'#collapse'+index" class="link-primary" role="button" aria-expanded="false" :aria-controls="'collapse'+index"><i class="fas fa-question-circle ms-0"></i></a></span>
                    <input type="number" class="form-control form-control-sm bg-white text-dark" disabled :style="{maxWidth: '3.5rem'}" v-model="employee.assessment[index]"/>
                </div>
                <div class="collapse" :id="'collapse'+index">
                    <ul class="list-group ms-5">
                        <li class="" v-for="item in ele.detail.split('.,')">{{item}}</li>
                    </ul>  
                </div>
            </li>
        </ul>
		<h4 class="text-primary mt-2 text-decoration-underline">Quá trình học tập</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="card border-primary mb-3">
                    <div class="card-header">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">Từ:</span>
                            <input type="text" class="form-control bg-white" :value="employee.startyear" disabled>    
                            <span class="input-group-text">Đến:</span>
                            <input type="text" class="form-control bg-white" :value="employee.endyear" disabled>
                        </div>
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">{{employee.school}}</h5>
                        <p class="card-text mx-2 my-1">Cấp bậc: {{employee.level}}</p>
                        <p class="card-text mx-2 my-1">Nghành: {{employee.major}}</p>
                        <p class="card-text mx-2 my-1">Chuyên nghành: {{employee.skill}}</p>
                        <p class="card-text mx-2 my-1">Điểm:</p>
                        <p class="card-text mx-2 my-1">Xếp loại: {{employee.rating}}</p>
                        
                    </div>
                </div>
            </div>
          
            <div class="col-md-6" v-for="(ele, index) in employee.skillEducation">
                <div class="card border-primary mb-3">
                    <div class="card-header">
                        <div class="input-group input-group-sm">
                            <span class="input-group-text">Từ:</span>
                            <input type="month" class="form-control" v-model="ele.from">    
                            <span class="input-group-text">Đến:</span>
                            <input type="month" class="form-control bg-white" v-model="ele.to">
                        </div>
                    </div>
                    <div class="card-body">
                        <input type="text" class="form-control form-control-sm mb-2 dropdown-toggle" :id="'dropdownSchool'+index" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" v-model="ele.school" placeholder="Tên trường">
                        <ul class="dropdown-menu w-100 overflow-auto" :aria-labelledby="'dropdownSchool'+index" :style="{maxHeight: '400px'}">
                            <li v-for="school in filteredSchool(ele.school)"  @click="ele.school=school.name"><a class="dropdown-item">{{school.name}}</a></li>
                        </ul>
                        <div class="row mb-2">
                            <label class="col-sm-4 col-form-label col-form-label-sm">Cấp bậc:</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="ele.level" @change="ele.major=''">
                                    <option value="" disabled>Chọn cấp bậc</option>
                                    <option value="Sơ cấp">Sơ cấp</option>
                                    <option value="Trung cấp">Trung cấp</option>
                                    <option value="Cao đẳng">Cao đẳng</option>
                                    <option value="Đại học">Đại học</option>
                                </select>
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label class="col-sm-4 col-form-label col-form-label-sm">Nghành:</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="ele.major" @change="ele.skill=''">
                                    <option value="" disabled>Chọn ngành nghề</option>
                                    <option v-for="major in majors" v-if="major.level == ele.level" :value="major.name">{{major.name}}</option>   
                                </select>
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label class="col-sm-4 col-form-label col-form-label-sm">Chuyên nghành:</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                    <option value="" disabled>Chọn chuyên nghành</option>
                                    <option v-for="skill in skillList(ele.level, ele.major)" :value="skill">{{skill}}</option>   
                                </select>
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label class="col-sm-4 col-form-label col-form-label-sm">Điểm:</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm bg-white" v-model="ele.point" disabled>
                            </div>
                        </div> 
                        <div class="row mb-2">
                            <label class="col-sm-4 col-form-label col-form-label-sm">Xếp loại:</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm bg-white" v-model="ele.rating" disabled>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <h4 class="text-primary mt-2 text-decoration-underline" v-if="employee.shortTraining && employee.shortTraining.length>0">Các khoá đào tạo ngắn hạn</h4>
        <div class="card mb-3" v-for="(ele, index) in employee.shortTraining" v-if="employee.shortTraining.length>0">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text">Từ</label>
                            <input type="month" class="form-control" v-model="ele.from">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text">Đến</label>
                            <input type="month" class="form-control" v-model="ele.to">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text">Chứng chỉ đại được</label>
                            <input type="text" class="form-control" v-model="ele.name">
                        </div>
                        <div class="input-group input-group-sm mb-3">
                            <label class="input-group-text">Đơn vị tổ chức</label>
                            <input type="text" class="form-control" v-model="ele.place">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h4 class="text-primary mt-2 text-decoration-underline">Khả năng ngoại ngữ và vi tính</h4>
        <table class="table table-bordered border-primary text-center">
            <thead>
                <tr>
                    <th colspan="5"><h5 class="text-primary m-1">Khả năng Tiếng Anh</h5></th>
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Kĩ năng</th>
                    <th class="col">Giỏi</th>
                    <th class="col">Tốt</th>
                    <th class="col">Bình thường</th>
                    <th class="col">Cơ bản</th>
                </tr>
            </thead>
            <tbody>
                <tr class="d-flex">
                    <th class="col-2">Nghe</th>
                    <td class="col" v-for="point in 4"><input class="form-check-input" type="radio" v-model="employee.skillEnglish.listening" :value="point" disabled></td>
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Nói</th>
                    <td class="col" v-for="point in 4"><input class="form-check-input" type="radio" v-model="employee.skillEnglish.speaking" :value="point" disabled></td>
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Đọc</th>
                    <td class="col" v-for="point in 4"><input class="form-check-input" type="radio" v-model="employee.skillEnglish.reading" :value="point" disabled></td>
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Viết</th>
                    <td class="col" v-for="point in 4"><input class="form-check-input" type="radio" v-model="employee.skillEnglish.writing" :value="point" disabled></td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered border-primary text-center" v-for="skill in employee.skillLanguage" v-if="skill.name!=''">
            <thead>
                <tr>
                    <th colspan="5"><input type="text" class="form-control text-center text-primary h5 fs-5" placeholder="Tên ngoại ngữ" v-model="skill.name"></th>
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
                    <td v-for="point in 4"><input class="form-check-input" type="radio" v-model="skill.listening" :value="point"></td>
                    
                </tr>
                <tr>
                    <th scope="row">Nói</th>
                    <td v-for="point in 4"><input class="form-check-input" type="radio" v-model="skill.speaking" :value="point"></td>
                </tr>
                <tr>
                    <th scope="row">Đọc</th>
                    <td v-for="point in 4"><input class="form-check-input" type="radio" v-model="skill.reading" :value="point"></td>
                </tr>
                <tr>
                    <th scope="row">Viết</th>
                    <td v-for="point in 4"><input class="form-check-input" type="radio" v-model="skill.writing" :value="point"></td>
                </tr>
            </tbody>
        </table>
		<table class="table table-bordered border-primary text-center">
            <thead>
                <tr>
                    <th colspan="8"><h5 class="text-primary m-1">Khả năng vi tính</h5></th>
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Đánh giá</th>
                    <th class="col">World</th>
                    <th class="col">Excel</th>
                    <th class="col-5">Phần mền khác</th>
                </tr>
            </thead>
            <tbody>
                <tr class="d-flex">
                    <th class="col-2">Giỏi</th>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.word" value="1" disabled></td>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.excel" value="1" disabled></td>
                    <td class="col-5"><input type="text" class="form-control form-control-sm bg-white" v-model="employee.skillComputer.other[0]" disabled></td>
                    
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Tốt</th>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.word" value="2" disabled></td>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.excel" value="2" disabled></td>
                    <td class="col-5"><input type="text" class="form-control form-control-sm bg-white" v-model="employee.skillComputer.other[1]" disabled></td>
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Bình thường</th>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.word" value="3" disabled></td>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.excel" value="3" disabled></td>
                    <td class="col-5"><input type="text" class="form-control form-control-sm bg-white" v-model="employee.skillComputer.other[2]" disabled></td>
                </tr>
                <tr class="d-flex">
                    <th class="col-2">Cơ bản</th>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.word" value="4" disabled></td>
                    <td class="col"><input class="form-check-input" type="radio" v-model="employee.skillComputer.excel" value="4" disabled></td>
                    <td class="col-5"><input type="text" class="form-control form-control-sm bg-white" v-model="employee.skillComputer.other[3]" disabled></td>
                </tr>
            </tbody>
        </table>
        <table class="table table-bordered border-primary text-center" v-if="employee.skillOther.length>0">
            <thead>
                <tr>
                    <th colspan="7"><h5 class="text-primary m-1">Kỹ năng khác</h5></th>
                </tr>
                <tr>
                    <th scope="col">Tên kỹ năng</th>
                    <th scope="col">Giỏi</th>
                    <th scope="col">Tốt</th>
                    <th scope="col">Bình thường</th>
                    <th scope="col">Cơ bản</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="skill in employee.skillOther">
                    <th scope="row"><input type="text" class="form-control form-control-sm bg-white" v-model="skill.name" disabled></th>
                    <td v-for="point in 4"><input class="form-check-input" type="radio" v-model="skill.point" :value="point" disabled></td>

                </tr>
                
            </tbody>
        </table>
  
  	</div>

</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    export default {  
        data(){
            return {
                cv: '',
                criteria: '',
				employee: ''
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/employee/cvid/${this.$route.params.id}`)
            .then(res => {
                this.cv = res.data;
				this.employee = res.data;
                console.log(this.employee)
            }) 

            this.$http.get(`${BASE_URL}/criteria/getall`)
            .then(res => {
                this.criteria = res.data;
            }) 
        },
        computed: {
          getExperience(){
            var sum = 0
            if (this.employee.skillWorking && this.employee.skillWorking.length > 0){
              this.employee.skillWorking.filter(function(company){
                  sum += ((new Date(company.to)).getTime()-(new Date(company.from)).getTime())
                })
            }
            return Math.round(sum/15768000000)/2
          }
        },
    }
</script>