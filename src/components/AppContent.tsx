import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLoading } from '../hooks/useLoading';
import { useRouteLoading } from '../hooks/useRouteLoading';
import LoadingSpinner from './loading/LoadingSpinner';
import RouteLoader from './loading/RouteLoader';
import PageTransition from './loading/PageTransition';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CourseDetails from '../pages/CourseDetails';
import CoursePurchase from '../pages/CoursePurchase';
import NotFound from '../pages/NotFound';

export default function AppContent() {
  const isLoading = useLoading();
  const isRouteLoading = useRouteLoading();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isRouteLoading && <RouteLoader />}
      <div className={`min-h-screen bg-white ${isLoading ? 'opacity-0' : 'animate-fade-in'}`}>
        <Header />
        <PageTransition>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/purchase" element={<CoursePurchase />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    </>
  );
}