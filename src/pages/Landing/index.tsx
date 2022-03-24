/* eslint-disable jsx-a11y/alt-text */
import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

function Landing(): JSX.Element {
  const parallax = useRef<IParallax>(null!);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>garfbutdev</title>
      </Helmet>

      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: "url(https://i.imgur.com/DK4PSfi.jpg)",
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.3}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={8} md={10}>
              <Row style={{ display: "flex", justifyContent: "center" }}>
                <img alt="garfield" src="https://i.imgur.com/62bw3Xk.png" />
              </Row>
              <Row>
                <h1 style={{ color: "#fff", textAlign: "center" }}>
                  garfbutdev
                </h1>
              </Row>
            </Col>
          </Row>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col md={8} style={{ maxWidth: "1200px" }}>
              <Row style={{ marginBottom: "20px" }}>
                <h1
                  style={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Writing code from Da Lat, Vietnam.
                </h1>
              </Row>

              <Row>
                <p
                  style={{
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  Since beginning of my journey as a developer nearly 3 years
                  ago, I have done both onsite and remote work for agencies,
                  train my skill and business mindset in different startups, and
                  collaborated with talented people to create digital products
                  for both business and consumer use. I'm quietly confident,
                  naturally curious, and perpetually working on improving my
                  chops one design problem at a time.
                </p>
              </Row>
            </Col>
          </Row>
        </ParallaxLayer>

        {/* Background stuff */}
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Landing;
