<template>
    <div class="container-fluid">
        <button v-if="!key" type="button" class="btn btn-primary btn-icon-split ms-4 mt-4" data-bs-toggle="modal" data-bs-target="#addDepartment" @click="department.name = ''">
            <i class="fas fa-plus"></i> Thêm phòng ban
        </button>
        <div class="card m-3 mx-md-4" v-for="department in departments" :key="department._id">
            <div class="card-body">
                <h5 class="card-title">{{department.name}} <a @click="copy('http://localhost:8080/business/department/dhfkjchdsfkhvdjsch')" class=""><i class="btn fas fa-link"></i></a></h5>
                <h5 class="card-title text-center text-primary" v-if="!department.position.length">Chưa có vị trí</h5>
                <div class="card mb-2" v-for="position in department.position" :key="position._id">
                    <div class="card-header">
                        {{position.jobtitle}}
                    </div>
                    <div class="card-body">
                        <div class="table-responsive table-responsive-md">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên nhân viên</th>
                                <th scope="col">Điểm CV</th>
                                <th scope="col">Ngày bắt đầu</th>
                                <th scope="col">Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary" title="Đánh giá nhân viên"><i class="fas fa-book"></i></button>
                                        <button class="btn btn-sm btn-danger" title="Xóa nhân viên"><i class="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                        <button class="btn btn-sm btn-primary" title="Đánh giá nhân viên"><i class="fas fa-book"></i></button>
                                        <button class="btn btn-sm btn-danger" title="Xóa nhân viên"><i class="fas fa-trash-alt"></i></button>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        </div>
                        
                        <a href="/business/recruit" class="btn btn-sm btn-primary">Tuyển dụng</a>
                        <button data-bs-toggle="modal" data-bs-target="#editPosition" @click="openModalEdit(department._id, position._id)" class="btn btn-sm btn-secondary">Chỉnh sửa</button>
                        <button @click="deletePosition(position._id)" class="btn btn-sm btn-danger">Xoá</button>
                    </div>
                </div>
                
                
            </div>
            <div class="card-footer">
                <button class="btn btn-danger btn-sm" v-if="department.position.length == 0" @click="deleteDepartment(department._id)">
                    <i class="fas fa-trash-alt"></i> Xoá phòng ban
                </button>
                <button @click="openModalAddPosition(department._id, department.name)" data-bs-toggle="modal" data-bs-target="#addPosition"  class="btn btn-primary btn-sm">
                    <i class="fas fa-plus"></i> Thêm vị trí công việc
                </button>
            </div>
        </div>

        <div class="modal fade" id="editPosition" tabindex="-1" aria-labelledby="editPosition" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editPositionLabel">Chỉnh sửa vị trí tuyển dụng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form >
                            <div class="form-group mb-3">
                                <label class="form-label">Phòng ban</label>
                                <input type="text" class="form-control bg-white" v-model="department.name" readonly>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Chức danh công việc <span class="text-danger">*</span></label>
                                <input type="text" class="form-select dropdown-toggle text-dark" id="dropdownMenuJobTitle" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" readonly v-model="position.jobtitle"/>
                                <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuJobTitle" :style="{maxHeight: '400px'}">
                                    <li class="m-2"><input type="text" v-model="searchJobTitle" class="form-control" placeholder="Tìm kiếm"/></li>
                                    <li v-for="item in filteredJobTitle"  @click="position.jobtitle=item"><a class="dropdown-item">{{item}}</a></li>
                                </ul>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Chức vụ<span class="text-danger">*</span></label>
                                <select class="form-select" v-model="position.name">
                                    <option value="" disabled>Chọn ...</option>
                                    <option v-for="item in positions" :value="item.name">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Cấp bậc ứng viên <span class="text-danger">*</span></label> 
                                <input type="text" class="form-select dropdown-toggle" id="dropdownMenuLevel" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" :value="position.levels.toString().replaceAll(',', ', ')">
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLevel">
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="level01" value="Sơ cấp">
                                        <label class="form-check-label" for="level01">
                                            Sơ cấp
                                        </label>
                                    </div>
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="level02" value="Trung cấp">
                                        <label class="form-check-label" for="level02">
                                            Trung cấp
                                        </label>
                                    </div>
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="level03" value="Cao đẳng">
                                        <label class="form-check-label" for="level03">
                                            Cao đẳng
                                        </label>
                                    </div>
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="level04" value="Đại học">
                                        <label class="form-check-label" for="level04">
                                            Đại học
                                        </label>
                                    </div>
                                </ul>          
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Chuyên nghành ứng viên <span class="text-danger">*</span></label> 
                                <input type="text" class="form-select dropdown-toggle" id="dropdownMenuSkill2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" v-model="searchSkill">
                                {{filteredSkill[0]}}
                                <ul class="dropdown-menu w-75" aria-labelledby="dropdownMenuSkill2">
                                    <div class="form-check mx-3" v-for="(skill, index) in filteredSkill">
                                        <input class="form-check-input" type="checkbox" v-model="position.skills" :id="'1skill'+index" :value="skill">
                                        <label class="form-check-label" :for="'1skill'+index">
                                            {{skill}}
                                        </label>
                                    </div>
                                </ul>  
                                <ul class="list-group m-2 px-4">
                                    <li class="" v-for="skill in position.skills">{{skill}}</li>
                                </ul>   
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Lĩnh vực kinh doanh</label> 
                                <select class="form-select" v-model="position.work_industry">
                                    <option value="" disabled>Chọn ...</option>
                                    <option v-for="item in industries" :value="item.name">{{item.name}}</option>
                                </select>
                            </div>
                            
                            
                            <div class="form-group mb-3">
                                <label for="">Nơi làm việc <span class="text-danger">*</span></label>
                                <select class="form-select" v-model="position.work_location">
                                    <option value="">Chọn địa điểm làm việc</option>
                                    <option v-for="province in provinces" :value="province">{{province}}</option>
                                </select>
                            </div>
                            
                            <div class="form-group mb-3">
                                <label class="form-label">Môi trường làm việc</label> 
                                <select class="form-select" v-model="position.work_environment">
                                    <option value="" disabled>Chọn ...</option>
                                    <option v-for="item in environments" :value="item.name">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Yêu cầu kinh nghiệm</label>
                                <input type="number" class="form-control" v-model="position.experience" placeholder="Nhập số năm kinh nghiệm">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Số lượng <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" v-model="position.amount" placeholder="Nhập số lượng">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mức lương tối thiểu (triệu đồng)</label>
                                <input type="number" class="form-control" v-model="position.min_salary" placeholder="Nhập mức lương tối thiểu">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mức lương tối đa (triệu đồng)</label>
                                <input type="number" class="form-control" v-model="position.max_salary" placeholder="Nhập mức lương tối đa">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mô tả công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="position.description"></textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Yêu cầu công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="position.requirements"></textarea>
                            </div>
                            <h5>Tiêu chí đánh giá</h5>
                            <div class="row align-items-center">
                                <div class="col-9">
                                    <label class="h6"><h6>Chọn tiêu chí đánh giá đề xuất</h6></label>
                                </div>
                                <div class="col-3 text-end">
                                    <label class="h6"> Điểm </label>
                                </div>
                            </div>
                            <div class="form-check" v-for="(item, index) in criteria">
                                <div class="row align-items-center">
                                    <div class="col-9">
                                        <div class="list-group list-group-flush">
                                            <label class="list-group-item">
                                                <input class="form-check-input me-1" type="checkbox" :checked="position.criteria[index]">
                                                {{item.name}} <a data-bs-toggle="collapse" :href="'#collapse'+index" class="link-primary" role="button" aria-expanded="false" :aria-controls="'collapse'+index"><i class="fas fa-question-circle ms-0"></i></a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-3 text-end">
                                        <input class="form-control form-control-sm form-control-color float-end " type="number" v-model="position.criteria[index]"/>
                                    </div>
                                </div>
                                <div class="collapse" :id="'collapse'+index">
                                    <ul class="list-group ms-5">
                                        <li class="" v-for="item2 in item.detail">{{item2}}</li>
                                    </ul>  
                                </div>
                            </div>
                            <h6>Thêm tiêu chí đánh giá</h6>
                            <p class="col" v-for="(ques, index) in position.questions">{{ques}}<a class="float-end btn btn-sm btn-danger" @click="()=>{position.questions.splice(index,1)}"><i class="fas fa-x"></i></a></p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Nhập tiêu chí" v-model="question">
                                <button class="btn btn-primary" type="button" @click="()=>{position.questions.push(question)}">Thêm</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="editPosition">Lưu</button>
                </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="addPosition" tabindex="-1" aria-labelledby="addPosition" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addPositionLabel">Thêm vị trí tuyển dụng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <form >
                            <div class="form-group mb-3">
                                <label class="form-label">Phòng ban</label>
                                <input type="text" class="form-control bg-white" :value="department.name" readonly>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Chức danh công việc <span class="text-danger">*</span></label>
                                <input type="text" class="form-select dropdown-toggle text-dark" id="dropdownMenuJobTitle" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false" readonly v-model="position.jobtitle"/>
                                <ul class="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuJobTitle" :style="{maxHeight: '400px'}">
                                    <li class="m-2"><input type="text" v-model="searchJobTitle" class="form-control" placeholder="Tìm kiếm"/></li>
                                    <li v-for="item in filteredJobTitle"  @click="position.jobtitle=item"><a class="dropdown-item">{{item}}</a></li>
                                </ul>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Chức vụ <span class="text-danger">*</span></label>
                                <select class="form-select" v-model="position.name">
                                    <option value="" disabled>Chọn ...</option>
                                    <option v-for="item in positions" :value="item.name">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Cấp bậc ứng viên <span class="text-danger">*</span></label> 
                                <input type="text" class="form-select dropdown-toggle" id="dropdownMenuLevel" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" :value="position.levels.toString().replaceAll(',', ', ')">
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLevel">
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="lv01" value="Sơ cấp">
                                        <label class="form-check-label" for="lv01">
                                            Sơ cấp
                                        </label>
                                    </div>
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="lv02" value="Trung cấp">
                                        <label class="form-check-label" for="lv02">
                                            Trung cấp
                                        </label>
                                    </div>
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="lv03" value="Cao đẳng">
                                        <label class="form-check-label" for="lv03">
                                            Cao đẳng
                                        </label>
                                    </div>
                                    <div class="form-check mx-3">
                                        <input class="form-check-input" type="checkbox" v-model="position.levels" id="lv04" value="Đại học">
                                        <label class="form-check-label" for="lv04">
                                            Đại học
                                        </label>
                                    </div>
                                </ul>          
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Chuyên nghành ứng viên <span class="text-danger">*</span></label> 
                                <input type="text" class="form-select dropdown-toggle" id="dropdownMenuSkill" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" v-model="searchSkill">
                                <ul class="dropdown-menu w-75" aria-labelledby="dropdownMenuSkill">
                                    <div class="form-check mx-3" v-for="(skill, index) in filteredSkill">
                                        <input class="form-check-input" type="checkbox" v-model="position.skills" :id="'0skill'+index" :value="skill">
                                        <label class="form-check-label" :for="'0skill'+index">
                                            {{skill}}
                                        </label>
                                    </div>
                                </ul>  
                                <ul class="list-group m-2 px-4">
                                    <li class="" v-for="skill in position.skills">{{skill}}</li>
                                </ul>   
                            </div>
                            
                            <div class="form-group mb-3">
                                <label class="form-label">Lĩnh vực kinh doanh</label> 
                                <select class="form-select" v-model="position.work_industry">
                                    <option value="" disabled>Chọn ...</option>
                                    <option v-for="item in industries" :value="item.name">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Nơi làm việc <span class="text-danger">*</span></label>
                                <select class="form-select" v-model="position.work_location">
                                    <option value="">Chọn địa điểm làm việc</option>
                                    <option v-for="province in provinces" :value="province">{{province}}</option>
                                </select>
                            </div>
                            
                            <div class="form-group mb-3">
                                <label class="form-label">Môi trường làm việc</label> 
                                <select class="form-select" v-model="position.work_environment">
                                    <option value="" disabled>Chọn ...</option>
                                    <option v-for="item in environments" :value="item.name">{{item.name}}</option>
                                </select>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Yêu cầu kinh nghiệm</label>
                                <input type="number" class="form-control" v-model="position.experience" placeholder="Nhập số năm kinh nghiệm">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Số lượng <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" v-model="position.amount" placeholder="Nhập số lượng">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mức lương tối thiểu (triệu đồng)</label>
                                <input type="number" class="form-control" v-model="position.min_salary" placeholder="Nhập mức lương tối thiểu">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mức lương tối đa (triệu đồng)</label>
                                <input type="number" class="form-control" v-model="position.max_salary" placeholder="Nhập mức lương tối đa">
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Mô tả công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="position.description"></textarea>
                            </div>
                            <div class="form-group mb-3">
                                <label for="">Yêu cầu công việc</label>
                                <textarea cols="30" rows="10" class="form-control" v-model="position.requirements"></textarea>
                            </div>
                            <h5>Tiêu chí đánh giá</h5>
                            <div class="row align-items-center">
                                <div class="col-9">
                                    <label class="h6"><h6>Chọn tiêu chí đánh giá đề xuất</h6></label>
                                </div>
                                <div class="col-3 text-end">
                                    <label class="h6"> Điểm </label>
                                </div>
                            </div>
                            <div class="form-check" v-for="(item, index) in criteria">
                                <div class="row align-items-center">
                                    <div class="col-9">
                                        <div class="list-group list-group-flush">
                                            <label class="list-group-item">
                                                <input class="form-check-input me-1" type="checkbox" :checked="position.criteria[index]">
                                                {{item.name}} <a data-bs-toggle="collapse" :href="'#collapse'+index" class="link-primary" role="button" aria-expanded="false" :aria-controls="'collapse'+index"><i class="fas fa-question-circle ms-0"></i></a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-3 text-end">
                                        <input class="form-control form-control-sm form-control-color float-end " type="number" v-model="position.criteria[index]"/>
                                    </div>
                                </div>
                                <div class="collapse" :id="'collapse'+index">
                                    <ul class="list-group ms-5">
                                        <li class="" v-for="item2 in item.detail">{{item2}}</li>
                                    </ul>  
                                </div>
                            </div>
                            <h6>Thêm tiêu chí đánh giá</h6>
                            <p class="col" v-for="(ques, index) in position.questions">{{ques}}<a class="float-end btn btn-sm btn-danger" @click="()=>{position.questions.splice(index,1)}"><i class="fas fa-x"></i></a></p>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Nhập tiêu chí" v-model="question">
                                <button class="btn btn-primary" type="button" @click="()=>{if(question!='')position.questions.push(question)}">Thêm</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" @click="addPosition">Thêm vị trí</button>
                </div>
                </div>
            </div>
        </div>
      
        

        <div class="modal fade" id="addDepartment" tabindex="-1" aria-labelledby="addDepartmentLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="addDepartmentLabel">Thêm phòng ban</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="col-form-label">Tên phòng ban<span class="text-danger">*</span></label>
                        <input type="text" class="form-control" placeholder="Nhập tên phòng ban" v-model="department.name">
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Email<span class="text-danger"></span></label>
                        <input type="email" class="form-control" placeholder="Nhập email" v-model="department.email">
                    </div>
                    <hr>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                  <button type="button" class="btn btn-primary" @click="addDepartment">Thêm</button>
                </div>
              </div>
            </div>
          </div>

    </div>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config') 

    export default {
        data (){
            return {
                searchSkill: '',
                searchJobTitle: '',
                business_id: null,
                majors: [],
                position_id: '',
                question: '',
                jobtitles: [],
                criteria: [],
                environments: [],
                industries: [],
                positions: [],
                provinces: [],
                departments: [],
                department: {
                    _id: "",
                    name: "",
                    id: "",
                    email: "",
                    position: "",
                },
                position: {
                    _id: "",
                    name: "",
                    jobtitle: "",
                    levels: [],
                    skills: [],
                    description: "",
                    work_location: "",
                    work_industry: "",
                    work_environment: "",
                    amount: 1,
                    min_salary: 0,
                    max_salary: 0,
                    requirements: "",
                    experience: 0,
                    criteria: new Array(),
                    status: 0,
                },
                key: null
            }
        },
        methods : {
            copy(text){
                try {
                    navigator.clipboard.writeText(text)
                } catch (e) {
                    throw e
                }
            },
            addDepartment(e){
                e.preventDefault();
                if (this.department.name == ''){
                    Swal.fire({
                        icon: 'info',
                        title: 'Thông báo',
                        text: 'Tên phòng ban không được để trống',
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'var(--primary)',
                    });    
                } else {
                    this.$http.post(`${BASE_URL}/department/new`, {
                        name : this.department.name,
                        id: this.business_id,
                        email: this.department.email,
                    }).then(res => {
                        if (res.data)
                        Swal.fire({
                            icon: 'success',
                            title: 'Thông báo',
                            text: 'Thêm phòng ban thành công',
                            confirmButtonText: 'OK',
                            confirmButtonColor: 'var(--primary)',
                        });
                    window.location.reload()
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            deleteDepartment (id){
                this.$http.post(`${BASE_URL}/department/delete`, {
                    id: id
                }).then(res => {
                    if (res.data){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Xoá phòng ban thành công',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    this.departments.forEach((department, index) => {
                        if (department._id == id){
                            this.departments.splice(index, 1)
                        }
                    })
                }).catch(err => {
                    console.log(err)
                })
            },
            addPosition(e){
                e.preventDefault();
                let newDepartment = this.department
                newDepartment.position = this.position
                this.$http.post(`${BASE_URL}/department/position/new`, {
                    department: newDepartment
                }).then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thông báo',
                        text: 'Thêm chức danh thành công',
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'var(--primary)',
                    });
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                })
            },
            openModalEdit(department_id, position_id){
                this.departments.filter(department => {
                    if (department._id == department_id){
                        this.department.name = department.name
                        this.department._id = department._id
                        department.position.filter(position => {
                            if (position._id == position_id){
                                this.position = position
                            }
                            
                        })
                    }
                })
            },
            openModalAddPosition(department_id, department_name){
                this.department._id = department_id
                this.department.name = department_name
                this.position = {
                    _id: "",
                    name: "",
                    jobtitle: "",
                    levels: [],
                    skills: [],
                    amount: 1,
                    description: "",
                    work_location: "",
                    work_industry: "",
                    work_environment: "",
                    min_salary: 0,
                    max_salary: 0,
                    requirements: "",
                    experience: 0,
                    questions: [],
                    criteria: new Array(),
                    status: 0,
                }
            },
            editPosition(e){
                e.preventDefault();
                let newDepartment = this.department
                newDepartment.position = this.position
                this.$http.post(`${BASE_URL}/department/position/edit`, {
                    department: newDepartment
                }).then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thông báo',
                        text: 'Sửa chức danh thành công',
                        confirmButtonText: 'OK',
                        confirmButtonColor: 'var(--primary)',
                    });
                
                    window.location.reload();
                }).catch(err => {
                    console.log(err)
                })
            },
            deletePosition(position_id){
                Swal.fire({
                    title: 'Bạn có chắc chắn muốn xóa chức danh này?',
                    text: "Sau khi xóa, bạn sẽ không thể khôi phục lại!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: 'var(--primary)',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Xóa'
                }).then((result) => {
                    if (result.value) {
                        this.$http.post(`${BASE_URL}/department/position/delete`, {
                            position_id: position_id
                        }).then(res => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Thông báo',
                                text: 'Xóa chức danh thành công',
                                confirmButtonText: 'OK',
                                confirmButtonColor: 'var(--primary)',
                            });
                            window.location.reload();
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            },
        },
        computed: {
            filteredSkill(){
                this.skills = new Set([])
                this.majors.forEach(element => {
                    if (this.position.levels.includes(element.level)){
                        element.skills.forEach(skill => {
                            if (skill.toLowerCase().indexOf(this.searchSkill.toLowerCase()) != -1){
                                this.skills.add(skill)
                            } 
                        })
                    }
                });
                return this.skills
            },
            filteredJobTitle(){
                return this.jobtitles.filter(element => {
                    if (element.name.toLowerCase().indexOf(this.searchJobTitle.toLowerCase()) != -1){
                        return true
                    }
                }).map(item => item.name);
            },
        },
        created(){
            try {
                this.business_id = JSON.parse(localStorage.getItem('business')).username
            } catch (err) {
                this.key = this.$route.query.key
                if (this.key){
                    localStorage.setItem('key', this.key)
                }
                this.key = localStorage.getItem('key')
            }

            if (this.business_id) {
                this.$http.post(`${BASE_URL}/department/list/get-by-id`,{
                    id: this.business_id
                }).then(res => {
                    this.departments = res.data
                }).catch(err => {
                    console.log(err)
                })
            } else if (this.key) {
                this.$http.post(`${BASE_URL}/department/list/get-by-key`,{
                    key: this.key
                }).then(res => {
                    if (res.data){
                        this.departments = res.data
                        this.business_id = res.data[0].id
                    } else {
                        this.key = null
                    }
                })
            }

            this.$http.get(`${BASE_URL}/position/getall`)
            .then(response => {
                this.positions = response.data  
            })
            .catch(function (error) {
                console.error(error);
            });

            this.$http.get(`${BASE_URL}/province/list`)
            .then(response => {
                this.provinces = new Set(response.data.map(item => item.province))  
            })
            .catch(function (error) {
                console.error(error);
            });  

            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.majors = response.data
            })
            .catch(function (error) {
                console.error(error);
            });

            this.$http.get(`${BASE_URL}/industry/getall`)
            .then(response => {
                this.industries = response.data
            })
            .catch(function (error) {
                console.error(error);
            });

            this.$http.get(`${BASE_URL}/environment/getall`)
            .then(response => {
                this.environments = response.data  
            })
            .catch(function (error) {
                console.error(error);
            });

            this.$http.get(`${BASE_URL}/jobtitle/getall`)
            .then(response => {
                this.jobtitles = response.data
            })
            .catch(function (error) {
                console.error(error);
            });

            this.$http.get(`${BASE_URL}/criteria/getall`)
            .then(res => {
                this.criteria = res.data;
            })  
            .catch(function (error) {
                console.error(error);
            });

        },

    }
</script>