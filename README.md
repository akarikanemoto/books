<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演出ページ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- 1. タイトルセクション -->
<section class="title-section">
    <img src="img/title.png" class="title-img">
</section>

<!-- 2. 動画セクション -->
<section class="video-section">
    <video id="bgVideo" src="video/video2.mp4" muted playsinline></video>

    <img src="img/setumei.png" class="setumei-img">

    <p class="scroll-text">スクロールしてください</p>
</section>

<!-- 3. Stickyセクション（背景は固定画像） -->
<section class="sticky-section" style="background-image:url('img/bg.jpg');">
    <div class="sticky-wrap">
        <img src="img/namae.png" class="sticky-img">
    </div>
</section>

<section class="sticky-section" style="background-image:url('img/bg.jpg');">
    <div class="sticky-wrap">
        <img src="img/arasuji.png" class="sticky-img">
    </div>
</section>

<script src="script.js"></script>
</body>
</html>
