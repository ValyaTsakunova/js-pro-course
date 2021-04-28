import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, DELETE_TODO, DONE_TODO, UNDO_TODO } from '../constants'


const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || [],
}

export function reducer(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { id: uuidv4(), text: action.payload.text, status: false}]
            }
        case DELETE_TODO:
            return {
                ...state,
                    todos: state.todos.filter(todo => todo.id != action.payload.id)
            }
        case DONE_TODO:
            return {
                ...state,
                    todos: state.todos.map(todo => todo.id == action.payload.id ? {...todo, status: true} : todo)
            }
        case UNDO_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id == action.payload.id ? {...todo, status: false} : todo)
            }        

        default:
            return state
    }
}