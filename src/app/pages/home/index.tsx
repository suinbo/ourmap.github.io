import { useEffect } from "react"
import "./style.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const apiKey = import.meta.env.VITE_API_KEY
const uri = import.meta.env.VITE_REDIRECT_URI

const Home = () => {
    const navigate = useNavigate()
    const params = new URL(document.URL).searchParams
    const code = params.get("code")

    console.log(localStorage.getItem("accessToken"))

    useEffect(() => {
        if (code) {
            axios.post("http://52.78.215.105:3000/api/getKakao", { code }).then(res => {
                if (res.status === 200) {
                    const { access_token } = res.data
                    localStorage.setItem("accessToken", access_token)
                } else {
                    alert("로그인에 실패하였습니다.")
                    navigate("/")
                }
            })
        }
    }, [code, navigate])

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            axios
                .post("http://52.78.215.105:3000/api/getUser", { token: localStorage.getItem("accessToken") })
                .then(res => {
                    if (res.status === 200) {
                        const data = res.data
                        console.log(data)
                    } else {
                        alert("로그인에 실패하였습니다.")
                        navigate("/")
                    }
                })
        }
    }, [code, localStorage.getItem("accessToken")])

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
