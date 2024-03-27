import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import bg from "../../assets/bg-svg-f.svg";

const Register = () => {
  const navigate = useNavigate();

  const emailDom = useRef();
  const passDom = useRef();
  const fNameDom = useRef();
  const lNameDom = useRef();
  const uNameDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const userNameValue = uNameDom.current.value;
    const firstNameValue = fNameDom.current.value;
    const lastNameValue = lNameDom.current.value;
    const emailValue = emailDom.current.value;
    const passwordValue = passDom.current.value;

    if (
      !userNameValue ||
      !firstNameValue ||
      !lastNameValue ||
      !emailValue ||
      !passwordValue
    ) {
      alert("Pleas provide all required information");
      return;
    }

    try {
      const { data } = await axios.post("/users/register",{
        user_name: userNameValue,
        FirstName: firstNameValue,
        LastName: lastNameValue,
        user_email: emailValue,
        password: passwordValue,
      });

      alert("Registered Successfully");
        navigate("/login");
     
    } catch (err) {
      alert('Something went wrong!');
      console.log(err.response)
    }
  }

  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        paddingTop: "130px",
        paddingBottom: "170px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div style={{maxWidth:'80%', marginRight:'auto',
      marginLeft:'auto'}}className="container-fluid  ">
        <Row>
          <Col sm={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <div className="card bg-white text-dark border-0">
                <div className="py-5 text-center px-md-1 px-sm-3 mx-md-3">
                  <h5>Join the network</h5>
                  <p>
                    Already have an account?{" "}
                    <span>
                      <Link
                        className="text-decoration-none"
                        style={{
                          color: "orange",
                          cursor: "pointer",
                        }}
                        to="/login"
                      >
                        Sign in
                      </Link>
                    </span>
                  </p>
                  <div className="px-xl-4 ">
                    <Row>
                      <Col sm={12} className="my-2 position-relative">
                        <Form.Control
                          ref={uNameDom}
                          type="text"
                          placeholder="User name"
                        />
                      </Col>
                      <Col sm={12} md={6} className="my-2">
                        <Form.Control
                          ref={fNameDom}
                          type="text"
                          placeholder="First name"
                        />
                      </Col>
                      <Col sm={12} md={6} className="my-2">
                        <Form.Control
                          ref={lNameDom}
                          type="text"
                          placeholder="Last name"
                        />
                      </Col>
                      <Col sm={12} className="my-2 position-relative">
                        <Form.Control
                          ref={emailDom}
                          type="email"
                          placeholder="Email address"
                        />
                      </Col>
                      <Col sm={12} className="my-2 position-relative">
                        <Form.Control
                          ref={passDom}
                          type="password"
                          placeholder="Password"
                        />
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
                        <Button type="submit" variant="primary my-4 w-75" style={{
                   backgroundColor: "#f6912b",
                   border: "none",}}>
                          Agree and Join
                        </Button>
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

export default Register;
