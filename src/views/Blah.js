import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export const blahLoader = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json()
}

const Blah = () => {
    const users = useLoaderData();

    return ( <section>
            {users.map(user => (
                <article key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Company: {user.company.name}</p>
                </article>
                ))}
            
                

        </section>
    )
}
 
export default Blah;