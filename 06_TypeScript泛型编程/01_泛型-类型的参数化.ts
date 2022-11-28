// 定义函数：将传入的内容返回
function bar<Type>(arg: Type): Type {
  return arg
}

//完整写法
const res1 = bar<number>(123)
const res2 = bar<string>('abc')
const res3 = bar<{name: string}>({ name: 'bobo' })

//省略写法
const res4 = bar('bobo')
const res5 = bar(3131)