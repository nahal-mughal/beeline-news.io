import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
    let { title, date, author, source, description, imageUrl, newsUrl } = props
    return <div>
        <div className="card">
            <img src={imageUrl ? imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9zZ0dsOIYyjwZdkWKTE_kuxtRplsy9dexPnXEzCsMRNXXATXEmrELQz9i7z1aeStYJI&usqp=CAU'} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title">{title ? title : ""}</h5>
                <h6><span className="badge bg-dark">{source}</span></h6>
                <p className="card-text">{description ? description : ""}</p>
                <p className="card-text text-muted" >Published by {author ? author : "Unknown"} on {new Date(date).toGMTString()}</p>
                <Link to={newsUrl} target="_blank" rel="noreferrer" className="btn btn-warning btn-sm">Read More</Link>
            </div>
        </div>
    </div>;
}

export default NewsItem;
