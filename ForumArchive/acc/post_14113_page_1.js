[{"Owner":"jerome","Date":"2015-04-27T12:28:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just forked the BJS repo in order to fix the little bug about curve3._lt_/p_gt__lt_p_gt_Before doing anything else and after the initial _lt_em_gt_npm install_lt_/em_gt__co_ I check if the compiler works well _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_$ gulp typescriptError_dd_ Cannot find module _t_gulp-param_t_    at Function.Module._resolveFilename (module.js_dd_338_dd_15)    at Function.Module._load (module.js_dd_280_dd_25)    at Module.require (module.js_dd_364_dd_17)    at require (module.js_dd_380_dd_17)    at Object.&lt_sm_anonymous&gt_sm_ (/var/www/html/BJS/Babylon.js/Tools/Gulp/gulpfile.js_dd_1_dd_74)    at Module._compile (module.js_dd_456_dd_26)    at Object.Module._extensions..js (module.js_dd_474_dd_10)    at Module.load (module.js_dd_356_dd_32)    at Function.Module._load (module.js_dd_312_dd_12)    at Module.require (module.js_dd_364_dd_17)_lt_/pre_gt__lt_p_gt_I just add it manually _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_$ sudo npm install gulp-param_lt_/pre_gt__lt_p_gt_then it works._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This post is just to feed back about this missing module._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T12:39:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mmh... it seems something else is broken also _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I just edited the math/ts file and tried to compile _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_$ gulp typescript[14_dd_37_dd_02] Using gulpfile /var/www/html/BJS/Babylon.js/Tools/Gulp/gulpfile.js[14_dd_37_dd_02] Starting _t_typescript-to-js_t_.../var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/node_modules/typescript/bin/typescript.js_dd_24325            processRootFile(host.getDefaultLibFileName(options)_co_ true)_sm_                                 ^TypeError_dd_ Object #&lt_sm_Host&gt_sm_ has no method _t_getDefaultLibFileName_t_    at Object.createProgram (/var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/node_modules/typescript/bin/typescript.js_dd_24325_dd_34)    at Project.compile (/var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/release/project.js_dd_255_dd_27)    at /var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/release/main.js_dd_63_dd_32    at Project.resolveAll (/var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/release/project.js_dd_213_dd_13)    at CompileStream.compile (/var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/release/main.js_dd_62_dd_27)    at CompileStream.end (/var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/release/main.js_dd_75_dd_14)    at DestroyableTransform.onend (/var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-sourcemaps/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js_dd_523_dd_10)    at DestroyableTransform.g (events.js_dd_180_dd_16)    at DestroyableTransform.emit (events.js_dd_117_dd_20)    at /var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-sourcemaps/node_modules/through2/node_modules/readable-stream/lib/_stream_readable.js_dd_965_dd_16_lt_/pre_gt__lt_p_gt_Is there something missing on my computer within the gulp world ?_lt_/p_gt__lt_p_gt_or another TS curse upon Linux users ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T12:46:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_npm version _dd_ 2.8.4 (just updated)_lt_/p_gt__lt_p_gt_gulp version _dd_ CLI 3.8.11_co_ local 3.8.11_lt_/p_gt__lt_p_gt_tsc version (just in case) _dd_ 1.5.0-alpha_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-27T13:12:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I know about _t_gulp-param_t_.  There is a new _t_target_t__co_ _t_makeUgly_t__co_  in gulpfile.ts that allows you to uglify any .js you specify as a command line arg.  I must admit that node / npm is a black box for me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The readme.md says you should also do a npm update_co_ after npm install.  Might this not solve both problems?  If there was something to do when adding a new dependency_co_ I unfortunately do not what that is.  I do know that I have gulped on Linux in the last 24 hours._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-04-27T13:38:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_When using require to load an npm package_co_ you should also include the package in package.json (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/Gulp/package.json_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Tools/Gulp/package.json_lt_/a_gt_) and define the version that is required. only then will npm understand this is a dependency needed. _lt_/p_gt__lt_p_gt_Want me to add gulp-param to the dependency party? What version did you use?_lt_/p_gt__lt_p_gt_@jerome - gulp already worked for you_co_ if I remember correctly. did you change anything? this should actually work (unless the gulpfile was changed again)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T13:52:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I didn_t_t change anything but just updated npm._lt_/p_gt__lt_p_gt_This bug is not recent for me _dd_ the last time I needed to fix something_co_ it went wrong on april 3rd (_lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/13607-gulp-compilation-error-in-typescript-module/?p_eq_77739_qt__gt_http_dd_//www.html5gamedevs.com/topic/13607-gulp-compilation-error-in-typescript-module/?p_eq_77739_lt_/a_gt_ ) _lt_/p_gt__lt_p_gt_and I had to give the code to DK so he could change it for me at the time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So_co_ this is the same bug._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_here_t_s my current npm list (quite long_co_ sorry)_co_ notice at the end the ERR messages _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BabylonJS@1.9.0 /var/www/html/BJS/Babylon.js/Tools/Gulp├─┬ gulp@3.8.11│ ├── archy@1.0.0│ ├─┬ chalk@0.5.1│ │ ├── ansi-styles@1.1.0│ │ ├── escape-string-regexp@1.0.3│ │ ├─┬ has-ansi@0.1.0│ │ │ └── ansi-regex@0.2.1│ │ ├─┬ strip-ansi@0.3.0│ │ │ └── ansi-regex@0.2.1│ │ └── supports-color@0.2.0│ ├── deprecated@0.0.1│ ├─┬ gulp-util@3.0.4│ │ ├── array-differ@1.0.0│ │ ├── array-uniq@1.0.2│ │ ├── beeper@1.0.0│ │ ├─┬ chalk@1.0.0│ │ │ ├── ansi-styles@2.0.1│ │ │ ├── escape-string-regexp@1.0.3│ │ │ ├─┬ has-ansi@1.0.3│ │ │ │ ├── ansi-regex@1.1.1│ │ │ │ └── get-stdin@4.0.1│ │ │ ├─┬ strip-ansi@2.0.1│ │ │ │ └── ansi-regex@1.1.1│ │ │ └── supports-color@1.3.1│ │ ├─┬ dateformat@1.0.11│ │ │ ├── get-stdin@4.0.1│ │ │ └─┬ meow@3.1.0│ │ │   ├─┬ camelcase-keys@1.0.0│ │ │   │ ├── camelcase@1.0.2│ │ │   │ └── map-obj@1.0.0│ │ │   └─┬ indent-string@1.2.1│ │ │     └─┬ repeating@1.1.2│ │ │       └── is-finite@1.0.0│ │ ├── lodash._reescape@3.0.0│ │ ├── lodash._reevaluate@3.0.0│ │ ├── lodash._reinterpolate@3.0.0│ │ ├─┬ lodash.template@3.5.0│ │ │ ├── lodash._basecopy@3.0.1│ │ │ ├── lodash._basetostring@3.0.0│ │ │ ├── lodash._basevalues@3.0.0│ │ │ ├── lodash._isiterateecall@3.0.6│ │ │ ├── lodash.escape@3.0.0│ │ │ ├── lodash.isnative@3.0.2│ │ │ ├─┬ lodash.keys@3.0.6│ │ │ │ ├── lodash.isarguments@3.0.1│ │ │ │ └── lodash.isarray@3.0.2│ │ │ ├── lodash.restparam@3.6.1│ │ │ └── lodash.templatesettings@3.1.0│ │ ├─┬ multipipe@0.1.2│ │ │ └─┬ duplexer2@0.0.2│ │ │   └─┬ readable-stream@1.1.13│ │ │     ├── core-util-is@1.0.1│ │ │     ├── inherits@2.0.1│ │ │     ├── isarray@0.0.1│ │ │     └── string_decoder@0.10.31│ │ ├── object-assign@2.0.0│ │ ├── replace-ext@0.0.1│ │ ├─┬ through2@0.6.5│ │ │ ├─┬ readable-stream@1.0.33│ │ │ │ ├── core-util-is@1.0.1│ │ │ │ ├── inherits@2.0.1│ │ │ │ ├── isarray@0.0.1│ │ │ │ └── string_decoder@0.10.31│ │ │ └── xtend@4.0.0│ │ └─┬ vinyl@0.4.6│ │   ├── clone@0.2.0│ │   └── clone-stats@0.0.1│ ├── interpret@0.3.10│ ├─┬ liftoff@2.0.3│ │ ├── extend@2.0.1│ │ ├─┬ findup-sync@0.2.1│ │ │ └─┬ glob@4.3.5│ │ │   ├─┬ inflight@1.0.4│ │ │   │ └── wrappy@1.0.1│ │ │   ├── inherits@2.0.1│ │ │   ├─┬ minimatch@2.0.4│ │ │   │ └─┬ brace-expansion@1.1.0│ │ │   │   ├── balanced-match@0.2.0│ │ │   │   └── concat-map@0.0.1│ │ │   └─┬ once@1.3.1│ │ │     └── wrappy@1.0.1│ │ ├── flagged-respawn@0.3.1│ │ └── resolve@1.1.6│ ├── minimist@1.1.1│ ├─┬ orchestrator@0.3.7│ │ ├─┬ end-of-stream@0.1.5│ │ │ └─┬ once@1.3.1│ │ │   └── wrappy@1.0.1│ │ ├── sequencify@0.0.7│ │ └── stream-consume@0.1.0│ ├── pretty-hrtime@0.2.2│ ├── semver@4.3.3│ ├─┬ tildify@1.0.0│ │ └── user-home@1.1.1│ ├─┬ v8flags@2.0.5│ │ └── user-home@1.1.1│ └─┬ vinyl-fs@0.3.13│   ├─┬ defaults@1.0.2│   │ └── clone@0.1.19│   ├─┬ glob-stream@3.1.18│   │ ├─┬ glob@4.5.3│   │ │ ├─┬ inflight@1.0.4│   │ │ │ └── wrappy@1.0.1│   │ │ ├── inherits@2.0.1│   │ │ └─┬ once@1.3.1│   │ │   └── wrappy@1.0.1│   │ ├─┬ glob2base@0.0.12│   │ │ └── find-index@0.1.1│   │ ├─┬ minimatch@2.0.4│   │ │ └─┬ brace-expansion@1.1.0│   │ │   ├── balanced-match@0.2.0│   │ │   └── concat-map@0.0.1│   │ ├── ordered-read-streams@0.1.0│   │ └── unique-stream@1.0.0│   ├─┬ glob-watcher@0.0.6│   │ └─┬ gaze@0.5.1│   │   └─┬ globule@0.1.0│   │     ├─┬ glob@3.1.21│   │     │ ├── graceful-fs@1.2.3│   │     │ └── inherits@1.0.0│   │     ├── lodash@1.0.2│   │     └─┬ minimatch@0.2.14│   │       ├── lru-cache@2.6.2│   │       └── sigmund@1.0.0│   ├── graceful-fs@3.0.6│   ├─┬ mkdirp@0.5.0│   │ └── minimist@0.0.8│   ├─┬ strip-bom@1.0.0│   │ ├── first-chunk-stream@1.0.0│   │ └── is-utf8@0.2.0│   ├─┬ through2@0.6.5│   │ ├─┬ readable-stream@1.0.33│   │ │ ├── core-util-is@1.0.1│   │ │ ├── inherits@2.0.1│   │ │ ├── isarray@0.0.1│   │ │ └── string_decoder@0.10.31│   │ └── xtend@4.0.0│   └─┬ vinyl@0.4.6│     ├── clone@0.2.0│     └── clone-stats@0.0.1├─┬ gulp-clean@0.3.1│ ├─┬ rimraf@2.3.2│ │ └─┬ glob@4.5.3│ │   ├─┬ inflight@1.0.4│ │   │ └── wrappy@1.0.1│ │   ├── inherits@2.0.1│ │   ├─┬ minimatch@2.0.4│ │   │ └─┬ brace-expansion@1.1.0│ │   │   ├── balanced-match@0.2.0│ │   │   └── concat-map@0.0.1│ │   └─┬ once@1.3.1│ │     └── wrappy@1.0.1│ └─┬ through2@0.4.2│   ├─┬ readable-stream@1.0.33│   │ ├── core-util-is@1.0.1│   │ ├── inherits@2.0.1│   │ ├── isarray@0.0.1│   │ └── string_decoder@0.10.31│   └─┬ xtend@2.1.2│     └── object-keys@0.4.0├─┬ gulp-concat@2.5.2│ ├─┬ concat-with-sourcemaps@1.0.2│ │ └─┬ source-map@0.4.2│ │   └── amdefine@0.1.0│ ├─┬ gulp-util@3.0.4│ │ ├── array-differ@1.0.0│ │ ├── array-uniq@1.0.2│ │ ├── beeper@1.0.0│ │ ├─┬ chalk@1.0.0│ │ │ ├── ansi-styles@2.0.1│ │ │ ├── escape-string-regexp@1.0.3│ │ │ ├─┬ has-ansi@1.0.3│ │ │ │ ├── ansi-regex@1.1.1│ │ │ │ └── get-stdin@4.0.1│ │ │ ├─┬ strip-ansi@2.0.1│ │ │ │ └── ansi-regex@1.1.1│ │ │ └── supports-color@1.3.1│ │ ├─┬ dateformat@1.0.11│ │ │ ├── get-stdin@4.0.1│ │ │ └─┬ meow@3.1.0│ │ │   ├─┬ camelcase-keys@1.0.0│ │ │   │ ├── camelcase@1.0.2│ │ │   │ └── map-obj@1.0.0│ │ │   └─┬ indent-string@1.2.1│ │ │     └─┬ repeating@1.1.2│ │ │       └── is-finite@1.0.0│ │ ├── lodash._reescape@3.0.0│ │ ├── lodash._reevaluate@3.0.0│ │ ├── lodash._reinterpolate@3.0.0│ │ ├─┬ lodash.template@3.5.0│ │ │ ├── lodash._basecopy@3.0.1│ │ │ ├── lodash._basetostring@3.0.0│ │ │ ├── lodash._basevalues@3.0.0│ │ │ ├── lodash._isiterateecall@3.0.6│ │ │ ├── lodash.escape@3.0.0│ │ │ ├── lodash.isnative@3.0.2│ │ │ ├─┬ lodash.keys@3.0.6│ │ │ │ ├── lodash.isarguments@3.0.1│ │ │ │ └── lodash.isarray@3.0.2│ │ │ ├── lodash.restparam@3.6.1│ │ │ └── lodash.templatesettings@3.1.0│ │ ├── minimist@1.1.1│ │ ├─┬ multipipe@0.1.2│ │ │ └─┬ duplexer2@0.0.2│ │ │   └─┬ readable-stream@1.1.13│ │ │     ├── core-util-is@1.0.1│ │ │     ├── inherits@2.0.1│ │ │     ├── isarray@0.0.1│ │ │     └── string_decoder@0.10.31│ │ ├── object-assign@2.0.0│ │ ├── replace-ext@0.0.1│ │ └─┬ vinyl@0.4.6│ │   ├── clone@0.2.0│ │   └── clone-stats@0.0.1│ └─┬ through2@0.6.5│   ├─┬ readable-stream@1.0.33│   │ ├── core-util-is@1.0.1│   │ ├── inherits@2.0.1│   │ ├── isarray@0.0.1│   │ └── string_decoder@0.10.31│   └── xtend@4.0.0├─┬ gulp-filter@0.4.1│ ├─┬ multimatch@0.1.0│ │ ├── lodash@2.4.2│ │ └─┬ minimatch@0.2.14│ │   ├── lru-cache@2.6.2│ │   └── sigmund@1.0.0│ └─┬ through2@0.4.2│   ├─┬ readable-stream@1.0.33│   │ ├── core-util-is@1.0.1│   │ ├── inherits@2.0.1│   │ ├── isarray@0.0.1│   │ └── string_decoder@0.10.31│   └─┬ xtend@2.1.2│     └── object-keys@0.4.0├── gulp-param@0.6.3 extraneous├── gulp-rename@1.2.2├─┬ gulp-sourcemaps@1.3.0│ ├── convert-source-map@0.4.1│ ├─┬ through2@0.6.5│ │ ├─┬ readable-stream@1.0.33│ │ │ ├── core-util-is@1.0.1│ │ │ ├── inherits@2.0.1│ │ │ ├── isarray@0.0.1│ │ │ └── string_decoder@0.10.31│ │ └── xtend@4.0.0│ └─┬ vinyl@0.4.6│   ├── clone@0.2.0│   └── clone-stats@0.0.1├─┬ gulp-typescript@2.4.0│ ├─┬ gulp-util@3.0.4│ │ ├── array-differ@1.0.0│ │ ├── array-uniq@1.0.2│ │ ├── beeper@1.0.0│ │ ├─┬ chalk@1.0.0│ │ │ ├── ansi-styles@2.0.1│ │ │ ├── escape-string-regexp@1.0.3│ │ │ ├─┬ has-ansi@1.0.3│ │ │ │ ├── ansi-regex@1.1.1│ │ │ │ └── get-stdin@4.0.1│ │ │ ├─┬ strip-ansi@2.0.1│ │ │ │ └── ansi-regex@1.1.1│ │ │ └── supports-color@1.3.1│ │ ├─┬ dateformat@1.0.11│ │ │ ├── get-stdin@4.0.1│ │ │ └─┬ meow@3.1.0│ │ │   ├─┬ camelcase-keys@1.0.0│ │ │   │ ├── camelcase@1.0.2│ │ │   │ └── map-obj@1.0.0│ │ │   └─┬ indent-string@1.2.1│ │ │     └─┬ repeating@1.1.2│ │ │       └── is-finite@1.0.0│ │ ├── lodash._reescape@3.0.0│ │ ├── lodash._reevaluate@3.0.0│ │ ├── lodash._reinterpolate@3.0.0│ │ ├─┬ lodash.template@3.5.0│ │ │ ├── lodash._basecopy@3.0.1│ │ │ ├── lodash._basetostring@3.0.0│ │ │ ├── lodash._basevalues@3.0.0│ │ │ ├── lodash._isiterateecall@3.0.6│ │ │ ├── lodash.escape@3.0.0│ │ │ ├── lodash.isnative@3.0.2│ │ │ ├─┬ lodash.keys@3.0.6│ │ │ │ ├── lodash.isarguments@3.0.1│ │ │ │ └── lodash.isarray@3.0.2│ │ │ ├── lodash.restparam@3.6.1│ │ │ └── lodash.templatesettings@3.1.0│ │ ├── minimist@1.1.1│ │ ├─┬ multipipe@0.1.2│ │ │ └─┬ duplexer2@0.0.2│ │ │   └─┬ readable-stream@1.1.13│ │ │     ├── core-util-is@1.0.1│ │ │     ├── inherits@2.0.1│ │ │     ├── isarray@0.0.1│ │ │     └── string_decoder@0.10.31│ │ ├── object-assign@2.0.0│ │ ├── replace-ext@0.0.1│ │ └─┬ vinyl@0.4.6│ │   ├── clone@0.2.0│ │   └── clone-stats@0.0.1│ ├─┬ through2@0.6.5│ │ ├─┬ readable-stream@1.0.33│ │ │ ├── core-util-is@1.0.1│ │ │ ├── inherits@2.0.1│ │ │ ├── isarray@0.0.1│ │ │ └── string_decoder@0.10.31│ │ └── xtend@4.0.0│ ├── typescript@1.5.0-alpha invalid│ └─┬ vinyl-sourcemaps-apply@0.1.4│   └─┬ source-map@0.1.43│     └── amdefine@0.1.0├─┬ gulp-uglify@0.3.2│ ├── deepmerge@0.2.7│ ├─┬ gulp-util@3.0.4│ │ ├── array-differ@1.0.0│ │ ├── array-uniq@1.0.2│ │ ├── beeper@1.0.0│ │ ├─┬ chalk@1.0.0│ │ │ ├── ansi-styles@2.0.1│ │ │ ├── escape-string-regexp@1.0.3│ │ │ ├─┬ has-ansi@1.0.3│ │ │ │ ├── ansi-regex@1.1.1│ │ │ │ └── get-stdin@4.0.1│ │ │ ├─┬ strip-ansi@2.0.1│ │ │ │ └── ansi-regex@1.1.1│ │ │ └── supports-color@1.3.1│ │ ├─┬ dateformat@1.0.11│ │ │ ├── get-stdin@4.0.1│ │ │ └─┬ meow@3.1.0│ │ │   ├─┬ camelcase-keys@1.0.0│ │ │   │ ├── camelcase@1.0.2│ │ │   │ └── map-obj@1.0.0│ │ │   └─┬ indent-string@1.2.1│ │ │     └─┬ repeating@1.1.2│ │ │       └── is-finite@1.0.0│ │ ├── lodash._reescape@3.0.0│ │ ├── lodash._reevaluate@3.0.0│ │ ├── lodash._reinterpolate@3.0.0│ │ ├─┬ lodash.template@3.5.0│ │ │ ├── lodash._basecopy@3.0.1│ │ │ ├── lodash._basetostring@3.0.0│ │ │ ├── lodash._basevalues@3.0.0│ │ │ ├── lodash._isiterateecall@3.0.6│ │ │ ├── lodash.escape@3.0.0│ │ │ ├── lodash.isnative@3.0.2│ │ │ ├─┬ lodash.keys@3.0.6│ │ │ │ ├── lodash.isarguments@3.0.1│ │ │ │ └── lodash.isarray@3.0.2│ │ │ ├── lodash.restparam@3.6.1│ │ │ └── lodash.templatesettings@3.1.0│ │ ├── minimist@1.1.1│ │ ├─┬ multipipe@0.1.2│ │ │ └─┬ duplexer2@0.0.2│ │ │   └─┬ readable-stream@1.1.13│ │ │     ├── core-util-is@1.0.1│ │ │     ├── inherits@2.0.1│ │ │     ├── isarray@0.0.1│ │ │     └── string_decoder@0.10.31│ │ ├── object-assign@2.0.0│ │ ├── replace-ext@0.0.1│ │ └─┬ vinyl@0.4.6│ │   ├── clone@0.2.0│ │   └── clone-stats@0.0.1│ ├─┬ through2@0.6.5│ │ ├─┬ readable-stream@1.0.33│ │ │ ├── core-util-is@1.0.1│ │ │ ├── inherits@2.0.1│ │ │ ├── isarray@0.0.1│ │ │ └── string_decoder@0.10.31│ │ └── xtend@4.0.0│ └─┬ uglify-js@2.4.6│   ├── async@0.2.10│   ├─┬ optimist@0.3.7│   │ └── wordwrap@0.0.2│   ├─┬ source-map@0.1.43│   │ └── amdefine@0.1.0│   └── uglify-to-browserify@1.0.2├─┬ gulp-util@2.2.20│ ├─┬ chalk@0.5.1│ │ ├── ansi-styles@1.1.0│ │ ├── escape-string-regexp@1.0.3│ │ ├─┬ has-ansi@0.1.0│ │ │ └── ansi-regex@0.2.1│ │ ├─┬ strip-ansi@0.3.0│ │ │ └── ansi-regex@0.2.1│ │ └── supports-color@0.2.0│ ├─┬ dateformat@1.0.11│ │ ├── get-stdin@4.0.1│ │ └─┬ meow@3.1.0│ │   ├─┬ camelcase-keys@1.0.0│ │   │ ├── camelcase@1.0.2│ │   │ └── map-obj@1.0.0│ │   ├─┬ indent-string@1.2.1│ │   │ └─┬ repeating@1.1.2│ │   │   └── is-finite@1.0.0│ │   ├── minimist@1.1.1│ │   └── object-assign@2.0.0│ ├── lodash._reinterpolate@2.4.1│ ├─┬ lodash.template@2.4.1│ │ ├── lodash._escapestringchar@2.4.1│ │ ├─┬ lodash.defaults@2.4.1│ │ │ └── lodash._objecttypes@2.4.1│ │ ├─┬ lodash.escape@2.4.1│ │ │ ├─┬ lodash._escapehtmlchar@2.4.1│ │ │ │ └── lodash._htmlescapes@2.4.1│ │ │ └─┬ lodash._reunescapedhtml@2.4.1│ │ │   └── lodash._htmlescapes@2.4.1│ │ ├─┬ lodash.keys@2.4.1│ │ │ ├── lodash._isnative@2.4.1│ │ │ ├─┬ lodash._shimkeys@2.4.1│ │ │ │ └── lodash._objecttypes@2.4.1│ │ │ └─┬ lodash.isobject@2.4.1│ │ │   └── lodash._objecttypes@2.4.1│ │ ├── lodash.templatesettings@2.4.1│ │ └── lodash.values@2.4.1│ ├── minimist@0.2.0│ ├─┬ multipipe@0.1.2│ │ └─┬ duplexer2@0.0.2│ │   └─┬ readable-stream@1.1.13│ │     ├── core-util-is@1.0.1│ │     ├── inherits@2.0.1│ │     ├── isarray@0.0.1│ │     └── string_decoder@0.10.31│ ├─┬ through2@0.5.1│ │ ├─┬ readable-stream@1.0.33│ │ │ ├── core-util-is@1.0.1│ │ │ ├── inherits@2.0.1│ │ │ ├── isarray@0.0.1│ │ │ └── string_decoder@0.10.31│ │ └── xtend@3.0.0│ └─┬ vinyl@0.2.3│   └── clone-stats@0.0.1└── through@2.3.7npm ERR! extraneous_dd_ gulp-param@0.6.3 /var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-paramnpm ERR! invalid_dd_ typescript@1.5.0-alpha /var/www/html/BJS/Babylon.js/Tools/Gulp/node_modules/gulp-typescript/node_modules/typescript_lt_/pre_gt__lt_p_gt__lt_br_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-27T13:59:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@RaananW - Yes_co_ please.  Checking the Github for this has not changed in over 4 months_co_ I am surely using the current version _lt_strong_gt__t_0.6.3_t__lt_/strong_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-04-27T14:45:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ PR created solving both problems._lt_/p_gt__lt_p_gt_@jerome - the problem is that you are using tsc 1.5 alpha (was a bug in gulp-typescript). I updated package.json_co_ works well on my local machine here._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T14:59:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I_t_ll re-test tomorow... from scratch_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-04-27T15:00:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_nothing from scratch _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  just an npm update and you are all set._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T16:01:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_don_t_t I need to get your last gulp and gulp configuration from the repo before ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-04-27T16:41:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Already there. Should work now._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-27T16:50:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ will test _dd_ npm update_lt_/p_gt__lt_p_gt_And if it complains about something_co_ I will erase all and rebuild the repo from scratch (fed up with these github push errors then)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-04-28T07:51:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank you Raanan_lt_/p_gt__lt_p_gt_Everything works fine now... after a reset from scratch _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (didn_t_t want the forced commit pollution)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]