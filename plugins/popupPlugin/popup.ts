import { createApp, ref } from 'vue';
import PopupComponent from './popupView.vue';

export default {
  install: (app) => {
    const popupRef = ref(null);

    const showPopup = (event, text, imageUrl, x, y, width, height) => {
      const popupInstance = createApp(PopupComponent, {
        text,
        imageUrl,
        x,
        y,
        width,
        height
      });

      const popupDiv = document.createElement('div');
      document.body.appendChild(popupDiv);
      popupInstance.mount(popupDiv);

      const rect = event.target.getBoundingClientRect();
      const popupHeight = popupDiv.offsetHeight;
      const popupWidth = popupDiv.offsetWidth;
      popupRef.value = {
        instance: popupInstance,
        div: popupDiv,
        x: rect.left + rect.width / 2 - popupWidth / 2,
        y: rect.top - popupHeight - 10,
        width,
        height,
      };
    };

    const hidePopup = () => {
      if (popupRef.value) {
        popupRef.value.instance.unmount();
        popupRef.value.div.remove();
        popupRef.value = null;
      }
    };
    app.provide('usePopup', {
      showPopup,
      hidePopup,
    });
  },
};
