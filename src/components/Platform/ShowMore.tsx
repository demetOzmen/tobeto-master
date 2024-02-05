import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = {};

export const ShowMore = (props: Props) => {
  return (
    <>
      <Row className="all-edu-btn  ">
        <div className="p-row-container">
          <Link to="/my-course" className="load-more-btn">
            <FontAwesomeIcon icon={faChevronRight} className="p-button-icon" />
            <span>Daha Fazla Göster</span>
          </Link>
        </div>
      </Row>
    </>
  );
};
