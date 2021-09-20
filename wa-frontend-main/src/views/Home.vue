<template>
  <div class="jumbotron">
    <h1 class="display-4">College Search</h1>
    <img src="/assets/college-search.jpg"/>
    <hr class="my-4">
    <p class="lead">College Search aplikacija je namijenjena osobama koje traže informacije o fakultetima na kojima mogu studirati. Namijenjena je učenicima srednjih škola i osobama koje žele nastaviti s cijeloživotnim obrazovanjem. Oznacavanjem fakulteta koji su im interesantni formira se lista favorita.</p>
    
    <router-link class="btn btn-primary btn-lg" to="/login">Login</router-link>
  </div>
</template>

<script>    
import HelloWorld from '@/components/HelloWorld.vue' 

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
