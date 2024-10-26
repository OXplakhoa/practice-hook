import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (opts, axiosInstance = axios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    if (!opts.url) return state; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance(opts);
                setState({
                    loading: false,
                    data: response.data, 
                    error: null
                });
            } catch (error) {
                setState({
                    loading: false,
                    data: null,
                    error: error.message
                });
            }
        };
        fetchData();
    }, []); 

    return state;
};