import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Indulge in our signature dishes crafted with love and creativity, offering flavors you won’t find anywhere else.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Located in the heart of the city, our restaurant offers easy parking and quick access for all our patrons ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy your favorite meals from the comfort of your home with our seamless online ordering and fast delivery services",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Explore Our Menu
        Browse through our diverse selection of dishes, crafted to satisfy every craving. From appetizers to desserts, there’s something for everyone.
        Place Your Order
Choose your favorites and place your order effortlessly through our website or mobile app. You can also call us directly for reservations or custom requests.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
