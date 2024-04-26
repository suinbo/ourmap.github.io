const Auth = () => {
    const params = new URL(document.URL).searchParams
    const code = params.get("code")

    console.log(code)

    return <>Auth</>
}

export default Auth
