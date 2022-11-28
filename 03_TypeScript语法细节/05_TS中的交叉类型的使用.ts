//交叉类型：两种或多种类型要同时满足
type NuwType = number & string   // 没有意义
 
interface IKun { 
  name: string
  age: number
}

interface ICoder {
  name: string
  coding: () => void
}

const info: IKun & ICoder = {
  name: 'why',
  age: 18,
  coding: function() {
    console.log('coding');
    
  }
}