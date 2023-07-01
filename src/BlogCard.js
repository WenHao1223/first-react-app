import React from 'react';
import { dumpLogs } from './utils';

import classes from './BlogCard.module.css';

const BlogCard = (props) => {
    dumpLogs(props);
    return(
        <div className = {classes.NewBlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default BlogCard;