//对象类型和函数类型结合使用
type PointType = {
  x: number,
  y: number,
  z?: number   //可选类型
}

function printCpprdinate(point: PointType) {
  console.log('x坐标', point.x);
  console.log('x坐标', point.y);
}

printCpprdinate({ x: 20, y: 30 })

export {}