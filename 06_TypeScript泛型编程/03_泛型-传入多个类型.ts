function foo<Type, Element>(arg1: Type, arg2: Element) {

}

foo(10, 20)
foo('aa', 41)
foo<string, { name: string }>('aa', { name: 'bobo' })

export {}