<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo/>
    <Intro title="Добро пожаловать!"/>
    <postlists :posts="postsLoaded"/>
    <contacts/>
  </div>
</template>

<script>
import postlists from '@/components/blog/PostsList.vue'
import contacts from '@/components/Contacts.vue'
export default {
  components: {postlists, contacts},
  // data () {
  //   return {
  //     posts:[
  //       {id: 1,
  //       title: '1 post',
  //       descr: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет',
  //       img:'http://yakutiaprime.ru/SITE/files/news/images/24007.jpg'
  //       },
  //       {id: 2,
  //       title: '2 post',
  //       descr: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет',
  //       img:'https://elicats.it/wp-content/uploads/2014/04/kitten-2831035_1920-350x250.jpg'
  //       },
  //       {id: 3,
  //       title: '3 post',
  //       descr: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет',
  //       img:'https://avatars.mds.yandex.net/get-pdb/2273630/ac96d1c0-f3f7-4c5e-95f6-82b0968fc1a3/s1200?webp=false'
  //       },
  //     ]
  //   }
  // },
  computed: {
    postsLoaded () {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style>

</style>
