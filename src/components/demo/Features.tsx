// import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import image from "./assets/feature1.png";
import image3 from "./assets/feature2.png";
import image4 from "./assets/feature3.png";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  link:string;
}

const features: FeatureProps[] = [
  {
    title: "Buy our product",
    description:
      "Let's have a wide range from skincare to medicine to healthcare.",
    image: image4,
    link:"product",
  },
  {
    title: "Login as farmer",
    description:
      "If you want sell your product then this is your perfect place.",
    image: image3,
    link:"farmer"
  },
  {
    title: "Go to cart",
    description:
      "if you have whislisted some product and then checkout that product.",
    image: image,
    link:"cart",
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        OUR{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary  bg-clip-text">
          WORK DOMAIN
        </span>
      </h2>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image,link }: FeatureProps) => (
          <Card key={title} className="bg-[#DEEDE0]">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
            <Button className="bg-black-500 w-full md:w-1/3 m-auto text-3xl flex justify-center bg-[#416D50]">
              <Link to={`/${link}`}>{link}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};
