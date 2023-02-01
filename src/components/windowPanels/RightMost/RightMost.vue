<script lang="ts">
import { defineComponent } from 'vue';
import RightMostDragSelect from './RightMostDragSelect.vue';
import RightMostDragSelectOption from './RightMostDragSelectOption.vue';

export default defineComponent({
  name: "RightMost",
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
      rightMostMirrors: [...Array(102).keys()].map((i) => i + 193),
      selections: ref([]),
    }
  }
})
</script>
<template>
  <va-modal v-model="enabled" hide-default-actions size="large">
    <RightMostDragSelect v-model="selections">
      <RightMostDragSelectOption v-for="item in rightMostMirrors" :value="item" :key="item">
        {{ item }}
      </RightMostDragSelectOption>
    </RightMostDragSelect>
    <va-card-title>
      Right Most Mirrors
    </va-card-title>
    <va-card-content>
      In this modal we can select all mirros on the right most window panel {{ selections }}
    </va-card-content>
    <va-card-actions>
      <va-button @click="$emit('ok', selections)" color="info">Ok</va-button>
      <va-button @click="$emit('cancel')" color="warning">Cancel</va-button>
    </va-card-actions>
  </va-modal>
</template>
<style>
  .right-most-drag-select {
    display: grid;
    grid-template-columns: repeat(17, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 0.5rem;
  }
  .right-most-drag-select__wrapper {
    width: 100%;
    border: 1px solid #086f5a;
    overflow-x: auto;
  }
  .right-most-drag-select__area {
    background: rgba(66, 153, 225, 0.5);
  }
  .right-most-drag-select__area::after {
    display: block;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid rgb(66, 153, 225);
  }
  .right-most-drag-select-option {
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
  .right-most-drag-select-option--selected {
    color: #000000;
    background: #10ccc3;
  }
</style>
