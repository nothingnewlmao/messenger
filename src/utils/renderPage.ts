export default function renderPage(page: { element: HTMLElement }): void {
    const target = document.querySelector('#root');
    target.append(page.element);
}
