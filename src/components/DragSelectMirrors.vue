<script lang="ts">
import { ref }  from 'vue'
import DragSelect from './dragSelect/DragSelect.vue'
import DragSelectOption from './dragSelect/DragSelectOption.vue'
import { PropType } from 'vue'

export default defineComponent({
  name: "DragSelectMirrors",
  components: {
    DragSelect
  },
  props: {
    options: {
      type: Array as PropType<number[]>,
      required: true
    }
  },
  data() {
    return {
      selection: ref([]),
    }
  },
})
</script>

<template>
    <DragSelect v-model="selection">
      <DragSelectOption v-for="item in options" :value="item" :key="item">
        {{ item }}
      </DragSelectOption>
    </DragSelect>
</template>

<style>
  .drag-select {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .drag-select__wrapper {
    width: 100%;
    border: 1px solid #086f5a;
  }

  .drag-select__area {
    background: rgba(66, 153, 225, 0.5);
  }
  .drag-select__area::after {
    display: block;
    position: absolute;
    content: " ";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid rgb(66, 153, 225);
  }

  .drag-select-option {
    width: 5rem;
    height: 5rem;
    margin: 1rem;
    color: #ffffff;
    background: #E37E26;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .drag-select-option--selected {
    color: #000000;
    background: #5fdddc;
  }
</style>
