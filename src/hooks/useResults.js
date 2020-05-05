import { useEffect, useState } from 'react';
import v3 from "../api/v3"

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState("")

    const searchApi = async (searchTerm) => {
        try {
            const response = await v3.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "NYC",
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMsg('ceva nu e OK')
        }
    };

    useEffect(() => {
        searchApi("pasta")
    }, []);

    return [results, errorMsg, searchApi];
}