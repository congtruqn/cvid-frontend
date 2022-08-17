<template>
<div class="container">
    <div class="card mt-4">
        <div class="card-header text-center">
            Tuyển dụng
        </div>
        <div class="card-body">
            <form class="row g-3">
                <div class="col-md-5">
                    <label for="inputState" class="form-label">Vị trí tuyển dụng</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-10 col-md-5">
                    <label for="inputSchool" class="form-label">Trường</label>
                    <select id="inputSchool" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="col-2">
                    <label for="inputPoint" class="form-label">Điểm CV</label>
                    <input type="text" class="form-control" id="inputPoint" placeholder="">
                </div>
                <!-- <div class="col-12">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity">
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                </div> -->
                <div class="col-12 text-center">
                    <button type="submit" class="btn btn-lg btn-primary">Đăng tuyển</button>
                </div>
            </form>
    
        </div>
        <hr>
        <div class="card-body">
            2 days ago
        </div>
    </div>
</div>
</template>