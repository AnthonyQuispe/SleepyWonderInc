import "./HeroHomepage.scss";
import Image from "next/image";

export default function HeroHomepage() {
  return (
    <div className="hero">
      <div className="hero-texts__container">
        <div className="hero-heading__container">
          <h1 className="hero-heading">
            ChronoBlade
            <span className="hero-heading__alt">
              : Eternia&apos;s Awakening{" "}
            </span>
          </h1>
        </div>
        <div className="hero-text__container">
          <p className="hero-text">
            In &quot;ChronoBlade: Eternia&apos;s Awakening,&quot; embark on an
            epic journey through a vast and immersive anime-inspired world. As a
            fearless warrior, chosen by destiny, you must harness the power of
            time itself to restore balance and protect Eternia from the
            encroaching darkness.
          </p>
        </div>
        <button className="hero-preview"></button>
      </div>
      <div className="hero-character__container">
        <Image
          src="/HeroCharacter.png"
          alt="hero character"
          width="100"
          height="100"
          className="hero-character"
        />
      </div>
    </div>
  );
}
