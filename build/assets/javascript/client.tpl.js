(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var cur_path = root ;
        var parts = "Paris.templates".split('.');
        for(var i = 0, j = parts.length; i < j ; i++) {
         cur_path[parts[i]] = cur_path[parts[i]] || {};
         cur_path =  cur_path[parts[i]];
        }
        root["Paris"]["templates"].templatizer = factory();
        // throw new Error('templatizer: window["Paris"]["templates"] does not exist or is not an object');
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)r&&r[i]?a.push(t.escape(n([e[i]]))):a.push(n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};


    // buttons.jade compiled template
    templatizer["buttons"] = function tmpl_buttons(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(modifiers) {}).call(this, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // buttons.jade:button compiled template
    templatizer["buttons"]["button"] = function tmpl_buttons_button(data) {
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
            if (modifiers && modifiers.indexOf("marker") !== -1) {
                buf.push('<i class="icon icon-marker"></i>');
            } else if (data.icon) {
                buf.push("<i" + jade.cls([ "icon", "icon-" + data.icon + "" ], [ null, true ]) + "></i>");
            }
            buf.push('<span class="button-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</span></a>");
        } else {
            buf.push("<button" + jade.attrs(jade.merge([ {
                "class": (jade_interp = [ null, true ], jade.joinClasses([ "button", modifiers ].map(jade.joinClasses).map(function(cls, i) {
                    return jade_interp[i] ? jade.escape(cls) : cls;
                })))
            }, attributes ]), false) + ">" + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</button>");
        }
        return buf.join("");
    };


    // buttons.jade:buttons compiled template
    templatizer["buttons"]["buttons"] = function tmpl_buttons_buttons(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-buttons">');
        if (data.title) {
            buf.push('<div class="buttons-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
        }
        buf.push('<ul class="buttons-items">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<li>");
                    buf.push(templatizer["buttons"]["button"](item));
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<li>");
                    buf.push(templatizer["buttons"]["button"](item));
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        return buf.join("");
    };

    // links.jade compiled template
    templatizer["links"] = function tmpl_links(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // links.jade:links compiled template
    templatizer["links"]["links"] = function tmpl_links_links(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-links">');
        if (data.title) {
            buf.push("<h2>" + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        }
        buf.push('<ul class="links-items">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<li" + jade.cls([ "links-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                    if (item.target && item.target === "_blank") {
                        buf.push('<span class="links-item-target">' + jade.escape(null == (jade_interp = item.target_text || "nouvelle fenêtre") ? "" : jade_interp) + "</span>");
                    }
                    if (item.filesize) {
                        buf.push('<span class="links-item-filesize">' + jade.escape(null == (jade_interp = item.filesize) ? "" : jade_interp) + "</span>");
                    }
                    buf.push("</a></li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<li" + jade.cls([ "links-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                    if (item.target && item.target === "_blank") {
                        buf.push('<span class="links-item-target">' + jade.escape(null == (jade_interp = item.target_text || "nouvelle fenêtre") ? "" : jade_interp) + "</span>");
                    }
                    if (item.filesize) {
                        buf.push('<span class="links-item-filesize">' + jade.escape(null == (jade_interp = item.filesize) ? "" : jade_interp) + "</span>");
                    }
                    buf.push("</a></li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        return buf.join("");
    };

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
        }, data.attributes || {} ]), false) + ">");
        if (data.title) {
            buf.push('<h3 class="anchors-list-title"><span>' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</span></h3>");
        }
        if (data.items && data.items.length) {
            buf.push('<ul class="anchors-list-items">');
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<li" + jade.cls([ "anchors-list-item", item.modifiers ], [ null, true ]) + "><a" + jade.attrs(jade.merge([ {
                            href: jade.escape(item.href),
                            "class": "anchors-list-link"
                        }, item.attributes || {} ]), false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</a><span class="anchors-list-progress"></span></li>');
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push("<li" + jade.cls([ "anchors-list-item", item.modifiers ], [ null, true ]) + "><a" + jade.attrs(jade.merge([ {
                            href: jade.escape(item.href),
                            "class": "anchors-list-link"
                        }, item.attributes || {} ]), false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</a><span class="anchors-list-progress"></span></li>');
                    }
                }
            }).call(this);
            buf.push("</ul>");
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
                buf.push('</ul><select multiple="multiple"' + jade.attr("name", "" + data.name + "[]", true, false) + ' class="block-aside-select">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push("<option" + jade.attr("value", item.value, true, false) + jade.attr("selected", item.checked, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                            if (item.number) {
                                buf.push(" (" + jade.escape((jade_interp = item.number) == null ? "" : jade_interp) + ")");
                            }
                            buf.push("</option>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push("<option" + jade.attr("value", item.value, true, false) + jade.attr("selected", item.checked, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                            if (item.number) {
                                buf.push(" (" + jade.escape((jade_interp = item.number) == null ? "" : jade_interp) + ")");
                            }
                            buf.push("</option>");
                        }
                    }
                }).call(this);
                buf.push("</select>");
            }
        }, {
            title: data.title,
            modifiers: modifiers
        }));
        return buf.join("");
    };

    // breadcrumbs.jade compiled template
    templatizer["breadcrumbs"] = function tmpl_breadcrumbs(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // breadcrumbs.jade:breadcrumbs compiled template
    templatizer["breadcrumbs"]["breadcrumbs"] = function tmpl_breadcrumbs_breadcrumbs(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<a id="breadcrumbs" class="offset-header breadcrumbs-offset-header"></a><ol class="breadcrumbs">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push('<li class="breadcrumbs-item">');
                    if (item.href) {
                        buf.push("<a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a>");
                    } else {
                        buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                    }
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push('<li class="breadcrumbs-item">');
                    if (item.href) {
                        buf.push("<a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a>");
                    } else {
                        buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                    }
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ol>");
        return buf.join("");
    };

    // hub-heading.jade compiled template
    templatizer["hub-heading"] = function tmpl_hub_heading(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // hub-heading.jade:hub-heading compiled template
    templatizer["hub-heading"]["hub-heading"] = function tmpl_hub_heading_hub_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("style", data.image && "background-image:url('" + data.image + "')", true, false) + jade.cls([ "hub-heading", data.modifiers ], [ null, true ]) + '><div class="hub-heading-wrapper layout-wrapper"><div class="hub-heading-content">');
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else if (data.text) {
            buf.push("<h1>" + (null == (jade_interp = data.text) ? "" : jade_interp) + "</h1>");
        }
        buf.push("</div></div></div>");
        return buf.join("");
    };

    // news-list.jade compiled template
    templatizer["news-list"] = function tmpl_news_list(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined);
        return buf.join("");
    };

    // news-list.jade:news-card compiled template
    templatizer["news-list"]["news-card"] = function tmpl_news_list_news_card(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<a" + jade.attr("href", data.href, true, false) + jade.cls([ "news-card", data.modifiers ], [ null, true ]) + '><div class="news-card-wrapper"><div' + jade.attr("style", data.image && "background-image: url(" + data.image + ");", true, false) + ' class="news-card-image"></div><div class="news-card-content"><div class="news-card-category"><span>' + jade.escape(null == (jade_interp = data.category) ? "" : jade_interp) + '</span></div><div class="news-card-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
        if (data.counters) {
            buf.push('<div class="news-card-counters"><div class="news-card-counter facebook-counter"><span class="icon icon-facebook"></span><span class="counter-value">' + jade.escape(null == (jade_interp = data.counters.facebook) ? "" : jade_interp) + '</span></div><div class="news-card-counter twitter-counter"><span class="icon icon-twitter"></span><span class="counter-value">' + jade.escape(null == (jade_interp = data.counters.twitter) ? "" : jade_interp) + "</span></div></div>");
        }
        buf.push("</div></div></a>");
        return buf.join("");
    };


    // news-list.jade:news-list compiled template
    templatizer["news-list"]["news-list"] = function tmpl_news_list_news_list(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        if (data.modifiers && data.modifiers.indexOf("news-cards") !== -1) {
            if (data.modifiers.indexOf("large-first-child") !== -1) {
                buf.push("<div" + jade.cls([ "news-list", data.modifiers ], [ null, true ]) + ">");
                (function() {
                    var $obj = data.items.slice(0, 5);
                    if ("number" == typeof $obj.length) {
                        for (var index = 0, $l = $obj.length; index < $l; index++) {
                            var item = $obj[index];
                            if (index === 0) {
                                item = JSON.parse(JSON.stringify(item));
                                item.modifiers = [ "large" ];
                                buf.push(templatizer["news-list"]["news-card"](item));
                            } else {
                                buf.push(templatizer["news-list"]["news-card"](item));
                            }
                        }
                    } else {
                        var $l = 0;
                        for (var index in $obj) {
                            $l++;
                            var item = $obj[index];
                            if (index === 0) {
                                item = JSON.parse(JSON.stringify(item));
                                item.modifiers = [ "large" ];
                                buf.push(templatizer["news-list"]["news-card"](item));
                            } else {
                                buf.push(templatizer["news-list"]["news-card"](item));
                            }
                        }
                    }
                }).call(this);
                buf.push("</div>");
            } else {
                buf.push("<div" + jade.cls([ "news-list", "gallery", data.modifiers ], [ null, null, true ]) + ">");
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push(templatizer["news-list"]["news-card"](item));
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push(templatizer["news-list"]["news-card"](item));
                        }
                    }
                }).call(this);
                buf.push("</div>");
            }
        } else {
            buf.push("<div" + jade.cls([ "news-list", "gallery", data.modifiers ], [ null, null, true ]) + ">");
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<a" + jade.attr("href", item.href, true, false) + ' class="news-item"><div class="news-item-meta"><div class="news-item-date">' + jade.escape(null == (jade_interp = item.date) ? "" : jade_interp) + '</div><div class="news-item-category">' + jade.escape(null == (jade_interp = item.category) ? "" : jade_interp) + '</div></div><div class="news-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</div>");
                        if (item.counters) {
                            buf.push('<div class="social-counters"><div class="facebook-counter"><span class="icon icon-facebook"></span><span class="counter-value">' + jade.escape(null == (jade_interp = item.counters.facebook) ? "" : jade_interp) + '</span></div><div class="twitter-counter"><span class="icon icon-twitter"></span><span class="counter-value">' + jade.escape(null == (jade_interp = item.counters.twitter) ? "" : jade_interp) + "</span></div></div>");
                        }
                        buf.push("</a>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push("<a" + jade.attr("href", item.href, true, false) + ' class="news-item"><div class="news-item-meta"><div class="news-item-date">' + jade.escape(null == (jade_interp = item.date) ? "" : jade_interp) + '</div><div class="news-item-category">' + jade.escape(null == (jade_interp = item.category) ? "" : jade_interp) + '</div></div><div class="news-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</div>");
                        if (item.counters) {
                            buf.push('<div class="social-counters"><div class="facebook-counter"><span class="icon icon-facebook"></span><span class="counter-value">' + jade.escape(null == (jade_interp = item.counters.facebook) ? "" : jade_interp) + '</span></div><div class="twitter-counter"><span class="icon icon-twitter"></span><span class="counter-value">' + jade.escape(null == (jade_interp = item.counters.twitter) ? "" : jade_interp) + "</span></div></div>");
                        }
                        buf.push("</a>");
                    }
                }
            }).call(this);
            buf.push("</div>");
        }
        return buf.join("");
    };

    // pagination.jade compiled template
    templatizer["pagination"] = function tmpl_pagination(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(current, item, items_after, items_before, next, parseInt, prev, total) {}).call(this, "current" in locals_for_with ? locals_for_with.current : typeof current !== "undefined" ? current : undefined, "item" in locals_for_with ? locals_for_with.item : typeof item !== "undefined" ? item : undefined, "items_after" in locals_for_with ? locals_for_with.items_after : typeof items_after !== "undefined" ? items_after : undefined, "items_before" in locals_for_with ? locals_for_with.items_before : typeof items_before !== "undefined" ? items_before : undefined, "next" in locals_for_with ? locals_for_with.next : typeof next !== "undefined" ? next : undefined, "parseInt" in locals_for_with ? locals_for_with.parseInt : typeof parseInt !== "undefined" ? parseInt : undefined, "prev" in locals_for_with ? locals_for_with.prev : typeof prev !== "undefined" ? prev : undefined, "total" in locals_for_with ? locals_for_with.total : typeof total !== "undefined" ? total : undefined);
        return buf.join("");
    };

    // pagination.jade:pagination compiled template
    templatizer["pagination"]["pagination"] = function tmpl_pagination_pagination(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<nav class="pagination">');
        current = parseInt(data.current) || 1;
        total = parseInt(data.total) || 0;
        prev = current - 1;
        next = current + 1;
        items_before = function() {
            if (current < 3) {
                return 1;
            } else if (current > total - 1 && total > 3) {
                return 3;
            } else {
                return 2;
            }
        };
        items_after = function() {
            if (current < 3) {
                return current * -1 + 5;
            } else if (current > total - 2) {
                return total - current;
            } else {
                return 2;
            }
        };
        buf.push("<ul>");
        if (current !== 1) {
            buf.push('<li class="previous"><a' + jade.attr("href", data.url.replace("${page}", prev), true, false) + jade.attr("aria-label", data.text.prev, true, false) + ' data-page="prev"><span aria-hidden="true">&lt;</span></a></li>');
            item = current - items_before();
            while (item < current) {
                buf.push('<li class="hidden-on-small"><a' + jade.attr("href", data.url.replace("${page}", item), true, false) + jade.attr("data-page", item, true, false) + ">" + jade.escape(null == (jade_interp = item) ? "" : jade_interp) + "</a></li>");
                item++;
            }
        }
        buf.push('<li class="current"><a' + jade.attr("href", data.url.replace("${page}", current), true, false) + jade.attr("data-page", current, true, false) + ">" + jade.escape(null == (jade_interp = current) ? "" : jade_interp) + "</a></li>");
        if (current !== total) {
            item = current;
            while (item < total && item < current + items_after()) {
                item++;
                buf.push('<li class="hidden-on-small"><a' + jade.attr("href", data.url.replace("${page}", item), true, false) + jade.attr("data-page", item, true, false) + ">" + jade.escape(null == (jade_interp = item) ? "" : jade_interp) + "</a></li>");
            }
            buf.push('<li class="next"><a' + jade.attr("href", data.url.replace("${page}", next), true, false) + jade.attr("aria-label", data.text.next, true, false) + ' data-page="next"><span aria-hidden="true">&gt;</span></a></li>');
        }
        buf.push("</ul></nav>");
        return buf.join("");
    };

    // person-block.jade compiled template
    templatizer["person-block"] = function tmpl_person_block(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // person-block.jade:button compiled template
    templatizer["person-block"]["button"] = function tmpl_person_block_button(data) {
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
            if (modifiers && modifiers.indexOf("marker") !== -1) {
                buf.push('<i class="icon icon-marker"></i>');
            } else if (data.icon) {
                buf.push("<i" + jade.cls([ "icon", "icon-" + data.icon + "" ], [ null, true ]) + "></i>");
            }
            buf.push('<span class="button-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</span></a>");
        } else {
            buf.push("<button" + jade.attrs(jade.merge([ {
                "class": (jade_interp = [ null, true ], jade.joinClasses([ "button", modifiers ].map(jade.joinClasses).map(function(cls, i) {
                    return jade_interp[i] ? jade.escape(cls) : cls;
                })))
            }, attributes ]), false) + ">" + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</button>");
        }
        return buf.join("");
    };


    // person-block.jade:buttons compiled template
    templatizer["person-block"]["buttons"] = function tmpl_person_block_buttons(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-buttons">');
        if (data.title) {
            buf.push('<div class="buttons-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
        }
        buf.push('<ul class="buttons-items">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<li>");
                    buf.push(templatizer["person-block"]["button"](item));
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<li>");
                    buf.push(templatizer["person-block"]["button"](item));
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        return buf.join("");
    };


    // person-block.jade:person-block compiled template
    templatizer["person-block"]["person-block"] = function tmpl_person_block_person_block(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="person-block"><div class="person-block-portrait"><a' + jade.attr("href", data.href, true, false) + jade.attr("style", "background-image: url(" + data.image + ");", true, false) + '></a></div><div class="person-block-content"><a' + jade.attr("href", data.href, true, false) + ' class="person-block-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</a><div class="person-block-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + '</div></div><div class="person-block-button">');
        button = JSON.parse(JSON.stringify(data.button));
        button.href = data.href;
        button.icon = "arrow-right";
        button.modifiers = [ "action" ];
        buf.push(templatizer["person-block"]["button"](button));
        buf.push("</div></div>");
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
            if (modifiers && modifiers.indexOf("marker") !== -1) {
                buf.push('<i class="icon icon-marker"></i>');
            } else if (data.icon) {
                buf.push("<i" + jade.cls([ "icon", "icon-" + data.icon + "" ], [ null, true ]) + "></i>");
            }
            buf.push('<span class="button-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</span></a>");
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
        if (data.title) {
            buf.push("<h1>" + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h1>");
        } else if (data.page) {
            buf.push('<div class="search-results-list-page"><span>' + jade.escape(null == (jade_interp = data.page) ? "" : jade_interp) + "</span></div>");
        }
        if (data.items && data.items.length) {
            buf.push('<ul class="search-results-list-items">');
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<li" + jade.cls([ "search-results-list-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</a>");
                        if (item.anchors && item.anchors.length) {
                            buf.push('<ul class="search-results-list-anchors">');
                            (function() {
                                var $obj = item.anchors;
                                if ("number" == typeof $obj.length) {
                                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                                        var anchor = $obj[$index];
                                        buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.text) ? "" : jade_interp) + "</a></li>");
                                    }
                                } else {
                                    var $l = 0;
                                    for (var $index in $obj) {
                                        $l++;
                                        var anchor = $obj[$index];
                                        buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.text) ? "" : jade_interp) + "</a></li>");
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
                        if (item.anchors && item.anchors.length) {
                            buf.push('<ul class="search-results-list-anchors">');
                            (function() {
                                var $obj = item.anchors;
                                if ("number" == typeof $obj.length) {
                                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                                        var anchor = $obj[$index];
                                        buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.text) ? "" : jade_interp) + "</a></li>");
                                    }
                                } else {
                                    var $l = 0;
                                    for (var $index in $obj) {
                                        $l++;
                                        var anchor = $obj[$index];
                                        buf.push('<li class="search-results-list-anchor"><a' + jade.attr("href", anchor.href, true, false) + ">" + jade.escape(null == (jade_interp = anchor.text) ? "" : jade_interp) + "</a></li>");
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
        if (data.items && data.items.length) {
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
