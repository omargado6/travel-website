import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
// image for category
import img1 from "../imgs/category/all-inclusive.jpg";
import img2 from "../imgs/category/resort.jpg";
import img3 from "../imgs/category/HOtTub.jpg";
import img4 from "../imgs/category/family-friendly.jpg";
import img5 from "../imgs/category/Housebout.jpg";
import img6 from "../imgs/category/ocean.jpg";
//img for types
import sea1 from "../imgs/rooms/pool3.jpg";
import sea2 from "../imgs/rooms/pool1.jpg";
import sea3 from "../imgs/rooms/pool2.jpg";
import city1 from "../imgs/rooms/city1.jpg";
import city2 from "../imgs/rooms/city2.jpg";
import city3 from "../imgs/rooms/city3.jpg";
import city4 from "../imgs/rooms/city4.jpg";
import garden1 from "../imgs/rooms/garden1.jpg";
import forest1 from "../imgs/rooms/forest1.jpg";
import mountain1 from "../imgs/rooms/mountain1.jpg";

// swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import ReactStars from 'react-stars';
function Hotels() {

    const typeshotel = [
        { id: 1, title: "All Inclusive", img: img1 },
        { id: 2, title: "Resort", img: img2 },
        { id: 3, title: "City", img: img3 },
        { id: 4, title: "Family Friendly", img: img4 },
        { id: 5, title: "Houseboat ", img: img5 },
        { id: 6, title: "Ocean View ", img: img6 }
    ];

    const roomsData = [
        {
            id: 1, image: sea1, stars: 4, title: "Deluxe Oceanfront Room", price: "$150/night", view: "sea", amenities: ["King-size bed", "Balcony access", "Free Wi-Fi"],
        },
        {
            id: 2, image: city1, stars: 3, title: "Standard City View Room", price: "$100/night", view: "City", amenities: ["Queen-size bed", "Mini fridge", "Coffee maker",],
        },
        {
            id: 3, image: garden1, stars: 5, title: "Family Suite with Pool ", price: "$200/night", view: "nature", amenities: [" queen-size beds", "Pull-out sofa", "Poolside access"],
        },
        {
            id: 4, image: city2, stars: 3, title: "Studio Apartment ", price: "$120/night", view: "City", amenities: ["King-size bed", "Separate  area", "In-room laundry"],
        },
        {
            id: 6, image: mountain1, stars: 4, title: "Bunk Bed Room ", price: "$90/night", view: "nature", amenities: ["Two bunk beds", "Shared bathroom", "Locker  guest"],
        },
        {
            id: 7, image: sea2, stars: 5, title: " Suite with Balcony", price: "$250/night", view: "sea", amenities: ["King-size bed", "Jacuzzi tub", "Separate  area"],
        },
        {
            id: 8, image: forest1, stars: 4, title: " Cabin with Fireplace", price: "$180/night", view: "nature", amenities: ["Queen-size bed", "Floor-to-ceiling", "Private porch"],
        },
        {
            id: 9, image: city3, stars: 4, title: " Studio with City Views", price: "$140/night", view: "City", amenities: ["Queen bed", "Locker for guest", "Floor-to-ceiling "],
        },
        {
            id: 10, image: sea3, stars: 3, title: "Budget-Friendly Room ", price: "$80/night", view: "sea", amenities: ["Full-size bed", "Shared bathroom", "Towels provided"],
        },
        {
            id: 11, image: city4, stars: 5, title: "Executive Suite ", price: "$220/night", view: "City", amenities: ["King-size bed", "Desk and chair", "speed Wi-Fi"],
        }
    ];

    const Amenities = ({ amenities }) => (
        <ul className="amenities-list">
            {amenities.map((amenity) => (
                <p key={amenity} className="li-feature" >* {amenity}</p>

            ))}
        </ul>
    );

    const [roomType, setRoomType] = useState("all");

    // const handleRoomTypeChange = (e) => {
    //     setRoomType(e.target.value);
    // };
    const handleRoomTypeChange = (e) => {
        setRoomType(e);
    };

    const filteredRooms = roomsData.filter((room) => {
        // Filter rooms based on the selected room type and view
        if (roomType === "all") {
            return true; // Show all rooms if "all" is selected
        }

        const roomView = room.view.toLowerCase(); // Convert view to lowercase for case-insensitive matching
        return roomView.includes(roomType); // Show rooms that match the selected type (sea, city, nature)
    });
    // const filteredRooms = roomsData.filter((room) => {
    //     if (roomType === "all") {
    //         return true;
    //     }

    //     const roomView = room.view.toLowerCase();
    //     return roomView.includes(roomType);
    // });

    return (
        <div className="hotels pb-5" id="hotels" >
            <Container>
                <div className="theTitle text-center pt-5 ">
                    <h2> Discover your Hotel</h2>
                </div>
                {/* category */}
                <div className=" row  justify-content-center">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}


                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation, A11y]}
                        className="mySwiper swiper-cards-box p-4"
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }

                        }}
                    >
                        {typeshotel.map((item) => (
                            <SwiperSlide className='d-flex justify-content-center align-items-center p-3' key={item.id}>
                                <div className="col-lg-12 col-sm-12 pb-4 d-flex justify-content-center align-items-center text-center " >
                                    <Card className="Category-cards" style={{ width: '20rem' }} >
                                        <div className="box-img"><Card.Img className="imgCategory" variant="top" src={item.img} /></div>
                                        <span calssName="titleCategory">{item.title}</span>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* rooms */}
                <div className="row text-center pb-3">
                    <ul className="typeroomli d-flex justify-content-center">
                        <li onClick={() => handleRoomTypeChange("all")} className={roomType === "all" ? "active" : ""}>All</li>
                        <li onClick={() => handleRoomTypeChange("sea")} className={roomType === "sea" ? "active" : ""}>Sea</li>
                        <li onClick={() => handleRoomTypeChange("city")} className={roomType === "city" ? "active" : ""}>City</li>
                        <li onClick={() => handleRoomTypeChange("nature")} className={roomType === "nature" ? "active" : ""}>Nature</li>
                    </ul>
                </div>
                <div className="row mt-2 rooms">
                    {filteredRooms.map((item) => (
                        <div className="col-xl-4 col-lg-4 col-md-6  mb-5 d-flex justify-content-center align-items-center text-start " key={item.id}>
                            <Card className="rooms-cards" style={{ width: '22rem' }} >
                                <div className="box-img">
                                    <Card.Img className="rooms-img" variant="top" src={item.image} />
                                </div>
                                <Card.Body>
                                    <Card.Title className=" mt-1  rooms-title text-start">{item.title}</Card.Title>
                                    <Card.Text className="room-price d-flex justify-content-around" >{item.price} <ReactStars
                                        className="star"
                                        count={item.stars} // Set the total number of stars
                                        size={18} // Adjust star size (optional)
                                    />
                                    </Card.Text>
                                    <Amenities amenities={item.amenities} />
                                    <Card.Text className="mb-2 text-center">
                                        <Button className="btn btnintrohotel">More Info </Button>
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </div>
                    ))}
                </div>
            </Container >
        </div >
    )
}

export default Hotels