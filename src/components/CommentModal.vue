<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content text-center rounded-0">
        <div class="modal-header border-0">
          *****
        </div>
        <div class="modal-body border-0">
          此次的住宿，您的滿意度是？
        </div>
        <div class="modal-footer border-0">
          <button type="button" class="primaryBtn py-2" data-bs-dismiss="modal"
            @click.prevent="sureComment()">確定給評</button>
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
  components:{
  },
  methods:{
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    sureComment() {
      this.$router.push('/room/deluxedouble/comment');
      
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  }
}
</script>