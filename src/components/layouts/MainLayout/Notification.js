import React from "react";
import { IoCloseOutline, IoVolumeMediumOutline } from "react-icons/io5";

function Notification({ isMenuOpen }) {
  return (
    <>
      <div className={isMenuOpen ? "list active" : "list"}>
        <ul>
          <li>
            <h3>전체 알림</h3>
            <div>
              <button className="sm">전체읽음</button>
              <button className="sm">읽은알림 삭제</button>
            </div>
          </li>
          <li>
            <div className="vol-icon">
              <i>
                <IoVolumeMediumOutline />
              </i>
            </div>
            <div className="gnb_info">
              <h6>제목내용</h6>
              <p>내용이 여기에 나옴니다.</p>
            </div>
            <div className="listDel">
              <i>
                <IoCloseOutline />
              </i>
            </div>
          </li>
          <li>
            <span>전체보기</span>
            <p style={{ display: "none" }}>최근 알람이 없습니다.</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Notification;
