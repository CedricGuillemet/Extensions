[{"Owner":"syed samoon","Date":"2017-11-29T06:44:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti need a help. how to set a magnetic collectables for collecting the coin.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tlike in subway surfer\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-29T12:44:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi SS!  Ooooh_co_ excellent challenge! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a little video of what is needed... _lt_a href_eq__qt_https_dd_//www.youtube.com/watch?v_eq_fRLQSlh0qWA_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.youtube.com/watch?v_eq_fRLQSlh0qWA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps a 2-step thing_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#1 - Detecting when coin is near-enough... to be affected by the magnetic field._lt_br /_gt_\n\t#2 - Animating/flying the coin to/toward the constantly-moving player/magnetic-field center.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor #1_dd_  Putting an invisible sphere around the player... which represents the size of the _lt_u_gt_magnetic field_lt_/u_gt_... could be used with intersectsMesh() function_co_ I suppose.  (detection of coin within magnetic field influence area).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor #2_dd_  I have no idea.  Using the standard BJS animation system to move the coin TO a moving target (the magnet)... will likely _lt_u_gt_not_lt_/u_gt_ work.  After coin _lt_strong_gt_-&gt_sm__lt_/strong_gt_ magneticField intersection occurs_co_ the coin will likely need to _lt_u_gt_continuously_lt_/u_gt_ do _lt_em_gt_player.position.subtract(coin.position).  _lt_/em_gt_This math (or its .negate()/inverse)_co_ should provide a FRESH coin _lt_strong_gt_direction-to-player_lt_/strong_gt__lt_em_gt_... _lt_/em_gt_every frame (or faster). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to get the coin to move in the direction-to-player (a little bit) for EACH render frame... is a challenge.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s listen to others_t_ ideas_co_ now.  My synopsis/methods might not be the best way.   So_co_ let_t_s ask for better ways_co_ and/or perhaps someone will _qt_flesh out_qt_ my idea_co_ and try some test scenes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe could use this test scene... to do experiments with _qt_coin sucking_qt_  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  _lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#36UHXZ%2313_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#36UHXZ#13_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCaution_dd_  Each coin is currently parented to ground (might be important-to-know... for testers).  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-29T21:17:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti think i would calculate distance instead of intersection_co_ (personal preference)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand if within preset _qt_magnetic_qt_ distance_co_ parent to magnet (for automatic follow)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen move the coin in the direction of the magnet.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-30T10:16:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep_co_ this is what I would do exactly. Check distance using a simple iterator. If the distance is lower than a certain threshold_co_ create a ray between the two_co_ and apply a (constant) linear velocity in this direction. Which is kind_t_A what  magnet is doing _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-30T16:19:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWouldn_t_t player.position.subtract(coin.position) be much faster than ray-casting?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd aWeirdo_t_s set-coin.parent-to-player... immediately_co_ would be important_co_ too_co_ I think.  Otherwise_co_ the player could be moving forward SO FAST_co_ that he out-runs the animation/velocity steps_co_ and the coin would get (slowly) left behind.  Player_t_s speed out-runs the coin_t_s catch-up speed.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI think the position subtraction thing... gets you BOTH needed values.  You get a _lt_strong_gt_direction_lt_/strong_gt_ to/from the coin/player_co_ AND a _lt_strong_gt_magnitude_lt_/strong_gt_ (magnitude _eq__eq_ distance)_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe.  Lots of Wingnut _t_speculation_t_ happening_co_ here.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-30T16:37:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\ti think if you set parent_co_ all you have to do really is reduce/increase coin.positions until it_t_s 0_co_0_co_0\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-30T16:40:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ I think so_co_ aW.  But parenting could be a problem IF user wants to incorporate physics.  Why put physics on the coins?  *shrug*  I dunno.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf someone can steer me into converting vec3 magnitude... into a single _lt_em_gt_distance_lt_/em_gt_ float_co_ then I_t_ll try an updated/new demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThoughts?  Smart coins?  Put a beforeRender on each coin... and make them constantly _qt_watch_qt_ if/not they are within the mag-field distance threshold?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf so_co_ dispose it_co_ for now?  Yeah.  A crap-load of coins_co_ constantly measuring their distance/direction-to-player.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tProbably smarter to use scene.beforeRender and iterate thru the collection of coins_co_ eh?  *nod*. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a tendency towards autonomous _qt_smart mesh_qt_ robots/mesh-behaviors.  Not sure WHY I have that tendency.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-30T17:04:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell_co__lt_br /_gt__lt_s_gt_a registerBeforeRender on mesh is just another function being executed during babylon_t_s loop i think_co__lt_br /_gt_\n\tso a single loop_co__lt_/s_gt__lt_br /_gt__lt_br /_gt__lt_s_gt_might be better than to have two loops (babylon loop) and loop inside scene.registerBeforeRender.. _lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_just a optimization issue i suppose so not very important atm _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_sm_ just quickly checked up on it_co_ and it_t_s an observer_co_ so when beforeRender is being processed notifyObservers runs a new loop. so still two loops. _lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tanyway_co_ distance.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Returns the distance (float)\nvar dist _eq_ BABYLON.Vector3.Distance(vector3_a_co_ vector3_b)_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-30T18:03:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ thx aW!  Nice.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#36UHXZ%2314_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#36UHXZ#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 58 sets magnetic field radius_co_ which is used to show the temporary magnetic field _qt_proxy ellipsoid_qt_  (woah_co_ dirty talk_co_ eh?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe super dooper looper pooper is in lines 126-134... coded in Genuine Wingnut Slop-Code.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWorks gooooood.  Who_t_s doing the coin animating_co_ and the little fuzzy particle-puff of success? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t do that part_co_ cuz.. unions... ya know?  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-11-30T18:29:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthere ya go_co_ had to drop the parenting to board because of the rotations.. too much work adding offsets to stop the coins going up and down _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#36UHXZ%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#36UHXZ#16_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-30T22:26:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExcellent!  thx aW!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#36UHXZ%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#36UHXZ#17_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThrow-in a little coin rotation at line 138_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-30T22:53:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou should make them have more force the closer they are to the collector_co_ so they move slowly if they are far away and if your closer they zoom fast to give it a more inertia based feel.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2017-11-30T23:51:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tried to collect all coins... before bed! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ No luck.._lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI added some coin rotation line_dd_ 127-128\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#36UHXZ%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#36UHXZ#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood job guys! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]