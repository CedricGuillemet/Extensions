[{"Owner":"devAxeon","Date":"2018-08-24T15:30:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to prevent the headset from changing the position of the camera_co_ and keep only the device_t_s rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid I miss something ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a PG of what I_t_ve tried_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#9RCQVW_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#9RCQVW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTested on Firefox + HTC Vive.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks !!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-24T15:42:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-08-24T19:40:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis looks like a bug_co_ created _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/5003_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/5003_lt_/a_gt_ to track this\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-08-28T00:13:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFixed (Tested with Windows headset) should be available tomorrow_co_ I also had to make some changes to the controllers_co_ please give it a try and let me know if it behaves as desired.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-09-03T12:37:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ !!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Thank you for the fix !_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_It works very well with the HTC Vive headset_co_ but controllers follow the headset_t_s moves. So the camera position is frozen_co_ but the controllers meshes get away on moving and the don_t_t respect the _qt_real distance_qt_. I think it_t_s because the controllers translation is not well removed according to the issue checklist.. I_t_ve tried to capture a video where you can see the difference between the controller position in the scene and in the vive_t_s menu_co_ but it_t_s seems impossible so I let you test it if you can..._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-04T16:39:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28559_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/_qt_ rel_eq__qt__qt__gt_@devAxeon_lt_/a_gt_ I see what you are saying_co_ to confirm are you expecting them to behave like 3dof controllers or 6dof controllers just with the head not being tracked?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-09-05T09:20:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ Sorry I did not understand your message _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😕_lt_/span_gt__lt_/span_gt__lt_br /_gt_\n\tBut I made you a diagram explaining the situation_dd__lt_br /_gt_\n\tThe gray arrow is what is happening now_co__lt_br /_gt_\n\tWhat would be needed is represented by the green arrow (the same vector as the black one but relative to the current camera)._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19901_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_09/image.png.40f5c6fd2e278b1cab2d0b02c4695df2.png_qt_ alt_eq__qt_image.png.40f5c6fd2e278b1cab2d0b02c4695df2.png_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-05T16:55:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ so when the controllers are moved_co_ their position should not change at all in Babylon_t_s worldspace and behave the same as a 3dof controller. I_t_ll take another stab at getting this behavior_co_ I_t_m a little busy at the moment but will try to get this sometime next week.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"devAxeon","Date":"2018-09-06T12:27:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo problem !! Many thanks _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29361_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29361-trevordev/_qt_ rel_eq__qt__qt__gt_@trevordev_lt_/a_gt_ !! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"trevordev","Date":"2018-09-17T05:33:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28559_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28559-devaxeon/_qt_ rel_eq__qt__qt__gt_@devAxeon_lt_/a_gt_ created a new PR for this here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/5158_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/5158_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-17T15:49:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMerged!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]