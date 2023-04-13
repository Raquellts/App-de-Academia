import TabNav from "../components/index/Tabnav";
import { Tab, Row, Col, Container } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function erro() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Container>
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav />
        </Col>
        <Col className="alinharcentro">
          <Container>
            <Row>
              <h3 style={{ letterSpacing: "7px" }}>ERRO 404</h3>
            </Row>

            <Row>
              <p>Página não encontrada</p>
            </Row>

            <Row>
              <button
                type="button"
                className={`botao caixa ${theme} botao-voltar`}
              >
                Voltar
              </button>
            </Row>
          </Container>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default erro;
