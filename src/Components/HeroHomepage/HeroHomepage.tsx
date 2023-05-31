import "./HeroHomepage.scss";
import Image from "next/image";

export default function HeroHomepage({ values }) {
  const [
    heroBackgroundImage,
    heroHeading,
    heroHeadingAlt,
    heroText,
    imageSrc,
    imageAlt,
  ] = values || [
    "/GameBackground.png",
    "ChronoBlade",
    ": Eternia's Awakening",
    "In 'ChronoBlade: Eternia's Awakening,' embark on an epic journey through a vast and immersive anime-inspired world. As a fearless warrior, chosen by destiny, you must harness the power of time itself to restore balance and protect Eternia from the encroaching darkness.",
    "/HeroCharacter.png",
    "hero character",
    "100",
    "100",
  ];

  return (
    <div className="hero-background">
      <Image
        src={heroBackgroundImage}
        alt={imageAlt}
        width={1000}
        height={1000}
        className="hero-background--image"
      />
      <div className="hero">
        <div className="hero-texts__container">
          <div className="hero-heading__container">
            <h1 className="hero-heading">
              {heroHeading}
              <span className="hero-heading__alt">{heroHeadingAlt}</span>
            </h1>
          </div>
          <div className="hero-text__container">
            <p className="hero-text">{heroText}</p>
          </div>
          <button className="hero-preview"></button>
        </div>
        <div className="hero-character__container">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={100}
            height={100}
            className="hero-character"
          />
        </div>
      </div>
    </div>
  );
}
