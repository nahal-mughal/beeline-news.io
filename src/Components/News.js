import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);

    const Capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const UpdateNews = async () => {
        props.setProgress(10);
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a75791c372764ae1ac5a20414c0c7efe&page=${page}&pageSize=${props.pageSize}`)
        props.setProgress(40)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${Capitalize(props.category)} - BeelineNews`
        UpdateNews();
    }, []);


    const fetchMoreData = async () => {
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a75791c372764ae1ac5a20414c0c7efe&page=${page + 1}&pageSize=${props.pageSize}`)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        setPage(page + 1)
    };

    return <>
        <h1 className="text-center" style={{ margin: '30px 0', marginTop: '90px' }}>Beeline News- Top {Capitalize(props.category)} Headlines</h1>
        {loading && <Spinner />}

        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
        >
            <div className="container">
                <div className="row">
                    {articles.map((elem) => {
                        return <div className="col-md-4 my-3" key={elem.url}>
                            <NewsItem title={elem.title} date={elem.publishedAt} author={elem.author} description={elem.description} source={elem.source.name} imageUrl={elem.urlToImage} newsUrl={elem.url} />
                        </div>
                    })}
                </div>
            </div>
        </InfiniteScroll>
    </>
}

News.defaultProps = {
    pageSize: 12,
    country: "us",
    category: "general"
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News;
