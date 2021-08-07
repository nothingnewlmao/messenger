type InputType = {
    label: string,
    value?: string | number | boolean,
    name? : string,
    type?: string,
    readonly?: boolean,
    className?: string | string[],
    validation?: string[],
};

export default InputType;
