import React, { useState, useEffect } from "react";

const Hero = () => {
  const [typedItems, setTypedItems] = useState([]); // State để lưu trữ danh sách các từ cần hiển thị
  const [currentItemIndex, setCurrentItemIndex] = useState(0); // State để lưu trữ vị trí hiện tại của từ đang hiển thị

  useEffect(() => {
    // Mảng các từ cần hiển thị
    const items = [
      "Designer",
      " Front End Developer",
    ];
    setTypedItems(items); // Cập nhật state typedItems với danh sách các từ cần hiển thị
  }, []);

  useEffect(() => {
    // Hàm thay đổi từ đang hiển thị sau mỗi 2 giây
    const changeTypedItem = setInterval(() => {
      setCurrentItemIndex((prevIndex) => {
        // Tăng vị trí hiện tại lên 1 đơn vị, nếu vượt quá độ dài của mảng thì quay lại vị trí đầu tiên
        return (prevIndex + 1) % typedItems.length;
      });
    }, 5000);

    return () => {
      clearInterval(changeTypedItem); // Xóa interval khi component unmount
    };
  }, [typedItems]);

  return (
    <div>
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(src/assets/img/icon.jpg)" }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title mb-4">I'm Luu Duc Manh</h1>
              <h2 className="td2">I'm {typedItems[currentItemIndex]}</h2>
            </div>
          </div>
          <div className="image-container">
            <img
              src="./src/assets/img/face1.png"
              alt="Your Image"
              className="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
