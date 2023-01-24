<script lang="ts">

import DragSelectMirrors from '../DragSelectMirrors.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "TopRightWindowPanel",
  components: {
    DragSelectMirrors
  },
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
      topRightMirrors: [...Array(48).keys()].map((i) => i + 145),
      finalSelections: ref([]),
    }
  }
})
</script>
<template>
  <va-modal v-model="enabled" hide-default-actions size="large">
    <DragSelectMirrors :options="topRightMirrors" v-model="finalSelections" />
      <va-card-title>
        Top Right Mirrors
      </va-card-title>
      <va-card-content>
        In this modal we can select all mirros on the top right window panel {{ finalSelections }}
      </va-card-content>
      <va-card-actions>
        <va-button @click="$emit('ok', finalSelections)" color="info">Ok</va-button>
        <va-button @click="$emit('cancel')" color="warning">Cancel</va-button>
      </va-card-actions>
  </va-modal>
</template>
