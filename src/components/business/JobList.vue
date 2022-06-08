<template>
    <div class="container">
        <div class="row g-4 mt-2">
          <a href="job-detail/213244" v-for="index in 3" class="col-lg-6">
            <div class="p-3 active job-item">
                <div class="d-flex align-items-center">
                    <img class="flex-shrink-0 img-fluid border rounded" src="@/assets/images/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                    <div class="text-start ps-4">
                        <h5 class="mb-3">Software Engineer
                            <button type="button" class="btn btn-primary btn-sm position-relative ms-2 disabled float-end">
                                New
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    5
                                <span class="visually-hidden">unread messages</span>
                            </span>
                          </button>
                        </h5>
                        <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>Quận 9, TPHCM</span>
                        <span class="text-truncate me-3"><i class="far fa-money-bill-alt text-primary me-2"></i>Trên 10 triệu</span>
                        <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                </div>
            </div>
          </a>
        </div>
    </div>
    <!-- <div class="container">
        <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="job-item p-4 mb-4">
                    <div class="row g-4">
                        <div class="col-sm-12 col-md-8 d-flex align-items-center">
                            <img class="flex-shrink-0 img-fluid border rounded" src="@/assets/images/com-logo-1.jpg" alt="" style="width: 80px; height: 80px;">
                            <div class="text-start ps-4">
                                <h5 class="mb-3">Software Engineer</h5>
                                <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
                                <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span>
                                <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>$123 - $456</span>
                                
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                                <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                <a class="btn btn-primary" href="">Apply Now</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>