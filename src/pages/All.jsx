import { Link } from "react-router-dom"
import Course from "../components/course"

const All = () => {
    let obj = [
        {
            title: "Pyhton with IIT certification",
            image: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/Python-01-2.png",
            id: 1
        },
        {
            title: "Java for beginners",
            image: "https://contentstatic.techgig.com/photo/90078629.cms",
            id: 2
        },
        {
            title: "C Programming",
            image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221027121332/C-Programming-Examples.jpg",
            id: 3
        }
    ]
    return (
        <>
            <div className="d-flex justify-content-center flex-wrap gap-5 p-5 bg-light">
                {obj.map((val) => (
                    <Link to={`/all/${val.id}`} key={val.id} style={{textDecoration:"none"}}>
                        <Course {...val} key={val.id} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default All