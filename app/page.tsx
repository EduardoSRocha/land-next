import '@/public/css/style.css';
import React from 'react';
import Header from '@/components/Hero';
import Typography from '@/components/Typography';
import Section from '@/components/Section';
import ButtonSection from '@/components/sections/ButtonSection';
import TypographySection from '@/components/sections/TypographySection';
import ImageSection from '@/components/sections/ImageSection';
import IconSection from '@/components/sections/IconButtonSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header
        logo="landi"
        mainText="landpages"
        subText="onde os leads acontecem"
        buttonText="Saiba mais"
        buttonLink="#"
        className="home-header"
      />
      <main>
        <Section className="section-basic-elements__images">
          <div className="row">
            <div className="col-12">
              <Typography tag="h2" className="h2 u-margin-bottom-4 u-text-align-right">
                Elementos Básicos
              </Typography>
            </div>
          </div>
          <ButtonSection/>
          <TypographySection/>
          <ImageSection/>
          <IconSection/>
        </Section>
      </main>
      <Footer/>
    </>
  );
}
