[{"Owner":"Karrow","Date":"2018-08-07T16:08:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello! I_t_ve been developing a game using Babylon for our client for a few months now. It has essentially developed into a 360 video player with interactive components_co_ but I probably shouldn_t_t reveal much more than that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor a few weeks now_co_ I_t_ve been looking into IE 11_t_s memory leak issue. For those who don_t_t know_co_ IE 11_t_s garbage collector is broken_co_ and reloading the page will not remove quite everything from memory. The memory will continue to pile up each page reload_co_ until eventually the browser crashes. See _lt_a href_eq__qt_https_dd_//developer.microsoft.com/en-us/microsoft-edge/platform/issues/10186458/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.microsoft.com/en-us/microsoft-edge/platform/issues/10186458/_lt_/a_gt_  and _lt_a href_eq__qt_https_dd_//developer.microsoft.com/en-us/microsoft-edge/platform/issues/11106982/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.microsoft.com/en-us/microsoft-edge/platform/issues/11106982/_lt_/a_gt_ . Microsoft doesn_t_t support IE 11 anymore_co_ but the browser is used by the majority of our client_t_s users.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have researched it and gained a better understanding of it_co_ but have had no luck in mitigating it. Other JS libraries have bug reports on the issue_co_ and individuals have come up with solutions that work for that library_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPolymer_dd_ _lt_a href_eq__qt_https_dd_//github.com/Polymer/polymer/issues/3430#issuecomment-248034098_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/Polymer/polymer/issues/3430#issuecomment-248034098_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAngularJS_dd_ _lt_a href_eq__qt_https_dd_//github.com/angular/angular/issues/17637#issuecomment-387801113_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/angular/angular/issues/17637#issuecomment-387801113_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWebcomponents (comments point back to the Polymer solution)_dd_ _lt_a href_eq__qt_https_dd_//github.com/webcomponents/webcomponentsjs/issues/541_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/webcomponents/webcomponentsjs/issues/541_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI added only the library-agnostic code from the Polymer thread to my code_co_ which removed document and window event listeners that may have been stuck in memory. It doesn_t_t seem to have impacted the leak on my site_co_ but it can_t_t hurt so I left it in.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m having trouble figuring out what hacks to apply in my project to help_co_ or what methods I should change or avoid. All I could think of was to add `scene.dispose()` on unload. I know this isn_t_t a Babylon issue per se_co_ but has anyone come across this and attempted to solve it? What did you try?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my current cleanup script_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// https_dd_//github.com/Polymer/polymer/issues/3430#issuecomment-248034098\n\nvar wrapper _eq_ function( name_co_ fn_co_ opts) {\n  // add events to cache/queue\n  addEventToQueue(this_co_ name_co_ fn_co_ opts)_sm_\n  this.__oldAddEvent( name_co_ fn_co_ opts)_sm_\n}_sm_\n\nfunction addEventToQueue( obj_co_ name_co_ fn_co_ opts ) {\n  console.log(_t_EVENT ADDED TO CLEANUP LIST_dd_ _t_ + (obj.nodeName ? obj.nodeName _dd_ _t_window_t_) + _t_/_t_ + name)_sm_\n  \n  obj.__eventListeners _eq_ obj.__eventListeners || {}_sm_\n  obj.__eventListeners[name] _eq_ obj.__eventListeners[name] || []_sm_\n\n  obj.__eventListeners[name].push({fn_dd_ fn_co_ opts_dd_ opts})_sm_\n}\n\nfunction initListener() {\n  document.__oldAddEvent _eq_ document.addEventListener_sm_\n  document.addEventListener _eq_ wrapper_sm_\n\n  window.__oldAddEvent _eq_ window.addEventListener_sm_\n  window.addEventListener _eq_ wrapper_sm_\n}_sm_\n\nfunction cleanupApp() {\n  cleanupListeners()_sm_\n  cleanupScene()_sm_\n}\n\nfunction cleanupListeners() {\n  cleanupListener(document)_sm_\n  cleanupListener(window)_sm_\n}\n\nfunction cleanupListener (obj) {\n  for (var k in (obj.__eventListeners || {}) ) {\n    var fns _eq_ obj.__eventListeners[k]_sm_\n    for ( var i _eq_ 0_sm_ i &lt_sm_ fns.length_sm_ i++ ) {\n\n      obj.removeEventListener(k_co_ fns[i].fn_co_ fns[i].opts)_sm_\n    }\n  }\n}\n\nfunction cleanupScene() {\n  if(scene) scene.dispose()_sm_\n}\n\ninitListener()_sm_\nwindow.onunload _eq_ cleanupApp_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-07T16:32:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tInteresting question. I did not work on that but would like to see if others can help here\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne thing you should try would be to also dispose the engine itself\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Karrow","Date":"2018-08-07T18:46:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the response! I saw your early article on memory leak and optimization thoughts while developing Babylon_co_ but obviously the fixes you_t_ve developed over time only help in browsers that... work properly _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMost sites don_t_t exactly have a fix for this. You can refresh the MSN site (IE11 default home page I think) over and over_co_ and watch the memory usage climb. It eventually crashes. Unfortunately though_co_ since I_t_m loading both a large 360 video and rendering 3D data_co_ the memory usage of this site is high in general and there isn_t_t as much available memory to waste.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe_t_ve informed our clients that they just need to close and re-open IE11 if they have memory issues_co_ and that it_t_s IE11_t_s fault_co_ but we said we_t_d look into _qt_fixing_qt_ it.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_224372_qt_ data-ipsquote-contentid_eq__qt_39312_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533659546_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tdispose the engine itself_lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGotcha_co_ I_t_ll add `engine.dispose()` to the unload functions and get back to you about it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Karrow","Date":"2018-08-08T20:18:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlright_co_ I added `engine.dispose()` to unload_co_ and... wasn_t_t seeing a change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI thought about it more_co_ and remembered that someone had mentioned the IE 11 Dev Tools may have its own memory leak issue. Since I used IE 11_t_s memory profiling to test for issues_co_ it may have messed with my conclusion the site had a leak. I switched to Task Manager instead and did a few tests_sm_ here were the steps_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor each numbered step_co_ I reloaded the page at least 9 times_co_ then recorded the memory used after the page loading settled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. With scene and engine dispose methods_dd_ Memory remained relatively stable_co_ no specific increase or decrease.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-&gt_sm_ Close IE 11 and clear cache_co_ then\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Without scene and engine dispose_dd_ Memory remained relatively stable_co_ no specific increase or decrease.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-&gt_sm_ Close IE 11 and clear cache_co_ enable Dev tools_co_ then\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. Without scene and engine dispose_dd_ Memory climbed steadily_co_ about 40-50MB per reload.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t-&gt_sm_ Disable Dev tools (no closing browser)_co_ then\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. Without scene and engine dispose_dd_ Memory seemed to climb_co_ yet more sporadically and not as severely.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ it_t_s very possible IE 11_t_s Dev tools caused the memory leak just by being open. The last test showed it_t_s also possible the leak continues after Dev tools are closed (if you don_t_t restart the browser). I may continue to check if Javascript efforts to dispose/remove objects will help when Dev tools are open_co_ but I will most likely not waste any more time on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks anyway!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-08T20:45:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell what a mess! Sorry about all your burden _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Karrow","Date":"2018-08-08T20:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHaha_co_ that_t_s okay! Boss agrees I can drop the issue _lt_span class_eq__qt_ipsEmoji_qt__gt_👌_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Thanks for developing Babylon by the way!! It was pretty much the only solution we found when our client demanded an in-browser 3D game that had to work in IE 11_co_ and it works great! I hope someday I can share details on the project with you!)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]