# Kyo.css

is a universal CSS stylesheet that provides simple styling for HTML elements. It supports both light and dark themes with automatic detection and includes a theme switcher with preference saving.

# /basic

### Table of Contents

1. [Typography](#typography)
2. [Colors & Theming](#colors--theming)
3. [Components](#components)
4. [Layout & Utilities](#layout--utilities)
5. [Theme Manager](#theme-manager)

### Installation

1. Include the required CSS files:
```html
<link href="basic/font.css" rel="stylesheet">
<link href="basic/styles.css" rel="stylesheet">
<link href="basic/toggle.css" rel="stylesheet">
```

2. Add the theme manager script:
```html
<script src="theme.js"></script>
```

## Typography

### Font Family
The system uses `Fira Code` as its primary font, a monospace typeface that's particularly suitable for development-related interfaces.

### Headings
Available heading classes with their respective sizes:
- `.h1` - 2.5rem
- `.h2` - 2.0rem
- `.h3` - 1.75rem
- `.h4` - 1.5rem
- `.h5` - 1.25rem
- `.h6` - 1.0rem

Example:
```html
<h1 class="h1">Main Heading</h1>
<h2 class="h2">Subheading</h2>
```

### Text Utilities
- `.txt` - Basic text block with bottom margin
- `.txt-sm` - Small text (0.875rem)
- `.txt-lg` - Large text (1.125rem)
- `.txt-center` - Center-aligned text

## Colors & Theming

### CSS Variables
The system uses CSS custom properties for consistent theming:

#### Light Theme (Default)
```css
--c-bg: #ffffff;      /* Background */
--c-txt: #000000;    /* Text */
--c-pri: #0066cc;    /* Primary */
--c-sec: #333333;    /* Secondary */
--c-brd: #cccccc;    /* Border */
--c-btn: #e0e0e0;    /* Button */
--c-inp: #ffffff;    /* Input */
```

#### Dark Theme
```css
--c-bg: #121212;      /* Background */
--c-txt: #e0e0e0;    /* Text */
--c-pri: #bb86fc;    /* Primary */
--c-sec: #ffffff;    /* Secondary */
--c-brd: #333333;    /* Border */
--c-btn: #1f1f1f;    /* Button */
--c-inp: #1f1f1f;    /* Input */
```

## Components

### Buttons
Basic button styles are available through the `.btn` class:

```html
<!-- Default button -->
<button class="btn">Click me</button>

<!-- Primary button -->
<button class="btn btn-pri">Primary Action</button>
```

### Input Fields
Text input fields use the `.inp` class:

```html
<input type="text" class="inp" placeholder="Enter text...">
```

### File Upload
File upload component with preview support:

```html
<div class="upl">
  <input type="file" class="upl-input">
  <label class="upl-label">Choose file</label>
  <div class="upl-preview"></div>
</div>
```

### Code Display
Two options for displaying code:
- `.code` - Inline code
- `.code-block` - Block-level code

```html
<span class="code">inline code</span>
<pre class="code-block">
  Block of code
</pre>
```

### Loading Spinner
Animated loading indicator:
```html
<div class="spin"></div>
```

## Layout & Utilities

### Container
Use `.wrap` for a centered, max-width container:
```html
<div class="wrap">Content here</div>
```

### Spacing Utilities
Margin and padding classes:
- `.m` - Margin all sides
- `.mt` - Margin top
- `.mb` - Margin bottom
- `.ml` - Margin left
- `.mr` - Margin right
- `.mx` - Margin horizontal
- `.my` - Margin vertical
- `.m0` - No margin

Similar patterns for padding with `p` prefix.

### Flexbox Utilities
- `.flex` - Display flex
- `.flex-col` - Flex column
- `.items-center` - Align items center
- `.justify-center` - Justify content center
- `.flex-wrap` - Flex wrap
- `.flex-1` - Flex grow 1

### Grid Utilities
- `.grid` - Display grid
- `.gap-sm` - Small gap
- `.gap-md` - Medium gap

## Theme Manager

The Theme Manager provides automatic theme switching capabilities based on user preference and system settings.

### HTML Setup
Add the theme toggle button:
```html
<button id="theme-toggle" class="toggle">☀️</button>
```

### Features
- Persists theme preference in localStorage
- Responds to system theme changes
- Provides smooth transitions between themes
- Uses emoji indicators (☀️ for light, 🌙 for dark)

### JavaScript API
```javascript
// Initialize theme manager
const themeManager = new ThemeManager();

// Manually switch theme
themeManager.toggleTheme();

// Set specific theme
themeManager.setTheme('dark'); // or 'light'
```

### System Theme Detection
The Theme Manager automatically detects system theme preferences using the `prefers-color-scheme` media query:

```javascript
window.matchMedia('(prefers-color-scheme: dark)');
```