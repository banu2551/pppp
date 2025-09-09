// สร้างดาวระยิบระยับ
const starsContainer = document.querySelector('.stars');

if (starsContainer) {
  for (let i = 0; i < 150; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const topPos = Math.random() * 100;
    const leftPos = Math.random() * 100;

    star.style.top = `${topPos}%`;
    star.style.left = `${leftPos}%`;
    star.dataset.top = topPos;
    star.dataset.left = leftPos;

    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;

    starsContainer.appendChild(star);
  }

  // เคลื่อนที่แบบนุ่ม
  setInterval(() => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      const moveX = (Math.random() - 0.5) * 2;
      const moveY = (Math.random() - 0.5) * 2;

      let currentTop = parseFloat(star.dataset.top);
      let currentLeft = parseFloat(star.dataset.left);

      currentTop = Math.min(Math.max(currentTop + moveY, 0), 100);
      currentLeft = Math.min(Math.max(currentLeft + moveX, 0), 100);

      star.dataset.top = currentTop;
      star.dataset.left = currentLeft;

      star.style.top = `${currentTop}%`;
      star.style.left = `${currentLeft}%`;
    });
  }, 2000);
}

// ไฮไลต์เมนูปัจจุบัน
let currentPage = window.location.pathname.split('/').pop();
if (currentPage === '' || currentPage === '/') {
  currentPage = 'myself.html';
}

const menuItems = document.querySelectorAll('.menu-item');
if (menuItems.length > 0) {
  menuItems.forEach(item => {
    if (item.getAttribute('href') === currentPage) {
      item.classList.add('active');
    }
  });
}