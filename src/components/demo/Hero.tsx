import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import "./Hero.css"
import hero from "./assets/herofload.png"
import heroover from "./assets/transparenthero.png"

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-12 md:py-12 gap-1 bg-[#416D50]">
      <div className="parentt text-center lg:text-start space-y-6">
        <main className="  text-[6vw] font-bold">
          <h1 className="inline ">
            <div className=" bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              FARM
            </div>
            {/* <span className="heroo  bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              FARM 
            </span>{" "} */}
            TOGETHER
          </h1>{" "}
          {/* for{" "} */}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              {/* React */}
            </span>{" "}
            {/* developers */}
          </h2>
        </main>

        <p className=" heroo text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Let's do  business together
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className=" heroo z-10">
        {/* <HeroCards /> */}
        <div className="heroo text-center lg:text-start space-y-6">
        <div className="svg ">
        <img className="inssvg"  src={hero} alt="heroo" />
        <img className="anand" src= {heroover} alt="herover" />
        </div>
       
      </div>

      </div>
    
      {/* Shadow effect */}
      {/* <div className="shadow">
     
      </div> */}
    </section>
  );
};
