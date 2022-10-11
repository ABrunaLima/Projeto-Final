<<<<<<< HEAD
export function Botao({texto}) {
    return (
        <div>
            <button>{texto}</button>
=======
import styles from "../../../styles/Button.module.css"
function Button(props) {
    return (
        <div>
            <button onClick={props.onClick}> {props.texto}</button>
>>>>>>> 4754339a12ca5164899ce8629406713007aaa837
        </div>
    )
}