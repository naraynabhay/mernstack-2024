import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "A. N Sharma",
    userName: "@abhay_narayn",
    comment: "CropConnect introduced me to unique, locally grown produce I couldn't find elsewhere! Love supporting local farmers and discovering new flavors",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "A.k Kesharwaani",
    userName: "@anand_keshrwaani",
    comment:
      "As a chef, I appreciate CropConnect's dedication to bringing in fresh, specialty crops. It adds diversity to my menu and delights my customers",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "A.P patel",
    userName: "@radhya_patel",
    comment:
      "CropConnect opened up new markets for our specialty crops, boosting our income and allowing us to experiment with different crops each season.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "J.P Yadav",
    userName: "@jayesh_yadava",
    comment:
      "With CropConnect, selling our niche produce became hassle-free. Their platform connects us directly with buyers, ensuring fair prices and steady demand",
  },
  {
    image: " https://github.com/shadcn.png",
    name: "L.C Choudhary",
    userName: "lakshay_choudhary",
    comment:
      "Its customer-centric focus is evident in the positive feedback received, emphasizing the value of locally sourced produce and the platform's role in supporting agricultural diversity.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "P.Y Jha",
    userName: "@Putual_Jha",
    comment:
      "Observers note CropConnect's innovative approach in bridging the gap between farmers and niche crop markets.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        What Our
        <span className="bg-gradient-to-b from-primary/60 to-primary  bg-clip-text">
          {" "}
          Customer{" "}
        </span>
        Say About us:
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        These are some feedback of our happy customer
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
