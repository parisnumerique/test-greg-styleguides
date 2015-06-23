(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var cur_path = root ;
        var parts = "Paris.bo_templates".split('.');
        for(var i = 0, j = parts.length; i < j ; i++) {
         cur_path[parts[i]] = cur_path[parts[i]] || {};
         cur_path =  cur_path[parts[i]];
        }
        root["Paris"]["bo_templates"].templatizer = factory();
        // throw new Error('templatizer: window["Paris"]["bo_templates"] does not exist or is not an object');
    }
}(this, function () {
    var jade=function(){function e(e){return null!=e&&""!==e}function n(t){return(Array.isArray(t)?t.map(n):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(e).join(" ")}var t={};return t.merge=function r(n,t){if(1===arguments.length){for(var a=n[0],i=1;i<n.length;i++)a=r(a,n[i]);return a}var o=n["class"],s=t["class"];(o||s)&&(o=o||[],s=s||[],Array.isArray(o)||(o=[o]),Array.isArray(s)||(s=[s]),n["class"]=o.concat(s).filter(e));for(var l in t)"class"!=l&&(n[l]=t[l]);return n},t.joinClasses=n,t.cls=function(e,r){for(var a=[],i=0;i<e.length;i++)r&&r[i]?a.push(t.escape(n([e[i]]))):a.push(n(e[i]));var o=n(a);return o.length?' class="'+o+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(n){return n+":"+e[n]}).join(";"):e},t.attr=function(e,n,r,a){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(a?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,r){var a=[],i=Object.keys(e);if(i.length)for(var o=0;o<i.length;++o){var s=i[o],l=e[s];"class"==s?(l=n(l))&&a.push(" "+s+'="'+l+'"'):a.push(t.attr(s,l,!1,r))}return a.join("")},t.escape=function(e){var n=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+e?e:n},t.rethrow=function a(e,n,t,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||r))throw e.message+=" on line "+t,e;try{r=r||require("fs").readFileSync(n,"utf8")}catch(i){a(e,null,t)}var o=3,s=r.split("\n"),l=Math.max(t-o,0),f=Math.min(s.length,t+o),o=s.slice(l,f).map(function(e,n){var r=n+l+1;return(r==t?"  > ":"    ")+r+"| "+e}).join("\n");throw e.path=n,e.message=(n||"Jade")+":"+t+"\n"+o+"\n\n"+e.message,e},t}();

    var templatizer = {};


    // accordion.jade compiled template
    templatizer["accordion"] = function tmpl_accordion(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Math, slug, uuid) {}).call(this, "Math" in locals_for_with ? locals_for_with.Math : typeof Math !== "undefined" ? Math : undefined, "slug" in locals_for_with ? locals_for_with.slug : typeof slug !== "undefined" ? slug : undefined, "uuid" in locals_for_with ? locals_for_with.uuid : typeof uuid !== "undefined" ? uuid : undefined);
        return buf.join("");
    };

    // accordion.jade:accordion compiled template
    templatizer["accordion"]["accordion"] = function tmpl_accordion_accordion(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        uuid = Math.random().toString(36).substr(2, 5);
        buf.push('<div role="tablist" aria-multiselectable="true" class="component component-accordion">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var index = 0, $l = $obj.length; index < $l; index++) {
                    var item = $obj[index];
                    slug = item.slug || uuid + "-" + index;
                    buf.push('<div class="accordion-item panel"><div role="tab"' + jade.attr("id", "h-" + slug + "", true, false) + "><a" + jade.attr("href", "#" + slug + "", true, false) + jade.attr("aria-controls", "#" + slug + "", true, false) + ' class="accordion-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '<span class="icon icon-arrow-top"></span></a></div><div role="tabpanel"' + jade.attr("aria-labelledby", "h-" + slug + "", true, false) + jade.attr("id", "" + slug + "", true, false) + ' class="accordion-item-content"><div class="accordion-content-wrapper">' + (null == (jade_interp = item.content) ? "" : jade_interp) + "</div></div></div>");
                }
            } else {
                var $l = 0;
                for (var index in $obj) {
                    $l++;
                    var item = $obj[index];
                    slug = item.slug || uuid + "-" + index;
                    buf.push('<div class="accordion-item panel"><div role="tab"' + jade.attr("id", "h-" + slug + "", true, false) + "><a" + jade.attr("href", "#" + slug + "", true, false) + jade.attr("aria-controls", "#" + slug + "", true, false) + ' class="accordion-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '<span class="icon icon-arrow-top"></span></a></div><div role="tabpanel"' + jade.attr("aria-labelledby", "h-" + slug + "", true, false) + jade.attr("id", "" + slug + "", true, false) + ' class="accordion-item-content"><div class="accordion-content-wrapper">' + (null == (jade_interp = item.content) ? "" : jade_interp) + "</div></div></div>");
                }
            }
        }).call(this);
        buf.push("</div>");
        return buf.join("");
    };

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

    // faq.jade compiled template
    templatizer["faq"] = function tmpl_faq(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(Math, slug, uuid) {}).call(this, "Math" in locals_for_with ? locals_for_with.Math : typeof Math !== "undefined" ? Math : undefined, "slug" in locals_for_with ? locals_for_with.slug : typeof slug !== "undefined" ? slug : undefined, "uuid" in locals_for_with ? locals_for_with.uuid : typeof uuid !== "undefined" ? uuid : undefined);
        return buf.join("");
    };

    // faq.jade:accordion compiled template
    templatizer["faq"]["accordion"] = function tmpl_faq_accordion(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        uuid = Math.random().toString(36).substr(2, 5);
        buf.push('<div role="tablist" aria-multiselectable="true" class="component component-accordion">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var index = 0, $l = $obj.length; index < $l; index++) {
                    var item = $obj[index];
                    slug = item.slug || uuid + "-" + index;
                    buf.push('<div class="accordion-item panel"><div role="tab"' + jade.attr("id", "h-" + slug + "", true, false) + "><a" + jade.attr("href", "#" + slug + "", true, false) + jade.attr("aria-controls", "#" + slug + "", true, false) + ' class="accordion-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '<span class="icon icon-arrow-top"></span></a></div><div role="tabpanel"' + jade.attr("aria-labelledby", "h-" + slug + "", true, false) + jade.attr("id", "" + slug + "", true, false) + ' class="accordion-item-content"><div class="accordion-content-wrapper">' + (null == (jade_interp = item.content) ? "" : jade_interp) + "</div></div></div>");
                }
            } else {
                var $l = 0;
                for (var index in $obj) {
                    $l++;
                    var item = $obj[index];
                    slug = item.slug || uuid + "-" + index;
                    buf.push('<div class="accordion-item panel"><div role="tab"' + jade.attr("id", "h-" + slug + "", true, false) + "><a" + jade.attr("href", "#" + slug + "", true, false) + jade.attr("aria-controls", "#" + slug + "", true, false) + ' class="accordion-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '<span class="icon icon-arrow-top"></span></a></div><div role="tabpanel"' + jade.attr("aria-labelledby", "h-" + slug + "", true, false) + jade.attr("id", "" + slug + "", true, false) + ' class="accordion-item-content"><div class="accordion-content-wrapper">' + (null == (jade_interp = item.content) ? "" : jade_interp) + "</div></div></div>");
                }
            }
        }).call(this);
        buf.push("</div>");
        return buf.join("");
    };


    // faq.jade:faq compiled template
    templatizer["faq"]["faq"] = function tmpl_faq_faq(opts) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push(templatizer["faq"]["accordion"](opts));
        return buf.join("");
    };

    // html.jade compiled template
    templatizer["html"] = function tmpl_html(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // html.jade:html compiled template
    templatizer["html"]["html"] = function tmpl_html_html(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-html">');
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("html");
        }
        buf.push("</div>");
        return buf.join("");
    };

    // image.jade compiled template
    templatizer["image"] = function tmpl_image(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(title) {}).call(this, "title" in locals_for_with ? locals_for_with.title : typeof title !== "undefined" ? title : undefined);
        return buf.join("");
    };

    // image.jade:image compiled template
    templatizer["image"]["image"] = function tmpl_image_image(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "component", "component-image", data.modifiers ], [ null, null, true ]) + ">");
        title = [ data.title ];
        if (data.credit) {
            title.push("(" + data.credit + ")");
        }
        title = title.join(" ");
        if (data.srcset) {
            buf.push("<img" + jade.attr("src", data.src, true, false) + jade.attr("srcset", data.srcset.join(", "), true, false) + ' sizes="(min-width: 1160px) 770px, 100vw"' + jade.attr("alt", data.alt, true, false) + jade.attr("title", title, true, false) + "/>");
        } else {
            buf.push("<img" + jade.attr("src", data.src, true, false) + jade.attr("alt", data.alt, true, false) + jade.attr("title", title, true, false) + "/>");
        }
        buf.push("</div>");
        return buf.join("");
    };

    // jecoute.jade compiled template
    templatizer["jecoute"] = function tmpl_jecoute(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, textarea) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "textarea" in locals_for_with ? locals_for_with.textarea : typeof textarea !== "undefined" ? textarea : undefined);
        return buf.join("");
    };

    // jecoute.jade:jecoute compiled template
    templatizer["jecoute"]["jecoute"] = function tmpl_jecoute_jecoute(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("data-thanks", data.thanks, true, false) + ' class="component component-jecoute"><div class="jecoute-title"><p>' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</p></div><div class="jecoute-content"><p class="jecoute-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</p><form" + jade.attrs(jade.merge([ {
            method: "post",
            "class": "jecoute-form"
        }, data.form ]), false) + ">");
        textarea = JSON.parse(JSON.stringify(data.textarea));
        delete textarea.value;
        buf.push("<textarea" + jade.attrs(jade.merge([ {
            name: "email",
            required: true
        }, textarea ]), false) + ">" + jade.escape(null == (jade_interp = data.textarea.value) ? "" : jade_interp) + "</textarea><input" + jade.attrs(jade.merge([ {
            type: "email",
            name: "email",
            required: true
        }, data.email ]), false) + '/><button type="submit" class="button secondary action">' + jade.escape(null == (jade_interp = data.button) ? "" : jade_interp) + "</button></form></div></div>");
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

    // news-push.jade compiled template
    templatizer["news-push"] = function tmpl_news_push(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(title) {}).call(this, "title" in locals_for_with ? locals_for_with.title : typeof title !== "undefined" ? title : undefined);
        return buf.join("");
    };

    // news-push.jade:news-push compiled template
    templatizer["news-push"]["news-push"] = function tmpl_news_push_news_push(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-news-push"><div class="news-push-wrapper"><div class="news-push-after"></div>');
        title = [ data.title ];
        if (data.image.credit) {
            title.push("(" + data.image.credit + ")");
        }
        buf.push("<a" + jade.attr("href", data.href, true, false) + ' class="news-push-image"><img' + jade.attr("src", data.image.src, true, false) + jade.attr("alt", data.image.alt, true, false) + jade.attr("title", title.join(" "), true, false) + '/></a><div class="news-push-content"><h3><span>' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</span></h3><p><a" + jade.attr("href", data.href, true, false) + ">" + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</a> <a" + jade.attr("href", data.href, true, false) + ' class="next">' + jade.escape(null == (jade_interp = data.follow) ? "" : jade_interp) + "</a></p></div></div><a" + jade.attr("href", data.link.href, true, false) + ' class="news-push-link"><span>' + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</span></a></div>");
        return buf.join("");
    };

    // place.jade compiled template
    templatizer["place"] = function tmpl_place(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // place.jade:button compiled template
    templatizer["place"]["button"] = function tmpl_place_button(data) {
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


    // place.jade:place compiled template
    templatizer["place"]["place"] = function tmpl_place_place(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-place"><div class="place-content">');
        if (data.title) {
            buf.push('<div class="place-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
        }
        if (data.address) {
            buf.push('<div class="place-address">' + (null == (jade_interp = data.address) ? "" : jade_interp) + "</div>");
        }
        if (data.items && data.items.length) {
            buf.push('<ul class="place-items">');
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push('<li class="place-item"><i' + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push('<li class="place-item"><i' + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        }
        buf.push("</div>");
        if (data.button) {
            button = JSON.parse(JSON.stringify(data.button));
            button.modifiers = [ "marker" ];
            buf.push(templatizer["place"]["button"](button));
        }
        buf.push("</div>");
        return buf.join("");
    };

    // postit.jade compiled template
    templatizer["postit"] = function tmpl_postit(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // postit.jade:postit compiled template
    templatizer["postit"]["postit"] = function tmpl_postit_postit(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "component", "component-postit", data ? data.modifiers : [] ], [ null, null, true ]) + ">");
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("<p>postit</p>");
        }
        buf.push("</div>");
        return buf.join("");
    };

    // sharelines.jade compiled template
    templatizer["sharelines"] = function tmpl_sharelines(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, share) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "share" in locals_for_with ? locals_for_with.share : typeof share !== "undefined" ? share : undefined);
        return buf.join("");
    };

    // sharelines.jade:share compiled template
    templatizer["sharelines"]["share"] = function tmpl_sharelines_share(data) {
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


    // sharelines.jade:sharelines compiled template
    templatizer["sharelines"]["sharelines"] = function tmpl_sharelines_sharelines(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-sharelines"><div class="sharelines-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</div><ul class="sharelines-items">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push('<li class="sharelines-item">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                    share = JSON.parse(JSON.stringify(item.share));
                    share.modifiers = [ "circles" ];
                    buf.push(templatizer["sharelines"]["share"](share));
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push('<li class="sharelines-item">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                    share = JSON.parse(JSON.stringify(item.share));
                    share.modifiers = [ "circles" ];
                    buf.push(templatizer["sharelines"]["share"](share));
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        return buf.join("");
    };

    // table.jade compiled template
    templatizer["table"] = function tmpl_table(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // table.jade:table compiled template
    templatizer["table"]["table"] = function tmpl_table_table(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-table"><table' + jade.attr("summary", data.summary, true, false) + ">");
        if (data.caption) {
            buf.push("<caption>" + jade.escape(null == (jade_interp = data.caption) ? "" : jade_interp) + "</caption>");
        }
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        }
        buf.push("</table></div>");
        return buf.join("");
    };

    // text.jade compiled template
    templatizer["text"] = function tmpl_text(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // text.jade:text compiled template
    templatizer["text"]["text"] = function tmpl_text_text(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "component", "component-text", data ? data.modifiers : [] ], [ null, null, true ]) + ">");
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("<p>text</p>");
        }
        buf.push("</div>");
        return buf.join("");
    };

    // verbatim.jade compiled template
    templatizer["verbatim"] = function tmpl_verbatim(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, share) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "share" in locals_for_with ? locals_for_with.share : typeof share !== "undefined" ? share : undefined);
        return buf.join("");
    };

    // verbatim.jade:share compiled template
    templatizer["verbatim"]["share"] = function tmpl_verbatim_share(data) {
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


    // verbatim.jade:verbatim compiled template
    templatizer["verbatim"]["verbatim"] = function tmpl_verbatim_verbatim(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<blockquote class="component component-verbatim"><p class="verbatim-text">' + jade.escape(null == (jade_interp = data.quote) ? "" : jade_interp) + '</p><footer><div class="verbatim-separate"></div><cite><div class="verbatim-author">' + jade.escape(null == (jade_interp = data.author) ? "" : jade_interp) + ',</div><div class="verbatim-function">' + jade.escape(null == (jade_interp = data.function) ? "" : jade_interp) + "</div></cite>");
        share = JSON.parse(JSON.stringify(data.share));
        share.modifiers = [ "circles" ];
        buf.push(templatizer["verbatim"]["share"](share));
        buf.push("</footer></blockquote>");
        return buf.join("");
    };

    // video.jade compiled template
    templatizer["video"] = function tmpl_video(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // video.jade:video compiled template
    templatizer["video"]["video"] = function tmpl_video_video(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="component component-video"><div class="video-wrapper">');
        if (data.cookie === false) {
            if (block) {
                buf.push(null == (jade_interp = block) ? "" : jade_interp);
            } else if (data.block) {
                buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
            }
        } else {
            if (data.placeholder) {
                buf.push('<div class="video-placeholder">' + (null == (jade_interp = data.placeholder) ? "" : jade_interp) + "</div>");
            }
            buf.push('<script type="text/html" class="video-embed">');
            if (block) {
                buf.push(null == (jade_interp = block) ? "" : jade_interp);
            } else if (data.block) {
                buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
            }
            buf.push("</script>");
        }
        buf.push("</div></div>");
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

    // block-aside-contact.jade compiled template
    templatizer["block-aside-contact"] = function tmpl_block_aside_contact(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(block_modifiers) {}).call(this, "block_modifiers" in locals_for_with ? locals_for_with.block_modifiers : typeof block_modifiers !== "undefined" ? block_modifiers : undefined);
        return buf.join("");
    };

    // block-aside-contact.jade:block-aside compiled template
    templatizer["block-aside-contact"]["block-aside"] = function tmpl_block_aside_contact_block_aside(data) {
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


    // block-aside-contact.jade:block-aside-contact compiled template
    templatizer["block-aside-contact"]["block-aside-contact"] = function tmpl_block_aside_contact_block_aside_contact(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        block_modifiers = data.modifiers || [];
        block_modifiers.push("block-aside-contact");
        buf.push(templatizer["block-aside-contact"]["block-aside"].call({
            block: function(buf) {
                buf.push('<ul class="block-aside-items">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            var modifiers = item.modifiers || [];
                            if (item.icon) {
                                modifiers.push("has-icon");
                            }
                            if (item.title) {
                                buf.push("<li" + jade.cls([ "block-aside-item", modifiers ], [ null, true ]) + ">");
                                if (!item.icon) {
                                    buf.push(jade.escape(null == (jade_interp = item.title + " ") ? "" : jade_interp));
                                }
                                if (item.href) {
                                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.cls([ item.hcard_properties ], [ true ]) + ">");
                                    if (item.icon) {
                                        buf.push("<i" + jade.attr("title", item.title, true, false) + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a>");
                                } else {
                                    if (item.icon) {
                                        buf.push("<i" + jade.attr("title", item.title, true, false) + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push("<span" + jade.cls([ item.hcard_properties ], [ true ]) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span>");
                                }
                                buf.push("</li>");
                            } else {
                                buf.push("<li" + jade.cls([ "block-aside-item", modifiers, item.hcard_properties ], [ null, true, true ]) + ">");
                                if (item.href) {
                                    buf.push("<a" + jade.attr("href", item.href, true, false) + ">");
                                    if (item.icon) {
                                        buf.push("<i" + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a>");
                                } else {
                                    if (item.icon) {
                                        buf.push("<i" + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                                }
                                buf.push("</li>");
                            }
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            var modifiers = item.modifiers || [];
                            if (item.icon) {
                                modifiers.push("has-icon");
                            }
                            if (item.title) {
                                buf.push("<li" + jade.cls([ "block-aside-item", modifiers ], [ null, true ]) + ">");
                                if (!item.icon) {
                                    buf.push(jade.escape(null == (jade_interp = item.title + " ") ? "" : jade_interp));
                                }
                                if (item.href) {
                                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.cls([ item.hcard_properties ], [ true ]) + ">");
                                    if (item.icon) {
                                        buf.push("<i" + jade.attr("title", item.title, true, false) + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a>");
                                } else {
                                    if (item.icon) {
                                        buf.push("<i" + jade.attr("title", item.title, true, false) + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push("<span" + jade.cls([ item.hcard_properties ], [ true ]) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span>");
                                }
                                buf.push("</li>");
                            } else {
                                buf.push("<li" + jade.cls([ "block-aside-item", modifiers, item.hcard_properties ], [ null, true, true ]) + ">");
                                if (item.href) {
                                    buf.push("<a" + jade.attr("href", item.href, true, false) + ">");
                                    if (item.icon) {
                                        buf.push("<i" + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a>");
                                } else {
                                    if (item.icon) {
                                        buf.push("<i" + jade.cls([ "icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                                    }
                                    buf.push(jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                                }
                                buf.push("</li>");
                            }
                        }
                    }
                }).call(this);
                buf.push("</ul>");
            }
        }, {
            title: data.title,
            modifiers: block_modifiers
        }));
        return buf.join("");
    };

    // block-aside-links.jade compiled template
    templatizer["block-aside-links"] = function tmpl_block_aside_links(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(modifiers) {}).call(this, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // block-aside-links.jade:block-aside compiled template
    templatizer["block-aside-links"]["block-aside"] = function tmpl_block_aside_links_block_aside(data) {
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


    // block-aside-links.jade:block-aside-links compiled template
    templatizer["block-aside-links"]["block-aside-links"] = function tmpl_block_aside_links_block_aside_links(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        modifiers = data.modifiers || [];
        modifiers.push("block-aside-links");
        buf.push(templatizer["block-aside-links"]["block-aside"].call({
            block: function(buf) {
                buf.push('<ul class="block-aside-items">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "block-aside-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "block-aside-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
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

    // block-aside.jade compiled template
    templatizer["block-aside"] = function tmpl_block_aside(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // block-aside.jade:block-aside compiled template
    templatizer["block-aside"]["block-aside"] = function tmpl_block_aside_block_aside(data) {
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

    // block-content-jecoute.jade compiled template
    templatizer["block-content-jecoute"] = function tmpl_block_content_jecoute(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // block-content-jecoute.jade:block-content compiled template
    templatizer["block-content-jecoute"]["block-content"] = function tmpl_block_content_jecoute_block_content(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        attributes = data.attributes || {};
        buf.push("<div" + jade.attrs(jade.merge([ {
            "class": (jade_interp = [ null, true ], jade.joinClasses([ "block-content", data.modifiers ].map(jade.joinClasses).map(function(cls, i) {
                return jade_interp[i] ? jade.escape(cls) : cls;
            })))
        }, attributes ]), false) + '><h2 class="block-content-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</h2><div class="block-content-content">');
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("blue block");
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // block-content-jecoute.jade:button compiled template
    templatizer["block-content-jecoute"]["button"] = function tmpl_block_content_jecoute_button(data) {
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


    // block-content-jecoute.jade:block-content-jecoute compiled template
    templatizer["block-content-jecoute"]["block-content-jecoute"] = function tmpl_block_content_jecoute_block_content_jecoute(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        modifiers = JSON.parse(JSON.stringify(data.modifiers || []));
        modifiers.push("block-content-jecoute");
        buf.push(templatizer["block-content-jecoute"]["block-content"].call({
            block: function(buf) {
                if (data.items && data.items.length) {
                    buf.push('<div class="block-content-items">');
                    (function() {
                        var $obj = data.items;
                        if ("number" == typeof $obj.length) {
                            for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                                var item = $obj[$index];
                                buf.push('<div class="block-content-item"><div class="block-content-timer"><span class="start">' + jade.escape(null == (jade_interp = item.question.time) ? "" : jade_interp) + '</span><span class="end">' + jade.escape(null == (jade_interp = item.answer.time) ? "" : jade_interp) + '</span><div class="block-content-bar"><div class="progress"></div></div></div><div class="block-content-question-answer"><div class="block-content-question"><div class="user">' + jade.escape(null == (jade_interp = item.question.user) ? "" : jade_interp) + '</div><div class="text">' + jade.escape(null == (jade_interp = item.question.text) ? "" : jade_interp) + '</div></div><div class="block-content-answer"><div class="user">' + jade.escape(null == (jade_interp = item.answer.user) ? "" : jade_interp) + '</div><div class="text">' + jade.escape(null == (jade_interp = item.answer.text) ? "" : jade_interp) + "</div></div></div></div>");
                            }
                        } else {
                            var $l = 0;
                            for (var $index in $obj) {
                                $l++;
                                var item = $obj[$index];
                                buf.push('<div class="block-content-item"><div class="block-content-timer"><span class="start">' + jade.escape(null == (jade_interp = item.question.time) ? "" : jade_interp) + '</span><span class="end">' + jade.escape(null == (jade_interp = item.answer.time) ? "" : jade_interp) + '</span><div class="block-content-bar"><div class="progress"></div></div></div><div class="block-content-question-answer"><div class="block-content-question"><div class="user">' + jade.escape(null == (jade_interp = item.question.user) ? "" : jade_interp) + '</div><div class="text">' + jade.escape(null == (jade_interp = item.question.text) ? "" : jade_interp) + '</div></div><div class="block-content-answer"><div class="user">' + jade.escape(null == (jade_interp = item.answer.user) ? "" : jade_interp) + '</div><div class="text">' + jade.escape(null == (jade_interp = item.answer.text) ? "" : jade_interp) + "</div></div></div></div>");
                            }
                        }
                    }).call(this);
                    buf.push("</div>");
                }
                if (data.text) {
                    buf.push('<div class="block-content-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</div>");
                }
                button = JSON.parse(JSON.stringify(data.button));
                button.modifiers = [ "action" ];
                buf.push('<div class="block-content-button">');
                buf.push(templatizer["block-content-jecoute"]["button"](button));
                buf.push("</div>");
            }
        }, {
            title: data.title,
            modifiers: modifiers
        }));
        return buf.join("");
    };

    // block-content-newsletter.jade compiled template
    templatizer["block-content-newsletter"] = function tmpl_block_content_newsletter(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // block-content-newsletter.jade:block-content compiled template
    templatizer["block-content-newsletter"]["block-content"] = function tmpl_block_content_newsletter_block_content(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        attributes = data.attributes || {};
        buf.push("<div" + jade.attrs(jade.merge([ {
            "class": (jade_interp = [ null, true ], jade.joinClasses([ "block-content", data.modifiers ].map(jade.joinClasses).map(function(cls, i) {
                return jade_interp[i] ? jade.escape(cls) : cls;
            })))
        }, attributes ]), false) + '><h2 class="block-content-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</h2><div class="block-content-content">');
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("blue block");
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // block-content-newsletter.jade:button compiled template
    templatizer["block-content-newsletter"]["button"] = function tmpl_block_content_newsletter_button(data) {
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


    // block-content-newsletter.jade:block-content-newsletter compiled template
    templatizer["block-content-newsletter"]["block-content-newsletter"] = function tmpl_block_content_newsletter_block_content_newsletter(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        modifiers = JSON.parse(JSON.stringify(data.modifiers || []));
        modifiers.push("block-content-newsletter");
        buf.push(templatizer["block-content-newsletter"]["block-content"].call({
            block: function(buf) {
                buf.push('<div class="block-content-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</div>");
                if (data.form) {
                    buf.push("<form" + jade.attrs(jade.merge([ {
                        "class": "block-content-form"
                    }, data.form ]), false) + '><input type="email"' + jade.attr("placeholder", data.input.placeholder, true, false) + jade.attr("title", data.input.placeholder, true, false) + jade.attr("id", data.input.id, true, false) + jade.attr("name", data.input.name, true, false) + ' required="required"/><button type="submit" class="button action">' + jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp) + "</button></form>");
                } else if (data.button) {
                    button = JSON.parse(JSON.stringify(data.button || []));
                    button.modifiers = button.modifiers || [];
                    button.modifiers.push("action");
                    buf.push(templatizer["block-content-newsletter"]["button"](button));
                }
                if (data.link) {
                    buf.push('<div class="block-content-link"><a' + jade.attr("href", data.link.href, true, false) + jade.attr("target", data.link.target, true, false) + ">" + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a></div>");
                }
            }
        }, {
            title: data.title,
            modifiers: modifiers,
            attributes: {
                "data-thanks": data.thanks
            }
        }));
        return buf.join("");
    };

    // block-content-social.jade compiled template
    templatizer["block-content-social"] = function tmpl_block_content_social(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // block-content-social.jade:block-content compiled template
    templatizer["block-content-social"]["block-content"] = function tmpl_block_content_social_block_content(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        attributes = data.attributes || {};
        buf.push("<div" + jade.attrs(jade.merge([ {
            "class": (jade_interp = [ null, true ], jade.joinClasses([ "block-content", data.modifiers ].map(jade.joinClasses).map(function(cls, i) {
                return jade_interp[i] ? jade.escape(cls) : cls;
            })))
        }, attributes ]), false) + '><h2 class="block-content-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</h2><div class="block-content-content">');
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("blue block");
        }
        buf.push("</div></div>");
        return buf.join("");
    };


    // block-content-social.jade:block-content-social compiled template
    templatizer["block-content-social"]["block-content-social"] = function tmpl_block_content_social_block_content_social(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        modifiers = JSON.parse(JSON.stringify(data.modifiers || []));
        modifiers.push("block-content-social");
        buf.push(templatizer["block-content-social"]["block-content"].call({
            block: function(buf) {
                buf.push('<div class="block-content-items">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push("<a" + jade.attr("href", item.link.href, true, false) + jade.attr("target", item.link.target, true, false) + ' class="block-content-item"><div class="block-content-count"><i' + jade.cls([ "block-content-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>" + jade.escape(null == (jade_interp = item.count) ? "" : jade_interp) + '</div><div class="block-content-link">' + jade.escape(null == (jade_interp = item.link.text) ? "" : jade_interp) + "</div></a>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push("<a" + jade.attr("href", item.link.href, true, false) + jade.attr("target", item.link.target, true, false) + ' class="block-content-item"><div class="block-content-count"><i' + jade.cls([ "block-content-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>" + jade.escape(null == (jade_interp = item.count) ? "" : jade_interp) + '</div><div class="block-content-link">' + jade.escape(null == (jade_interp = item.link.text) ? "" : jade_interp) + "</div></a>");
                        }
                    }
                }).call(this);
                buf.push("</div>");
                if (data.link) {
                    buf.push("<a" + jade.attr("href", data.link.href, true, false) + ' class="block-content-link">' + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a>");
                }
            }
        }, {
            title: data.title,
            modifiers: modifiers
        }));
        return buf.join("");
    };

    // block-content.jade compiled template
    templatizer["block-content"] = function tmpl_block_content(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // block-content.jade:block-content compiled template
    templatizer["block-content"]["block-content"] = function tmpl_block_content_block_content(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        attributes = data.attributes || {};
        buf.push("<div" + jade.attrs(jade.merge([ {
            "class": (jade_interp = [ null, true ], jade.joinClasses([ "block-content", data.modifiers ].map(jade.joinClasses).map(function(cls, i) {
                return jade_interp[i] ? jade.escape(cls) : cls;
            })))
        }, attributes ]), false) + '><h2 class="block-content-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</h2><div class="block-content-content">');
        if (block) {
            block && block(buf);
        } else if (data.block) {
            buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
        } else {
            buf.push("blue block");
        }
        buf.push("</div></div>");
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

    // button-top.jade compiled template
    templatizer["button-top"] = function tmpl_button_top(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // button-top.jade:button-top compiled template
    templatizer["button-top"]["button-top"] = function tmpl_button_top_button_top(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<a href="#" class="button-top"><i class="icon-arrow-top"></i></a>');
        return buf.join("");
    };

    // button.jade compiled template
    templatizer["button"] = function tmpl_button(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(modifiers) {}).call(this, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // button.jade:button compiled template
    templatizer["button"]["button"] = function tmpl_button_button(data) {
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

    // cross-content.jade compiled template
    templatizer["cross-content"] = function tmpl_cross_content(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // cross-content.jade:cross-content compiled template
    templatizer["cross-content"]["cross-content"] = function tmpl_cross_content_cross_content(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="cross-content">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.attr("style", "background-image: url(" + item.background + ");", true, false) + jade.cls([ "cross-content-item", item.modifiers ], [ null, true ]) + '><div class="cross-content-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</div>");
                    if (item.icon) {
                        buf.push("<i" + jade.cls([ "cross-content-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                    }
                    buf.push('<div class="cross-content-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.attr("style", "background-image: url(" + item.background + ");", true, false) + jade.cls([ "cross-content-item", item.modifiers ], [ null, true ]) + '><div class="cross-content-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</div>");
                    if (item.icon) {
                        buf.push("<i" + jade.cls([ "cross-content-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                    }
                    buf.push('<div class="cross-content-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a>");
                }
            }
        }).call(this);
        buf.push("</div>");
        return buf.join("");
    };

    // document-heading.jade compiled template
    templatizer["document-heading"] = function tmpl_document_heading(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // document-heading.jade:tags compiled template
    templatizer["document-heading"]["tags"] = function tmpl_document_heading_tags(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<ul class="tags">');
        (function() {
            var $obj = data;
            if ("number" == typeof $obj.length) {
                for (var index = 0, $l = $obj.length; index < $l; index++) {
                    var tag = $obj[index];
                    buf.push("<li>");
                    if (tag.href) {
                        buf.push("<a" + jade.attr("href", "" + tag.href + "", true, false) + ' class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</a>");
                    } else {
                        buf.push('<span class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</span>");
                    }
                    if (index < data.length - 1) {
                        buf.push('<span class="tags-separator">—</span>');
                    }
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var index in $obj) {
                    $l++;
                    var tag = $obj[index];
                    buf.push("<li>");
                    if (tag.href) {
                        buf.push("<a" + jade.attr("href", "" + tag.href + "", true, false) + ' class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</a>");
                    } else {
                        buf.push('<span class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</span>");
                    }
                    if (index < data.length - 1) {
                        buf.push('<span class="tags-separator">—</span>');
                    }
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ul>");
        return buf.join("");
    };


    // document-heading.jade:document-heading compiled template
    templatizer["document-heading"]["document-heading"] = function tmpl_document_heading_document_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="document-heading"><div' + jade.attr("style", data.image && "background-image:url('" + data.image + "')", true, false) + ' class="document-heading-background"></div><div class="document-heading-wrapper"><div class="document-heading-content"><div class="document-heading-content-wrapper"><h1 class="document-heading-title">' + (null == (jade_interp = data.text) ? "" : jade_interp) + "</h1>");
        if (data.icons) {
            buf.push('<div class="document-heading-icons">');
            (function() {
                var $obj = data.icons;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var icon = $obj[$index];
                        modifiers = JSON.parse(JSON.stringify(icon.modifiers || []));
                        modifiers.push("icon-" + icon.name);
                        buf.push("<a" + jade.attr("href", icon.href, true, false) + jade.attr("title", icon.title, true, false) + jade.attr("target", icon.target, true, false) + jade.cls([ "icon", modifiers ], [ null, true ]) + "></a>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var icon = $obj[$index];
                        modifiers = JSON.parse(JSON.stringify(icon.modifiers || []));
                        modifiers.push("icon-" + icon.name);
                        buf.push("<a" + jade.attr("href", icon.href, true, false) + jade.attr("title", icon.title, true, false) + jade.attr("target", icon.target, true, false) + jade.cls([ "icon", modifiers ], [ null, true ]) + "></a>");
                    }
                }
            }).call(this);
            buf.push("</div>");
        }
        if (data.tags) {
            buf.push(templatizer["document-heading"]["tags"](data.tags));
        }
        buf.push("</div></div></div></div>");
        return buf.join("");
    };

    // error-heading.jade compiled template
    templatizer["error-heading"] = function tmpl_error_heading(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // error-heading.jade:button compiled template
    templatizer["error-heading"]["button"] = function tmpl_error_heading_button(data) {
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


    // error-heading.jade:error-heading compiled template
    templatizer["error-heading"]["error-heading"] = function tmpl_error_heading_error_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "error-heading", data.modifiers ], [ null, true ]) + "><div" + jade.attr("style", data.background ? "background-image: url(" + data.background + ")" : "", true, false) + ' class="error-heading-wrapper layout-wrapper"><a id="logo"' + jade.attr("href", data.logo.href, true, false) + ' class="error-heading-logo"><div class="error-heading-logo-nef"></div><div class="error-heading-logo-paris">' + jade.escape(null == (jade_interp = data.logo.text) ? "" : jade_interp) + '</div></a><div class="error-heading-content">');
        if (data.title) {
            buf.push("<h1>" + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h1>");
        }
        if (data.trace) {
            buf.push('<p class="error-heading-trace">' + jade.escape(null == (jade_interp = data.trace) ? "" : jade_interp) + "</p>");
        }
        if (data.button) {
            button = JSON.parse(JSON.stringify(data.button || []));
            button.modifiers = button.modifiers || [];
            button.modifiers.push("white");
            buf.push(templatizer["error-heading"]["button"](button));
        }
        buf.push("</div></div></div>");
        return buf.join("");
    };

    // footer.jade compiled template
    templatizer["footer"] = function tmpl_footer(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // footer.jade:footer compiled template
    templatizer["footer"]["footer"] = function tmpl_footer_footer(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="footer"><div class="layout-wrapper footer-wrapper"><a' + jade.attr("href", data.logo.href, true, false) + ' class="footer-logo"><img' + jade.attr("src", data.logo.src, true, false) + jade.attr("alt", data.logo.alt, true, false) + '/></a><ul class="footer-links">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<li" + jade.cls([ item.modifiers ], [ true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<li" + jade.cls([ item.modifiers ], [ true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                }
            }
        }).call(this);
        buf.push("</ul></div></div>");
        return buf.join("");
    };

    // gallery-ugc.jade compiled template
    templatizer["gallery-ugc"] = function tmpl_gallery_ugc(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // gallery-ugc.jade:gallery-ugc compiled template
    templatizer["gallery-ugc"]["gallery-ugc"] = function tmpl_gallery_ugc_gallery_ugc(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="gallery-ugc"><div class="gallery-title">' + jade.escape(null == (jade_interp = data.title + " :") ? "" : jade_interp) + "</div>");
        (function() {
            var $obj = data.hashtags;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var hashtag = $obj[$index];
                    buf.push("<a" + jade.attr("href", "" + hashtag.url + "", true, false) + jade.cls([ "gallery-hashtag", hashtag.current ? "current" : "" ], [ null, true ]) + ">" + jade.escape(null == (jade_interp = hashtag.text) ? "" : jade_interp) + "</a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var hashtag = $obj[$index];
                    buf.push("<a" + jade.attr("href", "" + hashtag.url + "", true, false) + jade.cls([ "gallery-hashtag", hashtag.current ? "current" : "" ], [ null, true ]) + ">" + jade.escape(null == (jade_interp = hashtag.text) ? "" : jade_interp) + "</a>");
                }
            }
        }).call(this);
        buf.push('<div class="gallery-content">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push('<a href="#" target="_blank"' + jade.attr("style", "background-image: url(" + item.image + ");", true, false) + ' class="gallery-image"><div class="overlay"><div class="gallery-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></div></a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push('<a href="#" target="_blank"' + jade.attr("style", "background-image: url(" + item.image + ");", true, false) + ' class="gallery-image"><div class="overlay"><div class="gallery-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></div></a>");
                }
            }
        }).call(this);
        buf.push("</div></div>");
        return buf.join("");
    };

    // refresh.jade compiled template
    templatizer["refresh"] = function tmpl_refresh(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(defaults) {
            buf.push(templatizer["refresh"]["gallery-ugc"](defaults));
        }).call(this, "defaults" in locals_for_with ? locals_for_with.defaults : typeof defaults !== "undefined" ? defaults : undefined);
        return buf.join("");
    };

    // refresh.jade:gallery-ugc compiled template
    templatizer["refresh"]["gallery-ugc"] = function tmpl_refresh_gallery_ugc(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="gallery-ugc"><div class="gallery-title">' + jade.escape(null == (jade_interp = data.title + " :") ? "" : jade_interp) + "</div>");
        (function() {
            var $obj = data.hashtags;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var hashtag = $obj[$index];
                    buf.push("<a" + jade.attr("href", "" + hashtag.url + "", true, false) + jade.cls([ "gallery-hashtag", hashtag.current ? "current" : "" ], [ null, true ]) + ">" + jade.escape(null == (jade_interp = hashtag.text) ? "" : jade_interp) + "</a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var hashtag = $obj[$index];
                    buf.push("<a" + jade.attr("href", "" + hashtag.url + "", true, false) + jade.cls([ "gallery-hashtag", hashtag.current ? "current" : "" ], [ null, true ]) + ">" + jade.escape(null == (jade_interp = hashtag.text) ? "" : jade_interp) + "</a>");
                }
            }
        }).call(this);
        buf.push('<div class="gallery-content">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push('<a href="#" target="_blank"' + jade.attr("style", "background-image: url(" + item.image + ");", true, false) + ' class="gallery-image"><div class="overlay"><div class="gallery-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></div></a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push('<a href="#" target="_blank"' + jade.attr("style", "background-image: url(" + item.image + ");", true, false) + ' class="gallery-image"><div class="overlay"><div class="gallery-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></div></a>");
                }
            }
        }).call(this);
        buf.push("</div></div>");
        return buf.join("");
    };

    // get-involved-list.jade compiled template
    templatizer["get-involved-list"] = function tmpl_get_involved_list(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // get-involved-list.jade:button compiled template
    templatizer["get-involved-list"]["button"] = function tmpl_get_involved_list_button(data) {
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


    // get-involved-list.jade:heading compiled template
    templatizer["get-involved-list"]["heading"] = function tmpl_get_involved_list_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "heading", data.modifiers ], [ null, true ]) + '><h2 class="heading-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        if (data.link) {
            buf.push('<div class="heading-links"><a' + jade.attr("href", data.link.href, true, false) + ">" + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a></div>");
        }
        buf.push("</div>");
        return buf.join("");
    };


    // get-involved-list.jade:intro-text compiled template
    templatizer["get-involved-list"]["intro-text"] = function tmpl_get_involved_list_intro_text(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<p class="intro-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</p>");
        return buf.join("");
    };


    // get-involved-list.jade:get-involved-item compiled template
    templatizer["get-involved-list"]["get-involved-item"] = function tmpl_get_involved_list_get_involved_item(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "get-involved-item", data.modifiers ], [ null, true ]) + '><div class="get-involved-item-category">' + jade.escape(null == (jade_interp = data.category) ? "" : jade_interp) + '</div><div class="get-involved-item-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
        data.button.modifiers = [ "action", "get-involved-item-button" ];
        buf.push(templatizer["get-involved-list"]["button"](data.button));
        buf.push("</div>");
        return buf.join("");
    };


    // get-involved-list.jade:get-involved-list compiled template
    templatizer["get-involved-list"]["get-involved-list"] = function tmpl_get_involved_list_get_involved_list(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="get-involved-list">');
        if (data.intro) {
            buf.push(templatizer["get-involved-list"]["intro-text"](data.intro));
        }
        if (data.heading) {
            buf.push(templatizer["get-involved-list"]["heading"](data.heading));
        }
        if (data.nav) {
            buf.push('<div class="get-involved-nav">');
            (function() {
                var $obj = data.nav.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push('<div class="get-involved-nav-item"><div class="get-involved-item-title">' + (null == (jade_interp = item.title) ? "" : jade_interp) + "</div>");
                        button = JSON.parse(JSON.stringify(item.button));
                        button.modifiers = [ "action" ];
                        buf.push(templatizer["get-involved-list"]["button"](button));
                        buf.push("</div>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push('<div class="get-involved-nav-item"><div class="get-involved-item-title">' + (null == (jade_interp = item.title) ? "" : jade_interp) + "</div>");
                        button = JSON.parse(JSON.stringify(item.button));
                        button.modifiers = [ "action" ];
                        buf.push(templatizer["get-involved-list"]["button"](button));
                        buf.push("</div>");
                    }
                }
            }).call(this);
            buf.push("</div>");
        }
        buf.push('<div class="get-involved-items">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push(templatizer["get-involved-list"]["get-involved-item"](item));
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push(templatizer["get-involved-list"]["get-involved-item"](item));
                }
            }
        }).call(this);
        buf.push("</div></div>");
        return buf.join("");
    };

    // get-involved.jade compiled template
    templatizer["get-involved"] = function tmpl_get_involved(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(title) {}).call(this, "title" in locals_for_with ? locals_for_with.title : typeof title !== "undefined" ? title : undefined);
        return buf.join("");
    };

    // get-involved.jade:heading compiled template
    templatizer["get-involved"]["heading"] = function tmpl_get_involved_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "heading", data.modifiers ], [ null, true ]) + '><h2 class="heading-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        if (data.link) {
            buf.push('<div class="heading-links"><a' + jade.attr("href", data.link.href, true, false) + ">" + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a></div>");
        }
        buf.push("</div>");
        return buf.join("");
    };


    // get-involved.jade:get-involved compiled template
    templatizer["get-involved"]["get-involved"] = function tmpl_get_involved_get_involved(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="get-involved"><div class="layout-wrapper">');
        buf.push(templatizer["get-involved"]["heading"](data.heading));
        buf.push('<div class="get-involved-content">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    title = [ item.image.title ];
                    if (item.image.credit) {
                        title.push("(" + item.image.credit + ")");
                    }
                    title = title.join(" ");
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.attr("style", "background-image: url(" + item.image.src + ");", true, false) + jade.attr("title", title, true, false) + jade.cls([ "get-involved-card", item.modifiers ], [ null, true ]) + '><div class="get-involved-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    title = [ item.image.title ];
                    if (item.image.credit) {
                        title.push("(" + item.image.credit + ")");
                    }
                    title = title.join(" ");
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.attr("style", "background-image: url(" + item.image.src + ");", true, false) + jade.attr("title", title, true, false) + jade.cls([ "get-involved-card", item.modifiers ], [ null, true ]) + '><div class="get-involved-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a>");
                }
            }
        }).call(this);
        buf.push("</div></div></div>");
        return buf.join("");
    };

    // heading.jade compiled template
    templatizer["heading"] = function tmpl_heading(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // heading.jade:heading compiled template
    templatizer["heading"]["heading"] = function tmpl_heading_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "heading", data.modifiers ], [ null, true ]) + '><h2 class="heading-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        if (data.link) {
            buf.push('<div class="heading-links"><a' + jade.attr("href", data.link.href, true, false) + ">" + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a></div>");
        }
        buf.push("</div>");
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

    // intro-text.jade compiled template
    templatizer["intro-text"] = function tmpl_intro_text(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // intro-text.jade:intro-text compiled template
    templatizer["intro-text"]["intro-text"] = function tmpl_intro_text_intro_text(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<p class="intro-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</p>");
        return buf.join("");
    };

    // jumbotron.jade compiled template
    templatizer["jumbotron"] = function tmpl_jumbotron(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // jumbotron.jade:jumbotron compiled template
    templatizer["jumbotron"]["jumbotron"] = function tmpl_jumbotron_jumbotron(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<a" + jade.attr("href", data.href, true, false) + jade.attr("style", "background-image: url(" + data.image + ");", true, false) + ' class="jumbotron"><div class="jumbotron-wrapper"><div class="layout-wrapper jumbotron-content layout-outside"><h2 class="jumbotron-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + '</h2><div class="jumbotron-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</div></div></div></a>");
        return buf.join("");
    };

    // last-update.jade compiled template
    templatizer["last-update"] = function tmpl_last_update(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // last-update.jade:last-update compiled template
    templatizer["last-update"]["last-update"] = function tmpl_last_update_last_update(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="last-update">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</div>");
        return buf.join("");
    };

    // links-group.jade compiled template
    templatizer["links-group"] = function tmpl_links_group(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // links-group.jade:intro-text compiled template
    templatizer["links-group"]["intro-text"] = function tmpl_links_group_intro_text(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<p class="intro-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</p>");
        return buf.join("");
    };


    // links-group.jade:links-group compiled template
    templatizer["links-group"]["links-group"] = function tmpl_links_group_links_group(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "links-group", data.modifiers ], [ null, true ]) + ">");
        if (data.title) {
            buf.push("<a" + jade.attr("href", data.href, true, false) + jade.attr("style", data.background ? "background-image: url(" + data.background + ");" : null, true, false) + ' class="links-group-header"><div class="links-group-header-wrapper"><div class="links-group-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
            if (data.subtitle) {
                buf.push('<div class="links-group-subtitle">' + jade.escape(null == (jade_interp = data.subtitle) ? "" : jade_interp) + "</div>");
            }
            buf.push("</div></a>");
        }
        buf.push('<div class="links-group-content">');
        if (data.text) {
            buf.push(templatizer["links-group"]["intro-text"]({
                text: data.text
            }));
        }
        buf.push('<div class="links-group-items">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + ' class="links-group-item"><span class="links-group-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</span><i class="links-group-item-icon"></i></a>');
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + ' class="links-group-item"><span class="links-group-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</span><i class="links-group-item-icon"></i></a>');
                }
            }
        }).call(this);
        buf.push("</div></div></div>");
        return buf.join("");
    };

    // municipal-team.jade compiled template
    templatizer["municipal-team"] = function tmpl_municipal_team(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // municipal-team.jade:heading compiled template
    templatizer["municipal-team"]["heading"] = function tmpl_municipal_team_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "heading", data.modifiers ], [ null, true ]) + '><h2 class="heading-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        if (data.link) {
            buf.push('<div class="heading-links"><a' + jade.attr("href", data.link.href, true, false) + ">" + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a></div>");
        }
        buf.push("</div>");
        return buf.join("");
    };


    // municipal-team.jade:municipal-team compiled template
    templatizer["municipal-team"]["municipal-team"] = function tmpl_municipal_team_municipal_team(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="municipal-team"><div class="layout-wrapper">');
        buf.push(templatizer["municipal-team"]["heading"](data.heading));
        buf.push('<div class="municipal-team-content"><img' + jade.attr("src", data.img.src, true, false) + jade.attr("alt", data.img.alt, true, false) + ' class="municipal-team-img"/><p class="municipal-team-intro">' + jade.escape(null == (jade_interp = data.intro) ? "" : jade_interp) + '</p><p class="municipal-team-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</p></div></div></div>");
        return buf.join("");
    };

    // news-card.jade compiled template
    templatizer["news-card"] = function tmpl_news_card(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // news-card.jade:news-card compiled template
    templatizer["news-card"]["news-card"] = function tmpl_news_card_news_card(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<a" + jade.attr("href", data.href, true, false) + jade.cls([ "news-card", data.modifiers ], [ null, true ]) + '><div class="news-card-wrapper"><div' + jade.attr("style", data.image && "background-image: url(" + data.image + ");", true, false) + ' class="news-card-image"></div><div class="news-card-content"><div class="news-card-category"><span>' + jade.escape(null == (jade_interp = data.category) ? "" : jade_interp) + '</span></div><div class="news-card-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
        if (data.counters) {
            buf.push('<div class="news-card-counters"><div class="news-card-counter facebook-counter"><span class="icon icon-facebook"></span><span class="counter-value">' + jade.escape(null == (jade_interp = data.counters.facebook) ? "" : jade_interp) + '</span></div><div class="news-card-counter twitter-counter"><span class="icon icon-twitter"></span><span class="counter-value">' + jade.escape(null == (jade_interp = data.counters.twitter) ? "" : jade_interp) + "</span></div></div>");
        }
        buf.push("</div></div></a>");
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

    // notice.jade compiled template
    templatizer["notice"] = function tmpl_notice(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // notice.jade:notice compiled template
    templatizer["notice"]["notice"] = function tmpl_notice_notice(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("id", data.id, true, false) + jade.cls([ "notice", data.modifiers ], [ null, true ]) + ">");
        if (data.closable) {
            buf.push('<div class="close"></div>');
        }
        if (block) {
            buf.push('<p class="notice-content">');
            block && block(buf);
            buf.push("</p>");
        } else if (data.block) {
            buf.push('<p class="notice-content">' + (null == (jade_interp = data.block) ? "" : jade_interp) + "</p>");
        } else {
            buf.push('<p class="notice-content">notice</p>');
        }
        buf.push("</div>");
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
            } else if (current > total - 1) {
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

    // poll.jade compiled template
    templatizer["poll"] = function tmpl_poll(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, around, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "around" in locals_for_with ? locals_for_with.around : typeof around !== "undefined" ? around : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // poll.jade:button compiled template
    templatizer["poll"]["button"] = function tmpl_poll_button(data) {
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


    // poll.jade:button compiled template
    templatizer["poll"]["button"] = function tmpl_poll_button(data) {
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


    // poll.jade:search-field compiled template
    templatizer["poll"]["search-field"] = function tmpl_poll_search_field(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<form" + jade.attr("action", data.action, true, false) + jade.attr("method", data.method ? data.method : "get", true, false) + ' autocomplete="off"' + jade.cls([ "search-field", data.modifiers ], [ null, true ]) + "><input" + jade.attr("id", data.input.id, true, false) + ' type="text" name="search"' + jade.attr("placeholder", data.input.placeholder, true, false) + jade.attr("title", data.input.placeholder, true, false) + jade.attr("value", data.input.value, true, false) + ' class="search-field-input"/><button type="submit" class="search-field-submit">');
        if (data.submit.icon) {
            buf.push("<span>" + jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp) + '</span><i class="icon icon-search"></i>');
        } else {
            buf.push(jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp));
        }
        buf.push("</button>");
        if (data.around) {
            around = JSON.parse(JSON.stringify(data.around));
            around.modifiers = [ "marker", "around" ];
            buf.push(templatizer["poll"]["button"](around));
        }
        buf.push("</form>");
        return buf.join("");
    };


    // poll.jade:poll compiled template
    templatizer["poll"]["poll"] = function tmpl_poll_poll(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="poll"><div class="poll-wrapper">');
        if (data.heading) {
            buf.push('<div class="poll-heading">' + jade.escape(null == (jade_interp = data.heading) ? "" : jade_interp) + "</div>");
        }
        buf.push("<div" + jade.attr("data-thanks", data.thanks, true, false) + ' class="poll-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</div>");
        if (data.items && data.items.length) {
            buf.push("<ul" + jade.cls([ "poll-options", data.modifiers ], [ null, true ]) + ">");
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<li>");
                        button = JSON.parse(JSON.stringify(item));
                        button.modifiers = [ "action", "secondary" ];
                        button.attributes = {
                            "data-value": item.value
                        };
                        buf.push(templatizer["poll"]["button"](button));
                        buf.push("</li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push("<li>");
                        button = JSON.parse(JSON.stringify(item));
                        button.modifiers = [ "action", "secondary" ];
                        button.attributes = {
                            "data-value": item.value
                        };
                        buf.push(templatizer["poll"]["button"](button));
                        buf.push("</li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        } else if (data.form) {
            buf.push('<form class="poll-form"><input type="text"' + jade.attr("placeholder", data.form.input.placeholder, true, false) + jade.attr("title", data.form.input.placeholder, true, false) + jade.attr("id", data.form.input.id, true, false) + ' class="poll-input"/><button type="submit" class="button action secondary poll-submit">' + jade.escape(null == (jade_interp = data.form.submit.text) ? "" : jade_interp) + "</button></form>");
        }
        if (data.more) {
            buf.push('<div class="poll-more"><a' + jade.attr("href", data.more.href, true, false) + ">" + jade.escape(null == (jade_interp = data.more.text) ? "" : jade_interp) + "</a></div>");
        }
        buf.push("</div></div>");
        return buf.join("");
    };

    // que-faire.jade compiled template
    templatizer["que-faire"] = function tmpl_que_faire(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // que-faire.jade:que-faire compiled template
    templatizer["que-faire"]["que-faire"] = function tmpl_que_faire_que_faire(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="que-faire"><div' + jade.attr("style", "background-image: url(" + data.background + ");", true, false) + ' class="que-faire-wrapper"><a' + jade.attr("href", data.logo.href, true, false) + jade.attr("style", "background-image: url(" + data.logo.image + ");", true, false) + ' target="_blank" class="que-faire-logo"><span>' + jade.escape(null == (jade_interp = data.logo.alt) ? "" : jade_interp) + '</span></a><div class="que-faire-content">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ' class="button button-que-faire"><span>' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span></a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ' class="button button-que-faire"><span>' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span></a>");
                }
            }
        }).call(this);
        buf.push("</div>");
        if (data.more) {
            buf.push("<a" + jade.attr("href", data.more.href, true, false) + ' target="_blank" class="button button-que-faire more"><span>' + (null == (jade_interp = data.more.text) ? "" : jade_interp) + "</span></a>");
        }
        buf.push("</div></div>");
        return buf.join("");
    };

    // quick-access.jade compiled template
    templatizer["quick-access"] = function tmpl_quick_access(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, around, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "around" in locals_for_with ? locals_for_with.around : typeof around !== "undefined" ? around : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // quick-access.jade:button compiled template
    templatizer["quick-access"]["button"] = function tmpl_quick_access_button(data) {
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


    // quick-access.jade:heading compiled template
    templatizer["quick-access"]["heading"] = function tmpl_quick_access_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "heading", data.modifiers ], [ null, true ]) + '><h2 class="heading-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        if (data.link) {
            buf.push('<div class="heading-links"><a' + jade.attr("href", data.link.href, true, false) + ">" + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a></div>");
        }
        buf.push("</div>");
        return buf.join("");
    };


    // quick-access.jade:notice compiled template
    templatizer["quick-access"]["notice"] = function tmpl_quick_access_notice(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("id", data.id, true, false) + jade.cls([ "notice", data.modifiers ], [ null, true ]) + ">");
        if (data.closable) {
            buf.push('<div class="close"></div>');
        }
        if (block) {
            buf.push('<p class="notice-content">');
            block && block(buf);
            buf.push("</p>");
        } else if (data.block) {
            buf.push('<p class="notice-content">' + (null == (jade_interp = data.block) ? "" : jade_interp) + "</p>");
        } else {
            buf.push('<p class="notice-content">notice</p>');
        }
        buf.push("</div>");
        return buf.join("");
    };


    // quick-access.jade:button compiled template
    templatizer["quick-access"]["button"] = function tmpl_quick_access_button(data) {
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


    // quick-access.jade:search-field compiled template
    templatizer["quick-access"]["search-field"] = function tmpl_quick_access_search_field(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<form" + jade.attr("action", data.action, true, false) + jade.attr("method", data.method ? data.method : "get", true, false) + ' autocomplete="off"' + jade.cls([ "search-field", data.modifiers ], [ null, true ]) + "><input" + jade.attr("id", data.input.id, true, false) + ' type="text" name="search"' + jade.attr("placeholder", data.input.placeholder, true, false) + jade.attr("title", data.input.placeholder, true, false) + jade.attr("value", data.input.value, true, false) + ' class="search-field-input"/><button type="submit" class="search-field-submit">');
        if (data.submit.icon) {
            buf.push("<span>" + jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp) + '</span><i class="icon icon-search"></i>');
        } else {
            buf.push(jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp));
        }
        buf.push("</button>");
        if (data.around) {
            around = JSON.parse(JSON.stringify(data.around));
            around.modifiers = [ "marker", "around" ];
            buf.push(templatizer["quick-access"]["button"](around));
        }
        buf.push("</form>");
        return buf.join("");
    };


    // quick-access.jade:quick-access compiled template
    templatizer["quick-access"]["quick-access"] = function tmpl_quick_access_quick_access(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "quick-access", data.modifiers ], [ null, true ]) + ">");
        if (data.background) {
            if (data.background.image) {
                buf.push("<div" + jade.attr("style", "background-image: url(" + data.background.image + ");", true, false) + ' class="quick-access-background"></div>');
            }
            if (data.background.video) {
                buf.push('<video autoplay="autoplay" loop="loop" muted="muted"' + jade.attr("poster", data.background.image, true, false) + ' class="quick-access-video">');
                (function() {
                    var $obj = data.background.video.sources;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var source = $obj[$index];
                            buf.push("<source" + jade.attrs(jade.merge([ source ]), false) + "/>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var source = $obj[$index];
                            buf.push("<source" + jade.attrs(jade.merge([ source ]), false) + "/>");
                        }
                    }
                }).call(this);
                buf.push("</video>");
            }
        }
        buf.push('<div class="quick-access-wrapper layout-wrapper"><div class="quick-access-search">');
        buf.push(templatizer["quick-access"]["search-field"](data.search));
        buf.push("</div>");
        if (data.heading) {
            buf.push(templatizer["quick-access"]["heading"](data.heading));
        }
        if (data.items && data.items.length) {
            buf.push('<ul class="quick-access-buttons">');
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<li>");
                        button = JSON.parse(JSON.stringify(item));
                        button.modifiers = button.modifiers || [];
                        if (button.modifiers.indexOf("primary") === -1) button.modifiers.push("secondary");
                        buf.push(templatizer["quick-access"]["button"](button));
                        buf.push("</li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push("<li>");
                        button = JSON.parse(JSON.stringify(item));
                        button.modifiers = button.modifiers || [];
                        if (button.modifiers.indexOf("primary") === -1) button.modifiers.push("secondary");
                        buf.push(templatizer["quick-access"]["button"](button));
                        buf.push("</li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        }
        buf.push('<div class="quick-access-results"><ul></ul>');
        button = JSON.parse(JSON.stringify(data.results.button));
        button.modifiers = [ "action", "tertiary", "quick-access-results-more" ];
        buf.push(templatizer["quick-access"]["button"](button));
        buf.push('</div></div><div class="quick-access-close-search"><i class="icon-close"></i></div>');
        if (data.notice) {
            buf.push(templatizer["quick-access"]["notice"](data.notice));
        }
        buf.push("</div>");
        return buf.join("");
    };

    // rheader.jade compiled template
    templatizer["rheader"] = function tmpl_rheader(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, around, button, modifiers, quick_access) {
            buf.push("<!-- This mixin is used to render the mobile-nav server-side, when JS is disabled client-side-->");
        }).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "around" in locals_for_with ? locals_for_with.around : typeof around !== "undefined" ? around : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined, "quick_access" in locals_for_with ? locals_for_with.quick_access : typeof quick_access !== "undefined" ? quick_access : undefined);
        return buf.join("");
    };

    // rheader.jade:button compiled template
    templatizer["rheader"]["button"] = function tmpl_rheader_button(data) {
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


    // rheader.jade:heading compiled template
    templatizer["rheader"]["heading"] = function tmpl_rheader_heading(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "heading", data.modifiers ], [ null, true ]) + '><h2 class="heading-title">' + jade.escape(null == (jade_interp = data.title) ? "" : jade_interp) + "</h2>");
        if (data.link) {
            buf.push('<div class="heading-links"><a' + jade.attr("href", data.link.href, true, false) + ">" + jade.escape(null == (jade_interp = data.link.text) ? "" : jade_interp) + "</a></div>");
        }
        buf.push("</div>");
        return buf.join("");
    };


    // rheader.jade:notice compiled template
    templatizer["rheader"]["notice"] = function tmpl_rheader_notice(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("id", data.id, true, false) + jade.cls([ "notice", data.modifiers ], [ null, true ]) + ">");
        if (data.closable) {
            buf.push('<div class="close"></div>');
        }
        if (block) {
            buf.push('<p class="notice-content">');
            block && block(buf);
            buf.push("</p>");
        } else if (data.block) {
            buf.push('<p class="notice-content">' + (null == (jade_interp = data.block) ? "" : jade_interp) + "</p>");
        } else {
            buf.push('<p class="notice-content">notice</p>');
        }
        buf.push("</div>");
        return buf.join("");
    };


    // rheader.jade:button compiled template
    templatizer["rheader"]["button"] = function tmpl_rheader_button(data) {
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


    // rheader.jade:search-field compiled template
    templatizer["rheader"]["search-field"] = function tmpl_rheader_search_field(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<form" + jade.attr("action", data.action, true, false) + jade.attr("method", data.method ? data.method : "get", true, false) + ' autocomplete="off"' + jade.cls([ "search-field", data.modifiers ], [ null, true ]) + "><input" + jade.attr("id", data.input.id, true, false) + ' type="text" name="search"' + jade.attr("placeholder", data.input.placeholder, true, false) + jade.attr("title", data.input.placeholder, true, false) + jade.attr("value", data.input.value, true, false) + ' class="search-field-input"/><button type="submit" class="search-field-submit">');
        if (data.submit.icon) {
            buf.push("<span>" + jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp) + '</span><i class="icon icon-search"></i>');
        } else {
            buf.push(jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp));
        }
        buf.push("</button>");
        if (data.around) {
            around = JSON.parse(JSON.stringify(data.around));
            around.modifiers = [ "marker", "around" ];
            buf.push(templatizer["rheader"]["button"](around));
        }
        buf.push("</form>");
        return buf.join("");
    };


    // rheader.jade:quick-access compiled template
    templatizer["rheader"]["quick-access"] = function tmpl_rheader_quick_access(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.cls([ "quick-access", data.modifiers ], [ null, true ]) + ">");
        if (data.background) {
            if (data.background.image) {
                buf.push("<div" + jade.attr("style", "background-image: url(" + data.background.image + ");", true, false) + ' class="quick-access-background"></div>');
            }
            if (data.background.video) {
                buf.push('<video autoplay="autoplay" loop="loop" muted="muted"' + jade.attr("poster", data.background.image, true, false) + ' class="quick-access-video">');
                (function() {
                    var $obj = data.background.video.sources;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var source = $obj[$index];
                            buf.push("<source" + jade.attrs(jade.merge([ source ]), false) + "/>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var source = $obj[$index];
                            buf.push("<source" + jade.attrs(jade.merge([ source ]), false) + "/>");
                        }
                    }
                }).call(this);
                buf.push("</video>");
            }
        }
        buf.push('<div class="quick-access-wrapper layout-wrapper"><div class="quick-access-search">');
        buf.push(templatizer["rheader"]["search-field"](data.search));
        buf.push("</div>");
        if (data.heading) {
            buf.push(templatizer["rheader"]["heading"](data.heading));
        }
        if (data.items && data.items.length) {
            buf.push('<ul class="quick-access-buttons">');
            (function() {
                var $obj = data.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<li>");
                        button = JSON.parse(JSON.stringify(item));
                        button.modifiers = button.modifiers || [];
                        if (button.modifiers.indexOf("primary") === -1) button.modifiers.push("secondary");
                        buf.push(templatizer["rheader"]["button"](button));
                        buf.push("</li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push("<li>");
                        button = JSON.parse(JSON.stringify(item));
                        button.modifiers = button.modifiers || [];
                        if (button.modifiers.indexOf("primary") === -1) button.modifiers.push("secondary");
                        buf.push(templatizer["rheader"]["button"](button));
                        buf.push("</li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        }
        buf.push('<div class="quick-access-results"><ul></ul>');
        button = JSON.parse(JSON.stringify(data.results.button));
        button.modifiers = [ "action", "tertiary", "quick-access-results-more" ];
        buf.push(templatizer["rheader"]["button"](button));
        buf.push('</div></div><div class="quick-access-close-search"><i class="icon-close"></i></div>');
        if (data.notice) {
            buf.push(templatizer["rheader"]["notice"](data.notice));
        }
        buf.push("</div>");
        return buf.join("");
    };


    // rheader.jade:rheader compiled template
    templatizer["rheader"]["rheader"] = function tmpl_rheader_rheader(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<header" + jade.cls([ "rheader", data.modifiers ], [ null, true ]) + '><div class="rheader-wrapper"><a id="logo"' + jade.attr("href", data.logo.href, true, false) + ' class="rheader-logo"><div class="rheader-logo-nef"></div>');
        if (data.logo.h1) {
            buf.push('<h1 class="rheader-logo-paris">' + jade.escape(null == (jade_interp = data.logo.text) ? "" : jade_interp) + "</h1>");
        } else {
            buf.push('<div class="rheader-logo-paris">' + jade.escape(null == (jade_interp = data.logo.text) ? "" : jade_interp) + "</div>");
        }
        buf.push("</a>");
        if (data.locales) {
            buf.push('<ul class="rheader-locales">');
            (function() {
                var $obj = data.locales;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var locale = $obj[$index];
                        buf.push("<li><a" + jade.attr("href", locale.href, true, false) + jade.attr("target", locale.target, true, false) + jade.cls([ locale.current ? "current" : null ], [ true ]) + ">" + jade.escape(null == (jade_interp = locale.text) ? "" : jade_interp) + "</a></li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var locale = $obj[$index];
                        buf.push("<li><a" + jade.attr("href", locale.href, true, false) + jade.attr("target", locale.target, true, false) + jade.cls([ locale.current ? "current" : null ], [ true ]) + ">" + jade.escape(null == (jade_interp = locale.text) ? "" : jade_interp) + "</a></li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        }
        if (data.buttons.search) {
            buf.push("<a" + jade.attr("href", data.buttons.search.href, true, false) + jade.attr("title", data.buttons.search.text, true, false) + jade.attr("target", data.buttons.search.target, true, false) + jade.cls([ "rheader-button", "rheader-button-search", data.buttons.search.current ? "active" : null ], [ null, null, true ]) + ">");
            if (data.buttons.search.icon) {
                buf.push("<i" + jade.cls([ "rheader-button-icon", "icon-" + data.buttons.search.icon + "" ], [ null, true ]) + "></i>");
            }
            buf.push("</a>");
        }
        if (data.buttons.around) {
            buf.push("<a" + jade.attr("href", data.buttons.around.href, true, false) + jade.attr("title", data.buttons.around.text, true, false) + jade.attr("target", data.buttons.around.target, true, false) + ' class="rheader-button rheader-button-around">');
            if (data.buttons.around.icon) {
                buf.push("<i" + jade.cls([ "rheader-button-icon", "icon-" + data.buttons.around.icon + "" ], [ null, true ]) + '></i><span class="rheader-button-text">' + jade.escape(null == (jade_interp = data.buttons.around.text) ? "" : jade_interp) + "</span>");
            }
            buf.push("</a>");
        }
        buf.push('<a id="nav-toggle"' + jade.attr("href", data.buttons.menu.href, true, false) + jade.attr("target", data.buttons.menu.target, true, false) + ' class="rheader-button rheader-button-menu"><span class="rheader-button-text">' + jade.escape(null == (jade_interp = data.buttons.menu.text) ? "" : jade_interp) + '</span></a><ul class="rheader-nav">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<li" + jade.cls([ "rheader-nav-item", item.modifiers, item.current ? "current" : null ], [ null, true, true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">");
                    if (item.icon) {
                        buf.push("<i" + jade.cls([ "rheader-nav-item-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                    }
                    if (item.hover) {
                        buf.push('<span class="rheader-nav-item-front"><span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</span></span><span class="rheader-nav-item-back"><span class="rheader-nav-item-hover">' + jade.escape(null == (jade_interp = item.hover) ? "" : jade_interp) + "</span></span>");
                    } else {
                        buf.push('<span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span>");
                    }
                    buf.push("</a></li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<li" + jade.cls([ "rheader-nav-item", item.modifiers, item.current ? "current" : null ], [ null, true, true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">");
                    if (item.icon) {
                        buf.push("<i" + jade.cls([ "rheader-nav-item-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                    }
                    if (item.hover) {
                        buf.push('<span class="rheader-nav-item-front"><span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</span></span><span class="rheader-nav-item-back"><span class="rheader-nav-item-hover">' + jade.escape(null == (jade_interp = item.hover) ? "" : jade_interp) + "</span></span>");
                    } else {
                        buf.push('<span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span>");
                    }
                    buf.push("</a></li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        if (data.modifiers && data.modifiers.indexOf("standalone") !== -1) {
            buf.push(templatizer["rheader"]["rheader-mobile-nav"](data));
        }
        buf.push("</header>");
        if (data.quick_access) {
            quick_access = JSON.parse(JSON.stringify(data.quick_access));
            buf.push(templatizer["rheader"]["quick-access"](quick_access));
        }
        return buf.join("");
    };


    // rheader.jade:rheader-mobile-nav compiled template
    templatizer["rheader"]["rheader-mobile-nav"] = function tmpl_rheader_rheader_mobile_nav(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div id="rheader-mobile-nav" class="rheader-mobile-nav">');
        if (data.locales) {
            buf.push('<ul class="rheader-locales">');
            (function() {
                var $obj = data.locales;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var locale = $obj[$index];
                        buf.push("<li><a" + jade.attr("href", locale.href, true, false) + jade.attr("target", locale.target, true, false) + jade.cls([ locale.current ? "current" : null ], [ true ]) + ">" + jade.escape(null == (jade_interp = locale.text) ? "" : jade_interp) + "</a></li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var locale = $obj[$index];
                        buf.push("<li><a" + jade.attr("href", locale.href, true, false) + jade.attr("target", locale.target, true, false) + jade.cls([ locale.current ? "current" : null ], [ true ]) + ">" + jade.escape(null == (jade_interp = locale.text) ? "" : jade_interp) + "</a></li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        }
        buf.push('<ul class="rheader-nav">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    if (item.modifiers && item.modifiers.indexOf("account") !== -1 && data.buttons.around) {
                        buf.push('<li class="rheader-nav-item around"><a' + jade.attr("href", data.buttons.around.href, true, false) + jade.attr("title", data.buttons.around.text, true, false) + jade.attr("target", data.buttons.around.target, true, false) + ' class="rheader-button rheader-button-around">');
                        if (data.buttons.around.icon) {
                            buf.push("<i" + jade.cls([ "rheader-button-icon", "icon-" + data.buttons.around.icon + "" ], [ null, true ]) + '></i><span class="rheader-button-text">' + jade.escape(null == (jade_interp = data.buttons.around.text) ? "" : jade_interp) + "</span>");
                        }
                        buf.push("</a></li>");
                    }
                    buf.push("<li" + jade.cls([ "rheader-nav-item", item.modifiers, item.current ? "current" : null ], [ null, true, true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">");
                    if (item.icon) {
                        buf.push("<i" + jade.cls([ "rheader-nav-item-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                    }
                    if (item.hover) {
                        buf.push('<span class="rheader-nav-item-front"><span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</span></span><span class="rheader-nav-item-back"><span class="rheader-nav-item-hover">' + jade.escape(null == (jade_interp = item.hover) ? "" : jade_interp) + "</span></span>");
                    } else {
                        buf.push('<span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span>");
                    }
                    buf.push("</a></li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    if (item.modifiers && item.modifiers.indexOf("account") !== -1 && data.buttons.around) {
                        buf.push('<li class="rheader-nav-item around"><a' + jade.attr("href", data.buttons.around.href, true, false) + jade.attr("title", data.buttons.around.text, true, false) + jade.attr("target", data.buttons.around.target, true, false) + ' class="rheader-button rheader-button-around">');
                        if (data.buttons.around.icon) {
                            buf.push("<i" + jade.cls([ "rheader-button-icon", "icon-" + data.buttons.around.icon + "" ], [ null, true ]) + '></i><span class="rheader-button-text">' + jade.escape(null == (jade_interp = data.buttons.around.text) ? "" : jade_interp) + "</span>");
                        }
                        buf.push("</a></li>");
                    }
                    buf.push("<li" + jade.cls([ "rheader-nav-item", item.modifiers, item.current ? "current" : null ], [ null, true, true ]) + "><a" + jade.attr("href", item.href, true, false) + jade.attr("target", item.target, true, false) + ">");
                    if (item.icon) {
                        buf.push("<i" + jade.cls([ "rheader-nav-item-icon", "icon-" + item.icon + "" ], [ null, true ]) + "></i>");
                    }
                    if (item.hover) {
                        buf.push('<span class="rheader-nav-item-front"><span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + '</span></span><span class="rheader-nav-item-back"><span class="rheader-nav-item-hover">' + jade.escape(null == (jade_interp = item.hover) ? "" : jade_interp) + "</span></span>");
                    } else {
                        buf.push('<span class="rheader-nav-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</span>");
                    }
                    buf.push("</a></li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        return buf.join("");
    };

    // search-field.jade compiled template
    templatizer["search-field"] = function tmpl_search_field(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, around, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "around" in locals_for_with ? locals_for_with.around : typeof around !== "undefined" ? around : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // search-field.jade:button compiled template
    templatizer["search-field"]["button"] = function tmpl_search_field_button(data) {
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


    // search-field.jade:search-field compiled template
    templatizer["search-field"]["search-field"] = function tmpl_search_field_search_field(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<form" + jade.attr("action", data.action, true, false) + jade.attr("method", data.method ? data.method : "get", true, false) + ' autocomplete="off"' + jade.cls([ "search-field", data.modifiers ], [ null, true ]) + "><input" + jade.attr("id", data.input.id, true, false) + ' type="text" name="search"' + jade.attr("placeholder", data.input.placeholder, true, false) + jade.attr("title", data.input.placeholder, true, false) + jade.attr("value", data.input.value, true, false) + ' class="search-field-input"/><button type="submit" class="search-field-submit">');
        if (data.submit.icon) {
            buf.push("<span>" + jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp) + '</span><i class="icon icon-search"></i>');
        } else {
            buf.push(jade.escape(null == (jade_interp = data.submit.text) ? "" : jade_interp));
        }
        buf.push("</button>");
        if (data.around) {
            around = JSON.parse(JSON.stringify(data.around));
            around.modifiers = [ "marker", "around" ];
            buf.push(templatizer["search-field"]["button"](around));
        }
        buf.push("</form>");
        return buf.join("");
    };

    // search-push.jade compiled template
    templatizer["search-push"] = function tmpl_search_push(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // search-push.jade:button compiled template
    templatizer["search-push"]["button"] = function tmpl_search_push_button(data) {
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


    // search-push.jade:search-push compiled template
    templatizer["search-push"]["search-push"] = function tmpl_search_push_search_push(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="search-push"><div class="search-push-text">' + jade.escape(null == (jade_interp = data.text) ? "" : jade_interp) + "</div>");
        button = JSON.parse(JSON.stringify(data.button));
        button.modifiers = [ "action" ];
        button.attributes = {
            "data-action": "open-search"
        };
        buf.push(templatizer["search-push"]["button"](button));
        buf.push("</div>");
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

    // sections-list.jade compiled template
    templatizer["sections-list"] = function tmpl_sections_list(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // sections-list.jade:sections-list compiled template
    templatizer["sections-list"]["sections-list"] = function tmpl_sections_list_sections_list(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="sections-list">');
        (function() {
            var $obj = data.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.cls([ "sections-list-button", item.modifiers ], [ null, true ]) + ">");
                    if (item.title) {
                        buf.push('<strong class="sections-list-button-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</strong>");
                    }
                    buf.push('<div class="sections-list-button-text">' + (null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<a" + jade.attr("href", item.href, true, false) + jade.cls([ "sections-list-button", item.modifiers ], [ null, true ]) + ">");
                    if (item.title) {
                        buf.push('<strong class="sections-list-button-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + "</strong>");
                    }
                    buf.push('<div class="sections-list-button-text">' + (null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a>");
                }
            }
        }).call(this);
        buf.push("</div>");
        return buf.join("");
    };

    // content.jade compiled template
    templatizer["content"] = function tmpl_content(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(data, modifiers, undefined) {
            if (data.intro) {
                buf.push('<div class="sections-panel-intro">' + jade.escape(null == (jade_interp = data.intro) ? "" : jade_interp) + "</div>");
            }
            if (data.items && data.items.length) {
                buf.push('<ul class="sections-panel-content-items">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push('<li class="sections-panel-content-item"><a' + jade.attr("href", item.href, true, false) + '><div class="sections-panel-content-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '</div><div class="sections-panel-content-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a></li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push('<li class="sections-panel-content-item"><a' + jade.attr("href", item.href, true, false) + '><div class="sections-panel-content-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '</div><div class="sections-panel-content-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a></li>");
                        }
                    }
                }).call(this);
                buf.push("</ul>");
            }
            if (data.buttons && data.buttons.items && data.buttons.items.length) {
                buf.push(templatizer["content"]["buttons"](data.buttons));
            }
            if (data.more_links && data.more_links.items && data.more_links.items.length) {
                buf.push(templatizer["content"]["links"](data.more_links));
            }
        }).call(this, "data" in locals_for_with ? locals_for_with.data : typeof data !== "undefined" ? data : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined, "undefined" in locals_for_with ? locals_for_with.undefined : typeof undefined !== "undefined" ? undefined : undefined);
        return buf.join("");
    };

    // content.jade:button compiled template
    templatizer["content"]["button"] = function tmpl_content_button(data) {
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


    // content.jade:buttons compiled template
    templatizer["content"]["buttons"] = function tmpl_content_buttons(data) {
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
                    buf.push(templatizer["content"]["button"](item));
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<li>");
                    buf.push(templatizer["content"]["button"](item));
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        return buf.join("");
    };


    // content.jade:links compiled template
    templatizer["content"]["links"] = function tmpl_content_links(data) {
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

    // sections-panel.jade compiled template
    templatizer["sections-panel"] = function tmpl_sections_panel(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, current_item, has_content, has_current_item, modifiers, more, nav_classes) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "current_item" in locals_for_with ? locals_for_with.current_item : typeof current_item !== "undefined" ? current_item : undefined, "has_content" in locals_for_with ? locals_for_with.has_content : typeof has_content !== "undefined" ? has_content : undefined, "has_current_item" in locals_for_with ? locals_for_with.has_current_item : typeof has_current_item !== "undefined" ? has_current_item : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined, "more" in locals_for_with ? locals_for_with.more : typeof more !== "undefined" ? more : undefined, "nav_classes" in locals_for_with ? locals_for_with.nav_classes : typeof nav_classes !== "undefined" ? nav_classes : undefined);
        return buf.join("");
    };

    // sections-panel.jade:button compiled template
    templatizer["sections-panel"]["button"] = function tmpl_sections_panel_button(data) {
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


    // sections-panel.jade:block-aside compiled template
    templatizer["sections-panel"]["block-aside"] = function tmpl_sections_panel_block_aside(data) {
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


    // sections-panel.jade:block-aside-links compiled template
    templatizer["sections-panel"]["block-aside-links"] = function tmpl_sections_panel_block_aside_links(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        modifiers = data.modifiers || [];
        modifiers.push("block-aside-links");
        buf.push(templatizer["sections-panel"]["block-aside"].call({
            block: function(buf) {
                buf.push('<ul class="block-aside-items">');
                (function() {
                    var $obj = data.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "block-aside-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push("<li" + jade.cls([ "block-aside-item", item.modifiers ], [ null, true ]) + "><a" + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
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


    // sections-panel.jade:button compiled template
    templatizer["sections-panel"]["button"] = function tmpl_sections_panel_button(data) {
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


    // sections-panel.jade:buttons compiled template
    templatizer["sections-panel"]["buttons"] = function tmpl_sections_panel_buttons(data) {
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
                    buf.push(templatizer["sections-panel"]["button"](item));
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    buf.push("<li>");
                    buf.push(templatizer["sections-panel"]["button"](item));
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ul></div>");
        return buf.join("");
    };


    // sections-panel.jade:links compiled template
    templatizer["sections-panel"]["links"] = function tmpl_sections_panel_links(data) {
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


    // sections-panel.jade:sections-panel compiled template
    templatizer["sections-panel"]["sections-panel"] = function tmpl_sections_panel_sections_panel(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        has_current_item = false;
        has_content = typeof data.content !== "undefined";
        (function() {
            var $obj = data.nav.items;
            if ("number" == typeof $obj.length) {
                for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                    var item = $obj[$index];
                    if (item.current === true) {
                        current_item = item;
                        has_current_item = true;
                    }
                }
            } else {
                var $l = 0;
                for (var $index in $obj) {
                    $l++;
                    var item = $obj[$index];
                    if (item.current === true) {
                        current_item = item;
                        has_current_item = true;
                    }
                }
            }
        }).call(this);
        buf.push("<div" + jade.cls([ "sections-panel", has_content ? "has-content" : "" ], [ null, true ]) + ">");
        if (data.nav) {
            nav_classes = [];
            if (has_current_item) {
                nav_classes.push("has-current-item");
            }
            if (has_content) {
                nav_classes.push("closed");
            }
            buf.push("<div" + jade.cls([ "sections-panel-nav", nav_classes ], [ null, true ]) + ">");
            if (data.nav.items && data.nav.items.length) {
                buf.push('<ul class="sections-panel-nav-items">');
                (function() {
                    var $obj = data.nav.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push('<li class="sections-panel-nav-item"><a' + jade.attr("href", item.href, true, false) + jade.attr("data-subnav-section", item.slug, true, false) + jade.attr("data-background", item.background, true, false) + jade.cls([ item.current ? "current" : "" ], [ true ]) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push('<li class="sections-panel-nav-item"><a' + jade.attr("href", item.href, true, false) + jade.attr("data-subnav-section", item.slug, true, false) + jade.attr("data-background", item.background, true, false) + jade.cls([ item.current ? "current" : "" ], [ true ]) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                        }
                    }
                }).call(this);
                buf.push("</ul>");
            }
            if (data.nav.more) {
                more = JSON.parse(JSON.stringify(data.nav.more));
                more.modifiers = [ "action", "white", "small", "sections-panel-nav-more" ];
                buf.push(templatizer["sections-panel"]["button"](more));
            }
            buf.push('</div><div id="sections-panel-subnav"' + jade.cls([ "sections-panel-subnav", has_current_item ? "has-current-item" : "" ], [ null, true ]) + "><a" + jade.attr("href", data.base, true, false) + ' class="sections-panel-back sections-panel-subnav-back"></a><div' + jade.attr("data-background", data.default.background, true, false) + ' class="sections-panel-subnav-default">');
            if (data.default.links) {
                buf.push(templatizer["sections-panel"]["block-aside-links"](data.default.links));
            }
            if (data.default.buttons) {
                buf.push(templatizer["sections-panel"]["buttons"](data.default.buttons));
            }
            buf.push("</div>");
            (function() {
                var $obj = data.nav.items;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push("<div" + jade.attr("id", "subnav-" + item.slug + "", true, false) + jade.attr("data-nav-item", item.slug, true, false) + jade.cls([ "sections-panel-subnav-section", item.current ? "current" : "" ], [ null, true ]) + ">");
                        if (item.subnav && item.subnav.items && item.subnav.items.length) {
                            if (item.subnav.text) {
                                buf.push('<div class="sections-panel-intro">' + jade.escape(null == (jade_interp = item.subnav.text) ? "" : jade_interp) + "</div>");
                            }
                            buf.push('<ul class="sections-panel-subnav-items">');
                            (function() {
                                var $obj = item.subnav.items;
                                if ("number" == typeof $obj.length) {
                                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                                        var subitem = $obj[$index];
                                        buf.push('<li class="sections-panel-subnav-item"><a' + jade.attr("href", subitem.href, true, false) + jade.attr("data-background", subitem.background, true, false) + jade.attr("data-json", subitem.json, true, false) + jade.cls([ subitem.current ? "current" : "" ], [ true ]) + '><div class="sections-panel-subnav-item-title">' + jade.escape(null == (jade_interp = subitem.title) ? "" : jade_interp) + '</div><div class="sections-panel-subnav-item-text">' + jade.escape(null == (jade_interp = subitem.text) ? "" : jade_interp) + "</div></a></li>");
                                    }
                                } else {
                                    var $l = 0;
                                    for (var $index in $obj) {
                                        $l++;
                                        var subitem = $obj[$index];
                                        buf.push('<li class="sections-panel-subnav-item"><a' + jade.attr("href", subitem.href, true, false) + jade.attr("data-background", subitem.background, true, false) + jade.attr("data-json", subitem.json, true, false) + jade.cls([ subitem.current ? "current" : "" ], [ true ]) + '><div class="sections-panel-subnav-item-title">' + jade.escape(null == (jade_interp = subitem.title) ? "" : jade_interp) + '</div><div class="sections-panel-subnav-item-text">' + jade.escape(null == (jade_interp = subitem.text) ? "" : jade_interp) + "</div></a></li>");
                                    }
                                }
                            }).call(this);
                            buf.push("</ul>");
                        }
                        buf.push("</div>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push("<div" + jade.attr("id", "subnav-" + item.slug + "", true, false) + jade.attr("data-nav-item", item.slug, true, false) + jade.cls([ "sections-panel-subnav-section", item.current ? "current" : "" ], [ null, true ]) + ">");
                        if (item.subnav && item.subnav.items && item.subnav.items.length) {
                            if (item.subnav.text) {
                                buf.push('<div class="sections-panel-intro">' + jade.escape(null == (jade_interp = item.subnav.text) ? "" : jade_interp) + "</div>");
                            }
                            buf.push('<ul class="sections-panel-subnav-items">');
                            (function() {
                                var $obj = item.subnav.items;
                                if ("number" == typeof $obj.length) {
                                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                                        var subitem = $obj[$index];
                                        buf.push('<li class="sections-panel-subnav-item"><a' + jade.attr("href", subitem.href, true, false) + jade.attr("data-background", subitem.background, true, false) + jade.attr("data-json", subitem.json, true, false) + jade.cls([ subitem.current ? "current" : "" ], [ true ]) + '><div class="sections-panel-subnav-item-title">' + jade.escape(null == (jade_interp = subitem.title) ? "" : jade_interp) + '</div><div class="sections-panel-subnav-item-text">' + jade.escape(null == (jade_interp = subitem.text) ? "" : jade_interp) + "</div></a></li>");
                                    }
                                } else {
                                    var $l = 0;
                                    for (var $index in $obj) {
                                        $l++;
                                        var subitem = $obj[$index];
                                        buf.push('<li class="sections-panel-subnav-item"><a' + jade.attr("href", subitem.href, true, false) + jade.attr("data-background", subitem.background, true, false) + jade.attr("data-json", subitem.json, true, false) + jade.cls([ subitem.current ? "current" : "" ], [ true ]) + '><div class="sections-panel-subnav-item-title">' + jade.escape(null == (jade_interp = subitem.title) ? "" : jade_interp) + '</div><div class="sections-panel-subnav-item-text">' + jade.escape(null == (jade_interp = subitem.text) ? "" : jade_interp) + "</div></a></li>");
                                    }
                                }
                            }).call(this);
                            buf.push("</ul>");
                        }
                        buf.push("</div>");
                    }
                }
            }).call(this);
            buf.push("</div>");
        }
        buf.push('<div id="sections-panel-content" class="sections-panel-content"><a' + jade.attr("href", current_item ? current_item.href : "", true, false) + ' class="sections-panel-back sections-panel-content-back"></a><div class="sections-panel-content-wrapper">');
        if (has_content) {
            if (data.content.intro) {
                buf.push('<div class="sections-panel-intro">' + jade.escape(null == (jade_interp = data.content.intro) ? "" : jade_interp) + "</div>");
            }
            if (data.content.items && data.content.items.length) {
                buf.push('<ul class="sections-panel-content-items">');
                (function() {
                    var $obj = data.content.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push('<li class="sections-panel-content-item"><a' + jade.attr("href", item.href, true, false) + '><div class="sections-panel-content-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '</div><div class="sections-panel-content-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a></li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push('<li class="sections-panel-content-item"><a' + jade.attr("href", item.href, true, false) + '><div class="sections-panel-content-item-title">' + jade.escape(null == (jade_interp = item.title) ? "" : jade_interp) + '</div><div class="sections-panel-content-item-text">' + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</div></a></li>");
                        }
                    }
                }).call(this);
                buf.push("</ul>");
            }
            if (data.content.buttons) {
                buf.push(templatizer["sections-panel"]["buttons"](data.content.buttons));
            }
            if (data.content.more_links) {
                buf.push(templatizer["sections-panel"]["links"](data.content.more_links));
            }
        }
        buf.push("</div></div></div>");
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

    // table-of-contents.jade compiled template
    templatizer["table-of-contents"] = function tmpl_table_of_contents(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(abbr) {}).call(this, "abbr" in locals_for_with ? locals_for_with.abbr : typeof abbr !== "undefined" ? abbr : undefined);
        return buf.join("");
    };

    // table-of-contents.jade:table-of-contents compiled template
    templatizer["table-of-contents"]["table-of-contents"] = function tmpl_table_of_contents_table_of_contents(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<div class="table-of-contents">');
        if (data.nav && data.nav.length) {
            buf.push('<ul class="table-of-contents-nav">');
            (function() {
                var $obj = data.nav;
                if ("number" == typeof $obj.length) {
                    for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                        var item = $obj[$index];
                        buf.push('<li class="table-of-contents-nav-item"><a' + jade.attr("href", item.href, true, false) + ">");
                        abbr = item.text.slice(0, 3);
                        buf.push("<strong>" + jade.escape(null == (jade_interp = abbr) ? "" : jade_interp) + "</strong>" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                    }
                } else {
                    var $l = 0;
                    for (var $index in $obj) {
                        $l++;
                        var item = $obj[$index];
                        buf.push('<li class="table-of-contents-nav-item"><a' + jade.attr("href", item.href, true, false) + ">");
                        abbr = item.text.slice(0, 3);
                        buf.push("<strong>" + jade.escape(null == (jade_interp = abbr) ? "" : jade_interp) + "</strong>" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp) + "</a></li>");
                    }
                }
            }).call(this);
            buf.push("</ul>");
        }
        if (data.sections) {
            if (data.sections.list && data.sections.list.items && data.sections.list.items.length) {
                buf.push('<div class="table-of-contents-sections"><ul class="table-of-contents-sections-items">');
                (function() {
                    var $obj = data.sections.list.items;
                    if ("number" == typeof $obj.length) {
                        for (var $index = 0, $l = $obj.length; $index < $l; $index++) {
                            var item = $obj[$index];
                            buf.push('<li class="table-of-contents-sections-item"><a' + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                            abbr = item.text.slice(0, 3);
                            buf.push("<strong>" + jade.escape(null == (jade_interp = abbr) ? "" : jade_interp) + "</strong></a></li>");
                        }
                    } else {
                        var $l = 0;
                        for (var $index in $obj) {
                            $l++;
                            var item = $obj[$index];
                            buf.push('<li class="table-of-contents-sections-item"><a' + jade.attr("href", item.href, true, false) + ">" + jade.escape(null == (jade_interp = item.text) ? "" : jade_interp));
                            abbr = item.text.slice(0, 3);
                            buf.push("<strong>" + jade.escape(null == (jade_interp = abbr) ? "" : jade_interp) + "</strong></a></li>");
                        }
                    }
                }).call(this);
                buf.push("</ul>");
                if (data.sections.more) {
                    buf.push("<a" + jade.attr("href", data.sections.more.href, true, false) + ' class="table-of-contents-sections-more">' + jade.escape(null == (jade_interp = data.sections.more.text) ? "" : jade_interp) + "</a>");
                }
                buf.push("</div>");
            }
        }
        buf.push("</div>");
        return buf.join("");
    };

    // tags.jade compiled template
    templatizer["tags"] = function tmpl_tags(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        return buf.join("");
    };

    // tags.jade:tags compiled template
    templatizer["tags"]["tags"] = function tmpl_tags_tags(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push('<ul class="tags">');
        (function() {
            var $obj = data;
            if ("number" == typeof $obj.length) {
                for (var index = 0, $l = $obj.length; index < $l; index++) {
                    var tag = $obj[index];
                    buf.push("<li>");
                    if (tag.href) {
                        buf.push("<a" + jade.attr("href", "" + tag.href + "", true, false) + ' class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</a>");
                    } else {
                        buf.push('<span class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</span>");
                    }
                    if (index < data.length - 1) {
                        buf.push('<span class="tags-separator">—</span>');
                    }
                    buf.push("</li>");
                }
            } else {
                var $l = 0;
                for (var index in $obj) {
                    $l++;
                    var tag = $obj[index];
                    buf.push("<li>");
                    if (tag.href) {
                        buf.push("<a" + jade.attr("href", "" + tag.href + "", true, false) + ' class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</a>");
                    } else {
                        buf.push('<span class="tags-item">' + jade.escape(null == (jade_interp = tag.text) ? "" : jade_interp) + "</span>");
                    }
                    if (index < data.length - 1) {
                        buf.push('<span class="tags-separator">—</span>');
                    }
                    buf.push("</li>");
                }
            }
        }).call(this);
        buf.push("</ul>");
        return buf.join("");
    };

    // video-cover.jade compiled template
    templatizer["video-cover"] = function tmpl_video_cover(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(JSON, button, modifiers) {}).call(this, "JSON" in locals_for_with ? locals_for_with.JSON : typeof JSON !== "undefined" ? JSON : undefined, "button" in locals_for_with ? locals_for_with.button : typeof button !== "undefined" ? button : undefined, "modifiers" in locals_for_with ? locals_for_with.modifiers : typeof modifiers !== "undefined" ? modifiers : undefined);
        return buf.join("");
    };

    // video-cover.jade:button compiled template
    templatizer["video-cover"]["button"] = function tmpl_video_cover_button(data) {
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


    // video-cover.jade:video-cover compiled template
    templatizer["video-cover"]["video-cover"] = function tmpl_video_cover_video_cover(data) {
        var block = this && this.block, attributes = this && this.attributes || {}, buf = [];
        buf.push("<div" + jade.attr("style", data.background && "background-image: url(" + data.background + ")", true, false) + jade.cls([ "video-cover", block || data.block ? "with-block" : "" ], [ null, true ]) + ">");
        if (block) {
            if (data.cookie === false) {
                buf.push(null == (jade_interp = block) ? "" : jade_interp);
            } else {
                if (data.placeholder) {
                    buf.push('<div class="video-cover-placeholder">' + (null == (jade_interp = data.placeholder) ? "" : jade_interp) + "</div>");
                }
                buf.push('<script type="text/html" class="video-cover-embed">' + (null == (jade_interp = block) ? "" : jade_interp) + "</script>");
            }
        } else if (data.block) {
            if (data.cookie === false) {
                buf.push(null == (jade_interp = data.block) ? "" : jade_interp);
            } else {
                if (data.placeholder) {
                    buf.push('<div class="video-cover-placeholder">' + (null == (jade_interp = data.placeholder) ? "" : jade_interp) + "</div>");
                }
                buf.push('<script type="text/html" class="video-cover-embed">' + (null == (jade_interp = data.block) ? "" : jade_interp) + "</script>");
            }
        } else {
            if (data.button) {
                button = JSON.parse(JSON.stringify(data.button));
                button.modifiers = [ "action" ];
                buf.push(templatizer["video-cover"]["button"](button));
            }
        }
        buf.push("</div>");
        return buf.join("");
    };

    return templatizer;
}));
