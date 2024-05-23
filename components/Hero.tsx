import React from 'react';

interface HeroProps {
  logo?: string;
  mainText?: string;
  subText?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  logo = 'landi',
  mainText = 'landpages',
  subText = 'onde os leads acontecem',
  buttonText = 'Saiba mais',
  buttonLink = '#',
  className = '',
}) => (
  <header className={`header ${className}`}>
    <div className="header__logo-box">
      <p className="header__logo">{logo}</p>
    </div>
    <div className="header__text-box">
      <h1 className="h1">
        <span className="h1--main bottomToTopAnimation">{mainText}</span>
        <span className="h1--sub bottomToTopAnimation">{subText}</span>
      </h1>
      <a href={buttonLink} className="btn btn--rounded btn--large btn--white bottomToTopAnimation">
        {buttonText}
      </a>
    </div>
  </header>
);

export default Hero;
