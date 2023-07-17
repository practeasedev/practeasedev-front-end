import {ChangeEvent, FC} from 'react';

interface IRadioProps {
    value: string
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    checked:boolean
    label: string
    name: string
}

const Radio:FC<IRadioProps> = (props) => {
    const {value, changeHandler, checked, label, name} = props
    return (
        <div className="radio-group">
            <input
                type="radio"
                id={value}
                className="radio"
                value={value}
                onChange={changeHandler}
                checked={checked || false}
                name={name}
            />
            <label
                htmlFor={value}
                className="radio-label"
            >
                {label}
            </label>
        </div>
    )
};

export default Radio;