<template>
    <div>
        <label class="form-label">Cấp bậc</label>
        <select @click="focus" class="form-control" v-model="level" required>
            <option value="" disabled>Chọn cấp bậc</option>
            <option value="Sơ cấp">Sơ cấp</option>
            <option value="Trung cấp">Trung cấp</option>
            <option value="Cao đẳng">Cao đẳng</option>
            <option value="Đại học">Đại học</option>
            <option value="Trên đại học">Trên đại học</option>
        </select>
        <label>Nghành nghề</label>
        <input @click="focus" type="text" class="form-control" v-model="major" required>
        <button type="submit" class="btn btn-primary" @click="handleSubmit">Thêm Nghành nghề</button>
    <hr/>
        <div class="mb-4 form-floating">
            <select @click="focus" class="form-control" v-model="level" required>
                <option value="" disabled>Chọn cấp bậc</option>
                <option value="Sơ cấp">Sơ cấp</option>
                <option value="Trung cấp">Trung cấp</option>
                <option value="Cao đẳng">Cao đẳng</option>
                <option value="Đại học">Đại học</option>
                <option value="Trên đại học">Trên đại học</option>
            </select>
            <label class="form-label">Cấp bậc</label>
        </div>
        <div class="mb-4 form-floating">
            <select @click="focus" class="form-control" v-model="major" required>
                <option value="" disabled>Chọn ngành nghề</option>
                <option v-for="major in majors" :value="major.name" v-if="major.level == level">{{major.name}}</option>     
            </select>
            <label class="form-label">Nghành nghề</label>
        </div>
        <div class="mb-4">
            <div class="form-floating">
            <input @click="focus" type="text" class="form-control" v-model="skill" required/>
            <label class="form-label" for="form3Example1m">Chuyên nghành</label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="handleSubmit1">Thêm Chuyên nghành</button>
    </div>
</template>
<script>
const {BASE_URL} =  require('../../utils/config')
export default {
    
    data() {
        return {
            level: '',
            major: '',
            skill: '',
            password: '',
            password2: '',
            majors: [],
            skills: [],
            focus: false,
        }
    },
    created() {
        this.$http.get(`${BASE_URL}/major/list`)
        .then(response => {
            this.majors = response.data;
            console.log(this.listMajor)
        })
        .catch(function (error) {
            console.error(error.response);
        });
    },
    methods : {
        handleSubmit(e){
            e.preventDefault()
            this.$http.post(`${BASE_URL}/major/addmajor`, {
                level: this.level,
                major: this.major
            })
            .then(response => {
                console.log(response.data)
            })
            this.major = ''
            alert('Thêm thành công')
        },
        handleSubmit1(e){
            e.preventDefault()
            this.$http.post(`${BASE_URL}/major/addskill`, {
                level: this.level,
                major: this.major,
                skill: this.skill
            })
            .then(response => {
                console.log(response.data)
            })
            this.skill = ''
            alert('Thêm chuyên nghành thành công')
        }
    },
    watch: {
        level(){
                this.major = "";
                this.skill = "";
            },
    }
    
}
</script>
