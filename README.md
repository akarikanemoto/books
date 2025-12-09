<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Shiori Demo</title>

<style>
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        color: white;
        background: black;
        overflow-x: hidden;
    }

    /* タイトルセクション */
    .title-section {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
    }

    .title-image {
        width: 70%;
        max-width: 380px;
        opacity: 0;
        animation: fadeUp 2s ease forwards;
    }

    @keyframes fadeUp {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }

    /* 池動画（背景固定） */
    .video-wrapper {
        position: relative;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }

    #pondVideo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    /* ポップアニメーション（その場でバウンド） */
    .pop {
        width: 220px;
        margin: 0 auto;
        opacity: 0;
        animation: popIn 0.9s ease-out forwards;
    }

    @keyframes popIn {
        0% { transform: scale(0.6); opacity: 0; }
        60% { tran
