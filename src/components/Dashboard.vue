<script lang="ts">
import TopLeft from "./windowPanels/TopLeft/TopLeft.vue";
import LeftMost from "./windowPanels/LeftMost/LeftMost.vue";
import MiddleWindowPanel2 from "./windowPanels/MiddleWindowPanel2.vue";
import TopRightWindowPanel from "./windowPanels/TopRightWindowPanel.vue";
import BottomLeftWindowPanel from "./windowPanels/BottomLeftWindowPanel.vue"
import BottomRightWindowPanel from "./windowPanels/BottomRightWindowPanel.vue"
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
    const middleWindowPanelInfo2 = reactive({
      selections: [],
      enabled: false,
    })
    const topRightWindowPanelInfo = reactive({
      selections: [],
      enabled: false,
    })
    const bottomLeftWindowPanelInfo = reactive({
      selections: [],
      enabled: false,
    })
    const bottomRightWindowPanelInfo = reactive({
      selections: [],
      enabled: false,
    })
    return {
      topLeft, leftMost, middleWindowPanelInfo2, topRightWindowPanelInfo, bottomLeftWindowPanelInfo, bottomRightWindowPanelInfo
    }
  },
  components: {
    TopLeft,
    LeftMost,
    MiddleWindowPanel2,
    TopRightWindowPanel,
    BottomLeftWindowPanel,
    BottomRightWindowPanel,
  },
  data() {
    return {
      allSelections: {
        topLeft: [],
        leftMost: [],
        middle2: [],
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
    okMiddleHandler2(selections: []) {
      this.middleWindowPanelInfo2.enabled = false;
      this.middleWindowPanelInfo2.selections = selections
      this.allSelections["middle2"] = selections;
    },
    cancelMiddleHandler2() {
      this.middleWindowPanelInfo2.enabled = false
    },
    okTopRightHandler(selections: []) {
      this.topRightWindowPanelInfo.enabled = false
      this.topRightWindowPanelInfo.selections = selections
      this.allSelections["topRight"] = selections;
    },
    cancelTopRightHandler() {
      this.topRightWindowPanelInfo.enabled = false
    },
    okBottomLeftHandler(selections: []) {
      this.bottomLeftWindowPanelInfo.enabled = false
      this.bottomLeftWindowPanelInfo.selections = selections
      this.allSelections["bottomLeft"] = selections;
    },
    cancelBottomLeftHandler() {
      this.bottomLeftWindowPanelInfo.enabled = false
    },
    okBottomRightHandler(selections: []) {
      this.bottomRightWindowPanelInfo.enabled = false
      this.bottomRightWindowPanelInfo.selections = selections
      this.allSelections["bottomRight"] = selections;
    },
    cancelBottomRightHandler() {
      this.bottomRightWindowPanelInfo.enabled = false
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
    <va-button class="panel-3" color="info" @click="middleWindowPanelInfo2.enabled = !middleWindowPanelInfo2.enabled">
      Top middle window panel 2
    </va-button>
    <va-button class="panel-4" color="info" @click="topRightWindowPanelInfo.enabled = !topRightWindowPanelInfo.enabled">
      Top right window panel
    </va-button>
    <va-button class="panel-5" color="info" @click="bottomLeftWindowPanelInfo.enabled = !bottomLeftWindowPanelInfo.enabled">
      Bottom left window panel
    </va-button>
    <va-button class="panel-6 hidden">
      SHOULD NOT BE DISPLAYED
    </va-button>
    <va-button class="panel-7 hidden">
      SHOULD NOT BE DISPLAYED
    </va-button>
    <va-button class="panel-8" color="info" @click="bottomRightWindowPanelInfo.enabled = !bottomRightWindowPanelInfo.enabled">
      Bottom right window panel
    </va-button>
    <TopLeft v-model:selections="topLeft.selections" v-model:enabled="topLeft.enabled" v-on:ok="okTopLeftHandler" v-on:cancel="cancelTopLeftHandler" />
    <LeftMost v-model:selections="leftMost.selections" v-model:enabled="leftMost.enabled" v-on:ok="okLeftMostHandler" v-on:cancel="cancelLeftMostHandler" />
    <!-- <MiddleWindowPanel2 v-model:selections="middleWindowPanelInfo2.selections" v-model:enabled="middleWindowPanelInfo2.enabled" v-on:ok="okMiddleHandler2" v-on:cancel="cancelMiddleHandler2" />
    <TopRightWindowPanel v-model:selections="topRightWindowPanelInfo.selections" v-model:enabled="topRightWindowPanelInfo.enabled" v-on:ok="okTopRightHandler" v-on:cancel="cancelTopRightHandler" />
    <BottomLeftWindowPanel v-model:selections="bottomLeftWindowPanelInfo.selections" v-model:enabled="bottomLeftWindowPanelInfo.enabled" v-on:ok="okBottomLeftHandler" v-on:cancel="cancelBottomLeftHandler" />
    <BottomRightWindowPanel v-model:selections="bottomRightWindowPanelInfo.selections" v-model:enabled="bottomRightWindowPanelInfo.enabled" v-on:ok="okBottomRightHandler" v-on:cancel="cancelBottomRightHandler" /> --> -->
    <p>All selection is {{ [...topLeft.selections, ...leftMost.selections, ...middleWindowPanelInfo2.selections, ...topRightWindowPanelInfo.selections, ...bottomLeftWindowPanelInfo.selections, ...bottomRightWindowPanelInfo.selections] }}</p>
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
