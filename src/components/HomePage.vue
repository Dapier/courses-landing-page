<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height  ">
      <div class="flex bg-black border shadow p-3 bg-white">
        <span>Recive best courses about web devlopment</span>
      </div>

      <!-- Hero with form  -->
      <div class="container pt-6 ">
        <div class="row pb-5 align-items-center ">
          <!-- Hero column 1 -->
          <div class="col-lg-6 pt-5 my-auto">
            <!-- show only in phone display -->

            <div class="text-center mb-3 title-landing d-block d-lg-none">
              <h1 class="sm font-weight-bold">{{ title }}</h1>
              <span>Register and learn {{ text }}</span>
            </div>
            <img
              id="landing-img"
              src="../assets/programming.svg"
              alt="A boy sit in chair programming"
              class="img-fluid d-lg-mx-80 animated bounce infinite"
            />
          </div>

          <!-- Hero column 2 -->
          <div class="col-lg-6 my-auto pt-4">
            <div id="title-landing " class="text-left mb-3 d-none d-lg-block">
              <h1 class="display-3 font-weight-bold text-light">{{ title }}</h1>
              <h3 class="text-light">Register and learn {{ text }}</h3>
            </div>

            <div class="shadow-lg p-3 mb-5 bg-box-hero rounded p-3 p-md-5 p-lg-6 text-light">
              <h3>We'll send you lastest courses!</h3>
              <form >
                <div class="form-group">
                  <label>Reserve with your email </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    class="form-control"
                  />
                  <small class="form-text  text-light"
                    >Your privacy is secure with us!</small
                  >
                  <button type="submit" class="btn btn-light mt-3">
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Row about with icons -->
    <div id="about" class="shadow border bg-white p-4 pd-md-5 ">
      <div class="row p-4">
        <div class="col-lg-4">
          <img
            src="../assets/icons/startup.svg"
            alt=""
            height="120"
            class="m-4"
          />
          <h4 class="ml-md-4 mr-md-4 font-weight-bold text-center">
            Time to code your own site
          </h4>
          <h5 class="ml-md-4 mr-md-4  text-center">
            Start to make your own website with must popular tecnologies
          </h5>
        </div>

        <div class="col-lg-4">
          <img
            src="../assets/icons/responsivePhone.svg"
            alt=""
            height="120"
            class="m-4"
          />
          <h4 class="ml-md-4 mr-md-4 font-weight-bold text-center">
            Make responsive web apps!
          </h4>
          <h5 class="ml-md-4 mr-md-4  text-center">
            Using tecnologias such as React Native , Vue 3 or Angular
          </h5>
        </div>

        <div class="col-lg-4">
          <img
            src="../assets/icons/hired.svg"
            alt=""
            height="120"
            class="m-4"
          />
          <h4 class="ml-md-4 mr-md-4 font-weight-bold text-center">
            Get hired
          </h4>
          <h5 class="ml-md-4 mr-md-4  text-center">
            Learn how to pass your interviews and get hired
          </h5>
        </div>
      </div>
    </div>

    <div id="contact">
      <div class="row m-0 p-0 ">
        <div class="col-lg-6">
          <div class="container p-5 d-none d-lg-block">
            <img
              src="../assets/questions.png"
              alt=""
              class="img-fluid img-contact"
            />
          </div>
        </div>
        <div class="col-lg-6 bg-contact-form vertical-center">
          <div class="container p-5  bg-form-contact text-white ">
            <h3 class="">Questions? Contact us!</h3>
            <form>
              <div class="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="form-control m-3"
                />
                <textarea
                  class="form-control m-3"
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
                <button type="button" class="btn btn-light shadow border">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div id="footer" class="bg-light p-2">
      <div class="flex ">
        This app was made with
        <span
          >Vue Js <img src="../assets/logo.png" alt="vue js logo" height="20px"
        /></span>
        <span
          >, Firebase
          <img
            src="../assets/icons/firebase.svg"
            alt="firebase logo"
            height="20px"
        /></span>
        and
        <span
          >Boostrap
          <img
            src="../assets/icons/bootstrap.svg"
            alt="bootstrap logo"
            height="20px"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Learn something new!",
      text: "HTML"
    };
  }
};
</script>

<style scoped>
.sm {
  font-size: 3.5rem;
}
.bg-box-hero{
 background: #8E75CE;  /* fallback for old browsers */



}
#home-page {
  background-color: #f1f1f0;
  background: url("../assets/bgHero.jpg") no-repeat center center;
  background-size: cover;
}
#landing-img {
  height: 80vh;
}
#title-landing {
  font-weight: bold;
  font-size: 1rem;
  color: #2b2b2b;
}

#about {
  min-height: 40vh;
  z-index: 1070 !important;
}

.bg-contact-form {
  background-color: #494949;
}
.vertical-center {
  display: flex;
  align-items: center;
}
</style>
