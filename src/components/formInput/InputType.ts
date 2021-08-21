type InputType = {
    label?: string,
    value?: string | number | boolean,
    name? : string,
    type?: string,
    readonly?: boolean,
    className?: string,
    error?: string,
    accept?: string[],
};

export default InputType;
