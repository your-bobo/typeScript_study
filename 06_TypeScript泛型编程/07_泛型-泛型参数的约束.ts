//传入的key类型，obj当中key的其中之一
interface IKun {
  name: string
  age: number
}

type IKunKeys = keyof IKun  // name | age

function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const info = {
  name: 'bobo',
  age: 18,
  height: 1.78
}

const name = getObjectProperty(info, 'name')
// const address = getObjectProperty(info, 'address')

export {}