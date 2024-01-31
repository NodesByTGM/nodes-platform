
function Container({ children, className }: any) {
    return (
        <div className={`m-5 lg:m-[100px] ${className ?? ''}`}>{children}</div>
    )
}

export default Container