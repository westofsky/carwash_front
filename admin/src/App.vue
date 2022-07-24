<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "App",
    head: {
        title: {
            inner: "SPARKPLUS_ADMIN",
        },
        script: [
			{ type:'text/javascript', src:'/js/common.js', async : true, body:true},
        ]
    },
};
</script>
<style>
    #app{
        height : 100%;
    }
</style>
