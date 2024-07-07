

function Layout({ children }) {
    
    return <div>
        <Nav />  {/* 导航栏 */}
        <div>{children}</div>  {/* 子组件 */}
    </div>
}
