import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of niche crops does CropConnect work with?",
    answer: "CropConnect specializes in a wide range of niche crops, including heirloom vegetables, specialty fruits, medicinal herbs, and unique grains",
    value: "item-1",
  },
  {
    question: "How does CropConnect help farmers sell their produce?",
    answer:
      "CropConnect assists farmers in selling their produce by providing access to markets through our online platform. We connect farmers directly with buyers, including local markets, specialty stores, restaurants, and individual consumers.",
    value: "item-2",
  },
  {
    question:
      "Can I buy niche crops directly from CropConnect?",
    answer:
      "Yes, you can purchase niche crops directly from CropConnect through our online marketplace. We offer a diverse selection of fresh, locally grown produce sourced directly from farmers.",
    value: "item-3",
  },
  {
    question: "How does CropConnect ensure the quality and freshness of the produce?",
    answer: "CropConnect ensures the quality and freshness of the produce by working closely with farmers who adhere to best practices in cultivation, harvesting, and post-harvest handling.",
    value: "item-4",
  },
  {
    question:
      "Is CropConnect available to farmers and buyers outside of a specific region?",
    answer:
      "Currently, CropConnect primarily operates within a specific region. However, we are continually expanding our network and may extend our services to farmers and buyers in new regions in the future.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary  bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
