import React from 'react';
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import SmallCard from './components/SmallCard';


function App() {
  const customStyle = { 
    color: '#484A4F',
    letterSpacing: '-0.04em',
    fontSize: 32
  }

  return (

    <React.Fragment >
    <div class=" h-full flex bg-gray-100">
      <div class="w-40 sm:w-64 p-4 mt-8 m-10 bg-white sidebar">
        <div className="text-4xl font-extrabold text-left my-4" style={customStyle}>
          Snazzy
        </div>
        <Sidebar title="Templates"/>
      </div>
        <div class="flex-1 flex bg-gray-100 overflow-hidden">
          <div class="px-6 py-4 flex-1">
            <Card 
              title="Shopify - Build an online business - Start Today" description="No.1 eCommerce Platform for All Businesses. Start, Run + Grow Your Business with Shopify®. Customize Your Store With Our Website Builder. Trusted by Over 1,000,000 Businesses. Full Blogging Platform. Social Media Integration. Drop Shipping Integration. "
            />
            <Card 
              title="Shopify - Build an online business - Start Today" description="No.1 eCommerce Platform for All Businesses. Start, Run + Grow Your Business with Shopify®. Customize Your Store With Our Website Builder. Trusted by Over 1,000,000 Businesses. Full Blogging Platform. Social Media Integration. Drop Shipping Integration. "
            />
            <Card 
              title="Shopify - Build an online business - Start Today" description="No.1 eCommerce Platform for All Businesses. Start, Run + Grow Your Business with Shopify®. Customize Your Store With Our Website Builder. Trusted by Over 1,000,000 Businesses. Full Blogging Platform. Social Media Integration. Drop Shipping Integration. "
            />
            <Card 
              title="Shopify - Build an online business - Start Today" description="No.1 eCommerce Platform for All Businesses. Start, Run + Grow Your Business with Shopify®. Customize Your Store With Our Website Builder. Trusted by Over 1,000,000 Businesses. Full Blogging Platform. Social Media Integration. Drop Shipping Integration. "
            />
              
          </div>
        </div>
        <div class="w-40 sm:w-64 mx-16 sidebar items-center">
          <SmallCard title="Company" smallDescription="Shopify" />
          <SmallCard title="Brand Keywords" smallDescription="Ecommerce" />
          <SmallCard title="Audience" smallDescription="Small Businesses..."  />
          <SmallCard title="Description" smallDescription="Small Businesses..."/>
          <button className="text-center font-bold h-12 shadow rounded-lg bg-gradient-to-r text-white" style={{width: '200px', backgroundImage: 'linear-gradient(to right, #56CCF2 , #2F80ED)'}}>
            Create
          </button>

          <div className="flex items-center justify-center w-full mb-24 font-bold h-12 rounded-lg from-gray-100 mt-6 py-2" style={{ color: '#595959', width: '200px', boxShadow: '2.5px 5px 10px rgba(174, 174, 192, 0.2) inset'}}>
            <label 
              for="toogleA"
              class="flex items-center cursor-pointer"
            >
              <div class="ml-3 text-gray-700 font-medium">
                Magic&nbsp;
              </div>
              <div class="relative">
                <input id="toogleA" type="checkbox" class="hidden" />
                <div
                  class="toggle__line w-10 h-4 bg-green-400 rounded-full shadow-inner"
                ></div>
                <div
                  class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 right-0"
                  style={{marginTop: '-5px'}}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;
