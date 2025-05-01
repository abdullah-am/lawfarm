import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const BlogMain = () => {
    const data=useLoaderData();
    
    return (
        <div>
            <Blog data={data}></Blog>
        </div>
    );
};

export default BlogMain;