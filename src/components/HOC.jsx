import React from 'react';

const Hoc = (Component) => {

    const colorArr = ['red', 'blue', 'green', 'pink', 'orange'];

    const randomColor = colorArr[Math.floor(Math.random() * 5)];

    const cls = randomColor + '-text';

    return (props) => {
        return (
            <div className={cls}>
                <Component {...props} />
            </div>
        )
    }
}

export default Hoc;