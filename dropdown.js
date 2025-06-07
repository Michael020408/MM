// dropdown.js

// full list of MoodMap’s base emotions
const baseEmotions = [
  { value: 'joy',           label: 'Joy' },
  { value: 'trust',         label: 'Trust' },
  { value: 'fear',          label: 'Fear' },
  { value: 'sadness',       label: 'Sadness' },
  { value: 'disgust',       label: 'Disgust' },
  { value: 'anger',         label: 'Anger' },
  { value: 'surprise',      label: 'Surprise' },
  { value: 'anticipation',  label: 'Anticipation' }
];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown').forEach(drop => {
    const select = drop.querySelector('select');
    const list   = drop.querySelector('.dropdown-list');
    const header = drop.querySelector('.dropdown-header');
    const label  = drop.querySelector('.dropdown-selected');

    // 1. Populate both the hidden <select> and the visible <ul>
    baseEmotions.forEach(em => {
      // a) <option> for the select
      const opt = document.createElement('option');
      opt.value       = em.value;
      opt.textContent = em.label;
      select.appendChild(opt);

      // b) <li> for the custom dropdown
      const li = document.createElement('li');
      li.className           = 'dropdown-item';
      li.dataset.value       = em.value;
      li.textContent         = em.label;
      list.appendChild(li);
    });

    // 2. Toggle open/close when clicking the header
    header.addEventListener('click', e => {
      e.stopPropagation();
      // close any other open dropdown
      document.querySelectorAll('.dropdown.open')
              .forEach(d => d !== drop && d.classList.remove('open'));
      drop.classList.toggle('open');
    });

    // 3. When you click a <li>, set the <select> value + update the label
    list.addEventListener('click', e => {
      if (!e.target.matches('.dropdown-item')) return;
      const value = e.target.dataset.value;
      const text  = e.target.textContent;
      select.value = value;
      label.textContent = text;
      drop.classList.remove('open');
    });
  });

  // 4. Anywhere else you click, close all dropdowns
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open')
            .forEach(d => d.classList.remove('open'));
  });
});
