import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, index) => {
        return(
            <option key={index} style={{width: '100%', color: 'blue',fontWeight: 'bold', backgroundColor: 'violet', border: '2px solid red'}} value={el}>{el}</option>
        )
    }) : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        console.log(restProps)
        // onChange, onChangeOption
    }

    return (
        <select onChange={onChangeCallback} {...restProps} style={{marginRight: '15px',color: 'yellow', fontWeight: 'bold', padding: '10px', borderRadius: '10px', backgroundColor: 'blue'}}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
