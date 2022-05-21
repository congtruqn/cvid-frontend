<template>
    <div id="create-cv" class="container">
        <form class="row g-3 needs-validation">
            <h2 class="text-center mb-4">Sơ yếu lý lịch</h2>
            <h3 class="mb-3">{{name}}</h3>
            <hr>
            <h4>Năng lực</h4>
            <div class="col-md-5">
                    <label class="form-label">Chuyên nghành</label>
                    <input type="text" class="form-control" v-model="address">
                </div>
            <div class="col-md-6">
                <label class="form-label">Chứng chỉ hành nghề </label>
                <input type="text" class="form-control" v-model="address" >     
            </div>
            <div class="col-md-3">
                    <label class="form-label">Mã số chứng chỉ</label>
                    <input type="text" class="form-control" v-model="address" >
                </div>
            <div class="col-md-2">
                <label class="form-label">Số năm làm nghề</label>
                <input type="text" class="form-control" v-model="address" >
            </div>

            <h4>Bằng cấp, chứng chỉ</h4>

            <div class="row clearfix">
                <div class="col-md-12 column" :style="{overflowX: 'auto'}">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" :style="{minWidth: '350px' }">
                                    Bằng cấp
                                </th>
                                <th class="text-center" :style="{ minWidth: '350px' }">
                                    Nghành học
                                </th>
                                <th class="text-center" :style="{ minWidth: '350px' }">
                                    Trường
                                </th>
                                <th class="text-center" :style="{ minWidth: '100px' }">
                                    Năm cấp bằng
                                </th>
                                <th class="text-center" :style="{ minWidth: '150px' }">
                                    Mã số chứng chỉ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in parseInt(numberDegree)" :key='index'>
                                <td>
                                    <input type="text" v-model='degree.name' class="form-control"   />
                                </td>
                                <td>
                                <input type="text" v-model='degree.major'  class="form-control"/>
                                </td>
                                <td>
                                <input type="text" v-model='degree.university'  class="form-control"/>
                                </td>
                                <td>
                                <input type="number" v-model='degree.year' class="form-control"/>
                                </td>
                                <td>
                                <input type="text" v-model='degree.certificate' class="form-control" />
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
                                <th class="text-center" :style="{ minWidth: '400px' }">
                                    Kĩ năng
                                </th>
                                <th class="text-center" :style="{ minWidth: '400px' }">
                                    Trường
                                </th>
                                <th class="text-center" :style="{ minWidth: '100px' }">
                                    Năm cấp
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in parseInt(numberSkill)" :key='index'>
                                <td>
                                    <input type="text" v-model='skill.name' class="form-control"   />
                                </td>
                                <td>
                                <input type="text" v-model='skill.school'  class="form-control"/>
                                </td>
                                <td>
                                <input type="number" v-model='degree.year' class="form-control"/>
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
            <h4 class="mb-3">Lịch sử công tác</h4>
            <div class="row clearfix">
                <div class="col-md-12 column" :style="{overflowX: 'auto'}">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center" :style="{ minWidth: '50px' }">
                                    Từ
                                </th>
                                <th class="text-center" :style="{ minWidth: '50px' }">
                                    Đến
                                </th>
                                <th class="text-center" :style="{ minWidth: '400px' }">
                                    Cơ quan công tác
                                </th>
                                <th class="text-center" :style="{ minWidth: '600px' }">
                                    Vị trí và Nhiệm vụ 
                                </th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="index in parseInt(numberJob)" :key='index'>
                                <td>
                                    <input type="text" v-model='skill.name' class="form-control"   />
                                </td>
                                <td>
                                <input type="text" v-model='skill.school'  class="form-control"/>
                                </td>
                                <td>
                                <input type="number" v-model='degree.year' class="form-control"/>
                                </td>
                                <td>
                                <input type="number" v-model='degree.year' class="form-control"/>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <button @click="addJob" type="button" class="btn btn-primary w-auto">Thêm hàng</button>
                                    <button @click="delJob" type="button" class="btn btn-primary w-auto">Xóa hàng</button>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" >
                <label class="form-check-label" for="invalidCheck">
                    Bạn đã hoàn thành nhiệm vụ đúng theo luật lao động quy định không?
                </label>
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click="handleSubmit">Submit</button>
        </form>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../utils/config')
    const user = JSON.parse(localStorage.getItem('user'))
    export default {  
        data(){
            return {
                name: user.name,
                address: '',
                degree: {
                    name: '',
                    major: '',
                    university: '',
                    year: '',
                    certificate: '',
                },
                skill: {
                    name: '',
                    school: '',
                    year: '',
                },
                numberSkill: 1,
                numberDegree: 1,
                numberJob: 1,
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                console.log(this.degree)
            },
            addDegree(){
                this.numberDegree++;
            },
            delDegree(){
                this.numberDegree > 1 ? this.numberDegree-- : this.numberDegree = 1;
            },
            addSkill(){
                this.numberSkill++;
            },
            delSkill(){
                this.numberSkill > 1 ? this.numberSkill-- : this.numberSkill = 1;
            },
            addJob(){
                this.numberJob++;
            },
            delJob(){
                this.numberJob > 1 ? this.numberJob-- : this.numberJob = 1;
            }
            
      
        },
        // created(){
        //     // this.$http.post(`${BASE_URL}/employee/get-resume`, {
        //     //     id: JSON.parse(localStorage.getItem('user')).username
        //     // })
        //     // .then(response => {
        //     //     if(response.data.resume){
        //     //         this.$router.push('/listproject')
        //     //     }
        //     // })
        //     // .catch(function (error) {
        //     //     console.log(error)
        //     // });
            
        // },
        watch : {
            
        }
    }
</script>
