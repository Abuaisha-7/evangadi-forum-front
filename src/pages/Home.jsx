import React, { useEffect, useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import axios from "../axiosConfig";
import { AppState } from "../App";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { user } = useContext(AppState);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    
      checkLogedIn();
    
  }, []);

  const checkLogedIn = async () => {

    try {
      const { data } = await axios.get("/questions/all-questions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setQuestions(data.allQuestions);
      console.log(data.allQuestions);
    } catch (error) {
      console.log(error.response);
      alert("Please log in to your account first.");
      navigate("/login");
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row className="my-5">
          <Col sm={12} md={8}>
            <Link to="/ask-questions">
              <Button>Ask Question</Button>
            </Link>
          </Col>
          <Col sm={12} md={4}>
            <h4>
              welcome : {"  "}
              <span className="text-secondary">{user.userName}</span>
            </h4>
          </Col>
        </Row>
        <h3 className="my-5">Questions</h3>
        <hr />
        {/* map */}

        {questions.map((el) => {
          return (
            <Link
              key={el.post_id}
              to={`single-questions/${el.question_id}`}
              className="text-decoration-none text-secondary"
            >
              <Row>
                <Col sm={12} md={3} xl={2}>
                  <Row>
                    <Col sm={12}>
                      <i
                        className="fa-solid fa-user-tie"
                        style={{
                          fontSize: "80px",
                        }}
                      ></i>
                    </Col>
                    <Col sm={12}>
                      <div className="">
                        <FaRegCircleUser size={80} />
                      </div>
                      <h6 className="mt-3 mx-4 text-secondary text-capitalize">
                        {el.user_name}
                      </h6>
                    </Col>
                  </Row>
                </Col>
                <Col xs={11} md={8} xl={9}>
                  <h6 className="mt-3 mx-5 py-3">{el.question}</h6>
                </Col>
                <Col xs={1} md={1}>
                  <div className=" py-5">
                    <IoIosArrowForward size={40} />
                  </div>
                </Col>
              </Row>
              <hr />
            </Link>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
