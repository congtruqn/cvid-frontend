<template>
    <div id="register">
        <form>
            <h1>Đăng kí tài khoản nhà tuyển dụng</h1>
                <h3>Thông tin đăng nhập</h3>
                <label>Email</label>
                <input type="email" v-model="email" placeholder="Email"><br/><br/>
                <label>Mật khẩu</label>
                <input type="password"  v-model="password" placeholder="Mật khẩu"><br/><br/>
                <label>Xác nhận mật khẩu</label>
                <input type="password"  v-model="password2" placeholder="Xác nhận mật khẩu"><br/><br/>
                <h3>Thông tin doanh nghiệp</h3>
                <label>Tên doanh nghiệp</label>
                <input type="text" v-model="name" placeholder="Tên doanh nghiệp" /><br/><br/>
                <label>Mã số thuế</label>
                <input type="text" v-model="MST" placeholder="Mã số thuế" /><br/><br/>
                <label>Địa điểm</label>
                <select v-model="province">
                    <option disabled value="">Chọn Tỉnh/Thành Phố</option>
                    <option v-for="province in provinces" :key="province.Id" :value=[province.Id,province.Name]>{{province.Name}}</option>
                </select>
                <select v-model="district">
                    <option disabled value="">Chọn Quận/Huyện</option>
                    <option v-for="district in districts" :key="district.Id" :value=[district.Id,district.DistrictName]>{{district.DistrictName}}</option>
                </select> 
                <br/><br/>  
                
                <label>Nghành nghề kinh doanh</label>
                
                <div v-for="major in list_major" :key="major.name">
                    <label>{{major.name}}</label>
                    <div v-for="skill in major.skills" :key="skill.name">
                        <input type="checkbox" v-model="majors" :value=[major.name,skill.name]>
                        <label>{{skill.name}}</label>
                    </div>
                </div> 
                
                <br><br>
                
	        <button type="submit" class="btn btn-default" @click="handleSubmit">Đăng kí</button>
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
                            confirmButtonClass: 'btn btn-primary',
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
                console.log(this.provinces)
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
