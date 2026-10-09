(() => {
    const key = 'beiwen-theme';
    let savedTheme = 'light';
    try {
        savedTheme = localStorage.getItem(key) === 'dark' ? 'dark' : 'light';
    } catch {
        // Browsers may disable local storage.
    }
    document.documentElement.dataset.theme = savedTheme;

    document.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('theme-toggle');
        if (!button) return;

        const updateButton = () => {
            const isDark = document.documentElement.dataset.theme === 'dark';
            button.textContent = isDark ? 'Light mode ◑' : 'Dark mode ◐';
            button.setAttribute('aria-pressed', String(isDark));
        };

        updateButton();
        button.addEventListener('click', () => {
            const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = nextTheme;
            try {
                localStorage.setItem(key, nextTheme);
            } catch {
                // The selected theme still applies for this page.
            }
            updateButton();
        });
    });
})();
