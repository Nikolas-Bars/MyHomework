import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {

    const onChangeCallback = (el: string) => {
        onChangeOption && onChangeOption(el)

    }




    const mappedOptions: any[] = options ? options.map((o, i) => {

        return <label key={name + '-' + i}>
            <input type={'radio'} name={'radioGroup1'} checked={o === value}
                   onChange={()=>{onChangeCallback(o)}} />
            {o}
        </label>
    }) : []


    const mappedOptions2: any[] = options ? options.map((o, i) => {

        return <label key={name + '-' + i}>
            <input type={'radio'} name={'radioGroup2'}
                    />
            {o}
        </label>
    }) : []


    return (
        <>
            <div>
            {mappedOptions} - эти в связке с useState из HW7
        </div>
            <div>
            {mappedOptions2}
            </div>
        </>
    )
}

export default SuperRadio
