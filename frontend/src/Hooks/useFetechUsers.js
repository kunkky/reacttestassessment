import React, { useEffect, useState } from 'react'
import BaseUrl from '../BaseUrl'

const useFetechUsers = () => {
    const url = "getAllUsers";
    //set all state
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState(null)
    const [userError, setUserError] = useState(null)


    const fetchApi = async () => {
     
        setLoading(true);
        fetch(BaseUrl + url, {
            method: 'Get',
        })
            .then(response => response.json())
            .then(data => {
                // Data successfully retrieved
                setLoading(false);
              //send data
                setUsers(data.data)
            })
            .catch(error => {
                // Handle any errors
                setLoading(false);
                setUserError(error)
            });
    }
    useEffect(() => {
        fetchApi()
    }, [url])

    return {
        userError,
        loading,
        users
    }
}

export default useFetechUsers