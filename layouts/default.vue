<template>
  <div>
    <TheHeader @sidenavToggle="show = !show"/>
    <TheSidenav :show="show" @close="show = false"/>
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader';
import TheSidenav from '@/components/Navigation/TheSidenav';
export default {
  data(){
    return{
      show:false
    }
  },
  components: {
    TheHeader,
    TheSidenav
  },

}
</script>


<style>
html {
  font-family: 'Open Sans', sans-serif;
}
body{
  margin: 0px;
}


</style>
