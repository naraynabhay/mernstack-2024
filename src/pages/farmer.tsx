import React from 'react';
import FarmerCard from '../components/farmer-card';

const Farmer = () => {
  interface FeatureProps {
    img:string;
    title: string;
    description: string;
    link: string;
    temperature: number;
    rainfall: number;
    process: string;
    marketvalue: number;
  }

  const features: FeatureProps[] = [
    {
      img:"https://www.allthatgrows.in/cdn/shop/articles/Feat-Image_1100x1100.jpg?v=1594124414",
      title: 'ALOE VERA',
      description:
        'It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 45,
      rainfall: 3,
      process:
        'It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance',
      marketvalue: 10000,
    },
    {
      img:"https://www.allthatgrows.in/cdn/shop/articles/Feat-Image_1100x1100.jpg?v=1594124414",
      title: 'ALOE VERA',
      description:
        'It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 45,
      rainfall: 3,
      process:
        'It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance',
      marketvalue: 10000,
    },
    {
      img:"https://www.allthatgrows.in/cdn/shop/articles/Feat-Image_1100x1100.jpg?v=1594124414",
      title: 'ALOE VERA',
      description:
        'It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 45,
      rainfall: 3,
      process:
        'It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance',
      marketvalue: 10000,
    },
    // Add more features as needed...
  ];

  return (
    <div>
      <section id="features" className="container py-0 sm:py-3 space-y-0">
        <div>
          {features.map((feature, index) => (
            <FarmerCard
              key={index}
              img={feature.img}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              temperature={feature.temperature}
              rainfall={feature.rainfall}
              process={feature.process}
              marketvalue={feature.marketvalue}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Farmer;
