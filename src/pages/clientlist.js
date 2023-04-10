import ClienteLista from "../components/index/ClienteLista";
import TabNav from "../components/index/Tabnav";
import { Tab, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export const getStaticProps = async () => {
  const res = await fetch("http://192.168.1.104:5000");
  const clientes = await res.json();
  return {
    props: {
      clientes,
    },
    revalidate: 10,
  };
};

function clientlist() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Container>
      <Row className={`fundo ${theme}`}>
        <Col xs={1} style={{ maxWidth: "100px", minWidth: "100px" }}>
          <TabNav at={true} />
        </Col>
        <Col>
          <ClienteLista />
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default clientlist;
