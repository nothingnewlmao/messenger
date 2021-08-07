import ObjectType from '../../types/ObjectType';

export default function renderPage(page: ObjectType): void {
    const target = document.querySelector('#root');
    target.append(page.getContent());
}
