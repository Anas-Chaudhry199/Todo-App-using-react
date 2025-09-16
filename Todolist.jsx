import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({data, onHandleDelete, checked, onHandleChecked }) => {
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "noChecklist"}>{data}</span>
            <button className="check-btn" onClick={()=> onHandleChecked(data)}><MdCheck /></button>
            <button className="delete-btn" onClick={() => onHandleDelete(data)}><MdDeleteForever /></button>

        </li>
    )
}