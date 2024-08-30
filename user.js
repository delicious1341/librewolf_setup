// Enable use of custom userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Never show bookmarks bar
user_pref("browser.toolbars.bookmarks.visibility", "never");

//
user_pref("privacy.resistFingerprinting","true");
user_pref("privacy.fingerprintingProtection","true");
//user_pref("privacy.fingerprintingProtection.overrides","+AllTargets,-CSSPrefersColorScheme");
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("browser.in-content.dark-mode", true);
