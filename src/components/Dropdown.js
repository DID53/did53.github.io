import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // 드롭다운 메뉴 항목을 클릭했을 때 메뉴가 닫히도록 하는 함수
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const listItemStyle = {
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    color: 'black', // Link의 기본 파란색을 초기화
    textDecoration: 'none', // Link의 기본 밑줄을 제거
    display: 'block', // li 영역 전체를 클릭할 수 있도록
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleDropdown} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <FiMenu size={20} />
      </button>

      {isOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '8px',
            listStyle: 'none',
            padding: '0',
            margin: 0,
            minWidth: '150px', // 3. 고정 너비(width) 대신 최소 너비(minWidth) 사용
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            overflow: 'hidden'
          }}
        >

          <li onClick={handleLinkClick}>
            <Link to="/smart-design" style={listItemStyle}>
              Smart Design
            </Link>
          </li>
          <hr style={{ margin: '0', border: 'none', borderTop: '1px solid #eee' }} />
          <li onClick={handleLinkClick}>
            <Link to="/" style={listItemStyle}>
              Capstone Design
            </Link>
          </li>
          <hr style={{ margin: '0', border: 'none', borderTop: '1px solid #eee' }} />
          <li onClick={handleLinkClick}>
            <Link to="/" style={listItemStyle}>
              UX Design
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;