<script setup lang="ts">
import DragSelect from '../../../components/DragSelect.vue'
import MirrorController from '../../../components/MirrorController.vue'
</script>

<template>
  <DragSelect />
  <MirrorController label-text="Set of Mirrors" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
