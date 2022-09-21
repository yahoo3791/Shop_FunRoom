<template>
  <div class="bg-success">
    <navbar></navbar>
    <div class="container" style="margin-top:100px;">
      <div class="row">
        <div class="col-10 mx-auto bg-white px-3 py-3">
          <h3 class="fs-5">訂房資訊</h3>
          <form action="">
            <div class="">
              <label for="room" class="d-block text-warning">房型</label>
              <div class="SelectRoom bg-dark w-100 text-white mb-2 py-1 px-2">選擇的房名</div>
            </div>
            <div class="">
              <label class="d-block text-warning" for="">姓名</label>
              <input class="d-block w-100 bg-success border-0 mb-2 py-1" type="text">
            </div>
            <div class="">
              <label class="d-block text-warning" for="">聯絡電話</label>
              <input class="d-block w-100 bg-success border-0 mb-2 py-1" type="text">
            </div>
            <div class="">
              <label class="d-block text-warning" for="">E-Mail</label>
              <input class="d-block w-100 bg-success border-0 mb-2 py-1" type="text">
            </div>
            <div class="checkdate d-flex w-100">
              <div class="checkIn w-75">
                <h3 class="fs-6 text-warning">入住時間</h3>
                <select name="" id="" class="bg-success border-0 w-100 pb-2">
                  <option value="">date</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div class="checkOut w-75 ms-2">
                <h3 class="fs-6 text-warning">退房時間</h3>
                <select name="" id="" class="bg-success border-0 w-100 pb-2">
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
          <h3 class="fs-6 w-25">付款方式</h3>
          <div class="payment w-75">
            <div class="primaryBtn d-block px-2 py-2 mb-2">信用卡<span style="color:yellow">(享9折優惠)</span></div>
            <div class="primaryBtn d-block py-1 bg-white text-dark" style="border:1px solid black;">入住付款</div>
          </div>
        </div>
      </div>
      <div class="row mt-3 mb-4">
        <div class="col-10 mx-auto bg-white px-3 py-3">
          <h3 class="fs-6">付款資訊</h3>
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
        <div class="col-12 pb-5">
          <div class="primaryBtn py-2" @click="checkRoom()">
            預訂房間
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    navbar
  },
  methods: {
    checkRoom(){
      this.$router.push('/checkout/checkmaterial');
    }
  }
}
</script>