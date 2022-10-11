<template>
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
  >
    <a
      href="/index.html"
      class="
        navbar-brand
        d-flex
        align-items-center
        text-center
        py-0
        px-4 px-lg-5
      "
    >
      <h1 class="m-0 text-primary">CVIDPro</h1>
    </a>
    <button
      type="button"
      class="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto p-4 p-lg-0">
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <!-- <a href="about.html" class="nav-item nav-link">About</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="job-list.html" class="dropdown-item">Job List</a>
                        <a href="job-detail.html" class="dropdown-item">Job Detail</a>
                    </div>
                </div> -->
        <!-- <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="category.html" class="dropdown-item">Job Category</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404</a>
                    </div>
                </div> -->
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Vị trí tuyển dụng</a
          >
          <div class="dropdown-menu rounded-0 m-0">
            <a
              v-for="department in departments"
              :key="department._id"
              :href="'/business/department/' + department.key"
              class="dropdown-item"
              >{{ department.name }}</a
            >
          </div>
        </div>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Tuyển dụng</a
          >
          <div class="dropdown-menu rounded-0 m-0">
            <a
              v-for="department in departments"
              :key="department._id"
              href="/business/recruit"
              class="dropdown-item"
              @click=setLocal(department.key)
              >{{ department.name }}
              </a
            >
          </div>
        </div>
        <a href="/business/candidate" class="nav-item nav-link">Ứng viên</a>
        <a href="/business/login" class="nav-item nav-link">Login</a>
        <a href="" @click="logout" class="nav-item nav-link">Đăng xuất</a>
      </div>
    </div>
  </nav>
</template>
<script>
const { BASE_URL } = require("../../utils/config");
export default {
  data() {
    return {
      business_id: "",
      departments: [],
      key: "",
    };
  },
  methods: {
    setLocal(key){
        localStorage.setItem('key', key);
    },
    logout() {
      localStorage.removeItem("business");
      localStorage.removeItem("token");
      this.$router.push("/business/login");
    },
  },
  async created() {
    try {
      this.business_id = JSON.parse(localStorage.getItem("business")).username;
    } catch (err) {
      this.key = localStorage.getItem("key");
    }
    if (this.business_id) {
      await this.$http
        .post(`${BASE_URL}/department/list/get-by-id`, {
          id: this.business_id,
        })
        .then((res) => {
          this.departments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (this.key) {
      await this.$http
        .post(`${BASE_URL}/department/list/get-by-key`, {
          key: this.key,
        })
        .then((res) => {
          if (res.data) {
            this.departments = res.data;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
};
</script>
