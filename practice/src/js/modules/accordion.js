export const accordion = () => {
  const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const accordionContent = trigger.nextElementSibling,
        isHidden = accordionContent.classList.contains('hidden');

      if(!isHidden) {
        accordionContent.classList.add('hidden');
      } else {
        accordionContent.classList.remove('hidden');
      }
    });
  });
};
