import { useNavigate, Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function UXDesign() {
  const navigate = useNavigate();
  const data = [
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "FISH COCO",
      names: ["김고은", "남한별", "유지승", "이연경"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "ZEN Extreme",
      names: ["우요한", "안예은", "정혜원", "허지운"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "Halo",
      names: ["소민지", "이혜진", "최새롬", "황지해"],
      // video: "videos/product-video_3.mp4"
    },
    {
      // summary: "images/CapstoneDesign/product-summary_4.png",
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "ORBIT",
      names: ["정다원", "김희서", "박지우", "유기성", "김다성"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "SIRONA",
      names: ["김민규", "도재용", "허태선", "최은서"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "MYCOO",
      names: ["한동윤", "김주영", "안윤수", "이예은"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "FUVE",
      names: ["홍준이", "남수정", "윤예진", "정유빈", "최현석"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "SOLICARE",
      names: ["권서영", "이민영", "이은재", "최서윤"]
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "BBIBOT",
      names: ["손수빈", "정무현", "김은솔", "이지원"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "Vita Bell",
      names: ["박진선", "안광준", "유예진", "전시현", "최예준"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "NEULLING",
      names: ["김미진", "김서연", "나민석", "안아영", "이재호"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "Walkmate",
      names: ["김동현", "박소원", "이명준", "원혜림", "최의정"],
    },
    {
      image: "images/empty_image.png",
      image_detail: "images/empty_image.png",
      title: "VORA",
      names: ["안소희", "윤바로", "정민서", "유한나"],
    },
  ];

  return (
    <div className="main">
        <img className="intro-img" src="images/UXDesign/intro.png"/>
        <div className="products-grid">
          {data.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
    </div>
  );
}
