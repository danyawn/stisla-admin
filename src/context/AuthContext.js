import api from "@/config/api"
import auth from "@/config/auth"
import axios from "axios"
import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"

const defaultProvider = {
    user: null,
    setUser: () => null,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = () => {
    // State
    const [user, setUser] = useState(null)

    const router = useRouter()

}

export default AuthContext 