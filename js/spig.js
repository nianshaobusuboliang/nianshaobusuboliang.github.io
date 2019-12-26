jQuery(document).ready(function(a) {
    a("#spig").mousedown(function(b) {
        if (b.which == 3) {
            showMessage('秘密通道：<br /> <a href="https://www.dreamwings.cn" title="首页">首页</a> <a href="https://www.dreamwings.cn/feed" title="订阅">订阅</a> <a href="https://www.dreamwings.cn/msg" title="留言">留言</a>', 10000)
        }
    });
    a("#spig").bind("contextmenu", function(b) {
        return false
    })
});
jQuery(document).ready(function(a) {
    a("#message").hover(function() {
        a("#message").fadeTo("100", 1)
    })
});
jQuery(document).ready(function(a) {
    a(".mumu").mouseover(function() {
        a(".mumu").fadeTo("300", 0.3);
        msgs = ["我隐身了，你看不到我", "我会隐身哦！嘿嘿！", "别动手动脚的，把手拿开！", "把手拿开我才出来！"];
        var b = Math.floor(Math.random() * msgs.length);
        showMessage(msgs[b])
    });
    a(".mumu").mouseout(function() {
        a(".mumu").fadeTo("300", 1)
    })
});
jQuery(document).ready(function(b) {
    if (isindex) {
        var a = (new Date()).getHours();
        if (a > 0 && a <= 6) {
            showMessage(visitor + " 你是夜猫子呀？还不睡觉，明天起的来么你？", 6000)
        } else {
            if (a > 6 && a <= 11) {
                showMessage(visitor + " 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！", 6000)
            } else {
                if (a > 11 && a <= 14) {
                    showMessage(visitor + " 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！", 6000)
                } else {
                    if (a > 14 && a <= 18) {
                        showMessage(visitor + " 中午的时光真难熬！还好有你在！", 6000)
                    } else {
                        showMessage(visitor + " 快来逗我玩吧！", 6000)
                    }
                }
            }
        }
    } else {
        showMessage("欢迎" + visitor + "来到 “夢の彼方は千千” 阅读 " + title + " ", 6000)
    }
    b(".spig").animate({
        top: b(".spig").offset().top + 250,
        left: document.body.offsetWidth - 160
    }, {
        queue: false,
        duration: 1000
    })
});
jQuery(document).ready(function(a) {
    a("h1 a").click(function() {
        showMessage('正在加载《<span style="color:#0099cc;">' + a(this).text() + "</span>》请稍候")
    });
    a("h1 a").mouseover(function() {
        showMessage('要看看《<span style="color:#0099cc;">' + a(this).text() + "</span>》这篇文章么？")
    });
    a(".next-posts").mouseover(function() {
        showMessage("要翻到上一页吗?")
    });
    a(".previous-posts").mouseover(function() {
        showMessage("要翻到下一页吗?")
    });
    a(".nav-previous").mouseover(function() {
        showMessage("要看上一篇吗?")
    });
    a(".nav-next").mouseover(function() {
        showMessage("要看下一篇吗?")
    });
    a(".link-contentqt li a").mouseover(function() {
        showMessage('去 <span style="color:#0099cc;">' + a(this).text() + "</span> 逛逛")
    });
    a("#s").focus(function() {
        showMessage("输入你想搜索的关键词再按Enter(回车)键就可以搜索啦!")
    });
    a(".like-vote").mouseover(function() {
        showMessage("喜欢我嘛~")
    });
    a(".aplayer").mouseover(function() {
        showMessage("想听听音乐么？")
    });
    a(".text-logo a").mouseover(function() {
        showMessage("点它就可以回到首页啦！")
    });
    a(".scroll-up a").mouseover(function() {
        showMessage("点它可以直接上升到顶部哦.")
    });
    a(".close-effects").mouseover(function() {
        showMessage("古娜拉黑暗之神、魔法、消失(°?°)?")
    })
});
jQuery(document).ready(function(a) {
    window.setInterval(function() {
        msgs = [a("#hitokoto").text()];
        var b = Math.floor(Math.random() * msgs.length);
        s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
        var d = Math.floor(Math.random() * s.length);
        var c = Math.floor(Math.random() * s.length);
        a(".spig").animate({
            left: document.body.offsetWidth / 2 * (1 + s[d]),
            top: document.body.offsetheight / 2 * (1 + s[d])
        }, {
            duration: 10000,
            complete: showMessage(msgs[b])
        })
    }, 45000)
});
jQuery(document).ready(function(b) {
    var a = b(".spig").offset().top;
    b(window).scroll(function() {
        b(".spig").animate({
            top: b(window).scrollTop() + a + 250
        }, {
            queue: false,
            duration: 1000
        })
    })
});
jQuery(document).ready(function(a) {
    var b = 0;
    a(".mumu").click(function() {
        if (!ismove) {
            b++;
            if (b <= 4) {
                msgs = ["筋斗云！~我飞！", "我跑呀跑呀跑！~~", "别摸我，大男人，有什么好摸的！", "惹不起你，我还躲不起你么？", "不要摸我了，我会告诉老婆来打你的！", "干嘛动我呀！小心我咬你！"];
                var c = Math.floor(Math.random() * msgs.length);
                showMessage(msgs[c])
            } else {
                msgs = ["你有完没完呀？", "你已经摸我" + b + "次了", "非礼呀！救命！"];
                var c = Math.floor(Math.random() * msgs.length);
                showMessage(msgs[c])
            }
            s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
            var e = Math.floor(Math.random() * s.length);
            var d = Math.floor(Math.random() * s.length);
            a(".spig").animate({
                left: document.body.offsetWidth / 2 * (1 + s[e]),
                top: document.body.offsetheight / 2 * (1 + s[e])
            }, {
                duration: 500,
                complete: showMessage(msgs[c])
            })
        } else {
            ismove = false
        }
    })
});
function showMessage(d, c) {
    if (c == null) {
        c = 10000
    }
    jQuery("#message").hide().stop();
    jQuery("#message").html(d);
    jQuery("#message").fadeIn();
    jQuery("#message").fadeTo("1", 1);
    jQuery("#message").fadeOut(c)
}
var _move = false;
var ismove = false;
var _x,
    _y;
jQuery(document).ready(function(a) {
    a("#spig").mousedown(function(b) {
        _move = true;
        _x = b.pageX - parseInt(a("#spig").css("left"));
        _y = b.pageY - parseInt(a("#spig").css("top"))
    });
    a(document).mousemove(function(f) {
        if (_move) {
            var b = f.pageX - _x;
            var g = f.pageY - _y;
            var d = a(window).width() - a("#spig").width();
            var c = a(document).height() - a("#spig").height();
            if (b >= 0 && b <= d && g > 0 && g <= c) {
                a("#spig").css({
                    top: g,
                    left: b
                });
                ismove = true
            }
        }
    }).mouseup(function() {
        _move = false
    })
});

