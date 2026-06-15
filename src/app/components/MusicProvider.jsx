"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import styles from "./MusicProvider.module.scss";

const MusicContext = createContext(null);

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) {
    return { isPlaying: false, play: () => {}, toggle: () => {} };
  }
  return ctx;
}

export default function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.volume = 0.6;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, play, toggle }}>
      {children}
      <audio ref={audioRef} src="/garden/audio/music.mp3" loop preload="auto" />
      <button
        type="button"
        className={`${styles.toggle} ${isPlaying ? styles.playing : ""}`}
        onClick={toggle}
        aria-label={isPlaying ? "Поставить музыку на паузу" : "Включить музыку"}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>
    </MusicContext.Provider>
  );
}
