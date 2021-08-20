import ObjectLiteral from '../../types/ObjectLiteral';
import merge from './merge';

function setProperty(object: ObjectLiteral | unknown, path: string, value: unknown): ObjectLiteral | unknown {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const result = path.split('.').reduceRight<ObjectLiteral>((acc, key) => ({
        [key]: acc,
    }), value as any);
    return merge(object as ObjectLiteral, result);
}

export default setProperty;
