// src/hooks/usePackagesData.js
import { useState, useEffect } from 'react';
import { packagesData as initialData, updatePackagesData } from '../data/packagesData';

export const usePackagesData = () => {
  const [packages, setPackages] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = () => {
    const packagesObj = {};
    Object.values(initialData).forEach(pkg => {
      packagesObj[pkg.id] = pkg;
    });
    setPackages(packagesObj);
    setIsLoading(false);
  };

  const updatePackage = (packageData) => {
    // Update the source data
    initialData[packageData.id] = packageData;
    updatePackagesData(initialData);
    
    // Update local state
    setPackages(prev => ({
      ...prev,
      [packageData.id]: packageData
    }));
    
    return packageData;
  };

  const deletePackage = (packageId) => {
    // Update the source data
    delete initialData[packageId];
    updatePackagesData(initialData);
    
    // Update local state
    setPackages(prev => {
      const newPackages = { ...prev };
      delete newPackages[packageId];
      return newPackages;
    });
    
    return true;
  };

  const importPackages = (jsonData) => {
    try {
      const importedData = JSON.parse(jsonData);
      
      // Clear current data
      Object.keys(initialData).forEach(key => {
        delete initialData[key];
      });
      
      // Add imported data
      Object.assign(initialData, importedData);
      updatePackagesData(initialData);
      
      // Update local state
      const packagesObj = {};
      Object.values(initialData).forEach(pkg => {
        packagesObj[pkg.id] = pkg;
      });
      setPackages(packagesObj);
      
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  };

  return {
    packages,
    isLoading,
    updatePackage,
    deletePackage,
    importPackages,
    getAllPackages: () => Object.values(packages),
    getPackageById: (id) => packages[id] || null
  };
};