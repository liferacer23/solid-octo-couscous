import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./WebAnalysisItem.css";

import PieChart from "./Piechart";
import AreaChart from "./AreaChart";

const data = [
  { name: "Lorem Epsem", count: 86 },
  { name: "Lorem Epsem", count: 86 },
  { name: "Lorem Epsem", count: 86 },
  { name: "Lorem Epsem", count: 86 },
  { name: "Lorem Epsem", count: 86 }
];
const data1 = [
  { name: "Mon", count: 30 },
  { name: "Tue", count: 33 },
  { name: "Wed", count: 60 },
  { name: "Thu", count: 40 },
  { name: "Fri", count: 45 },
  { name: "Sat", count: 37 },
  { name: "Today", count: 78 },
];

function WebAnalysisItems() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.onresize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.onload = () => {
      setScreenWidth(window.innerWidth);
    };
  }, [window.onload, window.onresize]);
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
                <span className="headerText m-3">Database Items</span>
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
                  <span className="descriptionTitle">Total Items this week</span>
                  <span className="descriptionItem1">10,324</span>
            
                  <span className="descriptionTitle">Changes from Last Week</span>
                  <span className="descriptionItem2">+12%</span>
              
                  <span className="descriptionTitle">Total Items in DB</span>
                  <span className="descriptionItem3">5,403</span>
                </div>
              </Col>
              <Col sm={8}>
                <div
                  style={{
                 
                    marginLeft: "-5rem",
                    marginTop: "2rem",
                    fontSize: "9px",
                    color: "#FFFFFF",
                    overflow: "visible",
                    zoom: "2",
                  }}
                >
                  <AreaChart dataKey="count" NameKey="name" data={data1} />
                </div>
              </Col>
            </Col>

            <Col sm={6} style={{ display: "flex" }}>
              <Col sm={4}>
                <div className="description">
                  <span className="descriptionTitle">Lorem Epsem</span>
                  <span className="descriptionItem4">53</span>
                  <span className="descriptionTitle">Lorem Epsem</span>
                  <span className="descriptionItem5">+2</span>
                  <span className="descriptionTitle">Lorem Epsem</span>
                  <span className="descriptionItem6">Lorem Epsem</span>
                </div>
              </Col>
              <Col sm={8}>
                <div
                  style={{ width: "500px", height: "200px", marginTop: "4rem" }}
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
