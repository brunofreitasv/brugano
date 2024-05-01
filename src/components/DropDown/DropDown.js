import './DropDown.css';

export const  DropDown = (props) => {
  return (
    <div className='drop-down'>
        <label>{props.label}</label>
        <select required={true} value={props.value} onChange={e => props.selectionChanged(e.target.value)}> 
            {props.items.map(i => 
            {
                return (
                    <option key={i}>{i}</option>
                );
            })}
        </select>
    </div>
  );
}