import React from 'react';
import Banner from './Banner';
import ProductList from '../components/ProductList';
import AddCraftList from './AddCraftList';

const Header = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductList></ProductList>
            <div className='min-h-screen flex items-center justify-center'>
                <AddCraftList></AddCraftList>
            </div>
        </div>
    );
};

export default Header;