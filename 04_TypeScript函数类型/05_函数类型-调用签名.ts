// 1.函数表达式
type BarType = (num1: number) => number

const bar: BarType = (num1: number): number => {
  return num1
}
bar(123)

// 2.函数的调用签名（从对象的角度来看待这个函数，也可以有其他属性）
interface IBar {
  name: string,
  age: number,
  //函数可以调用：函数调用签名
  (num1: number): number
}

const bar1: IBar = (num1: number): number => {
  return num1
}

bar1.name = 'aaa'
bar1.age = 18
bar1(123)

export {}

