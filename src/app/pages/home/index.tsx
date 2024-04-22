import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk"
import "./style.scss"
import { useState } from "react"

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const markerPosition = {
        lat: 37.6517848,
        lng: 127.3202434,
    }

    return (
        <>
            <Map center={markerPosition} style={{ width: "100%", height: "980px" }}>
                <MapMarker
                    position={markerPosition}
                    onClick={() => setIsOpen(!isOpen)}
                    infoWindowOptions={{
                        disableAutoPan: true,
                        zIndex: -1,
                    }}
                    image={{
                        src: "/src/assets/images/map-pin.png",
                        size: {
                            width: 60,
                            height: 60,
                        },
                        options: {
                            offset: {
                                x: 27,
                                y: 69,
                            },
                        },
                    }}>
                    {isOpen && (
                        <CustomOverlayMap position={markerPosition}>
                            <div className="overlay-wrap">
                                <div className="title">
                                    <i className="xi-star"></i>
                                    <span>2024 맛집</span>
                                </div>
                                <div className="body">
                                    <span className="date">4/20</span>
                                    <span>
                                        <a
                                            href="https://naver.me/GvXEvDBl"
                                            target="_blank"
                                            className="link"
                                            rel="noreferrer">
                                            솥뚜껑닭볶음탕
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </CustomOverlayMap>
                    )}
                </MapMarker>
            </Map>
        </>
    )
}

export default Home
