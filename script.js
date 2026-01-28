window.addEventListener("load", () => {
  const setumei = document.getElementById("setumei");
  const book = document.getElementById("book");

  // フェードイン＋拡大
  setumei.classList.add("fade-in-scale");

  // 3秒後にフェードアウト
  setTimeout(() => {
    setumei.classList.add("fade-out");
  }, 3000);

  // 完全に消えたあと book を表示
  setTimeout(() => {
    book.style.opacity = "1";
  }, 3500);
});
