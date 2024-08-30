export const accordion = () => {
  const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const accordionContent = trigger.nextElementSibling,
        isHidden = accordionContent.classList.contains('hidden');

      if(!isHidden) {
        accordionContent.classList.add('hidden');
        trigger.classList.remove('before:rotate-225');
        trigger.classList.add('before:rotate-45');
      } else {
        accordionContent.classList.remove('hidden');
        trigger.classList.remove('before:rotate-45');
        trigger.classList.add('before:rotate-225');
      }
    });
  });
};
