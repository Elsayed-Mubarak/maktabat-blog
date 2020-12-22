import { styled } from '@material-ui/core';
import styles from './SearchBox.module.css'

export default function SearchAppBar() {
    return (
        <div className={styled.searchbox}>
            <form className="form-inline active-cyan-4">
                <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                <i className="fas fa-search" aria-hidden="true" />
            </form>
        </div>

    );
}