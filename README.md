<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webサイトアニメーション</title>
    <style>
        /* 基本設定：余白をなくし、画面いっぱいに表示 */
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden; /* スクロールバーを出さない */
            background-color: #000; /* 画像読み込み前の背景色 */
        }

        /* 背景画像の設定 */
        .background-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('haikei.png');
            background-size: cover; /* 画面全体を覆うように調整 */
            background-position: center;
            background-repeat: no-repeat;
            z-index: 1; /* 最背面に配置 */
        }

        /* コンテンツを配置するコンテナ */
        .content-container {
            position: relative;
            width: 1170px;
            height: 2532px;
            /* 画面中央に配置するための設定 */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            /* 画面サイズに合わせて自動縮小（レスポンシブ対応） */
            max-width: 100vw;
            max-height: 100vh;
            
            z-index: 10;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* 共通の画像スタイル */
        .content-container img {
            position: absolute;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        /* 画像2：setumei.png のアニメーション設定 */
        .setumei {
            opacity: 0; /* 最初は非表示 */
            /* アニメーション名: introSequence
               所要時間: 4.5秒 (フェードイン1秒 + 待機3秒 + フェードアウト0.5秒)
               進行: linear (一定速度)
               完了後: forwards (最後の状態=透明 を維持)
            */
            animation: introSequence 4.5s linear forwards;
        }

        /* 画像3：book.png の設定 */
        .book {
            opacity: 0; /* 最初は非表示 */
            /* アニメーション名: showBook
               所要時間: 0s (一瞬で表示)
               遅延: 4.5秒 (setumeiのアニメーションが終わるのを待つ)
               完了後: forwards (表示状態を維持)
            */
            animation: showBook 0s linear 4.5s forwards;
        }

        /* --- アニメーション定義 (キーフレーム) --- */

        /* setumei.png の動き */
        @keyframes introSequence {
            /* 0%〜22%: 大きくなりながらフェードイン (約1秒) */
            0% {
                opacity: 0;
                transform: scale(0.5); /* 小さい状態から */
            }
            22% {
                opacity: 1;
                transform: scale(1); /* 100%の大きさへ */
            }
            
            /* 22%〜89%: 3秒間待機 (表示されたまま) */
            89% {
                opacity: 1;
                transform: scale(1);
            }

            /* 89%〜100%: 素早くフェードアウト (約0.5秒) */
            100% {
                opacity: 0;
                transform: scale(1);
            }
        }

        /* book.png の動き */
        @keyframes showBook {
            to {
                opacity: 1; /* 完全に表示 */
            }
        }
    </style>
</head>
<body>

    <div class="background-layer"></div>

    <div class="content-container">
        <img src="book.png" class="book" alt="Book">
        
        <img src="setumei.png" class="setumei" alt="Setsumei">
    </div>

</body>
</html>
