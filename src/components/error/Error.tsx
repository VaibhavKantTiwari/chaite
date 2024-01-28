import { Link } from "react-router-dom";


function Page404(){
    return(
        <>
        <h3>either you are refreshing the page </h3>
        <p>it is only the front-end of the chat_App</p>
        <h3>or the route is wrong </h3>
        <Link to="/"> go to home page</Link>
        </>
        
    )
}
export default Page404;