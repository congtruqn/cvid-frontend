<template>
    <section class="h-100 bg-dark">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
            <div class="card card-registration my-4">
            <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo" class="img-fluid"
                    style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                </div>
                <div class="col-xl-6  needs-validation">
                <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Đăng kí tài khoản tuyển dụng</h3>
        
                    <div class="mb-4 form-floating">
                        <select @click="focus" class="form-control" v-model="type" required>
                            <option value="" disabled>Chọn loại hình tuyển dụng</option>
                            <option value="6">Cá nhân</option>
                            <option value="5">Doanh nghiệp</option>
                        </select>
                        <label class="form-label">Loại hình tuyển dụng</label>
                    </div>
                    <div class="mb-4 form-floating">
                        <select @click="focus" class="form-control" v-model="country" required>
                            <option value="" disabled>Chọn quốc gia</option>
                            <option  value="Việt Nam">Việt Nam</option>
                        </select>
                        <label class="form-label">Quốc gia</label>
                    </div>
                    <div v-if="type==5">
                        <div class="mb-4 form-floating">
                            <input @blur="getBusiness" type="number" class="form-control" v-model="username" required>
                            <label class="form-label">Mã số thuế</label>
                        </div>
                        <div class="mb-4 form-floating">
                            <input @click="focus" type="text" class="form-control" v-model="name" required disabled>
                            <label class="form-label" >Tên doanh nghiệp</label>
                        </div>
                        <div class="row">
                
                            <div class="col-md-6 mb-4 form-floating">
                                <input @click="focus" type="text" class="form-control" v-model="province" required disabled>
                                <label class="ms-2 form-label">Tỉnh/Thành phố</label>
                            </div>
                            <div class="col-md-6 mb-4 form-floating">
                                <input @click="focus" type="text" class="form-control" v-model="district" required disabled>
                                <label class="ms-2 form-label">Chọn quận/huyện</label>
                            </div>
                            <div class="col-md-6 mb-4 form-floating">
                                <input @click="focus" type="text" class="form-control" v-model="ward" required disabled>
                                <label class="ms-2 form-label">Chọn phường/xã</label>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-floating">
                                    <input @click="focus" type="text" class="form-control" v-model="address" required disabled/>
                                    <label class="form-label">Địa chỉ doanh nghiệp</label>
                                </div>
                            </div>        
                        </div>
                        <div class="mb-4 form-floating">
                            <input type="text" class="form-control dropdown-toggle" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <label class="form-label">Lĩnh vực kinh doanh</label> 
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                <div class="form-check mx-3">
                                    <input class="form-check-input" type="checkbox" id="1">
                                    <label class="form-check-label" for="1">
                                        Thương mại
                                    </label>
                                </div>
                                <div class="form-check mx-3">
                                    <input class="form-check-input" type="checkbox" id="2">
                                    <label class="form-check-label" for="2">
                                        Dịch vụ
                                    </label>
                                </div>
                                <div class="form-check mx-3">
                                    <input class="form-check-input" type="checkbox" id="3">
                                    <label class="form-check-label" for="3">
                                        Kỹ thuật
                                    </label>
                                </div>
                            </ul>
                        </div>
                        <div class="mb-4 form-floating">
                            <select @click="focus" class="form-control" required>
                                <option value="" disabled selected>Chọn loại hình</option>
                                <option  value="Việt Nam">TNHH</option>
                                <option  value="Việt Nam">MTV</option>
                                <option  value="Việt Nam">Cổ phần</option>
                            </select>
                            <label class="form-label">Loại hình</label>
                        </div>
                    </div>
                    <div v-else>
                        <div class="mb-4 form-floating">
                            <input @click="focus" type="text" class="form-control" v-model="username" required>
                            <label class="form-label">Số điện thoại</label>
                        </div>
                        <div class="mb-4 form-floating">
                            <input type="text" class="form-control dropdown-toggle" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <label class="form-label">Lĩnh vực kinh doanh</label> 
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                                <div class="form-check mx-3">
                                    <input class="form-check-input" type="checkbox" id="1">
                                    <label class="form-check-label" for="1">
                                        Thương mại
                                    </label>
                                </div>
                                <div class="form-check mx-3">
                                    <input class="form-check-input" type="checkbox" id="2">
                                    <label class="form-check-label" for="2">
                                        Dịch vụ
                                    </label>
                                </div>
                                <div class="form-check mx-3">
                                    <input class="form-check-input" type="checkbox" id="3">
                                    <label class="form-check-label" for="3">
                                        Kỹ thuật
                                    </label>
                                </div>
                            </ul>
                        </div>
                        <div class="mb-4 form-floating">
                            <select @click="focus" class="form-control" required>
                                <option value="" selected disabled>Chọn loại hình</option>
                                <option  value="Việt Na">Hiệp hội</option>
                                <option  value="Việt N">Cửa hàng</option>
                                <option  value="">Hộ kinh doanh cá thể</option>
                            </select>
                            <label class="form-label">Loại hình</label>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="form-floating">
                                    <select @click="focus" class="form-control" v-model="province" required>
                                        <option value="" disabled>Chọn tỉnh/thành phố</option>
                                        <option v-for="province in provinces" :value='province'>{{province}}</option>
                                    </select>
                                    <label class="form-label">Tỉnh/Thành phố</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-floating">
                                    <select @click="focus" class="form-control" v-model="district" required>
                                        <option value="" disabled>Chọn quận/huyện</option>
                                        <option v-for="district in districts" :value='district'>{{district}}</option>
                                    </select>
                                    <label class="form-label">Quận/Huyện</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-floating">
                                    <select @click="focus" class="form-control" v-model="ward" required>
                                        <option value="" disabled>Chọn phường/xã</option>
                                        <option v-for="ward in wards" :value='ward'>{{ward}}</option>
                                    </select>
                                    <label class="form-label">Phường/Xã</label>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="form-floating">
                                    <input @click="focus" type="text" class="form-control" v-model="address" required />
                                    <label class="form-label">Địa chỉ doanh nghiệp</label>
                                </div>
                            </div>        
                        </div>
                    </div>
                    
                    
                             
                    
                    <div class="mb-4 form-floating">
                        <input @click="focus" type="email" class="form-control" v-model="email" required/>
                        <label class="form-label">Email</label>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input @click="focus" type="password" class="form-control" v-model="password" required minlength="6"/>
                                <label class="form-label">Mật khẩu</label>
                            </div>
                        </div>   
                        <div class="col-md-6 mb-4">
                            <div class="form-floating">
                                <input @click="focus" type="password" class="form-control" v-model="password2" minlength="6" required/>
                                <label class="form-label">Nhập lại mật khẩu</label>
                            </div>
                        </div>   
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                    <!-- <button type="button" class="btn btn-light btn-lg">Reset all</button> -->
                    <button type="button" class="btn btn-primary btn-lg ms-2" @click="handleSubmit">Đăng kí</button>
                    </div>

                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    export default {  
        data(){
            return {
                type: "",
                name: "",
                username: "",
                country: "Việt Nam",
                province: "",
                district: "",
                ward: "",
                address: "",
                email : "",
                password : "",
                password2 : "",
                province_list: [],
                provinces: [],
                districts: [],
                wards: [],
            }
        },
        methods : {
            getBusiness(){
                if (this.username == ""){
                    this.name = ""
                    this.province = ""
                    this.district = ""
                    this.ward = ""
                    this.address = ""
                    return
                }
                this.$http.post(`${BASE_URL}/business/getinfo`, {
                    mst: this.username
                })
                .then(response => {
                    var htmlObject = document.createElement('div');
                    htmlObject.innerHTML = response.data;
                    htmlObject = htmlObject.getElementsByClassName("search-results")
                    if (htmlObject.length == 0){
                        this.name = ""
                        this.province = ""
                        this.district = ""
                        this.ward = ""
                        this.address = ""
                    } else {
                        this.name = htmlObject[0].getElementsByTagName("a")[0].innerHTML;
                        var address = htmlObject[0].getElementsByTagName("p")[0].innerHTML;
                        this.username = htmlObject[0].getElementsByTagName("p")[0].getElementsByTagName("a")[0].innerHTML
                        this.address = ""
                        address = address.split("Địa chỉ:")[1].trim().split(", ").reverse();
                        address.forEach((item, index) =>{
                            if (index == 0) this.province = item
                            else if (index == 1) this.district = item
                            else if (index == 2) this.ward = item
                            else this.address = item +' '+ this.address
                        })
                    }
                
                }).catch(function (error) {
                    console.log(error);
                });  
            },
            handleSubmit(e){
                e.preventDefault()
                this.$http.post(`${BASE_URL}/business/register`, {
                    type: this.type,
                    name: this.name,
                    username: this.username,
                    country: this.country,
                    province: this.province,
                    district: this.district,
                    ward: this.ward,
                    address: this.address,
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
                                this.$router.push('/business/login')
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
            },
            focus(){
                // document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/province/list`)
            .then(response => {
                this.province_list = response.data;
                this.provinces = new Set(this.province_list.map(item => item.province))  
            })
            .catch(function (error) {
                console.error(error.response);
            });      
            
        },
        watch : {
            province(newValue){
                if (this.type == 5) return
                this.district = "";
                this.districts = new Set(this.province_list.filter(item => item.province == newValue).map(item => item.district))
            },
            district(newValue){
                if (this.type == 5) return
                this.ward = "";
                this.wards = new Set(this.province_list.filter(item => item.district == newValue).map(item => item.ward))
            },

        }
    }
</script>
