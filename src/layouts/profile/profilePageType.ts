import ButtonType from '../../components/button/ButtonType';
import InputType from '../../components/formInput/InputType';

type ProfilePageType = {
    inputs: {
        [key: string]: InputType
    },
    controls: ButtonType[]
};

export default ProfilePageType;
