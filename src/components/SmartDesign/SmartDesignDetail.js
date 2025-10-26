import { useParams } from "react-router-dom";

export default function SmartDesignDetail() {
    const data = [
        {
            id: 1,
            title: "제품명1",
            image: "images/SmartDesign/product_mobile_1.png",
        },
        {
            id: 2,
            title: "1440 판넬",
            image: "images/SmartDesign/product_mobile_2.png",
        },
        {
            id: 3,
            title: "Ziggleit",
            image: "images/SmartDesign/product_mobile_3.png",
        },
        {
            id: 4,
            title: "제품명4",
            image: "images/SmartDesign/product_mobile_4.png",
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
