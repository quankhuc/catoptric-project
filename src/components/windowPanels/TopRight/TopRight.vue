<script lang="ts">
import { defineComponent } from 'vue'
import TopRightDragSelect from './TopRightDragSelect.vue'
import TopRightDragSelectOption from './TopRightDragSelectOption.vue'

export default defineComponent({
  name: "TopRight",
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
      topRightMirrors: [...Array(64).keys()].map((i) => i + 295),
      selections: ref([]),
    }
  }
})
</script>
<template>
  <va-modal v-model="enabled" hide-default-actions size="small">
    <TopRightDragSelect v-model="selections">
      <TopRightDragSelectOption v-for="item in topRightMirrors" :value="item" :key="item">
        {{ item }}
      </TopRightDragSelectOption>
    </TopRightDragSelect>
    <va-card-title>
      Top Right Mirrors
    </va-card-title>
    <va-card-content>
      In this modal we can select all mirros on the top right window panel {{ selections }}
    </va-card-content>
    <va-card-actions>
      <va-button @click="$emit('ok', selections)" color="info">Ok</va-button>
      <va-button @click="$emit('cancel')" color="warning">Cancel</va-button>
    </va-card-actions>
  </va-modal>
</template>
<style>
  .top-right-drag-select {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-gap: 0.5rem;
  }
  .top-right-drag-select__wrapper {
    width: 100%;
    border: 1px solid #086f5a;
    overflow-x: auto;
  }
  .top-right-drag-select__area {
    background: rgba(66, 153, 225, 0.5);
  }
  .top-right-drag-select__area::after{
    display: block;
    position: absolute;
    content: " ";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid rgb(66, 153, 225);
  }
  .top-right-drag-select-option {
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
  .top-right-drag-select-option--selected {
    color: #000000;
    background: #10ccc3;
  }
</style>
