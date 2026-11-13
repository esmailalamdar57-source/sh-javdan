
/* ابزار اختصاصی سخنی از بهشت - نسخه مستقل برای بلاگفا */
(function () {
  "use strict";

  var hadiths = [
    ["إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ", "ارزش اعمال به نیت‌هاست.", "پیامبر اکرم (ص)، صحیح بخاری، ۱"],
    ["الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ", "سخن نیکو صدقه است.", "صحیح بخاری، ۲۹۸۹"],
    ["لَا تَغْضَبْ", "خشمگین نشو.", "صحیح بخاری، ۶۱۱۶"],
    ["مَنْ لَا يَرْحَمْ لَا يُرْحَمْ", "کسی که رحم نکند، به او رحم نمی‌شود.", "صحیح بخاری، ۵۹۹۷"],
    ["الدُّعَاءُ هُوَ الْعِبَادَةُ", "دعا همان عبادت است.", "سنن ابی‌داود، ۱۴۷۹"],
    ["الْمُؤْمِنُ مِرْآةُ الْمُؤْمِنِ", "مؤمن آینه مؤمن است.", "حدیث مشهور؛ مأخذ نیازمند بررسی"],
    ["اطْلُبُوا الْعِلْمَ مِنَ الْمَهْدِ إِلَى اللَّحْدِ", "از گهواره تا گور دانش بجویید.", "عبارت مشهور؛ انتساب نیازمند بررسی"],
    ["خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ", "بهترین مردم سودمندترین آنان برای مردم است.", "حدیث مشهور؛ مأخذ نیازمند بررسی"],
    ["إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ", "خداوند زیباست و زیبایی را دوست دارد.", "صحیح مسلم، ۹۱"],
    ["الدِّينُ النَّصِيحَةُ", "دین، خیرخواهی است.", "صحیح مسلم، ۵۵"],
    ["يَسِّرُوا وَلَا تُعَسِّرُوا", "آسان بگیرید و سخت نگیرید.", "صحیح بخاری، ۶۹"],
    ["مَنْ صَمَتَ نَجَا", "هر کس سکوت کند، نجات می‌یابد.", "جامع ترمذی، ۲۵۰۱"],
    ["الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ", "مهربانان را خدای رحمان مورد رحمت قرار می‌دهد.", "جامع ترمذی، ۱۹۲۴"],
    ["لَا ضَرَرَ وَلَا ضِرَارَ", "نه زیان رساندن رواست و نه زیان متقابل.", "سنن ابن‌ماجه، ۲۳۴۰"]
  ];

  var css = `
  .shJavdanWidget{width:100%;max-width:210px;box-sizing:border-box;margin:10px auto;padding:9px;background:#32705E;border:2px solid #8B0000;border-radius:9px;direction:rtl;font-family:Tahoma,Arial;text-align:center}
  .shJavdanWidget>b{display:block;font-size:15px;line-height:2;color:#FFE7A0;border-bottom:2px solid #D6B65D;padding-bottom:5px;margin-bottom:9px}
  .shJavdanArabic{color:#FFF;font-size:16px;line-height:2;overflow-wrap:anywhere}
  .shJavdanLine{color:#D6B65D;margin:6px 0}
  .shJavdanPersian{color:#E2FFE2;font-size:14px;line-height:2;text-align:right;overflow-wrap:anywhere}
  .shJavdanSource{color:#FFE7A0;font-size:11px;line-height:1.8;margin-top:8px;padding-top:6px;border-top:1px solid #D6B65D;text-align:right;overflow-wrap:anywhere}
  .shJavdanFoot{margin-top:10px;padding:7px 3px;background:#245342;border:1px solid #D6B65D;border-radius:6px;color:#FFE7A0;font-size:13px;font-weight:bold;line-height:2}
  .shJavdanFoot div{color:#E2FFE2;font-size:15px;margin-top:3px}
  `;

  function addStyle() {
    if (document.getElementById("shJavdanExternalStyle")) return;
    var style = document.createElement("style");
    style.id = "shJavdanExternalStyle";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function makeWidget(id) {
    var box = document.createElement("div");
    box.className = "shJavdanWidget";
    box.id = id;
    box.innerHTML =
      '<b>سخنی از بهشت</b>' +
      '<div class="shJavdanArabic"></div>' +
      '<div class="shJavdanLine">🌹 ✦ 🌹</div>' +
      '<div class="shJavdanPersian"></div>' +
      '<div class="shJavdanSource"></div>';
    return box;
  }

  function init() {
    if (document.getElementById("sh-javdan-right") || document.getElementById("sh-javdan-left")) return;

    var right = document.getElementById("rightbar");
    var left = document.getElementById("sidebar");
    if (!left) left = document.getElementById("leftbar");

    if (!right && !left) return;

    addStyle();

    if (right) right.appendChild(makeWidget("sh-javdan-right"));
    if (left) left.appendChild(makeWidget("sh-javdan-left"));

    var boxes = [
      document.getElementById("sh-javdan-right"),
      document.getElementById("sh-javdan-left")
    ].filter(Boolean);

    var index = 0;

    function show() {
      var item = hadiths[index];
      boxes.forEach(function (box) {
        box.querySelector(".shJavdanArabic").textContent = item[0];
        box.querySelector(".shJavdanPersian").textContent = item[1];
        box.querySelector(".shJavdanSource").textContent = item[2];
      });
      index = (index + 1) % hadiths.length;
    }

    show();
    window.setInterval(show, 20000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
