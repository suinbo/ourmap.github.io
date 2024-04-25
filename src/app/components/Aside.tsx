import { useState } from "react"
import cx from "classnames"
import "./style.scss"

type MarkProp = {
    color: string
    text: string
}

const Aside = ({ markList }: { markList: MarkProp[] }) => {
    const [open, setOpen] = useState<boolean>(false)

    const MarkerList = () => {
        return (
            <div className="depth2">
                {markList.map(({ color, text }, index) => (
                    <div key={`mark_${index}`} className="mark" style={{ color }}>
                        <span>
                            <span className="branch">ㄴ</span>
                            <i className="xi-star" />
                        </span>
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        )
    }

    const MarkerGroup = ({ add }: { add: boolean }) => {
        return (
            <div className="depth">
                <div className={cx("depth1", { add })}>
                    <span>{add ? "+ 그룹" : "2024년"}</span>
                </div>
                {!add && <MarkerList />}
            </div>
        )
    }

    return open ? (
        <div className="aside">
            <div className="inner">
                <i className="xi-close" onClick={() => setOpen(false)} />
                <div className="group-list">
                    <div className="title">
                        <span>마커 그룹</span>
                    </div>
                    <div className="body">
                        <MarkerGroup add={false} />
                        <MarkerGroup add={true} />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="nav">
            <i className="xi-bars" onClick={() => setOpen(true)}></i>
        </div>
    )
}

export default Aside
