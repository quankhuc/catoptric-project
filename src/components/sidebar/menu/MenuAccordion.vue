<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { INavigationRoute } from '../NavigationRoutes'
const props = withDefaults(
  defineProps<{
    items?: INavigationRoute[]
  }>(),
  {
    items: () => [],
  },
)
const accordionValue = ref<boolean[]>([])
onMounted(() => {
  accordionValue.value = props.items.map(item => isItemExpanded(item))
})

function isRouteActive(item: INavigationRoute) {
  const route = useRoute()
  return item.name === route.name
}

function isItemExpanded(item: INavigationRoute): boolean {
  if (!item.children)
    return false
  const isCurrentItemActive = isRouteActive(item)
  const isChildActive = !!item.children.find(child =>
    child.children ? isItemExpanded(child) : isRouteActive(child),
  )
  return isCurrentItemActive || isChildActive
}
</script>

<template>
  <va-accordion v-model="accordionValue" class="sidebar-accordion va-sidebar__menu__inner" multiply>
    <va-collapse v-for="(route, idx) in items" :key="idx">
      <template #header>
        <va-sidebar-item :active="isRouteActive(route)" :to="route.children ? undefined : { name: route.name }">
          <va-sidebar-item-content>
            <va-icon :name="route.meta.icon" />

            <va-sidebar-item-title class="flex justify-center">
              {{ route.displayName }}
            </va-sidebar-item-title>

            <va-icon v-if="route.children" :name="accordionValue[idx] ? 'expand_less' : 'expand_more'" />
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
      <template v-for="(child, index) in route.children" :key="index">
        <va-sidebar-item :id="index" :active="isRouteActive(child)" :to="{ name: child.name }">
          <va-sidebar-item-content>
            <div class="va-sidebar-item__icon" />
            <va-sidebar-item-title>
              {{ child.displayName }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-collapse>
  </va-accordion>
</template>
