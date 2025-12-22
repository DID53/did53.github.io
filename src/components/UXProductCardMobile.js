import { Link } from "react-router-dom";

export default function UXProductCardMobile({ image, title, names, index }) {
  const isFive = Array.isArray(names) && names.length === 5;
  const firstRow = isFive ? names.slice(0, 3) : names;
  const secondRow = isFive ? names.slice(3) : [];

  return (
    <Link to={`/ux-design/${index + 1}`} className="mobile-product-link">
      <div className="mobile-product-card">
        <img src={image} alt={title} className="mobile-product-img" />
        <h3 className="mobile-product-title">{title}</h3>
        <div
          className="mobile-product-names"
          style={{
            display: "flex",
            flexDirection: "column", // 추가: 행들을 세로로 쌓음
            rowGap: "2px", // 줄 간격 최소화 (원하면 0으로)
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            className="mobile-product-names-row"
            style={{ display: "flex", gap: "8px", justifyContent: "center" }}
          >
            {firstRow.map((n, i) => (
              <p key={i} className="mobile-product-name" style={{ margin: 0 }}>
                {n}
              </p>
            ))}
          </div>

          {secondRow.length > 0 && (
            <div
              className="mobile-product-names-row"
              style={{
                display: "flex",
                gap: "4px" /* 두 번째 줄 간격을 더 작게 조정 */,
                justifyContent: "center",
                marginTop: 0 /* 이미 rowGap으로 간격 제어하므로 margin 제거 */,
              }}
            >
              {secondRow.map((n, i) => (
                <p
                  key={i + firstRow.length}
                  className="mobile-product-name"
                  style={{ margin: 0 }}
                >
                  {n}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}