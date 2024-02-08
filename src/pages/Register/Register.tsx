import React, { useState, FormEvent } from "react";
import "./Register.css";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, UserCredentials } from "../../store/reducers/userReducer";
import tokenService from "../../core/services/tokenService";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Redux state
  const { loading, error } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e: FormEvent) => {
    e.preventDefault();

    let userCredentials: UserCredentials = {
      email: email, // Assuming email corresponds to the username
      password,
    };

    dispatch(loginUser(userCredentials) as any).then((result: any) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    });
  };

  return (
    <>
      <Row className="p-5 mb-5">
        <Col lg={2} md={12} sm={12}></Col>
        <Col lg={4} md={12} sm={12}>
          <div className="login-main ">
            <div className="login card-login-animation lf-out">
              <div className="form lf-in-area">
                <form noValidate>
                  <Image
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    width={"180px"}
                    className="mb-4"
                  ></Image>
                  <span className="form-spn">Hemen Kayıt Ol&nbsp;</span>
                  <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="form-control inp_text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="surname"
                    name="surname"
                    placeholder="Surname"
                    className="form-control inp_text"
                    id="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email id / username"
                    className="form-control inp_text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <br />
                  <button
                    className="btn-rgst"
                    onClick={handleLoginEvent}
                  >
                    Kayıt Ol
                  </button>
                  <span className="lt-area-btm-spn">
                    Zaten bir hesabın var mı?{" "}
                    <Link className="lt-area-btm-link" to="/login">
                      Giriş Yap
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12}>
          <div className="login card-right rt-out">
            <div className="form  rt-in-area">
              <div>
                <div className="text-center mt-5">
                <img
            src="https://tobeto.com/_next/static/media/dotv.9454a9b6.svg" 
            style={{ position: 'absolute', top: '0', left: '10px', width: '60px' }} 
          />
                  <Image
                    className="ik-logo-rt"
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    width={"100px"}
                  ></Image>
                   <br /> <br />
                  <br />
                  <Button className=" rt-btn">Başvur</Button>
                  <img
            src="https://tobeto.com/_next/static/media/doth.d78dd392.svg" 
            style={{ position: 'absolute', bottom: '15px', right: '15px', width: '70px' }} // Burada resmin boyutunu ve konumunu ayarlayın
          />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="col-3"></div>
      </Row>
    </>
  );
}
