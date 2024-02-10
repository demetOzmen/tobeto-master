import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Menu from "../Menu/Menu";
import "./Education.css";

export default function Education() {
  const [education, setEducation] = useState({
    educationLevel: "",
    department: "",
    graduationYear: "",
    university: "",
    startYear: "",
    isContinuing: false,
  });

  const handleSubmit = (event: React.FormEvent<any>) => {
    event.preventDefault();
    // Form submit logic here
    console.log(education);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | any>) => {
    const { name, value, type, checked } = event.target;
    setEducation((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Container className="bordered">
      <Row>
        <Col className="bordered" md={3} sm={12}>
          <Menu />
        </Col>
        <Col className="bordered" md={9} sm={12}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="educationLevel">
                  <Form.Label className="edc-label">Eğitim Durumu*</Form.Label>
                  <Form.Control
                    as="select"
                    className="edc-select"
                    name="educationLevel"
                    value={education.educationLevel}
                    onChange={handleChange}
                  >
                    <option value="">Seviye Seçiniz</option>
                    <option value="lisans">Lisans</option>
                    <option value="on_lisans">Ön Lisans</option>
                    <option value="yuksek_lisans">Yüksek Lisans</option>
                    <option value="doktora">Doktora</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="university">
                  <Form.Label className="edc-label">Üniversite*</Form.Label>
                  <Form.Control
                    type="text"
                    name="university"
                    value={education.university}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="graduationYear">
                  <Form.Label className="edc-label">Mezuniyet Yılı*</Form.Label>
                  <Form.Control
                    as="select"
                    name="graduationYear"
                    value={education.graduationYear}
                    onChange={handleChange}
                  >
                    <option value="">Mezuniyet Yılınızı Seçiniz</option>
                    {/* Generate graduation year options here */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="department">
                  <Form.Label className="edc-label">Bölüm*</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    value={education.department}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="startYear">
                  <Form.Label className="edc-label">Başlangıç Yılı*</Form.Label>
                  <Form.Control
                    type="text"
                    name="startYear"
                    value={education.startYear}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="isContinuing">
                  <Form.Check
                    type="checkbox"
                    name="isContinuing"
                    label="Devam Ediyorum"
                    checked={education.isContinuing}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button className="button-edc" type="submit">
              Kaydet
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
