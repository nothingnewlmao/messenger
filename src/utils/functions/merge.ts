import ObjectLiteral from '../../types/ObjectLiteral';

function merge(lhs: ObjectLiteral, rhs: ObjectLiteral): ObjectLiteral {
    for (const p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p] as ObjectLiteral, rhs[p] as ObjectLiteral);
            } else {
                lhs[p] = rhs[p];
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

export default merge;
