<template>
  <div class="ct">
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2 mt-5 mb-5">
          <h2>Registration</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-2">
              <label for="hospitalName" class="form-label reg">Hospital name</label>
              <input type="text" class="form-control" id="hospitalName" v-model="hospitalname" />
            </div>

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

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const hospitalname = ref('')
const email = ref('')
const password = ref('')

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/hospitals', {
      Hospital_name: hospitalname.value,
      email: email.value,
      password: password.value
    })
    console.log(response.data)
    // Handle success, e.g., show a success message or redirect
  } catch (error) {
    console.error(error.response.data)
    // Handle error, e.g., show error message to user
  }
}
</script>

<style scoped>
.ct {
  height: 100vh;
}
</style>

<style scoped>
.ct {
  height: 100vh;
}
</style>
