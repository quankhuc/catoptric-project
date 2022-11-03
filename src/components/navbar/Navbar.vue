<template>
  <div class="app-layout__navbar">
    <va-navbar>
      <template #left>
        <div class="left">
          <va-icon-menu-collapsed
            :class="{ 'x-flip': isSidebarMinimized }"
            class="va-navbar__item"
            :color="colors.primary"
            @click="isSidebarMinimized = !isSidebarMinimized"
          />
          <router-link to="/">
            <catotropic-logo class="logo" />
          </router-link>
        </div>
      </template>
    </va-navbar>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useGlobalStore } from '../../store/global-store'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'
  import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'
  import CatotropicLogo from '../CatoptricLogo.vue'

  const GlobalStore = useGlobalStore()
  const { isSidebarMinimized } = storeToRefs(GlobalStore)
  const { getColors } = useColors()
  const colors = computed(() => getColors())
</script>

<style lang="scss" scoped>
 .va-navbar {
    box-shadow: var(--va-box-shadow);
    z-index: 2;
    @media screen and (max-width: 950px) {
      .left {
        width: 100%;
      }
    }
  }
  .left {
    display: flex;
    align-items: center;
    & > * {
      margin-right: 1.5rem;
    }
    & > *:last-child {
      margin-right: 0;
    }
  }
  .x-flip {
    transform: scaleX(-100%);
  }
</style>
