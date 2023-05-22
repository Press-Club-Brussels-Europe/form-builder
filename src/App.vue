<template>
  <div class="bg-dodger-500 dark:bg-dodger-blue-900 text-white min-h-screen text-center pt-5 transition duration-700 ease-in-out">
    
    <img class="mx-auto h-34 mt-10" alt="Vue logo" src="./assets/bus.png" />
    <h1 class="text-2xl font-bold mt-8 mb-2 uppercase">MEDIA ACCREDITATION</h1>
    <p class="text-lg font-bold mb-8">Registration Form</p>
    
    <form
    v-if="form.status" 
     name="accreditation"
     method="POST"
     data-netlify="true"
     data-netlify-honeypot="bot-field"
     @submit.prevent="handleSubmit"
     class="max-w-xl mx-auto p-5 text-left">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" name="first_name" class="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dodger-blue-500 focus:border-dodger-blue-500 block w-full p-2.5 dark:bg-dodger-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dodger-blue-500 dark:focus:border-dodger-blue-500" placeholder="John" required>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                <input type="text" id="last_name" name="last_name" class="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dodger-blue-500 focus:border-dodger-blue-500 block w-full p-2.5 dark:bg-dodger-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dodger-blue-500 dark:focus:border-dodger-blue-500" placeholder="Doe" required>
            </div>
            <div>
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Media</label>
                <input type="text" id="media" name="media" class="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dodger-blue-500 focus:border-dodger-blue-500 block w-full p-2.5 dark:bg-dodger-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dodger-blue-500 dark:focus:border-dodger-blue-500" placeholder="Politico" required>
            </div>  
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <input type="text" id="country" name="country" class="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dodger-blue-500 focus:border-dodger-blue-500 block w-full p-2.5 dark:bg-dodger-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dodger-blue-500 dark:focus:border-dodger-blue-500" placeholder="Belgium" required>
            </div>
        </div>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" name="email" class="outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-dodger-blue-500 focus:border-dodger-blue-500 block w-full p-2.5 dark:bg-dodger-blue-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dodger-blue-500 dark:focus:border-dodger-blue-500" placeholder="john.doe@company.com" required>
        </div>
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-dodger-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-dodger-blue-600 dark:ring-offset-gray-800" required>
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">By checking this box, you confirm that the information provided is accurate and entered by you.</label>
        </div>
        <div class="text-center">
          <button type="submit" class="text-white bg-dodger-blue-700 hover:bg-dodger-blue-800 focus:ring-4 focus:outline-none focus:ring-dodger-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-dodger-blue-800 dark:hover:bg-dodger-blue-700 dark:focus:ring-dodger-blue-800 uppercase">Submit</button>

        </div>
    </form>
    <h1 v-else class="text-lg font-bold mb-2 text-white bg-dodger-blue-800 inline px-3 py-2 mt-16">
      We sincerely appreciate your application and interest. Thank you!
    </h1>
    <!-- <router-view></router-view> -->
    
  </div>
  
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      theme : "",
      form: {
        firstname : "",
        lastname : "",
        email: "",
        media: "",
        country: "",
        status: true
      },
    }
  },
  methods : {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "accreditation",
          ...this.form
        }),
        axiosConfig
      );
      this.form.email = "";
      this.form.firstname = "";
      this.form.lastname = "";
      this.form.media = "";
      this.form.country = "";
      this.form.status = false
    }
  },
  mounted() {
    document.documentElement.classList.add("dark");
    this.theme = "dark";
  }
}
</script>

<style>
</style>
