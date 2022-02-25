import "./public/TodoItems.css";

function TodoItem(props) {
    return(
        <div className='TodoItems'>
            <h1 className="Title">{props.userName} Đẹp Trai!!!!</h1>
            <p className="Contents">Hello World!</p>
        </div>
    )
}

export default TodoItem;