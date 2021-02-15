<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"/>
    <comments :comments="comments"/>
    <newComment :postId="$route.params.id"/>
  </div>
</template>


<script>
import axios from 'axios'
import post from '@/components/blog/Post.vue'
import comments from '@/components/comments/Comments.vue'
import newComment from '@/components/comments/NewComment.vue'
export default {
  components:{post,comments,newComment},
  // data () {
  // return {
  //     post:{
  //       id: 3,
  //       title: '3 post',
  //       descr: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет',
  //       content:'1312312323',
  //       img:'https://avatars.mds.yandex.net/get-pdb/2273630/ac96d1c0-f3f7-4c5e-95f6-82b0968fc1a3/s1200?webp=false'
  //     },
  //     comments: [
  //         {name:'Alex',
  //         text: 'Текст комментария Алексея'},
  //         {name:'Max',
  //         text: 'Текст комментария Макса'},
  //     ]
  //   }
  // },
  async asyncData (context) {
    let [post, comments] = await Promise.all([
      axios.get(`https://blog-nuxt-4fccf-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://blog-nuxt-4fccf-default-rtdb.firebaseio.com/comments.json`)
    ])

    // Comments
    let commentsArray = [],
        commentsArrayRes = []
    if (!comments.data) { comments.data = {}; }
    Object.keys(comments.data).forEach(key => {
      commentsArray.push(comments.data[key])
    })
    for (let i=0; i < commentsArray.length; i++) {
      if (commentsArray[i].postId === context.params.id && commentsArray[i].publish === true) {
        commentsArrayRes.push(commentsArray[i])
      }
    }

    return {
      post: post.data,
      comments: commentsArrayRes
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom:30px;
  img {
    max-width: 400px;
    margin-bottom:30px;
  }
  p {
    color: #999;
  }
}
.post-body {
  text-align: left;
}
</style>
