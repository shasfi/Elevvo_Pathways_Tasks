import React, { useState } from "react";
import Header from "./components/Header";
import BlogList from "./components/BlogList";
import './index.css';

import post1 from './assets/react.jpg';
import post2 from './assets/travel.jpg';
import post3 from './assets/food.jpg';
import post4 from './assets/advanced.png';
import post5 from './assets/web.jpg';
import post6 from './assets/app.jpeg';
import post7 from './assets/ml.jpg';
import post8 from './assets/ai.jpg';
import post9 from './assets/data.jpg';
import post10 from './assets/database.jpeg';
// Agar 10+ images chahiye to same pattern se import karo: post5.jpg ... post10.jpg

function App() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;  // ab 9 posts per page

  const posts = [
  {id:1, title:"React Basics", category:"Tech", desc:"A beginner's guide to React. Learn components, state, and props step by step.", date:"2025-08-31", img: post1},
  {id:2, title:"Travel Diaries", category:"Travel", desc:"Join me on my journey to the mountains and explore breathtaking landscapes.", date:"2025-08-20", img: post2},
  {id:3, title:"Food Lover", category:"Food", desc:"Discover simple and delicious recipes you can make at home.", date:"2025-08-15", img: post3},
  {id:4, title:"Advanced React", category:"Tech", desc:"Deep dive into React hooks, context API, and state management for advanced apps.", date:"2025-08-25", img: post4},
  {id:5, title:"Web Development Trends", category:"Tech", desc:"Latest trends in web development including frameworks, tools, and best practices.", date:"2025-08-28", img: post5},
  {id:6, title:"Mobile App Development", category:"Tech", desc:"Learn how to build Android and iOS apps using modern technologies.", date:"2025-08-18", img: post6},
  {id:7, title:"Machine Learning Basics", category:"Tech", desc:"Introduction to machine learning concepts and algorithms for beginners.", date:"2025-08-12", img: post7},
  {id:8, title:"AI Revolution", category:"Tech", desc:"Explore how Artificial Intelligence is transforming industries and daily life.", date:"2025-08-05", img: post8},
  {id:9, title:"Data Science Insights", category:"Tech", desc:"Understanding data science, analytics, and real-world applications.", date:"2025-08-02", img: post9},
  {id:10, title:"Database Management", category:"Tech", desc:"Learn SQL and NoSQL databases, queries, and data modeling techniques.", date:"2025-07-30", img: post10}
];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div>
      <Header search={search} setSearch={setSearch} />

      <BlogList posts={currentPosts} />

      {/* Pagination Buttons */}
      <div style={{textAlign:"center", margin: "20px"}}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i+1} 
            onClick={() => setCurrentPage(i+1)}
            style={{
              margin:"5px", padding:"8px 12px", cursor:"pointer", 
              background: currentPage===i+1?"#007bff":"#eee", 
              color: currentPage===i+1?"#fff":"#000", 
              border:"none", borderRadius:"5px"
            }}
          >
            {i+1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;