<template>
  <div class="bg-success" style="height:100vh">
    <navbar></navbar>
    <div class="container" style="margin-top:100px;">
      <div class="row">
        <div class="col-10 mx-auto pb-2">
          <h3 class="fs-5">確認訂房資訊</h3>
        </div>
        <div class="col-10 mx-auto bg-white px-3 py-3 text-warning">
          <div class="check_room text-dark">
            <h5 class="fs-6">房型</h5>
            <p class="fw-bold">Deluxe Single Room (豪華單人房)</p>
          </div>
          <div class="check_name">
            <h5 class="fs-6 fw-normal">預訂人</h5>
            <p>你的名字</p>
          </div>
          <div class="check_phone">
            <h5 class="fs-6 fw-normal">聯絡電話</h5>
            <p>0912323123</p>
          </div>
          <div class="check_email">
            <h5 class="fs-6 fw-normal">E-mail</h5>
            <p>12321@yahoo.com.tw</p>
          </div>
          <div class="check_date">
            <h5 class="fs-6 fw-normal">預定日期</h5>
            <p class="fw-bold text-dark">2021/05/22 ~ 2021/05/24</p>
          </div>
        </div>
      </div>
      <div class="row fixed-bottom px-5">
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
  methods:{
    backCheck() {
      this.$router.push('/checkout/reservematerial');
    },
    okCheckout() {
      // 跳modal
    }
  }
}
</script>