import React, { Suspense } from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';


const Blog = ({data}) => {
   
    return (
        <div>
            <h1 className='text-[40px] font-extrabold text-center'>BLogs</h1>
            <div className=' p-10'>   
            <Suspense fallback={<span>Loading....</span>}>
            {
                data.map((blog)=><BlogDetail key={blog.id} blog={blog} ></BlogDetail>)
            }
            </Suspense>
            </div>
        </div> 
    );
};

export default Blog;