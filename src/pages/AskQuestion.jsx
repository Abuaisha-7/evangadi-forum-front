import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import axios from "../axiosConfig";

const AskQuestion = () => {
  const token = localStorage.getItem("token");

  const titleDom = useRef();
  const descDom = useRef();

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token) {
  //     handleSubmit();
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  async function handleSubmit(e) {
       e.preventDefault();

    const quitValue = titleDom.current.value;
    const descValue = descDom.current.value;

    if (!quitValue || !descValue) {
      alert("Pleas provide all required information");
      return;
    }

    try {
      const { data } = await axios.post(
        "/questions/ask-questions",
        {
          question: quitValue,
          question_descriptione: descValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Question post Successfully");
      navigate("/");
      console.log(data);
    } catch (err) {
      alert(err?.response?.data?.msg);
      console.log(err.response.data);
    }
  }

  return (
    <div>
      <Container className="my-5">
        <h3 className="text-center my-4 underline">
          Steps to write a good Question
        </h3>
        <ul
          style={{
            width: "50%",
            margin: "0 auto",
            marginBottom: "60px",
            lineHeight: "30px",
          }}
        >
          <li>Summerize your problems in a one-line-title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to site.</li>
        </ul>

        <h4 className="text-center my-2 underline">Ask a public question</h4>
        <div className="shadow-sm py-3 px-5">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              ref={titleDom}
              type="text"
              placeholder="Title"
              className="my-3"
            />
            <Form.Control
              ref={descDom}
              as="textarea"
              rows="4"
              placeholder="Question Description ..."
            ></Form.Control>

            <Button type="submit" className="mt-4">
              Post Your Question
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default AskQuestion;
