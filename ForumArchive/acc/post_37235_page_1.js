[{"Owner":"Dos","Date":"2018-04-25T15:12:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m currently successfully loading glb files through the `BABYLON.SceneLoader.ImportMeshAsync(_t__t__co_ rootURL_co_ filename_co_ scene)` method.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering if (for loading times) it was possible to import meshes from a zip file containing the glb one._lt_br /_gt_\n\tI could unzip and get the GLB file but_co_ all I have is it_t_s content but not its path.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to provide ImportMesh or ImportMeshAsync the content to load instead of its path ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-04-25T15:36:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you used the text version of of glTF_co_ then you could take advantage of gzip on the web server (may need to register extension).  I might want to create a text version_co_ then zip it to see if there is any gain.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dos","Date":"2018-04-26T09:32:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for your help. I_t_ll try that too but is there any reason why we can_t_t provide any asset directly instead of its path ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(BJS seems to obviously doing that under the hood so is there any shortcut to provide the glb content in the first place ?)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-04-26T14:43:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not know.  Time to dig into the source_co_ and look for a door_co_ or do a refactoring to serve as one. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the JSON (.babylon) text format_co_ there is way to pass the actual data in the file url parameter.  Perhaps you could refactor for the glTF eqivalent_co_ where ever that is.  One problem with that location is there may be code looking at the extension name_co_ and deciding to branch.  If so_co_ follow the trail.  Since reading a file is async_co_ the processing will be in the callback code.  Perhaps the function in the callback can be called directly. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave fun_co_ &amp_sm_ good hunting.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dos","Date":"2018-05-03T08:52:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you very much for your help. In fact_co_ we switched back to glTF instead of glb and zipped all the assets required by the model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor people landing here with a similar _qt_issue_qt__co_ here_t_s how I did this _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tzip the .gltf .bin and anything else you_t_d need like texture assets.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tI used _lt_a href_eq__qt_https_dd_//stuk.github.io/jszip/_qt_ rel_eq__qt_external nofollow_qt__gt_JSZip_lt_/a_gt_ to extract all assets. This lib offers a bunch of formats to extract files like _t_string_t_ and _t_blob_t_ (those were what I wanted)\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tthen extract the .gltf as a string and replace references to the assets by the extracted blobs\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tand load the modified glTF simply with\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMeshAsync(_t__t__co_ _t__t__co_ `data_dd_${glTFasStringifiedJSON}`_co_ scene)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd voilà!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBonus fact _dd_ The zipped glTF with assets turned out to be lighter than the zipped glb\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for your help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-03T14:56:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor the .gltf itself_co_ you can also just enable gzip on your server &amp_sm_ make sure the .glft file extension is view as text.  The zip-unzip process is then done automatically.  Binaries / texture files do not really zip well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot surprised compressed .glft is smaller than .glb.  For Blender_co_ I also let you pick # of significant digits by data type (positions_co_ normals_co_ UV_co_ vertex colors_co_ &amp_sm_ matrix weights).  This makes things smaller even before zip.  I do not know why anyone else does not do this.  Seeing the difference of having more than 2 digits for matrix weights_co_ or 3 for normals would require a microscope_co_ but other exporters just spew out 8 decimals for everything cause they need to be _qt_super accurate_qt_.  Muggles.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dos","Date":"2018-05-03T15:37:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you for the advice. I like it the way it is now because the zip encapsulates all the assets I need avoiding possible 404 errors if one of these isn_t_t findeable._lt_br /_gt_\n\t_lt_br /_gt_\n\tIl talk to the 3D artists providing me glTFs about decimals. I really didn_t_t thought about that but seeing how geometry adds weight_co_ this seems like an efficient and easy way to optimize !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again_co_ this is so enlightening for me _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]