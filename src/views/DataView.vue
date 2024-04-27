<template>
  <div class="ct">
    <div class="container pt-5">
      <div class="row">
        <div class="col-10"><h1 class="reg">Patients List</h1></div>
        <div class="col-2">
          <button type="button" class="btn button-for-submit btn-lg" @click="logout">Logout</button>
        </div>

        <div class="col-12">
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <!-- <th scope="col">Hospital ID</th> -->
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Email</th>
                <th scope="col">Sex</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in dataList" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <!-- <td>{{ item.hospital_id }}</td> -->
                <td>{{ item.first_name }}</td>
                <td>{{ item.last_name }}</td>
                <td>{{ item.dob }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.sex }}</td>
                <td>{{ item.phone }}</td>
              </tr>
            </tbody>
          </table>
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
      dataList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async logout() {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          // Token is not available, redirect to login
          this.$router.push('/login')
          return
        }

        // Make logout request
        await axios.post('http://127.0.0.1:8000/api/logout', null, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        // Remove token from localStorage
        localStorage.removeItem('token')

        // Redirect to login
        this.$router.push('/login')
      } catch (error) {
        console.error('Logout error:', error)
        // Handle error, e.g., display error message to the user
      }
    },
    async fetchData() {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          // Token is not available, redirect to login
          this.$router.push('/login')
          return
        }

        // Make API request with token
        const response = await axios.get('http://127.0.0.1:8000/api/listpatients', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        // Set fetched data to dataList
        this.dataList = response.data.patients
      } catch (error) {
        console.error('Fetch data error:', error)
        // Handle error, e.g., display error message to the user
      }
    }
  }
}
</script>

<style scoped>
.ct {
  height: 100vh;
}
</style>
