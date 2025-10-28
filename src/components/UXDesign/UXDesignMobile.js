// SmartDesignMobile.js
import "./UXDesignMobile.css";
import UXProductCardMobile from "../UXProductCardMobile";

export default function SmartDesignMobile() {
  const data = [
    {
      image: "images/SmartDesign/product-card_1.jpg",
      title: "A1",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_2.jpg",
      title: "A2",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      title: "A3",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_4.png",
      title: "A4",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_1.jpg",
      title: "A5",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_2.jpg",
      title: "A6",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      title: "A7",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_4.png",
      title: "B1",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_1.jpg",
      title: "B2",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_2.jpg",
      title: "B3",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      title: "B4",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_4.png",
      title: "B5",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_4.png",
      title: "B6",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
  ];

  return (
    <div className="mobile-main">
      <img
        className="intro-img"
        src="images/UXDesign/intro.png"
        alt="intro"
      />

      <div className="mobile-products-grid">
        {data.map((item, idx) => (
          <UXProductCardMobile key={idx} index={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
