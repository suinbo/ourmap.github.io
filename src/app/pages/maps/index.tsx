import { Map, MapMarker } from "react-kakao-maps-sdk"
import { useEffect, useState } from "react"
import Aside from "@/components/Aside"
import axios from "axios"
import "./style.scss"

type MapMarkerPositionProp = {
    title: string
    latlng: { lat: number; lng: number }
    date: string
}

const Maps = () => {
    const centerPosition = {
        lat: 37.873214,
        lng: 126.7889361,
    }

    const markerPositions = [
        {
            title: "소풍농월",
            latlng: { lat: 37.8706859, lng: 126.7854196 },
            date: "3/23",
        },
        {
            title: "여우골정원",
            latlng: { lat: 37.873214, lng: 126.7889361 },
            date: "3/23",
        },
        {
            title: "문지리 535",
            latlng: { lat: 37.8298016, lng: 126.718562 },
            date: "3/30",
        },
    ]

    useEffect(() => {
        axios
            .get("http://3.38.99.215:3000/api/getMarker", {
                params: { sDate: new Date("2024-03-01 00:00:00"), eDate: new Date("2024-04-01 00:00:00") },
            })
            .then(response => {
                if (response.status === 200) {
                    console.log(response)
                } else {
                    alert("로그인에 실패하였습니다.")
                }
            })
    }, [])

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
                    src: "./location.png",
                    size: {
                        width: 40,
                        height: 40,
                    },
                    options: {
                        offset: {
                            x: 27,
                            y: 69,
                        },
                    },
                }}>
                {isOpen && (
                    <div className="overlay-wrap" style={{ padding: 12 }}>
                        <div className="title">
                            <i className="xi-star"></i>
                            <span>2024년 3월</span>
                        </div>
                        <div className="body">
                            <span className="date">{position.date}</span>
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
            <Aside
                markList={[
                    { text: "3월", color: "rgb(146, 49, 238)" },
                    { text: "4월", color: "rgb(255, 139, 43)" },
                ]}
            />
        </>
    )
}

export default Maps
