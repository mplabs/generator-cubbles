# Releases:

## Version 0.8.0
* for modelVersion 7.0.0
* PLAT-200
* install webpackage-uploader 1.3.0
* regex for people improved (cubixx:compound, cubixx:elementary, cubixx:webapp, cubixx:webutil (reason: article in ``App Developer Forum``:  Cubixx Web Package Generator sollte auch typische englische Autorennamen zulassen

## Version 0.7.0 (2015-08-19)
for modelVersion 6.0

## Change
* install webpackage-uploader locally
* update deploy task for calling the local installed webpackage-uploader  (cubixx:webapp, cubixx:webutil, cubixx:compound, cubixx:elementary)

## BugFix
* deployIntegration-config.json and deployLocal-config.json: correct attribute `root`


    "path": {
        "root": "./dist"
    }

* manifest.webpackage: korrektur the template `"authors": <%- webpackageAuthors %>` (cubixx:webapp, cubixx:webutil, cubixx:compound, cubixx:elementary)

## Version 0.6 (2015-08-06)
## Change
* PLAT-198: default version for crc (1.1) ,crcLoader (1.1) cif (1.1) and CubxPolymer (1.1) updated. (cubixx:compound, cubixx:elementary, cubixx:webapp

## Version 0.5 (2015-08-04)
## Improvement
* modelVersion 6.0 included, defailt-values CRCLoader, CRC, CIF, CubxPolymer updated (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)
* included preinstall script to install webpackage-uploder in correct version globally
* included grunt task `validateWebpackages` (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)
* included grunt task `validate`  (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)
* included grunt task localhost to check urls to localhost before deployment
* groupId can include die charachters `-` and `_`.
* preinstall of webpackage-uploader-1.2.2
* limited regex pattern for name of the component: componentname should begin with a letter. Important because of registration of custom tags. (cubixx:elementary und cubixx:compound)
* included grunt task `validate` (cubixx:webapp, cubixx:compound, cubixx:elementary, cubixx:webutil)


## Version 0.4.4 (2015-07-31)
### BugFix
* the dependency of cubxpolymer was not correct. (The groupId was in version 0.5 changed.)
* updated cubxpolymer version to 0.6.1 (cubixx:elementary)

## Version 0.4.3 (2015-07-28)
### BugFix
* by generate a webapp is no manifest.component necessary. manifest.component deleted.

## Version 0.4.2 (2015-07-27)
### BugFix
* correction CRCLoader version to 0.6.1

## Version 0.4.1 (2015-07-27)
### BugFix
* correction of include CRCLoader ( in the script tag in index.html included the groupId cubx.core )
* correction githooks grunt task (task `lint` renamed in `validateSources`

## Version 0.4 (2015-07-24)
### Improvement
* ready for modelVersion 5.0.0

## Version 0.3.5 (2015-07-16): Fixed PLAT-214 (grunt deployIntegration), PLAT-215 (missing .gitignore File).
## Version 0.3.4 (2015-07-14): Fixed PLAT-208 (cubixx:compound).
##* Version 0.3.3 (2015-07-14): Fixed PLAT-208 (cubixx:elementary).
##* Version 0.3.2 (2015-07-09): Fixed some generation and regex issues.
##* Version 0.3.1 (2015-07-07): Fixed some spelling issues.
##* Version 0.3.0 (2015-07-07): New `cubixx:compound` | New `cubixx:webapp`
##* Version 0.2.0 (2015-07-03): Extended `cubixx:webutil` | New `cubixx:elementary`
##* Version 0.1.0 (2015-07-01): Basic implementation of `cubixx:webutil`
