
import React from 'react'
import Header from '../components/header';
import Card from '../components/card';
const getListings = async () => {
  try {
    let response = await fetch('/api/projects');
    let data = await response.json();

    // Ensure `data.result` is an array
    if (data.success && Array.isArray(data.result)) {
      console.log('Fetched data:', data.result); 
      return data.result;
      
    } else {
      console.error('API response was not successful or result is not an array:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}


const Page = async () => {
    const listings = await getListings();
    console.log('Listings in Page component:', listings);
    
  return (
    <div>
      <Header />
      <div>
        {listings.length === 0 ? console.log(
          <div>Results not found</div> // Display message if no results found
         ) : (
          listings.map((item) => {
            console.log('Item:', item);  return (
            <Card key={item._id} businessName={item.businessName} ownerName={item.businessUsername} email={item.businessEmail} password={item.businessPassword} businessAddress={item.address}  businessPhone={item.phoneNumber} businessAbout={item.aboutBusiness}/>
          )})
        )}
      </div>
    </div>
  )
}

export default Page
