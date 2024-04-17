const Course = ({ title, image }) => {
    return (
        <>
            <div className="card" style={{width: "20rem"}}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <p className="card-text h4">{title}</p>
                </div>
            </div>
        </>
    )
}

export default Course