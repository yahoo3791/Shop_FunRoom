<template>
  <navbar></navbar>
  <div class="carouse position-relative top-0 start-0 w-100 carouse_shadow">
    <div
      id="carouselExampleDark"
      style="height: 95vh"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img
            src="@/assets/pic/single01.png"
            style="object-fit: cover; height: 95vh"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="content position-absolute start-0 top-50 z-3 translate-middle-y ms-5"
            style="background: rgba(255, 255, 255, 0.62)"
          >
            <div class="content_item px-3 py-4 text-start text-parimary">
              <p class="content_num text-white">01</p>
              <h1 class="content_title">Single Room</h1>
              <span class="content_span text-secondary"
                >潔淨白色極簡主義，恣意享受舒適 與自在，身心靈極致美好的享受</span
              >
              <div
                class="roomOrder mt-3 d-block d-md-flex justify-content-between align-items-center"
              >
                <h2 class="fs-4 roomOrder_h2">$3,350 <span class="fs-6">(假日$3,500)</span></h2>
                <router-link class="d-inline-block bg-dark text-white px-2 py-2" to="/room/single">
                  線上訂房
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="@/assets/pic/deluxeSingle01.png"
            style="object-fit: cover; height: 95vh"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="content position-absolute start-0 top-50 z-3 translate-middle-y ms-5"
            style="background: rgba(255, 255, 255, 0.62)"
          >
            <div class="content_item px-3 py-4 text-start text-parimary">
              <p class="content_num text-white">02</p>
              <h1 class="content_title">Deluxe Single Room</h1>
              <span class="content_span text-secondary"
                >潔淨白色極簡主義，恣意享受舒適 與自在，身心靈極致美好的享受</span
              >
              <div
                class="roomOrder mt-3 d-block d-md-flex justify-content-between align-items-center"
              >
                <h2 class="fs-4 roomOrder_h2">$3,350 <span class="fs-6">(假日$3,500)</span></h2>
                <router-link
                  class="d-inline-block bg-dark text-white px-2 py-2"
                  to="/room/deluxeSingle"
                >
                  線上訂房
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="@/assets/pic/double01.png"
            style="object-fit: cover; height: 95vh"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="content position-absolute start-0 top-50 z-3 translate-middle-y ms-5"
            style="background: rgba(255, 255, 255, 0.62)"
          >
            <div class="content_item px-3 py-4 text-start text-parimary">
              <p class="content_num text-white">03</p>
              <h1 class="content_title">Double Room</h1>
              <span class="content_span text-secondary"
                >潔淨白色極簡主義，恣意享受舒適 與自在，身心靈極致美好的享受</span
              >
              <div
                class="roomOrder mt-3 d-block d-md-flex justify-content-between align-items-center"
              >
                <h2 class="fs-4 roomOrder_h2">$3,350 <span class="fs-6">(假日$3,500)</span></h2>
                <router-link class="d-inline-block bg-dark text-white px-2 py-2" to="/room/double">
                  線上訂房
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="@/assets/pic/deluxeDouble01.png"
            style="object-fit: cover; height: 95vh"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="content position-absolute start-0 top-50 z-3 translate-middle-y ms-5"
            style="background: rgba(255, 255, 255, 0.62)"
          >
            <div class="content_item px-3 py-4 text-start text-parimary">
              <p class="content_num text-white">04</p>
              <h1 class="content_title">Deluxe Double Room</h1>
              <span class="content_span text-secondary"
                >潔淨白色極簡主義，恣意享受舒適 與自在，身心靈極致美好的享受</span
              >
              <div
                class="roomOrder mt-3 d-block d-md-flex justify-content-between align-items-center"
              >
                <h2 class="fs-4 roomOrder_h2">$3,350 <span class="fs-6">(假日$3,500)</span></h2>
                <router-link
                  class="d-inline-block bg-dark text-white px-2 py-2"
                  to="/room/deluxeDouble/commentReview"
                >
                  線上訂房
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="@/assets/pic/twin01.png"
            style="object-fit: cover; height: 95vh"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="content position-absolute start-0 top-50 z-3 translate-middle-y ms-5"
            style="background: rgba(255, 255, 255, 0.62)"
          >
            <div class="content_item px-3 py-4 text-start text-parimary">
              <p class="content_num text-white">05</p>
              <h1 class="content_title">Twin Room</h1>
              <span class="content_span text-secondary"
                >潔淨白色極簡主義，恣意享受舒適 與自在，身心靈極致美好的享受</span
              >
              <div
                class="roomOrder mt-3 d-block d-md-flex justify-content-between align-items-center"
              >
                <h2 class="fs-4 roomOrder_h2">$3,350 <span class="fs-6">(假日$3,500)</span></h2>
                <router-link class="d-inline-block bg-dark text-white px-2 py-2" to="/room/twin">
                  線上訂房
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="@/assets/pic/deluxeTwin01.png"
            style="object-fit: cover; height: 95vh"
            class="d-block w-100"
            alt="..."
          />
          <div
            class="content position-absolute start-0 top-50 z-3 translate-middle-y ms-5"
            style="background: rgba(255, 255, 255, 0.62)"
          >
            <div class="content_item px-3 py-4 text-start text-parimary">
              <p class="content_num text-white">06</p>
              <h1 class="content_title">deluxe Twin Room</h1>
              <span class="content_span text-secondary"
                >潔淨白色極簡主義，恣意享受舒適 與自在，身心靈極致美好的享受</span
              >
              <div
                class="roomOrder mt-3 d-block d-md-flex justify-content-between align-items-center"
              >
                <h2 class="fs-4 roomOrder_h2">$3,350 <span class="fs-6">(假日$3,500)</span></h2>
                <router-link
                  class="d-inline-block bg-dark text-white px-2 py-2"
                  to="/room/deluxeTwin"
                >
                  線上訂房
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item d-none position-absolute bottom-0 start-0 px-3 py-3">
        <button
          class="carousel-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            style="width: 1rem; height: 1rem"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <div class="carousel-indicator mx-2">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active mx-1 carousel_btn"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            class="mx-1 carousel_btn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            class="mx-1 carousel_btn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            class="mx-1 carousel_btn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            class="mx-1 carousel_btn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            class="mx-1 carousel_btn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <button
          class="carousel-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            style="width: 1rem; height: 1rem"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <div class="icon position-absolute bottom-0 end-0 px-3 py-2">
      <div class="icon_item d-inline-block mx-1">
        <a href="https://www.facebook.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-meta"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
            />
          </svg>
        </a>
      </div>
      <div class="icon_item d-inline-block mx-1">
        <a href="https://www.instagram.com/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            />
          </svg>
        </a>
      </div>
      <div class="icon_item d-inline-block mx-1">
        <a href="mailto: FunRoom@example.com">
          <svg
            xmlns=" http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="copyright position-fixed end-0">
    <p class="pe-3">Copyright ©2022 FunRoom. All rights reserved.</p>
    <!-- 學習作品使用，無商業用途，版型來源The F2E，作者開源供使用 -->
  </div>
</template>

<script>
// @ is an alias to /sr
import navbar from "../components/Navbar.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    navbar,
  },
  created() {},
};
</script>
