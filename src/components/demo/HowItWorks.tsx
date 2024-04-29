import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Listing Products",
    description:
      "Farmers upload details and images of their niche crops onto the website, specifying quantity, price, and any relevant information.",
  },
  {
    icon: <MapIcon />,
    title: "Browsing and Purchasing: ",
    description:
      "Buyers browse through the listings, filtering by crop type or location, and select the products they wish to purchase.",
  },
  {
    icon: <GiftIcon />,
    title: "Transaction:",
    description:
      "Buyers make purchases directly through the website, and farmers receive notifications of sales. Payment processing and shipping arrangements are coordinated seamlessly.",
  },
  {
    icon: <PlaneIcon />,
    title: "Learning",
    description:
      "Farmers access comprehensive guides and articles on cultivation techniques, harvesting methods, and post-harvest handling for niche crops",
  },
 
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary  bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
