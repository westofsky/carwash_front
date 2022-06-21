<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  head : {
    title : {
      inner: "SPARKPLUS",
    },
    script:[
			{ type:'text/javascript', src:'/js/content.js', async : true, body:true},
			{ type:'text/javascript', src:'/js/common.js', async : true, body:true},
			{ type:'text/javascript', src:'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js',async :true,body:true}
		]
  }
};
</script>
<style>
    #app{
        height : 100%;
    }
</style>
