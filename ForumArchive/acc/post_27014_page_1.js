[{"Owner":"securet","Date":"2016-12-13T00:40:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twhat would be the best approach to move a Mesh constantly independently form framedrops?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n_lt_pre class_eq__qt_ipsCode_qt__gt_mesh.moveWithCollisions(new BABYLON.Vector3(x_co_y_co_z))_lt_/pre_gt_\n_lt_p_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor would \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt_\n_lt_pre class_eq__qt_ipsCode_qt__gt_moveWithCollisions(new BABYLON.Vector3(x*scene.getAnimationRatio()_co_y*scene.getAnimationRatio()_co_z*scene.getAnimationRatio()) _lt_/pre_gt_\n_lt_p_gt_be better\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor would an other approach be better?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-13T15:51:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell_co_ it all depends how you define your velocity (the variable provided to moveWithCollisions). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could multiply it by deltaTime_co_ divide it by the current FPS_co_ or use the animation ratio (which is set like this_dd_ animationRatio _eq_ deltaTime * (60.0 / 1000.0)_sm_) . All depends on your initial velocity vector.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"securet","Date":"2016-12-13T16:04:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tmoveWithCollision(velocity*movex*animationRatio_co_....) should result in a smooth movement? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-13T16:07:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tagain_co_ depends on your variables and your scale _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ moveWithCollision(new Vector3(0.0001_co_ 0.0001_co_ 0.0001)) will be smooth for sure_co_ but will probably get you nowehere. If all of your meshes are 100000 units big_co_ then setting the velocity to 10 will probably be smooth as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust experiment. Give it a try_co_ you will figure it out.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"securet","Date":"2016-12-13T16:57:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tk_co_ ty.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I used the wrong word_co_ by smooth I meant the speed of the mesh should stay the same_co_ independent from the FPS\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I want the mesh to travel the same amount of space no matter if the FPS is at 60 or 20. So multiplying by the animationRatio should do the job.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-12-13T17:05:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep_co_ that_t_s the right factor to use\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]