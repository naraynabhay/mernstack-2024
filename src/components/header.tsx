import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GiSellCard } from "react-icons/gi";

interface PropsType {
  user: User | null;
}

const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out Successfully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Fail");
    }
  };

  
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <nav className="header">
      <Link onClick={() => setIsOpen(false)} to={"/"}>
      {windowWidth < 800 ? (
       <div > <IoHomeSharp /><span className="text-xs">home</span></div>
      ) : (
        "Home "
      )}
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/product"}>
      {windowWidth < 800 ? (
        <div > <MdProductionQuantityLimits /> <span className="text-xs">product</span></div>
      ) : (
        "Product "
      )}
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/farmer"}>
      {windowWidth < 500 ? (
        <div ><MdOutlineOndemandVideo className="inline-block mr-2" /><span className="text-xs">tutorial</span></div>
      ) : (
        "Get tutorial"
      )}
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/seller"}>
      {windowWidth < 500 ? (
       
       <div ><GiSellCard /><span className="text-xs">seller</span></div>
      ) : (
        "Become a Seller"
      )}
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>

      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to="/admin/dashboard">
                  Admin
                </Link>
              )}
              {user.role === "farmer" && (
                <Link onClick={() => setIsOpen(false)} to="/farmerdashboard">
                 farmer
                </Link>
              )}

              <Link onClick={() => setIsOpen(false)} to="/orders">
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
};
export default Header;
