export const modalLegacy = () => {
  const modalSub = document.querySelector('[data-modal-sub]'),
  modalSubOverlay = document.querySelector('[data-modal-sub-overlay]'),
  modalSubContent = document.querySelector('[data-modal-sub-content]'),
  openModalSub = document.querySelector('[data-modal-sub-open]'),
  closeModalSub = document.querySelector('[data-modal-sub-close]'),
  open = () => {
    modalSub.classList.remove("hidden");
    modalSub.classList.add("block");
  },
  close = () => {
    modalSub.classList.remove("block");
    modalSub.classList.add("hidden");
  };

  openModalSub.addEventListener('click', open);
  closeModalSub.addEventListener('click', close);
  modalSubOverlay.addEventListener('click', close);
  modalSubContent.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
  });
};
