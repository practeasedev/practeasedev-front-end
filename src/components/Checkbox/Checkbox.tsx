import {ChangeEvent, FC} from 'react';

interface ICheckboxProps {
    label: string,
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    value: string,
    checked?: boolean
    disabled?:boolean
}

const Checkbox:FC<ICheckboxProps> = (props) => {
    const {label, changeHandler, value, checked, disabled} = props;
    return (
        <div className="checkbox-group">
            <input
                type="checkbox"
                id={value}
                className="checkbox"
                value={value}
                onChange={changeHandler}
                checked={checked || false}
                disabled={disabled || false}
            />
            <label
                htmlFor={value}
                className={`checkbox-label ${disabled ? 'checkbox-label-disabled' : ''}`}
            >
                {label}
            </label>
        </div>
    )
}   

export default Checkbox