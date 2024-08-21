export const modal = () => {
  const modal = document.querySelector('[data-modal]'),
    openModal = document.querySelector('[data-modal-open]'),
    closeModal = document.querySelector('[data-modal-close]');

  document.addEventListener('click', (e) => {
    const { target } = e;
    if(!target) return;

    if(target == openModal) {
      modal.showModal();
    } else if (target === modal || target === closeModal) {
      modal.close();
    }
  });
};
