import ObjectLiteral from '../../types/ObjectLiteral';

type ButtonType = {
    className?: string,
    children?: ObjectLiteral,
    label?: string,
    type?: string,
    iconAfter?: boolean,
};

export default ButtonType;
