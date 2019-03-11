<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
    layout:'admin',
    components: {AdminPostForm},
    data(){
    return {
        loadedPost: {
                author: '1',
                title: '2',
                thumbnailLink: 'https://i.ytimg.com/vi/VMTp5Z_K748/maxresdefault.jpg',
                content: '4'
        }
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
