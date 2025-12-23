import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

export default function ProductCard({
  summary,
  image,
  image_detail,
  title,
  names,
  video1,
  video2,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // 모달 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
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
            <p key={i} className="product-name">
              {n}
            </p>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* 스켈레톤 */}
            {!loaded && <Skeleton height={700} borderRadius={8} />}

            {video1 ? (
              <div>
                <video
                  src={video1}
                  className="product-video"
                  loop
                  playsInline
                  autoPlay
                  controls
                />
              </div>
            ) : (
              /* video가 없을 때만 이미지 표시 */
              image && (
                <img
                  src={image}
                  alt={`${title} image`}
                  className="product-image"
                />
              )
            )}

            {/* 요약 */}
            {summary && (
              <img
                src={summary}
                alt={`${title} summary`}
                className="product-summary"
                onLoad={() => setLoaded(true)}
              />
            )}

            {image_detail && (<img
              src={image_detail}
              alt={title}
              onLoad={() => setLoaded(true)}
              className="modal-img"
              loading="lazy"
            />
            )}

            {
              video2 && (<div>
                <video
                  src={video2}
                  className="product-video"
                  loop
                  playsInline
                  autoPlay
                  controls
                />
              </div>)
            }
          </div>
        </div>
      )}
    </>
  );
}
