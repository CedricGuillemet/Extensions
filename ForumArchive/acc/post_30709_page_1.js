[{"Owner":"agmcleod","Date":"2017-05-28T19:55:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using babylon for a little prototype project_co_ and I tried getting it through npm. It &amp_sm_ cannonjs installed just fine_co_ but pulling them in for a project leads to some issues. The inspector panel throws errors do to BABYLON not being global for example. I like having it through the package_co_ as the tooling is better around it_co_ VSCode autocomplete for example. For now i_t_ve just gone the route of including the script files.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-05-29T05:33:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5580-agmcleod/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5580_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5580-agmcleod/_qt_ rel_eq__qt__qt__gt_@agmcleod_lt_/a_gt_ What is your setup? Do you use webpack or other packaging tool? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-05-29T12:56:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26231_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26231-hersir/_qt_ rel_eq__qt__qt__gt_@Hersir_lt_/a_gt_ Yep! Using webpack2 &amp_sm_ yarn. I added the babylonjs and cannon packages as dependencies. At the entry file_co_ i would have\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import BABYLON from _t_babylonjs_t_\nimport _t_cannon_t__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe BABYLON instance seemed to work okay_co_ but yeah things fell apart when it tries to load the inspector. As it expects BABYLON to be global. I suppose I could hoist it to WINDOW maybe_co_ but that sounds not so smart _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGiving it another try this morning_co_ seem to have trouble loading the physics plugin. The version I did with just injecting the script tag_co_ is using a build i downloaded_co_ which includes cannonjs. So not sure if I need to bootstrap that into Babylon somehow.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hersir","Date":"2017-05-29T13:17:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5580-agmcleod/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5580_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5580-agmcleod/_qt_ rel_eq__qt__qt__gt_@agmcleod_lt_/a_gt_ You can use _lt_span style_eq__qt_color_dd_#6a8759_sm__qt__gt__lt_a href_eq__qt_https_dd_//github.com/webpack-contrib/expose-loader_qt_ rel_eq__qt_external nofollow_qt__gt_expose-loader_lt_/a_gt__lt_/span_gt_ for that.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n test_dd_ require.resolve(_t_babylonjs_t_)_co_\n use_dd_ [{\n   loader_dd_ _t_expose-loader_t__co_\n   options_dd_ _t_BABYLON_t__co_\n }]_co_\n}_co__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSimilar for cannon as Babylon uses it from global scope.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-05-29T13:18:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh damn_co_ that_t_s pretty cool. I actually just tried hacking it with_dd_ window.CANNON _eq_ CANNON_co_ which worked _dd_D. But I feel like that_t_s a more modern way of doing things.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"agmcleod","Date":"2017-05-29T13:50:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tGave it a try_co_ having both BABYLON &amp_sm_ CANNON setup through the expose-loader seems to cause an infinite loop of rebuilds from webpack. I tried just putting in cannon_co_ and removing my window hoist_co_ but it doesn_t_t seem to get found by babylon. May just keep my window hoist hack instead.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]