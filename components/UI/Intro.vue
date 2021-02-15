<template>
  <section class="intro">
    <div class="container">
      <h2>{{title}}</h2>
    </div>
    <slot/>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required:true
    }
  }
}
</script>

<style lang="scss">
.intro {
  width: 100%;
  margin: 30px 0;
  text-align: center;
  color: #fff;
  background-color: rgb(104, 153, 243);
  h1 {
    font-size: 26px;
  }
}
</style>

