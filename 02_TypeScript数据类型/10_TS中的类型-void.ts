//1.在TS中如果某一个函数没有任何返回值，那么返回值的类型就是void类型
//2.如果返回值是void类型，那么我们也可以返回undefined

function sun(num1: number, num2: number): void {
  console.log(num1 + num2);
}

type FooType = () => void 
const foo: FooType = () => {}
 
export {}