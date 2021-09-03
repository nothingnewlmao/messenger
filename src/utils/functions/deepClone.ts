/* eslint-disable */

import ObjectLiteral from '../../types/ObjectLiteral';

export default function deepClone<T extends object = object>(obj: T) {
    return (function _cloneDeep(item: T): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
        // Handle:
        // * null
        // * undefined
        // * boolean
        // * number
        // * string
        // * symbol
        // * function
        if (item === null || typeof item !== 'object') {
            return item;
        }

        // Handle:
        // * Date
        if (item instanceof Date) {
            return new Date(item.valueOf());
        }

        // Handle:
        // * Array
        if (item instanceof Array) {
            const copy: any[] = [];

            item.forEach((_, i) => (copy[i] = _cloneDeep(item[i])));

            return copy;
        }

        // Handle:
        // * Set
        if (item instanceof Set) {
            const copy = new Set();

            item.forEach(v => copy.add(_cloneDeep(v)));

            return copy;
        }

        // Handle:
        // * Map
        if (item instanceof Map) {
            const copy = new Map();

            item.forEach((v, k) => copy.set(k, _cloneDeep(v)));

            return copy;
        }

        // Handle:
        // * Object
        if (item instanceof Object) {
            const copy: ObjectLiteral = {};

            // Handle:
            // * Object.symbol
            // @ts-ignore
            Object.getOwnPropertySymbols(item).forEach((s: symbol) => (copy[s] = _cloneDeep(item[s])));

            // Handle:
            // * Object.name (other)
            // @ts-ignore
            Object.keys(item).forEach((k: string) => (copy[k] = _cloneDeep(item[k])));

            return copy;
        }

        throw new Error(`Unable to copy object: ${item}`);
    })(obj);
}
