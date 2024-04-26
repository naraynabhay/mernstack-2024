import { FC } from 'react';
import { TbTemperature } from "react-icons/tb";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaCloudMoonRain } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface FarmerCardProps {
    img:string;
  title: string;
  description: string;
  link: string;
  temperature: number;
  rainfall: number;
  process: string;
  marketvalue: number;
}

const FarmerCard: FC<FarmerCardProps> = ({img, title, description, link, temperature, rainfall, process, marketvalue }) => {
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
       <h1><span>Market Price </span> (Including all charges)</h1>
       <h3>₹{marketvalue}</h3>
       <div >
      
              <div className="green exclusivestock"><TbTemperature /> Temperature Required {temperature} <TbTemperatureCelsius /></div>
           
              <div className="green exclusivestock"><FaCloudMoonRain /> Rainfall Required {rainfall} mm</div>
           
              
          
           </div>

       
       <div className=" flex ">
         <h2> refer the video for further information  :  </h2>
         <a href={link}><FaYoutube height={5} width={1}  /></a>
       </div>
       <h1 className="font-bold">Process :</h1>
       <div className="des_two">{process}</div>
       
    </div>
    
  </div>
    </div>
  );
};

export default FarmerCard;
