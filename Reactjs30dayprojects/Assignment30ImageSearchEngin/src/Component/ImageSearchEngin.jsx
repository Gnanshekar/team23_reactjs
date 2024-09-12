import React, { useState } from 'react';
import './App.css';

const accessKey = "NZAsLDLaHnpxlyhxlTI0iBvyP6Vf718cfP-NJaW2IBc";

function App() {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);

    const searchImages = async () => {
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

        const response = await fetch(url);
        const data = await response.json();

        if (page === 1) {
            setResults(data.results);
        } else {
            setResults(prevResults => [...prevResults, ...data.results]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        searchImages();
    };

    const handleShowMore = () => {
        setPage(prevPage => prevPage + 1);
        searchImages();
    };

    return (
        <div className="app">
            <h1>Image Search Engine</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)} 
                    placeholder="Search anything" 
                />
                <button type="submit">Search</button>
            </form>
            <div id="Search-result">
                {results.map((result) => (
                    <a key={result.id} href={result.links.html} target="_blank" rel="noopener noreferrer">
                        <img src={result.urls.small} alt={result.alt_description} />
                    </a>
                ))}
            </div>
            {results.length > 0 && (
                <button id="show-more-btn" onClick={handleShowMore}>
                    Show More
                </button>
            )}
        </div>
    );
}

export default App;

// * {
//     margin: 0;
//     padding: 0;
//     font-family: 'Poppins', sans-serif;
//     box-sizing: border-box;
//   }
  
//   body {
//     background: #39297d;
//     color: #fff;
//   }
  
//   h1 {
//     text-align: center;
//     margin: 100px auto 50px;
//     font-weight: 600;
//   }
  
//   form {
//     width: 90%;
//     max-width: 600px;
//     margin: auto;
//     height: 80px;
//     background: #434989;
//     display: flex;
//     align-items: center;
//   }
  
//   form input {
//     flex: 1;
//     height: 100%;
//     border: 0;
//     outline: 0;
//     background: transparent;
//     color: #fff;
//     font-size: 18px;
//     padding: 0 30px;
//   }
  
//   form button {
//     padding: 0 40px;
//     height: 100%;
//     background: #ff3929;
//     font-size: 18px;
//     border: 0;
//     outline: 0;
//     border-top-left-radius: 8px;
//     border-bottom-right-radius: 8px;
//     cursor: pointer;
//   }
  
//   ::placeholder {
//     color: #fff;
//     font-size: 18px;
//   }
  
//   #show-more-btn {
//     background: #ff3929;
//     color: #fff;
//     border: 0;
//     outline: 0;
//     padding: 10px 20px;
//     border-radius: 4px;
//     margin: 10px auto 100px;
//     cursor: pointer;
//     display: block;
//   }
  
//   #Search-result {
//     width: 80%;
//     margin: 100px auto 50px;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-gap: 40px;
//   }
  
//   #Search-result img {
//     width: 100%;
//     height: 230px;
//     object-fit: cover;
//     border-radius: 5px;
//   }
  
  
  
