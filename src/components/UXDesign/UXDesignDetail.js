import { useParams } from "react-router-dom";

export default function UXDesignDetail() {
    const data = [
        {
            id: 1,
            title: "A1",
            image: "images/SmartDesign/product_mobile_1.png",
        },
        {
            id: 2,
            title: "A2",
            image: "images/SmartDesign/product_mobile_2.png",
        },
        {
            id: 3,
            title: "A3",
            image: "images/SmartDesign/product_mobile_3.png",
        },
        {
            id: 4,
            title: "A4",
            image: "images/SmartDesign/product_mobile_4.png",
        },
        {
            id: 5,
            title: "A5",
            image: "images/SmartDesign/product_mobile_1.png",
        },
        {
            id: 6,
            title: "A6",
            image: "images/SmartDesign/product_mobile_2.png",
        },
        {
            id: 7,
            title: "A7",
            image: "images/SmartDesign/product_mobile_3.png",
        },
        {
            id: 8,
            title: "B1",
            image: "images/SmartDesign/product_mobile_4.png",
        },
        {
            id: 9,
            title: "B2",
            image: "images/SmartDesign/product_mobile_1.png",
        },
        {
            id: 10,
            title: "B3",
            image: "images/SmartDesign/product_mobile_2.png",
        },
        {
            id: 11,
            title: "B4",
            image: "images/SmartDesign/product_mobile_3.png",
        },
        {
            id: 12,
            title: "B5",
            image: "images/SmartDesign/product_mobile_4.png",
        },
        {
            id: 13,
            title: "B6",
            image: "images/SmartDesign/product_mobile_1.png",
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
