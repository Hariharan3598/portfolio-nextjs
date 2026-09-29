/**
 * Inline script placed in <head> (see app/layout.tsx) that applies the
 * saved — or system — theme before first paint, preventing a
 * light→dark flash. It also adds a `js` class used by the
 * scroll-reveal animations in globals.css.
 *
 * The storage key "theme" must match the one in ThemeToggle.tsx.
 */
export const themeInitScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark)d.classList.add('dark');d.style.colorScheme=dark?'dark':'light';}catch(e){}})();`;
