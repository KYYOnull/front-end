
import { useState, useEffect } from 'react'

function Effect() {

    const [page, setPage] = useState(0)
    const [keyword, setKeyword] = useState('')

    function fn(p, k) {
        console.log('发起 ajax 请求', p, k)
    } // 在 fn 函数定义 App组件函数执行完以后，还要做点啥
    useEffect(
        () => {
            fn(page, keyword)
            // useEffect 函数，return用于监听组件销毁
            return () => {
                console.log('组件销毁之前，解绑自定义事件')
            }
        }, // 副作用要执行的具体内容
        [page, keyword] // 依赖项数组
    )
    // 副作用执行时机就是两个
    // 组件初次渲染完成，执行副作用 
    // page 或 keyword 有变化，执行副作用

    // 受控组件处理表单项
    const [txt, setText] = useState('')
    function handleChangeText(ev) {
        // 在 input change 时 setText
        // 就是自己实现了 Vue v-model
        setText(ev.target.value) // 重写变量内容
        console.log(ev.target.value, txt);
    }

    return <div>

        <p>Effect 组件</p>
        <input value={txt} onChange={handleChangeText} />

        <button onClick={
            () => setPage(page + 1)}>页面++</button>
        <button onClick={
            () => setKeyword(keyword + 'x')}>关键字长度++</button>

    </div>
}

export default Effect