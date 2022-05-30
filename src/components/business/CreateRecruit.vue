<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Tạo tin tuyển dụng</h4>
                        </div>
                        <div class="card-body">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="form-group">
                                    <label for="">Tên công việc</label>
                                    <input type="text" class="form-control" name="name" v-model="name" placeholder="Nhập tên công việc">
                                </div>
                                <div class="form-group">
                                    <label for="">Mô tả công việc</label>
                                    <textarea name="description" id="description" cols="30" rows="10" class="form-control" v-model="description"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="">Số lượng</label>
                                    <input type="number" class="form-control" name="quantity" v-model="quantity" placeholder="Nhập số lượng">
                                </div>
                                <div class="form-group">
                                    <label for="">Ngày hết hạn</label>
                                    <input type="date" class="form-control" name="expired_date" v-model="expired_date" placeholder="Nhập ngày hết hạn">
                                </div>
                                <div class="form-group">
                                    <label for="">Ngành nghề</label>
                                    <!-- <select name="category_id" id="category_id" class="form-control" v-model="category_id">
                                        <option value="">Chọn ngành nghề</option>
                                        <option v-for="(item, index) in categories" :value="item.id">{{item.name}}</option>
                                    </select> -->
                                </div>
                                <div class="form-group">
                                    <label for="">Địa điểm làm việc</label>
                                    <!-- <select name="location_id" id="location_id" class="form-control" v-model="location_id">
                                        <option value="">Chọn địa điểm làm việc</option>
                                        <option v-for="(item, index) in locations" :value="item.id">{{item.name}}</option>
                                    </select> -->
                                </div>
                                <div class="form-group">
                                    <label for="">Ảnh đại diện</label>
                                    <!-- <input type="file" class="form-control" name="image" v-model="image" placeholder="Nhập ảnh đại diện"> -->
                                </div>
                                <div class="form-group">
                                    <label for="">Ngày tuyển dụng</label>
                                    <input type="date" class="form-control" name="recruit_date" v-model="recruit_date" placeholder="Nhập ngày tuyển dụng">
                                </div>
                                <div class="form-group">
                                    <label for="">Ngày hết hạn tuyển dụng</label>
                                    <input type="date" class="form-control" name="expired_recruit_date" v-model="expired_recruit_date" placeholder="Nhập ngày hết hạn tuyển dụng">
                                </div>
                                <div class="form-group">
                                    <label for="">Mức lương</label>
                                    <input type="number" class="form-control" name="salary" v-model="salary" placeholder="Nhập mức lương">
                                </div>
                                <div class="form-group">
                                    <label for="">Yêu cầu khác</label>
                                    <textarea name="requirement" id="requirement" cols="30" rows="10" class="form-control" v-model="requirement"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="">Yêu cầu công việc</label>
                                    <textarea name="job_requirement" id="job_requirement" cols="30" rows="10" class="form-control" v-model="job_requirement"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="">Yêu cầu khác</label>
                                    <textarea name="other_requirement" id="other_requirement" cols="30" rows="10" class="form-control" v-model="other_requirement"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="">Trạng thái</label>
                                    <select name="status" id="status" class="form-control" v-model="status">
                                        <option value="">Chọn trạng thái</option>
                                        <option value="1">Đang tuyển</option>
                                        <option value="2">Đã hết hạn</option>
                                        <option value="3">Đã hết hạn</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">Người tuyển</label>
                                    <input type="text" class="form-control" name="recruiter" v-model="recruiter" placeholder="Nhập người tuyển">
                                </div>
                                <div class="form-group">
                                    <label for="">Người liên hệ</label>
                                    <input type="text" class="form-control" name="contact" v-model="contact" placeholder="Nhập người liên hệ">
                                </div>
                                <div class="form-group">
                                    <label for="">Số điện thoại</label>
                                    <input type="text" class="form-control" name="phone" v-model="phone" placeholder="Nhập số điện thoại">
                                </div>
                                <div class="form-group">
                                    <label for="">Email</label>
                                    <input type="text" class="form-control" name="email" v-model="email" placeholder="Nhập email">
                                </div>
                                <div class="form-group">
                                    <label for="">Website</label>
                                    <input type="text" class="form-control" name="website" v-model="website" placeholder="Nhập website">
                                </div>
                                <div class="form-group">
                                    <label for="">Địa chỉ</label>
                                    <input type="text" class="form-control" name="address" v-model="address" placeholder="Nhập địa chỉ">
                                </div>
                                <div class="form-group">
                                    <label for="">Nội dung</label>
                                    <textarea name="content" id="content" cols="30" rows="10" class="form-control" v-model="content"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="">Ngày tạo</label>
                                    <input type="date" class="form-control" name="created_at" v-model="created_at" placeholder="Nhập ngày tạo">
                                </div>
                                <div class="form-group">
                                    <label for="">Ngày cập nhật</label>
                                    <input type="date" class="form-control" name="updated_at" v-model="updated_at" placeholder="Nhập ngày cập nhật">
                                </div>
                                <div class="form-group">
                                    <label for="">Ngày xóa</label>
                                    <input type="date" class="form-control" name="deleted_at" v-model="deleted_at" placeholder="Nhập ngày xóa">
                                </div>
                                <div class="form-group">
                                    <label for="">Mã nhà tuyển dụng</label>
                                    <input type="text" class="form-control" name="company_id" v-model="company_id" placeholder="Nhập mã nhà tuyển dụng">
                                </div>
                                <div class="form-group">
                                    <label for="">Mã ngành nghề</label>
                                    <input type="text" class="form-control" name="industry_id" v-model="industry_id" placeholder="Nhập mã ngành nghề">
                                </div>
                                <div class="form-group">
                                    <label for="">Mã tỉnh thành</label>
                                    <input type="text" class="form-control" name="city_id" v-model="city_id" placeholder="Nhập mã tỉnh thành">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                            <button type="button" class="btn btn-primary" @click="updateJob()">Cập nhật</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>