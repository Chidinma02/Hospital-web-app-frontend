<template>
  <div class="container">
    <div class="row">
      <div class="col-8 offset-2 mt-5 mb-5">
        <h2 class="reg">Registration</h2>
        <form>
          <div class="mb-2">
            <label for="first_name" class="form-label reg">First name</label>
            <input type="text" class="form-control" id="first_name" v-model="formData.first_name" required />
          </div>

          <div class="mb-2">
            <label for="last_name" class="form-label reg">Last name</label>
            <input type="text" class="form-control" id="last_name" v-model="formData.last_name" />
          </div>

          <div class="mb-2">
            <label for="email" class="form-label reg">Email address</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" />
          </div>

          <div class="mb-2">
            <label for="dob" class="form-label reg">Date of birth</label>
            <input type="date" class="form-control" id="dob" v-model="formData.dob" />
          </div>

          <div class="mb-2">
            <label for="phone" class="form-label reg">Phone</label>
            <input type="text" class="form-control" id="phone" v-model="formData.phone" />
          </div>

          <label for="hospitalSelect" class="form-label reg">Hospital</label>
          <!-- {{ hospitals }} -->
          <select v-model="selectedHospital" class="form-select">
      <option value="">Choose a hospital</option>
      <option v-for="hospital in filteredHospitals" :key="hospital.id" :value="hospital.id">
        {{ hospital.Hospital_name }}
      </option>
    </select>

          <div class="mb-2">
            <label for="gender" class="form-label reg">Sex</label>
            <select id="gender" class="form-select" v-model="formData.sex">
              <option value="">Choose a gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <button type="submit" class="btn button-for-submit btn-lg" @click.prevent="submitForm">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const formData = {
  first_name: '',
  last_name: '',
  email: '',
  dob: '',
  phone: '',
  hospital_id: '',
  sex: ''
}

const hospitals = ref([])
// Use ref for reactive array of hospitals

const fetchHospitals = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/hospitals')
    hospitals.value = response.data.hospitals
    // hospitals.value = hospitalNames
  } catch (error) {
    console.error(error)
    // Handle error, e.g., display error message to the user
  }
}

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/student', formData)
    console.log(response.data) // Log the response data
    // Handle success, e.g., show success message or redirect to another page
  } catch (error) {
    console.error(error)
    // Handle error, e.g., display error message to the user
  }
}

fetchHospitals() // Call fetchHospitals to populate hospitals array initially
</script>
