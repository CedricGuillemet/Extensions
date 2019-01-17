[{"Owner":"splash27","Date":"2018-03-19T11:57:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI suppose that using \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_document.addEventListener(_qt_keydown_qt__co_ function (event) {\n    //detect key and instantly do something\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tis not a good way_co_ because it works outside the game loop. This might cause synchronization and performance issues in some cases.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far as I know_co_ there are a keyboard event queue in most games. When user press button the corresponding event being placed into the queue. The the callback actually fired from game loop and queue reduces._lt_br /_gt_\n\t_lt_br /_gt_\n\tIs there such mechanism in BabylonJS? How to attach my keyboard handling to it?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-19T12:12:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1MK1Y4%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1MK1Y4#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHiya S... good to see you again.  Would THAT method of keypress-checking (our ActionManager) smell any fresher?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI haven_t_t studied the underbelly of actionManager event-wrangling_co_ but if I know Deltakosh and The Core Boys... they have done their best to smoooooothly integrate into browser event system.  Them guys are HOT! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think... if you can use the ActionManager key-testing _t_method_t__co_ you_t_ll be fartin_t_ thru silk.  (in good hands with good keypress listening).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ I hope I was anywhat on-subject.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far as buffering-up held/fast keypress events... boy... let_t_s BOTH ask for information about that.  Those answers might be at browser_co_ OS_co_ or hardware levels.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//unixpapa.com/js/key.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//unixpapa.com/js/key.html_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-19T12:20:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActionManager is a good solution_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ I_t_m not seeing any issues using eventListener like you did_co_ internally_co_ the actionManager also uses those ( all user-input does )_lt_br /_gt_\n\tyou could add it to the canvas element instead_co__lt_br /_gt_\n\tso they are only fired while canvas has focus._lt_br /_gt_\n\t_lt_br /_gt_\n\tIf you want a _t_queue_t__co_ simply write one using an array _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__co_ but i doubt it is necessary.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-19T22:34:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_scene.onKeyboardObservable.add((e)_eq_&gt_sm_{_lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_console.log(e)_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_})_lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"splash27","Date":"2018-03-20T04:21:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI wonder how many entry points for keyboard handling in BabylonJS_dd_ ActionManager_co_ KeyboardObservable_co_ camera_t_s keys and checkInputs_co_ default JS addEventListener. What is the best way to implement in-game controls (firing_co_ reloading_co_ gun switching etc.)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-20T12:56:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_Observables_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-20T17:26:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAs  _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ id_eq__qt_ips_uid_7980_10_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt__lt_/span_gt_ mentioned_co_ they are all connected through observables _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]