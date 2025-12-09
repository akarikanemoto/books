<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>栞リレー</title>

  <style>
    /* 背景動画 */
    #bg-video {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -10;
    }

    body {
      margin: 0;
      font-family: sans-serif;
      color: #222;
    }

    /* 最初のタイトルアニメーション */
    .title {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      animation: fadeUp 2s ease-out forwards;
      opacity: 0;
    }

    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* 栞が出てくるところ */
    .shiori-section {
      padding: 80px 0;
      text-align: center;
    }

    .shiori-img {
      width: 60%;
      max-width: 280px;
      opacity: 0;
      animation: fadeIn 1.5s ease-out forwards;
      animation-delay: 1s;
    }

    @keyframes fadeIn {
      to { opacity: 1; }
    }

    /* 「この本を読んだあなたへ」セクション */
    .intro-text {
      padding: 60px 20px;
      font-size: 1.1rem;
      line-height: 1.7;
    }

    /* 次の栞の背景（固定） */
    .next-bg {
      background-image: url("next-shiori.jpg");
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      height: 100vh;
      position: relative;
    }

    /* 固定される文章（ストッキー） */
    .sticky-box {
      position: sticky;
      top: 30%;
      background: rgba(255, 255, 255, 0.7);
      padding: 20px;
      margin: 0 10%;
      border-radius: 10px;
    }
  </style>
</head>

<body>

  <!-- 動画背景 -->
  <video id="bg-video" autoplay muted loop playsinline>
    <source src="bg.mp4" type="video/mp4">
  </video>

  <!-- ① タイトル -->
  <div class="title">
    プロジェクトタイトル
  </div>

  <!-- ② QRで読み込んだ栞 -->
  <section class="shiori-section">
    <img class="shiori-img" src="shiori.png">
  </section>

  <!-- ③ 説明文 -->
  <div class="intro-text">
    この本を読んだあなたへ次におすすめする本を紹介します。
  </div>

  <!-- ④ 背景が固定された栞 ＋ 固定テキスト -->
  <div class="next-bg">
    <div class="sticky-box">
      ここに次の本の説明文が入ります。
      少しスクロールすると一瞬止まるように見えます。
    </div>
  </div>

</body>
</html>
