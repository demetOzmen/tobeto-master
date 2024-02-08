import { AsyncCourse } from "../../models/responses/asyncCourse/getAllAsyncCourseResponse";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SortingDropdown from "./SortingDropDown/SortingDropDown";
import asyncCourseService from "../../services/asyncCourseService";
import { Link, NavLink } from "react-router-dom";
import "./MyCourse.css";



function MyCourse() {
 /*Verileri alma */
 const [asyncCourse, setAsyncCourse] = useState<AsyncCourse[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 const fetchAsyncCourses = async () => {
   try {
     const response = await asyncCourseService.getAll();
     setAsyncCourse(response.data.items);
   } catch (error: any) {
     console.error('Veri çekme hatası:', error.message);
     setError('Veri çekme işlemi başarısız oldu');
   } finally {
     setLoading(false);
   }
 };
/*------ */
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (event:any) => {
  // Burada arama işlevselliğinizi tetikleyebilirsiniz.
  // Örneğin, API çağrısı yapabilir veya başka bir state'i güncelleyebilirsiniz.
  console.log(searchTerm);
};

const [activeTab, setActiveTab] = useState("my-all-couses");
const handleTabClick = (tab:any) => {
  setActiveTab(tab);
};

const [selectedInstitution, setSelectedInstitution] = useState("");

const handleChange = (event:any) => {
  setSelectedInstitution(event.target.value);
};



useEffect(() => {
    fetchAsyncCourses();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <>
    <Row>
      <Col md={12}>
        <div className="edus-banner-card">
          <span>Eğitimlerim</span>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        {" "}
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Arama"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} className="search-button">
            🔍
          </button>
        </div>
      </Col>
      <Col md={3}>
        <div className="dropdown-container">
          <select
            value={selectedInstitution}
            onChange={handleChange}
            className="custom-dropdown"
          >
            <option value="">Kurum Seçiniz</option>
            <option value="institution1">İstanbul Kodluyor</option>
            {/* Diğer kurumlarınızı buraya ekleyin */}
          </select>
        </div>
      </Col>
      <Col md={3}>
        <div style={{ marginRight: "11px" }}>
          <SortingDropdown />
        </div>
      </Col>
    </Row>
    <Row className="courses-tabs">
      <div>
        <ul className="c-tab-list">
          <li
            className={`c-tab-list-item ${
              activeTab === "my-all-couses" ? "active" : ""
            }`}
            onClick={() => handleTabClick("my-all-couses")}
          >
            Tüm&nbsp;Eğitimlerim
          </li>
          <li
            className={`c-tab-list-item ${
              activeTab === "cont-courses" ? "active" : ""
            }`}
            onClick={() => handleTabClick("cont-courses")}
          >
            Devam&nbsp;Ettiklerim
          </li>
          <li
            className={`c-tab-list-item ${
              activeTab === "completed-edu" ? "active" : ""
            }`}
            onClick={() => handleTabClick("completed-edu")}
          >
            Tamamladıklarım
          </li>
        </ul>
        <div className="c-tab-content">
          {activeTab === "my-all-couses" && (
            <div className="tab-my-all-couses">
              <div className="edu-area"> {/* tüm eğitimler*/}
                <Row>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          )}
          {activeTab === "cont-courses" && (
            <div className="tab-cont-courses">{/* devam eden eğitimler*/}
              <div className="edu-area"> 
                <Row>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          )}
          {activeTab === "completed-edu" && (
            <div className="tab-completed-edu">
              <div className="edu-area">{/* tamamlanan eğitimler*/}
                <Row>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>{" "}
                  <Col md={3} xs={12}>
                    {" "}
                    <Link to="/activity" className="edu-card-link ">
                      <div className="edu-card ">
                        <div className="edu-card-image">
                          <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
                        </div>
                        <div className="edu-card-body">
                          <h5 className="edu-card-title">
                            .NET & React Fullstack | Öğrenme Yolculuğu
                          </h5>
                          <p className="edu-card-date">21 Eylül 2023 15:20</p>
                          <button className="edu-card-button">
                            Eğitime Git
                          </button>
                        </div>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        </div>
      </div>
    </Row>
  </>
  );

}
export default MyCourse;