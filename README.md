<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <link rel="stylesheet" href="style.css" />
</head>

<body>

  <!-- 背景（画面全体固定） -->
  <div class="bg">
    <img src="assets/bg_main2.png" class="bg-img" alt="">
  </div>

  <div class="content">

    <!-- タイトル画像 -->
    <img src="assets/title.png" class="title" alt="">

    <!-- 動画＋説明画像重ね -->
    <div class="video-wrapper">
      <video src="assets/video2.mp4" autoplay muted loop playsinline></video>
      <img src="assets/setumei.png" class="setumei" alt="">
    </div>

    <!-- スクロール固定の2つ -->
    <img src="assets/namae.png" class="fixed fixed-name" alt="">
    <img src="assets/arasuji.png" class="fixed fixed-arasuji" alt="">

  </div>

  <script src="script.js"></script>
</body>
</html>

