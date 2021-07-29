const collectFormFields = (event): void => {
    event.preventDefault();
    const {target} = event;
    const form = target.closest('form');
    const inputs = [...form.querySelectorAll('input')];
    const formJson = inputs
        .reduce((json, {name, value}) => {
            json[name] = value;
            return json;
        },
        {});
    console.log(formJson);
};

export default collectFormFields;
