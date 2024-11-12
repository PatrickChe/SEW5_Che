<template>
  <div>
    <h1 class="text-lg text-center" v-if="message">{{ message }}</h1>
    <p v-else>Loading message...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await axios.get('/api/message');  
        console.log("Message fetched: ", response.data);
        this.message = response.data;
      } catch (error) {
        console.error("There was an error fetching the message", error);
      }
    },
  },
  mounted() {
    this.fetchMessage();
  },
};
</script>

<style scoped>
</style>
