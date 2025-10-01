// src/pages/SinglePackagePage.js
import React from "react";
import { useParams, Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import packageService from "./services/packageService";

const SinglePackagePage = () => {
  const { packageId } = useParams();
  
  // Get package from JSON file
  const allPackages = packageService.getPackagesAsObject();
  const pkg = allPackages[packageId];

  if (!pkg) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Package Not Found</h1>
          <Link to="/packages" className="text-emerald-500 hover:text-emerald-600">
            ← Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <SEOHead 
        title={`${pkg.name} | ${pkg.duration} | Omkar Tour and Travels`}
        description={`Book ${pkg.name} - ${pkg.duration} starting at ₹${pkg.price}. Includes ${pkg.highlights.slice(0, 3).join(', ')}`}
        keywords={`${pkg.destination}, Kerala tour packages, ${pkg.name}, ${pkg.duration}`}
      />
      
      {/* Your existing SinglePackagePage JSX remains the same */}
      {/* ... rest of your component ... */}
    </div>
  );
};

export default SinglePackagePage;