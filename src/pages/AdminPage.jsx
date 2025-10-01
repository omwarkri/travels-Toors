// src/pages/AdminPage.js
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SEOHead from "../components/common/SEOHead";
import Footer from "../components/common/Footer";
import packageService from "./services/packageService";

const AdminPage = () => {
  const [packages, setPackages] = useState([]);
  const [editingPackage, setEditingPackage] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load packages from service
  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = () => {
    setIsLoading(true);
    const allPackages = packageService.getAllPackages();
    setPackages(allPackages);
    setIsLoading(false);
  };

  const handleEdit = (pkg) => {
    setEditingPackage({ ...pkg });
  };

  const handleDelete = (packageId) => {
    if (window.confirm("Are you sure you want to delete this package? This action cannot be undone.")) {
      const success = packageService.deletePackage(packageId);
      if (success) {
        loadPackages();
        setMessage("Package deleted successfully!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage("Error deleting package. Please try again.");
        setTimeout(() => setMessage(""), 3000);
      }
    }
  };

  const handleSave = () => {
    if (!editingPackage.name || !editingPackage.duration || !editingPackage.price) {
      setMessage("Please fill in all required fields (Name, Duration, Price)");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    const success = packageService.updatePackage(editingPackage);
    if (success) {
      loadPackages();
      setEditingPackage(null);
      setMessage("Package updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Error updating package. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleAddNew = () => {
    const newPackage = {
      id: `package-${Date.now()}`,
      name: "New Package",
      duration: "03 Nights / 04 Days",
      destination: "Add destination",
      bestSeason: "Year Round",
      price: "15,000",
      originalPrice: "18,000",
      discount: "Special Offer",
      rating: "4.5",
      reviews: "0",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      highlights: ["Add highlight 1", "Add highlight 2"]
    };
    
    const success = packageService.addNewPackage(newPackage);
    if (success) {
      loadPackages();
      setEditingPackage(newPackage);
      setMessage("New package created! Please update the details.");
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Error creating new package. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleInputChange = (field, value) => {
    setEditingPackage(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleHighlightChange = (index, value) => {
    const updatedHighlights = [...editingPackage.highlights];
    updatedHighlights[index] = value;
    setEditingPackage(prev => ({
      ...prev,
      highlights: updatedHighlights
    }));
  };

  const addHighlight = () => {
    setEditingPackage(prev => ({
      ...prev,
      highlights: [...prev.highlights, "New highlight"]
    }));
  };

  const removeHighlight = (index) => {
    const updatedHighlights = editingPackage.highlights.filter((_, i) => i !== index);
    setEditingPackage(prev => ({
      ...prev,
      highlights: updatedHighlights
    }));
  };

  const exportData = () => {
    packageService.exportPackages();
    setMessage("Data exported successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          const success = packageService.importPackages(importedData);
          if (success) {
            loadPackages();
            setMessage("Data imported successfully!");
            setTimeout(() => setMessage(""), 3000);
          } else {
            setMessage("Invalid file format. Please check the JSON structure.");
            setTimeout(() => setMessage(""), 3000);
          }
        } catch (error) {
          setMessage("Error importing file. Please check the format.");
          setTimeout(() => setMessage(""), 3000);
        }
      };
      reader.readAsText(file);
    }
    // Reset file input
    event.target.value = '';
  };

  const resetToDefault = () => {
    if (window.confirm("Are you sure you want to reset all data to default? This will erase all your changes.")) {
      const success = packageService.resetToInitial();
      if (success) {
        loadPackages();
        setEditingPackage(null);
        setMessage("Data reset to default successfully!");
        setTimeout(() => setMessage(""), 3000);
      }
    }
  };

  const cancelEdit = () => {
    setEditingPackage(null);
    setMessage("Edit cancelled.");
    setTimeout(() => setMessage(""), 3000);
  };

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading packages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEOHead 
        title="Admin Panel | Omkar Tour and Travels"
        description="Admin panel for managing tour packages"
        keywords="admin, tour packages, management"
      />
      
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Tour Packages Admin</h1>
            <p className="text-gray-600">
              Managing {packages.length} package{packages.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={exportData}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2"
            >
              <span>📥</span> Export JSON
            </button>
            <label className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300 cursor-pointer flex items-center gap-2">
              <span>📤</span> Import JSON
              <input
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
            </label>
            <button
              onClick={resetToDefault}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300 flex items-center gap-2"
            >
              <span>🔄</span> Reset Data
            </button>
            <Link 
              to="/packages"
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition duration-300 flex items-center gap-2"
            >
              <span>👁️</span> View Packages
            </Link>
          </div>
        </div>

        {message && (
          <div className={`p-4 mb-6 rounded-lg ${
            message.includes("success") || message.includes("cancelled") 
              ? "bg-green-100 text-green-700 border border-green-200" 
              : "bg-red-100 text-red-700 border border-red-200"
          }`}>
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Packages List Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Packages</h2>
                <button
                  onClick={handleAddNew}
                  className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition duration-300 text-sm flex items-center gap-1"
                >
                  <span>+</span> Add New
                </button>
              </div>
              
              {packages.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No packages found. Click "Add New" to create one.
                </div>
              ) : (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className={`p-3 rounded-lg cursor-pointer border transition duration-200 ${
                        editingPackage?.id === pkg.id 
                          ? "bg-emerald-50 border-emerald-500 shadow-md" 
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      }`}
                      onClick={() => handleEdit(pkg)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-sm">{pkg.name}</h3>
                          <p className="text-xs text-gray-600">{pkg.duration}</p>
                          <p className="text-xs text-emerald-600 font-medium">₹{pkg.price}</p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(pkg.id);
                          }}
                          className="text-red-500 hover:text-red-700 text-xs ml-2 p-1"
                          title="Delete package"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-3">
            {editingPackage ? (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Edit Package</h2>
                  <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    ID: {editingPackage.id}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Basic Information */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">Basic Information</h3>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Package Name *
                    </label>
                    <input
                      type="text"
                      value={editingPackage.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Enter package name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Duration *
                    </label>
                    <input
                      type="text"
                      value={editingPackage.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 05 Nights / 06 Days"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination
                    </label>
                    <input
                      type="text"
                      value={editingPackage.destination}
                      onChange={(e) => handleInputChange('destination', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., Alleppey, Kovalam, Thiruvananthapuram"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Best Season
                    </label>
                    <input
                      type="text"
                      value={editingPackage.bestSeason}
                      onChange={(e) => handleInputChange('bestSeason', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., Sep - Mar"
                    />
                  </div>

                  {/* Pricing Information */}
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">Pricing & Ratings</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Price *
                    </label>
                    <input
                      type="text"
                      value={editingPackage.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 22,999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Original Price
                    </label>
                    <input
                      type="text"
                      value={editingPackage.originalPrice}
                      onChange={(e) => handleInputChange('originalPrice', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 27,999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Discount Text
                    </label>
                    <input
                      type="text"
                      value={editingPackage.discount}
                      onChange={(e) => handleInputChange('discount', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., Special 18% Off"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <input
                      type="text"
                      value={editingPackage.rating}
                      onChange={(e) => handleInputChange('rating', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 4.7"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reviews Count
                    </label>
                    <input
                      type="text"
                      value={editingPackage.reviews}
                      onChange={(e) => handleInputChange('reviews', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., 89"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL
                    </label>
                    <input
                      type="text"
                      value={editingPackage.image}
                      onChange={(e) => handleInputChange('image', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="https://example.com/image.jpg"
                    />
                    {editingPackage.image && (
                      <div className="mt-2">
                        <img 
                          src={editingPackage.image} 
                          alt="Preview" 
                          className="h-20 rounded-lg object-cover border"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Highlights Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">Highlights</h3>
                    <button
                      type="button"
                      onClick={addHighlight}
                      className="bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition duration-200 flex items-center gap-1"
                    >
                      <span>+</span> Add Highlight
                    </button>
                  </div>
                  <div className="space-y-2">
                    {editingPackage.highlights.map((highlight, index) => (
                      <div key={index} className="flex gap-2 items-start">
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-sm mt-3 flex-shrink-0">
                          {index + 1}
                        </span>
                        <input
                          type="text"
                          value={highlight}
                          onChange={(e) => handleHighlightChange(index, e.target.value)}
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Enter highlight description"
                        />
                        <button
                          type="button"
                          onClick={() => removeHighlight(index)}
                          className="bg-red-500 text-white px-3 py-3 rounded hover:bg-red-600 transition duration-200 mt-1"
                          title="Remove highlight"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t">
                  <button
                    onClick={handleSave}
                    className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition duration-300 font-semibold flex items-center gap-2"
                  >
                    💾 Save Changes
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300 flex items-center gap-2"
                  >
                    ❌ Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {packages.length === 0 ? 'No Packages Available' : 'Select a Package to Edit'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {packages.length === 0 
                    ? 'Get started by creating your first tour package.' 
                    : 'Choose a package from the list or create a new one to start editing.'
                  }
                </p>
                <button
                  onClick={handleAddNew}
                  className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition duration-300 flex items-center gap-2 mx-auto"
                >
                  <span>+</span> Create New Package
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AdminPage;