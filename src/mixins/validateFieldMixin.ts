const validateFieldMixin = {
    validateField: event => {
        const REGEX: RegExp = /[<>\$\|\?&,]/g;
        const {target} = event;
        const {value} = target;
        if (value.match(REGEX)) {
            const errorEvent: Event = new Event('input-error');
            target.dispatchEvent(errorEvent);
            target.parentElement.classList.add('_error');
        } else {
            target.parentElement.classList.remove('_error');
        }
    },
};

export default validateFieldMixin;
