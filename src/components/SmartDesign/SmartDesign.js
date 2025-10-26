import { useNavigate, Link } from "react-router-dom";
import "./SmartDesign.css"; // CSS 분리 가능
import ProductCard from "../ProductCard";

export default function SmartDesign() {
  const navigate = useNavigate();
  const data = [
    {
      image: "images/SmartDesign/product-card_1.jpg",
      image_detail: "images/SmartDesign/product-card_1.jpg",
      title: "제품명1",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_2.jpg",
      image_detail: "images/SmartDesign/product_detail_2.png",
      title: "1440 판넬",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      summary: "images/SmartDesign/product-summary_3.png",
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_3.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
      video: "videos/product-video_3.mp4"
    },
    {
      summary: "images/SmartDesign/product-summary_4.png",
      image: "images/SmartDesign/product-card_4.png",
      // 큰 사이즈 파일
      image_detail: "images/SmartDesign/product_detail_3_large.png",
      title: "스디 웹디용 판넬(24MB)",
      names: ["이름1", "이름2", "이름3", "이름4"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_5.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_6.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_7.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_8.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_9.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_10.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_11.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_12.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_13.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_14.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_15.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_16.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_17.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_18.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_19.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_20.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_21.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_22.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_23.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_24.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_25.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_26.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_27.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_28.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
    {
      image: "images/SmartDesign/product-card_3.png",
      image_detail: "images/SmartDesign/product_detail_29.png",
      title: "Ziggleit (1920 판넬)",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
    },
 
 
 
  ];

  return (
    <div className="main">
        <img className="intro-img" src="images/SmartDesign/intro.png"/>
        <div className="products-grid">
          {data.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>

    </div>
  );
}
