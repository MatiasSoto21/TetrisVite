export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check we are tetromino
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2.check move inside game height look future
          !stage[y + player.pos.y + moveY] ||
          // 3.check move inside game width
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4.check that cell moving isnt clear
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 5. If everything above is false
  return false;
};
