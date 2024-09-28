

import React from 'react';
  // Function to fetch categories data
  interface Companydata {
    name: string;
    addresse:addresse;
    email:string;
    phone:number;
  }
  interface addresse {
_id:string ;
governorate:string; 
city:string; 
address:string;
zipcode:number;
  }

/*   const fetchCategories = async (): Promise<Companydata | null> => {
    try {
      const res = await fetch(`/api/company/getCompany`, {
        method: 'GET',
        next: { revalidate: 0 }, // Disable caching to always fetch the latest data
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch company data');
      }
  
      const data: Companydata = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }; */

const Headertop: React.FC =   ()  => {
    //const Companydata = await fetchCategories();
    return (
        <header>
            <nav className='w-full h-[57px] justify-center flex bg-[#6A6A6A] max-lg:hidden'>
                <div className="flex text-white w-[90%] justify-between items-center max-2xl:text-base   text-2xl">                                            
                  {/*   <p className='flex gap-2 items-center uppercase'>Address: {Companydata?.addresse.address}, {Companydata?.addresse.zipcode} {Companydata?.addresse.city} , {Companydata?.addresse.governorate}, Tunisie</p>                    
                    <div className="flex gap-16 items-center ">                                                    
                        <p className='flex gap-2 items-center'>TELE: {Companydata?.phone}</p>                                                                        
                        <p className='flex gap-2 items-center'>EMAIL: {Companydata?.email}</p>                                                
                    </div> */}
                </div>
            </nav>
        </header>
    );
};

export default Headertop;
