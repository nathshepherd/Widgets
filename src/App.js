import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

export default () => {
    // Accordion Items
    const items = [
        {
            title: 'What is React?',
            content: 'React is a front end javascript framework'
        },
        {
            title: 'Why use React?',
            content: 'React is a good time'
        },
        {
            title: 'How do you use React?',
            content: 'You use React by creating components'
        }
    ];

    // Dropdown Colour Options 
    const options = [
        {
            label: 'The Colour Red',
            value: 'red'
        },
        {
            label: 'The Colour Green',
            value: 'green'
        },
        {
            label: 'A Shade of Blue',
            value: 'blue'
        }
    ];

    const headers = [
        {
            label: "Accordion",
            path: "/"
        },
        {
            label: "Search",
            path: "/search"
        },
        {
            label: "Dropdown",
            path: "/dropdown"
        },
        {
            label: "Translate",
            path: "/translate"
        }
    ];

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header options={headers}/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <div>
                    <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options}
                    label="Select a Colour"
                    />
                    <span style={{color: `${selected.value}`}}>This text is {selected.value}</span>
                </div>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};