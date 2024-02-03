import React, { useState } from "react";
import "./OffCanvas.css";
import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp,faFileAlt,faIndustry,faGlobe,faList,faEye,faClock,} from "@fortawesome/free-solid-svg-icons"; 

// Overlay bileşeni
    /*
    const Overlay = ({ isShowing, toggle }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <div className="overlay" onClick={toggle}></div>,
        document.getElementById("overlay-root")
      )
    : null;
};*/

const Overlay = ({ isShowing, toggle }:any )=> {
    const overlayRoot = document.getElementById("overlay-root");
  
    return isShowing && overlayRoot
      ? ReactDOM.createPortal(
          <div className="overlay" onClick={toggle}></div>,
          overlayRoot
        )
      : null;
  };
  

// OffCanvas bileşeni
const OffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <>
      <button className="detail-button" onClick={togglePanel}>
        DETAY
      </button>
      <Overlay isShowing={isOpen} toggle={togglePanel} />
      <div className={`off-canvas-panel ${isOpen ? "open" : ""}`}>
        {isOpen && (
          <>
            <div className="row">
            <div className="close-button-con">
              <button className="close-button " onClick={togglePanel}>
                ×
              </button>
            </div>
              <div className="" style={{ width: " 10px" }}></div>
              <div className="" style={{ width: " 160px" }}>
                <img
                  src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                  className="edu-img-c"
                  alt="Eğitim Resmi"
                />
              </div>
              
              <div className="col">
                
                <div className=" col-8 edu-title-c ">
                  <div
                    className="row "
                    style={{
                      marginTop: "38px",
                      marginLeft: "3px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      width: "320px",
                    }}
                  >
                    .NET & React Fullstack | Öğrenme Yolculuğu{" "}
                  </div>
                  <div className="row  edu-detail-row-c">
                    <div
                      className="row "
                      style={{
                        marginTop: "8px",
                        marginLeft: "0px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        width: "75px",
                      }}
                    >
                      <div className="video-detail-btn-c">VİDEO</div>
                    </div>

                    <div
                      className="row "
                      style={{
                        marginTop: "8px",
                        marginLeft: "0px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        width: "65px",
                        paddingTop: "1px",
                      }}
                    >
                      <FontAwesomeIcon icon={faClock} className="clock-icon" />
                    </div>
                    <div
                      className="row  time-c"
                      style={{
                        paddingTop: "4px",
                        marginTop: "8px",
                        marginLeft: "0px",
                        fontSize: "14px",
                        fontWeight: "normal",
                        width: "45px",
                      }}
                    >
                      1dk
                    </div>
                    <div
                      className="row  time-c"
                      style={{
                        paddingTop: "7px",
                        marginTop: "8px",
                        marginLeft: "3px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        width: "45px",
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div
                      className="row  time-c"
                      style={{
                        paddingTop: "3px",
                        marginTop: "8px",
                        marginLeft: "3px",
                        fontSize: "14px",
                        fontWeight: "normal",
                        width: "45px",
                      }}
                    >
                      157
                    </div>
                    <button
                      className={`like-button ${liked ? "liked" : ""}`}
                      onClick={toggleLike}
                    >
                      <span className="heart-icon">{liked ? "❤️" : "🤍"}</span>
                      <span className="like-count">{liked ? 51 : 50}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col " style={{ marginTop: "40px" }}>
                <div className="row  " style={{ marginBottom: "25px" }}>
                  <span className="go-edu-btn">EĞİTİME GİT </span>
                </div>
                <Row className="edu-time-detail ">
                  <Col className="ok-icon">
                    {" "}
                    <FontAwesomeIcon icon={faThumbsUp} />
                    &nbsp;Tebrikler,&nbsp;&nbsp;&nbsp;tamamladın!
                  </Col>
                  <Col>100 puan</Col>
                </Row>
              </div>
            </div>
            <Row>
              <Col className="">
                <Row className="c-edu-detail-cont">
                  <table>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon={faList} className="icon" />
                      </td>
                      <td>Kategori</td>
                      <td className="c-edu-detail">
                        İş'te Mükemmellik / Programlama / Programlama
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon={faGlobe} className="icon" />
                      </td>
                      <td>Dili</td>
                      <td className="c-edu-detail">Türkçe</td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon={faFileAlt} className="icon" />
                      </td>
                      <td>Alt Tip</td>
                      <td className="c-edu-detail">Konu Uzmanı Videosu</td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon icon={faIndustry} className="icon" />
                      </td>
                      <td>Üretici Firma</td>
                      <td className="c-edu-detail">Enocta</td>
                    </tr>
                  </table>
                </Row>
              </Col>
            </Row>
            <Row>
              <Row style={{ paddingLeft: "80px", fontWeight: "bold" }}>
                İçerik
              </Row>
              <Row
                style={{
                  paddingLeft: "80px",
                  paddingTop: "20px",
                  textAlign: "left",
                }}
              >
                Bu video, Veri Tabanı ve Erişimi: Microsoft SQL Server Database
                Management eğitiminde aktarılan konular hakkında toparlayıcı ve
                özet bilgilerin yer aldığı bir kapanış videosudur.
              </Row>
            </Row>

          </>
        )}
      </div>
    </>
  );
};

export default OffCanvas;