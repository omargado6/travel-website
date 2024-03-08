import React from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';

// imgs
import img1 from "../imgs/whyus/value.jpeg";
import img2 from "../imgs/whyus/airfare.jpg";
import img3 from "../imgs/whyus/touring.avif";
import img4 from "../imgs/whyus/guides.jpg";
import img5 from "../imgs/whyus/peace.jpeg";
import img6 from "../imgs/whyus/highquality-hotel.jpg";
import { Card, Container } from 'react-bootstrap';


function WhyUs() {
    const whyuss = [
        { id: 1, title: "Incerible Value ", image: img1 },
        { id: 2, title: "Airfare Included", image: img2 },
        { id: 3, title: "Unparalleled Tour Selection", image: img3 },
        { id: 4, title: "Expert Local Guides", image: img4 },
        { id: 5, title: "Peace of Mind Guarantee", image: img5 },
        { id: 6, title: "Hand-Picked High-Quality Hotels", image: img6 }
    ]

    return (
        <div className="whyus pb-5" id="whyus">
            <Container>
                <div className="theTitle text-center pt-5 ">
                    <h2> Why Travel With Us </h2>
                </div>
                <div className=" row  justify-content-center">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation, A11y]}
                        className="mySwiper swiper-cards-box p-4 pt-5"
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {whyuss.map((reason) => (
                            <SwiperSlide key={reason.id}>
                                <div className="col-lg-12 col-sm-12  mb-4  d-flex justify-content-center align-items-center text-center " >
                                    <Card className="whyus-cards" style={{ width: '22rem' }} >
                                        <div className="box-img">
                                            <Card.Img className="whyus-img" variant="top" src={reason.image} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className=" mt-1 mb-3 whyus-title">{reason.title}</Card.Title>
                                            <Card.Text className="text-start pb-2" >
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                                bulk of the card's content.
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container >
        </div >
    )
}

export default WhyUs;