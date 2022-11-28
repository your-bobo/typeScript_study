//1.typeof 使用最多
function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.length);
    
  } else {
    console.log(id);
    
  }
}


//2.===/ != 方向的类型判断
type Direction = 'left' | 'right' | 'up' | 'down' 
function switchDirection(direction: Direction) {
  if (direction === 'left') {
    console.log('左');
    
  } else if (direction === 'right') {
    console.log('右');
    
  } else if (direction === 'up') {
    console.log('上');
    
  } else if (direction === 'down') {
    console.log('下');
    
  }
}

//3.instanceof: 传入一个日期，打印日期
function printDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.getTime());
    
  } else {
    console.log(date);
    
  }
}

//4.in:判断是否有某一个属性
interface ISwim {
  swim: () => void
}

interface IRun {
  run: () => void
}

function move(animal:ISwim | IRun) {
  if ('swim' in animal) {
    animal.swim()
  } else {
    animal.run()
  }
}