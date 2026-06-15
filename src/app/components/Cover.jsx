"use client";

import { useState } from "react";
import { useMusic } from "./MusicProvider";
import styles from "./Cover.module.scss";

export default function Cover() {
  const [opened, setOpened] = useState(false);
  const { play } = useMusic();

  const handleOpen = () => {
    setOpened(true);
    play();
  };

  return (
    <section className={styles.cover}>
      <img src="/garden/leaf-1.svg" alt="" className={styles.leafTopLeft} aria-hidden />
      <img src="/garden/leaf-2.svg" alt="" className={styles.leafTopRight} aria-hidden />
      <img src="/garden/leaves-left.svg" alt="" className={styles.leavesLeft} aria-hidden />
      <img src="/garden/leaves-right.svg" alt="" className={styles.leavesRight} aria-hidden />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>мы женимся!</p>
        <h1 className={styles.names}>
          Дильмурод <span>и</span> Шакира
        </h1>

        <div className={styles.date}>
          <span className={styles.weekday}>пятница</span>
          <span className={styles.day}>26</span>
          <span className={styles.month}>июня 2026</span>
          <span className={styles.time}>начало в 19:00</span>
        </div>

        <div className={styles.photos}>
          <img src="/garden/photo-left.svg" alt="" className={styles.photo} aria-hidden />
          <img src="/garden/photo-right.svg" alt="" className={styles.photo} aria-hidden />
        </div>

        <p className={styles.subtitle}>
          Будем счастливы видеть вас рядом
          <br />в этот особенный день
        </p>

        <div className={`${styles.envelope} ${opened ? styles.opened : ""}`}>
          <img src="/garden/envelope-card.svg" alt="" className={styles.envelopeBody} aria-hidden />
          <img src="/garden/envelope-flap.svg" alt="" className={styles.envelopeFlap} aria-hidden />
          {!opened && (
            <button type="button" className={styles.openBtn} onClick={handleOpen}>
              нажмите
            </button>
          )}
          {opened && <p className={styles.openedHint}>добро пожаловать ♪</p>}
        </div>
      </div>
    </section>
  );
}
