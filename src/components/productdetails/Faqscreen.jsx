import React from "react";
import { Collapse } from "antd";
import styled from "styled-components";
import { CaretDownOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const StyledContainer = styled.div`
  // Add your custom styles for the container here
`;

const FaqsScreen = () => {
  const faqsData = [
    {
      question: "How can I contact you?",
      answer:
        "You can contact us through email at info@example.com or call us at +1 5589 55488 55.",
    },
    {
      question: "Where are you located?",
      answer: "Our office is located at A108 Adam Street, New York, NY 535022.",
    },
    {
      question: "What are your business hours?",
      answer: "We are available Monday to Friday from 9:00 AM to 5:00 PM.",
    },
    {
      question: "How do I send a message?",
      answer:
        "You can send us a message through the contact form on this page. Simply fill out your name, email, subject, and message, and click on Send Message.",
    },
    {
      question: "Is there a loading time for the contact form?",
      answer:
        "The loading time may vary depending on your internet connection and the server load. Please wait a few moments for the form to load.",
    },
    {
      question: "How do I send a message?",
      answer:
        "You can send us a message through the contact form on this page. Simply fill out your name, email, subject, and message, and click on Send Message.",
    },
    {
      question: " How will I know if my message has been sent?",
      answer:
        "After clicking on Send Message, you will see a confirmation message indicating that your message has been sent successfully.",
    },
  ];

  return (
    <StyledContainer id="faq" className="faq">
      <div data-aos="fade-up">
        <div className="section-title">
          <h2>FAQs</h2>
          <p>Frequently Asked Questions</p>
        </div>
        <Collapse accordion>
          {faqsData.map((faq, index) => (
            <Panel
              header={faq.question}
              key={index}
              extra={
                index === faqsData.length - 1 ? <CaretDownOutlined /> : null
              }
            >
              <ul>
                <li>{faq.answer}</li>
                <li>{faq.answer}</li>
                <li>{faq.answer}</li>
                <li>{faq.answer}</li>
                <li>{faq.answer}</li>
              </ul>
            </Panel>
          ))}
        </Collapse>
      </div>
    </StyledContainer>
  );
};

export default FaqsScreen;
