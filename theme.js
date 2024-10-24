/* theme.js */

(function() {
    const themeToggle = document.getElementById('theme-toggle');
  
    function applyTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
      } else {
        document.documentElement.classList.remove('dark-mode');
        themeToggle.textContent = '☀️';
      }
    }
  
    function setTheme(theme) {
      localStorage.setItem('theme', theme);
      applyTheme(theme);
    }
  
    // Обработчик события для переключателя темы
    themeToggle.addEventListener('click', () => {
      const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
      setTheme(currentTheme);
    });
  
    // Начальная установка темы
    (function() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        applyTheme(savedTheme);
      } else {
        // Если тема не сохранена, используем системные настройки
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }
    })();
  
    // Слушаем изменения системной темы
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) { // Меняем тему только если пользователь не выбрал вручную
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  })();
  