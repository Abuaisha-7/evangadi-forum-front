import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../axiosConfig";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AppState } from "../App";
import { FaRegCircleUser } from "react-icons/fa6";

const QuestionDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { question_id } = useParams();

  const { user } = useContext(AppState);
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  let params = useParams();
  const textDom = useRef();

  const fetchQuestion = async () => {
    try {
      const question = await axios.get(
        `questions/single-questions/${params.question_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(question?.data.singleQuestions[0].post_id);
      setQuestion(question?.data.singleQuestions[0]);
    } catch (error) {
      //   alert(error?.response?.data?.msg);
      //   console.log(error.response.data);
    }
  };
console.log(question)

  const allAnswer = async () => {

    try {
      const answerResponse = await axios.get(
        `/answers/all-answers/${question?.post_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      console.log(answerResponse);
      setAnswers(answerResponse?.data?.answers);
    } catch (error) {
      //   alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  };
  console.log(answers);

  useEffect(() => {
    fetchQuestion();
    allAnswer();
  }, [question?.post_id]);

  const postAnswer = async (e) => {
    e.preventDefault();
    const answerValue = textDom.current.value;

    if (!answerValue) {
      alert("please fill the answer field");
      return;
    }
    console.log(answerValue);

    try {
      await axios.post(
        `/answers/give-answer/${question?.question_id}`,
        {
          user_id: question?.user_id,
          question_id: question?.question_id,
          answer: answerValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.reload(false);
      alert("answer added successful.");

      window.location.reload(false);
    } catch (error) {
      //   alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <Container>
        <h2 className="my-5">Question</h2>
        <div className="">
          <h4 className=" text-dark">{question?.question}</h4>
          <h6>{question?.question_descriptione}</h6>
        </div>
        <hr />
        <h1>Answer From The Community </h1>
        <hr />

        {/* map */}
        {answers?.map((el, index) => {
          return (
            <Row key={index} className="my-5 py-3 shadow">
              <Col sm={12} md={2} className={index % 2 === 0 && "order-1 "}>
                <Row>
                  <Col sm={12}>
                  <div className="">
                        <FaRegCircleUser size={80} />
                      </div>
                  </Col>
                  <Col sm={12}>
                    <h6 className="my-3 text-secondary text-capitalize">
                      {el?.user_name}
                    </h6>
                  </Col>
                </Row>
              </Col>
              <Col
                sm={12}
                md={10}
                className={index % 2 === 0 && "text-end px-5"}
              >
                <h6>{el.answer}</h6>
              </Col>
            </Row>
          );
        })}
        <div className="my-5 text-center">
          <h2>Answer The Above Question </h2>
        </div>
        <Form onSubmit={postAnswer}>
          <div className="my-3 ">
            <Form.Control
              ref={textDom}
              as="textarea"
              rows="4"
              placeholder="Your Answer ..."
            ></Form.Control>
          </div>
          <Button type="submit" className="mb-5">
            Post Your Anwser
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default QuestionDetail;
