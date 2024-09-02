import './page.css'
import Header from '@/app/components/header';
const getOneListings = async (businessName) => {
  try {
    let response = await fetch(`http://localhost:3000/api/projects/business/${businessName}`);
    let data = await response.json();

    // Ensure `data` is in the expected format
    if (data.data) { // Assuming `data` has a `success` field and `data` field with the results
      console.log('Fetched data:', data.data);
      return data.data;
    } else {
      console.error('API response was not successful or data is missing:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching listings:', error);
    return null;
  }
};
import React from "react";
// Example component to display business details
const BusinessPage = async ({ params }) => {
  const { businessName } = params;
  const co = await getOneListings(businessName);
  console.log(co)
  if (!co) {
    return <div>Business not found</div>;
  }

  return (
    <div className='page'>
      <Header />
      <div className='top-circle'></div>
      <div className="top-section">
        <h1 className='businessName'>{co.businessName}</h1>

        <div className='businessProcess'>
        <p className='about'>{co.aboutBusiness}</p>
        </div>
      </div>
      <div className='mid-section'>

      </div>
      
      
      <div className='info'>
      <p className="email">Email: {co.businessEmail}</p>
      <p>Address: {co.Address}</p>
      <p>Phone: {co.phoneNumber}</p>
      </div>
     
    </div>
  );
};
/*export async function getServerSideProps(context) {
    const { company } = context.params;
  
    // Fetch data based on businessName
    const response = await fetch(`http://localhost:3000/api/projects/business/${company}`);
    const data = await response.json();
  
    return {
      props: {
        business: data.business || null
      }
    };
  }*/
  
  export default BusinessPage;