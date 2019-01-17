[{"Owner":"oschakravarthi","Date":"2018-11-19T08:06:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I want to highlight walls and floors in my model so that the separation of walls and floors will be very realistic. So_co_ I am using HighlightLayer for this. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem I am facing is_co_ in my model_co_ all the four walls of my room are defined as a single mesh. So_co_ the joints of two walls are not highlighted. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I need is_co_ the edges should be highlighted if the angle between these edges is 90 degrees.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt looks like_co_  mesh.enableEdgesRendering is the solution for this problem. So what is the argument I need to supply for epsilon? I could not understand this concept clearly. how to convert my 90 degrees to epsilon?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat other settings I need to set to achieve highlight effect?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-19T10:26:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tepsilon is the value compared against the dot product between vectors of both faces -&gt_sm_ cosine of the angle. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe default value should work with floor and walls so you do not even need to set it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-19T10:53:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!  Also_co_ you might wish perform_dd_  _lt_strong_gt_yourmesh.convertToFlatShadedMesh()_sm__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ play-around with a few directional lights.  You might see different coloring/lighting on walls... enough for user eyes to _qt_feel_qt_ wall delineation/separation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t._lt_em_gt_convertToFlatShadedMesh()_lt_/em_gt_ tends to add quite a few extra vertices to your mesh_co_ but the wall-shading goodness... might be worth it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemember... after the convert... play with lighting angles.  Use the handy directionLight/spotlight ._lt_em_gt_setDirectionToTarget_lt_/em_gt_(anytarget.position)... for help aiming directional lights.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe actual .position of directional lights... is not important_co_ UNLESS you want to cast shadows with them.  In that case_co_ the light_t_s .position is used in creating the shadowMap_co_ and so_co_ it_t_s very important_co_ then.  (at least I THINK that_t_s how it all works).  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Also_co_ I have seen folks use a linesMesh... to simply draw lines where walls/floors intersect.  Might work_co_ might not._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_This is a common problem.  Lack of _qt_definition_qt_ for smooth-shaded mesh.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Keep us posted and/or mark as solved when satisfied.  Meantime... stay tuned... more comments coming_co_ likely. _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"oschakravarthi","Date":"2018-11-19T13:57:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235379_qt_ data-ipsquote-contentid_eq__qt_41368_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542624833_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi guys!  Also_co_ you might wish perform_dd_  _lt_strong_gt_yourmesh.convertToFlatShadedMesh()_sm__lt_/strong_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThen_co_ play-around with a few directional lights.  You might see different coloring/lighting on walls... enough for user eyes to _qt_feel_qt_ wall delineation/separation.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t._lt_em_gt_convertToFlatShadedMesh()_lt_/em_gt_ tends to add quite a few extra vertices to your mesh_co_ but the wall-shading goodness... might be worth it.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tRemember... after the convert... play with lighting angles.  Use the handy directionLight/spotlight ._lt_em_gt_setDirectionToTarget_lt_/em_gt_(anytarget.position)... for help aiming directional lights.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe actual .position of directional lights... is not important_co_ UNLESS you want to cast shadows with them.  In that case_co_ the light_t_s .position is used in creating the shadowMap_co_ and so_co_ it_t_s very important_co_ then.  (at least I THINK that_t_s how it all works).  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_Also_co_ I have seen folks use a linesMesh... to simply draw lines where walls/floors intersect.  Might work_co_ might not._lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_This is a common problem.  Lack of _qt_definition_qt_ for smooth-shaded mesh.  _lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_Keep us posted and/or mark as solved when satisfied.  Meantime... stay tuned... more comments coming_co_ likely. _lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi_co_ Thanks for the suggestion. Unfortunately_co_ I cannot use _lt_strong_gt_convertToFlatShadedMesh _lt_/strong_gt_because_co_ all my textures are emisive textures and all those meshes are excluded from existing lights. When I use _lt_strong_gt_convertToFlatShadedMesh _lt_/strong_gt__co_ it appears like this (screenshot attached)\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/Untitled.png.30fdd0492ef17919614fbf4d385fa80c.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_21079_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/Untitled.png.30fdd0492ef17919614fbf4d385fa80c.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Untitled.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"oschakravarthi","Date":"2018-11-20T17:08:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_235373_qt_ data-ipsquote-contentid_eq__qt_41368_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1542623212_qt_ data-ipsquote-userid_eq__qt_20193_qt_ data-ipsquote-username_eq__qt_Sebavan_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 11/19/2018 at 3_dd_56 PM_co_ Sebavan said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tepsilon _lt_span_gt_﻿_lt_/span_gt_is the value compared against the dot product between vectors of both faces -&gt_sm_ cosine of the angle. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe default value should work with floor and walls so you do not even need to set it.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThank you _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhat should be the value of epsilon if the angle between two edges is 90 degrees?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-20T18:01:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe default one will work_co_ so _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_mesh_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_.enableEdgesRenderi_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_ng_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_/span_gt_() will be sufficient.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]