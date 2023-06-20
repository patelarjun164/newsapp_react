import React from 'react'

export default function NewsItem(props) {
    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    const noTitle = "Lorem ipsum dolor sit amet consectetur adipi.";
    const noImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkS5BwH-hO_V8TV-sGbWiCOETAvjgt4HvTJ9HEkxU&s"
    const noDes = "Description is not availaible at this moment, tap on read more button for read the article.";
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>{source}</span>
                <img src={imgUrl !== null ? imgUrl : noImg} className="card-img-top" alt="..." style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title !== null ? title.slice(0, 45) : noTitle}...</h5>
                    <p className="card-text">{description !== null ? description.slice(0, 88) : noDes}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
