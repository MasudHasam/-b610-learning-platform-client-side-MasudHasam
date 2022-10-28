import React from 'react';

const FAQ = () => {
    return (
        <div className='w-11/12 mx-auto mt-20 mb-20'>
            <div tabIndex={0} className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Which technology is used in this website?
                </div>
                <div className="collapse-content">
                    <p>Hello, Welcome to our simple learning platform . basically we use javascript based technology to build this site.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Which CSS frame work is used to buil this site?
                </div>
                <div className="collapse-content">
                    <p>According to the current setuation we use tailwind to build this whole site.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Which tailwind css library is used?
                </div>
                <div className="collapse-content">
                    <p>Hear we used daisy ui . it's a free tailwind component library </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse mb-2 collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Where we host our site?
                </div>
                <div className="collapse-content">
                    <p>We host our front end in firebase and we host our backend in vercel.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;