import { useParams } from "react-router-dom";

export default function SmartDesignDetail() {
    const data = [
        {
            id: 1,
            image: "images/empty_image.png",
        },
        {
            id: 2,
            image: "images/empty_image.png",
        },
        {
            id: 3,
            image: "images/empty_image.png",
        },
        {
            id: 4,
            image: "images/SmartDesign/product_mobile_4.png",
        },
        {
            id: 5,
            image: "images/empty_image.png",
        },
        {
            id: 6,
            image: "images/empty_image.png",
        },
        {
            id: 7,
            image: "images/empty_image.png",
        },
        {
            id: 8,
            image: "images/empty_image.png",
        },
        {
            id: 9,
            image: "images/empty_image.png",
        },
        {
            id: 10,
            image: "images/empty_image.png",
        },
        {
            id: 11,
            image: "images/empty_image.png",
        },
        {
            id: 12,
            image: "images/empty_image.png",
        },
        {
            id: 13,
            image: "images/empty_image.png",
        },
    ];

    const { id } = useParams(); // URL의 /SmartDesign/:id 에서 id 가져오기
    const item = data[id - 1]; // id는 1부터 시작한다고 가정

    if (!item) return <div>해당 작품을 찾을 수 없습니다.</div>;

    return (
        <div className="smart-detail">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="detail-img" />
        </div>
    );
}
