import "../SubjectMobile.css";
import CapstoneProductCardMobile from "../CapstoneProductCardMobile";

export default function CapstoneDesignMobile() {
  const data = [
    {
      image: "images/CapstoneDesign/A-1.png",
      summary: "images/CapstoneDesign/A-1-summary.png",
      image_detail: "images/CapstoneDesign/A-1-detail.jpg",
      title: "Bean's Lab",
      names: ["김고은", "남한별", "유지승", "이연경"],
    },
    {
      image: "images/CapstoneDesign/A-2.jpg",
      summary: "images/CapstoneDesign/A-2-summary.png",
      title: "Fressence",
      names: ["우요한", "안예은", "정혜원", "허지운"],
    },
    {
      image: "images/CapstoneDesign/A-3.png",
      summary: "images/CapstoneDesign/A-3-summary.png",
      image_detail: "images/CapstoneDesign/A-3-detail.png",
      title: "Second Aid",
      names: ["소민지", "이혜진", "최새롬", "황지해"],
      video: "videos/CapstoneDesign/A3.mp4",
    },
    {
      image: "images/CapstoneDesign/A-4.jpg",
      summary: "images/CapstoneDesign/A-4-summary.png",
      title: "SOOINK",
      names: ["정다원", "김희서", "박지우", "유기성", "김다성"],
    },
    {
      image: "images/CapstoneDesign/A-5.png",
      summary: "images/CapstoneDesign/A-5-summary.png",
      title: "INGIX",
      names: ["김민규", "도재용", "허태선", "최은서"],
    },
    {
      image: "images/CapstoneDesign/A-6.jpg",
      summary: "images/CapstoneDesign/A-6-summary.png",
      image_detail: "images/CapstoneDesign/A-6-detail.jpg",
      title: "Lithium Shield",
      names: ["한동윤", "김주영", "안윤수", "이예은"],
    },
    {
      image: "images/CapstoneDesign/A-7.png",
      summary: "images/CapstoneDesign/A-7-summary.png",
      title: "Bean's Lab",
      names: ["홍준이", "남수정", "윤예진", "정유빈", "최현석"],
    },
    {
      image: "images/CapstoneDesign/B-1.png",
      summary: "images/CapstoneDesign/B-1-summary.png",
      title: "Fludia",
      names: ["권서영", "이민영", "이은재", "최서윤"],
    },
    {
      image: "images/CapstoneDesign/B-2.png",
      summary: "images/CapstoneDesign/B-2-summary.png",
      image_detail: "images/CapstoneDesign/B-2-detail.jpg",
      title: "Whaloo",
      names: ["손수빈", "정무현", "김은솔", "이지원"],
    },
    {
      image: "images/CapstoneDesign/B-3.png",
      summary: "images/CapstoneDesign/B-3-summary.png",
      title: "Sting Raynis",
      names: ["박진선", "안광준", "유예진", "전시현", "최예준"],
    },
    {
      image: "images/CapstoneDesign/B-4.png",
      summary: "images/CapstoneDesign/B-4-summary.png",
      image_detail: "images/CapstoneDesign/B-4-detail.jpg",
      title: "MoA Desk",
      names: ["김미진", "김서연", "나민석", "안아영", "이재호"],
    },
    {
      image: "images/CapstoneDesign/B-5.jpg",
      summary: "images/CapstoneDesign/B-5-summary.png",
      image_detail: "images/CapstoneDesign/B-5-detail.png",
      title: "FUN MOTION",
      names: ["김동현", "박소원", "이명준", "원혜림", "최의정"],
    },
    {
      image: "images/CapstoneDesign/B-6.png",
      summary: "images/CapstoneDesign/B-6-summary.png",
      image_detail: "images/CapstoneDesign/B-6-detail.jpg",
      title: "SEALJT",
      names: ["안소희", "윤바로", "정민서", "유한나"],
    },
  ];

  return (
    <div className="mobile-main">
      <img
        className="intro-img"
        src="images/CapstoneDesign/intro_mobile.png"
        alt="intro"
      />

      <div className="mobile-products-grid">
        {data.map((item, idx) => (
          <CapstoneProductCardMobile key={idx} index={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
