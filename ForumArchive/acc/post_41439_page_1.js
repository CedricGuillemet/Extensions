[{"Owner":"Sudoku","Date":"2018-11-22T10:54:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have a setup with two cameras and i need to show some GUI elements in one viewport while showing other elements in the other one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut it seems like i can only set one layermask for all the GUI elements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any workaround?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPG example_dd_ In the example i would want to have the green box only rendered only with camera1 and the red box only with camera2 \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#DEAE4L_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#DEAE4L_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the end i will use this for dropdown elements in the different viewport panels to individually change the settings of the cameras that are used for the rendering\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-22T13:53:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere you go _dd_ _lt_s_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#DEAE4L_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#DEAE4L_lt_/a_gt__lt_/s_gt_ -&gt_sm_ _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#DEAE4L%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#DEAE4L#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou would need to Gui Textures rendered only in the appropriate Ids.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sudoku","Date":"2018-11-22T14:33:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thi sebavan_co_ thanks for your response! i guess you forgot to save the PG before sending the link?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-22T14:43:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIndeeed _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#DEAE4L%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#DEAE4L#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sudoku","Date":"2018-11-22T17:02:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ awesome! in the babylon GUI docs was written_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/gui#advanceddynamictexture_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/gui#advanceddynamictexture_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\t_lt_strong_gt_Please note that only one fullscreen mode GUI is allowed per scene_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\ti didn_t_t even try than to create two advanceddynamictextures.. thanks!\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#000000_sm_font-size_dd_medium_sm__qt__gt_\n\tdoes someone know why the docs say so?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-22T19:11:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood question_co_ might be true without layer\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]