import { useParams } from "react-router-dom";

export default function CapstoneDesignDetail() {
  const data = [
    {
      id: 1,
      image: "images/CapstoneDesign/A-1.png",
      summary: "images/CapstoneDesign/A-1-summary.png",
      image_detail: "images/CapstoneDesign/A-1-detail.jpg",
    },
    {
      id: 2,
      image: "images/CapstoneDesign/A-2.jpg",
      summary: "images/CapstoneDesign/A-2-summary.png",
      image_detail: "images/empty_image.png",
    },
    {
      id: 3,
      image: "images/CapstoneDesign/A-3.png",
      summary: "images/CapstoneDesign/A-3-summary.png",
      image_detail: "images/CapstoneDesign/A-3-detail.png",
      video: "videos/CapstoneDesign/A3.mp4",
    },
    {
      id: 4,
      image: "images/CapstoneDesign/A-4.jpg",
      summary: "images/CapstoneDesign/A-4-summary.png",
      image_detail: "images/CapstoneDesign/A-4-detail.png",
    },
    {
      id: 5,
      image: "images/CapstoneDesign/A-5.png",
      summary: "images/CapstoneDesign/A-5-summary.png",
    },
    {
      id: 6,
      image: "images/CapstoneDesign/A-6.jpg",
      summary: "images/CapstoneDesign/A-6-summary.png",
      image_detail: "images/CapstoneDesign/A-6-detail.jpg",
    },
    {
      id: 7,
      image: "images/CapstoneDesign/A-7.png",
      summary: "images/CapstoneDesign/A-7-summary.png",
    },
    {
      id: 8,
      image: "images/CapstoneDesign/B-1.png",
      summary: "images/CapstoneDesign/B-1-summary.png",
      image_detail: "images/CapstoneDesign/B-1-detail.jpg",
    },
    {
      id: 9,
      image: "images/CapstoneDesign/B-2.png",
      summary: "images/CapstoneDesign/B-2-summary.png",
      image_detail: "images/CapstoneDesign/B-2-detail.jpg",
    },
    {
      id: 10,
      image: "images/CapstoneDesign/B-3.png",
      summary: "images/CapstoneDesign/B-3-summary.png",
    },
    {
      id: 11,
      image: "images/CapstoneDesign/B-4.png",
      summary: "images/CapstoneDesign/B-4-summary.png",
      image_detail: "images/CapstoneDesign/B-4-detail.jpg",
    },
    {
      id: 12,
      image: "images/CapstoneDesign/B-5.jpg",
      summary: "images/CapstoneDesign/B-5-summary.png",
      image_detail: "images/CapstoneDesign/B-5-detail.png",
    },
    {
      id: 13,
      image: "images/CapstoneDesign/B-6.png",
      summary: "images/CapstoneDesign/B-6-summary.png",
      image_detail: "images/CapstoneDesign/B-6-detail.jpg",
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
