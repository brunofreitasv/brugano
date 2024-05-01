import './TextBox.css'

export const TextBox = (props) => {
    const placeholder = `${props.placeholder}...`

    const userTyping = (event) => {
        props.userTyping(event.target.value)
    }

    return (
        <div className="text-box">
            <label>{props.label}</label>
            <input onChange={userTyping} value={props.value} required={props.required} placeholder={placeholder} />
        </div>
    )
}