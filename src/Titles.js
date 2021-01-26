import React from 'react';

const Titles = (props) => (
    <div className="grid grid-cols-1 justify-items-center">
        <h1 itemID="title" className="font-serif text-4xl font-extrabold mt-20 text-gray-600 tracking-wide">{ props.name }</h1>
        <h2 className="text-md p-4">The man who saved a billion lives</h2>
    </div>
);

export default Titles;
