<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0 rounded-0" style="background:#F5F5F5;">
        <div class="modal-body position-relative">
          <div class="model-btn position-absolute top-0 bg-white" style="right:-50px">
            <button style="opacity:1;width:2em;height: 2em;" type="button" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-10 mx-auto pb-2">
                <h3 class="fs-3">確認訂房資訊</h3>
              </div>
              <div class="col-10 mx-auto bg-white mb-3 px-3 py-3 pt-5  text-warning d-flex">
                <div class="col-3">
                  <h6 class="fs-6 pb-3 modal_content_title fw-bold">房型</h6>
                  <h6 class="fs-6 fw-normal pb-3">預訂人</h6>
                  <h6 class="fs-6 fw-normal pb-3">聯絡電話</h6>
                  <h6 class="fs-6 fw-normal pb-3">E-mail</h6>
                  <h6 class="fs-6 fw-normal pb-3">預定日期</h6>
                </div>
                <div class="col-9">
                  <h6 class="pb-3 modal_content_title fw-bold">Deluxe Single Room (豪華單人房)</h6>
                  <h6 class="pb-3">你的名字</h6>
                  <h6 class="pb-3">0912323123</h6>
                  <h6 class="pb-3">12321@yahoo.com.tw</h6>
                  <h6 class="fw-bold text-dark pb-3">2021/05/22 ~ 2021/05/24</h6>
                </div>
                <!-- <div class="check_room text-dark d-flex align-items-center">
                  <h5 class="fs-6 pe-3">房型</h5>
                  <p class="fw-bold">Deluxe Single Room (豪華單人房)</p>
                </div>
                <div class="check_name d-flex align-items-center">
                  <h5 class="fs-6 fw-normal pe-3">預訂人</h5>
                  <p>你的名字</p>
                </div>
                <div class="check_phone d-flex align-items-center">
                  <h5 class="fs-6 fw-normal pe-3">聯絡電話</h5>
                  <p>0912323123</p>
                </div>
                <div class="check_email d-flex align-items-center">
                  <h5 class="fs-6 fw-normal pe-3">E-mail</h5>
                  <p>12321@yahoo.com.tw</p>
                </div>
                <div class="check_date d-flex align-items-center">
                  <h5 class="fs-6 fw-normal pe-3">預定日期</h5>
                  <p class="fw-bold text-dark">2021/05/22 ~ 2021/05/24</p>
                </div> -->
              </div>
            </div>
            <div class="row px-5">
              <div class="col-12 d-flex justify-content-between align-items-center">
                <h3 class="fs-6">小計</h3>
                <div class="">
                  <p>平日<span class="ps-1">0夜</span></p>
                  <p>假日<span class="ps-1">2夜</span></p>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-between align-items-center">
                <h3 class="fs-6">消費金額</h3>
                <p class="d-block fs-2 fw-bold">$5,400</p>
              </div>
              <div class="col-6">
                <div class="ReviseBtn bg-white py-2 text-center" style="border:1px solid black" @click="backCheck()">
                  修改資料
                </div>
              </div>
              <div class="col-6">
                <div class="SureBtn bg-dark text-white py-2 text-center">
                  確認預定
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {},
    }
  },
  methods:{
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  }
}

</script>