"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./News.module.scss";
import { NewsTypes } from "@/types/news";
import { NewsVM } from "./NewsVM";
import gsap from "gsap";

const News: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [news, setNews] = useState<NewsTypes | null>(null);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const vm = new NewsVM("basketball", "nba");

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { news } = await vm.fetchNews();
        setNews(news);
      } catch (e) {
        console.error(e);
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // GSAP Animation on news load
  useEffect(() => {
    if (!news || cardsRef.current.length === 0) return;

    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline();

    // Stagger in each card from the left with fade-in
    tl.to(cardsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.15,
    });

    return () => {
      tl.kill(); // Clean up timeline on unmount or dependency change
    };
  }, [news]);

  function htmlToText(html: string) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  return (
    <div className={styles.newsContainer}>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && news && (
        <div className={styles.articles}>
          {news.map((article, index) => {
            const plainTextStory = htmlToText(article.detail.story);

            return (
              <div
                key={article.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={styles.article}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${article.images[0].url})`,
                }}
              >
                <p className={styles.headline}>{article.headline}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default News;
