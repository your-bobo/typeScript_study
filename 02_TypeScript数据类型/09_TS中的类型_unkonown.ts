let foo: unknown = 'abc'
foo = 124


//unknown类型默认情况下在上面进行任意的操作都是违法的
//要求必须进行有类型的校验（缩小），才能根据缩小之后的类型进行对应的操作
if (typeof foo === 'string') {
  foo.split('')
}

export {}