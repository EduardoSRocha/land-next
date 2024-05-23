import React from 'react';

interface SectionProps {
  className: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ className, children }) => (
  <section className={className}>
    {children}
  </section>
);

export default Section;
