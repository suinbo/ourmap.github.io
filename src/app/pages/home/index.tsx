import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk"
import "./style.scss"
import { useState } from "react"

const Home = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const markerPosition = {
        lat: 37.6517848,
        lng: 127.3202434,
    }

    console.log(isOpen)

    return (
        <>
            {/* <RemovableCustomOverlayStyle /> */}
            <Map center={markerPosition} style={{ width: "100%", height: "980px" }}>
                <MapMarker
                    position={markerPosition}
                    onClick={() => setIsOpen(!isOpen)}
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
                            <div className="wrap">
                                <div className="info">
                                    <div className="title">4/20</div>
                                    <div className="body">
                                        <div className="desc">
                                            <div>
                                                <a
                                                    href="https://naver.me/GvXEvDBl"
                                                    target="_blank"
                                                    className="link"
                                                    rel="noreferrer">
                                                    네이버 지도 보기
                                                </a>
                                            </div>
                                        </div>
                                    </div>
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
