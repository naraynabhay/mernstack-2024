
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
      img:"https://images.immediate.co.uk/production/volatile/sites/10/2018/02/f185aed9-856e-426e-b69a-5427cf843cbe-8547772.jpg?quality=90&webp=true&resize=1500,1001",
      title: 'Lavender',
      description:
        'Lavender is used in aromatherapy for stress relief and relaxation',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 30-45,
      rainfall: 1-3,
      process:
        "Lavender is mainly propagated by seed, cuttings, layering, tissue culture and Herbal and essential oil crops grown on natural soils yield products that are of high quality and in demand globally Lavender produces well on soils that are nutrient deficient for most other cropsExcessive applications of nitrogen can decrease oil quality, make plants unhealthy and will increase weed competition",
      marketvalue: 8000-10000,
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0058/0252/4783/files/gotu-kola-centella-asiatica-alternate.jpg",
      title: 'Gotu Kola',
      description:
        'Gotu Kola is used in traditional medicine for its cognitive-enhancing and anti-inflammatory properties',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature:15-20,
      rainfall: 0.5-2,
      process:
        'Plant gotu kola seeds in a container filled with moist, lightweight potting soil. Be sure the container has a drainage hole in the bottom. Water thoroughly after planting. Thereafter, water as needed to keep the soil evenly and consistently moist. Transplant the tiny plants into individual containers when they have at least one set of true leaves – the leaves that appear after the tiny seedling leaves. Allow gotu kola plants to mature for several months, then plant them in the garden when you’re sure all danger of frost has passed.',
      marketvalue: 3900-8000,
    },
    {
      img:"https://housing.com/news/wp-content/uploads/2022/11/Chia-seeds-plant-Growing-and-maintaining-the-Salvia-hispanica.jpg",
      title: 'Chia seeds',
      description:
        'Chia seeds are used as a dietary supplement for their omega-3 fatty acids, fiber, and protein content, supporting heart health and digestion',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 45,
      rainfall: 3,
      process:
        'Chia Seed Contract Farming Sprinkle a few seeds over the soil and rub gently to cover them with the soil. Water the seeds at regular intervals, and within about a week you can expect to see Chia sprouts. If you are growing Chia plants from seeds, create a carpet of Chia seedling and then thin the plants as they grow.',
      marketvalue: 6000-10000,
    },
    {
      img:"https://hips.hearstapps.com/hmg-prod/images/nutritional-supplement-moringa-powder-on-rustic-royalty-free-image-1659133952.jpg",
      title: 'Moringa',
      description:
        'Moringa is used as a nutritional supplement for its high nutrient content, including vitamins, minerals, and antioxidants',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 20-25,
      rainfall: 0,
      process:
        'Sow 100 kg/ha Moringa seed in one hectare. In a well prepared field, open shallow furrows at 30 cm spacing, sow one seed at 10 cm spacing 3-4 cm deep in soil. Cover the seed properly with soil after sowing.',
      marketvalue: 4000-6000,
    },
    {
      img:"https://www.traditionalmedicinals.com/cdn/shop/articles/HerbalLibrary_Hero_Valerian_1400x1400_d733fff2-bc48-4739-8aa4-c4ccb6434354_950x950_crop_center.jpg?v=1662261053",
      title: 'Valerian',
      description:
        'Valerian root is used as a herbal remedy for promoting relaxation and improving sleep quality',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 15-35,
      rainfall: 0-3,
      process:
        'Valerian can be propagated by crown or runner division in the spring or fall, and daughter plants can be collected at the end of the summer. Root division should be done early enough in the season to allow plants to become well established before winter. Plants will self-seed, and also spread by runners',
      marketvalue: 2000,
    },
    {
      img:"https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/Hemp-Growing-1296x728-header.jpg?w=1155&h=1528",
      title: 'Hemp',
      description:
        'Hemp is used for its CBD content, which has potential benefits for pain relief, anxiety, and insomnia',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 25-35,
      rainfall: 2-5,
      process:
        'Seed the hemp crop either no-till or reduced tillage into a rolled/crushed cover crop, or light tillage soil. Weeds may be prominent but the hemp will overtake the weeds and shade them out after a month or two of growth. Hemp for seed can be planted in rows, like corn, or with a grain drill, like a small grain',
      marketvalue: 1600-8000,
    },
    {
      img:"https://sustainableherbsprogram.org/wp-content/uploads/2019/07/Actaea-racemosa-18059.jpg?x80440",
      title: 'Black Cohosh',
      description:
        'Black Cohosh is used as a herbal remedy for symptoms of menopause, such as hot flashes and mood swings',
      link: 'https://www.youtube.com/watch?v=SIYXG593Ob8',
      temperature: 15-35,
      rainfall: 0-3,
      process:
        'Black cohosh seeds must be exposed to a warm/cold/warm cycle before they will germinate. The easiest way to grow plants from seed is to harvest the mature seed in the fall and then sow in the ground immediately, allowing nature to provide the necessary temperature changes',
      marketvalue: 800-2400,
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
