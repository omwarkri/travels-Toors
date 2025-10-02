// src/components/admin/AdminPanel.js
import React, { useState } from 'react';
import { usePackagesData } from '../hooks/usePackagesData';

const AdminPage = () => {
  const {
    packages,
    isLoading,
    updatePackage,
    deletePackage,
    importPackages,
    getAllPackages
  } = usePackagesData();

  const [editingPackage, setEditingPackage] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [importData, setImportData] = useState('');
  const [showImport, setShowImport] = useState(false);
  const [formData, setFormData] = useState(getInitialFormData());

  function getInitialFormData() {
    return {
      id: '',
      name: '',
      duration: '',
      destination: '',
      bestSeason: '',
      price: '',
      originalPrice: '',
      discount: '',
      rating: '',
      reviews: '',
      image: '',
      images: [''],
      description: '',
      detailedDescription: '',
      highlights: [''],
      itinerary: [{ day: '', title: '', description: '' }],
      inclusions: [''],
      exclusions: ['']
    };
  }

  // Add all the missing handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleItineraryChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addItineraryItem = () => {
    setFormData(prev => ({
      ...prev,
      itinerary: [...prev.itinerary, { day: '', title: '', description: '' }]
    }));
  };

  const removeItineraryItem = (index) => {
    setFormData(prev => ({
      ...prev,
      itinerary: prev.itinerary.filter((_, i) => i !== index)
    }));
  };

  const resetForm = () => {
    setFormData(getInitialFormData());
    setEditingPackage(null);
    setIsAddingNew(false);
  };

  const handleEdit = (pkg) => {
    setFormData({
      ...pkg,
      images: pkg.images && pkg.images.length > 0 ? pkg.images : [''],
      highlights: pkg.highlights && pkg.highlights.length > 0 ? pkg.highlights : [''],
      itinerary: pkg.itinerary && pkg.itinerary.length > 0 ? pkg.itinerary : [{ day: '', title: '', description: '' }],
      inclusions: pkg.inclusions && pkg.inclusions.length > 0 ? pkg.inclusions : [''],
      exclusions: pkg.exclusions && pkg.exclusions.length > 0 ? pkg.exclusions : ['']
    });
    setEditingPackage(pkg.id);
    setIsAddingNew(false);
  };

  const handleAddNew = () => {
    resetForm();
    setIsAddingNew(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.id || !formData.name) {
      alert('Package ID and Name are required');
      return;
    }

    // Clean up empty array items
    const cleanedData = {
      ...formData,
      images: formData.images.filter(img => img.trim() !== ''),
      highlights: formData.highlights.filter(h => h.trim() !== ''),
      inclusions: formData.inclusions.filter(i => i.trim() !== ''),
      exclusions: formData.exclusions.filter(e => e.trim() !== ''),
      itinerary: formData.itinerary.filter(item => 
        item.day.trim() !== '' || item.title.trim() !== '' || item.description.trim() !== ''
      )
    };

    try {
      updatePackage(cleanedData);
      alert(isAddingNew ? 'Package added successfully!' : 'Package updated successfully!');
      resetForm();
    } catch (error) {
      alert('Error saving package: ' + error.message);
    }
  };

  const handleDelete = (packageId) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      deletePackage(packageId);
      alert('Package deleted successfully!');
    }
  };

  const handleImport = () => {
    if (importPackages(importData)) {
      setImportData('');
      setShowImport(false);
      alert('Data imported successfully!');
    } else {
      alert('Error importing data. Please check the JSON format.');
    }
  };

  const exportData = () => {
    const allPackages = getAllPackages();
    const exportObj = {};
    allPackages.forEach(pkg => {
      exportObj[pkg.id] = pkg;
    });
    
    const dataStr = JSON.stringify(exportObj, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'packages-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading packages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Tour Packages Admin Panel</h1>
            <div className="space-x-4">
              <button
                onClick={handleAddNew}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Add New Package
              </button>
              <button
                onClick={exportData}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Export Data
              </button>
              <button
                onClick={() => setShowImport(!showImport)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Import Data
              </button>
            </div>
          </div>

          {/* Import Section */}
          {showImport && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">Import Package Data</h3>
              <p className="text-sm text-yellow-700 mb-3">
                Paste your JSON data below. This will replace all current packages.
              </p>
              <textarea
                value={importData}
                onChange={(e) => setImportData(e.target.value)}
                rows="6"
                className="w-full border rounded px-3 py-2 mb-3 font-mono text-sm"
                placeholder="Paste JSON data here..."
              />
              <div className="flex space-x-3">
                <button
                  onClick={handleImport}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Import Data
                </button>
                <button
                  onClick={() => setShowImport(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Package List */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Current Packages ({Object.keys(packages).length})
            </h2>
            {Object.keys(packages).length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No packages found. Click "Add New Package" to get started.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(packages).map((pkg) => (
                  <div key={pkg.id} className="border rounded-lg p-4 bg-white shadow">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name}
                      className="w-full h-32 object-cover rounded mb-2"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                      }}
                    />
                    <h3 className="font-semibold text-lg mb-1">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{pkg.duration}</p>
                    <p className="text-green-600 font-bold mb-2">₹{pkg.price}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(pkg)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(pkg.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Add/Edit Form */}
          {(isAddingNew || editingPackage) && (
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4">
                {isAddingNew ? 'Add New Package' : `Edit Package: ${formData.name}`}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Package ID *</label>
                    <input
                      type="text"
                      name="id"
                      value={formData.id}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Package Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex space-x-4 pt-6">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    {isAddingNew ? 'Add Package' : 'Update Package'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;