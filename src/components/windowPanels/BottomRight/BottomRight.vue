<script lang="ts">
import { defineComponent } from 'vue'
import BottomRightDragSelect from './BottomRightDragSelect.vue'
import BottomRightDragSelectOption from './BottomRightDragSelectOption.vue'

export default defineComponent({
  name:"BottomRight",
  props: {
    selections: {
      type: Array,
      default: [],
      required: true
    },
    enabled: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      bottomRightMirrors: [...Array(170).keys()].map((i) => i + 519),
      selections: ref([]),
    }
  }
})
</script>
<template>
  <va-modal v-model="enabled" hide-default-actions size="large">
    <BottomRightDragSelect v-model="selections">
      <BottomRightDragSelectOption v-for="item in bottomRightMirrors" :value="item" :key="item">
        {{ item }}
      </BottomRightDragSelectOption>
    </BottomRightDragSelect>
    <va-card-title>
      Bottom Right Mirrors
    </va-card-title>
    <va-card-content>
      In this modal we can select all mirros on the bottom right window panel {{ selections }}
    </va-card-content>
    <va-card-actions>
      <va-button @click="$emit('ok', selections)" color="info">Ok</va-button>
      <va-button @click="$emit('cancel')" color="warning">Cancel</va-button>
    </va-card-actions>
  </va-modal>
</template>
<style>
  .bottom-right-drag-select {
    display: grid;
    grid-template-columns: repeat(17, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 0.5rem;
  }
  .bottom-right-drag-select__wrapper {
    width: 100%;
    border: 1px solid #086f5a;
    overflow-x: auto;
  }
  .bottom-right-drag-select__area {
    background: rgba(66, 153, 225, 0.5);
  }
  .bottom-right-drag-select__area::after {
    display: block;
    position: absolute;
    content: " ";
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgb(66, 153, 225);
  }
  .bottom-right-drag-select-option {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.5rem;
    color: #ffffff;
    background: #E37E26;
    border-radius: 5px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .bottom-right-drag-select-option--selected {
    color: #000000;
    background: #10ccc3;
  }
</style>
