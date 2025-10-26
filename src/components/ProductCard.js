import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";

export default function ProductCard({ summary, image, image_detail, title, names, video }) {
    const [isOpen, setIsOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // 모달 열릴 때 body 스크롤 막기
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    })
    return (
        <>
            {/* 카드 */}
            <div className="product-card">
                <img
                    src={image}
                    alt={title}
                    className="product-img"
                    onClick={() => {
                        setIsOpen(true);
                        setLoaded(false);
                    }}
                    style={{ cursor: "pointer" }}
                />
                <h3 className="product-title">{title}</h3>
                <div className="product-names">
                    {names.map((n, i) => (
                        <p key={i} className="product-name">{n}</p>
                    ))}
                </div>
            </div>

            {/* 모달 */}
            {isOpen && (
                <div className="modal-overlay" onClick={() => setIsOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                        {/* 스켈레톤 */}
                        {!loaded &&
                            <Skeleton
                                height={700}
                                borderRadius={8}
                            />

                        }

                        {/* 실제 이미지 */}
                        {/* 요약 */}
                        {summary && (
                            <img
                                src={summary}
                                alt={`${title} summary`}
                                className="product-summary"
                            />
                        )}

                        {video && (
                            <div>
                                <video 
                                    src={video} 
                                    className="product-video" 
                                    loop
                                    playsInline
                                    autoPlay
                                    controls
                                />
                            </div>
                        )}

                        <img
                            src={image_detail}
                            alt={title}
                            onLoad={() => setLoaded(true)}
                            className="modal-img"
                            loading="lazy"
                        />
                        <h2>{title}</h2>
                        <p>{names.join(", ")}</p>
                    </div>

                </div>
            )}
        </>
    );
}
