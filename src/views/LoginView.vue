<template>
  <div>
    <div class="container ct">
      <div class="row">
        <div class="col-8 offset-2 mt-5 mb-5">
          <h2 class="mt-5 text-center reg" >Login</h2>
          <form @submit.prevent="login">
            <div class="mb-2">
              <label for="email" class="form-label reg">Email</label>
              <input type="email" class="form-control" id="email" v-model="email" />
            </div>

            <div class="mb-2">
              <label for="password" class="form-label reg">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" />
            </div>

            <div class="row">
              <div class="col-9">
                <button type="submit" class="btn button-for-submit btn-lg">Submit</button>
              </div>
              <div class="col-3">
                <button
                  type="button"
                  class="btn button-for-submit btn-lg"
                  @click="$router.push('about')"
                >
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password
        })
        const token = response.data.authorisation.token
        localStorage.setItem('token', token) // Save token in local storage
        console.log(response.data)
        this.$router.push('/data')
      } catch (error) {
        console.error(error)
        // Handle login error, e.g., display error message to the user
      }
    }
  }
}
</script>

<style scoped>
.ct {
  height: 100vh;
}
.fr {
  display: flex;
  align-items: end;
}
</style>
