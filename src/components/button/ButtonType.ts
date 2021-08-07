import ObjectType from '../../types/ObjectType';

type ButtonType = {
    className?: string,
    icon?: {
        id: string
    },
    label?: string,
    events?: ObjectType,
    type?: string,
};

export default ButtonType;
