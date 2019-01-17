[{"Owner":"PeapBoy","Date":"2018-07-02T13:31:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello !_lt_br /_gt_\n\t_lt_br /_gt_\n\tAs I_t_m currently playing with some unsigned integer textures_co_ I would love to see BabylonJS support them._lt_br /_gt_\n\tI_t_ll do a PR as soon as possible_co_ adding some (all ?) constants about internal formats (for instance Engine.TEXTUREFORMAT_RGBA_INTEGER) and texture types (for instance Engine.TEXTURETYPE_UNSIGNED_SHORT)_co_ and updating the function to retrieve the internal sized format in order to be able to return new values as gl.RGBA16UI._lt_br /_gt_\n\t_lt_br /_gt_\n\tDoes it seem ok for you ?_lt_br /_gt_\n\t_lt_br /_gt_\n\tMoreover_co_ _lt_strong_gt_we_t_re still using Engine.TEXTURETYPE_UNSIGNED_INT to refer to_lt_s_gt_ both gl.UNSIGNED_INT (only available for depth textures in WebGL 1) and_lt_/s_gt_ gl.UNSIGNED_BYTE texture types_lt_/strong_gt_. I think we need to do a breaking change because gl.UNSIGNED_INT is now a valid texture type for unsigned integer textures in WebGL2 like RGBA32UI textures._lt_br /_gt_\n\t_lt_br /_gt_\n\tValid combinations of internal format_co_ type and internal size format are listed _lt_a href_eq__qt_https_dd_//www.khronos.org/registry/OpenGL/specs/es/3.0/es_spec_3.0.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_here in table 3.2_lt_/a_gt_._lt_br /_gt_\n\tColor-renderable and texture-filterable formats are listed _lt_a href_eq__qt_https_dd_//www.khronos.org/registry/OpenGL/specs/es/3.0/es_spec_3.0.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_here in table 3.13_lt_/a_gt_._lt_br /_gt_\n\t_lt_br /_gt_\n\tThis info is also gathered _lt_a href_eq__qt_https_dd_//www.khronos.org/registry/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_._lt_br /_gt_\n\tAnd this is a bit less exhaustive in _lt_a href_eq__qt_https_dd_//www.khronos.org/registry/webgl/specs/latest/2.0/#3.7.6_qt_ rel_eq__qt_external nofollow_qt__gt_WebGL 2 Specs_lt_/a_gt_._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_strong_gt_[EDIT]_lt_/strong_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tWith WebGL2_co_ specify the internal sized format will be necessary as some combinations of format and type don_t_t lead to a unique internal sized format. For this purpose_co_ we_t_ll need to add internal sized formats as constants in BABYLON.Engine and we won_t_t lean on _getRGBABufferInternalSizedFormat() function anymore._lt_br /_gt_\n\t_lt_br /_gt_\n\tHowever_co_ only a few combinations fail to give a unique result_dd__lt_br /_gt_\n\t- RGBA format  + UNSIGNED_BYTE type_lt_br /_gt_\n\t- RGBA format + UNSIGNED_INT_2_10_10_10_REV type_lt_br /_gt_\n\t- RGBA format + FLOAT type_lt_br /_gt_\n\t- RGB format + UNSIGNED_BYTE type_lt_br /_gt_\n\t- RGB format + HALF_FLOAT type_lt_br /_gt_\n\t- RGB format + FLOAT type_lt_br /_gt_\n\t- RG format + FLOAT type_lt_br /_gt_\n\t- RED format + FLOAT type_lt_br /_gt_\n\t_lt_br /_gt_\n\tSo we could just ignore them and return a default value in these cases_co_ for now._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_strong_gt_[EDIT 2]_lt_/strong_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tCurrent type constants_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private static _TEXTURETYPE_UNSIGNED_INT _eq_ 0_sm_\nprivate static _TEXTURETYPE_FLOAT _eq_ 1_sm_\nprivate static _TEXTURETYPE_HALF_FLOAT _eq_ 2_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tSuggested new type constants_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private static _TEXTURETYPE_BYTE _eq_ 0_sm_\nprivate static _TEXTURETYPE_UNSIGNED_BYTE _eq_ 1_sm_\nprivate static _TEXTURETYPE_SHORT _eq_ 2_sm_\nprivate static _TEXTURETYPE_UNSIGNED_SHORT _eq_ 3_sm_\nprivate static _TEXTURETYPE_INT _eq_ 4_sm_\nprivate static _TEXTURETYPE_UNSIGNED_INT _eq_ 5_sm_\nprivate static _TEXTURETYPE_FLOAT _eq_ 6_sm_\nprivate static _TEXTURETYPE_HALF_FLOAT _eq_ 7_sm_\nprivate static _TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 _eq_ 8_sm_\nprivate static _TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 _eq_ 9_sm_\nprivate static _TEXTURETYPE_UNSIGNED_SHORT_5_6_5 _eq_ 10_sm_\nprivate static _TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV _eq_ 11_sm_\nprivate static _TEXTURETYPE_UNSIGNED_INT_24_8 _eq_ 12_sm_\nprivate static _TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV _eq_ 13_sm_\nprivate static _TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV _eq_ 14_sm_\nprivate static _TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV _eq_ 15_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t_lt_u_gt_NOTE 1_dd__lt_/u_gt_ As every user should use the public constants and not directly the private numbers the constants are bound to_co_ we should be allowed to modify the order (FLOAT will be defined by 6 instead of 1 for instance). If you do not want to change the order of the three first constants already defined_co_ just say it._lt_br /_gt_\n\t_lt_u_gt_NOTE 2_dd__lt_/u_gt_ UNSIGNED_INT will not refer to UNSIGNED_BYTE anymore. _lt_u_gt__lt_em_gt__lt_strong_gt_Breaking change._lt_/strong_gt__lt_/em_gt__lt_/u_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_strong_gt_[EDIT 3]_lt_/strong_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tCurrent format constants_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private static _TEXTUREFORMAT_ALPHA _eq_ 0_sm_\nprivate static _TEXTUREFORMAT_LUMINANCE _eq_ 1_sm_\nprivate static _TEXTUREFORMAT_LUMINANCE_ALPHA _eq_ 2_sm_\nprivate static _TEXTUREFORMAT_RGB _eq_ 4_sm_\nprivate static _TEXTUREFORMAT_RGBA _eq_ 5_sm_\nprivate static _TEXTUREFORMAT_R _eq_ 6_sm_\nprivate static _TEXTUREFORMAT_RG _eq_ 7_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_NOTE 1_dd__lt_/u_gt_ No 3 ? Did I miss something ?_lt_br /_gt_\n\t_lt_u_gt_NOTE 2 _dd__lt_/u_gt_ I personally guess TEXTUREFORMAT_R is not a good idea for 3 reasons_dd__lt_br /_gt_\n\t- It_t_s confusing for people already used to WebGL who know it_t_s gl.RED and not gl.R_lt_br /_gt_\n\t- It doesn_t_t seem really instructive for beginners who will think R is the good naming_lt_br /_gt_\n\t- Beginners generally don_t_t play with texture formats and types_lt_br /_gt_\n\tThat_t_s why I suggest to create and use TEXTUREFORMAT_RED in the future. And keep TEXTUREFORMAT_R for retrocompatibility. But once again_co_ it_t_s only a suggestion._lt_br /_gt_\n\t_lt_br /_gt_\n\tSuggested new format constants_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private static _TEXTUREFORMAT_ALPHA _eq_ 0_sm_\nprivate static _TEXTUREFORMAT_LUMINANCE _eq_ 1_sm_\nprivate static _TEXTUREFORMAT_LUMINANCE_ALPHA _eq_ 2_sm_\nprivate static _TEXTUREFORMAT_RED _eq_ 3_sm_\nprivate static _TEXTUREFORMAT_R _eq_ 3_sm_\nprivate static _TEXTUREFORMAT_RG _eq_ 4_sm_\nprivate static _TEXTUREFORMAT_RGB _eq_ 5_sm_\nprivate static _TEXTUREFORMAT_RGBA _eq_ 6_sm_\nprivate static _TEXTUREFORMAT_RED_INTEGER _eq_ 7_sm_\nprivate static _TEXTUREFORMAT_R_INTEGER _eq_ 7_sm_\nprivate static _TEXTUREFORMAT_RG_INTEGER _eq_ 8_sm_\nprivate static _TEXTUREFORMAT_RGB_INTEGER _eq_ 9_sm_\nprivate static _TEXTUREFORMAT_RGBA_INTEGER _eq_ 10_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t_lt_u_gt_NOTE 1_dd__lt_/u_gt_ Once again_co_ we should be allowed to change the order of the first constants as nobody should use the private numbers directly.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-02T20:27:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_dd_) so first thank you for helping!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen my remarks in not particular order_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. We can_t_t change the values of the constants because several users use the value directly. This is bad but they do want they want _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ This is why there is no 3 in texture format. I missed it when I created the _RBG one and now we cannot change it anymore as backward compat is king_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_2. There is no way we introduce breaking changes _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_3. I do not want to expose internal format. We could add a validation step to make sure that combination works but I do not want to let people know about internals because else we won_t_t be able to change anything then (yeah_co_ because back compat is king _lt_span_gt__dd_D)_lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_span_gt_4. Cannot change R to RED (yeah I know that you know why) _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ And honestly this is not a big deal for this one because else why keeping RG? it should be REDGREEN _lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_5. As far as I know_co_ UNSIGNED_INT always refer to BYTE actually_co_ I don_t_t think it was ever used for something else for textures. for real integer we should come with a new name (and we can also introduce a BYTE which will have the same value as the current UNSIGNED_INT)_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Also please just way until Thursday for your PR because we are moving some constants just a bit (but nothing fancy _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ and we are not changing values or names)_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-07-02T21:12:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!_lt_br /_gt_\n\t_lt_br /_gt_\n\t1. Noted._lt_br /_gt_\n\t2. So UNSIGNED_INT won_t_t refer to UNSIGNED_INT and we_t_ll invent UNSIGNED_INTEGER (or anything else) that actually will refer to UNSIGNED_INT_co_ I really hate backwards compatibility _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt__lt_br /_gt_\n\t3. It_t_s fine for me_co_ the impacted combinations that will not be possible don_t_t affect my needs and I think they_t_re very unsual._lt_br /_gt_\n\t4. Because RG is the good naming. It_t_s gl.RED_co_ gl.RG_co_ GL.RGB and gl.RGBA. It_t_s absolutely not important though_co_ just my will to add a constant with the good naming_co_ I didn_t_t plan to remove gl.R at all_co_ just a new one (RED) referring to the same as R._lt_br /_gt_\n\t5. My bad_co_ you_t_re right_co_ UNSIGNED_INT is only referring to UNSIGNED_BYTE_co_ you directly call gl.UNSIGNED_INT for depth textures and drawElements() functions. So I suggest UNSIGNED_INTEGER as a new name for UNSIGNED_INT but I think this should be strongly stated in the docs._lt_br /_gt_\n\t_lt_br /_gt_\n\tOk_co_ thank you_co_ understood!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2018-07-02T21:20:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust to add my two cents.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSometimes keeping too much backward compatibility lead to awful paterns_co_ ugly code and less and less optimised libs... I think we should avoid BJS to become an IE kind of mess _lt_span class_eq__qt_ipsEmoji_qt__gt_😋_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBreaking changes are not convenient for users_co_ but this is exactly what SEMVER is for. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the price to pay to keep a strong tool over time. We sometimes have to dare to take some painful decisions to ensure powerfull and long life to the lib.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsers can understand_co_ accept and adapt. It is for their final good.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Simple_co_ yet powerfull_qt_ does not mean _qt_so simple you never have to adapt_qt__co_ it means _qt_to use it you won_t_t have to do lots of complicated coding weirdness_qt_. And _qt_powerfull_qt_ means true direct power_co_ not a degraded power due to twisted backward compatibility.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy opinion _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-03T15:15:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI agree on that but this specific one (_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt_UNSIGNED_INT) has no impact on performance or code patterns. It is just a naming problem. And I would be really OK to change it (like R -&gt_sm_ RED seems ok for me as we can provide both) if it was not that widely used._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tW_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt_e can_t_t change it as ALL textures use it as a default. So every app written in typescript will no more compile. every app written in JS with a reference to the constant will not compile._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt_I am really concerned by perf and framework quality. And sometimes I validate breaking changes (just check the what_t_s new here_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/whats-new_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/whats-new)_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt_But in this specific case_co_ just for a naming error (that I did)_co_ we cannot afford breaking all the code of all the users. That_t_s not good for the framework_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-03T15:59:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tphu. a lot to read _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ as i interpret Deltakosh _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22373-peapboy/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22373_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22373-peapboy/_qt_ rel_eq__qt__qt__gt_@PeapBoy_lt_/a_gt_ you can do what ever you want as long you end up with_lt_strong_gt_ _lt_/strong_gt_something_lt_strong_gt_ _lt_/strong_gt_like_lt_strong_gt_ _lt_/strong_gt_new BABYLON.WebGL2Texture(_qt_PATH TO IMAGE_qt__co_ scene)_sm_ and it is progressive_co_ performant also don_t_t _lt_/span_gt_consolidate with the existing implementation. _lt_span_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-07-04T18:10:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUh._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_img alt_eq__qt_image.png.a17ddf386e24660e4be26e72af70d833.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19014_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.png.a17ddf386e24660e4be26e72af70d833.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course they exist _lt_span class_eq__qt_ipsEmoji_qt__gt_😠_lt_/span_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry but what should I do with gulp so it doesn_t_t fail compiling because of the new WebGL2 constants ?_lt_br /_gt_\n\t_lt_br /_gt_\n\tI saw this in the code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            // Constants\n            this._gl.HALF_FLOAT_OES _eq_ 0x8D61_sm_   // Half floating-point type (16-bit).\n            if (this._gl.RGBA16F !_eq__eq_ 0x881A) {\n                this._gl.RGBA16F _eq_ 0x881A_sm_      // RGBA 16-bit floating-point color-renderable internal sized format.\n            }\n            if (this._gl.RGBA32F !_eq__eq_ 0x8814) {\n                this._gl.RGBA32F _eq_ 0x8814_sm_      // RGBA 32-bit floating-point color-renderable internal sized format.\n            }\n            if (this._gl.DEPTH24_STENCIL8 !_eq__eq_ 35056) {\n                this._gl.DEPTH24_STENCIL8 _eq_ 35056_sm_\n            }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tHow is it possible that we need to rewrite some constants !?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-04T21:00:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello thank you very much in advance for all your work!_lt_br /_gt_\n\t_lt_br /_gt_\n\tI read in 2018 most mobiles don_t_t even support RGB32F as example_co_ i found this just now and don_t_t know accurate this is_dd_ _lt_a href_eq__qt_https_dd_//gist.github.com/TimvanScherpenzeel/f8efeeb1dbed38a5c5dc0c29768a0413_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/TimvanScherpenzeel/f8efeeb1dbed38a5c5dc0c29768a0413_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tSo lets say you implement DEPTH_COMPONENT16_co_ you also have to make it work in the source of BabylonJS  specially shaders. _lt_br /_gt_\n\tJust think about it_co_ maybe it make more sense to hook up in BabylonJS in a very minimal state of the abstraction Layer to WebGL_co_ so Babylonjs could adapt the new functions (when needed) slowly._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.nullengine_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.nullengine_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tLet_t_s rephrase it for better understanding_dd_ Write raw WebGL or minimal BabylonJS and then at the end _qt_bind_qt_ the hole thing in some BabylonJS like method_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction_eq_()_eq_&gt_sm_{_lt_br /_gt_\n\tgl.getContext(_qt_WebGL2_qt_)_sm__lt_br /_gt_\n\tif (gl &amp_sm_&amp_sm_ gl instanceof WebGLRenderingContext)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tlet Object_eq_{_lt_br /_gt_\n\ttexturetypes_dd_ _qt_ALLWEBGL2TextureTypes_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON._gl _eq_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgl.texImage2D(gl.TEXTURE_2D_co_ level_co_ internalFormat_co_ width_co_ height_co_ border_co_ format_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObject.texturetypes_co_  data)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\treturn new BABYLON.WebGL2Texture(ect._co_ect.)_sm__lt_br /_gt_\n\t}_lt_br /_gt_\n\t_lt_br /_gt_\n\thahah. Sounds crazy_co_ i don_t_t even know what i doing here_co_ should what a movie on Netflix. _dd_ )\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-07-05T09:55:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi !_lt_br /_gt_\n\t_lt_br /_gt_\n\tActually it_t_s not a lot of work of adding a few constants but thanks haha\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_220455_qt_ data-ipsquote-contentid_eq__qt_38584_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530738019_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI read in 2018 most mobiles don_t_t even support RGB32F as example_co_ i found this just now and don_t_t know accurate this is_dd_ _lt_a href_eq__qt_https_dd_//gist.github.com/TimvanScherpenzeel/f8efeeb1dbed38a5c5dc0c29768a0413_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/TimvanScherpenzeel/f8efeeb1dbed38a5c5dc0c29768a0413_lt_span_gt_﻿_lt_/span_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes_co_ principally Apple devices still don_t_t support WebGL2 (so annoying...). But in such cases_co_ BabylonJS already falls back on UNSIGNED_BYTE texture type._lt_br /_gt_\n\t_lt_br /_gt_\n\tI admit I don_t_t really get what you_t_re trying to explain x)_lt_br /_gt_\n\tI don_t_t really like the WebGL2Texture. I don_t_t think the user should manage whether the devices support or not WebGL2_co_ BabylonJS should do it as it already does_co_ inside the Texture classes that already exist. Because it_t_s one of the annoying task I expect Babylonjs to do for me._lt_br /_gt_\n\tAnd I just discovered that BabylonJS provides RawTexture and RawCubeTexture that exactly do what you seem to expect from WebGL2Texture _lt_span class_eq__qt_ipsEmoji_qt__gt_😁_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tAdding the constants. Nothing changes. Every function/constructor that already wait for a format and a type parameter should work as usual.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-05T12:17:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo you were close for a new release_co_ i think_co_ i should no interfear. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_color_dd_#000000_sm_background-color_dd_#fffffe_sm_font-family_dd_Consolas_co_ _t_Courier New_t__co_ monospace_sm_font-weight_dd_normal_sm_font-size_dd_14px_sm_line-height_dd_19px_sm_white-space_dd_pre_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_div style_eq__qt_color_dd_#000000_sm_background-color_dd_#fffffe_sm_font-family_dd_Consolas_co_ _t_Courier New_t__co_ monospace_sm_font-weight_dd_normal_sm_font-size_dd_14px_sm_line-height_dd_19px_sm_white-space_dd_pre_sm__qt__gt_\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_yes something like this would be very nice._lt_br /_gt_\n\t\t\t\tvar myTex _eq__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_#008000_sm__qt__gt_BABYLON.RawTexture(new Float32Array([])_co_1_co_1_co_ gl.RGB32F_co_ true_co_false_co_0_co_null_co_ gl.FLOAT)_sm__lt_br /_gt_\n\t\t\t\tto compensate_lt_br /_gt_\n\t\t\t\tgl.texImage2D( gl.TEXTURE_2D_co_ 0_co_ gl.RGB32F_co_ 9_co_1_co_ 0_co_ gl.RGB_co_ gl.FLOAT_co_new Float32Array([]))_sm__lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\tThank you!\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-07-05T12:38:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt_Yes_co_ just adding the constants and updating the _getRGBABufferInternalSizedFormat()_co_ _getInternalFormat() and _getWebGLTextureType() functions should definitely be enough to create any texture you want with BABYLON.RawTexture or BABYLON.RawCubeTexture ! _lt_span class_eq__qt_ipsEmoji_qt__gt_😊_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-07-05T14:31:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ I succeeded in compiling the code. I needed to add all the WebGL2 constants in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Engine/babylon.webgl2.ts_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#0366d6_sm_font-size_dd_14px_sm__qt_ title_eq__qt_babylon.webgl2.ts_qt__gt_babylon.webgl2.ts_lt_/a_gt_._lt_br /_gt_\n\t_lt_br /_gt_\n\tThere is still a lot I don_t_t know about how works BJS _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PeapBoy","Date":"2018-07-26T17:19:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co__lt_br /_gt_\n\t_lt_br /_gt_\n\tSorry_co_ in holidays _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tYou can find the PR here_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/4839_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/4839_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-26T22:14:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22373-peapboy/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22373_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22373-peapboy/_qt_ rel_eq__qt__qt__gt_@PeapBoy_lt_/a_gt_  _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_texSubImage2D would be nice. but don_t_t feel any pressure. I m fine_co_ - as long as you know what you doing _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0GT2HX%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0GT2HX#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]