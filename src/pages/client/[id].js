import TabNav from "../../components/index/Tabnav";
import { Tab, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Container>
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav />
        </Col>

        <Col className="clientpage">
          <Row>
            <Col className="clipageinfo">
              <h4>Informações</h4>
            </Col>
          </Row>

          <Row>
            <Col className="clipageinfo" md={6}>
              Nome:
            </Col>

            <Col className="clipageinfo">Idade:</Col>

            <Col className="clipageinfo">Altura:</Col>
          </Row>

          <Row>
            <Col className="clipageinfo" md={6}>
              Objetivo:
            </Col>

            <Col className="clipageinfo">Peso inicial:</Col>

            <Col className="clipageinfo">Peso Atual:</Col>
          </Row>

          <Row className={`formulario ${theme}`}>
            <Col>
              <Col style={{ textAlign: "start" }}>
                <h5>Fichas</h5>
              </Col>
            </Col>
            <Col xs={1} style={{ textAlign: "end" }}></Col>
          </Row>

          <Row>
            <Col style={{ textAlign: "center" }}>
              <hr style={{ opacity: "20%" }} />
              <button type="button" className={`botao success ${theme}`}>
                <FontAwesomeIcon icon={faSquarePlus} size="lg" /> Adicionar
                fichar
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
