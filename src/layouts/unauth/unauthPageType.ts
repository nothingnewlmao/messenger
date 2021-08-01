import InputType from '../../components/formInput/InputType';
import ButtonType from '../../components/button/ButtonType';

type UnauthPageType = {
    formTitle: string,
    children?: {
        fields?: InputType[],
        submitBtn?: ButtonType,
        altBtn?: ButtonType,
    },
};

export default UnauthPageType;
