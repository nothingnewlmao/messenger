export default function renderPage(page): void {
    const target = document.querySelector('#root');
    target.append(page.getContent());
}
