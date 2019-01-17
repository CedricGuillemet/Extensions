[{"Owner":"Constantin","Date":"2018-04-26T17:05:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey guys_co_ i_t_m really new in all this stuff with WebGL and 3d stuff on web. I_t_m trying to create an Angular 5 component where i can load and run dynamically 3d models. But i_t_m little bit blocked. This is my component_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_export class 3DComponent implements OnInit {\n    private canvas_dd_ any_sm_\n    private engine_dd_ BABYLON.Engine_sm_\n    private camera_dd_ BABYLON.FreeCamera_sm_\n    private scene_dd_ BABYLON.Scene_sm_\n    private light_dd_ BABYLON.Light_sm_\n\n    constructor() { }\n\n    ngOnInit() {\n        this.canvas _eq_ document.getElementById(_t_3dComponent_t_)_sm_\n        this.engine _eq_ new BABYLON.Engine(this.canvas_co_ true)_sm_\n        this.canvas.width _eq_ window.innerWidth * .9_sm_\n        this.canvas.height _eq_ window.innerHeight / 2_sm_\n        this.createScene()_sm_\n        this.animate()_sm_\n    }\n\n    public createScene()_dd_ void {\n        this.scene _eq_ new BABYLON.Scene(this.engine)_sm_\n        this.light _eq_ new BABYLON.HemisphericLight(_t_light1_t__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ this.scene)_sm_\n        this.camera _eq_ new BABYLON.FreeCamera(_t_camera1_t__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ this.scene)_sm_\n        this.camera.setTarget(BABYLON.Vector3.Zero())_sm_\n        this.canvas.style.backgroundColor _eq_ _qt_white_qt__sm_\n        this.scene.clearColor _eq_ new BABYLON.Color4(0_co_ 0_co_ 0_co_ 0)_sm_\n        this.camera.attachControl(this.canvas_co_ false)_sm_\n\n        BABYLON.SceneLoader.Append(_qt_assets/scenes/_qt__co_ _qt_microphone.gltf_qt__co_ this.scene_co_ (result) _eq_&gt_sm_ {\n            // do something\n        })\n\n        if (this.scene.isReady) {\n            this.scene.updateTransformMatrix(true)_sm_\n        }\n    }\n\n    public animate()_dd_ void {\n        this.engine.runRenderLoop(() _eq_&gt_sm_ {\n            this.scene.render()_sm_\n        })_sm_\n\n        window.addEventListener(_t_resize_t__co_ () _eq_&gt_sm_ {\n            this.engine.resize()_sm_\n        })_sm_\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut it doesn_t_t work. It says_dd_ _lt_strong_gt__qt_Unable to load from assets/scenes/microphone.gltf_dd_ Failed to load scene._qt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe path looks like to be correct.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ is the problem in my component?_lt_br /_gt_\n\tHow should i implement functionality for that to use best practices? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sancelot","Date":"2018-04-26T20:12:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you try first to load an obj file ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-26T21:16:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you make sure to also reference the glTF loader?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/loaders/babylonjs.loaders.min.js_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/loaders/babylonjs.loaders.min.js_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Constantin","Date":"2018-04-27T17:13:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_212968_qt_ data-ipsquote-contentid_eq__qt_37255_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1524773554_qt_ data-ipsquote-userid_eq__qt_28492_qt_ data-ipsquote-username_eq__qt_sancelot_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t21 hours ago_co_ sancelot said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tCan you try first to load an obj file ?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tRegards_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey_co_ just tried_co_ the same error_dd_ Unable to load from assets/scenes/bg3.obj_dd_ Failed to load scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Constantin","Date":"2018-04-27T17:14:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_212969_qt_ data-ipsquote-contentid_eq__qt_37255_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1524777412_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t19 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tCan you make sure to also reference the glTF loader?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/loaders/babylonjs.loaders.min.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/loaders/babylonjs.loaders.min.js_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI imported it in my component_dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import _t_babylonjs-loaders_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tis not that enough?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Constantin","Date":"2018-04-27T17:16:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso got these warnings_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tModule not found_dd_ Error_dd_ Can_t_t resolve _t_oimo_t_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tModule not found_dd_ Error_dd_ Can_t_t resolve _t_cannon_t_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tModule not found_dd_ Error_dd_ Can_t_t resolve _t_earcut_t_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tBut i guess problem comes not from these warnings _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-27T18:16:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcan you debug with F12 network profiler to see if the file is loaded correctly then?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Constantin","Date":"2018-04-27T18:33:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_213083_qt_ data-ipsquote-contentid_eq__qt_37255_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1524853019_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tcan you debug with F12 network profiler to see if the file is loaded correctly then?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18044_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_04/image.png.3d40f26dc553e98ad1e463293347380d.png_qt_ alt_eq__qt_image.png.3d40f26dc553e98ad1e463293347380d.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried to add some simple images and just open them in new tab to be sure that source to files it_t_s correct. I was able to open images in new tab.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-28T02:44:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you publish the app somewhere with a reference to babylon.max.js to see it live?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]