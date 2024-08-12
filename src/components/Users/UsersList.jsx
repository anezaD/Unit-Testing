import axios from "axios";
import { useEffect, useState } from "react";
import UserItem from "./UserItem";

const UsersList = () => {

    axios.defaults.baseURL = "https://api.github.com/"

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("users");
                setData(response.data.slice(0, 10));

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return (<>Loading...</>);

    if (error) return (<>error...</>);

    return (<>
        {data && <div> <h1> Title </h1> <ul>
            {data.map(item =>
                <li key={item.id}> <UserItem name={item.login} type={item.type} /></li>
            )}
        </ul></div>}
    </>);

}

export default UsersList;