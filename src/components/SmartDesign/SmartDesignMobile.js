// SmartDesignMobile.js
import "./SmartDesignMobile.css";
import ProductCardMobile from "../ProductCardMobile";

export default function SmartDesignMobile() {
  const data = [
    {
      image: "images/SmartDesign/product-card_1.jpg",
      title: "제품명1",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_2.jpg",
      title: "1440 판넬",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_4.png",
      title: "스디 웹디용 판넬(24MB)",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
  ];

  return (
    <div className="mobile-main">
      <img
        className="intro-img"
        src="images/SmartDesign/intro.png"
        alt="intro"
      />

      <div className="mobile-products-grid">
        {data.map((item, idx) => (
          <ProductCardMobile key={idx} index={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
