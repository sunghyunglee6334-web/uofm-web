document.querySelectorAll('.nav-item').forEach(item => {
  const submenu = item.querySelector('.sub-menu');

  item.addEventListener('click' , (e) => {
    const isOpen = submenu.classList.contains('open');

    document.querySelectorAll('.sub-menu.open').forEach(menu => {
      menu.classList.remove('open');
    });

    if (!isOpen) {
      submenu.classList.add('open');
    }

    e.stopPropagation();
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.sub-menu.open').forEach(menu => {
    menu.classList.remove('open');
  });
});



document.querySelectorAll('.sub-menu > div').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();

    document.getElementById('modalImg').src = item.dataset.img;
    document.getElementById('modalTitle').textContent = item.dataset.title;
    document.getElementById('modalDesc').textContent = item.dataset.desc;

    document.getElementById('modalOverlay').classList.add('open');
  });
});

document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('modalOverlay').classList.remove('open');
});

document.getElementById('modalOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'modalOverlay') {
    document.getElementById('modalOverlay').classList.remove('open');
  }
});



const searchBtn = document.querySelector('.search button');

searchBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  document.getElementById('modalImg').src = searchBtn.dataset.img;
  document.getElementById('modalTitle').textContent = searchBtn.dataset.title;
  document.getElementById('modalDesc').textContent = searchBtn.dataset.desc;

  document.getElementById('modalOverlay').classList.add('open');
});

searchBtn.addEventListener('mouseenter', () => {
  searchBtn.classList.add('hovered');
});

searchBtn.addEventListener('mouseleave', () => {
  searchBtn.classList.remove('hovered');
});



document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});

document.querySelectorAll('.sub-menu > div').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});



document.querySelectorAll('.imgs').forEach(item => {
  item.addEventListener('click', () => {
    window.open(item.dataset.url, '_blank');
  });

  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});



document.querySelectorAll('.img').forEach(item => {
  item.addEventListener('click', () => {
    window.open(item.dataset.url, '_blank');
  });

  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });

  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});
