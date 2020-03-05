<template>
  <section id="main">
    <div class="container">
      <h1>{{message}}</h1>
      <img src="/assets/img/dog.jpg" />
      
    </div>
  </section>
</template>

<script>

		export default{
			data(){
			return{
				message: this.$store.getters.getMessage,
				showExampleComponent: this.$store.getters.getShowExampleComponent,
			}
		}
		}

</script>

<style lang="scss" >
h1{
	color:red;
}
</style>