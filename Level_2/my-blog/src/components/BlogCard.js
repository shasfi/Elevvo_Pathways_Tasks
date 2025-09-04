import React from "react";
import { motion } from "framer-motion";

export default function BlogCard({ post }) {
  return (
    <motion.div
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src={post.img} alt={post.title} className="blog-img"/>
      <div className="blog-card-content">
        <h2>{post.title}</h2>
        <p>{post.date} | {post.category}</p>
        <p>{post.desc}</p>
      </div>
    </motion.div>
  );
}
