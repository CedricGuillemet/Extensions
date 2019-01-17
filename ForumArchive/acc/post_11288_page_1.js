[{"Owner":"The Snow Irbix","Date":"2014-12-24T18:12:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was testing shadows when I have noticed a strange comportment _dd_ _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1WAGFM_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1WAGFM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs this normal ? It appears when I put negative Z position for the light.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-24T18:47:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Irbix!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   Setting _qt_direction vectors_qt_ sucks.  I am still looking for better ways to set directions.  Let_t_s take a look at your line 13...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar light _eq_ new BABYLON.DirectionalLight(_qt_dir01_qt__co_ new BABYLON.Vector3(-0.5_co_ -2_co_ -0.5)_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI could be wrong about ANY of this_co_ but it is my experience that when dealing with direction vectors (-0.5_co_ -2_co_ -0.5)_co_ the values are always between -1 and +1.  They don_t_t HAVE TO be_co_ but when they are_co_ the vector is said to be _qt_normalized_qt_.  Any direction can be set... using only values between -1 and +1 inclusive.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn directional and spot lights (lights that use directions)... we have a helper function...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlight.setDirectionToTarget(anyVec3Position)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ you can turn off the animation_co_ make a temporary_box_co_ put it out into the scene where you want to aim a light.  Then add this somewhere...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlight.setDirectionToTarget(temporary_box.position)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\talert(light.direction)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t// or alert(light.direction.x.toFixed(3) + _qt_ _dd_ _qt_ + light.direction.y.toFixed(3) + _qt_ _dd_ _qt_ + light.direction.z.toFixed(3))_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow RUN.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe numbers in the alert... are the numbers to use when you want to set your light.direction.  Then remove or invisible the temporary aiming box_co_ because you now have the numbers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlight.setDirectionToTarget also works inside animation loops.  In this version of the demo_co_ I keep re-aiming your directional lights at the flying torus.  It_t_s probably not what you wanted to do_co_ but it is still somewhat fun.  It makes your two directional lights... act like point lights (and point lights normally cannot do shadows).  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1WAGFM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1WAGFM#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice the two _lt_em_gt_setDirectionToTarget_lt_/em_gt_ in the animation loop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing vector3_t_s for position... quite easy.  Using vector3_t_s for rotation_co_ a bit harder.  Using vector3_t_s for directions... blech!  Light.setDirectionToTarget makes it a bit easier... maybe.  Hope this helps.  Smarter people than I are nearby.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Good luck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-12-24T20:28:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Irbix_co_ hi Wingnut_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@Wingnut_lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_I could be wrong about ANY of this_co_ but it is my experience that when dealing with direction vectors (-0.5_co_ -2_co_ -0.5)_co_ the values are always between -1 and +1.  They don_t_t HAVE TO be_co_ but when they are_co_ the vector is said to be _qt_normalized_qt_.  Any direction can be set... using only values between -1 and +1 inclusive._lt_/span_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_In that case you are wrong. 1st - a normalized vector is far more than a vector with values between -1 and 1. Check the normalize() function of Vector3 (or read here - _lt_a href_eq__qt_http_dd_//www.fundza.com/vectors/normalize/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.fundza.com/vectors/normalize/_lt_/a_gt_ ) to understand a bit more what it means. But you are totally right about the fact that a normalized vector gives direction. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ in directional lights_co_ the direction of a directional light is a point in space and not a normalized vector. You can see that from the playground_t_s Shadow example_co_ the vector -1_co_ -2_co_ -1 (which is not normalized) is used to set the light_t_s direction. I have to admit that it is confusing_co_ as I would also expect a normalized vector to be the direction variable._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@Irbix_co_ I assume you are talking about those _qt_cuts_qt_ in the shadows. The simplest answer would be - set the light further away (in the correct direction_co_ or else the shadow will not be emitted) from the shadow source and shadowed surface_co_ it will be solved. I have asked the same question a few months ago_co_ this is the thread_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/9964-shadows-directional-light-and-all-that-jazz/?hl_eq_%2Bshadow+%2Bdirection+%2Blight_qt__gt_http_dd_//www.html5gamedevs.com/topic/9964-shadows-directional-light-and-all-that-jazz/?hl_eq_%2Bshadow+%2Bdirection+%2Blight_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-24T21:16:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks raananw!  I guess I need to study these things a bit closer.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Thanks for the info and leads!  I thought Irbix set that -2 in there_co_ but i guess the author of the shadows demo... set it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But still_co_ I don_t_t think the 2nd parameter of a directionalLight constructor... is a point in space.  Its a direction_co_ I think.  That_t_s why you can do this..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_13.  var light _eq_ new BABYLON.DirectionalLight(_qt_dir01_qt__co_ new BABYLON.Vector3(-1_co_ -2_co_ -1).normalize()_co_ scene)_sm__lt_/p_gt__lt_p_gt_  and_lt_/p_gt__lt_p_gt_23.  var light2 _eq_ new BABYLON.DirectionalLight(_qt_dir02_qt__co_ new BABYLON.Vector3(-1_co_ -2_co_ -1).normalize()_co_ scene)_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_...and the direction of the lights do not change.   It just LOOKS like a position._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-12-24T22:18:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Looking at the code_co_ I see you are right. The demos should be updated _dd_-) the function setDirectionToTarget is actually calculating the direction between the target entered and the position given. Maybe the constructor should modified to actually use this function and accept target and not direction..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-12-25T03:15:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That had to be Deltakosh or some other person who has a _qt_3D Brain_qt_.  These guys can THINK a direction.  They_t_re 3D fry-daddies.  I heard Davrous mention it... said Deltakosh had a 3D brain.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yep_co_ I did some work on the lights tutorial_co_ and realized that I didn_t_t understand directions_co_ and I had to go on a research mission.  I didn_t_t learn anything.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  But directions need to have SOME _qt_magnitude_qt_ or else they essentially error-out or something like that.  Sooo... a light.direction _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0) has no magnitude on any axis.  If you use it like this_co_ your computer will blow up.  No magnitude to the direction. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Deltakosh used a -1_co_ -2_co_ -1.  It_t_s a ratio_co_ and the direction has substantial magnitude.  It has _qt_length_qt_.  A setting of -10_co_ -20_co_ -10 has 10 times the magnitude... but still points the light in the same direction.  Weird.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I fought and fought with trying to master directions_co_ and finally stole the subtract code from somewhere on the internet.  light.direction _eq_ BABYLON.Vector3.Normalize(target.position.subtract(light.position))_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t think the normalize really needs to be in there_co_ but it worked.  Then I begged DK to install it in the framework for me/us_co_ and he did.  The birth of light.setDirectionToTarget().  An early version of it was used on _lt_strong_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/lights/direction/directions04.htm_qt_ rel_eq__qt_external nofollow_qt__gt_this nightmare demo_lt_/a_gt__lt_/strong_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yep_co_ directions.  It takes a MAN to type-in directions perfectly... off the top of his head.  I_t_m not man enough.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2014-12-26T10:39:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello all _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want to practice and want to target an object you can also use BABYLON.Ray object to get a direction _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1WAGFM%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1WAGFM#2_lt_/a_gt_ (line 59)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerry Christmas ! _eq_D\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Snow Irbix","Date":"2014-12-26T11:02:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I was wrong because of this sentence_dd_ _qt_The light is emitted from everywhere._qt_ (from _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/06-Lights_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/06-Lights_lt_/a_gt_)_lt_/p_gt__lt_p_gt_But I have finally understood how it work _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Thank you wingnut and raananw for your explanations !_lt_/p_gt__lt_p_gt_And the BABYLON.Ray object seems interesting luaacro_co_ I will take a look at it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Merry Christmas everybody !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]