<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content rounded-0 border-0">
        <div class="modal-body position-relative bg-success">
          <div class="modal-btn position-absolute top-0 bg-white" style="right:-50px">
            <button type="button" class="btn-close" style="opacity:1;width:2em; height:2em;" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="container mt-2 modalBody-font">
            <div class="row">
              <div class="col-10 mx-auto bg-white px-3 py-3">
                <h3 class="fs-5 modal_title">訂房資訊</h3>
                <form action="">
                  <div class="">
                    <label for="room" class="d-block modal_content_title">房型</label>
                    <div class="SelectRoom bg-dark w-100 text-white mb-2 py-3 px-2">選擇的房名</div>
                  </div>
                  <div class="d-flex">
                    <div class="d-block" style="width:48%">
                      <label class="d-block text-warning" for="">姓名</label>
                      <input class="d-block w-100 bg-success border-0 mb-2 py-2" type="text">
                    </div>
                    <div class="d-block ms-auto" style="width:48%">
                      <label class="d-block text-warning" for="">聯絡電話</label>
                      <input class="d-block w-100 bg-success border-0 mb-2 py-2" type="text">
                    </div>
                  </div>
                  <div class="">
                    <label class="d-block text-warning" for="">E-Mail</label>
                    <input class="d-block w-100 bg-success border-0 mb-2 py-2" type="text">
                  </div>
                  <div class="checkdate d-flex w-100">
                    <div class="checkIn w-75">
                      <h3 class="fs-6 text-warning">入住時間</h3>
                      <select name="" id="" class="bg-success border-0 w-100 py-2">
                        <option value="">date</option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                    <div class="checkOut w-75 ms-2">
                      <h3 class="fs-6 text-warning">退房時間</h3>
                      <select name="" id="" class="bg-success border-0 w-100 py-2">
                        <option value="">date</option>
                        <option value=""></option>
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-10 mx-auto bg-white px-3 py-3 d-flex">
                <h3 class="fs-6 w-25 modal_title">付款方式</h3>
                <div class="payment w-75 d-flex">
                  <div class="primaryBtn d-block px-2 py-2 mb-2 me-3" style="height:40px;">信用卡<span
                      style="color:yellow">(享9折優惠)</span></div>
                  <div class="primaryBtn d-block py-1 bg-white text-dark" style="border:1px solid black;height: 40px;">
                    入住付款</div>
                </div>
              </div>
            </div>
            <div class="row mt-3 mb-4">
              <div class="col-10 mx-auto bg-white px-3 py-3">
                <h3 class="fs-6 modal_title">付款資訊</h3>
              </div>
            </div>
            <div class="row">
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
              <div class="col-12">
                <div class="primaryBtn py-2">
                  預訂房間
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
      modal : {},
    }
  },
  components:{
  },
  methods: {
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