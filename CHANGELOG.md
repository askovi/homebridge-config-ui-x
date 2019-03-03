# Change Log

All notable changes to this project will be documented in this file. This project uses [Semantic Versioning](https://semver.org/).

## 3.9.6 (2019-02-04)

### Notable Changes

* **i18n:** Spanish language translation added by [@Rubenfer](https://github.com/Rubenfer)

## 3.9.5 (2019-02-02)

### Notable Changes

* **i18n:** Japanese language translation added by [@gaojie429](https://github.com/gaojie429)

### Other Changes

* Updated Angular from 7.2.0 -> 7.2.3
* Updated other npm dependencies

## 3.9.4 (2019-01-15)

### Other Changes

* Updated `xterm` dependency to fix [CVE-2019-0542](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-0542)
* Updated Angular from 7.1.0 -> 7.2.0
* Updated other npm dependencies

## 3.9.3 (2019-01-05)

### Notable Changes

* **i18n:** Improvements to Polish language translation ([#192](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/192))
* **i18n:** Improvements to Simplified Chinese language translations ([#195](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/195))
* **Accessory Control:** Added ability to lock the accessory layout ([#197](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/197))

## 3.9.2 (2018-12-18)

### Notable Changes

* **i18n:** Improvements to Polish language translation ([#186](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/186))
* **i18n:** Hungarian language translation added by Nagy Attila
* **i18n:** Traditional Chinese language translation added by [@r951236958](https://github.com/r951236958)
* **i18n:** Improved i18n capabilities to support both Simplified and Traditional Chinese translations

### Bug Fixes

* Fixed a bug that prevented errors being handled correctly by the client

## 3.9.1 (2018-12-03)

### Notable Changes

* **i18n:** Improvements to German language translation ([#174](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/174))
* **Auth:** Fixed bug preventing login when credentials were autofilled in Chrome ([#175](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/175))
* **Plugins:** Prevent invalid link to plugin homepage being displayed if the URL is not known ([#178](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/178))

### Other Changes

* Updated Angular from 6.1.9 to 7.1.1
* Updated npm dependencies

## 3.9.0 (2018-11-03)

### Notable Changes

* **Accessory Control:** Added ability for accessories to be assigned custom names; right click to access the accessory config/info panel ([#156](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/156))
* **Accessory Control:** Added ability for accessories to be hidden ([#84](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/84))
* **i18n:** Improvements to French language translation ([#169](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/169))

### Other Changes

* **Auth:** removed some unnecessary log messages ([#171](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/171))
* Updated npm dependencies

## 3.8.11 (2018-10-06)

### Notable Changes

* **i18n:** Improvements to French language translation ([#162](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/162))

### Other Changes

* Updated Angular to 6.1.9
* Updated npm dependencies

## 3.8.10 (2018-09-04)

### Notable Changes

* **i18n:** Simplified Chinese language translation added by [@niinaranpo](https://github.com/niinaranpo)

### Other Changes

* Updated Angular to 6.1.6
* Updated npm dependencies

## 3.8.9 (2018-08-06)

### Bug Fixes

* **i18n:** Improve Russian Translations ([#146](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/146))

### Other Changes

* Updated Angular to 6.1.1
* Updated npm dependencies

## 3.8.8 (2018-07-30)

### Notable Changes

* **i18n:** Czech language translation added by [@HonzaaD](https://github.com/HonzaaD)
* **i18n:** Russian language translation added by [@Caribsky](https://github.com/Caribsky)
  * User contributions to the non-english translations are always welcome, [click here](https://github.com/oznu/homebridge-config-ui-x-hoobs/blob/master/CONTRIBUTING.md#contributing-to-translations) for details on how you can help

### Bug Fixes

* **Config Editor:** Backup button actually downloads up the `config.json` now ([#144](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/144))
* **Config Editor:** Fixed issued using config editor on mobile devices ([#131](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/131))
* **Accessory Control:** Accessory layout changes are now persistent again

## 3.8.7 (2018-07-28)

### Notable Changes

* **Accessory Control:** Long-clicking a lightbulb with no additional characteristics (eg. brightness) no longer opens a modal ([#47#issuecomment-405089113](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/47#issuecomment-405089113))
* **Accessory Control:** Right-clicking an accessory on a non-mobile device will bring up a modal showing all accessory characteristics and other information
* **i18n:** Polish language translation added by [@mientki](https://github.com/mientki)
  * User contributions to the non-english translations are always welcome, [click here](https://github.com/oznu/homebridge-config-ui-x-hoobs/blob/master/CONTRIBUTING.md#contributing-to-translations) for details on how you can help

## 3.8.6 (2018-07-27)

### Bug Fixes

* **Config Editor:** Backup button more reliable ([#135](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/135))
* **Accessory Control:** Refresh all accessories when one is changed to ensure the dashboard is up-to-date ([#136](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/136))

### Other Changes

* Updated Angular to 6.1.0
* Updated npm dependencies

## 3.8.5 (2018-06-15)

### Bug Fixes

* Handle loading config schema for [@homebridge](https://www.npmjs.com/org/homebridge) plugins correctly

## 3.8.4 (2018-06-14)

### Notable Changes

* Made `config.json` saves a bit more robust in an attempt to fix ([#122](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/122))
* Added `proxyHost` config option to make running behind a reverse proxy easier ([#119](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/119))

## 3.8.3 (2018-06-07)

### Notable Changes

* Fixes to German Translation ([#116](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/116))
* Allow web terminal access on Linux-based hosts *only* if a certain environment variable is set ([#110](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/110))
  * Homebridge must be running with the `HOMEBRIDGE_CONFIG_UI_TERMINAL=1` environment variable to access the terminal

## 3.8.2 (2018-06-06)

### Other Changes

* Minor bug fixes
* Updated npm dependencies

## 3.8.0 (2018-06-03)

### Notable Changes

* Added support for non-english translations ([#102](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/102))
  * German translation added with the assistance of [@razer4908](https://github.com/razer4908)
  * French translation added by [@the0neyouseek](https://github.com/the0neyouseek) ([#105](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/105))
  * Language is selected automatically based on browser settings
  * If you want to contribute to the translation work please see [CONTRIBUTING.md](https://github.com/oznu/homebridge-config-ui-x-hoobs/blob/master/CONTRIBUTING.md#contributing-to-translations)
* Imperial display units now apply to temperature sensors and thermostat accessories ([#96](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/96))

### Other Changes

* Updated npm dependencies
* Config changes for the UI should require a full page refresh less often

## 3.7.0 (2018-05-31)

### Notable Changes

* Added support for imperial temperature display units ([#96](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/96))

## 3.6.6 (2018-05-26)

### Notable Changes

* **ui**: upgraded from Angular 5.x to 6.x
* updated npm dependencies

## 3.6.5 (2018-05-20)

### Notable Changes

* Updated npm dependencies

## 3.6.3 (2018-05-10)

### Notable Changes

* Removed the `nsp` package as the tool has been discontinued, vulnerability scanning is being added to `npm` natively
* Updated npm dependencies

## 3.6.2 (2018-05-09)

### Other Changes

* Updated npm dependencies
* Errors will no longer be thrown if a plugin is installed with CVSS alerts lower than 4 (Low Risk)

## 3.6.1 (2018-05-08)

### Bug Fixes

* Fixed bug that could cause plugins that take a long time to install or upgrade to fail

## 3.6.0 (2018-05-08)

### Notable Changes

* **Beta Feature**: Initial implementation of GUI/form based setup for supported plugins
* Added support for optional native HTTPS / SSL ([#68](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/68), [#35](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/35))
* The Log Viewer config options have changed, existing options have been have depreciated, see [README](https://github.com/oznu/homebridge-config-ui-x-hoobs#log-viewer-configuration) for details
* Docker users may now configure this plugin using the `config.json` or the new plugin GUI/form config method
* Added metadata tag allow using plugin as a full screen web app on iOS ([#88](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/88))
* Added ability to restore and cleanup `config.json` backups ([#77](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/77))

### Other Changes

* Added [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) headers
* Links to external sites now have `rel="noopener noreferrer"`
* Links in plugin-author generated markdown (eg. change logs, plugin config) are now opened in a new tab
* When on the status page, the browser will refresh automatically if the client version does not match the server version
* Updated npm dependencies

### Bug Fixes

* Fixed bug that caused homebridge to crash when using Log Viewer on Windows 10

## 3.5.5 (2018-04-21)

### Bug Fixes

* Ensure forked process is killed if Homebridge is not running in a different way (@Damien via Slack & [#86](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/86))

## 3.5.4 (2018-04-19)

### Notable Changes

* Added `wsocket` prefix to websocket connection to make reverse proxying easier for some users ([#85](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/85))

## 3.5.3 (2018-04-16)

### Bug Fixes

* Fixed bug that could prevent the plugin from displaying in the browser after an update unless the cache was cleared ([#82](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/82))
* Ensure forked process is killed if Homebridge is not running ([#83](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/83))

## 3.5.2 (2018-04-15)

### Notable Changes

* Accessory Control: Added message explaining that accessory control is disabled when navigating to `/accessories` when insecure mode is not enabled
* Updated README to contain link to the [Enabling Accessory Control](https://github.com/oznu/homebridge-config-ui-x-hoobs/wiki/Enabling-Accessory-Control) wiki article

## 3.5.1 (2018-04-12)

### Bug Fixes

* Docker: Fixed a bug that prevented users saving settings

## 3.5.0 (2018-04-12)

### Notable Changes

* This plugin now runs in a seperate thread to the main homebridge process ([#75](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/75))
  * This can be disabled by setting `noFork` to `true` in the plugin config
* Added ability to set a custom image for the login screen using the `loginWallpaper` option ([#34](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/34))
* Updated npm dependencies

## 3.4.1 (2018-04-06)

### Notable Changes

* Added link to plugin homepage (GitHub, BitBucket, etc.) ([#74](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/74))
* Updated npm dependencies

### Bug Fixes

* Suppress npm update warnings in log output ([#66](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/66))

## 3.4.0 (2018-03-22)

### Notable Changes

* Added Docker Settings page where users can adjust the following ([#64](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/64)):
  * Toggle Homebridge Insecure / Debug Mode
  * UI Theme Color
  * UI Auth Mode (Form, Basic, None)
* Added the ability to set the path to the temp file using `HOMEBRIDGE_CONFIG_UI_TEMP` when running in Docker ([#62](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/62))

### Bug Fixes

* Log viewer terminal now adjusts the size of the pty shell according to the size of the browser window

## 3.3.1 (2018-03-17)

### Bug Fixes

* Prevent zoom when using the config editor on iOS (@Yanni via Homebridge Slack)
* Prevent the deletion of an admin user if there are no other admin users ([docker-homebridge#83](https://github.com/oznu/docker-homebridge/issues/83))
* Fixed issue that prevented installed plugins from loading if one was missing a description in it's `package.json` ([#59](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/59))

## 3.3.0 (2018-03-16)

### Notable Changes

* Added ability for Linux users to shutdown and restart the server Homebridge is running on ([#39](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/39))
* Updated npm dependencies

## 3.2.1 (2018-03-13)

### Bug Fixes

* Fixed issue that prevented plugin scan from working on Windows ([#53](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/53))
* Fixed missing css class `.bg-yellow`

## 3.2.0 (2018-03-12)

### Notable Changes

* Display plugin `CHANGELOG.md` after updating if it exists ([#51](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/51))

### Bug Fixes

* Prevent users accidentally removing homebridge-config-ui-x-hoobs using the web app

## 3.1.2 (2018-03-11)

### Bug Fixes

* Fixed an issue that prevented adding a new room to the accessories page in Safari ([#47#issuecomment-372101867](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/47#issuecomment-372101867))

## 3.1.1 (2018-03-11)

### Bug Fixes

* Fixed missing css class `.bg-red`

## 3.1.0 (2018-03-10)

### Notable Changes

* Added features just for [oznu/homebridge](https://github.com/oznu/docker-homebridge) docker container users ([#48](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/48))
  * Ability to access docker container terminal
  * Ability to edit `startup.sh` script
  * Ability to restart entire docker container

## 3.0.1 (2018-03-10)

### Notable Changes

* Updated npm dependencies
* Material Icons now loaded from local package
* Swapped to the core mdbootstrap library to fix nav drop down menus

### Bug Fixes

* The mobile menu will now close when a nav item is clicked

## 3.0.0 (2018-03-08)

### Notable Changes

* Ability to view and control accessories ([#46](https://github.com/oznu/homebridge-config-ui-x-hoobs/pull/46))
* Scan installed and updated plugins for vulnerabilities and malware ([#37#issuecomment-370698122](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/37#issuecomment-370698122))
* Display current version of node and homebridge-config-ui-x-hoobs on the status page ([#40](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/40))
* Set the homebridge title to match the homebridge instance name ([#38](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/38))

### Bug Fixes

* Non-admin users now have restricted access ([#37#issuecomment-368346991](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/37#issuecomment-368346991))

## 2.7.1 (2018-03-03)

### Bug Fixes

* Ensure log process is killed after closing the page on older linux systems ([#41](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/41))

## 2.7.0 (2018-02-21)

### Notable Changes

* Added mobile app icons provided by [@DJay-X](https://github.com/DJay-X) ([#34](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/34))

## 2.6.3 (2018-02-18)

### Bug Fixes

* Fixed config screen not displaying correctly on some devices ([#31](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/31))

## 2.6.2 (2018-02-17)

### Bug Fixes

* Fixed bug that prevented log file session closing when using sudo mode ([#29](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/29))

## 2.6.1 (2018-02-17)

### Bug Fixes

* Use registry.npmjs.org to search for plugins ([#30](https://github.com/oznu/homebridge-config-ui-x-hoobs/issues/30))