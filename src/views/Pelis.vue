<template>
  <div class="about">
    <h1 class="text-center mt-2 ">Pelis</h1>
    
    <div class="container">
      <Search @accion="GetMovies"/>
      <CardMovies :movie="data" /> 
    </div>
  </div>
</template>

<script>
import CardMovies from '@/components/CardMovies.vue'
import Search from '@/components/Search.vue'
export default {
   data: () => ({
     data: {},
     search: ""
   }),
     components: {CardMovies, Search},

     methods: {
       async GetMovies(search = "spider man"){
         const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=24776d32&t=${search}`);
         const data = await res.json();
         this.data = data;
           console.log(data); 
       },
     },

     created(){
       this.GetMovies()
     }

      // const search = this.movieTitle.toLowerCase().replace(/ /g, "+"); /*renplazar espacios en blanco con+*/
      //      /* llamando la api con fetch */
      //     const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=24776d32&t=${search}`);
          
      //     /* pasando el resultado a json */
      //     const jsonData = await data.json();
      //     /* asignando el resultado a un  objecto */
      //     this.movieData = jsonData;
}
</script>

<style scoped>
h1{
  color: rgb(255, 140, 0);
}
</style>