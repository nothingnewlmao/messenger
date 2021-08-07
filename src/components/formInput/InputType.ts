type InputType = {
    label: string,
    value?: string | number | boolean,
    name? : string,
    type?: string,
    readonly?: boolean,
    className?: string,
    validation?: string[],
    error?: string,
};

export default InputType;
