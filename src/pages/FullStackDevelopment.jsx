import Course from "../components/course"

const FullStackDevelopment = () => {
    const obj = [
        {
            title: "Javascript",
            image: "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg",
            id: 1
        },
        {
            title: "React JS",
            image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
            id: 2,
        },
        {
            title: "Node Js",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXo0ASgjrrYWk2jzFDBze8VG0VB0MmSR_MWW42p-XsQ&s",
            id: 3
        },
        {
            title: "Mongo DB",
            image: "https://miro.medium.com/v2/resize:fit:1200/0*BmLKgrU_qFtakYsB.png",
            id: 4
        }
    ]

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap gap-5 p-5">
                {obj.map((val) => (
                    <Course {...val} key={val.id} />
                ))}
            </div>
        </>
    )
}

export default FullStackDevelopment