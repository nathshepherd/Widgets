import React from 'react';
import Link from './Link';

const Header = ({options}) => {
    const renderedOptions = options.map((option) => {
        return (
            <div>
                <Link href={option.path} className="item">
                    {option.label}
                </Link>
            </div>
        )
    });
    
    return <div className="ui secondary pointing menu">{renderedOptions}</div>;
};

export default Header;