window.onload = function () {

    init();

    //初始化
    function init() {
        goDiv("pt-page-1", 22);
        $(".nav-down").click(function () {
            var img = document.querySelector(".nav-down img");
            if (img.src.indexOf("down") != -1) {
                img.src = "./img/up.png";
            } else {
                img.src = "./img/down.png";
            }
            $(".nav-down").toggleClass("down");
            $(".nav").toggleClass("down");
            $(".back-main").toggleClass("down");
        });
        window.onresize = function () {
            window.location.reload();
        }

        registSwiper();
        registClick();
        $(".loading").addClass("disactive");
    }

    //注册滑动组件
    function registSwiper() {
        window.navSwiper = new Swiper('.swiper-container', {
            slidesPerView: 7,
            freeMode: true,
            slideToClickedSlide: true,
            centeredSlides: true,
        });

        var swiperConfig = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        };

        // 药房
        window.yaofang_gjsSwiper = new Swiper('.swiper-container-yaofang-gjs', swiperConfig);
        window.yaofang_ypSwiper = new Swiper('.swiper-container-yaofang-yp', swiperConfig);
        window.yaofang_yzSwiper = new Swiper('.swiper-container-yaofang-yz', swiperConfig);

        //检验科
        window.jianyan_5sSwiper = new Swiper('.swiper-container-jianyan-5s', swiperConfig);
        window.jianyan_sgSwiper = new Swiper('.swiper-container-jianyan-sg', swiperConfig);
        window.jianyan_tpSwiper = new Swiper('.swiper-container-jianyan-tp', swiperConfig);

        //门诊配液室
        window.peiye_daiSwiper = new Swiper('.swiper-container-peiye-dai', swiperConfig);
        window.peiye_heSwiper = new Swiper('.swiper-container-peiye-he', swiperConfig);
        window.peiye_wdSwiper = new Swiper('.swiper-container-peiye-wd', swiperConfig);
        window.peiye_tbSwiper = new Swiper('.swiper-container-peiye-tb', swiperConfig);

        //护士站-住院部配液室
        window.zypeiye_tbSwiper = new Swiper('.swiper-container-zy-peiye-tb', swiperConfig);
        window.zypeiye_wpSwiper = new Swiper('.swiper-container-zy-peiye-wp', swiperConfig);
        window.zypeiye_sydSwiper = new Swiper('.swiper-container-zy-peiye-syd', swiperConfig);
        window.zypeiye_syhSwiper = new Swiper('.swiper-container-zy-peiye-syh', swiperConfig);

        //抢救车
        window.qjc_qjSwiper = new Swiper('.swiper-container-qjc-qj', swiperConfig);
        window.qjc_ypSwiper = new Swiper('.swiper-container-qjc-yp', swiperConfig);
        window.qjc_dmSwiper = new Swiper('.swiper-container-qjc-dm', swiperConfig);

        //病历车
        window.hushi_blcSwiper = new Swiper('.swiper-container-hushi-blc', swiperConfig);
        window.hushi_wpSwiper = new Swiper('.swiper-container-hushi-wp', swiperConfig);
        window.hushi_wdSwiper = new Swiper('.swiper-container-hushi-wd', swiperConfig);

        //病房
        window.bingfang_ctkSwiper = new Swiper('.swiper-container-bingfang-ctk', swiperConfig);
        window.bingfang_kgSwiper = new Swiper('.swiper-container-bingfang-kg', swiperConfig);
        window.bingfang_zcSwiper = new Swiper('.swiper-container-bingfang-zc', swiperConfig);

        //手术室
        window.shoushu_xdSwiper = new Swiper('.swiper-container-shoushu-xd', swiperConfig);
        window.shoushu_mjSwiper = new Swiper('.swiper-container-shoushu-mj', swiperConfig);

        //医疗废物暂存室
        window.feiwu_xsySwiper = new Swiper('.swiper-container-feiwu-xsy', swiperConfig);
        window.feiwu_hjSwiper = new Swiper('.swiper-container-feiwu-hj', swiperConfig);
        window.feiwu_dmSwiper = new Swiper('.swiper-container-feiwu-dm', swiperConfig);

        //卫生间
        window.weisheng_xsySwiper = new Swiper('.swiper-container-weisheng-xsy', swiperConfig);
        window.weisheng_hjSwiper = new Swiper('.swiper-container-weisheng-hj', swiperConfig);
        window.weisheng_dmSwiper = new Swiper('.swiper-container-weisheng-dm', swiperConfig);

        //人事办公室
        window.renshi_wpSwiper = new Swiper('.swiper-container-renshi-wp', swiperConfig);
        window.renshi_gdSwiper = new Swiper('.swiper-container-renshi-gd', swiperConfig);
        window.renshi_p50Swiper = new Swiper('.swiper-container-renshi-p50', swiperConfig);
        window.renshi_kgSwiper = new Swiper('.swiper-container-renshi-kg', swiperConfig);

        //5s文件定位标识
        window.s_5sSwiper = new Swiper('.swiper-container-s-5s', swiperConfig);
        window.s_wpSwiper = new Swiper('.swiper-container-s-wp', swiperConfig);
        window.s_wjjSwiper = new Swiper('.swiper-container-s-wjj', swiperConfig);

        //库房
        window.kufang_hjSwiper = new Swiper('.swiper-container-kufang-hj', swiperConfig);
        window.kufang_dmSwiper = new Swiper('.swiper-container-kufang-dm', swiperConfig);

        //数据机房
        window.shuju_zxjSwiper = new Swiper('.swiper-container-shuju-zxj', swiperConfig);
        window.shuju_xlSwiper = new Swiper('.swiper-container-shuju-xl', swiperConfig);
        window.shuju_p50Swiper = new Swiper('.swiper-container-shuju-p50', swiperConfig);

    }

    //注册进入和返回事件
    function registClick() {
        registGoClick();
        registBackClick();
        registTagClick();
    }

    //注册进入事件
    function registGoClick() {
        doClick(1, ["s1", "back-main"], "pt-page-1", 0);
        //门诊
        doClick(1, ["yiyuan-mz", "s2"], "pt-page-2", 1);
        doClick(1, ["menzhen-yf", "s5"], "pt-page-3", 4);
        doClick(1, ["menzhen-jyk", "s6"], "pt-page-4", 5);
        doClick(1, ["menzhen-pys", "s7"], "pt-page-5", 6);
        //住院楼
        doClick(1, ["yiyuan-zy", "s3"], "pt-page-6", 2);
        doClick(1, ["zhuyuan-hsz", "s8"], "pt-page-7", 7);
        doClick(1, ["zhuyuan-bf", "s10"], "pt-page-10", 9);
        doClick(1, ["zhuyuan-sss", "s11"], "pt-page-11", 10);
        doClick(1, ["zhuyuan-fw", "s14"], "pt-page-12", 13);
        doClick(1, ["zhuyuan-wsj", "s12"], "pt-page-13", 11);
        doClick(1, ["zhuyuan-jjc", "s13"], "pt-page-9", 12);
        doClick(1, ["hushi-py", "s9"], "pt-page-8", 8);
        doClick(1, ["hushi-qjc", "s13"], "pt-page-9-2", 12);
        //行政办公楼
        doClick(1, ["yiyuan-xz", "s4"], "pt-page-14", 3);
        doClick(1, ["xingzheng-kf", "s15"], "pt-page-16", 14);
        doClick(1, ["xingzheng-sj", "s16"], "pt-page-17", 15);
        doClick(1, ["xingzheng-rs", "s17"], "pt-page-15", 16);
        doClick(1, ["renshi-5s", "s18"], "pt-page-18", 17);
    }

    //注册返回事件
    function registBackClick() {
        doClick(-1, ["back-menzhen", "back-zhuyuan", "back-xingzheng"], "pt-page-1", 0);
        //门诊
        doClick(-1, ["back-yaofang", "back-jianyan", "back-peiye"], "pt-page-2", 1);
        //住院楼
        doClick(-1, ["back-hushi", "back-bingfang", "back-shoushu", "back-feiwu", "back-weisheng", "back-zlche"], "pt-page-6", 2);
        doClick(-1, ["back-zy-peiye", "back-zlche-2"], "pt-page-7", 7);
        //行政办公楼
        doClick(-1, ["back-renshi", "back-kufang", "back-shuju"], "pt-page-14", 3);
        doClick(-1, ["back-5s"], "pt-page-15", 16);
    }

    //注册事件封装
    function doClick(type, objs, goDivName, slideIndex) {
        if (type == 1) {
            for (var i = 0; i < objs.length; i++) {
                (function (i) {
                    $("." + objs[i]).click(function () {
                        goDiv(goDivName, 22);
                        navSwiper.slideTo(slideIndex, 500, false);
                    });
                })(i);
            }
        } else if (type == -1) {
            for (var i = 0; i < objs.length; i++) {
                (function (i) {
                    backDiv(objs[i], function () {
                        goDiv(goDivName, 22);
                        navSwiper.slideTo(slideIndex, 500, false);
                    });
                })(i);
            }
        }
    }

    //注册标签事件
    function registTagClick() {
        //药房
        showTag({ "yaofang-gjs": 0 }, "mask-yaofang-gjs", yaofang_gjsSwiper);
        showTag({ "yaofang-yp": 0 }, "mask-yaofang-yp", yaofang_ypSwiper);
        showTag({ "yaofang-yz": 0 }, "mask-yaofang-yz", yaofang_yzSwiper);
        //检验科
        showTag({ "jianyan-5s": 0 }, "mask-jianyan-5s", jianyan_5sSwiper);
        showTag({ "jianyan-sg": 0 }, "mask-jianyan-sg", jianyan_sgSwiper);
        showTag({ "jianyan-tp": 0 }, "mask-jianyan-tp", jianyan_tpSwiper);
        //门诊配液室
        showTag({ "peiye-dai": 0 }, "mask-peiye-dai", peiye_daiSwiper);
        showTag({ "peiye-he": 0 }, "mask-peiye-he", peiye_heSwiper);
        showTag({ "peiye-wd": 0 }, "mask-peiye-wd", peiye_wdSwiper);
        showTag({ "peiye-tb": 0 }, "mask-peiye-tb", peiye_tbSwiper);
        //护士站-住院部配液室
        showTag({ "zy-peiye-tb": 0 }, "mask-zy-peiye-tb", zypeiye_tbSwiper);
        showTag({ "zy-peiye-wp": 0 }, "mask-zy-peiye-wp", zypeiye_wpSwiper);
        showTag({ "zy-peiye-syd": 0 }, "mask-zy-peiye-syd", zypeiye_sydSwiper);
        showTag({ "zy-peiye-syh": 0 }, "mask-zy-peiye-syh", zypeiye_syhSwiper);
        //护士站-抢救车、治疗车
        showTag({ "zlche-qj": 0 }, "mask-qjc-qj", qjc_qjSwiper);
        showTag({ "zlche-yp": 0 }, "mask-qjc-yp", qjc_ypSwiper);
        showTag({ "zlche-dm": 0 }, "mask-qjc-dm", qjc_dmSwiper);
        //护士站
        showTag({ "hushi-blc": 0 }, "mask-hushi-blc", hushi_blcSwiper);
        showTag({ "hushi-wp": 0 }, "mask-hushi-wp", hushi_wpSwiper);
        showTag({ "hushi-wd": 0 }, "mask-hushi-wd", hushi_wdSwiper);
        //病房
        showTag({ "bingfang-ctk": 0 }, "mask-bingfang-ctk", bingfang_ctkSwiper);
        showTag({ "bingfang-kg": 0 }, "mask-bingfang-kg", bingfang_kgSwiper);
        showTag({ "bingfang-zc": 0 }, "mask-bingfang-zc", bingfang_zcSwiper);
        //手术室
        showTag({ "shoushu-xd": 0 }, "mask-shoushu-xd", shoushu_xdSwiper);
        showTag({ "shoushu-mj": 0 }, "mask-shoushu-mj", shoushu_mjSwiper);
        //医疗废物暂存室
        showTag({ "feiwu-xsy": 0 }, "mask-feiwu-xsy", feiwu_xsySwiper);
        showTag({ "feiwu-hj": 0 }, "mask-feiwu-hj", feiwu_hjSwiper);
        showTag({ "feiwu-dm": 0 }, "mask-feiwu-dm", feiwu_dmSwiper);
        //卫生间
        showTag({ "weisheng-xsy": 0 }, "mask-weisheng-xsy", weisheng_xsySwiper);
        showTag({ "weisheng-hj": 0 }, "mask-weisheng-hj", weisheng_hjSwiper);
        showTag({ "weisheng-dm": 0 }, "mask-weisheng-dm", weisheng_dmSwiper);
        //人事办公室
        showTag({ "renshi-wp": 0 }, "mask-renshi-wp", renshi_wpSwiper);
        showTag({ "renshi-gd": 0 }, "mask-renshi-gd", renshi_gdSwiper);
        showTag({ "renshi-p50": 0 }, "mask-renshi-p50", renshi_p50Swiper);
        showTag({ "renshi-kg": 0 }, "mask-renshi-kg", renshi_kgSwiper);
        //5s文件定位标识
        showTag({ "s-5s": 0 }, "mask-s-5s", s_5sSwiper);
        showTag({ "s-wp": 0 }, "mask-s-wp", s_wpSwiper);
        showTag({ "s-wjj": 0 }, "mask-s-wjj", s_wjjSwiper);
        //库房
        showTag({ "kufang-hj": 0 }, "mask-kufang-hj", kufang_hjSwiper);
        showTag({ "kufang-dm": 0 }, "mask-kufang-dm", kufang_dmSwiper);
        //数据机房
        showTag({ "shuju-zxj": 0 }, "mask-shuju-zxj", shuju_zxjSwiper);
        showTag({ "shuju-xl": 0 }, "mask-shuju-xl", shuju_xlSwiper);
        showTag({ "shuju-p50": 0 }, "mask-shuju-p50", shuju_p50Swiper);

        $(".mask").click(function () {
            $(".mask").hide();
        });
        $(".sc").click(function (e) {
            e.stopPropagation();
        });
    }

    //显示标签
    function showTag(data, sobj, swiper) {
        for (var j in data) {
            (function (j) {
                $("." + j).click(function () {
                    $(".mask." + sobj).show();
                    $(".mask." + sobj).addClass("pt-page-scaleUp");
                    swiper.slideTo(data[j], 500, false);
                    swiper.update();
                });
            })(j)
        }
    }

    //返回页面
    function backDiv(obj, fun) {
        $("." + obj).click(function () {
            fun();
        });
    }

    //离开页面
    function leaveDiv(obj, type) {
        var animationName = "";
        switch (type) {
            case 2:
                animationName = "pt-page-moveToRight";
                break;
            case 22:
                animationName = "pt-page-scaleDownUp";
                break;
        }
        $("." + obj).attr("class", "pt-page pt-page-current " + obj);
        $("." + obj).addClass(animationName);
        $("." + obj).attr("class", "pt-page " + obj);
    }

    //进入页面
    function goDiv(obj, type) {
        var now = document.querySelector(".pt-page-current");
        var current = "";
        if (now != null) {
            current = now.className.split(" ")[2];
            leaveDiv(current, 22);
        }
        var animationName = "";
        switch (type) {
            case 2:
                animationName = "pt-page-moveFromLeft";
                break;
            case 22:
                animationName = "pt-page-scaleUp";
                break;
        }
        $("." + obj).attr("class", "pt-page pt-page-current " + obj);
        $("." + obj).addClass(animationName);
    }
}