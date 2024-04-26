import React from 'react'

const Farmer = () => {
    interface FeatureProps {
        title: string;
        description: string;
        link:string;
        temperature:Number;
        rainfall:Number;
        process:string;
        marketvalue:Number;
      }
      
      const features: FeatureProps[] = [
        {
          title: "ALOE VERA",
          description:
            "It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance",
          link:"https://www.youtube.com/watch?v=SIYXG593Ob8",
          temperature:45,
        rainfall:3,
        process:"t is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance",
        marketvalue:10000,

        },
        {
          title: "ALOE VERA",
          description:
            "It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance",
          link:"https://www.youtube.com/watch?v=SIYXG593Ob8",
          temperature:45,
        rainfall:3,
        process:"t is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance",
        marketvalue:10000,

        },
        {
          title: "ALOE VERA",
          description:
            "It is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance",
          link:"https://www.youtube.com/watch?v=SIYXG593Ob8",
          temperature:45,
        rainfall:3,
        process:"t is used in different sectors, such as the medical industry, cosmetic industry, food industry, and many more. The aloe vera cultivation needs less water & maintenance",
        marketvalue:10000,

        },
    ]
  return (
    <div>
      welcome to farmer dashboard;
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
        {.map((feature: string) => (
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
        {features.map(({ title, description,,link,temperature,rainfall,process, marketvalue}: FeatureProps) => (
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
    </div>
  )
}

export default Farmer
