import  { Component } from 'react';

export default class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl,author,date } = this.props;
        const formattedDate = new Date(date).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
          });
        return (
            <div className="my-3" style={{ width: '18rem' }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}<span class="badge text-bg-success">New</span></h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <p className="card-text">
          <small className="text-muted">By {author ? author : 'Unknown'} on {formattedDate}</small>
        </p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">
                        Read More
                    </a>

                </div>
            </div>
        );
    }
}