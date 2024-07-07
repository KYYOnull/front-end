import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Effect from './components/EffectTest.js'
import { useState, useEffect } from 'react'
// React 使用 useEffect 来处理副作用，包括组件初次渲染相关的


// 用一个 JS 函数定义组件  输入数据，返回 UI
function App() {

  useEffect(() => {
    document.title = '副作用 修改title'
  }) // 这样App() 就不再是纯函数

  function printAdd(t) {
    console.log('addTodo: ', t)
    const newTodo = { id: lst.length + 1, txt: t } // neo item
    setLst([...lst, newTodo]) // 修改lst
    // 不能直接修改 list 而是要调用 setList 函数
  }

  const [lst, setLst] = useState([
    { id: 1, txt: 'todo 1' },
    { id: 2, txt: 'todo 2' },
    { id: 3, txt: 'todo 3' },
  ])

  const infoRaw = { name: '双越老师' }
  const [info, setInfo] = useState(infoRaw)
  console.log(info === infoRaw) // true



  return (
    // 组件函数会返回一段 JSX 代码
    // JSX 语法，类似于 HTML 
    <div>
      <p>App 组件</p>

      {/* {xxx} 里面是 JS 的变量或者表达式
      可实现一切动态功能，包括判断和循环 */}
      {/* JSX 中 {x} 是动态的， "x" 是静态的，一眼识别 */}

      <TodoInput addTodo={printAdd} />
      {/* key:val addTodo函数在该组件中定义 参数为根组件函数add */}

      {/* 条件渲染 */}
      {lst.length > 0 && <TodoList foo="hello foo" list={lst} />}
      {/* 组件属性 就是函数参数 */}


      <Effect/>


    </div>
  )
}

export default App
