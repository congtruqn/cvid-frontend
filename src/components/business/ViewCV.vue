<template>
    <body>
        <div class="wrapper mt-lg-5">
            <div class="sidebar-wrapper">
                <div class="profile-container">
                    <img class="profile" src="../../assets/images/user.png" alt="" />
                    <h1 class="name">{{cv.name}}</h1>
                    <h3 class="tagline">{{cv.position}}</h3>
                </div><!--//profile-container-->
                
                <div class="contact-container container-block">
                    <ul class="list-unstyled contact-list">

                        <li class=""><i class="fas fa-calendar"></i> {{new Date(cv.birthdate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'})}}</li>
                        <li class=""><i class="fas fa-globe"></i><a> Quốc tịch: {{cv.country}}</a></li>
                        <li class=""><i class="bi bi-geo-alt"></i><a> {{cv.address+', '+cv.ward+', '+cv.district +', '+cv.province}}</a></li>
                        <!-- <li class=""><i class=""></i><a>Cấp bậc: {{cv.level}}</a></li>
                        <li class=""><i class=""></i><a >{{cv.skill}}</a></li> -->
                    </ul>
                </div>
                <div class="education-container container-block">
                    <h2 class="container-block-title">Học vấn</h2>
                    <div class="item">
                        <h4 class="degree">{{cv.school}}</h4>
                        <h5 class="meta my-2">Nghành: {{cv.major}}</h5>
                        <h5 class="meta">Chuyên nghành: {{cv.skill}}</h5>
                        <h5 class="meta">{{cv.startyear}} - {{cv.endyear}}</h5>
                    </div>
                </div>
            </div>
            
            <div class="main-wrapper">
                <section class="section experiences-section" v-if="cv.degrees.length">
                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Bằng cấp bổ sung</h2>   
                    <div class="item" v-for="degree in cv.degrees">
                        <div class="meta">
                            <div class="upper-row">
                                <h3 class="job-title">Tên bằng cấp: {{degree.name}}</h3>
                                <div class="time">{{degree.year}}</div>
                            </div><!--//upper-row-->
                            <div class="company">Mã số chứng chỉ: {{degree.code}}</div>
                        </div><!--//meta-->
                        <div class="details">
                            <p class="m-2">Cấp bậc: {{degree.level}}</p>  
                            <p class="m-2">Trường: {{degree.school}}</p>  
                            <p class="m-2">Nghành: {{degree.major}}</p>
                            <p class="m-2">Chuyên nghành: {{degree.skill}}</p>
                        </div><!--//details-->
                    </div><!--//item-->
                </section>

                <section class="section experiences-section" v-if="cv.skills.length">
                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Chứng chỉ</h2>   
                    <div class="item" v-for="skill in cv.skills">
                        <div class="meta">
                            <div class="upper-row">
                                <h3 class="job-title">Tên chứng chỉ{{skill.name}}</h3>
                            </div><!--//upper-row-->
                            <div class="company">Nơi cấp: {{skill.school}}</div>
                            <div class="company">Ngày hết hạn: {{skill.year}}</div>
                        </div><!--//meta-->
                    </div><!--//item-->
                </section>
                <section class="section experiences-section" v-if="cv.companies.length">
                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Quá trình công tác</h2>  
                    <h6 class="section-title text-danger">Kinh nghiệm làm việc: {{getExperience}} năm</h6> 
                    <div class="item" v-for="(companie, count1) in cv.companies" :key="count1">
                        <div class="meta">
                            <div class="upper-row">
                                <h3 class="job-title">{{companie.name}}</h3>
                            </div>
                        </div><!--//meta-->
                        <div class="details" v-for="position in companie.position">
                            <div class="upper-row">
                              <span class="m-2">{{position.work}}</span>
                              <div class="time">Từ {{position.from}} đến {{position.to}}</div>
                            </div> 
                            <p class="m-2">{{position.name}}</p>
                            <p class="m-2">{{position.address}}</p>
                        </div><!--//details-->
                        
                    </div><!--//item-->
                    <!--//skills-section-->
                </section>
                <section class="skills-section section mt-4">
                  <div class="skillset">     
                      <h2 class="section-title">Kết quả đánh giá</h2> 
                      <div class="item" v-for="(item, count2) in criteria" :key="count2">
                          <h3 class="level-title me-2">{{item.name}}</h3>
                          <div class="progress level-bar">
                              <div class="progress-bar theme-progress-bar" role="progressbar" :style="{width: cv.assessment[count2]+'0%'}" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">{{cv.assessment[count2]}}</div>
                          </div>                               
                      </div><!--//item-->
                  </div>  
                </section>
                <div class="col-12" v-if="this.$route.query.position">
                    <button class="btn btn-primary w-100" type="submit" @click="onSubmit">Chấp nhận</button>   
                </div>
                
                
                    
              
                
                
            </div><!--//main-body-->
        </div>            
    </body>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    export default {  
        data(){
            return {
                cv: '',
                criteria: ''
            }
        },
        created(){
            this.$http.get(`${BASE_URL}/employee/cvid/${this.$route.params.cvid}`)
            .then(res => {
                this.cv = res.data;
            }) 

            this.$http.get(`${BASE_URL}/criteria/getall`)
            .then(res => {
                this.criteria = res.data;
            }) 
        },
        methods: {
          onSubmit(){
            this.$http.post(`${BASE_URL}/job/create`, {
                    employee: this.$route.params.cvid,
                    position: this.this.$route.query.position,
                    business: JSON.parse(localStorage.getItem('business'))._id,
                    type: 2
                }).then(res => {
                    this.$router.push('/business/candidate')

                }).catch(err => {
                    console.log(err)
                })
          }
        },
        computed: {
          getExperience(){
            var sum = 0
            if (this.cv.companies){
              this.cv.companies.filter(function(company){
                company.position.filter(function(position){
                  sum += ((new Date(position.to)).getTime()-(new Date(position.from)).getTime())
                })
              })
            }
            return Math.round(sum/15768000000)/2
          }
        },
    }
</script>
<style scoped>
    body {
        font-family: "Roboto", sans-serif;
        color: #545E6C;
        background: #f5f5f5;
        font-size: 14px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        color: white;
      }
      
      a {
        color: #3d884d;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        color: #25532f;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
      }
      a:focus {
        text-decoration: none;
      }
      
      p {
        line-height: 1.5;
      }
      
      .wrapper {
        background: #5BB66F;
        max-width: 960px;
        margin: 0 auto;
        position: relative;
        -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .sidebar-wrapper {
        background: #5BB66F;
        position: absolute;
        right: 0;
        width: 240px;
        height: 99%;
        min-height: 800px;
        color: #fff;
      }
      .sidebar-wrapper a {
        color: #fff;
      }
      .sidebar-wrapper .profile-container {
        padding: 30px;
        background: rgba(0, 0, 0, 0.2);
        text-align: center;
        color: #fff;
      }
      .sidebar-wrapper .name {
        font-size: 32px;
        font-weight: 900;
        margin-top: 0;
        margin-bottom: 10px;
      }
      .sidebar-wrapper .tagline {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0;
      }
      .sidebar-wrapper .profile {
        margin-bottom: 15px;
      }
      .sidebar-wrapper .contact-list .svg-inline--fa {
        margin-right: 5px;
        font-size: 18px;
        vertical-align: middle;
      }
      .sidebar-wrapper .contact-list li {
        margin-bottom: 15px;
      }
      .sidebar-wrapper .contact-list li:last-child {
        margin-bottom: 0;
      }
      .sidebar-wrapper .contact-list .email .svg-inline--fa {
        font-size: 14px;
      }
      .sidebar-wrapper .container-block {
        padding: 30px;
      }
      .sidebar-wrapper .container-block-title {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 15px;
      }
      .sidebar-wrapper .degree {
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 5px;
      }
      .sidebar-wrapper .education-container .item {
        margin-bottom: 15px;
      }
      .sidebar-wrapper .education-container .item:last-child {
        margin-bottom: 0;
      }
      .sidebar-wrapper .education-container .meta {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 400;
        margin-bottom: 0px;
        margin-top: 0;
        font-size: 14px;
      }
      .sidebar-wrapper .education-container .time {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 500;
        margin-bottom: 0px;
      }
      .sidebar-wrapper .languages-container .lang-desc {
        color: rgba(255, 255, 255, 0.6);
      }
      .sidebar-wrapper .languages-list {
        margin-bottom: 0;
      }
      .sidebar-wrapper .languages-list li {
        margin-bottom: 10px;
      }
      .sidebar-wrapper .languages-list li:last-child {
        margin-bottom: 0;
      }
      .sidebar-wrapper .interests-list {
        margin-bottom: 0;
      }
      .sidebar-wrapper .interests-list li {
        margin-bottom: 10px;
      }
      .sidebar-wrapper .interests-list li:last-child {
        margin-bottom: 0;
      }
      
      .main-wrapper {
        background: #fff;
        padding: 60px;
        padding-right: 300px;
      }
      .main-wrapper .section-title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 500;
        color: #3d884d;
        position: relative;
        margin-top: 0;
        margin-bottom: 20px;
      }
      .main-wrapper .section-title .icon-holder {
        width: 30px;
        height: 30px;
        margin-right: 8px;
        display: inline-block;
        color: #fff;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        border-radius: 50%;
        -moz-background-clip: padding;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        background: #3d884d;
        text-align: center;
        font-size: 16px;
        position: relative;
        top: -4px;
        padding-top: 5px;
      }
      .main-wrapper .section-title .icon-holder .svg-inline--fa {
        font-size: 14px;
        margin-top: 6px;
      }
      .main-wrapper .section {
        margin-bottom: 60px;
      }
      .main-wrapper .experiences-section .item {
        margin-bottom: 20px;
      }
      .main-wrapper .upper-row {
        position: relative;
        overflow: hidden;
        margin-bottom: 2px;
      }
      .main-wrapper .job-title {
        color: #3F4650;
        font-size: 16px;
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 500;
      }
      .main-wrapper .time {
        position: absolute;
        right: 0;
        top: 0;
        color: #97AAC3;
      }
      .main-wrapper .company {
        margin: 10px;
        color: #97AAC3;
      }
      .main-wrapper .project-title {
        font-size: 16px;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 5px;
      }
      .main-wrapper .projects-section .intro {
        margin-bottom: 30px;
      }
      .main-wrapper .projects-section .item {
        margin-bottom: 15px;
      }
      
      .skillset .item {
        margin-bottom: 15px;
        overflow: hidden;
      }
      .skillset .level-title {
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 12px;
        color: #25532f;
      }
      .skillset .level-bar {
        height: 12px;
        background: #f5f5f5;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        -ms-border-radius: 2px;
        -o-border-radius: 2px;
        border-radius: 2px;
        -moz-background-clip: padding;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
      }
      .skillset .theme-progress-bar {
        background: #7ec68e;
      }
      
      @media (max-width: 767.98px) {
        .sidebar-wrapper {
          position: static;
          width: inherit;
        }
      
        .main-wrapper {
          padding: 30px;
        }
      
        .main-wrapper .time {
          position: static;
          display: block;
          margin-top: 5px;
        }
      
        .main-wrapper .upper-row {
          margin-bottom: 0;
        }
      }
      @media (min-width: 992px) {
        .skillset .level-title {
          display: inline-block;
          float: left;
          width: 30%;
          margin-bottom: 0;
        }
      }
</style>