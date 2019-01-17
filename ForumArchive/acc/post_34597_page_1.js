[{"Owner":"JackFalcon","Date":"2017-12-16T01:05:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there a way to tell the back of a mesh.to.lookAt() something? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ need object to lookAt target point in opposite direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny tips?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-16T05:21:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsolution continues to be_dd_ _qt_reverse it in blender_qt_...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSuper cool to be able  to pick which side the lookAt() is looking at from...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-12-16T07:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25131_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25131-afalcon/_qt_ rel_eq__qt__qt__gt_@aFalcon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere ya go_co_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ // Opposite Direction ?\n    var lookAtOppositeDirection _eq_ true_sm_\n    // All rotations or just Y ?\n    var negateAllRotations _eq_ true_sm_\n\n        scene.onPointerDown _eq_ function(evt_co_ pick){\n            if(!pick || !pick.hit) return_sm_\n            box.lookAt(pick.pickedPoint)_sm_\n\n            if(lookAtOppositeDirection){\n                if(negateAllRotations){\n                    // Opposites all rotations_co_  x y and z.\n                    // e.g. if looking downwards_co_ \n                    // after negate it will look upwards in the opposite direction_co_ \n                    // (visual is same since it_t_s a box.)\n                    box.rotation.negate()_sm_\n                }\n                else {\n                    // Opposites only rotation y.\n                    // e.g. if looking downwards towards x 1_co_\n                    // after_co_ it will look downwards towards x -1.\n                    box.rotation.y -_eq_ Math.PI_sm_\n                }\n                \n            }\n        }_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNote_sm_ it won_t_t work with rotationQuaternions_co_ i don_t_t use them_co_ so don_t_t know the correct values/calculations to use.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#CTW4AI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#CTW4AI#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-16T18:51:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Love it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Adam reminded me of something_co_ the other day._lt_/span_gt_  Stare at this for a minute or two.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.0/abstractmesh#lookat-targetpoint-yawcor-pitchcor-rollcor-space-rarr-abstractmesh-classes-3-0-abstractmesh-_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/classes/3.0/abstractmesh#lookat-targetpoint-yawcor-pitchcor-rollcor-space-rarr-abstractmesh-classes-3-0-abstractmesh-_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne might ponder what this would do_dd_   pitchCor _eq_ yawCor _eq_ rollCor _eq_ Math.PI_sm_  I think that would change lookAt()... into lookAwayFrom().  Right?  Maybe not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this doesn_t_t step on any toes.  If so_co_ Adam did it_co_ not me.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2017-12-16T22:54:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou could just look at the opposite point_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let diff _eq_ target.position.subtract(mesh.position)_sm_\nlet opposite _eq_ mesh.position.add(diff.scale(-1))_sm_\nmesh.lookAt(opposite)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2017-12-17T01_dd_56_dd_26Z_t_ title_eq__t_12/17/2017 01_dd_56  AM_t_ data-short_eq__t_1 yr_t__gt_December 17_co_ 2017_lt_/time_gt_ by Gijs_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Fixed code\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-16T22:57:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou guys are the best. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll study each... thx!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-17T13:32:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_198845_qt_ data-ipsquote-contentid_eq__qt_34597_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1513464898_qt_ data-ipsquote-userid_eq__qt_22401_qt_ data-ipsquote-username_eq__qt_Gijs_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t14 hours ago_co_ Gijs said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_let_lt_/span_gt__lt_/span_gt_ diff _eq_ target.position.subtract(mesh.position)_sm__lt_br /_gt__lt_span_gt_let_lt_/span_gt_ opposite _eq_ mesh.position.add(diff.scale(-_lt_span_gt_1_lt_/span_gt_))_sm__lt_br /_gt_\n\t\t\tmesh.lookAt(opposite)_sm_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWow.  That_t_s just... something.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  mesh.position.add(diff.scale(-_lt_span_gt_1_lt_/span_gt_))_sm_  Interesting!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStuff like that... requires that special world-space math gene.  I don_t_t have one of those.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s stuff to be learned_co_ there.  Cool.  The rollcor/pitchcor/yawcor _eq_ Math.PI... that version is still shorter_co_ but i never tested if it actually works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\taWeirdo_t_s box.rotation.negate() is a pretty interesting idea_co_ too.   All you guys are too cool!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JackFalcon","Date":"2017-12-17T22:47:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt__co_ I see you do great work. Thanks n stuff...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQuaternions. Yay! Yeah_co_ not too much_dd_ yaw_co_ pitch_co_ rollin_t_.... here. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAaand it worked. Thx!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFollowing a motion path... and needed to look the other way!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[Kinda like my life... Jk]_sm_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\thooray for negate()!!! Wait_co_ what? negate(that)_sm_ //something...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[Lolzzz. Back to work!]\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHi_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22401-gijs/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22401_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22401-gijs/_qt_ rel_eq__qt__qt__gt_@Gijs_lt_/a_gt_ great @handle. Fun typing. Cool use of add() subract()...and scale()? Oh. Note to self_dd_ experiment ... Thx!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ ya mon_co_ scale(-1)_sm_  thanks for pointing that out! --&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tQ_dd_ _lt_em_gt_your scale is - what now? A_dd_ -1. [oh really_co_ great.]. _lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBrain inverts. And mind is erased. Moving on...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_world-space math gene_qt_ - heard about that!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--&gt_sm_The magic beans jack used to grow a beanstalk into the clouds_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ Math beans...? Where do we get the MathBeans!?!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  magic right? Oh.... maagic! Wink.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[falcon stuffs  _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_rollcor/pitchcor/yawcor _eq_ Math.PI_lt_/span_gt__qt_ in pocket].\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx ... [cool stuff].\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ bye guys...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_jokes-not-removed/&gt_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]