interface IKun<Type = string, Element = number> {
  name: Type,
  age: Element,
  slogan: Type
}

const kunkun: IKun<string, number> = {
  name: 'bobo',
  age: 18,
  slogan: 'haha'
}

const kunkun2: IKun = {
  name: 'bobo1',
  age: 19,
  slogan: 'hahahah'
}

export {}