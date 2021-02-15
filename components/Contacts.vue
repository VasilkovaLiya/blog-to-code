<template>

  <section class="contacts">
    <div class="container">
      <h2 class="title">Contact me</h2>
      <!-- message -->
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">

        <AppInput v-model="user.name">Name:</appInput>
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <AppTextArea v-model="user.text">Comment</AppTextArea>
        <div class="controls">
          <AppButton btnClass="btnWhite"> Contact me! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>


<script>
import message from '@/components/UI/Message.vue'
// import AppButton from '@/components/UI/controls/Button.vue'
// import appInput from '@/components/UI/controls/Input.vue'
// import appTextArea from '@/components/UI/controls/TextArea.vue'
export default {
  //components:{AppButton, appInput, appTextArea, message},
  data () {
    return {
      message:'',
      user: {
        name:'',
        email:'',
        text:''
      }
    }
  },
  methods: {
    onSubmit () {
      this.message = "Submited!"
      // Reset
     // this.comment.name = ''
     // this.comment.text = ''
     console.log(this.user)
    }
  }
}
</script>
<style lang="scss">
.contacts {
  text-align: center;
  background-color: #6899f3;
  .controls {
    margin: 30px 0;
  }
  .title {
    color: #fff;
  }
}
.contact-form {
  max-width: 600px;
  margin: 30px auto;
}
</style>
