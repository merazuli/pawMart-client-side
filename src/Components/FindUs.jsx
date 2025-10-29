import React from 'react';

const FindUs = () => {
    return (
        <div className='mt-5 space-y-5'>
            <h1 className='text-xl font-bold'>Find Us</h1>
            {/* Facebook */}
            <button className="btn w-full  border-[#005fd8]">
                <svg className='bg-blue-600 rounded-xl' aria-label="Facebook logo" width="18" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                <a href="https://web.facebook.com/mdmirazul.islamashik.5"> Find Us On</a>
            </button>
            {/* X */}
            <button className="btn bg-black w-full text-white border-black mb-5">
                <svg aria-label="X logo" width="16" height="12" viewBox="0 0 300 271" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" /></svg>
                <a href="https://x.com/home?lang=en"> Find Us On</a>
            </button>
        </div>
    );
};

export default FindUs;