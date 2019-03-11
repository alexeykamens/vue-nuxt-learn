<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>
<script>
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList
  },
  // asyncData(context){ //only in pages folder, executed on server
  
  // fetch(context){ 
  //   return new Promise ((resolve, reject)=>{
  //     setTimeout(()=>{
  //     //can't reach object 'this',  because component not rendered at the moment
  //       resolve({ //first argument is for errror hanndeling
  //         loadedPosts: [
  //           {
  //             id:'1',
  //             title:'title',
  //             PreviewText: 'some text',
  //             thumbnail: 'omuuuuuullllll'
  //           }
  //         ]
  //       })
  //     }, 1500);
  //   })
  //   .then(data=>{
  //     context.store.commit('setPosts', data.loadedPosts)
  //   })
  //   .catch(e=>{context.error(e)});
  // },
  computed:{
    loadedPosts(){return this.$store.getters.loadedPosts}
  }
  // created(){
  //   this.$store.dispatch('setPosts', this.loadedPosts)
  // }
}
</script>

<style scoped>
.posts-page{
    display:flex;
    justify-content: center;
    align-items: center;
}

</style>
