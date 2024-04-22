import { Map, MapMarker } from "react-kakao-maps-sdk"
import { useState } from "react"
import "./style.scss"

type MapMarkerPositionProp = {
    title: string
    latlng: { lat: number; lng: number }
}

const Home = () => {
    const centerPosition = {
        lat: 37.87422919,
        lng: 126.7803825,
    }

    const markerPositions = [
        {
            title: "소풍농월",
            latlng: { lat: 37.8706859, lng: 126.7854196 },
        },
        {
            title: "여우골정원",
            latlng: { lat: 37.873214, lng: 126.7889361 },
        },
        {
            title: "문지리 535",
            latlng: { lat: 37.8298016, lng: 126.718562 },
        },
    ]

    const Marker = ({ position }: { position: MapMarkerPositionProp }) => {
        const [isOpen, setIsOpen] = useState<boolean>(false)

        return (
            <MapMarker
                position={position.latlng}
                onClick={() => setIsOpen(!isOpen)}
                infoWindowOptions={{
                    disableAutoPan: true,
                    zIndex: 1,
                }}
                image={{
                    src: "/src/assets/images/location.png",
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
                    <div className="overlay-wrap" style={{ padding: 10 }}>
                        <div className="title">
                            <i className="xi-star"></i>
                            <span>2024 맛집</span>
                        </div>
                        <div className="body">
                            <span className="date">4/20</span>
                            <span>
                                <a href="https://naver.me/GvXEvDBl" target="_blank" className="link" rel="noreferrer">
                                    {position.title}
                                </a>
                            </span>
                        </div>
                    </div>
                )}

                {/* {isOpen && (
                    <CustomOverlayMap position={position.latlng}>
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
                                        {position.title}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </CustomOverlayMap>
                )} */}
            </MapMarker>
        )
    }

    return (
        <>
            <Map center={centerPosition} style={{ width: "100%", height: "980px" }}>
                {markerPositions.map((marker, index) => (
                    <Marker key={`marker_${index}`} position={marker} />
                ))}
            </Map>
        </>
    )
}

export default Home
