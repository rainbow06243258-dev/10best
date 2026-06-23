'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate how much of the article has been scrolled through
      const totalScrollable = articleHeight - windowHeight;
      const currentScroll = scrollY - articleTop;

      if (currentScroll <= 0) {
        setProgress(0);
      } else if (currentScroll >= totalScrollable) {
        setProgress(100);
      } else {
        setProgress(Math.round((currentScroll / totalScrollable) * 100));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-0.5 bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 transition-all duration-150 ease-out"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}
