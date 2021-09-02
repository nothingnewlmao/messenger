export default function sanitizeInputValue(value: string) {
    const regexp = /<\/*script>/ig;
    return value.replace(regexp, '');
}
