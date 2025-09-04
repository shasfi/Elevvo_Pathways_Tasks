import React from "react";
import { CheckCircle, Users, Zap, Facebook, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function TaskFlow() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}   // 👈 repeat every scroll
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">TaskFlow</h1>
        <p className="text-lg mb-6">
          Organize your tasks, boost productivity, and stay in flow.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </motion.header>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.2 }}   // 👈 repeat every scroll
          className="p-6 bg-white shadow rounded-2xl"
        >
          <Zap className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
          <h3 className="font-bold text-xl mb-2">Fast & Simple</h3>
          <p>Easily add, edit, and manage your daily tasks with a clean interface.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.2 }}
          className="p-6 bg-white shadow rounded-2xl"
        >
          <CheckCircle className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
          <h3 className="font-bold text-xl mb-2">Stay Organized</h3>
          <p>Prioritize tasks, set deadlines, and never miss important work.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="p-6 bg-white shadow rounded-2xl"
        >
          <Users className="mx-auto w-10 h-10 text-indigo-600 mb-4" />
          <h3 className="font-bold text-xl mb-2">Team Collaboration</h3>
          <p>Share tasks with your team and track progress in real-time.</p>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-16 bg-indigo-50 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-10">What Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <blockquote className="bg-white p-6 shadow rounded-xl">
            "TaskFlow changed my life. I’m more productive than ever!"
            <footer className="mt-4 font-semibold">— Ali, Student</footer>
          </blockquote>
          <blockquote className="bg-white p-6 shadow rounded-xl">
            "Managing projects with my team is so smooth now."
            <footer className="mt-4 font-semibold">— Sana, Developer</footer>
          </blockquote>
          <blockquote className="bg-white p-6 shadow rounded-xl">
            "Clean design and easy to use. Highly recommended!"
            <footer className="mt-4 font-semibold">— Farhan, Designer</footer>
          </blockquote>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-16 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-10">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Free</h3>
            <p className="mb-4">Basic task management for individuals.</p>
            <p className="text-2xl font-bold mb-4">$0</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full">
              Get Free
            </button>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-2xl border-2 border-indigo-600">
            <h3 className="font-bold text-xl mb-2">Pro</h3>
            <p className="mb-4">Advanced features for professionals.</p>
            <p className="text-2xl font-bold mb-4">$9/mo</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full">
              Go Pro
            </button>
          </div>
          <div className="bg-white p-8 shadow rounded-2xl">
            <h3 className="font-bold text-xl mb-2">Team</h3>
            <p className="mb-4">Collaboration tools for small teams.</p>
            <p className="text-2xl font-bold mb-4">$19/mo</p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full">
              Start Team
            </button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="py-10 bg-gray-900 text-gray-300 text-center"
      >
        <p className="mb-4">Contact us: support@taskflow.com</p>
        <div className="flex justify-center gap-6">
          <a href="#"><Facebook className="w-6 h-6 hover:text-white" /></a>
          <a href="#"><Twitter className="w-6 h-6 hover:text-white" /></a>
          <a href="#"><Mail className="w-6 h-6 hover:text-white" /></a>
        </div>
        <p className="mt-6 text-sm">&copy; 2025 TaskFlow. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}