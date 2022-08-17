<template>
<form @submit.prevent="searchMovies()">
  <div class="mb-3 d-flex">
    <input type="text"
    v-model="search"
    class="form-control text-white bg-dark" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    placeholder="Search Movies">
   <button type="submit" class="btn btn-primary">Search</button>
  </div>
</form>
</template>

<script>
export default {
  data: () => ({
      search: "",
  }),
 methods:{
     searchMovies(){
         this.$emit("accion", this.search)
     }
 }
}
</script>

<style scoped>
.d-flex{
    display: flex;
}
.text-white{
    color: white;
    font-weight: bold;
    text-align: center;
}
</style>

