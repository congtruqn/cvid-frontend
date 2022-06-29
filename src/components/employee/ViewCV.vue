<template>
    <body>
        <div class="wrapper mt-lg-5">
            <div class="sidebar-wrapper">
                <div class="profile-container">
                    <img class="profile" src="../../assets/images/user.png" alt="" />
                    <h1 class="name">{{employee.name}}</h1>
                    <h3 class="tagline">Full Stack Developer</h3>
                </div><!--//profile-container-->
                
                <div class="contact-container container-block">
                    <ul class="list-unstyled contact-list">
                        <li class="email"><i class="fas fa-envelope"></i><a href="mailto: yourname@email.com">{{employee.email}}</a></li>
                        <li class=""><i class="fas fa-calendar"></i> 19/07/2000</li>
                        <li class=""><i class="bi bi-geo-alt"></i><a> {{employee.address+', '+employee.ward+', '+employee.district +', '+employee.province}}</a></li>
                        <li class=""><i class="fas fa-phone"></i><a href="tel:0123 456 789"> 0123 456 789</a></li>
                        <li class=""><i class=""></i><a>Cấp bậc: {{employee.level}}</a></li>
                        <li class=""><i class=""></i><a >{{employee.skill}}</a></li>
                    </ul>
                </div><!--//contact-container-->
                <div class="education-container container-block">
                    <h2 class="container-block-title">Education</h2>
                    <div class="item">
                        <h4 class="degree">MSc in Computer Science</h4>
                        <h5 class="meta">University of London</h5>
                            <div class="time">2016 - 2018</div>
                    </div><!--//item-->
                    <div class="item">
                        <h4 class="degree">BSc in Applied Mathematics</h4>
                        <h5 class="meta">Bristol University</h5>
                        <div class="time">2012 - 2016</div>
                    </div><!--//item-->
                </div><!--//education-container-->
                
                <div class="languages-container container-block">
                    <h2 class="container-block-title">Languages</h2>
                    <ul class="list-unstyled interests-list">
                        <li>English <span class="lang-desc">(Native)</span></li>
                        <li>French <span class="lang-desc">(Professional)</span></li>
                        <li>Spanish <span class="lang-desc">(Professional)</span></li>
                    </ul>
                </div><!--//interests-->
                
                <div class="interests-container container-block">
                    <h2 class="container-block-title">Interests</h2>
                    <ul class="list-unstyled interests-list">
                        <li>Climbing</li>
                        <li>Snowboarding</li>
                        <li>Cooking</li>
                    </ul>
                </div><!--//interests-->
                
            </div><!--//sidebar-wrapper-->
            
            <div class="main-wrapper">
                
                <section class="section summary-section">
                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-user"></i></span>Career Profile</h2>
                    <div class="summary">
                        <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/" target="_blank">download this free resume/CV template here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
                    </div><!--//summary-->
                </section><!--//section-->
                
                <section class="section experiences-section">
                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-briefcase"></i></span>Experiences</h2>
                    
                    <div class="item">
                        <div class="meta">
                            <div class="upper-row">
                                <h3 class="job-title">Lead Developer</h3>
                                <div class="time">2022 - Present</div>
                            </div><!--//upper-row-->
                            <div class="company">Startup Hubs, San Francisco</div>
                        </div><!--//meta-->
                        <div class="details">
                            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.</p>  
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                        </div><!--//details-->
                    </div><!--//item-->
                    
                    <div class="item">
                        <div class="meta">
                            <div class="upper-row">
                                <h3 class="job-title">Senior Software Engineer</h3>
                                <div class="time">2018 - 2022</div>
                            </div><!--//upper-row-->
                            <div class="company">Google, London</div>
                        </div><!--//meta-->
                        <div class="details">
                            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
                            
                        </div><!--//details-->
                    </div><!--//item-->
                    
                    <div class="item">
                        <div class="meta">
                            <div class="upper-row">
                                <h3 class="job-title">UI Developer</h3>
                                <div class="time">2016 - 2018</div>
                            </div><!--//upper-row-->
                            <div class="company">Amazon, London</div>
                        </div><!--//meta-->
                        <div class="details">
                            <p>Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>  
                        </div><!--//details-->
                    </div><!--//item-->
                    
                </section><!--//section-->
                
                <section class="section projects-section">
                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-archive"></i></span>Projects</h2>
                    <div class="intro">
                        <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
                    </div><!--//intro-->
                    <div class="item">
                        <span class="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/" target="_blank">CoderPro</a></span> - <span class="project-tagline">A responsive website template designed to help developers launch their software projects. </span>
                        
                    </div><!--//item-->
                    <div class="item">
                        <span class="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/launch-bootstrap-5-template-for-saas-businesses/" target="_blank">Launch</a></span> - <span class="project-tagline">A responsive website template designed to help startups promote their products or services.</span>
                    </div><!--//item-->
                    <div class="item">
                        <span class="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/devcard-bootstrap-5-vcard-portfolio-template-for-software-developers/" target="_blank">DevCard</a></span> - <span class="project-tagline">A portfolio website template designed for software developers.</span>
                    </div><!--//item-->
                    <div class="item">
                        <span class="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">Nova Pro</a></span> - <span class="project-tagline">A responsive Bootstrap theme designed to help app developers promote their mobile apps</span>
                    </div><!--//item-->
                    <div class="item">
                        <span class="project-title"><a href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/" target="_blank">DevStudio</a></span> - 
                        <span class="project-tagline">A responsive website template designed to help web developers/designers market their services. </span>
                    </div><!--//item-->
                </section><!--//section-->
                
                <section class="skills-section section">
                    <h2 class="section-title"><span class="icon-holder"><i class="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
                    <div class="skillset">        
                        <div class="item">
                            <h3 class="level-title">Python &amp; Django</h3>
                            <div class="progress level-bar">
                                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 99%" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                               
                        </div><!--//item-->
                        
                        <div class="item">
                            <h3 class="level-title">Javascript</h3>
                            <div class="progress level-bar">
                                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 98%" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                              
                        </div><!--//item-->
                        
                        <div class="item">
                            <h3 class="level-title">React &amp; Angular</h3>
                            <div class="progress level-bar">
                                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 98%" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                 
                        </div><!--//item-->
                        
                        <div class="item">
                            <h3 class="level-title">HTML5 &amp; CSS</h3>
                            <div class="progress level-bar">
                                    <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                
                        </div><!--//item-->
                        
                        <div class="item">
                            <h3 class="level-title">Ruby on Rails</h3>
                            <div class="progress level-bar">
                                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                  
                        </div><!--//item-->
                        
                        <div class="item">
                            <h3 class="level-title">Sketch &amp; Photoshop</h3>
                            <div class="progress level-bar">
                                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>                                 
                        </div><!--//item-->
                        
                    </div>  
                </section><!--//skills-section-->
                
            </div><!--//main-body-->
        </div>            
    </body>
</template>
<script>
    const {BASE_URL} =  require('../../utils/config')
    export default {  
        data(){
            return {
                employee: JSON.parse(localStorage.getItem('employee'))
            }
        },
        created(){
            
        }
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
        height: 100%;
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
        font-weight: 500;
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
        top: -2px;
        padding-top: 2px;
      }
      .main-wrapper .section-title .icon-holder .svg-inline--fa {
        font-size: 14px;
        margin-top: 6px;
      }
      .main-wrapper .section {
        margin-bottom: 60px;
      }
      .main-wrapper .experiences-section .item {
        margin-bottom: 30px;
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
        margin-bottom: 10px;
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