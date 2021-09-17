import { reactive } from 'vue';

export function usePopup() {
  const state = reactive({
    open: false,
  });

  function togglePopup(open) {
    state.open = open;
  }

  function openPopup() {
    state.open = true;
    console.log('openPopup', state)
  }

  function onClose() {
    state.open = false;
  }

  return {
    state,
    togglePopup,
    onClose,
    openPopup,
  };
}
