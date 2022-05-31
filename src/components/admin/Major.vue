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
        }
    },
    
}
</script>
