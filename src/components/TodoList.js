

function TodoList(props) {

    console.log(props.foo)
    const { list = [] } = props // 解构list key

    return (
        <div>
            <p>TodoList 组件</p>

            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.txt}</li>
                ))}
            </ul>

        </div>
    )
}

export default TodoList