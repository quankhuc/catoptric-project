<script lang="ts">
import { defineComponent } from 'vue'
import LeftMostDragSelect from './LeftMostDragSelect.vue'
import LeftMostDragSelectOption from './LeftMostDragSelectOption.vue'

export default defineComponent({
  name:"LeftMost",
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
      leftMostMirrors: [...Array(330).keys()].map((i) => i + 1),
      selections: ref([]),
    }
  }
})
</script>
<template>
  <va-modal v-model="enabled" hide-default-actions size="large">
    <LeftMostDragSelect v-model="selections">
      <LeftMostDragSelectOption v-for="item in leftMostMirrors" :value="item" :key="item">
        {{ item }}
      </LeftMostDragSelectOption>
    </LeftMostDragSelect>
    <va-card-title>
      Left Most Mirrors
    </va-card-title>
    <va-card-content>
      In this modal we can select all mirros on the left most window panel {{ selections }}
    </va-card-content>
    <va-card-actions>
      <va-button @click="$emit('ok', selections)" color="info">Ok</va-button>
      <va-button @click="$emit('cancel')" color="warning">Cancel</va-button>
    </va-card-actions>
  </va-modal>
</template>
<style>
  .left-most-drag-select {
    display: grid;
    grid-template-columns: repeat(17, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 0.5rem;
  }
  .left-most-drag-select__wrapper {
    width: 100%;
    border: 1px solid #086f5a;
    overflow-x: auto;
  }
  .left-most-drag-select__area {
    background: rgba(66, 153, 225, 0.5);
  }
  .left-most-drag-select__area::after {
    display: block;
    position: absolute;
    content: " ";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid rgb(66, 153, 225);
  }
  .left-most-drag-select-option {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.5rem;
    color: #ffffff;
    background: #E37E26;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-most-drag-select-option--selected {
    color: #000000;
    background: #10ccc3;
  }
</style>
