[{"Owner":"RobinHood","Date":"2018-02-25T11:47:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow do I lock position of object when using arc camera_co_ I want to lock it to upper right of the screen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf possible please also tell me the principle/math behind your answer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21IMDW%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21IMDW#1_lt_/a_gt_  but it does not work for arccamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank You.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-25T12:46:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya RH_co_ welcome to the forum.  Here ya go...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#21IMDW%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#21IMDW#12_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA little parenting in line 17... seems to do the trick.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RobinHood","Date":"2018-02-25T21:45:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBut now it doesn_t_t rotate at the same place_co_ I just want to restrict its position and not rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my attempt_co_ but does not work properly_co_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#ZD2U7J_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#ZD2U7J_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-02-26T12:44:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30476-robinhood/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30476_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30476-robinhood/_qt_ rel_eq__qt__qt__gt_@RobinHood_lt_/a_gt__co_ I hope your charity work never stopped.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ what _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ showed you is exactly the demo you showed in your first message_co_ but with an arc rotate. Parenting would be the idle candidate for lock an object in relation to the camera (or any other node).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to lock the object in front of the camera in a certain position_co_ you can use the camera_t_s direction and move the mesh along this axis. For example_co_ this way - _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#21IMDW%2314_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#21IMDW#14_lt_/a_gt_ . The fact that the mesh jitters needs to be checked (I will add an issue and we_t_ll see when we address this)_co_ but in general_co_ this would be  IMO the right way to go.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(BTW - any target camera (like the arcrotate) has the function getFrontPosition which can help here - _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#21IMDW%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#21IMDW#15_lt_/a_gt_. again_co_ same issue_co_ we will see what can be done)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]