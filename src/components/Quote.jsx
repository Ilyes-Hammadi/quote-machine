import React from 'react'
import PropTypes from 'prop-types';

const Quote = (props) => {
    return (
        <div className="quote">
            <div className="content">
                <i className="fa fa-quote-left" aria-hidden="true"></i>
                <span>{props.quote.quote}</span>
            </div>
            <div className="author">
                <span >- {props.quote.author}</span>
            </div>
        </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.object.isRequired
}

export default Quote;