<script setup lang="ts">
import { onMounted, inject, ref, computed, watch, unref } from 'vue';
import { forOptionActionKey, Option } from './TopRightDragSelectCommon';

const props = defineProps({
  value: {
    required: true,
    type: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  selectedClass: {
    type: String,
    default: '',
  },
});

const topRightDragSelectOptionRef = ref<HTMLElement>();

const option = computed<Option>(() => ({
  dom: topRightDragSelectOptionRef.value as HTMLElement,
  value: props.value,
  disabled: props.disabled,
}));

const dragSelectAction = inject(forOptionActionKey);

const isSelected = computed(() => {
  return !!dragSelectAction?.isSelected(option.value);
});

const optionClass = computed(() => ({
  'top-right-drag-select-option': true,
  'top-right-drag-select-option--selected': isSelected.value,
  'top-right-drag-select-option--disabled': props.disabled,
  ...(dragSelectAction ? { [unref(dragSelectAction.selectedOptionClass)]: isSelected.value } : {}),
  [props.selectedClass]: isSelected.value,
}));

const onClick = () => {
  dragSelectAction?.onClick(option.value);
};

const onPointerDown = () => {
  dragSelectAction?.onPointerDown();
};

onMounted(() => {
  const stop = watch(
    () => props.disabled,
    (disabled) => {
      if (disabled) {
        dragSelectAction?.delete(option);
      } else {
        dragSelectAction?.add(option);
      }
    },
    {
      immediate: true,
    }
  );

  return () => {
    stop();
    dragSelectAction?.delete(option);
  };
});
</script>

<template>
  <div ref="topRightDragSelectOptionRef" :class="optionClass" @click="onClick" @pointerdown="onPointerDown">
    <slot />
  </div>
</template>

<style></style>
