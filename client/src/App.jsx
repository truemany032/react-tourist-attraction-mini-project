import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import TouristAttractionList from "./components/TouristAttractionList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/trips?keywords=${searchQuery}`)
      .then((response) => {
        setAttractions(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTagClick = (tag) => {
    setSearchQuery((prevQuery) => (prevQuery ? `${prevQuery} ${tag}` : tag));
  };

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("ลิงก์ถูกคัดลอกแล้ว!");
    });
  };

  return (
    <div className="App">
      <h1>เที่ยวไหนดี</h1>
      <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
      <TouristAttractionList
        attractions={attractions}
        onTagClick={handleTagClick}
        onCopyLink={handleCopyLink}
      />
    </div>
  );
}

export default App;