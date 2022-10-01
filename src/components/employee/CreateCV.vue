<template>
  <div class="container">
    <h3 class="text-primary d-flex justify-content-center my-4">
      TẠO LÝ LỊCH ỨNG VIÊN CVIDPRO
    </h3>
    <h4 class="text-primary text-decoration-underline">Hồ sơ cá nhân</h4>
    <div class="row">
      <div class="col-auto">
        <div class="card" style="max-width: 18rem">
          <img src="@/assets/images/user.png" class="card-img-top" alt="..." />
          <div class="my-1 text-center">
            <!-- <input type="file" class="file" data-browse-on-zone-click="true"/> -->
            <label for="file-upload" class="badge bg-secondary fs-6">
              Chọn ảnh
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              class="d-none"
            />
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <p class="m-1">Họ và tên: {{ employee.name }}</p>
        <p class="m-1">Ngày sinh: {{ employee.birthdate }}</p>
        <p class="m-1">Giới tính: {{ employee.gender }}</p>
        <p class="m-1">Số điện thoại: {{ employee.username }}</p>
        <p class="m-1">Email: {{ employee.email }}</p>
        <p class="m-1">
          Địa chỉ:
          {{
            employee.address +
            ", " +
            employee.ward +
            ", " +
            employee.district +
            ", " +
            employee.province
          }}
        </p>
      </div>

      <div class="col-md-6"></div>
    </div>
    <h4 class="text-primary mt-2 text-decoration-underline">
      Kinh nghiệm làm việc
    </h4>
    <div class="card border-success" v-for="(company, index1) in skillWorking">
      <div class="card-header border-success position-relative">
        <div
          class="row g-3 align-items-center"
          v-if="company.name !== undefined"
        >
          <div class="col-md-7">
            <div class="input-group input-group-sm">
              <span class="input-group-text"
                >Nơi làm việc {{ index1 + 1 }}</span
              >
              <input type="text" class="form-control" v-model="company.name" />
            </div>
          </div>
          <div class="col-md-5">
            <div class="input-group input-group-sm">
              <span class="input-group-text">Từ</span>
              <input
                :type="company.from == '' ? 'month' : 'text'"
                class="form-control"
                v-model="company.from"
                :max="
                  new Date(company.to)
                    ? ''
                    : new Date(company.to).toISOString().slice(0, 7)
                "
                @blur="
                  () => {
                    if (company.from != '') {
                      company.from = new Date(company.from).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                        }
                      );
                    }
                  }
                "
              />
              <span class="input-group-text" v-if="company.to != 'Hiện tại'"
                >Đến</span
              >
              <input
                :type="company.to == '' ? 'month' : 'text'"
                class="form-control"
                v-if="company.to != 'Hiện tại'"
                v-model="company.to"
                :min="
                  company.from == ''
                    ? ''
                    : new Date(company.from).toISOString().slice(0, 7)
                "
                :max="new Date().toISOString().slice(0, 7)"
                @blur="
                  () => {
                    if (company.to != '' && company.to != 'Hiện tại') {
                      company.to = new Date(company.to).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                        }
                      );
                    }
                  }
                "
              />
              <div
                class="form-check form-switch m-1"
                v-if="company.to == '' || company.to == 'Hiện tại'"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="company.to"
                  true-value="Hiện tại"
                  false-value=""
                />
                <label class="form-check-label">Hiện tại</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-3 align-items-center" v-else>
          <div class="col-md-3 ms-1">
            <div class="input-group input-group-sm">
              <span class="input-group-text">Thời gian nghỉ</span>
            </div>
          </div>
          <div class="col-auto ms-1">
            <div class="input-group input-group-sm">
              <span class="input-group-text">Từ</span>
              <input
                :type="company.from == '' ? 'month' : 'text'"
                class="form-control"
                v-model="company.from"
                :max="
                  company.to == ''
                    ? ''
                    : new Date(company.to).toISOString().slice(0, 7)
                "
                @blur="
                  () => {
                    if (company.from != '') {
                      company.from = new Date(company.from).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                        }
                      );
                    }
                  }
                "
              />
              <span class="input-group-text" v-if="company.to != 'Hiện tại'"
                >Đến</span
              >
              <input
                :type="company.to == '' ? 'month' : 'text'"
                class="form-control"
                v-if="company.to != 'Hiện tại'"
                v-model="company.to"
                :min="
                  company.from == ''
                    ? ''
                    : new Date(company.from).toISOString().slice(0, 7)
                "
                :max="new Date().toISOString().slice(0, 7)"
                @blur="
                  () => {
                    if (company.to != '' && company.to != 'Hiện tại') {
                      company.to = new Date(company.to).toLocaleDateString(
                        'en-US',
                        {
                          year: 'numeric',
                          month: 'short',
                        }
                      );
                    }
                  }
                "
              />
              <div
                class="form-check form-switch m-1"
                v-if="company.to == '' || company.to == 'Hiện tại'"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="company.to"
                  true-value="Hiện tại"
                  false-value=""
                />
                <label class="form-check-label">Hiện tại</label>
              </div>
            </div>
          </div>
        </div>
        <button
          v-if="index1 != 0"
          class="btn position-absolute top-0 start-100 translate-middle"
          @click="delSkillWorking(index1)"
        >
          <i class="fas fa-times-circle text-danger fa-lg"></i>
        </button>
      </div>
      <div class="card-body text-success p-0" v-if="company.name !== undefined">
        <div class="row">
          <div class="col-md-6" v-for="(element, index2) in company.process">
            <div class="card border-success">
              <div
                class="
                  card-header
                  bg-transparent
                  border-success
                  position-relative
                "
              >
                Quá trình làm việc
                <button
                  v-if="index2 != 0"
                  class="btn position-absolute top-0 start-100 translate-middle"
                  @click="delProcess(index1, index2)"
                >
                  <i class="fas fa-times-circle text-danger fa-lg"></i>
                </button>
              </div>
              <div class="card-body text-success">
                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Từ</span>
                  <input
                    :type="element.from == '' ? 'month' : 'text'"
                    class="form-control"
                    v-model="element.from"
                    :min="
                      company.process[index2 - 1]
                        ? company.process[index2 - 1].to != ''
                          ? new Date(company.process[index2 - 1].to)
                              .toISOString()
                              .slice(0, 7)
                          : ''
                        : ''
                    "
                    :max="
                      new Date(element.to) == 'Invalid Date'
                        ? ''
                        : new Date(element.to).toISOString().slice(0, 7)
                    "
                    @blur="
                      () => {
                        if (element.from != '') {
                          element.from = new Date(
                            element.from
                          ).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                          });
                        }
                      }
                    "
                  />
                  <span class="input-group-text" v-if="element.to != 'Hiện tại'"
                    >Đến</span
                  >
                  <input
                    :type="element.to == '' ? 'month' : 'text'"
                    class="form-control"
                    v-model="element.to"
                    v-if="element.to != 'Hiện tại'"
                    :min="
                      element.from == ''
                        ? ''
                        : new Date(element.from).toISOString().slice(0, 7)
                    "
                    :max="new Date().toISOString().slice(0, 7)"
                    @blur="
                      () => {
                        if (element.to != '' && element.to != 'Hiện tại') {
                          element.to = new Date(element.to).toLocaleDateString(
                            'en-US',
                            {
                              year: 'numeric',
                              month: 'short',
                            }
                          );
                        }
                      }
                    "
                  />
                  <div
                    class="form-check form-switch m-1"
                    v-if="
                      (element.to == '' || element.to == 'Hiện tại') &&
                      company.to == 'Hiện tại'
                    "
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="element.to"
                      true-value="Hiện tại"
                      false-value=""
                    />
                    <label class="form-check-label">Hiện tại</label>
                  </div>
                </div>

                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Công việc</span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="element.work"
                  />
                </div>
                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Chuyên nghành</span>
                  <input
                    type="text"
                    class="form-select dropdown-toggle text-dark"
                    id="dropdownMenuMajor"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                    v-model="element.skill"
                  />
                  <ul
                    class="dropdown-menu overflow-auto col-auto"
                    aria-labelledby="dropdownMenuMajor"
                    :style="{ maxHeight: '300px' }"
                  >
                    <li
                      v-for="item in filteredSkill(element.skill, '')"
                      @click="element.skill = item"
                    >
                      <a class="dropdown-item">{{ item }}</a>
                    </li>
                  </ul>
                </div>
                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Chức danh công việc</span>
                  <input
                    type="text"
                    class="form-select dropdown-toggle text-dark"
                    id="dropdownMenuJobtitle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                    v-model="element.title"
                  />
                  <ul
                    class="dropdown-menu overflow-auto col-auto"
                    aria-labelledby="dropdownMenuJobtitle"
                    :style="{ maxHeight: '300px' }"
                  >
                    <li
                      v-for="item in filteredJobtitle(element.title)"
                      @click="element.title = item"
                    >
                      <a class="dropdown-item">{{ item }}</a>
                    </li>
                  </ul>
                </div>

                <div class="input-group input-group-sm mb-2">
                  <span class="input-group-text">Địa chỉ</span>
                  <input
                    type="text"
                    class="form-control"
                    v-model="element.address"
                  />
                </div>
                <div
                  class="input-group input-group-sm mb-2"
                  v-if="element.to != 'Hiện tại'"
                >
                  <span class="input-group-text">Kết quả hoàn thành</span>
                  <select class="form-select" v-model="element.result">
                    <option value="" disabled>Chọn...</option>
                    <option value="Trên mức đề ra">Trên mức đề ra</option>
                    <option value="Đạt mức đề ra">Đạt mức đề ra</option>
                    <option value="Dưới mức đề ra">Dưới mức đề ra</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 me-auto d-grid gap-2">
            <button class="btn border-success" @click="addProcess(index1)">
              <i class="fas fa-plus fa-5x"></i>
            </button>
          </div>
          <div
            class="input-group input-group-sm"
            v-if="company.to != 'Hiện tại'"
          >
            <span class="input-group-text">Nghỉ việc</span>
            <select class="form-select" v-model="company.leaving">
              <option value="" disabled>Chọn...</option>
              <option value="Nghỉ theo mong muốn">Nghỉ theo mong muốn</option>
              <option value="Nghỉ theo yêu cầu">Nghỉ theo yêu cầu</option>
              <option value="Tự nghỉ">Tự nghỉ</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 mt-1">
      <h4 class="text-danger">
        Số năm kinh nghiệm đến hiện tại:<span>
          {{ getExperience(skillWorking) }}</span
        >
      </h4>
    </div>
    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="button" @click="addSkillWorking()">
        Thêm nơi làm việc
      </button>
      <button class="btn btn-primary" type="button" @click="addBreakTime()">
        Thời gian không làm việc
      </button>
    </div>
    <h5 class="text-primary m-2">Kết quả đánh giá</h5>
    <ul class="list-group">
      <li
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
          bg-light
        "
      >
        Tiêu chí
        <input
          type="text"
          class="form-control-plaintext form-control-sm"
          value="Điểm"
          :style="{ maxWidth: '3rem' }"
          readonly
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
          <select
            class="form-select form-select-sm"
            :style="{ maxWidth: '4rem' }"
            v-model="assessment[index]"
          >
            <option v-for="i in 11" :value="i - 1">{{ i - 1 }}</option>
          </select>
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
              <input
                type="text"
                class="form-control bg-white"
                :value="employee.startyear"
                readonly
              />
              <span class="input-group-text">Đến:</span>
              <input
                type="text"
                class="form-control bg-white"
                :value="employee.endyear"
                readonly
              />
            </div>
          </div>
          <div class="card-body text-primary">
            <h5 class="card-title">{{ employee.school }}</h5>
            <p class="card-text mx-2 my-1">Cấp bậc: {{ employee.level }}</p>
            <p class="card-text mx-2 my-1">
              Chuyên nghành: {{ employee.skill }}
            </p>
            <div class="row mb-2">
              <label class="mx-2 col-sm-3 col-form-label col-form-label-sm"
                >Điểm:</label
              >
              <div class="col-sm-8">
                <input class="form-control form-control-sm" />
              </div>
            </div>
            <div class="row mb-2">
              <label class="mx-2 col-sm-3 col-form-label col-form-label-sm"
                >Xếp loại:</label
              >
              <div class="col-sm-8">
                <input class="form-control form-control-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6" v-for="(ele, index) in skillEducation">
        <div class="card border-primary mb-3">
          <div class="card-header">
            <div class="input-group input-group-sm">
              <span class="input-group-text">Từ:</span>
              <input type="month" class="form-control" v-model="ele.from" />
              <span class="input-group-text">Đến:</span>
              <input
                type="month"
                class="form-control bg-white"
                v-model="ele.to"
              />
            </div>
            <button
              class="btn position-absolute top-0 start-100 translate-middle"
              @click="delSkillEducation(index)"
            >
              <i class="fas fa-times-circle text-danger fa-lg"></i>
            </button>
          </div>
          <div class="card-body">
            <input
              type="text"
              class="form-control form-control-sm mb-2 dropdown-toggle"
              :id="'dropdownSchool' + index"
              data-bs-toggle="dropdown"
              data-bs-auto-close="inside"
              aria-expanded="false"
              v-model="ele.school"
              placeholder="Tên trường"
            />
            <ul
              class="dropdown-menu w-100 overflow-auto"
              :aria-labelledby="'dropdownSchool' + index"
              :style="{ maxHeight: '400px' }"
            >
              <li
                v-for="school in filteredSchool(ele.school)"
                @click="ele.school = school.name"
              >
                <a class="dropdown-item">{{ school.name }}</a>
              </li>
            </ul>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label col-form-label-sm"
                >Cấp bậc:</label
              >
              <div class="col-sm-8">
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  v-model="ele.level"
                  @change="ele.skill = ''"
                >
                  <option value="" disabled>Chọn cấp bậc</option>
                  <option value="Phổ thông">Phổ thông</option>
                  <option value="Sơ cấp">Sơ cấp</option>
                  <option value="Trung cấp">Trung cấp</option>
                  <option value="Cao đẳng">Cao đẳng</option>
                  <option value="Đại học">Đại học</option>
                  <option value="Chuyên gia">Chuyên gia</option>
                </select>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label col-form-label-sm"
                >Chuyên nghành:</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  class="
                    form-select form-select-sm
                    dropdown-toggle
                    text-dark
                    w-100
                  "
                  id="dropdownMenuSkill"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                  v-model="ele.skill"
                />
                <ul
                  class="dropdown-menu overflow-auto col-sm-7"
                  aria-labelledby="dropdownMenuSkill"
                  :style="{ maxHeight: '300px' }"
                >
                  <li
                    v-for="item in filteredSkill(ele.skill, ele.level)"
                    @click="ele.skill = item"
                  >
                    <a class="dropdown-item">{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label col-form-label-sm"
                >Chức danh chuyên môn:</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control form-control-sm"
                  v-model="ele.point"
                />
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label col-form-label-sm"
                >Điểm:</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control form-control-sm"
                  v-model="ele.point"
                />
              </div>
            </div>
            <div class="row mb-2">
              <label class="col-sm-4 col-form-label col-form-label-sm"
                >Xếp loại:</label
              >
              <div class="col-sm-8">
                <input
                  class="form-control form-control-sm"
                  v-model="ele.rating"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 me-auto d-grid gap-2 mb-3">
        <button class="btn border-success" @click="addSkillEducation">
          <i class="fas fa-plus fa-5x"></i>
        </button>
      </div>
    </div>
    <h4 class="text-primary mt-2 text-decoration-underline">
      Các khoá đào tạo ngắn hạn
    </h4>
    <div class="card mb-3" v-for="(ele, index) in shortTraining">
      <div class="card-body">
        <button
          class="btn position-absolute top-0 start-100 translate-middle"
          @click="delShortTraining(index)"
        >
          <i class="fas fa-times-circle text-danger fa-lg"></i>
        </button>
        <div class="row">
          <div class="col-md-4">
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Từ</label>
              <input type="month" class="form-control" v-model="ele.from" />
            </div>
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Đến</label>
              <input type="month" class="form-control" v-model="ele.to" />
            </div>
          </div>
          <div class="col-md-8">
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Chứng chỉ đại được</label>
              <input type="text" class="form-control" v-model="ele.name" />
            </div>
            <div class="input-group input-group-sm mb-3">
              <label class="input-group-text">Đơn vị tổ chức</label>
              <input type="text" class="form-control" v-model="ele.place" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="me-auto d-grid gap-2 mb-3">
      <button class="btn border-success" @click="addShortTraining()">
        <i class="fas fa-plus fa-3x"></i>
      </button>
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
              type="radio"
              v-model="skillEnglish.listening"
              :value="point"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Nói</th>
          <td v-for="point in 4">
            <input
              type="radio"
              v-model="skillEnglish.speaking"
              :value="point"
            />
          </td>
        </tr>
        <tr>
          <th scope="row">Đọc</th>
          <td v-for="point in 4">
            <input type="radio" v-model="skillEnglish.reading" :value="point" />
          </td>
        </tr>
        <tr>
          <th scope="row">Viết</th>
          <td v-for="point in 4">
            <input type="radio" v-model="skillEnglish.writing" :value="point" />
          </td>
        </tr>
      </tbody>
    </table>
    <table
      class="table table-bordered border-primary text-center"
      v-for="skill in skillLanguage"
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
            <input type="radio" v-model="skill.listening" :value="point" />
          </td>
        </tr>
        <tr>
          <th scope="row">Nói</th>
          <td v-for="point in 4">
            <input type="radio" v-model="skill.speaking" :value="point" />
          </td>
        </tr>
        <tr>
          <th scope="row">Đọc</th>
          <td v-for="point in 4">
            <input type="radio" v-model="skill.reading" :value="point" />
          </td>
        </tr>
        <tr>
          <th scope="row">Viết</th>
          <td v-for="point in 4">
            <input type="radio" v-model="skill.writing" :value="point" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="me-auto d-grid gap-2 mb-3">
      <button class="btn border-success" @click="addSkillLanguage()">
        <i class="fas fa-plus fa-3x"></i>
      </button>
    </div>

    <table class="table table-bordered border-primary text-center">
      <thead>
        <tr>
          <th colspan="8">
            <h5 class="text-primary m-1">Khả năng vi tính</h5>
          </th>
        </tr>
        <tr>
          <th scope="col">Đánh giá</th>
          <th scope="col">Word</th>
          <th scope="col">Excel</th>
          <th scope="col">Phần mền khác</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Giỏi</th>
          <td><input type="radio" v-model="skillComputer.word" value="1" /></td>
          <td>
            <input type="radio" v-model="skillComputer.excel" value="1" />
          </td>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="skillComputer.other[0]"
          />
        </tr>
        <tr>
          <th scope="row">Tốt</th>
          <td><input type="radio" v-model="skillComputer.word" value="2" /></td>
          <td>
            <input type="radio" v-model="skillComputer.excel" value="2" />
          </td>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="skillComputer.other[1]"
          />
        </tr>
        <tr>
          <th scope="row">Bình thường</th>
          <td><input type="radio" v-model="skillComputer.word" value="3" /></td>
          <td>
            <input type="radio" v-model="skillComputer.excel" value="3" />
          </td>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="skillComputer.other[2]"
          />
        </tr>
        <tr>
          <th scope="row">Cơ bản</th>
          <td><input type="radio" v-model="skillComputer.word" value="4" /></td>
          <td>
            <input type="radio" v-model="skillComputer.excel" value="4" />
          </td>
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="skillComputer.other[3]"
          />
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered border-primary text-center">
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
        <tr v-for="skill in skillOther">
          <th scope="row">
            <input
              type="text"
              class="form-control form-control-sm"
              v-model="skill.name"
            />
          </th>
          <td v-for="point in 4">
            <input type="radio" v-model="skill.point" :value="point" />
          </td>
        </tr>
        <tr>
          <th colspan="5">
            <div class="me-auto d-grid gap-2">
              <button class="btn border-success p-1" @click="addSkillOther()">
                <i class="fas fa-plus fa-2x"></i>
              </button>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <div class="d-grid gap-2 col-6 mx-auto my-5">
      <button type="submit" class="btn btn-primary" @click="handleSubmit">
        Submit
      </button>
    </div>
  </div>
</template>
<script>
const { BASE_URL } = require("../../utils/config");
export default {
  data() {
    return {
      employee: "",
      searchSkill: "",
      skillWorking: [
        {
          name: "",
          from: "",
          to: "",
          leaving: "",
          process: [
            {
              from: "",
              to: "",
              work: "",
              title: "",
              skill: "",
              address: "",
              result: "",
            },
          ],
        },
      ],
      skillEducation: [
        {
          from: "",
          to: "",
          school: "",
          level: "",

          skill: "",
          point: "",
          rating: "",
        },
      ],
      shortTraining: [
        {
          from: "",
          to: "",
          name: "",
          place: "",
        },
      ],
      skillEnglish: {
        listening: 0,
        reading: 0,
        writing: 0,
        speaking: 0,
      },
      skillLanguage: [
        {
          name: "",
          listening: 0,
          reading: 0,
          writing: 0,
          speaking: 0,
        },
      ],
      skillComputer: {
        word: 0,
        excel: 0,
        other: ["", "", "", ""],
      },
      skillOther: [
        {
          name: "",
          point: 0,
        },
      ],
      assessment: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      majors: [],
      schools: [],
      jobtitles: [],
      criteria: "",
    };
  },
  computed: {
    filterSkill() {
      var skills = new Set([]);
      this.majors.forEach((element) => {
        element.skills.forEach((skill) => {
          if (
            skill.toLowerCase().indexOf(this.searchSkill.toLowerCase()) != -1 &&
            this.searchSkill != ""
          ) {
            skills.add(skill);
          }
        });
      });
      return skills;
    },
  },
  methods: {
    handleSubmit(e) {
      if (this.checkSkillWorking()) {
        Swal.fire({
          icon: "info",
          title: "Cập nhật thất bại",
          text: "Nhập đủ thông tin kinh nghiệm làm việc",
          confirmButtonColor: "var(--primary)",
          confirmButtonText: "Nhập lại",
        });
        return;
      }
      if (this.checkSkillEducation()) {
        Swal.fire({
          icon: "info",
          title: "Cập nhật thất bại",
          text: "Nhập đủ thông tin quá trình học tập",
          confirmButtonColor: "var(--primary)",
          confirmButtonText: "Nhập lại",
        });
        return;
      }
      this.checkSkillOther();
      this.$http
        .post(`${BASE_URL}/employee/createCV`, {
          id: this.employee._id,
          skillWorking: this.skillWorking,
          skillEducation: this.skillEducation,
          shortTraining: this.shortTraining,
          skillEnglish: this.skillEnglish,
          skillLanguage: this.skillLanguage,
          skillComputer: this.skillComputer,
          skillOther: this.skillOther,
          assessment: this.assessment,
        })
        .then((response) => {
          if (response.data) {
            this.$router.push("/employee");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    delProcess(index1, index2) {
      if (this.skillWorking[index1].process.length > 1) {
        this.skillWorking[index1].process.splice(index2, 1);
      }
    },

    addProcess(index) {
      let item = this.skillWorking[index].process;

      item = item[item.length - 1];
      if (item.to == "Hiện tại") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Quá trình làm việc đã tới thời điểm hiện tại",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      if (
        item.from == "" ||
        item.to == "" ||
        item.work == "" ||
        item.title == "" ||
        item.address == "" ||
        item.result == ""
      ) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Nhập đủ thông tin quá trình làm việc trước đó",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      this.skillWorking[index].process.push({
        from: item.to,
        to: "",
        work: "",
        title: "",
        skill: this.employee.skill,
        address: "",
        result: "",
      });
    },
    checkSkillWorking() {
      var error = false;
      this.skillWorking.forEach((company, index1) => {
        if (company.name != "") {
          if (company.from == "") error = true;
          else if (company.to == "") error = true;
          company.process.forEach((ele) => {
            if (ele.from == "") error = true;
            else if (ele.to == "") error = true;
            else if (ele.title == "") error = true;
            else if (ele.work == "") error = true;
            else if (ele.skill == "") error = true;
            else if (ele.address == "") error = true;
          });
        } else {
          this.skillWorking.splice(index1, 1);
        }
      });
      return error;
    },
    delSkillWorking(index) {
      this.skillWorking.splice(index, 1);
    },
    addSkillWorking() {
      if (this.skillWorking.length == 0) {
        this.skillWorking.push({
          name: "",
          from: "",
          to: "",
          leaving: "",
          process: [
            {
              from: "",
              to: "",
              work: "",
              title: "",
              skill: this.employee.skill,
              address: "",
              result: "",
            },
          ],
        });
      } else {
        let item = this.skillWorking[this.skillWorking.length - 1];
        if (item.to == "Hiện tại") {
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: "Thời gian làm việc đã tới thời điểm hiện tại",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        if (item.from == "" || item.to == "" || item.name == "") {
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: "Nhập đủ thông tin nơi làm việc trước đó",
            showConfirmButton: false,
            timer: 1500,
          });
          return;
        }
        this.skillWorking.push({
          name: "",
          from: item.to,
          to: "",
          leaving: "",
          process: [
            {
              from: "",
              to: "",
              work: "",
              title: "",
              skill: this.employee.skill,
              address: "",
              result: "",
            },
          ],
        });
      }
    },
    addBreakTime() {
      this.skillWorking.push({
        from: "",
        to: "",
      });
    },
    delSkillEducation(index) {
      this.skillEducation.splice(index, 1);
    },
    addSkillEducation() {
      this.skillEducation.push({
        from: "",
        to: "",
        school: "",
        level: "",
        skill: "",
        point: "",
        rating: "",
      });
    },
    checkSkillEducation() {
      var error = false;
      this.skillEducation.forEach((edu, idx) => {
        if (edu.school != "") {
          if (edu.from == "") error = true;
          if (edu.to == "") error = true;
          if (edu.level == "") error = true;
          if (edu.skill == "") error = true;
        } else {
          this.skillEducation.splice(idx, 1);
        }
      });
      return error;
    },
    delShortTraining(index) {
      this.shortTraining.splice(index, 1);
    },
    addShortTraining() {
      this.shortTraining.push({
        from: "",
        to: "",
        name: "",
        place: "",
      });
    },
    addSkillLanguage() {
      this.skillLanguage.push({
        name: "",
        listening: 0,
        reading: 0,
        writing: 0,
        speaking: 0,
      });
    },
    addSkillOther() {
      this.skillOther.push({
        name: "",
        point: 0,
      });
    },
    checkSkillOther() {
      var index = 0;
      while (index < this.skillOther.length) {
        if (this.skillOther.name != "") {
          index++;
        } else {
          this.skillOther.splice(index, 1);
        }
      }
    },
    filteredSchool(key) {
      return this.schools.filter((school) => {
        if (
          school.name.toLowerCase().indexOf(key.toLowerCase()) != -1 &&
          key != ""
        ) {
          return true;
        }
      });
    },
    filteredSkill(key, level) {
      let result = new Set();
      this.majors.forEach((major) => {
        if (major.level == level || level == "") {
          result = new Set([
            ...result,
            ...major.skills.filter((skill) => {
              if (
                skill.toLowerCase().indexOf(key.toLowerCase()) != -1 &&
                key != ""
              ) {
                return true;
              }
              return false;
            }),
          ]);
        }
      });
      return result;
    },
    filteredJobtitle(key) {
      return this.jobtitles
        .filter((jobtitle) => {
          if (
            jobtitle.name.toLowerCase().indexOf(key.toLowerCase()) != -1 &&
            key != ""
          ) {
            return true;
          }
        })
        .map((el) => el.name);
    },
    getExperience(skillWorking) {
      var sum = 0;
      if (skillWorking.length > 0) {
        skillWorking.filter(function (company) {
          let timeTo =
            company.to == "Hiện tại"
              ? new Date().getTime()
              : new Date(company.to).getTime();
          let timeFrom = new Date(company.from).getTime();
          if (company.process) {
            company.process.forEach((item) => {
              let timeTo =
                item.to == "Hiện tại"
                  ? new Date().getTime()
                  : new Date(item.to).getTime();
              let timeFrom = new Date(item.from).getTime();
              sum += timeTo - timeFrom;
            });
          }
        });
      }
      let result = "";
      let numberYear = Math.floor(sum / 31536000000);
      if (numberYear) result += `${numberYear} năm`;
      let numberMonth = Math.round((sum % 31536000000) / 2628000000);
      if (numberMonth) result += ` ${numberMonth} tháng`;
      return result;
    },
  },
  created() {
    this.employee = JSON.parse(localStorage.getItem("employee"));
    this.employee.birthdate = this.employee.birthdate.split("T")[0];
    this.skillWorking[0].process[0].skill = this.employee.skill;
    this.$http.get(`${BASE_URL}/criteria/getall`).then((res) => {
      this.criteria = res.data;
    });

    this.$http
      .get(`${BASE_URL}/major/list`)
      .then((response) => {
        this.majors = response.data;
      })
      .catch(function (error) {
        console.error(error.response);
      });

    this.$http
      .get(`${BASE_URL}/school/getall`)
      .then((response) => {
        this.schools = response.data;
      })
      .catch(function (error) {
        console.error(error.response);
      });

    this.$http
      .get(`${BASE_URL}/jobtitle/getall`)
      .then((response) => {
        this.jobtitles = response.data;
      })
      .catch(function (error) {
        console.error(error.response);
      });
  },
};
</script>
<style scoped>
</style>
