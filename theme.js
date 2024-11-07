/* theme.js */
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.theme = localStorage.getItem('theme');
    
    this.init();
  }

  init() {
    // Инициализация начальной темы
    if (this.theme) {
      this.applyTheme(this.theme);
    } else {
      this.setTheme(this.darkModeMediaQuery.matches ? 'dark' : 'light');
    }

    // Установка обработчиков событий
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
    this.darkModeMediaQuery.addEventListener('change', (e) => this.handleSystemThemeChange(e));
  }

  applyTheme(theme) {
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
    this.themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
  }

  setTheme(theme) {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  handleSystemThemeChange(e) {
    if (!this.theme) {
      this.setTheme(e.matches ? 'dark' : 'light');
    }
  }
}

// Инициализация менеджера тем при загрузке страницы
document.addEventListener('DOMContentLoaded', () => new ThemeManager());