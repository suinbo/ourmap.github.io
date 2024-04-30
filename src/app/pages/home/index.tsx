import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./style.scss"

const apiKey = import.meta.env.VITE_API_KEY
const uri = import.meta.env.VITE_REDIRECT_URI

const Home = () => {
    const navigate = useNavigate()
    const params = new URL(document.URL).searchParams
    const code = params.get("code")

    useEffect(() => {
        if (code) {
            axios.post("http://3.38.99.215:3000/api/getKakao", { code }).then(res => {
                if (res.status === 200) {
                    const { access_token } = res.data
                    localStorage.setItem("accessToken", access_token)

                    axios.post("http://3.38.99.215:3000/api/getUser", { token: access_token }).then(response => {
                        if (response.status === 200) {
                            const { properties } = response.data
                            localStorage.setItem("loginInfo", properties)

                            navigate("/maps")
                        } else {
                            alert("로그인에 실패하였습니다.")
                            navigate("/")
                        }
                    })
                } else {
                    alert("로그인에 실패하였습니다.")
                    navigate("/")
                }
            })
        }
    }, [code, navigate])

    const getAuth = () => {
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${apiKey}&redirect_uri=${uri}&response_type=code`
    }

    return (
        <div className="wrap">
            <img src="./login.png" onClick={getAuth} />
        </div>
    )
}

export default Home
