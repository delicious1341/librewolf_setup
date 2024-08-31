// Enable use of custom userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Never show bookmarks bar
user_pref("browser.toolbars.bookmarks.visibility", "never");

// Set Firefox Dark Theme

// Seting dark mode automatically (not as good as doing it manually)
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("browser.in-content.dark-mode", true);
user_pref("widget.disable-dark-scrollbar", false);
user_pref("devtools.theme", "dark");
user_pref("extensions.activeThemeID", "firefox-compact-dark@mozilla.org");
user_pref("browser.theme.content-theme", 0);
user_pref("browser.theme.toolbar-theme", 0);

// user_pref("extensions.webextensions.uuids", // Append:
//\"firefox-compact-dark@mozilla.org\":\"eb7daf1e-4ae4-4594-9c7c-578daa622437\" 

// Allow fingerprinting to request dark mode. Set dark mode manually after Ctrl+Shift+O.
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.overrides","+AllTargets,-CSSPrefersColorScheme");

