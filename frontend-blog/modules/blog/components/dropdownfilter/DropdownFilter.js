import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './DropdownFilter.module.css'
const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className={styles.alldropdown}>
     
            <Dropdown className="container" isOpen={dropdownOpen} toggle={toggle}  >
                <DropdownToggle caret>
                    Categories
        </DropdownToggle>
                <DropdownMenu className={styles.dropdown} >
                    <DropdownItem >All</DropdownItem>
                    <DropdownItem>Electronic Libraries</DropdownItem>
                    <DropdownItem>Artificial Intelligence</DropdownItem>
                    <DropdownItem >Digital Repositories And Archives</DropdownItem>
                    <DropdownItem>Publishing Periodicals And Books</DropdownItem>
                    <DropdownItem>Knowledge And Research Centers</DropdownItem>
                    <DropdownItem >Search Engines And Discovery Platforms</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}

export default Example;