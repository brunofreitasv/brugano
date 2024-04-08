import './TextBox.css'

export const TextBox = (props) => {

    const placeholder = `${props.placeholder}...`

    return (
        <div className="text-box">
            <label>{props.label}</label>
            <input placeholder={placeholder} />
        </div>
    )
}