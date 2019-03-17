<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
import axios from 'axios';

export default {
  layout:'admin',
  components: {AdminPostForm},
  // data(){
  //   return {
  //     loadedPost: {
  //       author: '1',
  //       title: '2',
  //       thumbnailLink: 'https://i.ytimg.com/vi/VMTp5Z_K748/maxresdefault.jpg',
  //       content: '4'
  //     }
  //   }
  // },
  asyncData(context){ 
     return axios
     .get('https://nuxt-ap.firebaseio.com/posts/'+context.params.postid+'.json')
     .then(res=>{
       return {
         loadedPost: {...res.data, id:context.params.postid}
       }
     })
     .catch(e=>context.error(e))
  },
  methods:{
    onSubmitted(editedPost){
      this.$store.dispatch('editPost', editedPost)
      .then(()=>{this.$router.push('/admin')})
    }
  }

}

</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
