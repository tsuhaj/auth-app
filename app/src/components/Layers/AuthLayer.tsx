import { FC, useEffect } from "react"
import { Outlet } from "react-router-dom"

const AuthLayer: FC = () => {

    useEffect(() => {
        console.log("useEffect in AuthLayer")
    }, [])

    return <Outlet/>
}

export default AuthLayer