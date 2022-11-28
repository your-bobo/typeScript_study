enum Direction {
  LEFT,
  RIGHT
}

const d1: Direction = Direction.LEFT

function turnDirection(direction: Direction) {
  
  switch (direction) {
    case Direction.LEFT:
      console.log('left');
      
      break;
  
    default:
      break;
  }
}

turnDirection(d1)