import ButtonType from '../../components/button/buttonType';

type ProfileInputType = {
    inputs?: {
        [key:string]: {
            label: string,
            value: string | number,
            name?: string,
            type?: string,
            readonly?: boolean,
            src?: string,
        }
    },
    controls? : ButtonType []
};

export default ProfileInputType;
