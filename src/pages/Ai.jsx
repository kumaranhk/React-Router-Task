import { Link } from "react-router-dom"
import Course from "../components/course"

const AI = () => {
    const obj = [
        {
            title: "Chatgpt for everyone",
            image: "https://www.unimedia.tech/wp-content/uploads/2023/12/openAI-chat-gpt-1-4.jpg",
            id: 1
        },
        {
            title: "Dall E",
            image: "https://assets.hongkiat.com/uploads/dall-e-3-chatgpt/hero.jpg",
            id: 2,
        }
    ]

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap gap-5 p-5 bg-light">
                {obj.map((val) => (
                    <Link to={`/ai/${val.id}`} key={val.id} style={{ textDecoration: "none" }}>
                        <Course {...val} key={val.id} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default AI