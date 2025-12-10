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


  import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ScrollSection } from './components/ScrollSection';

export default function App() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 3000); // 3秒後にフェードアウト

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen snap-y snap-mandatory overflow-y-scroll h-screen" style={{ margin: 0, padding: 0 }}>
      <HeroSection show={showHero} />
      <ScrollSection visible={!showHero} />
    </div>
  );
}

  <script src="script.js"></script>
</body>
</html>
