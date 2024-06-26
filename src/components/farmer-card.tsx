import { FC } from 'react';
import { TbTemperature } from "react-icons/tb";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaCloudMoonRain } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface FarmerCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
  temperature: number;
  rainfall: number;
  process: string;
  marketvalue: number;
}

const FarmerCard: FC<FarmerCardProps> = ({ img, title, description, link, temperature, rainfall, process, marketvalue }) => {
  const handleYoutubeClick = () => {
    window.open(link, "_blank"); // Opens the YouTube link in a new tab
  };

  return (
    <div>
      {/* <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><a href={link}> youtube</a></p>
      <p>{temperature}</p>
      <p>{description}</p>
      <p>{rainfall}</p>
      <p>{process}</p>
      <p>{marketvalue}</p> */}
      {/* Include other JSX elements */}
      <div className="parent_container gap-5">
        <div className="product-detail">

          <>
            <section>
              <img src={img} alt="Product" />
            </section>

          </>

        </div>
        <div className="detailcart">
          <p>{title}</p>
          <div className="description">{description}</div>
          <h1><span>Profit per Acre </span> (Including all expenditure)</h1>
          <h3>₹{marketvalue}</h3>
          <div >

            <div className="green exclusivestock"><TbTemperature /> Temperature Required {temperature} <TbTemperatureCelsius /></div>

            <div className="green exclusivestock"><FaCloudMoonRain /> Rainfall Required {rainfall} mm</div>

          </div>

          <div className="flex" role="button" onClick={handleYoutubeClick} style={{ cursor: 'pointer' }}>
            <h2>Refer the video for further information:</h2>
            <div><FaYoutube style={{ height: "2em", width: "2em", marginLeft: "5px" , color : "red" }} /></div>
          </div>
          <h1 className="font-bold">Process :</h1>
          <div className="des_two">{process}</div>
          <div className="des_two text-[#416D50]">For More Information Contact: <br /> <span> +91 9592891890 </span> or cropconnect@gmail.com</div>

        </div>

      </div>
    </div>
  );
};

export default FarmerCard;

