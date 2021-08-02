export default function renderPage(page: {getContent: any}): void {
    const target = document.querySelector('#root');
    target.append(page.getContent());
}
