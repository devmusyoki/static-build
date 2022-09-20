  
    var addBylineModifiers = function() {
            var r = "?m_bm=true",
                e = document.querySelectorAll('a[href$="' + r + '"]');
            Array.prototype.forEach.call(e, function(e, t) {
                e.setAttribute("href", decodeURIComponent(e.getAttribute("href")).replace(r, "")), e.insertAdjacentHTML("beforebegin", molongui_authorship_front_params.byline_prefix + " "), e.insertAdjacentHTML("afterend", " " + molongui_authorship_front_params.byline_suffix)
            })
        },
        decodeMultiAuthorBylines = function() {
            var e = document.querySelectorAll('a[href*="molongui_byline=true"]');
            Array.prototype.forEach.call(e, function(e, t) {
                var r = e.getAttribute("href"),
                    i = new URL(decodeURIComponent(r)),
                    n = new URLSearchParams(i.search),
                    a = i.origin,
                    o = i.pathname,
                    r = "";
                if (!n.has("molongui_byline")) return !1;
                if (n.has("lang") && (r = "?lang=" + n.get("lang")), "" === e.innerText) return n.has("m_main_disabled") ? e.removeAttribute("href") : e.setAttribute("href", a + o + r), !1;
                var l, s = [molongui_authorship_front_params.byline_separator, molongui_authorship_front_params.byline_last_separator],
                    u = e.innerText.split(new RegExp(s.join("|"), "gi"));
                n.has("m_main_disabled") ? (l = n.getAll("mca")).unshift("molongui-disabled-link") : (i = o.replace(/^\/|\/$/g, "").split("/").pop(), o.replace(/\/$/g, "").replace(i, ""), (l = n.getAll("mca")).unshift(a + o + r));
                var d = "",
                    m = u.length,
                    n = e.getAttribute("class"),
                    a = e.getAttribute("target"),
                    o = e.getAttribute("rel"),
                    r = e.getAttribute("itemprop"),
                    c = n ? 'class="' + n + '"' : "",
                    h = a ? 'target="' + a + '"' : "",
                    p = o ? 'rel="' + o + '"' : "",
                    f = r ? 'itemprop="' + r + '"' : "";
                for (j = 0; j < m; j++) {
                    var _ = u[j].trim(),
                        b = "",
                        b = "" !== molongui_authorship_front_params.byline_dom_tree ? molongui_authorship_front_params.byline_dom_tree.replace("{%ma_authorName}", _) : _;
                    "molongui-disabled-link" === l[j] || j >= l.length ? d += b : d += '<a href="' + l[j] + '" ' + c + " " + p + " " + f + " " + h + ' title="' + molongui_authorship_front_params.byline_link_title + " " + _ + '">' + b + "</a>", j < m - 1 - 1 ? d += s[0] : j < m - 1 && (d += s[1])
                }
                e.insertAdjacentHTML("afterend", d), e.parentNode.removeChild(e)
            })
        },
        disableEmptyLinks = function() {
            var e = document.querySelectorAll('a[href="#molongui-disabled-link"]');
            Array.prototype.forEach.call(e, function(e, t) {
                e.classList.add("molongui-disabled-link"), e.removeAttribute("href")
            })
        },
        initBylines = function() {
            addBylineModifiers(), decodeMultiAuthorBylines(), disableEmptyLinks()
        };
    document.addEventListener("DOMContentLoaded", function() {
        initBylines();
        var e = document.body;
        new MutationObserver(function(e) {
            Array.prototype.forEach.call(e, function(e, t) {
                initBylines()
            })
        }).observe(e, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !0
        })
    });




















                                                                                        if ( typeof window.ASP == 'undefined') { window.ASP = {wp_rocket_exception: "DOMContentLoaded", ajaxurl: "https:\/\/www.adams.africa\/wp-admin\/admin-ajax.php", backend_ajaxurl: "https:\/\/www.adams.africa\/wp-admin\/admin-ajax.php", js_scope: "jQuery", asp_url: "https:\/\/www.adams.africa\/wp-content\/plugins\/ajax-search-pro\/", upload_url: "https:\/\/www.adams.africa\/wp-content\/uploads\/asp_upload\/", css_basic_url: "https:\/\/www.adams.africa\/wp-content\/uploads\/asp_upload\/style.basic-ho-is-po-no-co-au-ga-as-is.css", detect_ajax: 0, media_query: "tAzYOZ", version: 5035, pageHTML: "", additional_scripts: [{"handle":"wd-asp-select2","src":"https:\/\/www.adams.africa\/wp-content\/plugins\/ajax-search-pro\/js\/min\/external\/jquery.select2.js","prereq":["jquery"]},{"handle":"wd-asp-scroll-simple","src":"https:\/\/www.adams.africa\/wp-content\/plugins\/ajax-search-pro\/js\/min\/external\/simplebar.js","prereq":false},{"handle":"wd-asp-ajaxsearchpro","src":"https:\/\/www.adams.africa\/wp-content\/plugins\/ajax-search-pro\/js\/min\/plugin\/merged\/asp.js","prereq":false}], script_async_load: false, font_url: false, init_only_in_viewport: true, scrollbar: true, css_async: false, highlight: {"enabled":false,"data":[]}, debug: false, instances: {}, analytics: {"method":0,"tracking_id":"","string":"?ajax_search={asp_term}","event":{"focus":{"active":1,"action":"focus","category":"ASP {search_id} | {search_name}","label":"Input focus","value":"1"},"search_start":{"active":0,"action":"search_start","category":"ASP {search_id} | {search_name}","label":"Phrase: {phrase}","value":"1"},"search_end":{"active":1,"action":"search_end","category":"ASP {search_id} | {search_name}","label":"{phrase} | {results_count}","value":"1"},"magnifier":{"active":1,"action":"magnifier","category":"ASP {search_id} | {search_name}","label":"Magnifier clicked","value":"1"},"return":{"active":1,"action":"return","category":"ASP {search_id} | {search_name}","label":"Return button pressed","value":"1"},"try_this":{"active":1,"action":"try_this","category":"ASP {search_id} | {search_name}","label":"Try this click | {phrase}","value":"1"},"facet_change":{"active":0,"action":"facet_change","category":"ASP {search_id} | {search_name}","label":"{option_label} | {option_value}","value":"1"},"result_click":{"active":1,"action":"result_click","category":"ASP {search_id} | {search_name}","label":"{result_title} | {result_url}","value":"1"}}}}};
                                                                                        window.ASP_INSTANCES = [];window.ASP_INSTANCES[4] = {"homeurl":"https:\/\/www.adams.africa\/","is_results_page":0,"resultstype":"vertical","resultsposition":"hover","resultsSnapTo":"left","results":{"width":"auto","width_tablet":"auto","width_phone":"auto"},"itemscount":4,"charcount":0,"highlight":0,"highlightWholewords":1,"singleHighlight":0,"scrollToResults":{"enabled":0,"offset":0},"autocomplete":{"enabled":1,"trigger_charcount":0,"googleOnly":1,"lang":"en","mobile":1},"trigger":{"delay":300,"autocomplete_delay":310,"update_href":0,"facet":1,"type":1,"click":"ajax_search","click_location":"same","return":"ajax_search","return_location":"same","redirect_url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}"},"overridewpdefault":1,"override_method":"get","settings":{"hideChildren":0},"settingsimagepos":"right","settingsVisible":0,"settingsHideOnRes":0,"prescontainerheight":"400px","closeOnDocClick":1,"focusOnPageload":0,"isotopic":{"itemWidth":"200px","itemWidthTablet":"200px","itemWidthPhone":"200px","itemHeight":"200px","itemHeightTablet":"200px","itemHeightPhone":"200px","pagination":1,"rows":2,"gutter":5,"showOverlay":1,"blurOverlay":1,"hideContent":1},"loaderLocation":"auto","show_more":{"enabled":0,"url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}","action":"ajax","location":"same","infinite":1},"mobile":{"trigger_on_type":1,"click_action":"ajax_search","return_action":"ajax_search","click_action_location":"same","return_action_location":"same","redirect_url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}","menu_selector":"#menu-toggle","hide_keyboard":0,"force_res_hover":0,"force_sett_hover":0,"force_sett_state":"none"},"compact":{"enabled":0,"focus":1,"width":"100%","width_tablet":"480px","width_phone":"320px","closeOnMagnifier":1,"closeOnDocument":0,"position":"static","overlay":0},"sb":{"redirect_action":"ajax_search","redirect_location":"same","redirect_url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}"},"rb":{"action":"nothing"},"animations":{"pc":{"settings":{"anim":"fadedrop","dur":300},"results":{"anim":"fadedrop","dur":300},"items":"fadeInDown"},"mob":{"settings":{"anim":"fadedrop","dur":300},"results":{"anim":"fadedrop","dur":300},"items":"voidanim"}},"select2":{"nores":"No results match"},"detectVisibility":0,"autop":{"state":"disabled","phrase":"","count":10},"resPage":{"useAjax":0,"selector":"#main","trigger_type":1,"trigger_facet":1,"trigger_magnifier":0,"trigger_return":0},"fss_layout":"flex","scrollBar":{"vertical":{"autoHide":1},"horizontal":{"enabled":1,"autoHide":1},"settings":{"autoHide":0}},"divi":{"bodycommerce":0},"preventBodyScroll":0,"statistics":1};window.ASP_INSTANCES[5] = {"homeurl":"https:\/\/www.adams.africa\/","is_results_page":0,"resultstype":"vertical","resultsposition":"hover","resultsSnapTo":"left","results":{"width":"auto","width_tablet":"auto","width_phone":"auto"},"itemscount":4,"charcount":0,"highlight":0,"highlightWholewords":1,"singleHighlight":0,"scrollToResults":{"enabled":0,"offset":0},"autocomplete":{"enabled":1,"trigger_charcount":0,"googleOnly":0,"lang":"en","mobile":1},"trigger":{"delay":300,"autocomplete_delay":310,"update_href":0,"facet":1,"type":1,"click":"ajax_search","click_location":"same","return":"ajax_search","return_location":"same","redirect_url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}"},"overridewpdefault":1,"override_method":"get","settings":{"hideChildren":0},"settingsimagepos":"right","settingsVisible":0,"settingsHideOnRes":0,"prescontainerheight":"400px","closeOnDocClick":1,"focusOnPageload":0,"isotopic":{"itemWidth":"200px","itemWidthTablet":"200px","itemWidthPhone":"200px","itemHeight":"200px","itemHeightTablet":"200px","itemHeightPhone":"200px","pagination":1,"rows":2,"gutter":5,"showOverlay":1,"blurOverlay":1,"hideContent":1},"loaderLocation":"auto","show_more":{"enabled":0,"url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}","action":"ajax","location":"same","infinite":1},"mobile":{"trigger_on_type":1,"click_action":"ajax_search","return_action":"ajax_search","click_action_location":"same","return_action_location":"same","redirect_url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}","menu_selector":"#menu-toggle","hide_keyboard":0,"force_res_hover":0,"force_sett_hover":0,"force_sett_state":"none"},"compact":{"enabled":0,"focus":1,"width":"100%","width_tablet":"480px","width_phone":"320px","closeOnMagnifier":1,"closeOnDocument":0,"position":"static","overlay":0},"sb":{"redirect_action":"ajax_search","redirect_location":"same","redirect_url":"?s={phrase}","elementor_url":"https:\/\/www.adams.africa\/?asp_ls={phrase}"},"rb":{"action":"nothing"},"animations":{"pc":{"settings":{"anim":"fadedrop","dur":300},"results":{"anim":"fadedrop","dur":300},"items":"fadeInDown"},"mob":{"settings":{"anim":"fadedrop","dur":300},"results":{"anim":"fadedrop","dur":300},"items":"voidanim"}},"select2":{"nores":"No results match"},"detectVisibility":0,"autop":{"state":"disabled","phrase":"","count":10},"resPage":{"useAjax":0,"selector":"#main","trigger_type":1,"trigger_facet":1,"trigger_magnifier":0,"trigger_return":0},"fss_layout":"flex","scrollBar":{"vertical":{"autoHide":1},"horizontal":{"enabled":1,"autoHide":1},"settings":{"autoHide":0}},"divi":{"bodycommerce":0},"preventBodyScroll":0,"statistics":1};
                                                                               