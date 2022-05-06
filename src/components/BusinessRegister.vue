<template>
    <div id="register">
        <form>
            <h1>Register</h1>
            
                <p v-if="errors.length > 0">{{errors[0].msg}}</p>
                <input type="text" v-model="name" placeholder="Tên doanh nghiệp" /><br/><br/>
                <input type="text" v-model="MST" placeholder="Mã số thuế" /><br/><br/>
                <input type="email" v-model="email" placeholder="Email"><br/><br/>
                <select v-model="province">
                    <option disabled value="">Chọn Tỉnh/Thành Phố</option>
                    <option v-for="province in provinces" :value=[province.Id,province.Name]>{{province.Name}}</option>
                </select>
                <br/><br/>
                
                <select v-model="district">
                    <option disabled value="">Chọn Quận/Huyện</option>
                    <option v-for="district in districts" :value=[district.Id,district.DistrictName]>{{district.DistrictName}}</option>
                </select> 
                <br/><br/>  
                
                <label>Nghành nghề kinh doanh</label>
                <div v-for="major in list_major">
                    <input  type="checkbox" :value=major.name v-model="majors">
                    <label>{{major.name}}</label>
                    
                    <!-- <div v-for="skill in major.skills">
                        <input  type="checkbox" :value=skill.name v-model="skills">
                        <label>{{skill.name}}</label>
                    </div> -->
                </div> 
                
                <br><br>
                <input type="password"  v-model="password" placeholder="Password"><br/><br/>
                <input type="password"  v-model="password2" placeholder="Confirm Password"><br/><br/>
	        <button type="submit" class="btn btn-default" @click="handleSubmit">Register</button>
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
                errors : [],
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
                        this.$router.push('/login')
                    }
                    else {
                        this.errors = response.data;
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
                
            }
       
        }
    }
</script>
