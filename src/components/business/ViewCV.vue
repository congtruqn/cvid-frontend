<template>
  <div class="container">
    <h3 class="text-primary d-flex justify-content-center mt-4">
      LÝ LỊCH ỨNG VIÊN (CVIDPRO)
    </h3>
    <h5 class="text-primary d-flex justify-content-center mt-2 text-success">
      Số CVID:
      <span class="fst-italic"> CV{{ employee.username?employee.username.slice(1, 10):'' }}</span>
    </h5>
    <h4 class="text-primary text-decoration-underline">Hồ sơ cá nhân</h4>
    <div class="row">
      <div class="col-md-6">
        <p class="m-1">
          Họ và tên: <span class="fw-bold">{{ employee.name }}</span>
        </p>
        <p class="m-1">
          Ngày sinh:
          <span class="fw-bold">{{
            new Date(employee.birthdate).toLocaleDateString("en-US")
          }}</span>
        </p>
        <p class="m-1">
          Giới tính: <span class="fw-bold">{{ employee.gender }}</span>
        </p>
      </div>
      <div class="col-md-6">
        <p class="m-1">
          Số điện thoại: <span class="fw-bold">{{ employee.username }}</span>
        </p>
        <p class="m-1">
          Email: <span class="fw-bold">{{ employee.email }}</span>
        </p>
        <p class="m-1">
          Địa chỉ:
          <span class="fw-bold">{{
            employee.address +
            ", " +
            employee.ward +
            ", " +
            employee.district +
            ", " +
            employee.province
          }}</span>
        </p>
      </div>
    </div>
    <h4 class="text-primary text-decoration-underline">Nền tảng chuyên môn</h4>
    <div class="row">
      <div class="col-md-6">
        <p class="m-1">
          Chức danh chuyên môn:
          <span class="fw-bold">{{ employee.professionaltitle }}</span>
        </p>
        <p class="m-1">
          Chuyên nghành: <span class="fw-bold">{{ employee.skill }}</span>
        </p>
        <p class="m-1">
          Trình độ: <span class="fw-bold">{{ employee.level }}</span>
        </p>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-md-6">
        <h4 class="text-primary mt-2 text-decoration-underline">
          Kinh nghiệm làm việc
        </h4>
      </div>
      <div class="col-md-6 text-md-end mt-2">
        <span class="badge bg-primary fs-6"
          >Số năm kinh nghiệm: {{ getExperience }}</span
        >
      </div>
    </div>
    <div
      class="card border-success border-2 mt-3"
      v-for="(company, index1) in employee.skillWorking"
      v-if="employee.skillWorking.length > 0"
    >
      <div class="card-header border-success border-2">
        <div class="row">
          <div class="col-12">
            <div class="input-group input-group-sm mb-2">
              <span class="input-group-text w-100 fw-bold"
                >Nơi làm việc {{ index1 + 1 }}</span
              >
            </div>
          </div>
          <div class="col-md-6 mt-n2 mb-2">
            <div class="input-group input-group-sm mb-2">
              <span class="border px-2 py-1 bg-white col fw-bold">{{
                company.name
              }}</span>
            </div>
          </div>
          <div class="col-md-6 mt-n2">
            <div class="input-group input-group-sm mb-2">
              <span class="input-group-text fw-bold">Từ</span>
              <span class="border p-1 bg-white col fw-bold">{{
                company.from
              }}</span>
              <span class="input-group-text fw-bold">Đến</span>
              <span class="border p-1 bg-white col fw-bold">{{
                company.to
              }}</span>
            </div>
          </div>

          <div class="col-12 mb-2">
            <div class="input-group input-group-sm">
              <span class="input-group-text fw-bold w-100">Địa chỉ</span>
              <span class="border px-2 py-1 bg-white col fw-bold">{{
                company.address
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body text-success px-0">
        <div class="row">
          <h6 class="text-primary fw-bold text-center">Quá trình làm việc</h6>
          <div class="col-12" v-for="(element, index2) in company.process">
            <div class="card border-success border-start-0 border-end-0">
              <div class="card-header bg-transparent border-success">
                <div class="row">
                  <div class="col-12">
                    <div class="input-group input-group-sm mb-2">
                      <span class="input-group-text w-100 fw-bold"
                        >Chức danh công việc</span
                      >
                    </div>
                  </div>
                  <div class="col-md-6 mt-n2 mb-2">
                    <div class="input-group input-group-sm mb-2">
                      <span class="border px-2 py-1 bg-white col fw-bold">{{
                        element.title
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-6 mt-n2">
                    <div class="input-group input-group-sm">
                      <span class="input-group-text fw-bold">Từ</span>
                      <span class="border p-1 bg-white col fw-bold">{{
                        element.from
                      }}</span>
                      <span class="input-group-text fw-bold">Đến</span>
                      <span class="border p-1 bg-white col fw-bold">{{
                        element.to
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body text-success">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-group input-group-sm mb-2">
                      <span class="input-group-text w-100 fw-bold"
                        >Chức vụ</span
                      >
                      <span class="border p-2 bg-white col fw-bold">{{
                        element.position
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group input-group-sm mb-2">
                      <span class="input-group-text w-100 fw-bold"
                        >Chuyên nghành</span
                      >
                      <span class="border p-2 bg-white col fw-bold">{{
                        element.skill
                      }}</span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-group input-group-sm mb-2">
                      <span class="input-group-text w-100 fw-bold"
                        >Công việc đã thực hiện</span
                      >
                      <span class="border p-2 bg-white col fw-bold">{{
                        element.work
                      }}</span>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-group input-group-sm mb-2">
                      <span class="input-group-text fw-bold w-100"
                        >Địa chỉ</span
                      >
                      <span class="border p-1 bg-white col fw-bold">{{
                        element.address
                      }}</span>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="element.to != 'Hiện tại'">
                    <div class="input-group input-group-sm mb-2">
                      <span class="input-group-text fw-bold w-100"
                        >Kết quả hoàn thành</span
                      >
                      <span class="border px-2 py-1 bg-white col fw-bold">{{
                        element.result
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div
              class="input-group input-group-sm px-3 pt-3"
              v-if="company.to != 'Hiện tại'"
            >
              <span class="input-group-text fw-bold">Lý do nghỉ việc</span>
              <span class="border p-1 bg-white col fw-bold">{{
                company.leaving
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h5 class="text-primary m-2">Kết quả đánh giá</h5> -->
    <ul class="list-group mt-4">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
          bg-light
        "
      >
        <h5 class="text-primary m-2">Tiêu chí và kết quả đánh giá</h5>
        <input
          type="text"
          class="form-control-plaintext form-control-sm text-dark"
          value="Điểm"
          :style="{ maxWidth: '3rem' }"
          disabled
        />
      </li>
      <li class="list-group-item" v-for="(ele, index) in criteria" :key="index">
        <div class="d-flex justify-content-between align-items-center">
          <span
            >{{ index + 1 + ". " + ele.name }}
            <a
              data-bs-toggle="collapse"
              :href="'#collapse' + index"
              class="link-primary"
              role="button"
              aria-expanded="false"
              :aria-controls="'collapse' + index"
              ><i class="fas fa-question-circle ms-0"></i></a
          ></span>
          <span
            class="border px-4 py-1 bg-white"
            :style="{ maxWidth: '3.5rem' }"
            >{{ employee.assessment[index] }}</span
          >
          <!-- <input
            type="number"
            class="form-control form-control-sm bg-white text-dark"
            disabled
            :style="{ maxWidth: '3.5rem' }"
            v-model="employee.assessment[index]"
          /> -->
        </div>
        <div class="collapse" :id="'collapse' + index">
          <ul class="list-group ms-5">
            <li class="" v-for="item in ele.detail">{{ item }}</li>
          </ul>
        </div>
      </li>
    </ul>
    <h4 class="text-primary mt-2 text-decoration-underline">
      Quá trình học tập
    </h4>
    <div class="row">
      <div class="col-md-6">
        <div class="card border-primary mb-3">
          <div class="card-header">
            <div class="input-group input-group-sm">
              <span class="input-group-text">Từ:</span>
              <span class="border p-1 bg-white col text-center">{{
                new Date(employee.startyear).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              }}</span>
              <span class="input-group-text">Đến:</span>
              <span class="border p-1 bg-white col text-center">{{
                new Date(employee.endyear).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              }}</span>
            </div>
          </div>
          <div class="card-body text-primary">
            <h5 class="card-title">{{ employee.school }}</h5>
            <p class="card-text mx-2 my-1">Cấp bậc: {{ employee.level }}</p>
            <p class="card-text mx-2 my-1">
              Chuyên nghành: {{ employee.skill }}
            </p>
            <p class="card-text mx-2 my-1">Điểm:</p>
            <p class="card-text mx-2 my-1">Xếp loại: {{ employee.rating }}</p>
          </div>
        </div>
      </div>
      <div
        class="col-md-6"
        v-for="(ele, index) in employee.skillEducation"
        :key="index"
      >
        <div class="card border-primary mb-3">
          <div class="card-header">
            <div class="input-group input-group-sm">
              <span class="input-group-text">Từ:</span>
              <span class="border p-1 bg-white col text-center">{{
                new Date(ele.from).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              }}</span>
              <span class="input-group-text">Đến:</span>
              <span class="border p-1 bg-white col text-center">{{
                new Date(ele.to).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              }}</span>
            </div>
          </div>
          <div class="card-body text-primary">
            <h5 class="card-title">{{ ele.school }}</h5>
            <p class="card-text mx-2 my-1">Cấp bậc: {{ ele.level }}</p>
            <p class="card-text mx-2 my-1">Chuyên nghành: {{ ele.skill }}</p>
            <p class="card-text mx-2 my-1">Điểm: {{ ele.point }}</p>
            <p class="card-text mx-2 my-1">Xếp loại: {{ ele.rating }}</p>
          </div>
        </div>
      </div>
    </div>
    <h4
      class="text-primary mt-2 text-decoration-underline"
      v-if="employee.shortTraining && employee.shortTraining.length > 0"
    >
      Các khoá đào tạo ngắn hạn
    </h4>
    <div
      class="card mb-3"
      v-for="(ele, index) in employee.shortTraining"
      v-if="employee.shortTraining.length > 0"
    >
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Từ</label>
              <span class="border px-2 py-1 bg-white col fw-bold">{{
                ele.from
              }}</span>
            </div>
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Đến</label>
              <span class="border px-2 py-1 bg-white col fw-bold">{{
                ele.to
              }}</span>
            </div>
          </div>
          <div class="col-md-8">
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Chứng chỉ đại được</label>
              <span class="border px-2 py-1 bg-white col fw-bold">{{
                ele.name
              }}</span>
            </div>
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Đơn vị tổ chức</label>
              <span class="border px-2 py-1 bg-white col fw-bold">{{
                ele.place
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="text-primary mt-2 text-decoration-underline">
      Khả năng ngoại ngữ và vi tính
    </h4>
    <table class="table table-bordered border-primary text-center">
      <thead>
        <tr>
          <th colspan="5">
            <h5 class="text-primary m-1">Khả năng Tiếng Anh</h5>
          </th>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Kĩ năng</th>
          <th class="col">Giỏi</th>
          <th class="col">Tốt</th>
          <th class="col">Bình thường</th>
          <th class="col">Cơ bản</th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex">
          <th class="col-2">Nghe</th>
          <td class="col" v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillEnglish.listening"
              :value="point"
              disabled
            />
          </td>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Nói</th>
          <td class="col" v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillEnglish.speaking"
              :value="point"
              disabled
            />
          </td>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Đọc</th>
          <td class="col" v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillEnglish.reading"
              :value="point"
              disabled
            />
          </td>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Viết</th>
          <td class="col" v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillEnglish.writing"
              :value="point"
              disabled
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table
      class="table table-bordered border-primary text-center"
      v-for="skill in employee.skillLanguage"
      v-if="skill.name != ''"
    >
      <thead>
        <tr>
          <th colspan="5">
            <input
              type="text"
              class="form-control text-center text-primary h5 fs-5"
              placeholder="Tên ngoại ngữ"
              v-model="skill.name"
            />
          </th>
        </tr>
        <tr>
          <th scope="col">Kĩ năng</th>
          <th scope="col">Giỏi</th>
          <th scope="col">Tốt</th>
          <th scope="col">Bình thường</th>
          <th scope="col">Cơ bản</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Nghe</th>
          <td v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="skill.listening"
              :value="point"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Nói</th>
          <td v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="skill.speaking"
              :value="point"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Đọc</th>
          <td v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="skill.reading"
              :value="point"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Viết</th>
          <td v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="skill.writing"
              :value="point"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered border-primary text-center">
      <thead>
        <tr>
          <th colspan="8">
            <h5 class="text-primary m-1">Khả năng vi tính</h5>
          </th>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Đánh giá</th>
          <th class="col">World</th>
          <th class="col">Excel</th>
          <th class="col-5">Phần mền khác</th>
        </tr>
      </thead>
      <tbody>
        <tr class="d-flex">
          <th class="col-2">Giỏi</th>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.word"
              value="1"
              disabled
            />
          </td>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.excel"
              value="1"
              disabled
            />
          </td>
          <td class="col-5">{{ employee.skillComputer.other[0] }}</td>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Tốt</th>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.word"
              value="2"
              disabled
            />
          </td>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.excel"
              value="2"
              disabled
            />
          </td>
          <td class="col-5">{{ employee.skillComputer.other[1] }}</td>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Bình thường</th>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.word"
              value="3"
              disabled
            />
          </td>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.excel"
              value="3"
              disabled
            />
          </td>
          <td class="col-5">{{ employee.skillComputer.other[2] }}</td>
        </tr>
        <tr class="d-flex">
          <th class="col-2">Cơ bản</th>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.word"
              value="4"
              disabled
            />
          </td>
          <td class="col">
            <input
              class="form-check-input"
              type="radio"
              v-model="employee.skillComputer.excel"
              value="4"
              disabled
            />
          </td>
          <td class="col-5">{{ employee.skillComputer.other[3] }}</td>
        </tr>
      </tbody>
    </table>
    <table
      class="table table-bordered border-primary text-center"
      v-if="employee.skillOther.length > 0"
    >
      <thead>
        <tr>
          <th colspan="7"><h5 class="text-primary m-1">Kỹ năng khác</h5></th>
        </tr>
        <tr>
          <th scope="col">Tên kỹ năng</th>
          <th scope="col">Giỏi</th>
          <th scope="col">Tốt</th>
          <th scope="col">Bình thường</th>
          <th scope="col">Cơ bản</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="skill in employee.skillOther">
          <th scope="row">
            <span>{{ skill.name }}</span>
          </th>
          <td v-for="point in 4">
            <input
              class="form-check-input"
              type="radio"
              v-model="skill.point"
              :value="point"
              disabled
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-grid gap-2 col-6 mx-auto my-5" v-if="job.type!=1">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
        Đánh giá sơ bộ
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        v-if="position != ''"
      >
        <div class="modal-dialog modal-xl modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Đánh giá sơ bộ</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table class="table table-bordered border-primary">
                <thead>
                  <tr>
                    <th scope="col">Các yêu cầu</th>
                    <th scope="col">CVID</th>
                    <th scope="col">Vị trí tuyển dụng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Trình độ</th>
                    <td>{{ employee.level }}</td>
                    <td>
                      {{
                        position.levels
                          ? position.levels.toString().replaceAll(",", ", ")
                          : ""
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Chuyên nghành</th>
                    <td>{{ employee.job.skill }}</td>
                    <td>
                      {{
                        position.skills
                          ? position.skills.toString().replaceAll(",", ", ")
                          : ""
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Chức danh công việc</th>
                    <td>{{ employee.job.jobtitle }}</td>
                    <td>{{ position.jobtitle }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Chức vụ</th>
                    <td>
                      {{
                        employee.job?employee.job.position.toString().replaceAll(',', ', '):''
                      }}
                    </td>
                    <td>{{ position.name }}</td>
                  </tr>
                  <tr>
                    <th scope="row">Lĩnh vực làm việc</th>
                    <td>
                      {{
                        employee.job.work_industry == ""
                          ? "Tất cả"
                          : employee.job.work_industry
                      }}
                    </td>
                    <td>
                      {{
                        position.work_industry == ""
                          ? "Tất cả"
                          : position.work_industry
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Loại hình đơn vị tuyển dụng</th>
                    <td>
                      {{
                        employee.job.type_business == ""
                          ? "Tất cả"
                          : employee.job.type_business
                      }}
                    </td>
                    <td></td>
                  </tr>

                  <tr>
                    <th scope="row">Môi trường làm việc</th>
                    <td>
                      {{
                        employee.job.work_environment.toString().replaceAll(',', ', ')
                      }}
                    </td>
                    <td>
                      {{
                        position.work_environment == ""
                          ? "Tất cả"
                          : position.work_environment
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Nơi làm việc</th>
                    <td>
                      {{
                        employee.job.address == ""
                          ? "Tất cả"
                          : employee.job.address
                      }}
                    </td>
                    <td>
                      {{
                        position.work_location == ""
                          ? "Tất cả"
                          : position.work_location
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Số năm kinh nghiệm</th>
                    <td>
                      {{
                        getExperience
                      }}
                    </td>
                    <td>
                      {{
                        position.experience == 0
                          ? "Không yêu cầu kinh nghiệm"
                          : position.experience + " năm"
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" colspan="3">
                      <h5>Tiêu chí đánh giá</h5>
                    </th>
                  </tr>
                  <tr
                    v-for="(item, index) in criteria"
                    :key="index"
                    v-if="position.criteria[index]"
                    :class="
                      employee.assessment[index] >= position.criteria[index]
                        ? 'bg-info'
                        : 'bg-light'
                    "
                  >
                    <th scope="row">{{ item.name }}</th>
                    <td>{{ employee.assessment[index] }}</td>
                    <td>{{ position.criteria[index] }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="input-group">
  <span class="input-group-text">Đánh giá</span>
  <select class="form-select" v-model="job.rating" style="max-width : 90px">
    <option value="" disabled>Chọn...</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
  <input type="text" class="form-control" v-model="job.review" placeholder="Đánh giá...">
</div>
            </div>
            <div class="modal-footer">
              <button
                id="closeModal"
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button role="button" class="btn btn-primary" @click="onSubmit">Xác nhận</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const { BASE_URL } = require("../../utils/config");
export default {
  data() {
    return {
      job: "",
      criteria: "",
      employee: "",
      position: "",
    };
  },
  created() {
    this.$http
      .get(`${BASE_URL}/employee/cvid/${this.$route.params.id}`)
      .then((res) => {
        this.employee = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
    this.$http
      .get(`${BASE_URL}/department/position/${this.$route.query.position}`)
      .then((res) => {
        this.position = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    this.$http
      .post(`${BASE_URL}/job/checkjob`, {
        employee: this.$route.params.cvid,
        position: this.$route.query.position,
      })
      .then((res) => {
        if (res.data) {
          this.job = res.data;
        } else {
          this.job = {
            employee_id: this.$route.params.id,
            position_id: this.$route.query.position,
            type: 2,
            rating: "",
            review: "",
          };
        }
        console.log(this.job)
      })
      .catch((err) => {
        console.log(err);
      });

    this.$http.get(`${BASE_URL}/criteria/getall`).then((res) => {
      this.criteria = res.data;
    });
  },
  computed: {
    getExperience() {
      var sum = 0;
      if (this.employee.skillWorking.length > 0) {
        this.employee.skillWorking.filter(function (company) {
          if (company.process) {
            company.process.forEach((item) => {
              let timeTo =
                item.to == "Hiện tại"
                  ? new Date().getTime()
                  : new Date(item.to).getTime();
              let timeFrom = new Date(item.from).getTime();
              if (timeTo && timeFrom) {
                sum += timeTo - timeFrom;
              }
            });
          }
        });
      }
      let result = "";
      let numberYear = Math.floor(sum / 31536000000);
      if (numberYear) result += `${numberYear} năm`;
      let numberMonth = Math.round((sum % 31536000000) / 2628000000);
      if (numberMonth) result += ` ${numberMonth} tháng`;
      if (numberYear == 0 && numberMonth == 0) {
        return "Chưa có kinh nghiệm";
      }
      return result;
    },
  },
  methods: {
    onSubmit() {
      if (this.job.rating == "") {
        Swal.fire({
          icon: "info",
          title: "Đánh giá CV trước khi chọn",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      this.$http
        .post(`${BASE_URL}/job/create`, {
          job: this.job,
        })
        .then((res) => {
          $('#closeModal').click()
          this.$router.push("/business/recruit");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
  

     
 
       