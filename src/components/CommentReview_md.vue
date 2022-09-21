<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content border-0 rounded-0" style="background:#F5F5F5;">
        <div class="modal-body position-relative">
          <div class="modal-btn position-absolute top-0 bg-white" style="right:-50px">
            <button type="button" style="width:2em;height:2em;" class=" btn-close opacity-100" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div class="container">
            <div class="row gy-3 my-5">
              <div class="col-10 pb-3 mx-auto">
                <div class="comment_title d-flex">
                  <div class="comment_name">
                    <p>y****mst</p>
                  </div>
                  <div class="comment_star ps-4">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                </div>
                <div class="comment_p">
                  <p>旅館服務人員很親切，離車站只要3~5分鐘。</p>
                </div>
                <div class="comment_icon">
                  <div class="comment_icon_box">服務讚</div>
                  <div class="comment_icon_box">清潔讚</div>
                  <div class="comment_icon_box">衛生讚</div>
                  <div class="comment_icon_box">安全讚</div>
                  <div class="comment_icon_box">設施讚</div>
                </div>
              </div>
              <div class="col-10 pb-3 mx-auto">
                <div class="comment_title d-flex">
                  <div class="comment_name">
                    <p>j****uty</p>
                  </div>
                  <div class="comment_star ps-4">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i><i class="bi bi-star"></i>
                  </div>
                </div>
                <div class="comment_p">
                  <p>空間很大，住起來很舒適</p>
                </div>
                <div class="comment_icon">
                  <div class="comment_icon_box">衛生讚</div>
                  <div class="comment_icon_box">安全讚</div>
                  <div class="comment_icon_box">設施讚</div>
                </div>
              </div>
              <div class="col-10 pb-3 mx-auto">
                <div class="comment_title d-flex">
                  <div class="comment_name">
                    <p>u****ioi</p>
                  </div>
                  <div class="comment_star ps-4">
                    <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                      class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                  </div>
                </div>
                <div class="comment_p">
                  <p>旅不是照騙，CP值很高，大推~</p>
                </div>
                <div class="comment_icon">
                  <div class="comment_icon_box">服務讚</div>
                  <div class="comment_icon_box">清潔讚</div>
                  <div class="comment_icon_box">衛生讚</div>
                  <div class="comment_icon_box">安全讚</div>
                  <div class="comment_icon_box">設施讚</div>
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
      modal :{},
    }
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