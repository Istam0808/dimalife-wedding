"use client";

import { useState } from "react";
import styles from "./RsvpForm.module.scss";

const DRINKS = ["Вино красное", "Вино белое", "Шампанское", "Крепкие напитки", "Безалкогольные"];

export default function RsvpForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("yes");
  const [drinks, setDrinks] = useState([]);

  const toggleDrink = (drink) => {
    setDrinks((prev) =>
      prev.includes(drink) ? prev.filter((d) => d !== drink) : [...prev, drink]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Заглушка: реальная отправка не выполняется
    setSubmitted(true);
  };

  return (
    <section className={styles.rsvp} id="rsvp">
      <img src="/garden/form-deco-tr.svg" alt="" className={styles.decoTop} aria-hidden />
      <img src="/garden/form-bouquet.svg" alt="" className={styles.decoBottom} aria-hidden />

      <div className={styles.inner}>
        <h2 className={styles.title}>Анкета гостя</h2>
        <p className={styles.deadline}>Пожалуйста, ответьте до 26 июня</p>

        {submitted ? (
          <div className={styles.thanks}>
            <img src="/garden/envelope-mini.svg" alt="" aria-hidden />
            <h3>Спасибо!</h3>
            <p>Мы получили вашу анкету и очень ждём встречи с вами.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset className={styles.field}>
              <legend className={styles.label}>Сможете присутствовать?</legend>
              <div className={styles.radios}>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === "yes"}
                    onChange={(e) => setAttendance(e.target.value)}
                  />
                  <span>Да, с радостью буду</span>
                </label>
                <label className={styles.radio}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === "no"}
                    onChange={(e) => setAttendance(e.target.value)}
                  />
                  <span>К сожалению, не смогу</span>
                </label>
              </div>
            </fieldset>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="guest-name">
                Имя и фамилия
              </label>
              <input
                id="guest-name"
                type="text"
                className={styles.input}
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <fieldset className={styles.field}>
              <legend className={styles.label}>Предпочтения по напиткам</legend>
              <div className={styles.checkboxes}>
                {DRINKS.map((drink) => (
                  <label key={drink} className={styles.checkbox}>
                    <input
                      type="checkbox"
                      checked={drinks.includes(drink)}
                      onChange={() => toggleDrink(drink)}
                    />
                    <span>{drink}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="submit" className={styles.submit}>
              отправить
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
