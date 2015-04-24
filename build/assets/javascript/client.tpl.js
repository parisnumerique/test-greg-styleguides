(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof root["Paris"]["templates"] === 'undefined' || root["Paris"]["templates"] !== Object(root["Paris"]["templates"])) {
        throw new Error('templatizer: window["Paris"]["templates"] does not exist or is not an object');
    } else {
        root["Paris"]["templates"].templatizer = factory();
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)a.push(r&&r[i]?t.escape(n([e[i]])):n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};


    // anchors-list.jade compiled template
    templatizer["anchors-list"] = function tmpl_anchors_list(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // anchors-list.jade:anchors-list compiled template
    templatizer["anchors-list"]["anchors-list"] = function tmpl_anchors_list_anchors_list(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        data = data || {};
        buf.push("<div" + jade.attrs(jade.merge([ {
            "class": "anchors-list"
        }, data.attributes || [] ]), false) + ">");
        if (data && data.items) {
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<div" + jade.cls([ "anchor-bar", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ' class="anchor-link">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</a><span class="anchor-progress"></span></div>');
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push("<div" + jade.cls([ "anchor-bar", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ' class="anchor-link">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</a><span class="anchor-progress"></span></div>');
                    }
                }
            }).call(this);
        }
        buf.push("</div>");
        return buf.join("");
    };

    // block-aside-checkboxes.jade compiled template
    templatizer["block-aside-checkboxes"] = function tmpl_block_aside_checkboxes(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(modifiers) {}).call(this, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // block-aside-checkboxes.jade:block-aside compiled template
    templatizer["block-aside-checkboxes"]["block-aside"] = function tmpl_block_aside_checkboxes_block_aside(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "block-aside", data.modifiers ], [ null, true ]) + ">");
        if (data.title) {
            buf.push('<h2 class="block-aside-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        }
        buf.push('<div class="block-aside-content">');
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("content");
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // block-aside-checkboxes.jade:block-aside-checkboxes compiled template
    templatizer["block-aside-checkboxes"]["block-aside-checkboxes"] = function tmpl_block_aside_checkboxes_block_aside_checkboxes(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        modifiers = data.modifiers || [];
        modifiers.push("block-aside-checkboxes");
        buf.push(templatizer["block-aside-checkboxes"]["block-aside"].call({
            block: function(buf) {
                buf.push('<ul class="block-aside-items">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "block-aside-item", item.modifiers ], [ null, true ]) + '><label><input type="checkbox"' + jade.attr("name", "" + data.name + "[]", true, false) + jade.attr("value", item.value, true, false) + jade.attr("checked", item.checked, true, false) + '/><div class="block-aside-item-checkbox"></div><div class="block-aside-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                            if (item.number) {
                                buf.push(" (" + jade.escape((jade_interp = item.number) == null ? "" : jade_interp) + ")");
                            }
                            buf.push("</div></label></li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "block-aside-item", item.modifiers ], [ null, true ]) + '><label><input type="checkbox"' + jade.attr("name", "" + data.name + "[]", true, false) + jade.attr("value", item.value, true, false) + jade.attr("checked", item.checked, true, false) + '/><div class="block-aside-item-checkbox"></div><div class="block-aside-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                            if (item.number) {
                                buf.push(" (" + jade.escape((jade_interp = item.number) == null ? "" : jade_interp) + ")");
                            }
                            buf.push("</div></label></li>");
                        }
                    }
                }).call(this);
                buf.push("</ul>");
            }
        }, {
            title: data.title,
            modifiers: modifiers
        }));
        return buf.join("");
    };

    // search-results-list.jade compiled template
    templatizer["search-results-list"] = function tmpl_search_results_list(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, modifiers, more) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined, "more" in locals_for_with ? locals_for_with.more : typeof more !== "undefined" ? more : undefined);
        return buf.join("");
    };

    // search-results-list.jade:button compiled template
    templatizer["search-results-list"]["button"] = function tmpl_search_results_list_button(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        modifiers = data.modifiers || [];
        attributes = data.attributes || [];
        if (data.href) {
            if (data.icon) {
                modifiers.push("icon");
            }
            buf.push("<a" + jade.attrs(jade.merge([ {
                href: jade.escape(data.href),
                title: jade.escape(data.title),
                target: jade.escape(data.target),
                "class": (jade_interp = [ null, true ], jade.joinClasses([ "button", modifiers ].map(jade.joinClasses).map(function(cls, i) {
                    return jade_interp[i] ? jade.escape(cls) : cls;
                })))
            }, attributes ]), false) + ">");
            if (modifiers && modifiers.indexOf("marker") != -1) {
                buf.push('<i class="icon icon-marker"></i>');
            } else if (data.icon) {
                buf.push("<i" + jade.cls([ "icon", "icon-" + data.icon + "" ], [ null, true ]) + "></i>");
            }
            buf.push(jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</a>");
        } else {
            buf.push("<button" + jade.attrs(jade.merge([ {
                "class": (jade_interp = [ null, true ], jade.joinClasses([ "button", modifiers ].map(jade.joinClasses).map(function(cls, i) {
                    return jade_interp[i] ? jade.escape(cls) : cls;
                })))
            }, attributes ]), false) + ">" + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</button>");
        }
        return buf.join("");
    };


    // search-results-list.jade:search-results-list compiled template
    templatizer["search-results-list"]["search-results-list"] = function tmpl_search_results_list_search_results_list(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="search-results-list">');
        if (!data.items || data.items.length === 0) {
            buf.push("<h1>" + jade.escape(null == (jade_interp = data.no_result) ? "" : jade_interp) + "</h1>");
        } else {
            if (data.title) {
                buf.push("<h1>" + (null == (jade_interp = data.title) ? "" : jade_interp) + "</h1>");
            } else {
                buf.push('<div class="search-results-list-page"><span>' + jade.escape(null == (jade_interp = data.page) ? "" : jade_interp) + "</span></div>");
            }
            if (data.items.length !== 0) {
                buf.push('<ul class="search-results-list-items">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "search-results-list-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</a>");
                            if (item.anchors && item.anchors.length !== 0) {
                                buf.push('<ul class="search-results-list-anchors">');
                                (function() {
                                    var $obj = item.anchors;
                                    if ("number" == typeof $obj.length) {
                                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                                            var anchor = $obj[$index];
                                            buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.label) ? "" : jade_interp) + "</a></li>");
                                        }
                                    } else {
                                        var $l = 0;
                                        for (var $index in $obj) {
                                            $l++;
                                            var anchor = $obj[$index];
                                            buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.label) ? "" : jade_interp) + "</a></li>");
                                        }
                                    }
                                }).call(this);
                                buf.push("</ul>");
                            }
                            if (item.text) {
                                buf.push('<div class="search-results-list-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div>");
                            }
                            buf.push("</li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "search-results-list-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</a>");
                            if (item.anchors && item.anchors.length !== 0) {
                                buf.push('<ul class="search-results-list-anchors">');
                                (function() {
                                    var $obj = item.anchors;
                                    if ("number" == typeof $obj.length) {
                                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                                            var anchor = $obj[$index];
                                            buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.label) ? "" : jade_interp) + "</a></li>");
                                        }
                                    } else {
                                        var $l = 0;
                                        for (var $index in $obj) {
                                            $l++;
                                            var anchor = $obj[$index];
                                            buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.label) ? "" : jade_interp) + "</a></li>");
                                        }
                                    }
                                }).call(this);
                                buf.push("</ul>");
                            }
                            if (item.text) {
                                buf.push('<div class="search-results-list-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div>");
                            }
                            buf.push("</li>");
                        }
                    }
                }).call(this);
                buf.push("</ul>");
                if (data.more) {
                    buf.push('<div class="search-results-list-more">');
                    more = JSON.parse(JSON.stringify(data.more));
                    more.modifiers = [ "wide" ];
                    more.attributes = {
                        "data-page": more.page
                    };
                    buf.push(templatizer["search-results-list"]["button"](more));
                    buf.push("</div>");
                }
            }
        }
        buf.push("</div>");
        return buf.join("");
    };

    // share.jade compiled template
    templatizer["share"] = function tmpl_share(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // share.jade:share compiled template
    templatizer["share"]["share"] = function tmpl_share_share(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "share", data.modifiers ], [ null, true ]) + ">");
        if (data.items) {
            buf.push('<ul class="share-items">');
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push('<li class="share-item"><a' + jade.attr("href", item.href, true, false) + jade.attr("title", item.title, true, false) + ' target="_blank"><i' + jade.cls([ "share-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i></a></li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push('<li class="share-item"><a' + jade.attr("href", item.href, true, false) + jade.attr("title", item.title, true, false) + ' target="_blank"><i' + jade.cls([ "share-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i></a></li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        }
        buf.push("</div>");
        return buf.join("");
    };

    return templatizer;
}));