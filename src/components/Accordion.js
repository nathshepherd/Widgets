import React, {useState} from 'react';

const Accordion = ({items}) => {
const [activeIndex, setActiveIndex] = useState(null);

    // Toggles the active component of the Accordion
    const onTitleClick = (index) => {
        const selectActive = index === activeIndex ? null : index;
        setActiveIndex(selectActive);
    };

    // Renders each of the list items of the Accordion
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return ( 
        <React.Fragment key={item.title}>
            <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>;
}

export default Accordion;