let playerX = 0;

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    playerX -= 10;
  } else if (event.code === 'ArrowRight') {
    playerX += 10;
  }
  player.style.left = playerX + 'px';
});
