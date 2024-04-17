import Course from "../components/course"

const Cybersecurity = () => {
    const obj = [
        {
            title: "Ethical hacking - Beginners",
            image: "https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2022/03/ETHICAL-HACKING.jpg",
            id: 1
        },
        {
            title: "Ethical hacking - Advanced",
            image: "https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2022/03/ETHICAL-HACKING.jpg",
            id: 2,
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

export default Cybersecurity