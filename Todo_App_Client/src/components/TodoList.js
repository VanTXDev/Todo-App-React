import TodoItem from "./TodoItems";
import "./public/TodoList.css";

const listUserName = ['Dady', 'Dad', 'father', 'Son', 'brother'];

function TodoList() {
    return(
        <div className="TodoLists">
            {
                listUserName.map((item) => 
                    <TodoItem userName={item} />
                )
            }
        </div>
    );
}

export default TodoList;