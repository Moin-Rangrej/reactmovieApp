import React, { createContext, useContext, useEffect, useState } from 'react'

const API_URl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = createContext()

const AppProvider = ({children}) => {
    // const myname = "Moin"
    const [isLoading, setIsloading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIserror] = useState({ show: "false", msg: "" })
    const [query,setQuery] = useState("titanic")

    const getMoviesData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if (data.Response === "True") {
                setIsloading(false)
                setIserror({
                    show: false,
                    msg: "",
                })
                setMovie(data.Search)
            }
            else {
                setIserror({
                    show: true,
                    msg: data.Error,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        let searchTimer = setTimeout(() => {
            getMoviesData(`${API_URl}&s=${query}`)
        },1000)

        return () => {
            clearTimeout(searchTimer)
        }
    }, [query])

    return (
        // <AppContext.Provider value={"Moin"}> 
        <AppContext.Provider value={{isLoading,isError,movie , query , setQuery}}> 
        {children}
        </AppContext.Provider>
    )
}

//global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext ,AppProvider, useGlobalContext}
