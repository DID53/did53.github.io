import { useParams } from "react-router-dom";

export default function SmartDesignDetail() {
  const data = [
    {
      id: 1,
      image: "images/SmartDesign/A-1.jpg",
      summary: "images/SmartDesign/A-1-summary.png",
      image_detail: "images/SmartDesign/A-1-detail.png",
    },
    {
      id: 2,
      image: "images/SmartDesign/A-2.jpg",
      summary: "images/SmartDesign/A-2-summary.png",
    },
    {
      id: 3,
      image: "images/SmartDesign/A-3.png",
      summary: "images/SmartDesign/A-3-summary.png",
      image_detail: "images/SmartDesign/A-3-detail.jpg",
    },
    {
      id: 4,
      image: "images/SmartDesign/A-4.jpg",
      summary: "images/SmartDesign/A-4-summary.png",
      image_detail: "images/SmartDesign/product_detail_4.png",
    },
    {
      id: 5,
      image: "images/SmartDesign/A-5.png",
      summary: "images/SmartDesign/A-5-summary.png",
    },
    {
      id: 6,
      image: "images/SmartDesign/A-6.jpg",
      summary: "images/SmartDesign/A-6-summary.png",
      image_detail: "images/SmartDesign/A-6-detail.jpg",
    },
    {
      id: 7,
      image: "images/SmartDesign/A-7.png",
      summary: "images/SmartDesign/A-7-summary.png",
    },
    {
      id: 8,
      image: "images/empty_image.png",
      summary: "images/SmartDesign/B-1-summary.png",
      image_detail: "images/SmartDesign/B-1-detail.png",
    },
    {
      id: 9,
      image: "images/SmartDesign/B-2.png",
      summary: "images/SmartDesign/B-2-summary.png",
      image_detail: "images/SmartDesign/B-2-detail.png",
    },
    {
      id: 10,
      image: "images/empty_image.png",
      summary: "images/SmartDesign/B-3-summary.png",
    },
    {
      id: 11,
      image: "images/SmartDesign/B-4.png",
      summary: "images/SmartDesign/B-4-summary.png",
      image_detail: "images/SmartDesign/B-4-detail.jpg",
    },
    {
      id: 12,
      image: "images/SmartDesign/B-5.png",
      summary: "images/SmartDesign/B-5-summary.png",
      image_detail: "images/SmartDesign/B-5-detail.png",
    },
    {
      id: 13,
      image: "images/SmartDesign/B-6.png",
      summary: "images/SmartDesign/B-6-summary.png",
      image_detail: "images/SmartDesign/B-6-detail.png",
    },
  ];

  const { id } = useParams(); // URL의 /SmartDesign/:id 에서 id 가져오기
  const item = data[id - 1]; // id는 1부터 시작한다고 가정

  if (!item) return <div>해당 작품을 찾을 수 없습니다.</div>;

  return (
    <div className="smart-detail">
      {item.video ? (
        <video
          src={item.video}
          className="detail-video"
          controls
          autoPlay
          loop
          playsInline
        />
      ) : (
        item.image && (
          <img
            src={item.image}
            alt={item.title || `smart-design-${item.id}`}
            className="detail-img"
          />
        )
      )}
      <img src={item.summary} className="detail-summary" />
      <img src={item.image_detail} className="detail-image_detail" />
    </div>
  );
}
