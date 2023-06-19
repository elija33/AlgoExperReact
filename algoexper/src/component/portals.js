import { useState } from 'react';

export default function App() {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <>
            <div className='container'>
                <button onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? 'Show Modal' : 'Hide Modal'}
                </button>
                {isHidden || <Modal />}
            </div>
            <p className='other'>
                Other Content
            </p>
        </>
    );
}

function Modal() {
    return <p className='modal'>Modal</p>;
}