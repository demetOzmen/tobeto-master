import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import OffCanvas from "../../pages/Activity/OffCanvas/OffCanvas";

type Props = {};

export const VideoDetails = (props: Props) => {
  return (
    <>
      <Col className="custom-right">
        <div className="video-area-cont">
          <Row className="video-area">
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/Hgqqoycoh9c"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Row>
          <Row>
            <Col>
              <Row className="video-name">name</Row>
              <Row className="video-time-detail">
                <Col>title</Col>
                <Col>100 puan</Col>
                {/*burası kalsın şimdilik yeni tablo eklenmesi lazım */}
                <Col className="ok-icon">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  &nbsp;Tebrikler,&nbsp;&nbsp;&nbsp;tamamladın!
                  {/*burası kalsın şimdilik yeni tablo eklenmesi lazım */}
                </Col>
              </Row>
            </Col>

            <Col className="video-detail-btn">
              {/* buraya da apiden çektiğimiz verileri göndereceğiz ve oradaki alanları dolduracağız */}
              <OffCanvas
              /*className={
              isOffCanvasOpen ? "offcanvas-open" : ""
              }
              showButton={showButton}
              setShowButton={setShowButton}*/
              />
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};
