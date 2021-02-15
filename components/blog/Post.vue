<template>
    <section class="post">
        <div class="container">
          <div>POOOOSSSTTT</div>
          <div class="post-header">
            <img :src="post.img" :alt="post.title">
            <h1 class='title'>{{post.title}}</h1>
            <p>{{post.descr}}</p>
          </div>
          <div class="post-body">
            <div class="post-content"></div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  props:['post'],
}
</script>
