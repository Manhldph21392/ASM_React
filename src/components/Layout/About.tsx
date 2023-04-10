import React from "react";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-me pt-4 pt-md-0">
                <div className="title-box-2">
                  <h5 className="title-left">About me</h5>
                </div>
                <p className="lead">
                Hiện tại, mình đang là sinh viên kì 5 tại trường FPT Polytechnic. Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...
                </p>
                
                <p className="lead">
                Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-sm-6 col-md-5">
                  <div className="about-img">
                    <img
                      src="/src/assets/img/my.jpg"
                      className="img-fluid rounded b-shadow-a rounded-circle"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-7">
                  <div className="about-info">
                    <p>
                      <span className="title-s">Name: </span>{" "}
                      <span>Lưu Đức Mạnh</span>
                    </p>
                    {/* <p>
                      <span className="title-s">Profile: </span>{" "}
                      <span>full stack developer</span>
                    </p> */}
                    <p>
                      <span className="title-s">Email: </span>{" "}
                      <span>Manhld21082003@gmail.com</span>
                    </p>
                    <p>
                      <span className="title-s">Phone: </span>{" "}
                      <span>0904798514</span>
                    </p>
                    <p>
                      <span className="title-s">Địa Chỉ: </span>{" "}
                      <span>Cầu Giấy - Hà Nội</span>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
