<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">MEVN Stack</h1>
        <p
          class="lead"
        >Simple authentication application built with MEVN Stack using Express, Node.js, Vue.js and MongoDB by Codebook Inc.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-dark text-white">
          <div class="card-body">
            <h5 class="card-title">Front-End</h5>
            <p
              class="card-text"
            >The front end of a website is the part that users interact with. Everything that you see when you’re navigating around the Internet, from fonts and colors to dropdown menus and sliders, is a combo of HTML, CSS, and JavaScript being controlled by your computer’s browser.</p>
            <a href="https://www.udacity.com/blog/2014/12/front-end-vs-back-end-vs-full-stack-web-developers.html#:~:text=The%20front%20end%20of%20a,SKILLS%20AND%20TOOLS" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-info text-white">
          <div class="card-body">
            <h5 class="card-title">Server-Side</h5>
            <p
              class="card-text"
            >Backend development (also stylized as back-end or back end development) is the skill that powers the web. Yet it does it modestly, without fanfare—allowing people to browse their favorite sites without even knowing about all the work put in by the backend developer or team.</p>
            <a href="https://learntocodewith.me/posts/backend-development/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-danger text-white">
          <div class="card-body">
            <h5 class="card-title">Fullstack</h5>
            <p
              class="card-text"
            >development (a hybrid of both). Full stack can apply to a web stack, mobile stack, or a native application stack (i.e. software programs for specific devices)</p>
            <a href="https://vuejs.org/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>

</style>