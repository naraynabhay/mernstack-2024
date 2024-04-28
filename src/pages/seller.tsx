
import { ScrollToTop } from "../components/demo/ScrollToTop"
import photo from "../components/demo/assets/10th-May-SR-Blog.jpg"
import toast from "react-hot-toast";

import { useState, ChangeEvent, FormEvent } from 'react';


const Seller = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    photo: null as File | null,
    name: '',
    place: '',
    aadhar: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let newValue: string | File | null = value;

    // Check if the input field is of type file
    if (name === 'photo' && e.target.type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      newValue = files ? files[0] : null;
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Your request is in processing');
    // Handle form submission here
    console.log(formData);
  };


  return (
    <>
      <section
        id="about"
        className="container py-7"
      >
        <div className="bg-muted/50 border rounded-lg py-12">
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src={photo}
              alt=""
              className="w-[500px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Sell Online with CropConnect
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  Unlock a seamless business experience with our platform offering secure, regular payments within 7 days, alongside a low-cost framework for conducting operations. With just a click, access dedicated seller support, ensuring your needs are met promptly. Seamlessly integrate into events like The Big Billion Days and beyond, focusing on business growth while we handle the rest.
                </p>
                <div className=" py-2 font-bold">Required only three things :-</div>
                <ul className="list-disc ml-5">
                  <li>Mobile Number</li>
                  <li>Adhar Card Number</li>
                  <li>Passport size photo</li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row justify-center shadow-md">
        <div className="lg:mr-4 lg:w-1/2 bg-white p-6 rounded-md  mb-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
          <form className="p-9" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-bold">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-bold">Email Address:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="aadhar" className="block mb-1 font-bold">Enter Aadhar Card NO: :</label>
              <input
                type="number"
                id="aadhar"
                name="aadhar"
                value={formData.aadhar}
                onChange={handleChange}
                placeholder="Enter Aadhar card No:"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"
              />
            </div>
            {/* Phone Number */}
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-1 font-bold">Phone Number:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            {/* Photo Upload */}
            <div className="mb-4">
              <label htmlFor="photo" className="block mb-1 font-bold">Photo:</label>
              <input type="file" id="photo" name="photo" onChange={handleChange}
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            {/* Place */}
            <div className="mb-4">
              <label htmlFor="place" className="block mb-1 font-bold">Place:</label>
              <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} placeholder="Enter your place"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Submit</button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2">
          <img src="https://seller.digitalindiacorporation.in/register_css/images/register-1.svg" alt="Register" className="w-full" />
        </div>
      </div>

      <div className="footer">
        <hr className="w-11/12 mx-auto" />
        <div className=" mt-14 ml-6 sellerhai">
          Why sell on Crop Connect ?
        </div>
        <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8">


          <div className="flex flex-col gap-2">
            <img className="imghai" src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Truck.svg" alt="" />
            <h3 className="font-bold text-lg text-center">Sell Across India</h3>
            <div className="text-center">
              Reach over 50 crore+ customers across 27000+ pincodes
            </div>

          </div>

          <div className="flex flex-col gap-2">
            <img className="imghai" src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Support.svg" alt="" />
            <h3 className="font-bold text-lg text-center">24x7 Seller Support</h3>
            <div className="text-center">
              All your queries and issues are answered by our dedicated Seller Support Team
            </div>

          </div>
          <div className="flex flex-col gap-2">
            <img className="imghai" src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Percent.svg" alt="" />
            <h3 className="font-bold text-lg text-center">Higher Profits</h3>
            <div className="text-center">
              With 0% commission* , you take 100% profits with you
            </div>

          </div>
          <div className="flex flex-col gap-2">
            <img className="imghai" src="https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_Calculator.svg" alt="" />
            <h3 className="font-bold text-lg text-center">Simple Pricing Calculator</h3>
            <div className="text-center">
              Use our simple pricing calculator to decide the best and competitive selling price for your product
            </div>

          </div>

        </section>


      </div>
      <ScrollToTop />
    </>
  )
}

export default Seller


