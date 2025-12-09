/* ▼ タイトルが終わったら動画フェードイン */
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".title-section").style.opacity = 0;
        setTimeout(() => {
            document.querySelector(".video-section").style.opacity = 1;
            document.getElementById("bgVideo").play();
        }, 1000);
    }, 2200);
});

/* ▼ 動画を5秒でループ（強制） */
const video = document.getElementById("bgVideo");

video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 5) {
        video.currentTime = 0;
        video.play();
    }
});

/* ▼ 説明から3秒後に「スクロールしてください」表示 */
setTimeout(() => {
    document.querySelector(".scroll-text").style.opacity = 1;
}, 3500);
