// 可选参数类型是什么？ number | undefined 联合类型
function foo(x: number, y?: number) {
  if (y !== undefined) {
    console.log(x + y)
    
  }
}

foo(10)
foo(10, 20)

export {}