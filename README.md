<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>One Page Site</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    body {
      font-family: sans-serif;
    }

    /* 背景（画像1） */
    .background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: url('haikei.png') no-repeat center center;
      background-size: cover;
    }

    /* ボタン（画像2） */
    .button {
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px; /* 小さめ */
      cursor: pointer;
      z-index: 2;
    }

    /* 全画面表示（画像3） */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: url('book.png') no-repeat center center;
      background-size: cover;
      opacity: 0;
      pointer-events: no
  </style>
</head>
<body>
  <div class="background"></div>

  <img src="botan.png" alt="button" class="button" id="openButton" />

  <div class="overlay" id="overlay"></div>

  <script>
    const button = document.getElementById('openButton');
    const overlay = document.getElementById('overlay');

    button.addEventListener('click', () => {
      overlay.style.display = 'block';
    });

    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
    });
  </script>
</body>
</html>

