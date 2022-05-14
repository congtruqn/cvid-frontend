<template>
    <div id="create-cv" class="container">
        <form class="row g-3 needs-validation">
            <h2 class="text-center mb-4">Sơ yếu lý lịch</h2>
            <h4 class="mb-3">Kinh nghiệm làm việc</h4>
            <div class="col-md-6">
                    <label class="form-label">Tên công ty</label>
                    <input type="text" class="form-control" v-model="name" required>
                </div>
            <div class="col-md-6">
                <label class="form-label">Mã số thuế</label>
                <input type="text" class="form-control" v-model="name" required>
                <div class="invalid-feedback">
                    Vui lòng nhập họ và tên.
                </div>
            </div>
            <div class="col-md-6">
                    <label class="form-label">Chức vụ</label>
                    <input type="text" class="form-control" v-model="name" required>
                </div>
            <div class="col-md-6">
                <label class="form-label">Công việc thực hiện</label>
                <input type="text" class="form-control" v-model="name" required>
                <div class="invalid-feedback">
                    Vui lòng nhập họ và tên.
                </div>
            </div>
            <h4 class="mb-3">Doanh nghiệp bạn đã làm đánh giá bạn:</h4>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">1. Tính trung thực của nhân viên</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="1" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">2. Nhiệt tình trong công việc</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="2" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">3. Tôn trọng đồng nghiệp và khách hàng</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="3" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">4. Giờ giấc và quản lý thời gian</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="4" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">5. Ý chí cầu tiến</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="5" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">6. Lạc quan trong công việc</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="6" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">7. Cẩn trọng trong công việc</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="7" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">8. Mức độ làm việc</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="8" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">9. Phát triển trong công việc</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="9" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
                <div class="col-12">
                    <label class="form-label">10. Mức độ hoàn thành công việc</label>
                </div>
                <span v-for="point in 10" :key="point">
                    <input class="form-check-input" type="radio" :value="point" name="10" required>
                    <label class="form-check-label me-md-3">{{point}}</label>
                </span>
            </div>
            <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                <label class="form-check-label" for="invalidCheck">
                    Bạn đã hoàn thành nhiệm vụ đúng theo luật lao động quy định không?
                </label>
                <div class="invalid-feedback">
                    You must agree before submitting.
                </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    const {BASE_URL} =  require('../utils/config')

    export default {  
        data(){
            return {
                name: '',

            }
        },
        methods : {
            
        },
        created(){
            this.$http.post(`${BASE_URL}/employee/get-resume`, {
                id: JSON.parse(localStorage.getItem('user')).username
            })
            .then(response => {
                if(response.data.resume){
                    this.$router.push('/listproject')
                }
            })
            .catch(function (error) {
                console.log(error)
            });
            
        },
        watch : {
            
        }
    }
</script>
