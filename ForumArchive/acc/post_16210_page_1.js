[{"Owner":"Ruprect99","Date":"2015-08-04T10:56:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is my first post and I_t_m new to babylon.js._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying to develop a proof of concept for a building modelling tool_co_ so I_t_ve knocked up a model in sketchup and exported it using blender to a babylon js file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m hoping to get a kind of glassy x-ray effect a like you can see here_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.dreamstime.com/stock-image-house-3d-rendered-blue-image16320661_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.dreamstime.com/stock-image-house-3d-rendered-blue-image16320661_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So far I_t_ve managed just by setting the alpha channel to get what you can see in the picture_co_ but it is somewhat lacking!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What do I need to make it really pop out and look like the provided link? more detail around the doors/ windows would help_co_ but I seem to be missing outlines and that glassy look._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also just setting it to wireframe looked quite good_co_ but the large expanses like the roof lack definition. I guess to get a good representation in wireframe mode I would need to split the large expanses up into smaller areas?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any thoughts or ideas would be most welcome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks very much_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-71818000-1438685341.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-71818000-1438685341_thumb.png_qt_ data-fileid_eq__qt_4747_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15781-0-71818000-1438685341_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-04T17:33:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello I think the best way would be to use a custom shader like this one_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//babylonjs.com/cyos/#23U1UJ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.com/cyos/#23U1UJ_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ ​_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruprect99","Date":"2015-08-05T08:55:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ Thanks for the reply_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I downloaded the shader from the supplied and added it to my project and the results are a bit odd._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_it now looks like a mostly white building with a few surfaces picked out in grey (see attached scene shot)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_this makes me think that there might be something wrong with my model (also attached_co_ rename to LittleHouse.babylon)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve tried different forms of lighting_co_ setting the alpha on the material (this seems to have no effect). _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any ideas?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-27625800-1438764666.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-27625800-1438764666.png_qt_ data-fileid_eq__qt_4757_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15781-0-27625800-1438764666.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_4758_qt__gt_LittleHouse.txt_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-05T18:12:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can you please share it online? (with a reference to www.babylonjs.com/babylon.max.js)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruprect99","Date":"2015-08-05T18:25:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Share what online?_lt_/p_gt__lt_p_gt_This is part of a Cordova mobile solution so not easily shared. Is there a suggested way of sharing Babylon solutions?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruprect99","Date":"2015-08-06T11:03:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been think about the way fresnel shading works and I don_t_t think it will work well for this model_co_ as it doesn_t_t have enough curved surfaces to create the desired effect. You can see this if you replace the spheres in the playground demo with planes_co_ you loose the outline effect._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I really would like is something like the attached screen shot from sketchup_co_ with the outlines showing and the building transparent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I found a few x-ray shaders (here _qt__qt_http_dd_//stackoverflow.com/questions/26336585/three-js-webgl-x-ray-effect/26356616#26356616_qt_)_co_ but I can_t_t get them working in babylon because I can_t_t find how to access the Normal Matix? I read another post saying that it is not exposed in Babylon?? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_How could I get the outline showing?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Are there any outline shaders availiable?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Something like this? _lt_a href_eq__qt_http_dd_//www.floored.com/blog/2014/sketch-rendering?_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.floored.com/blog/2014/sketch-rendering?_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-96803000-1438858520.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-96803000-1438858520_thumb.png_qt_ data-fileid_eq__qt_4768_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15781-0-96803000-1438858520_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-08-06T12:07:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If possible_co_ reproducing your scene in the playground will make things easier_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ setting the meshes _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_visibility_lt_/span_gt_ property &lt_sm_ 1 will make the mesh transparent. But the _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_alpha_lt_/span_gt_ property of the material should have this effect too_co_ so that_t_s weird. Can_t_t help you more without seeing the code _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Finally_co_ you can do pretty sweet things with the material_t_s fresnel parameters_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#GK7FK_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#GK7FK_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruprect99","Date":"2015-08-06T12:37:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ Thanks for the suggestion._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would love to get my model into the playground_co_ but how do I upload it so its accessible to it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I loaded your texture and it looks great (see picture)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think all it really needs now is some kind of edge/wireframe over the top to give the edges some definition. Any ideas on that?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-28837600-1438864578.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-28837600-1438864578_thumb.png_qt_ data-fileid_eq__qt_4770_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15781-0-28837600-1438864578_thumb.p_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-08-06T12:47:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Uploading files on the playground is not really possible... The simplest thing might be to work on an already existing model in the playground to try and achieve the right effect_co_ before applying it to your own model._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_At any rate_co_ I don_t_t know of an easy way to display edges on a model. Maybe_co_ as was explained in one of the links you provided_co_ detect which polygons are part of the same face? Then_co_ assign a unique color to each of the faces_co_ and when the whole object is rendered_co_ draw an edge between polygons of different color. Although I_t_m pretty sure this would require a deferred rendering approach._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hopefully someone will know better!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruprect99","Date":"2015-08-06T13:24:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_After thinking about it a bit I thought that adding detail around key areas would probably help_co_ so I added some more detail to the roof (just cause that was an easy place to start)_co_ and it does make the shader work more effectively._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess that is key to this_co_ is dropping detail where you want to see through (so no texture on the walls for instance)_co_ but more detail around doors and windows etc_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Adding the roof detail meant that it started to struggle to render on my android phone_co_ but it should zip along on the ipad._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-11717500-1438867285.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_08_2015/post-15781-0-11717500-1438867285.png_qt_ data-fileid_eq__qt_4771_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-15781-0-11717500-1438867285.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-08-06T13:29:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Don_t_t hesitate to tweak the _t_bias_t_ parameters on the fresnel effects_co_ some values may give a better effect than others _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ good luck!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruprect99","Date":"2015-08-06T13:33:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ I really am very new to this. What does the bias actually do?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-08-06T13:57:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It defines how quick the fresnel effect fades when going towards the object_t_s center (sort of). A high bias (&gt_sm_ 0.8) makes only a very narrow outline_co_ whereas a low value (&lt_sm_ 0.2) almost covers all the object in the effect._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_See the playground scene I linked in my previous post? you can just tweak around values in there and press _qt_run_qt_ to see for yourself _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]