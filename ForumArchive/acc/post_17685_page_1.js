[{"Owner":"phil1234","Date":"2015-10-06T07:21:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I need to load a mesh_co_ and duplicate it_co_ but with different materials_co_ so createInstance()_co_ seems a little bit limited in that case_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_also if I load a mesh with Append_co_ it is added to the scene_co_ but if I load a mesh with a Load_co_ how do I append it to the scene ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_thanks_lt_/p_gt__lt_pre_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-06T07:44:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_is the .clone() method what you want?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.1/Mesh#clone-name-newparent-donotclonechildren-rarr-mesh-classes-mesh-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.1/Mesh#clone-name-newparent-donotclonechildren-rarr-mesh-classes-mesh-_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phil1234","Date":"2015-10-06T14:37:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99621_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17685_qt_ data-ipsquote-username_eq__qt_iiceman_qt_ data-cite_eq__qt_iiceman_qt_ data-ipsquote-timestamp_eq__qt_1444117449_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_is the .clone() method what you want?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.1/Mesh#clone-name-newparent-donotclonechildren-rarr-mesh-classes-mesh-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/2.1/Mesh#clone-name-newparent-donotclonechildren-rarr-mesh-classes-mesh-_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ok_co_ but does it link the mesh automaticaly to the scene(graph) or do I have to do it  ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phil1234","Date":"2015-10-06T14:42:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok it does it automaticaly_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-10-07T08:09:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you load a scene with Load_co_ you_t_ll then need to copy by hand every mesh/skeleton/etc from the resulting scene to your previous existing scene._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phil1234","Date":"2015-10-07T15:00:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_99788_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17685_qt_ data-ipsquote-username_eq__qt_Vousk-prod._qt_ data-cite_eq__qt_Vousk-prod._qt_ data-ipsquote-timestamp_eq__qt_1444205358_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_If you load a scene with Load_co_ you_t_ll then need to copy by hand every mesh/skeleton/etc from the resulting scene to your previous existing scene._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_yes_co_ hence my question _qt_how do I append it to the scene ?_qt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-10-07T15:13:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm ?? Hence my answer _dd_ to append it to the scene_co_ you need to copy it from the resulting scene in the Load function to your _qt_real_qt_ scene _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Or maybe I don_t_t understand your question _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ alt_eq__qt__dd_wacko_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-07T16:58:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Then use SceneLoader.Append() instead of SceneLoader.Load()._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Loading/babylon.sceneLoader.ts#L139_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Loading/babylon.sceneLoader.ts#L139_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure what this has to with cloning though_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-07T18:53:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_co_ cloning deep copies everything but the material &amp_sm_ skeleton if there is one.  If you wish to clone the skeleton as well_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myClone _eq_ origMesh.clone()_sm_if (origMesh.skeleton){    myClone.skeleton _eq_ origMesh.skeleton.clone(_qt_name_qt__co_ _qt_id_qt_)_sm_}_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]