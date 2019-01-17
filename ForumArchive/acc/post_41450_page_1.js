[{"Owner":"Calsa","Date":"2018-11-22T18:23:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am having another noob _qt__lt_em_gt_this_lt_/em_gt__qt_ moment. I_t_m working on a simple class.... These are a few snips of the problem area.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I call a method such as nodeActions below which binds actions to a mesh_co_ then I click on the mesh triggering moveToNode_co_ the _lt_em_gt_this _lt_/em_gt_scope changes to actionManager_t_s _lt_em_gt_this _lt_/em_gt_instead of this classes _lt_em_gt_this_lt_/em_gt_. Why this happens makes sense to me_co_ but what is the best way to access the classes this scope from within moveToNode so I don_t_t have to do such a sloppy hack to re access scene and my class variables from within the moveToNode method?       \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_moveToNode(){\n        var scene _eq_ this._actionManager._scene //HACK\n        var pickedNode _eq_ scene.pick(scene.pointerX_co_ scene.pointerY_co_ null_co_ false_co_ scene.camera)\n        var moveTarget _eq_ scene.getMeshByName(pickedNode.name)\n        // More to come this is not a simple interpolate function\n    }\n\n\nnodeActions(mesh) {\n        mesh.actionManager _eq_ new BABYLON.ActionManager(this.scene)\n        mesh.actionManager.registerAction( new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger_co_ this.moveToNode))\n    }\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-22T19:24:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo either you rely on _eq_&gt_sm_ instead of pure callback_dd_ _lt_a href_eq__qt_https_dd_//hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr you can bind _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_moveToNode_lt_span_gt_ _lt_/span_gt__lt_/span_gt_to the desired context this._lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_moveToNode.bind(this)_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Calsa","Date":"2018-11-22T19:52:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tbind method is working_co_ thanks. Is either method above programmatically better (more efficient_co_ better practice_co_ ext...)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-22T20:50:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not know tbh as they end up doing the same. Now arrow functions are not supported everywhere  (it is on all major browsers) so bind might have a bit of more cross plat advantage.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]