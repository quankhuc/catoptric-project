<script>
import DpadController from '~/components/dpad/DpadController.vue'
export default {
  name: 'MirrorController',
  components: { DpadController },
  props: {
    labelText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      xCoordinate: 0,
      yCoordinate: 0,
    }
  },
  methods: {
    resetCoordinates() {
      this.popUpConfirm()
    },
    popUpConfirm() {
      this.$buefy.dialog.confirm({
        title: 'Reset Coordinates',
        message: `Are you sure you want to reset the coordinates of ${this.labelText}?`,
        confirmText: 'Yes',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.xCoordinate = 0
          this.yCoordinate = 0
        },
      })
    },
  },
}
</script>

<template>
  <section>
    <div class="flex flex-col items-center">
      <!-- <div class="rounded bg-sky-400 mb-5">
        <span class="text-lg flex justify-center mx-4 my-2 p-2">
          {{ labelText }}
        </span>
      </div> -->
      <div class="d-pad-wrapper flex flex-col items-center rounded-xl bg-teal-300">
        <div class="mirror-coordinate flex flex-row w-100 bg-gray-300 p-2 mx-4 mt-4 rounded">
          <div class="w-40 flex flex-col">
            <span class="flex justify-center">Pan</span>
            <va-input v-model="pan" type="number" class="mr-3"/>
          </div>
          <div class="w-40 flex flex-col">
            <span class="flex justify-center">Tilt</span>
            <va-input v-model="tilt" type="number" class="ml-3"/>
          </div>
        </div>
        <!-- <div class="flex flex-row w-100 p-2 mx-4 mt-4 rounded">
          <va-button @click="resetCoordinates">
            Reset
          </va-button>
        </div> -->
        <div class="flex flex-row items-center w-100">
          <DpadController />
          <va-button @click="resetCoordinates" color="danger">
            Reset
          </va-button>
        </div>
      </div>
    </div>
  </section>
</template>
