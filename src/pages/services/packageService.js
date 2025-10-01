// src/services/packageService.js

// Import the JSON file
import packageData from '../data/tourPackages.json';

class PackageService {
  // Get all packages
  getAllPackages() {
    return packageData.packages;
  }

  // Get package by ID
  getPackageById(id) {
    return packageData.packages.find(pkg => pkg.id === id);
  }

  // Convert packages array to object for easy lookup
  getPackagesAsObject() {
    const packagesObject = {};
    packageData.packages.forEach(pkg => {
      packagesObject[pkg.id] = pkg;
    });
    return packagesObject;
  }

  // Export packages as JSON file
  exportPackages() {
    const dataStr = JSON.stringify(packageData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tour-packages.json';
    link.click();
    URL.revokeObjectURL(url);
  }

  // This would be used if you want to update the JSON file dynamically
  // Note: In a real app, you'd need a backend for this
  updatePackage(updatedPackage) {
    const packageIndex = packageData.packages.findIndex(pkg => pkg.id === updatedPackage.id);
    if (packageIndex !== -1) {
      packageData.packages[packageIndex] = updatedPackage;
      // In a real application, you would send this to your backend API
      console.log('Package updated (in memory):', updatedPackage);
      return true;
    }
    return false;
  }

  // Add new package
  addNewPackage(newPackage) {
    packageData.packages.push(newPackage);
    console.log('Package added (in memory):', newPackage);
    return true;
  }

  // Delete package
  deletePackage(packageId) {
    const packageIndex = packageData.packages.findIndex(pkg => pkg.id === packageId);
    if (packageIndex !== -1) {
      packageData.packages.splice(packageIndex, 1);
      console.log('Package deleted (in memory):', packageId);
      return true;
    }
    return false;
  }
}

export default new PackageService();