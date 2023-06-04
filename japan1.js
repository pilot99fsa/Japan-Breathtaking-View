/* 横スクロールを封じるJS  */
$(function () {
  $("html,body").animate({ scrollLeft: 0 }, "1");
});

/* ji8 jt8 JavaScriptコードの桜吹雪のエフェクトが原因で
　Chromeのデベロッパーツールの挙動が不安定になる(ディスプレイサイズを400px程度の時に
　細かな拡大縮小を繰り返す)。普通に閲覧する分には問題なし。
　iPhone SE第二世代での挙動も問題なし(Safari、Chromeで確認済み) */

/* jt1 富士山説明文のフェードイン  */
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".fujijyamafadebottom").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 150) {
        $(this).addClass("is-fadein");
      }
    });
  });
});

/* ji2 新宿の白背景のフェードアウト  */
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".ji2-white-fadeout").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 300) {
        $(this).addClass("ji2-fadeout");
      }
    });
  });
});

/* jt2 新宿の半透明黒背景のフェードイン  */
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".jt2-blackback-before").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 800) {
        $(this).addClass("jt2-blackback-after");
      }
    });
  });
});

/* ji4 テキストアニメーション */
$(".ji4-text-animation").each(function () {
  $(this)
    .children()
    .addBack()
    .contents()
    .each(function () {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$1</span>"));
      }
    });

  $(this).on("inview", function () {
    $(this).css({ opacity: 1 });
    for (var i = 0; i <= $(this).children("span").length; i++) {
      $(this)
        .children("span")
        .eq(i)
        .delay(100 * i)
        .animate({ opacity: 1 }, 800);
    }
  });
});

/* jt4 テキストアニメーション */
$(".jt4-text-animation").each(function () {
  $(this)
    .children()
    .addBack()
    .contents()
    .each(function () {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, "<span>$1</span>"));
      }
    });

  $(this).on("inview", function () {
    $(this).css({ opacity: 1 });
    for (var i = 0; i <= $(this).children("span").length; i++) {
      $(this)
        .children("span")
        .eq(i)
        .delay(100 * i)
        .animate({ opacity: 1 }, 800);
    }
  });
});

/* ji5 黒背景が左にスライドアウト　*/
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".japan-image-ji5-black-back").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-slideout");
      }
    });
  });
});

/* jt５ 黒背景が右からスライドイン　*/
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".jt5-blackback").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-from-right-slidein");
      }
    });
  });
});

/* ji6 伏見稲荷の説明文のフェードイン  */
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".ji6-text").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 150) {
        $(this).addClass("ji6-is-fadein");
      }
    });
  });
});

/* jt6 伏見稲荷の説明文のフェードイン  */
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".jt6-text").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 150) {
        $(this).addClass("jt6-is-fadein");
      }
    });
  });
});

/* ji8  桜吹雪のアニメーション　*/
$(function () {
  $(sakurawrapper).snowfall("clear");

  $(sakurawrapper).snowfall({
    image: "https://lightbox.sakura.ne.jp/image/h1.png",
    flakeCount: 30,
    minSize: 15,
    maxSize: 22,
    minSpeed: 0.5,
    maxSpeed: 1.5,
  });

  $(sakurawrapper).snowfall({
    image: "https://lightbox.sakura.ne.jp/image/h2.png",
    flakeCount: 30,
    minSize: 15,
    maxSize: 22,
    minSpeed: 0.5,
    maxSpeed: 1.5,
  });
});

/* jt8 桜吹雪のアニメーション　*/

$(function () {
  $(sakurawrapperintext).snowfall("clear");

  $(sakurawrapperintext).snowfall({
    image: "https://lightbox.sakura.ne.jp/image/h1.png",
    flakeCount: 30,
    minSize: 15,
    maxSize: 22,
    minSpeed: 0.5,
    maxSpeed: 1.5,
  });

  $(sakurawrapperintext).snowfall({
    image: "https://lightbox.sakura.ne.jp/image/h2.png",
    flakeCount: 30,
    minSize: 15,
    maxSize: 22,
    minSpeed: 0.5,
    maxSpeed: 1.5,
  });
});

/* ji10 jt10 京都のJavaScript */

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".ji10-kyoto-discover").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 500) {
        $(this).addClass("ji10-kyoto-discover-fadein");
      }
    });
  });
});
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".jt10-kyoto-discover").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("jt10-kyoto-discover-fadein");
      }
    });
  });
});
