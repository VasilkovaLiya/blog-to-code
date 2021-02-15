<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New comment</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name">Name:</AppInput>
        <AppTextArea v-model="comment.text">Text:</AppTextArea>
        <div class="controls">
          <AppButton> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// import message from '@/components/UI/Message.vue'
// import appButton from '@/components/UI/controls/Button.vue'
// import appInput from '@/components/UI/controls/Input.vue'
// import appTextArea from '@/components/UI/controls/TextArea.vue'
export default {
  props:['postId'],
  //components:{appButton, appInput, appTextArea, message},
  data () {
    return {
      message: null,
      comment: {
        name: '',
        text: ''
      }
    }
  },

  methods: {
    onSubmit () {
      this.$store.dispatch('addComment', {
        postId: this.postId,
        publish: false,
        ...this.comment
      })
        .then(()=>{
          this.message = "Submited!"
          // Reset
          this.comment.name = ''
          this.comment.text = ''
        })
        .catch(e=>{console.log(e)})
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .controls {
    margin: 30px 0;
  }
}
.contact-form {
  max-width: 600px;
  margin: 30px auto;
}
</style>
