<template>
  <div id="cardMovies">
    <div class="card mx-auto bold">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 p-0">
            <img :src="movie.Poster" class="card-img-top" alt="..." />
          </div>
          <div class="col-sm-6 p-0">
            <div class="card-body bg-dark text-white">
              <h4 class="card-title text-center">{{ movie.Title }}</h4>
              <p class="card-text">
                <span>Writer:</span>
                {{ movie.Writer }}
              </p>
              <p class="card-text">
                <span>Language:</span>
                {{ movie.Language }}
              </p>
              <p class="card-text">
                <span>Year:</span>
                {{ movie.Year }}
              </p>
              <p class="card-text">
                <span>Genre:</span>
                {{ movie.Genre }}
              </p>
              <router-link :to="`/pelis_info/:${movie.Title}`" class="btn btn-primary"
                >More Information</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
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