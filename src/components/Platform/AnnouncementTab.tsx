import { faCalendar, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ShowMoreAnc } from './ShowMoreAnc'

type Props = {}

export const AnnouncementTab = (props: Props) => {
  return (
    <>
    <Row>
                          <Col>
                            <Row className="anc-row">
                           
                                <Col className="anc-card">
                                  <Row>
                                    <Col>
                                    <div className="anc-title">
                                      Duyuru
                                      <span className="anc-ik">
                                        İstanbul Kodluyor
                                      </span></div>
                                      <br></br>
                                      <span className="anc-card-check">
                                        Ocak Ayı Tercih Formu Bilgilendirmesi
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                      </span>
                                      <Row className="anc-date-row">
                                        <Col className="anc-date">
                                        <FontAwesomeIcon icon={faCalendar} /> 12.01.2024{" "}
                                        </Col>
                                        <Col className="anc-link ">
                                          {" "}
                                          <Link
                                            to="/announcement"
                                            className="anc-link "
                                          >
                                            Devamını Oku
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col className="anc-card">
                                  <Row>
                                    <Col>
                                    <div className="anc-title">
                                      Duyuru{" "}
                                      <span className="anc-ik">
                                        İstanbul Kodluyor
                                      </span></div>
                                      <br></br>
                                      <span className="anc-card-check">
                                        Ocak Ayı Tercih Formu Bilgilendirmesi
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                      </span>
                                      <Row className="anc-date-row">
                                        <Col className="anc-date">
                                        <FontAwesomeIcon icon={faCalendar} /> 12.01.2024{" "}
                                        </Col>
                                        <Col className="anc-link ">
                                          {" "}
                                          <Link
                                            to="/announcement"
                                            className="anc-link "
                                          >
                                            Devamını Oku
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col className="anc-card">
                                  <Row>
                                    <Col>
                                    <div className="anc-title">
                                      Duyuru{" "}
                                      <span className="anc-ik">
                                        İstanbul Kodluyor
                                      </span></div>
                                      <br></br>
                                      <span className="anc-card-check">
                                        Ocak Ayı Tercih Formu Bilgilendirmesi
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                      </span>
                                      <Row className="anc-date-row">
                                        <Col className="anc-date">
                                        <FontAwesomeIcon icon={faCalendar} /> 12.01.2024{" "}
                                        </Col>
                                        <Col className="anc-link ">
                                          {" "}
                                          <Link
                                            to="/announcement"
                                            className="anc-link "
                                          >
                                            Devamını Oku
                                          </Link>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                                
                                
                                <ShowMoreAnc/>

                            </Row>
                          </Col>
                        </Row>
                      
    </>
  )
}