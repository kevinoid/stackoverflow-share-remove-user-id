StackOverflow Share Remove User ID Userscript
=============================================

[![Build Status: Linux](https://img.shields.io/travis/kevinoid/stackoverflow-share-remove-user-id/master.svg?style=flat&label=build+on+linux)](https://travis-ci.org/kevinoid/stackoverflow-share-remove-user-id)
[![Build Status: Windows](https://img.shields.io/appveyor/ci/kevinoid/stackoverflow-share-remove-user-id/master.svg?style=flat&label=build+on+windows)](https://ci.appveyor.com/project/kevinoid/stackoverflow-share-remove-user-id)
[![Coverage](https://img.shields.io/codecov/c/github/kevinoid/stackoverflow-share-remove-user-id.svg?style=flat)](https://codecov.io/github/kevinoid/stackoverflow-share-remove-user-id?branch=master)

A [userscript](https://en.wikipedia.org/wiki/Userscript) (viz.
[Greasemonkey](https://www.greasespot.net/)/[Tampermonkey](https://tampermonkey.net/)/[Violentmonkey](https://violentmonkey.github.io/)
script) to remove the User ID from short URLs displayed by the "Share" button
on [Stack Overflow](https://stackoverflow.com) and other [Stack Exchange
sites](https://stackexchange.com/sites?view=list).

**Important:** [The User ID is used to attribute links to your user account for
badges](https://meta.stackoverflow.com/q/277769).  Removing it will remove the
link attribution and prevent you from obtaining those badges.

Given the above restriction, why would someone want to remove the User ID?
For me, the value of shorter, anonymous, user-invariant URLs far outweighs the
value of link attribution.  Others may have specific tools or use cases for
Stack Overflow URLs which expect a certain format.


## Features

- Removes the User ID from both question and answer URLs.
- Re-selects the URL text after changing to preserve copy behavior.
- Only removes the User ID from recognized URL formats.  If URL formats
  change, there should be no risk of removing non-User ID URL parts.


## Installation

This userscript can be installed by following the instructions to [install in
Greasemonkey](https://wiki.greasespot.net/Greasemonkey_Manual:Installing_Scripts),
[install in Tampermonkey](https://tampermonkey.net/faq.php#Q102), or install
in any other userscript manager using:

> [https://raw.githubusercontent.com/kevinoid/stackoverflow-share-remove-user-id/master/stackoverflow-share-remove-user-id.user.js](https://raw.githubusercontent.com/kevinoid/stackoverflow-share-remove-user-id/master/stackoverflow-share-remove-user-id.user.js)


## Contributing

Contributions are welcome and very much appreciated!  Please add tests where
possible and ensure `npm test` passes.

If the desired change is large, complex, backwards-incompatible, can have
significantly differing implementations, or may not be in scope for this
project, opening an issue before writing the code can avoid frustration and
save a lot of time and effort.


## License

This project is available under the terms of the
[MIT License](https://opensource.org/licenses/MIT).
