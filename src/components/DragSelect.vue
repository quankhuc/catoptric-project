<script setup lang="ts">
import { ref } from 'vue'

const selection = ref([])
const options = Array.from({ length: 25 }, (_, i) => i + 1)
</script>

<template>
  <drag-select v-model="selection">
    <drag-select-option v-for="item in options" :key="item" :value="item">
      {{ item }}
    </drag-select-option>
  </drag-select>
  <div class="flex flex-row max-w-fit items-center" style="min-height: 2rem">
    <span>Mirrors Selected:</span>
    <div v-for="item in selection" :key="item" class="m-1 text-black rounded flex justify-center" style="background: #5fdddc; min-width: 1rem;">
      {{ item }}
    </div>
  </div>
</template>

<style>
.drag-select {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1.5rem;
}
.drag-select-option {
  height: 3rem;
  color: #ffffff;
  background: #E37E26;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
}

.drag-select__wrapper {
  width: 100%;
  border: 1px solid #086f5a;
}

.drag-select__area::after {
  display: block;
  position: absolute;
  content: ' ';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #086f5a;
}

.drag-select-option--selected {
  color: #000000;
  background: #5fdddc;
}
</style>
