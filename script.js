let playerX = 0;

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    playerX -= 10;
  } else if (event.code === 'ArrowRight') {
    playerX += 10;
  }
  player.style.left = playerX + 'px';
});

function checkCollision() {
  for (let i = 0; i < bullets.length; i++) {
    const bullet = bullets[i];
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j];
      if (bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth &&
          bullet.offsetLeft + bullet.offsetWidth > enemy.offsetLeft &&
          bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight &&
          bullet.offsetTop + bullet.offsetHeight > enemy.offsetTop) {
        game.removeChild(bullet);
        bullets.splice(i, 1);
        game.removeChild(enemy);
        enemies.splice(j, 1);
        break;
      }
    }
  }
}

setInterval(checkCollision, 10);
