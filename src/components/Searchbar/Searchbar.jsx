import React from 'react';
import { CiSearch } from 'react-icons/ci';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Searchbar(props) {
    return (
        <>
            <form className={classNames(props.small?"md:hidden flex w-1/1":"hidden md:flex w-3/5","h-12 flex items-center border rounded-lg mx-4 bg-slate-100")}>
                <CiSearch className="mx-3 h-6 w-6" />

                <input
                    className="h-full w-11/12 outline-none md:block bg-slate-100 text-lg font-sans rounded-r-lg"
                    type="search"
                    placeholder="Search"
                />
            </form>
        </>
    );
}

export default Searchbar;