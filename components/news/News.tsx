"use client";

import React, { useEffect, useState } from "react";
import styles from "./News.module.scss";
import { NewsTypes } from "@/types/news";
import { NewsVM } from "./NewsVM";
const News: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [news, setNews] = useState<NewsTypes | null>(null);

  useEffect(() => {
    const vm = new NewsVM("basketball", "nba");

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { news } = await vm.fetchNews();
        console.log(news);
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

  console.log(news);

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
          {news.articles.map((article, index) => {
            const plainTextStory = htmlToText(article.detail.story);
            if (index < 5) {
              return (
                <div key={article.id} className={styles.article}>
                  {/* <h3>{article.headline}</h3>
                <p>{article.description}</p>
                <p>
                  <strong>Published:</strong>{" "}
                  {new Date(article.published).toLocaleString()}
                </p> */}
                  {/* {article.images.length > 0 && (
                    <img
                      src={article.images[0].url}
                      alt={article.images[0].alt}
                    />
                  )} */}

                  {/* <p className={styles.story}>{plainTextStory}</p> */}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default News;
