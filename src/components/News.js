import { Component } from 'react';
import NewsItems from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    
    static propTypes = {
        country: PropTypes.string.isRequired,
        category: PropTypes.string,
        pageSize: PropTypes.number
    };
   
    // Default props
    static defaultProps = {
        category: 'general',
        country: 'in',
        pageSize: 9
    };
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1

        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monk`;
    }
    capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);

        let parsedData = await data.json();
        //    console.log("parsedData",parsedData)
        this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults });
    }
    HandleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);

            let parsedData = await data.json();
            //    console.log("parsedData",parsedData)
            this.setState({ articles: parsedData.articles });
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
        }
    };
    HandlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });
        let data = await fetch(url);

        let parsedData = await data.json();
        //    console.log("parsedData",parsedData)
        this.setState({ articles: parsedData.articles });
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
    };
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>News Monk - Top headlines from {this.props.category}</h1>
                {this.state.loading && <Spinner />}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((ele) => (
                        <div key={ele.url} className='col-md-4'>
                            <NewsItems
                                title={ele.title ? ele.title.slice(0, 50) : ''}
                                description={ele.description ? ele.description.slice(0, 100) : ''}
                                imageUrl={ele.urlToImage}
                                newsUrl={ele.url}
                                author={ele.author}
                                date={ele.publishedAt}
                            />
                        </div>
                    ))}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.HandlePrevClick}> &larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.HandleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );

    }
}