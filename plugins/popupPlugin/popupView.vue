<template>
  <div
    class="popup"
    :style="{ top: y + 'px', left: x + 'px', width: (width * 2) + 'px', height: (height * 1.5) + 'px' }"
  >
    <img :src="imageUrl" alt="Popup Image" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  text: String,
  imageUrl: String,
  x: Number,
  y: Number,
  width: Number,
  height: Number,
});
</script>

<style scoped>
.popup {
  position: absolute;
  padding: 10px;
  background-color: rgba(228, 203, 203, 0.3);
  box-shadow: 0 2px 5px rgba(78, 73, 73, 0.3);
  transform: translate(-50%, 65%);
  border-radius: 10px;
}

.popup img {
  width: 100%;
  height: 90%;
}

.popup p {
  margin: 10px 0;
}
</style>
