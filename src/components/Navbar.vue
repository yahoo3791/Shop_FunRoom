<template>
  <div class="header overflow-hidden">
    <div :class="{ 'navbarOpen': isOpen}"
      class="navbar_overlay w-100 py-2 position-fixed top-0 start-0 backdrop-blur text-primary"
      style="height: 400px; z-index: 20;backdrop-filter: blur(6px)">
      <div class="container-fulid px-3">
        <div class="navbar_sm_logo d-flex justify-content-between">
          <a href="#">
            <div class="logo"></div>
          </a>
          <a href="" class="hide" @click.prevent="hide()">
            <span></span>
            <span></span>
          </a>
        </div>
        <ul class="text-center mt-2 ab" style="padding-left:0">
          <li class="pb-3"><a @click="hide()" class="text-primary" href="#/room/single">Single Room</a></li>
          <li class="pb-3"><a @click="hide()" class="text-primary" href="#/room/deluxeSingle">Deluxe Single Room</a>
          </li>
          <li class="pb-3"><a @click="hide()" class="text-primary" href="#/room/double">Double Room</a></li>
          <li class="pb-3"><a @click="hide()" class="text-primary" href="#/room/deluxeDouble/commentReview">Deluxe
              Double Room</a>
          </li>
          <li class="pb-3"><a @click="hide()" class="text-primary" href="#/room/twin">Twin Room</a></li>
          <li class="pb-3"><a @click="hide()" class="text-primary" href="#/room/deluxeTwin">Deluxe Twin Room</a></li>
        </ul>
      </div>
    </div>
    <div class="container-fluid px-3 py-2 position-fixed top-0 z-3 backdrop-blur">
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <router-link to="/" class="logo"></router-link>
          <ul class="navbar text-center fs-6 d-none d-lg-flex">
            <li class="pe-5">
              <router-link to="/room/single" class="text-primary">
                <p class="navbar_p">Single<br>Room</p>
                <span class="navbar_span">單人房</span>
              </router-link>
            </li>
            <li class="pe-5">
              <router-link to="/room/deluxesingle" class="text-primary">
                <p class="navbar_p">Deluxe Single<br>Room</p>
                <span class="navbar_span">豪華單人房</span>
              </router-link>
            </li>
            <li class="pe-5">
              <router-link to="/room/double" class="text-primary">
                <p class="navbar_p">Double<br>Room</p>
                <span class="navbar_span">雙人房</span>
              </router-link>
            </li>
            <li class="pe-5">
              <router-link to="/room/deluxedouble/commentReview" class="text-primary">
                <p class="navbar_p">Deluxe Double<br>Room</p>
                <span class="navbar_span">豪華雙人房</span>
              </router-link>
            </li>
            <li class="pe-5">
              <router-link to="/room/twin" class="text-primary">
                <p class="navbar_p">Twin<br>Room</p>
                <span class="navbar_span">雙床房</span>
              </router-link>
            </li>
            <li>
              <router-link to="/room/deluxetwin" class="text-primary">
                <p class="navbar_p">Deluxe Twin<br>Room</p>
                <span class="navbar_span">豪華雙床房</span>
              </router-link>
            </li>
          </ul>
          <div class="navbar_sm d-lg-none">
            <a href="" class="toggle d-block" @click.prevent="open()">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    hide() {
      this.isOpen = false;
    }
  },
  mounted (){

  },
}
</script>
