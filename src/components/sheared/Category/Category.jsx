import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Category = ({ category, hadelDynamicRout, }) => {
    const { name, categoryId } = category;
    // console.log(categoryId);

    return (
        <div onClick={() => hadelDynamicRout(categoryId)} className='mb-3 hover:bg-orange-300 px-3 py-1 rounded-md'>
            {
                <NavLink>{name}</NavLink>
            }
        </div>
    );
};

export default Category;