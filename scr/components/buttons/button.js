import styles from "../../../styles/Button.module.css"
function Button(props) {
    return (
        <div>
            <button onClick={props.onClick}> {props.texto}</button>
        </div>
    )
}