import React from "react";
import Link from "next/link";
import { Row, Col, Carousel, Button } from "antd";
import { UserOutlined, SendOutlined } from "@ant-design/icons";
export default function Rating({ img, subtitle, reviews }) {
  return (
    <div
      className="img-container rating-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="rating-items">
        <h1>
          Fueling <span> Competitive</span> <br />
          <span>advantage</span> for our clientele
        </h1>
        <p>{subtitle}</p>
        
        <Row gutter={[16, 16]}> 
      <Col span={12}>
      <div className="rating-user">
        <Carousel autoplay>

        {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "100px", color: "#ccc" }}
                      />
                    )}
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
                
        </Carousel>
    </div>
      </Col>
      <Col span={12}>
      <div className="rating-user">
        <Carousel autoplay>

        {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "100px", color: "#ccc" }}
                      />
                    )}
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
                
        </Carousel>
    </div>
      </Col>
    </Row>



        <Link href="/">
          <Button type="secondary" size="large" icon={<SendOutlined />}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

{/* <Row gutter={[16, 16]}> 
      <Col span={12}>
      <div className="rating-user">
        <Carousel autoplay>

        {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "100px", color: "#ccc" }}
                      />
                    )}
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
                
        </Carousel>
    </div>
      </Col>
      <Col span={12}>
      <div className="rating-user">
        <Carousel autoplay>

        {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "100px", color: "#ccc" }}
                      />
                    )}
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
                
        </Carousel>
    </div>
      </Col>
    </Row> */}

        {/* <div className="rating-user">
        <Carousel autoplay>

        {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "100px", color: "#ccc" }}
                      />
                    )}
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
                
        </Carousel>
    </div>
    <div className="rating-user">
        <Carousel autoplay>

        {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "100px", color: "#ccc" }}
                      />
                    )}
                    <h3>{review.name}</h3>
                    <p>{review.role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
                
        </Carousel>
    </div> */}
        {/* <div className="rating-carousel">
          <Row justify="center">
            <Col xs={24} sm={12} md={8} lg={6} xl={12}>
              <Carousel autoplay>
                {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "50px", color: "#ccc" }}
                      />
                    )}
                    <h6>{review.name}</h6>
                    <p>{review.role}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={12}>
              <Carousel autoplay>
                {reviews.map((review, index) => (
                  <div className="review" key={index}>
                    {review.image ? (
                      <img src={review.image} alt="Reviewer" />
                    ) : (
                      <UserOutlined
                        style={{ fontSize: "50px", color: "#ccc" }}
                      />
                    )}
                    <h6>{review.name}</h6>
                    <p>{review.role}</p>

                    <div className="rating">
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>&#9733;</span>
                      ))}
                    </div>
                    <p className="comments">{review.comment}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div> */}