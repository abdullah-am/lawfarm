import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import LawServices from '../LawServices/LawServices';


const Home = () => {

    const data=useLoaderData();

    return (
        <div>
            <Banner></Banner>
            
            <Lawyers data={data}></Lawyers>
            
            <LawServices></LawServices>
        </div>
    );
};

export default Home;