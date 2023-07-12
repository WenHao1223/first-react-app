import React, { Component } from 'react';
// import { dumpLogs } from './utils';

import classes from './BlogCard.module.css';

class BlogCard extends Component {

    // onLikeBtnClick = () => {
    //     this.setState((prevState, prevProp) => {
    //         return {likeCount: prevState.likeCount + 1}
    //     });
    // }

    // dumpLogs(props);

    componentWillUnmount() {
        console.log('Unmounting Blog Cards');
    }

    render() {
        console.log('BlogCard Rendered');
    
        return(
            <div className = {classes.NewBlogCard}>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
    
                <p>Like Count: <span className = {classes.LikeCount}>{this.props.likeCount}</span></p>
                <button onClick={this.props.onLikeBtnClick}>Like</button>
            </div>
        );
    }

};

export default BlogCard;