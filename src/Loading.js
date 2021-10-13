import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css';

const Loading = () => (
    <div className="Loading">
        <ReactLoading className="Loading-spinner"
                      type={'spinningBubbles'}
                      color={'white'}
                      height={100}
                      width={100} />
    </div>
);

export default Loading;
