import React from 'react';
import ReactStars from 'react-stars';
import { Button, Card, Container } from 'react-bootstrap';
// imgs
import rome from "../imgs/popular/Rome.jpg";
import madrid from "../imgs/popular/madrid.jpg";
import cairo from "../imgs/popular/cairo.jpg";
import nyc from "../imgs/popular/NYC.jpg";
import rabat from "../imgs/popular/jordan.jpeg";
import paris from "../imgs/popular/Paris.jpg";
import amman from "../imgs/popular/morocco.jpg";
import lonodn from "../imgs/popular/london.jpg";
import india from "../imgs/popular/india.webp";
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';

function PopularDestination() {
    const destination = [
        { id: 1, name: "Rome, Italy", price: 3500, img: rome, stars: 5, },
        { id: 2, name: "Madrid, Spain", price: 3000, img: madrid, stars: 5, },
        { id: 3, name: "Cairo, Egypt", price: 2500, img: cairo, stars: 4, },
        { id: 4, name: "NYC, United States", price: 5500, img: nyc, stars: 3, },
        { id: 5, name: "Rabat, Morocco ", price: 1200, img: rabat, stars: 2, },
        { id: 6, name: "Paris, France", price: 5000, img: paris, stars: 3, },
        { id: 7, name: "Amman, Jordan", price: 1500, img: amman, stars: 2, },
        { id: 8, name: "New Delhi, India", price: 3500, img: india, stars: 4, },
        { id: 9, name: "London, England", price: 4500, img: lonodn, stars: 5, }
    ]

    return (
        <div className="popular pb-5" id="places">
            <Container>
                <div className="theTitle text-center pt-5 ">
                    <h2> Popular Destination </h2>
                </div>
                <div className="row mt-5">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation, A11y]}
                        className="mySwiper swiper-cards-box p-3 pb-5"
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}>{destination.map((place) => (
                            <SwiperSlide key={place.id}>
                                <div className="col-lg-12 col-sm-12  mb-4  d-flex justify-content-center align-items-center text-center " >
                                    <Card className="popular-cards" style={{ width: '22rem' }} >
                                        <Card.Img className="popular-img" variant="top" src={place.img} />
                                        <Card.Body>
                                            <Card.Title className=" mt-1 pb-2 popular-title text-start">{place.name}</Card.Title>
                                            <Card.Text >
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Card.Text className="d-flex justify-content-between fw-bold">{place.price}$
                                                <ReactStars
                                                    className="star"
                                                    count={place.stars} // Set the total number of stars
                                                    size={20} // Adjust star size (optional)
                                                />
                                            </Card.Text>
                                            <Button className="mb-2 btn btnintro" >More Info </Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </Container>
        </div>
    )
}

export default PopularDestination