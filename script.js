const setumei = document.getElementById('setumei');
const book = document.getElementById('book');


// ページ表示直後に説明画像を表示
window.addEventListener('load', () => {
// フェードイン＋拡大
setumei.classList.add('active');


// 3秒後にフェードアウト
setTimeout(() => {
setumei.classList.remove('active');
}, 3000);


// フェードアウト完了後に book を表示
setTimeout(() => {
setumei.style.display = 'none';
book.style.display = 'block';
}, 3800); // フェード時間(0.8s)を考慮
});
