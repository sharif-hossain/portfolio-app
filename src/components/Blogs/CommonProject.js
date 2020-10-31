import React from 'react';

const CommonProject = ({data}) => {
    return (
        <div>
            <h2 className="font-weight-bold">Name: {data.title}</h2>
        </div>
    );
};

export default CommonProject;