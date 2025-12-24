import { useNavigate, Link } from "react-router-dom";
import ProductCard from "../ProductCard";

export default function UXDesign() {
  const navigate = useNavigate();
  const data = [
    {
      image: "images/UXDesign/A-1.jpg",
      summary: "images/UXDesign/A-1-summary.png",
      image_detail: "images/UXDesign/A-1-detail.jpg",
      video1: "videos/UXDesign/A1.mp4",
      video2: "videos/UXDesign/A11.mp4",
      title: "FISH COCO",
      names: ["김고은", "남한별", "유지승", "이연경"],
    },
    {
      image: "images/UXDesign/A-2.png",
      summary: "images/UXDesign/A-2-summary.png",
      video1: "videos/UXDesign/A2.mp4",
      video2: "videos/UXDesign/A21.mp4",
      title: "ZEN Extreme",
      names: ["우요한", "안예은", "정혜원", "허지운"],
    },
    {
      image: "images/UXDesign/A-3.png",
      summary: "images/UXDesign/A-3-summary.png",
      image_detail: "images/UXDesign/A-3-detail.png",
      video1: "videos/UXDesign/A3.mp4",
      video2: "videos/UXDesign/A31.mp4",
      title: "Halo",
      names: ["소민지", "이혜진", "최새롬", "황지해"],
    },
    {
      image: "images/UXDesign/A-4.png",
      summary: "images/UXDesign/A-4-summary.png",
      image_detail: "images/UXDesign/A-4-detail.jpg",
      video1: "videos/UXDesign/A4.mp4",
      video2: "videos/UXDesign/A41.mp4",
      title: "ORBIT",
      names: ["정다원", "김희서", "박지우", "유기성", "김다성"],
    },
    {
      image: "images/UXDesign/A-5.png",
      summary: "images/UXDesign/A-5-summary.png",
      video1: "videos/UXDesign/A5.mp4",
      video2: "videos/UXDesign/A51.mp4",
      title: "SIRONA",
      names: ["김민규", "도재용", "허태선", "최은서"],
    },
    {
      image: "images/UXDesign/A-6.jpg",
      summary: "images/UXDesign/A-6-summary.png",
      image_detail: "images/UXDesign/A-6-detail.jpg",
      video1: "videos/UXDesign/A6.mp4",
      video2: "videos/UXDesign/A61.mp4",
      title: "MYCOO",
      names: ["한동윤", "김주영", "안윤수", "이예은"],
    },
    {
      image: "images/UXDesign/A-7.png",
      summary: "images/UXDesign/A-7-summary.png",
      image_detail: "images/UXDesign/A-7-detail.jpg",
      video1: "videos/UXDesign/A7.mp4",
      video2: "videos/UXDesign/A71.mp4",
      title: "FUVE",
      names: ["홍준이", "남수정", "윤예진", "정유빈", "최현석"],
    },
    {
      image: "images/UXDesign/B-1.png",
      summary: "images/UXDesign/B-1-summary.png",
      video1: "videos/UXDesign/B1.mp4",
      video2: "videos/UXDesign/B11.mp4",
      title: "SOLICARE",
      names: ["권서영", "이민영", "이은재", "최서윤"],
    },
    {
      image: "images/UXDesign/B-2.png",
      summary: "images/UXDesign/B-2-summary.png",
      image_detail: "images/UXDesign/B-2-detail.jpg",
      video1: "videos/UXDesign/B2.mp4",
      video2: "videos/UXDesign/B21.mp4",
      video: "videos/UXDesign/B2.mp4",
      title: "BBIBOT",
      names: ["손수빈", "정무현", "김은솔", "이지원"],
    },
    {
      image: "images/UXDesign/B-3.png",
      summary: "images/UXDesign/B-3-summary.png",
      video1: "videos/UXDesign/B3.mp4",
      video2: "videos/UXDesign/B31.mp4",
      title: "Vita Bell",
      names: ["박진선", "안광준", "유예진", "전시현", "최예준"],
    },
    {
      image: "images/UXDesign/B-4.png",
      summary: "images/UXDesign/B-4-summary.png",
      video1: "videos/UXDesign/B4.mp4",
      video2: "videos/UXDesign/B41.mp4",
      title: "NEULLING",
      names: ["김미진", "김서연", "나민석", "안아영", "이재호"],
    },
    {
      image: "images/UXDesign/B-5.png",
      summary: "images/UXDesign/B-5-summary.png",
      video1: "videos/UXDesign/B5.mp4",
      video2: "videos/UXDesign/B51.mp4",
      title: "Walkmate",
      names: ["김동현", "박소원", "이명준", "원혜림", "최의정"],
    },
    {
      image: "images/UXDesign/B-6.jpg",
      summary: "images/UXDesign/B-6-summary.png",
      video1: "videos/UXDesign/B6.mp4",
      video2: "videos/UXDesign/B61.mp4",
      title: "VORA",
      names: ["안소희", "윤바로", "정민서", "유한나"],
    },
  ];

  return (
    <div className="main">
      <img className="intro-img" src="images/UXDesign/intro.png" />
      <div className="products-grid">
        {data.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
