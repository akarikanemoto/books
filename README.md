<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book Relay</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<!-- 1. タイトルセクション -->
<section id="titleSection" class="title-section">
    <img src="title.png" class="title-img" alt="title">
</section>

<!-- 2. 動画セクション -->
<section id="videoSection" class="video-section">
    <video id="bgVideo" src="video2.mp4" autoplay muted playsinline loop></video>

    <img src="setumei.png" id="setumeiImg" class="setumei">

</section>

<!-- 3. Sticky セクション（namae） -->
<section class="sticky-section" style="background-image: url('bg_main2.png')">
    <div class="sticky-content">
        <img src="namae.png" class="content-img">
    </div>
</section>

<!-- 4. Sticky セクション（arasuji） -->
<section class="sticky-section" style="background-image: url('bg_main2.png')">
    <div class="sticky-content">
        <img src="arasuji.png" class="content-img">
    </div>
</section>

<script src="script.js"></script>
</body>
</html>
