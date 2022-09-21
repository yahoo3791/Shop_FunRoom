<template>
<div class="container">
  <div class="row gy-3">
    <div class="col-12 text-end">
      <a href="" class="text-primary text-decoration-underline" @click.prevent="$refs.commentModal.showModal()">+我要給評</a>
      <!-- <router-link to="/room/deluxedouble/comment" class="text-primary text-decoration-underline">+我要給評</router-link> -->
    </div>
    <div class="col-12">
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
    <div class="col-12">
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
    <div class="col-12">
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
  <commentModal ref="commentModal"></commentModal>
</template>
<script>
import commentModal from '../components/CommentModal.vue';

export default {
  data() {
    return {

    }
  },
  components:{
    commentModal
  },
  methods:{
  }
}
</script>
