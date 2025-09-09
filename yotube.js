document.querySelectorAll('.yt-playlist-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.getAttribute('data-url');
    window.open(url, '_blank');
  });
});

