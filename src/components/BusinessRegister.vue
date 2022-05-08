<template>
    <div id="register">
        <form class="">
            <h1>Đăng kí tài khoản nhà tuyển dụng</h1>
                <h3>Thông tin đăng nhập</h3>
               
                <label class="form-label">Email</label>
                <input type="email" v-model="email" placeholder="Email"><br/>
                <label class="form-label">Mật khẩu</label>
                <input type="password"  v-model="password" placeholder="Mật khẩu"><br/>
                <label class="form-label">Nhập lại mật khẩu</label>
                <input type="password"  v-model="password2" placeholder="Nhập lại mật khẩu"><br/><br/>
                <h3>Thông tin doanh nghiệp</h3>
                <label>Tên doanh nghiệp</label>
                <input type="text" v-model="name" placeholder="Tên doanh nghiệp" /><br/>
                <label>Mã số thuế</label>
                <input type="text" v-model="MST" placeholder="Mã số thuế" /><br/>
                <label>Địa điểm</label>
                <select v-model="province">
                    <option disabled value="">Chọn tỉnh/thành phố</option>
                    <option v-for="province in provinces" :key="province.Id" :value=[province.Id,province.Name]>{{province.Name}}</option>
                </select>
                <select v-model="district">
                    <option disabled value="">Chọn quận/huyện</option>
                    <option v-for="district in districts" :key="district.Id" :value=[district.Id,district.DistrictName]>{{district.DistrictName}}</option>
                </select> 
                <br/> 
                <div class="dropdown">
                    <label>Nghành nghề kinh doanh</label>
                    <button class="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Chọn nghành nghề
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li v-for="major in list_major" :key="major.name">
                            {{major.name}}
                            <div v-for="skill in major.skills" :key="skill.name">
                                <input type="checkbox" v-model="majors" :value=[major.name,skill.name]>
                                <label>{{skill.name}}</label>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <br><br>
                
	        <button type="submit" class="btn btn-primary" @click="handleSubmit">Đăng kí</button>
        </form>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../utils/config')

    export default {  
        data(){
            return {
                name: "",
                MST: "",
                province: "",
                district: "",
                majors: [],
                email : "",
                password : "",
                password2 : "",
                provinces: [],
                districts: [],
                list_major: [],
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/business/register`, {
                    name: this.name,
                    MST: this.MST,
                    province: this.province,
                    district: this.district,
                    majors: this.majors,
                    email: this.email,
                    password: this.password,
                    password2: this.password2
                })
                .then(response => {
                    if (response.data == 'ok'){
                        Swal.fire({
                            icon: 'success',
                            title: 'Đăng kí thành công',
                            text: 'Bạn có thể đăng nhập ngay bây giờ',
                            confirmButtonColor: 'var(--primary)',
                            confirmButtonText: 'Đăng nhập',
                        }).then((result) => {
                            if (result.value) {
                                this.$router.push('/login')
                            }
                        })
                    }
                    else {
                        Swal.fire({
                            icon: 'info',
                            title: 'Đăng kí thất bại',
                            text: `${response.data[0].msg}`,
                            confirmButtonColor: 'var(--primary)',
                            confirmButtonText: 'Nhập lại',
                        });
                    }
                })
                .catch(function (error) {
                    console.error(error.response);
                });
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/province/list`)
            .then(response => {
                this.provinces = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });

            this.$http.get(`${BASE_URL}/major/list`)
            .then(response => {
                this.list_major = response.data;
            })
            .catch(function (error) {
                console.error(error.response);
            });
        },
        watch : {
            province(newVal){
                this.district = "";
                this.districts = this.provinces.find(province => province.Id === newVal[0]).Districts;
                
            },
            majors(newVal){
                console.log(newVal);
            }
       
        }
    }
</script>
