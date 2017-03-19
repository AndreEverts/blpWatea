# Changelog

## 1.0.0-beta1 (2017-03-20)

* FIX Linting errors: remove blank lines, add trailing comma. Ignore third party components. (Robbie Averill)
* Add border top only, not all the way around of tables (Paul Clarke)

## 0.3.0 (2017-03-16)

* Consistency with class names across all sitewide widgets (Paul Clarke)
* Toggle caret-down and caret-up on hover/active for navigation dropdowns (Robbie Averill)
* FIX position for menu on sub-page of active item (Paul Clarke)
* FIX margin-top on carousel needs to include 1px border - add comment (Robbie Averill)
* CWPT-480: Override accessibility-plugin space bar handler for navbar (Robbie Averill)
* CWPT-481 add correct variable in mixin, rm i. fa-language class (Sacha Judd)
* CWPT-481 add comments, move end-of-line to above lines (Sacha Judd)
* FIX Require cwp/cwp 1.6@dev, add BSD-3 clause license (Robbie Averill)
* CWPT-445: Fix some linting errors, include jQuery from Page template (Robbie Averill)
* Update fav icons to standard (not recompressed) (Paul Clarke)
* CWPT-475: Update dist from starter theme, includes .external::after with left: 3px (Robbie Averill)
* Increase contrast (Paul Clarke)
* Use more BEM structure without underscores, css tidyup (Paul Clarke)
* Add css conventions to project (Paul Clarke)
* Move stuff around and rename some components/includes and reduce nesting (Paul Clarke)
* FIX Add "footer-site" class to page footer (Robbie Averill)
* CWPT-429 add .footer-site to scss (Sacha Judd)
* CWPT-385: Update readme to reflect critical use information, link to external Watea docs (Robbie Averill)
* Change class names to BS style (Paul Clarke)
* Carousel refactor and additional style additions (Paul Clarke)
* Uncomment PDF section with instructions to documentation on how to re-enable PDF Link (Sacha Judd)
* Fix placeholder SASS definitions by redefining them so they aren't truncated (Sacha Judd)
* CWPT-450: Add screen reader caption "search" to search button in header (Robbie Averill)
* CWPT-462: Fix alignment of first article heading in news, events and blog pages versus sidebar (Robbie Averill)
* CWPT-457: Apply sidebar header styles to "sidebar" container h3 elements instead of specific selector (Robbie Averill)

## 0.2.0 (2017-03-09)

* Rebuild dist files (Robbie Averill)
* CWPT-363 rm btn override styles, change variable for bg, add correct nesting (Sacha Judd)
* FIX Use CDN for font-awesome fonts, remove dist fonts (Robbie Averill)
* CWPT-313: Add site tagline underneath site title in header (Robbie Averill)
* DOCS Update readme to be a little more relevant to the current state of Watea, include linting references (Robbie Averill)
* FIX Apply minor linting changes: whitespace, new lines, double quotes. Ignore "no-url-protocol" rules. (Robbie Averill)
* FIX Rename SASS files so they don't have leading underscores (Robbie Averill)
* CWPT-393: Add sass-lint with AirBnB style linting config from framework 4.0.0-alpha5 (Robbie Averill)
* Removed unwanted span and cleaned up indenting (Paul Clarke)
* Removed unwanted !importants (Paul Clarke)
* Reduced font weights to maximise speed (Paul Clarke)
* Update dist files (Robbie Averill)
* CWPT-436: Remove jumbotron class from carousel (Robbie Averill)
* CWPT-435: Realign carousel margins for extra small devices (Robbie Averill)
* CWPT-432: Update mask colour for carousel. Tidy up carousel SASS file. (Robbie Averill)
* CWPT-433: Remove background from carousel controls on hover, increase control size (Robbie Averill)
* CWPT-434: Reduce carousel scroll speed to ten seconds per frame (Robbie Averill)
* CWPT-430: Support ability to toggle page utilities per page (Robbie Averill)
* Carousel_feedback: moved play button to same level than indicators (Matias)
* change_main_nav_z-index: fix z-index position of navbar (Matias)
* CWPT-378: Add apple touch icons from starter theme, Favicon and Header templates with customisation ability (Robbie Averill)
* FIX Remove todo comment and re-build (Sacha Judd)
* CWPT-422 Fixing margin spacing, font-sizing and tag underlines (Paul Jayme)
* Add dimension restrictions to logos (newleeland)
* Fix z-index position on carousel controls (Matias)
* CWPT-326 add carousel for watea theme. (Matias)
* CWPT-364: Adjust classes and styles for footer/quicklinks which are updated in "starter theme" (Robbie Averill)
* CWPT-420 Watea tab fix (Sacha Judd)
* Rebuild dist files (Damian Mooyman)
* Refactor custom search template (Damian Mooyman)
* CWPT-353 scss refactor, remove nesting, change inverse variables to default, remove BEM (Sacha Judd)
* CWPT-375: Use "cwp" translations method instead of agency-extensions equivalent (Robbie Averill)
* FIX Consistent dropdown positioning in header menus (Robbie Averill)
* Update theme names from new-theme to starter and watea (Robbie Averill)
* Change dependency to cwp/starter-theme (Damian Mooyman)
* Fix installer name (Damian Mooyman)
* Rename to watea-theme Set installer name to dev_watea (Damian Mooyman)
* Fix .editorconfig (Damian Mooyman)

## 0.1.0 (2017-03-02)

* Update compiled CSS (Robbie Averill)
* CWPT-95 Fix clearfix in footer (newleeland)
* CWPT-357: Fix consistency in navigation button height and borders - fixes broken multi lines (Robbie Averill)
* CWPT-305 add variables in forms, add caption image typography, add btn colors (Sacha Judd)
* add footer styling (newleeland)
* CWPT-306: Update starter theme styles for user defined forms (Robbie Averill)
* CWPT-322 Added style to responsive main navigation (Matias)
* FIX Define entire copy of bootstrap variable sheet with our customised values, remove modularisation (Robbie Averill)
* Updating markup & styling to Features & Quicklinks based on advanced theme designs (Paul Jayme)
* feature/CWPT-321_Typography general (Sacha Judd)
* FIX Update variable precendence by explicitly separating variables and manifests (Robbie Averill)
* CWPT-333: Update page utilities template to include font-awesome icons with sr labels, new colours. (Robbie Averill)
* CWPT-94 Add Header and MainNav style for Desktop (Matias)
* CWPT-318: Remove double up of footer quick links and features (Robbie Averill)
* CWPT-318: Add footer/quicklinks include to Page template to match dev theme (Robbie Averill)
* CWPT-96: Add news section sidebar to home page (Robbie Averill)
* feature/CWPT-317_SideNav section (Sacha Judd)
* CWPT-303: Extend the readme/documentation a little to include notes about how the theme inherits from the base theme (Robbie Averill)
* Added advanced styling to breadcrumbs (Paul Jayme)
* CWPT-215: Ensure theme can import base theme SCSS, but only has its own JS. Add Page template. (Robbie Averill)
* CWPT-315: Implement initial agency theme structure - inherits from base theme (Robbie Averill)