import React from "react";
import { Container, Card } from "react-bootstrap";

const Dashboard = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title className="text-center">Dashboard</Card.Title>
          <Card.Text>
            <strong>Access Token:</strong> {accessToken || "Not available"}
          </Card.Text>
          <Card.Text>
            <strong>Refresh Token:</strong> {refreshToken || "Not available"}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;
