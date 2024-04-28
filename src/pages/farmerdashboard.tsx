import { Link } from "react-router-dom"
// import { FaPlus } from "react-icons/fa"
const FarmerDashboard = () => {
  return (
    <div>
      <h1>  welcome to farmer dashboard</h1>
      <h1><Link to="/farmerdashboard/new" >
        you can add product or now
      </Link></h1>
      
    </div>
  )
}

export default FarmerDashboard
