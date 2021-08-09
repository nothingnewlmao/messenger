import ObjectLiteral from '../../types/ObjectLiteral';

export default function renderPage(page: ObjectLiteral): void {
    const target = document.querySelector('#root');
    target.append(page.getContent());
}
