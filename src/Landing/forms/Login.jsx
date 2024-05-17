import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import axios from "../../axiosConfig";
import "./Login.css";
import { ClipLoader } from "react-spinners";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import bg from "../../assets/bg-svg-f.svg";

const Login = () => {
  const [icon, setIcon] = useState(eyeOff);
  const [type, setType] = useState("password");
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();

  const emailDom = useRef();
  const passDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const emailValue = emailDom.current.value;
    const passwordValue = passDom.current.value;

    if (!emailValue || !passwordValue) {
      alert("Pleas provide all required information");
      return;
    }

    try {
      setProcessing(true);

      const { data } = await axios.post("/users/login", {
        user_email: emailValue,
        password: passwordValue,
      });

      localStorage.setItem("token", data.token);
      // alert("Login Successfully");
      navigate("/home");
      window.location.reload(false);
      // console.log(data)
    } catch (err) {
      alert(err?.response?.data?.msg);
      console.log(err.response.data);
      setProcessing(false);
    }
  }

  const handleIcon = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "130px",
        paddingBottom: "170px",
      }}
    >
      <div
        style={{ maxWidth: "80%", marginRight: "auto", marginLeft: "auto" }}
        className="container-fluid  "
      >
        <Row>
          <Col sm={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <div className="card bg-white text-dark border-0">
                <div className="py-5 text-center px-md-1 px-sm-3 mx-md-3">
                  <h5>Login to your account</h5>
                  <p>
                    Don’t have an account?{" "}
                    <span>
                      {" "}
                      <Link
                        className="text-decoration-none"
                        style={{
                          color: "orange",
                          cursor: "pointer",
                        }}
                        to="/register"
                      >
                        {" "}
                        Create a new account
                      </Link>
                    </span>
                  </p>
                  <div className="px-xl-4 ">
                    <Row>
                      <Col sm={12} className="my-2">
                        <Form.Control
                          ref={emailDom}
                          type="email"
                          placeholder="Email address"
                        />
                      </Col>

                      <Col sm={12} className="my-2 position-relative">
                        <Form.Control
                          ref={passDom}
                          type={type}
                          placeholder="Password"
                        />
                        <span className="" onClick={handleIcon}>
                          <Icon className="field-icon" icon={icon} size={20} />
                        </span>
                      </Col>
                      <Col
                        sm={12}
                        className="px-4 d-flex justify-content-center text-center"
                      >
                        <small>
                          I agree to the <a href=""> privacy policy</a> and{" "}
                          <a href=""> terms of service.</a>
                        </small>
                      </Col>
                      <Col sm={12}>
                        <Nav.Link href="/home">
                          <Button
                            type="submit"
                            variant="primary my-4 w-75"
                            style={{
                              backgroundColor: "#f6912b",
                              border: "none",
                            }}
                          >
                            {processing ? (
                              <div className="loading">
                                <ClipLoader color="gray" size={15} />
                                <span>Please wait...</span>
                              </div>
                            ) : (
                              "Login"
                            )}
                          </Button>
                        </Nav.Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <div className="pt-5 px-4">
              <small style={{ color: "#f6912b" }}>About</small>
              <h1 className="mb-4"> Evangadi Networks </h1>
              <p
                style={{
                  lineHeight: "30px",
                }}
              >
                No matter what stage of life you are in, whether you’re just
                starting elementary school or being promoted to CEO of a Fortune
                500 company, you have much to offer to those who are trying to
                follow in your footsteps.
                <br />
                <br />
                Wheather you are willing to share your knowledge or you are just
                looking to meet mentors of your own, please start by joining the
                network here.
              </p>
              <Button
                style={{
                  backgroundColor: "#f6912b",
                  border: "none",
                }}
              >
                HOW IT WORKS
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
