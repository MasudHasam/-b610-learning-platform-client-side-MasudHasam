import { useContext } from 'react';
import { UserContext } from '../../../AuthContext/AuthContext';
import Category from '../Category/Category';

const SideNav = ({ hadelDynamicRout }) => {
    const { category } = useContext(UserContext);
    return (
        <div className='hidden md:block lg:block w-11/12 mt-5 border-r-2 border-slate-500'>
            <h1 className='font-bold text-2xl mb-3'>All Category.</h1>
            {
                !category ? <p>Loading....</p> :
                    category.map(ctg => <Category key={ctg.categoryId} category={ctg}
                        hadelDynamicRout={hadelDynamicRout} ></Category>)
            }
        </div>
    );
};

export default SideNav;