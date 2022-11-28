//元组: useState函数
function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState
  function setState(newState: Type) {
    state = newState
  }
  return [state, setState]
}

//初始化 count
const [count, setCount] = useState(100)
console.log([count, setCount]);

const [message, setMessage] = useState('bobo')
const [banners, setBanner] = useState<any[]>([])