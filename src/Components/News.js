import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default function News(props) {
    News.defaultProps = {
        country: "in",
        pageSize: 12,
        category: "general"
    }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setLoading(true);
                const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04&pageSize=${props.pageSize}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles);
                setLoading(false);

                const totalPages = Math.ceil(data.totalResults / props.pageSize);
                setTotalPages(totalPages);

            } catch (error) {
                console.error('Error fetching articles:', error);
                setLoading(false);
            }
        };
        fetchArticles();
    }, [props.country, props.pageSize, props.category]);

    const handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04&pageSize=${props.pageSize}&page=${page - 1}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();

        setPage(page - 1);
        setArticles(parsedData.articles)
        setLoading(false);
    }

    const handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=3aa85b8e1906432bbf4b9bdebe9f3d04&pageSize=${props.pageSize}&page=${page + 1}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();

        setPage(page + 1);
        setArticles(parsedData.articles)
        setLoading(false);
    }

    return (
        <div className="container my-3">
            <h1 className="my-3 text-center">NewsMonkey - Top Headlines</h1>
            {loading && <Spinner />}
            <div className="row">
                {!loading && articles.map((element) => {
                    return (
                        <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem
                                title={element.title}
                                description={element.description}
                                imgUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    )
                })}
            </div>
            <div className="container d-flex justify-content-between my-2">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
                <button disabled={page >= totalPages} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </div>
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
