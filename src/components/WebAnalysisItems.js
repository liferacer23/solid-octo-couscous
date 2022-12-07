import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./WebAnalysisItem.css";

import PieChart from "./Piechart";
import AreaChart from "./AreaChart";

const data = [
  { name: "Group A", count: 30 },
  { name: "Group B", count: 30 },
  { name: "Group C", count: 30 },
  { name: "Group D", count: 30 },
  { name: "Group E", count: 30 },
];
const data1 = [
  { name: "Jan", count: 30 },
  { name: "Feb", count: 60 },
  { name: "March", count: 40 },
  { name: "April", count: 65 },
  { name: "May", count: 38 },
];

function WebAnalysisItems() {
  return (
    <div>
      <Card
        style={{
          width: "1890px",
          height: "455px",
          borderRadius: "16px",
          margin: "auto",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Card.Header className="mt-20">
          <Row>
            <Col sm={6}>
              <div className="headerContainer">
                <h1 className="headerText m-3">Database Items</h1>
                <div className="selectContainer">
                  <select className="headerItem">
                    <option className="selectText">Show:This Week</option>
                    <option className="selectText" value="1">
                      Show: This Month
                    </option>
                    <option className="selectText" value="2">
                      Show:This Day
                    </option>
                  </select>
                  <select className="headerItem">
                    <option className="selectText">Compare</option>
                    <option className="selectText" value="1">
                      Show:This Month
                    </option>
                    <option className="selectText" value="2">
                      Show:This Day
                    </option>
                  </select>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <h1 className="headerText m-3">Cases</h1>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={6} style={{ display: "flex" }}>
              <Col sm={4}>
                <div className="description">
                  <h5 className="descriptionTitle">Total Items</h5>
                  <h2 className="descriptionItem1">10,324</h2>
                  <h5 className="descriptionTitle">Changes from Last Week</h5>
                  <h2 className="descriptionItem2">+12%</h2>
                  <h5 className="descriptionTitle">Total Items in DB</h5>
                  <h2 className="descriptionItem3">5,403</h2>
                </div>
              </Col>
              <Col sm={8}>
                <div
                  style={{
                    marginLeft: "-2.5rem",
                    marginTop: "2rem",
                    zoom: "1.5",
                    fontSize: "13px",
                  }}
                >
                  <AreaChart dataKey="count" NameKey="name" data={data1} />
                </div>
              </Col>
            </Col>

            <Col sm={6} style={{ display: "flex" }}>
              <Col sm={4}>
                <div className="description">
                  <h5 className="descriptionTitle">Total Items</h5>
                  <h2 className="descriptionItem4">53</h2>
                  <h5 className="descriptionTitle">Changes from Last Week</h5>
                  <h2 className="descriptionItem5">+2</h2>
                  <h5 className="descriptionTitle">Total Items in DB</h5>
                  <h2 className="descriptionItem6">Lorem Epsem</h2>
                </div>
              </Col>
              <Col sm={8}>
                <div
                  style={{ width: "500px", height: "200px", marginTop: "2rem" }}
                >
                  <PieChart data={data} NameKey="name" dataKey="count" />
                </div>
              </Col>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WebAnalysisItems;
