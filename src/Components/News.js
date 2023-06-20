import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
    News.defaultProps = {
        country: "in",
        pageSize: 9,
        category: "general"
    }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    // const updateNews = async () => {
    //     setLoading(true);
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04&pageSize=${props.pageSize}&page=${page}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setArticles(data.articles);
    //     setLoading(false);
    // }

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setPage(1);
                setLoading(true);
                const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04&pageSize=${props.pageSize}&page=${page}`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                setArticles(data.articles);
                setTotalResults(data.totalResults)
                setLoading(false);
                console.log("effect " + page);

                // const totalPages = Math.ceil(data.totalResults / props.pageSize);
                // setTotalPages(totalPages);

            } catch (error) {
                console.error('Error fetching articles:', error);
                setLoading(false);
            }
        };
        fetchArticles();
    }, [props.country, props.category]);

    // const handlePrevClick = () => {
    //     // setLoading(true);
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04&pageSize=${props.pageSize}&page=${page - 1}`;
    //     // let response = await fetch(url);
    //     // let data = await response.json();
    //     // setArticles(data.articles)
    //     // setLoading(false);
    //     setPage(page - 1);
    //     console.log("prev " + page);
    //     updateNews();
    // }

    // const handleNextClick = () => {
    //     // setLoading(true);
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04&pageSize=${props.pageSize}&page=${page + 1}`;
    //     // let response = await fetch(url);
    //     // let data = await response.json();
    //     // setArticles(data.articles)
    //     // setLoading(false);

    //     setPage(page + 1);
    //     console.log("next" + page);
    //     updateNews();
    // }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04 &pageSize=${props.pageSize}&page=${page+1}`;
        setPage(page + 1);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setArticles(articles.concat(data.articles));
        console.log("fetchmore " + page);
    };

    return (
        <>
            <h1 className="my-3 text-center">NewsMonkey - Top {props.category} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem
                                        title={element.title}
                                        description={element.description}
                                        imgUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>


            {/* <div className="container d-flex justify-content-between my-2">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page >= totalPages} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div> */}
        </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
