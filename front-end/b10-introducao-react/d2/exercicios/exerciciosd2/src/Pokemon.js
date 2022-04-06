import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;
        return (
            <div className='pokemon'>
                <p>Name: {name}</p>
                <p>Type: {type}</p>
                <p>Weight: {averageWeight.value}</p>
                <img src={image} alt={`${name} sprite`}></img>
            </div>
        );
    }
};


export default Pokemon;