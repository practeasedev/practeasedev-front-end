import {ChangeEvent, FC} from 'react';

interface IRadioProps {
    value: string
    changeHandler: (event: ChangeEvent<HTMLInputElement>) => void
    checked:boolean
    label: string
    name: string
    labelSize?: 'small' | 'normal' | 'medium' | 'large'
    radioButtonSize?: 'small' | 'normal' | 'medium' | 'large'
    labelClass: any
    inputClass: any
}

const Radio:FC<IRadioProps> = (props) => {
    const {value, changeHandler, checked, label, name, radioButtonSize, labelSize, labelClass, inputClass} = props
    return (
        <div className="radio-group">
            <input
                type="radio"
                id={value}
                className={inputClass || `radio-${radioButtonSize}`}
                value={value}
                onChange={changeHandler}
                checked={checked || false}
                name={name}
            />
            <label
                htmlFor={value}
                className={labelClass || `radio-label-${labelSize}`}
            >
                {label}
            </label>
        </div>
    )
};

export default Radio;