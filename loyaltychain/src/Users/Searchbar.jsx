import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Searchbar.css';
import { useNavigate } from "react-router-dom";

function Searchbar() {
    const [search, setSearch] = useState('');
    const  navigate = useNavigate();

    const handleMenu = () => {
      navigate('/Menu');
    };

    return (
      <div className="container">
        <div className="leftcontainer">
          <label>Dashboard</label>
        </div>
        <div className="rightcontainer">
          <div className="search-container">
            <SearchIcon className="icons" />
            <input
              type="text"
              className="search-input"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="Menu">
            <label onClick={handleMenu}>Poster ses articles</label>
          </div>
        </div>
      </div>
    )
}

export default Searchbar;