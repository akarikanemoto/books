<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
  <link rel="stylesheet" href="style.css" />
</head>

<body>

  <!-- =========================== -->
  <!-- ① タイトルセクション       -->
  <!-- =========================== -->
  <section class="title-section">
      <img src="title.png" class="title-img">
  </section>


  <!-- =========================== -->
  <!-- ② 動画 + setumei セクション -->
  <!-- =========================== -->
  <section class="video-section">
    <div class="video-wrapper">
      <video src="video2.mp4" autoplay muted loop playsinline></video>
      <img src="setumei.png" class="overlay-setumei">
      <p class="scroll-hint">スクロールしてください</p>
    </div>
  </section>


  <!-- =========================== -->
  <!-- ③ sticky セクション1：namae -->
  <!-- =========================== -->
  <section class="sticky-section">
    <div class="sticky-bg"></div>
    <img src="namae.png" class="sticky-img">
  </section>


  <!-- =========================== -->
  <!-- ④ sticky セクション2：arasuji -->
  <!-- =========================== -->
  <section class="sticky-section">
    <div class="sticky-bg"></div>
    <img src="arasuji.png" class="sticky-img">
  </section>

  <script src="script.js"></script>
</body>
</html>
