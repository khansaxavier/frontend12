import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout"


const Link = () => {
    return ( 
        <Layout>
            <h1>Home</h1>
            <link to="/about">Go To About</link>
            <br />
            <Link to="/user/:name">Go To User 1</Link>
        </Layout>
     );
};
 
export default Link;