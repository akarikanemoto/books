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


  import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ScrollSectionProps {
  visible: boolean;
}

export function ScrollSection({ visible }: ScrollSectionProps) {
  const [showVerticalImage, setShowVerticalImage] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setShowVerticalImage(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  // 共通の背景画像
  const sharedBackgroundImage = 'https://images.unsplash.com/photo-1735982715522-e20248a226dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5hdHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjUzMjg0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  return (
    <div className={`${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* ビデオセクション（ループ動画の代わりに背景画像を使用） */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${sharedBackgroundImage}')`,
          }}
        >
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* 右側の細長い縦画像 */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={showVerticalImage ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-48 h-[80vh] z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1598084414388-85c0a1bb2cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWNhbCUyMHBvcnRyYWl0JTIwbmF0dXJlfGVufDF8fHx8MTc2NTMyODQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="縦長画像"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>

      {/* 余白セクション */}
      <div className="h-[50vh] w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${sharedBackgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* スクロールセクション1 */}
      <ScrollSnapSection
        backgroundImage={sharedBackgroundImage}
        frontImage="namae.png"
      />

      {/* 余白セクション */}
      <div className="h-[80vh] w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${sharedBackgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* スクロールセクション2 */}
      <ScrollSnapSection
        backgroundImage={sharedBackgroundImage}
        frontImage="arasuji.png"
      />

      {/* 余白セクション */}
      <div className="h-screen w-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${sharedBackgroundImage}')` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      {/* 最後のセクション */}
      <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
        <p className="text-4xl text-gray-600">End</p>
      </div>
    </div>
  );
}

interface ScrollSnapSectionProps {
  backgroundImage: string;
  frontImage: string;
}

function ScrollSnapSection({ backgroundImage, frontImage }: ScrollSnapSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`scroll-section-${backgroundImage}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [backgroundImage]);

  return (
    <div
      id={`scroll-section-${backgroundImage}`}
      className="relative h-screen w-full snap-start snap-always"
      style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      {/* 固定背景 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: <img src="bg_main.png" class="bg_main-img"> }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ポップアップする前面画像 */}
      <div className="relative h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.1, y: 0 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src={frontImage}
            alt="前面画像"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
  <script src="script.js"></script>
</body>
</html>
