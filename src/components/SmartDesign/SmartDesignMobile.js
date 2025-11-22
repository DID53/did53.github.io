// SmartDesignMobile.js
import "../SubjectMobile.css";
import ProductCardMobile from "../ProductCardMobile";

export default function SmartDesignMobile() {
  const data = [
    {
      image: "images/empty_image.png",
      title: "PURIPOT",
      names: ["김고은", "남한별", "유지승", "이연경"],
    },
    {
      image: "images/empty_image.png",
      title: "POMI",
      names: ["우요한", "안예은", "정혜원", "허지운"],
    },
    {
      // summary: "images/SmartDesign/product-summary_3.png",
      image: "images/empty_image.png",
      title: "Ziggleit",
      names: ["최새롬", "이혜진", "소민지", "황지해"],
      // video: "videos/product-video_3.mp4"
    },
    {
      // summary: "images/SmartDesign/product-summary_4.png",
      image: "images/SmartDesign/product-card_4.png",
      title: "WAGU",
      names: ["정다원", "김희서", "박지우", "유기성", "김다성"],
    },
    {
      image: "images/empty_image.png",
      title: "Duo Brew",
      names: ["김민규", "도재용", "허태선", "최은서"],
    },
    {
      image: "images/empty_image.png",
      title: "SENSONIC",
      names: ["한동윤", "김주영", "안윤수", "이예은"],
    },
    {
      image: "images/empty_image.png",
      title: "DDAKKA",
      names: ["홍준이", "남수정", "윤예진", "정유빈", "최현석"],
    },
    {
      image: "images/empty_image.png",
      title: "NutriLab",
      names: ["권서영", "이민영", "이은재", "최서윤"]
    },
    {
      image: "images/empty_image.png",
      title: "BuddyFit",
      names: ["손수빈", "정무현", "김은솔", "이지원"],
    },
    {
      image: "images/empty_image.png",
      title: "Ordo",
      names: ["박진선", "안광준", "유예진", "전시현", "최예준"],
    },
    {
      image: "images/empty_image.png",
      title: "RE:MIN",
      names: ["김미진", "김서연", "나민석", "안아영", "이재호"],
    },
    {
      image: "images/empty_image.png",
      title: "Zerobin",
      names: ["김동현", "박소원", "이명준", "원혜림", "최의정"],
    },
    {
      image: "images/empty_image.png",
      title: "Pillmate",
      names: ["안소희", "윤바로", "정민서", "유한나"],
    },
  ];

  return (
    <div className="mobile-main">
      <img
        className="intro-img"
        src="images/SmartDesign/intro_mobile.png"
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
