// Enable use of custom userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Never show bookmarks bar
user_pref("browser.toolbars.bookmarks.visibility", "never");

// Allow fingerprinting to request dark mode. Set dark mode manually after Ctrl+Shift+O.
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.fingerprintingProtection.overrides","+AllTargets,-CSSPrefersColorScheme");

// Seting dark mode automatically (not as good as doing it manually)
//user_pref("ui.systemUsesDarkTheme", 1);
//user_pref("browser.in-content.dark-mode", true);
