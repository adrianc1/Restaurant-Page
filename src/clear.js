export default function pageLoad() {
    const content = document.getElementById('content');
    const mainContent = document.querySelector('.main-content')
    if (mainContent) {
        content.textContent = ''
    }
}
