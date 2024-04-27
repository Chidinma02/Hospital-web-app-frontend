<template>
  <div class="about text-center">
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2 align-middle">
          <h2 class="align-middle reg">Register as a hospital</h2>

          <button type="submit" class="btn button-for-submit btn-lg" @click="$router.push('login')">
            Login
          </button>
          <span class="ma"
            ><button
              type="submit"
              class="btn button-for-submit btn-lg"
              @click="$router.push('register')"
            >
              Sign up
            </button></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} --> */
.ma {
  margin-left: 50px;
}
.about {
  height: 100vh;
  display: flex;
  align-items: center;
}
.reg {
  color: white !important;
}
</style>
