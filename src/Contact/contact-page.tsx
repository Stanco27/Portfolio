import { Card } from "react-bootstrap";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <div className="px-4 pt-4 contact-container">
      <Card className="contact-card">
        <Card.Title className="py-2 contact-title">
          Contact Information
        </Card.Title>
        <div className="d-flex justify-content-between">
        <Card.Text className="mb-4 contact-text">Email:</Card.Text>
        <Card.Text className="mb-4 contact-text">stancodiaz@gmail.com</Card.Text>
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
