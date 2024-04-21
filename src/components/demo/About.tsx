import { Statistics } from "./Statistics";
import pilot from "./assets/about1.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 bg-[#DEEDE0]"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[400px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary60 to-primary  bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                
CropConnect specializes in connecting farmers with markets for niche crops, overlooked by larger operations. We provide cultivation guidance and market access for these crops, enabling farmers to diversify income. Our platform also facilitates buying and selling among farmers, fostering a resilient and diverse agricultural community.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
