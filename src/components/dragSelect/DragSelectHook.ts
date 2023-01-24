import { watch, ref, unref } from 'vue';
import { Option } from './DragSelectCommon';
import { useDragRect } from './hooks/useDragRect';
import useAutoScrollByPoint from './hooks/useAutoScrollByPoint';
import { MaybeNullableRef, MaybeRef, Position } from './typings/internal';
import { rectIsIntersect } from './utils/rectIsIntersect';

interface UseDragToSelectConfig {
  contentRef: MaybeNullableRef<HTMLElement>;
  containerRef: MaybeNullableRef<HTMLElement>;
  options: Set<Option>;
  onChange: (selectedOptions: Set<unknown>) => void;
  draggableOnOption: MaybeRef<boolean>;
  disabled: MaybeRef<boolean>;
  consumePointerDownedOnOption: () => boolean;
}

export function useDragToSelect({
  contentRef,
  containerRef,
  options,
  onChange,
  draggableOnOption,
  disabled,
  consumePointerDownedOnOption,
}: UseDragToSelectConfig) {
  const pointPosition = ref<Position>([0, 0]);
  const dragged = ref(false);
  const {
    rect: areaRect,
    style: areaStyle,
    isDragging,
    stop,
  } = useDragRect(contentRef, {
    disabled,
    onStart(e) {
      dragged.value = false;
      if (!unref(draggableOnOption) && consumePointerDownedOnOption()) {
        return false;
      }
      pointPosition.value = [e.clientX, e.clientY];
    },
    onMove(e) {
      dragged.value = true;
      // cursor may be not moved
      if (e.clientX !== pointPosition.value[0] || e.clientY !== pointPosition.value[1]) {
        pointPosition.value = [e.clientX, e.clientY];
      }
    },
  });

  useAutoScrollByPoint(containerRef, isDragging, pointPosition);

  watch(areaRect, () => {
    const newSelectedOptions = new Set();
    if (!areaRect.value) return;
    for (const { dom, value, disabled } of options) {
      if (
        disabled ||
        rectIsIntersect(areaRect.value, {
          left: dom.offsetLeft,
          top: dom.offsetTop,
          width: dom.clientWidth,
          height: dom.clientHeight,
        })
      ) {
        newSelectedOptions.add(value);
      }
    }
    onChange(newSelectedOptions);
  });

  return { dragged, isDragging, areaStyle, stop };
}

interface UseClickToSelectConfig {
  onChange: (selectedOptions: Set<unknown>) => void;
  isDisableClick: () => boolean;
}

export function useClickToSelect({ onChange, isDisableClick }: UseClickToSelectConfig) {
  const onClickToSelect = (option: Option) => {
    if (isDisableClick()) return;

    const newSelectedOptions = new Set([option.value]);
    onChange(newSelectedOptions);
  };

  // const onHold

  return onClickToSelect;
}

// export a function on holding key to select
interface UseHoldKeyToSelectConfig {
  onChange: (selectedOptions: Set<unknown>) => void;
}

export function useHoldKeyToSelect({ onChange }: UseHoldKeyToSelectConfig) {
  const onCommandPress = ref(false);
  const onCommandRelease = ref(false);

  const isHoldingCommand = computed(() => {
    window.onkeydown = (e) => {
      onCommandPress.value = e.key === 'Meta';
      onCommandRelease.value = false;
    };
    window.onkeyup = (e) => {
      onCommandRelease.value = e.key === 'Meta';
      onCommandPress.value = false;
    };
    if (onCommandPress.value && !onCommandRelease.value) {
      return true;
    }
    else {
      return false;
    }
  });

  const currentSelected = computed<Set<unknown>>((option: Option) => {
    const newSelectedOptions = new Set();

    return newSelectedOptions;
  });
  const temp = watch(currentSelected, () => {
    console.log('currentSelected', currentSelected.value);
    onChange(currentSelected.value);
  });
  return temp;
}
