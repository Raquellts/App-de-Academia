import ThemeButton from "../components/index/ThemeButton";
import { Container, Row, Form } from "react-bootstrap";
import React, { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

function Login() {
  const { theme } = useContext(ThemeContext);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container
      className={`alinharcentro fundo login ${theme}`}
      style={{ margin: "0px" }}
    >
      <Row style={{ width: "50%", maxWidth: "500px" }}>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          style={{ padding: "10%" }}
          className={`formulario ${theme}`}
        >
          {/*-------------- TEXTO: DESCRIÇÃO DA PAG ---------------*/}
          <h4 style={{ marginBottom: "20px" }}>Login</h4>
          <div style={{ textAlign: "start", marginLeft: "10px" }}> Email </div>
          <Form.Group controlId="Email">
            <Form.Control
              className={`selecionar ${theme}`}
              type="email"
              placeholder="..."
              required
            />
          </Form.Group>
          <div style={{ textAlign: "start", marginLeft: "10px" }}> Senha </div>
          <Form.Group controlId="Nome">
            <Form.Control
              className={`selecionar ${theme}`}
              type="password"
              placeholder="..."
              required
            />
          </Form.Group>

          <button type="submit" className={`botao ${theme}`}>
            entrar
          </button>

          <p className="linkrecuperar">Recuperar senha</p>
        </Form>{" "}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ThemeButton />
        </div>
      </Row>
    </Container>
  );
}

export default Login;
