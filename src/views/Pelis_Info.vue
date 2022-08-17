<template>
  <div id="cardMovies">
    <div class="container">
       <div class="card mx-auto bold">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 p-0">
            <img :src="data.Poster" class="card-img-top" alt="..." />
          </div>
          <div class="col-sm-6 p-0">
            <div class="card-body bg-dark text-white">
              <h4 class="card-title text-center">{{ data.Title }}</h4>
              <p class="card-text">
                <span>Writer:</span>
                {{ data.Writer }}
              </p>
              <p class="card-text">
                <span>Language:</span>
                {{ data.Language }}
              </p>
              <p class="card-text">
                <span>Year:</span>
                {{ data.Year }}
              </p>
              <p class="card-text">
                <span>Genre:</span>
                {{ data.Genre }}
              </p>
              <p class="card-text">
                <span>Actors:</span>
                {{ data.Actors }}
              </p>
              <p class="card-text">
                <span>Country:</span>
                {{ data.Country }}
              </p>
              <p class="card-text">
                <span>Director:</span>
                {{ data.Director }}
              </p>
              <p class="card-text">
                <span>Plot:</span>
                {{ data.Plot}}
              </p>
              <p class="card-text">
                <span>Released:</span>
                {{ data.Released }}
              </p>
              <p class="card-text">
                <span>Type:</span>
                {{ data.Type }}
              </p>
              <p class="card-text">
                <span>imdbID:</span>
                {{ data.imdbID }}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {}
  }),
  methods: {
    async GetMovies(search = this.$route.params.name){
         const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=24776d32&t=${search}`);
         const data = await res.json();
         this.data = data;
           console.log(data); 
       },
  },

  mounted(){
    this.GetMovies()
  }
};
</script>


<style scoped>
.card {
  margin-bottom: 5%;
  width: 100%;
}
.card-body {
  height: 100%;
  position: relative;
}
.p-0 {
  padding: 0;
}
.bold {
  font-weight: bold;
}
span {
  color: rgb(137, 137, 137);
  font-size: 30px;
}
p {
  font-size: 15px;
}
.btn {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>