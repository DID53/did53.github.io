import { useNavigate, Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function SmartDesign() {
  const navigate = useNavigate();
  const data = [
    {
      image: "images/SmartDesign/A-1.jpg",
      image_detail: "images/empty_image.png",
      title: "PURIPOT",
      names: ["김고은", "남한별", "유지승", "이연경"],
    },
    {
      image: "images/SmartDesign/A-2.jpg",
      image_detail: "images/empty_image.png",
      title: "POMI",
      names: ["우요한", "안예은", "정혜원", "허지운"],
    },
    {
      image: "images/SmartDesign/A-3.png",
      summary: "images/SmartDesign/A-3-summary.png",
      image_detail: "images/SmartDesign/A-3-detail.jpg",
      title: "Ziggleit",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
      // video: "videos/product-video_3.mp4"
    },
    {
      summary: "images/SmartDesign/A-4-summary.jpg",
      image: "images/SmartDesign/A-4.jpg",
      image_detail: "images/SmartDesign/product_detail_4.png",
      title: "WAGU",
      names: ["정다원", "김희서", "박지우", "유기성", "김다성"],
    },
    {
      summary: "images/SmartDesign/A-5-summary.jpg",
      image: "images/SmartDesign/A-5.png",
      image_detail: "images/empty_image.png",
      title: "Duo Brew",
      names: ["김민규", "도재용", "허태선", "최은서"],
    },
    {
      summary: "images/SmartDesign/A-6-summary.jpg",
      image: "images/SmartDesign/A-6-1.jpg",
      image_detail: "images/empty_image.png",
      title: "SENSONIC",
      names: ["한동윤", "김주영", "안윤수", "이예은"],
    },
    {
      summary: "images/SmartDesign/A-7-summary.jpg",
      image: "images/SmartDesign/A-7.png",
      image_detail: "images/empty_image.png",
      title: "DDAKKA",
      names: ["홍준이", "남수정", "윤예진", "정유빈", "최현석"],
    },
    {
      summary: "images/SmartDesign/B-1-summary.jpg",
      // image: "images/SmartDesign/B-1.jpg",
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "NutriLab",
      names: ["권서영", "이민영", "이은재", "최서윤"]
    },
    {
      summary: "images/SmartDesign/B-2-summary.jpg",
      image: "images/SmartDesign/B-2.png",
      image_detail: "images/empty_image.png",
      title: "BuddyFit",
      names: ["손수빈", "정무현", "김은솔", "이지원"],
    },
    {
      summary: "images/SmartDesign/B-3-summary.jpg",
      // image: "images/SmartDesign/B-3.jpg",
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "Ordo",
      names: ["박진선", "안광준", "유예진", "전시현", "최예준"],
    },
    {
      summary: "images/SmartDesign/B-4-summary.jpg",
      image: "images/SmartDesign/B-4.png",
      image_detail: "images/empty_image.png",
      title: "RE:MIN",
      names: ["김미진", "김서연", "나민석", "안아영", "이재호"],
    },
    {
      summary: "images/SmartDesign/B-5-summary.jpg",
      image: "images/SmartDesign/B-5.png",
      image_detail: "images/empty_image.png",
      title: "Zerobin",
      names: ["김동현", "박소원", "이명준", "원혜림", "최의정"],
    },
    {
      summary: "images/SmartDesign/B-6-summary.jpg",
      image: "images/SmartDesign/B-6.png",
      image_detail: "images/empty_image.png",
      title: "Pillmate",
      names: ["안소희", "윤바로", "정민서", "유한나"],
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