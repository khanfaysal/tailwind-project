import React, { useState } from 'react';

const SearchPicture = ({textSearch}) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        textSearch(text)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form action="" onSubmit={onSubmit} className="max-w-sm w-full">
                <div className="flex items-center border-b border-b-2 border-green-400 py-2">
                    <input onChange={(e)=>setText(e.target.value)} type="text" className="bg-transparent appearance-none border-none text-gray-700 w-full mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder =" Search Image.." />
                    <button type='submit' className="bg-green-400 flex-shrink-0 hover:border-green-400 bg-green-500 border-2 text-sm text-white px-2 py-1 rounded">Search</button>
                </div>
            </form>
        </div>
    );
};

export default SearchPicture;