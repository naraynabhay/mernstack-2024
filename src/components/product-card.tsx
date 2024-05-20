
import { server } from "../redux/store";
import { CartItem } from "../types/types";
import { Link } from "react-router-dom";
import { BiSolidCartAdd } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <div className="relative">
      <p className="">
      <Link  to={`/product/${productId}`}>{name} </Link>
      </p>
      </div>
      <div className="flex">
      <span>₹{price}</span>
      <div className="flex  startheight  "><FaStar  className="text-[#FFD700]  " /> <FaStar  className="text-[#FFD700]" /> <FaStar  className="text-[#FFD700]" /> <FaStar  className="text-[#FFD700]" /><CiStar /> </div> (4.0)
      </div>
      
      <div className="flex">
      <div className="btnviewmore">
        <CiHeart />
        </div>
        <button
          onClick={() =>
            handler({ productId, price, name, photo, stock, quantity: 1 })
          }
        >
          <BiSolidCartAdd  className="addcardbtn"/> Add to cart
        </button>
        
        
      </div>
    </div>
  );
};

export default ProductCard;
