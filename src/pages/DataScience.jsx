import Course from "../components/course";

const DataScience = () => {
    let obj = [
        {
            title: "Python",
            image: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/Python-01-2.png",
            id: 1
        },
        {
            title: "My SQL",
            image: "https://img-c.udemycdn.com/course/750x422/5167442_873c.jpg",
            id: 2
        },
        {
            title: "Power BI",
            image: "https://www.teknologisk.dk/_/media/87136&w=1460&h=808&r=cover&_filename=87136_Power%20BI_topbillede2000x2000.jpg",
            id: 3
        },
        {
            title: "Machine learning",
            image: "https://i.itworldcanada.com/wp-content/uploads/2023/08/GettyImages-1448152453-696x391.jpg",
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

export default DataScience