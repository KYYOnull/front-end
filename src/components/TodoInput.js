

import { useState } from 'react'
// React 使用 useState 定义 数据和 setXxx 方法
// React 修改数据不是响应式的，setXxx 修改，是命令式的

// 组件 props是属性也是事件
function TodoInput(props) {

    // 约定这个属性key 
    // val则是app.js中的函数
    const { addTodo } = props // 解构得到 printAdd

    // 组件事件和属性一样，函数的参数，执行事件就是执行函数
    function addTodoHandler() {
        addTodo('some txt'); // 执行事件 printAdd ，传入参数
    }

    // 处理值类型
    const [cnt, setCnt] = useState(0)
    function increase() {
        setCnt(cnt + 1) 
        // 不能写 count++ ，必须执行 setCount，并传入最新的值
    }

    return (
        <div>
            {/* 何时触发事件 */}
            <p onClick={addTodoHandler}>TodoInput 组件</p>

            <button onClick={increase}>{cnt}</button>
        </div>
    )
}

export default TodoInput