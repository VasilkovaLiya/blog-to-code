<template>
  <h1>Post ID is: {{this.$route.params.id}}</h1>
</template>


<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>
