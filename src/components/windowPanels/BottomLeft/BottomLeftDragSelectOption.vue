<script setup lang="ts">
import { onMounted, inject, ref, computed, watch, unref } from 'vue';
import { forOptionActionKey, Option } from './BottomLeftDragSelectCommon';

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

const bottomLeftDragSelectOptionRef = ref<HTMLElement>();

const option = computed<Option>(() => ({
  dom: bottomLeftDragSelectOptionRef.value as HTMLElement,
  value: props.value,
  disabled: props.disabled,
}));

const dragSelectAction = inject(forOptionActionKey);

const isSelected = computed(() => {
  return !!dragSelectAction?.isSelected(option.value);
});

const bottomLeftOptionClass = computed(() => ({
  'bottom-left-drag-select-option': true,
  'bottom-left-drag-select-option--selected': isSelected.value,
  'bottom-left-drag-select-option--disabled': props.disabled,
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
  <div ref="bottomLeftDragSelectOptionRef" :class="bottomLeftOptionClass" @click="onClick" @pointerdown="onPointerDown">
    <slot />
  </div>
</template>

<style></style>
