const todoKeys = "reactTodo"
export const getLocalStorageData = () =>{
    const rawTodos = localStorage.getItem(todoKeys)
    if(!rawTodos) return [];
    return JSON.parse(rawTodos)

}

export const setLocalStorageData = (task) =>{
 // create a local storgae 
 return localStorage.setItem(todoKeys , JSON.stringify(task));
}