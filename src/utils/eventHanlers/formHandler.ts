const inputsValidation = (event: Event & { target: Element }) => {
    event.preventDefault();
    const {target} = event;
    const form = target.closest('form');
    const inputs = [...form.querySelectorAll('input')];
    const formJson = inputs
        .reduce((json: {[key: string]: string|number}, {name, value}) => {
            json[name] = value;
            return json;
        },
        {});
    console.log(formJson);
};

const emitInputsValidation = (event: Event & { target: Element }) => {
    event.preventDefault();
    const validateEvent = new Event('validate');
    const {target} = event;
    const form = target.closest('form');
    const inputs = [...form.querySelectorAll('input')];
    inputs.forEach(input => {
        input.dispatchEvent(validateEvent);
    });
};

const formHandler = (event: Event & { target: Element }) => {
    inputsValidation(event);
    emitInputsValidation(event);
};

export default formHandler;
