<script lang="ts">
import TopLeft from "./windowPanels/TopLeft/TopLeft.vue";
import LeftMost from "./windowPanels/LeftMost/LeftMost.vue";
import RightMost from "./windowPanels/RightMost/RightMost.vue";
import TopRight from "./windowPanels/TopRight/TopRight.vue";
import BottomLeft from "./windowPanels/BottomLeft/BottomLeft.vue";
import BottomRight from "./windowPanels/BottomRight/BottomRight.vue";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Dashboard",
  setup() {
    const topLeft = reactive({
      selections: [],
      enabled: false,
    })
    const leftMost = reactive({
      selections: [],
      enabled: false,
    })
    const rightMost = reactive({
      selections: [],
      enabled: false,
    })
    const topRight = reactive({
      selections: [],
      enabled: false,
    })
    const bottomLeft = reactive({
      selections: [],
      enabled: false,
    })
    const bottomRight = reactive({
      selections: [],
      enabled: false,
    })
    return {
      topLeft, leftMost, rightMost, topRight, bottomLeft, bottomRight
    }
  },
  components: {
    TopLeft,
    LeftMost,
    RightMost,
    TopRight,
    BottomLeft,
    BottomRight,
  },
  data() {
    return {
      allSelections: {
        topLeft: [],
        leftMost: [],
        rightMost: [],
        topRight: [],
        bottomLeft: [],
        bottomRight: [],
      }
    }
  },
  methods: {
    okTopLeftHandler(selections: []) {
      this.topLeft.enabled = false;
      this.topLeft.selections = selections;
      this.allSelections["topLeft"] = selections;
    },
    cancelTopLeftHandler() {
      this.topLeft.enabled = false;
    },
    okLeftMostHandler(selections: []) {
      this.leftMost.enabled = false;
      this.leftMost.selections = selections;
      this.allSelections["leftMost"] = selections;
    },
    cancelLeftMostHandler() {
      this.leftMost.enabled = false;
    },
    okRightMostHandler(selections: []) {
      this.rightMost.enabled = false;
      this.rightMost.selections = selections
      this.allSelections["rightMost"] = selections;
    },
    cancelRightMostHandler() {
      this.rightMost.enabled = false
    },
    okTopRightHandler(selections: []) {
      this.topRight.enabled = false
      this.topRight.selections = selections
      this.allSelections["topRight"] = selections;
    },
    cancelTopRightHandler() {
      this.topRight.enabled = false
    },
    okBottomLeftHandler(selections: []) {
      this.bottomLeft.enabled = false
      this.bottomLeft.selections = selections
      this.allSelections["bottomLeft"] = selections;
    },
    cancelBottomLeftHandler() {
      this.bottomLeft.enabled = false
    },
    okBottomRightHandler(selections: []) {
      this.bottomRight.enabled = false
      this.bottomRight.selections = selections
      this.allSelections["bottomRight"] = selections;
    },
    cancelBottomRightHandler() {
      this.bottomRight.enabled = false
    },
  },
})
</script>
<template>
  <div class="panels-wrapper">
    <va-button class="panel-1" color="info" @click="topLeft.enabled = !topLeft.enabled">
      Top left
    </va-button>
    <va-button class="panel-2" color="info" @click="leftMost.enabled = !leftMost.enabled">
      Left Most
    </va-button>
    <va-button class="panel-3" color="info" @click="rightMost.enabled = !rightMost.enabled">
      Right Most
    </va-button>
    <va-button class="panel-4" color="info" @click="topRight.enabled = !topRight.enabled">
      Top right
    </va-button>
    <va-button class="panel-5" color="info" @click="bottomLeft.enabled = !bottomLeft.enabled">
      Bottom left
    </va-button>
    <va-button class="panel-6 hidden">
      SHOULD NOT BE DISPLAYED
    </va-button>
    <va-button class="panel-7 hidden">
      SHOULD NOT BE DISPLAYED
    </va-button>
    <va-button class="panel-8" color="info" @click="bottomRight.enabled = !bottomRight.enabled">
      Bottom right
    </va-button>
    <TopLeft v-model:selections="topLeft.selections" v-model:enabled="topLeft.enabled" v-on:ok="okTopLeftHandler" v-on:cancel="cancelTopLeftHandler" />
    <LeftMost v-model:selections="leftMost.selections" v-model:enabled="leftMost.enabled" v-on:ok="okLeftMostHandler" v-on:cancel="cancelLeftMostHandler" />
    <RightMost v-model:selections="rightMost.selections" v-model:enabled="rightMost.enabled" v-on:ok="okRightMostHandler" v-on:cancel="cancelRightMostHandler" />
    <TopRight v-model:selections="topRight.selections" v-model:enabled="topRight.enabled" v-on:ok="okTopRightHandler" v-on:cancel="cancelTopRightHandler" />
    <BottomLeft v-model:selections="bottomLeft.selections" v-model:enabled="bottomLeft.enabled" v-on:ok="okBottomLeftHandler" v-on:cancel="cancelBottomLeftHandler" />
    <BottomRight v-model:selections="bottomRight.selections" v-model:enabled="bottomRight.enabled" v-on:ok="okBottomRightHandler" v-on:cancel="cancelBottomRightHandler" />
    <p>All selection is {{ [...topLeft.selections, ...leftMost.selections, ...rightMost.selections, ...topRight.selections, ...bottomLeft.selections, ...bottomRight.selections] }}</p>
  </div>
</template>
<style scoped>
  .panels-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    grid-template-areas:
      "panel-1 panel-2 panel-3 panel-4"
      "panel-5 panel-6 panel-7 panel-8";
  }
  .hidden {
    display: none;
  }
  .panel-5 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .panel-8 {
    grid-column: 4 / 5;
    grid-row: 2 / 3;
  }
  .panel-1, .panel-2, .panel-3, .panel-4, .panel-5, .panel-8 {
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    justify-content: center;
  }

</style>
