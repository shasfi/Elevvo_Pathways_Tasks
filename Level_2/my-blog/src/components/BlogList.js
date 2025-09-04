import React from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }) {
  return (
    <motion.div 
      className="blog-grid"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </motion.div>
  );
}
