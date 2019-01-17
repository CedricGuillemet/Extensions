[{"Owner":"deni","Date":"2014-10-09T09:20:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_I_t_m using the babylonjs 3D WebGL library._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_It_t_s great library_co_ but I can_t_t find the same_co_ which exists in THREE.JS library._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_For example_co_ I have 2D polygons in database_co_ I_t_m fetching the polygon data from it and then create a custom mesh and extruding it._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_With the THREE.JS_co_ there isn_t_t any problem_co_ I can add to some array_dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    ...    points.push( new THREE.Vector2( part.x_co_ -part.y ) )_sm_    ...    var shape _eq_ new THREE.Shape( points )_sm_    var extrusion _eq_ {        amount_dd_ building.height_co_        bevelEnabled_dd_ false    }_sm_    var geometry _eq_ new THREE.ExtrudeGeometry( shape_co_ extrusion )_sm_    var mesh _eq_ new THREE.Mesh( geometry_co_ new THREE.MeshLambertMaterial({        ambient_dd_ 0xbbbbb_co_        color_dd_ 0xff0000    })_sm_    ...    scene.add( mesh )_sm__lt_/pre_gt__lt_/div_gt__lt_div_gt_It_t_s very simple. How to do the same_co_ I couldn_t_t find._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I_t_ve found only some information here_dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ - _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/4530-create-a-mesh-from-a-list-of-vertices-and-faces/_qt__gt_http_dd_//www.html5gamedevs.com/topic/4530-create-a-mesh-from-a-list-of-vertices-and-faces/_lt_/a_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_ - _lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/06/27/babylon-js-a-complete-javascript-framework-for-building-3d-games-with-html-5-and-webgl.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2013/06/27/babylon-js-a-complete-javascript-framework-for-building-3d-games-with-html-5-and-webgl.aspx_lt_/a_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_With such an example (from msdn by Ctrl + F -&gt_sm_ `You can also create a mesh from a list of vertices and faces`)_dd__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    var plane _eq_ new BABYLON.Mesh(name_co_ scene)_sm_         var indices _eq_ []_sm_     var positions _eq_ []_sm_     var normals _eq_ []_sm_     var uvs _eq_ []_sm_         // Vertices     var halfSize _eq_ size / 2.0_sm_     positions.push(-halfSize_co_ -halfSize_co_ 0)_sm_     normals.push(0_co_ 0_co_ -1.0)_sm_     uvs.push(0.0_co_ 0.0)_sm_         positions.push(halfSize_co_ -halfSize_co_ 0)_sm_     normals.push(0_co_ 0_co_ -1.0)_sm_     uvs.push(1.0_co_ 0.0)_sm_         positions.push(halfSize_co_ halfSize_co_ 0)_sm_     normals.push(0_co_ 0_co_ -1.0)_sm_     uvs.push(1.0_co_ 1.0)_sm_         positions.push(-halfSize_co_ halfSize_co_ 0)_sm_     normals.push(0_co_ 0_co_ -1.0)_sm_     uvs.push(0.0_co_ 1.0)_sm_         // Indices     indices.push(0)_sm_     indices.push(1)_sm_     indices.push(2)_sm_         indices.push(0)_sm_     indices.push(2)_sm_     indices.push(3)_sm_         plane.setVerticesData(positions_co_ BABYLON.VertexBuffer.PositionKind)_sm_     plane.setVerticesData(normals_co_ BABYLON.VertexBuffer.NormalKind)_sm_     plane.setVerticesData(uvs_co_ BABYLON.VertexBuffer.UVKind)_sm_     plane.setIndices(indices)_sm_         return plane_sm__lt_/pre_gt__lt_p_gt_But_t_s it_t_s rather not the same as with the THREE.JS. For example I need to count index buffer manually where in THREE.JS I don_t_t need it_co_ also it_t_s a sample with plane only and I didn_t_t find any info about extruding exactly._lt_/p_gt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_So... Maybe_co_ there are some easy ways in BabylonJS?_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-09T17:26:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello this is something not yet supported but it was added to the roadmap_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"deni","Date":"2015-08-30T19:12:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_ _lt_/div_gt__lt_div_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_57399_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_9732_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1412875600_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Hello this is something not yet supported but it was added to the roadmap_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_/div_gt__lt_p_gt_What_t_s about right now? Has such possibilities appeared in BabylonJs? _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T05:11:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes sir_dd_) _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-08-31T13:49:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#295H7U%234_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt__dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#295H7U%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#295H7U#4_lt_/a_gt_  throws a compilation error_dd_ _lt_/p_gt_\tCompilation error_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(185_co_74_co_72)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_background-color_dd_rgb(242_co_222_co_222)_sm__qt__gt_Cannot read property _t_subtract_t_ of undefined_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-08-31T14:07:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mmhh.._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It seems related to a temporary bug due to the new normal computation along the seam. I will fix it soon_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ahiru","Date":"2015-08-31T14:44:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_So_co_ I guess that in this Scene it_t_s the same problem? _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RF9W9%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RF9W9#4_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-08-31T14:58:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yep_lt_/p_gt__lt_p_gt_probably_co_ everywhere where the ribbon is used with _lt_em_gt_closePath_lt_/em_gt_ set to true (I couldn_t_t remember if it was the case on the extrusion_co_ but maybe)_lt_/p_gt__lt_p_gt_You could use ExtrudeShapeCustom _lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt_meanwhile to get sure the _lt_em_gt_closePath_lt_/em_gt_ parameter is set to false._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt_I wished I could fix this today but I was too busy at work to find a little time to do it. Sorry._lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd_arial_co_ helvetica_co_ sans-serif_sm__qt__gt_I wish I can do it tomorrow._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T18:35:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jerome is back from holiday..Hurrah _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-08-31T19:45:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_mouarf_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BTW_co_ for french readers_co_ an article about BJS in this pro magazine (nothing you don_t_t already know actually) _dd_ _lt_a href_eq__qt_http_dd_//www.programmez.com/magazine/article/la-3d-sur-le-web-avec-babylonjs_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.programmez.com/magazine/article/la-3d-sur-le-web-avec-babylonjs_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2015-08-31T20:29:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes!  Jerome is back!  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]