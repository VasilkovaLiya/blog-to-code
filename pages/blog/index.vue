<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts"/>
    <postlists :posts="postsLoaded"/>
  </div>
</template>

<script>
import postlists from '@/components/blog/PostsList.vue'

export default {
  components: {postlists},
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style>

</style>
