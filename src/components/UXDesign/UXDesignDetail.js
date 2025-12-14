import { useParams } from "react-router-dom";

export default function UXDesignDetail() {
  const data = [
    {
      id: 1,
      image: "images/UXDesign/A-1.jpg",
      summary: "images/UXDesign/A-1-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 2,
      image: "images/UXDesign/A-2.png",
      summary: "images/UXDesign/A-2-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 3,
      image: "images/UXDesign/A-3.png",
      summary: "images/UXDesign/A-3-summary.png",
      image_detail: "images/UXDesign/A-3-detail.png",
    },
    {
      id: 4,
      image: "images/UXDesign/A-4.png",
      summary: "images/UXDesign/A-4-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 5,
      image: "images/UXDesign/A-5.png",
      summary: "images/UXDesign/A-5-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 6,
      image: "images/UXDesign/A-6.jpg",
      summary: "images/UXDesign/A-6-summary.png",
      image_detail: "images/UXDesign/A-6-detail.jpg",
    },
    {
      id: 7,
      image: "images/UXDesign/A-7.png",
      summary: "images/UXDesign/A-7-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 8,
      image: "images/UXDesign/B-1.png",
      summary: "images/UXDesign/B-1-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 9,
      image: "images/UXDesign/B-2.png",
      summary: "images/UXDesign/B-2-summary.png",
      image_detail: "images/UXDesign/B-2-detail.jpg",
    },
    {
      id: 10,
      image: "images/UXDesign/B-3.png",
      summary: "images/UXDesign/B-3-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 11,
      image: "images/UXDesign/B-4.png",
      summary: "images/UXDesign/B-4-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 12,
      image: "images/UXDesign/B-5.png",
      summary: "images/UXDesign/B-5-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 13,
      image: "images/UXDesign/B-6.jpg",
      summary: "images/UXDesign/B-6-summary.png",
      image_detail: "images/empty_image.png",
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
