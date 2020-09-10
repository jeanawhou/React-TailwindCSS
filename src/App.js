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
      <div class=" h-full flex" style={{background: '#F6F8FB'}}>
        <div class="w-40 px-12 bg-white sidebar" style={{width: '275px'}}>
          <div className="text-4xl font-extrabold text-left my-4" style={customStyle}>
            Snazzy
          </div>
          <Sidebar title="Templates"/>
        </div>
        <div class="flex overflow-hidden" >
          <div class="flex-auto" style={{paddingLeft: '51px', marginTop: '37px'}}>
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
        <div class="w-40 sm:w-64 sidebar" style={{textAlign: '-webkit-center', marginTop: '21px', marginLeft: '40px'}}>
          <SmallCard title="Company" smallDescription="Shopify" />
          <SmallCard title="Brand Keywords" smallDescription="Ecommerce..." />
          <SmallCard title="Audience" smallDescription="Small Businesses..."  />
          <SmallCard title="Description" smallDescription="Small Businesses..."/>
          <button
            className="text-center font-semibold mt-6 shadow bg-gradient-to-r text-white"
            style={{width: '201px', backgroundImage: 'linear-gradient(to right, #56CCF2 , #2F80ED)', letterSpacing: '0.03em',
            fontSize: '16px',
            lineHeight: '22px',
            height: '43px',
            borderRadius: '6px'
            }}>
            Create
          </button>

          <div
            className="flex items-center justify-center w-full mb-24 font-bold rounded-lg from-gray-100 py-2"
            style={
              {
                backgroundBlendMode: 'soft-light',
                boxShadow: 'inset -4.08333px -4.08333px 4.08333px rgba(255, 255, 255, 0.7), inset 6.125px 6.125px 4.08333px rgba(174, 174, 192, 0.2)',
                borderRadius: '16px',
                width: '201px',
                height: '51px',
                fontFamily: 'Montserrat',
                marginTop: '16px'
              }}>
            <label 
              for="toogleA"
              class="flex items-center cursor-pointer"
            >
              <div class="ml-3 font-semibold" style={{lineHeight: '23px', color: '#595959'}}>
                Magic&nbsp;
              </div>
              <div class="relative">
                <input id="toogleA" type="checkbox" class="hidden" />
                <div
                  class="toggle__line w-10 h-4 rounded-full shadow-inner"
                  style={{background: '#D9F7BE'}}
                ></div>
                <div
                  class="toggle__dot absolute w-5 h-4 rounded-full shadow inset-y-0 right-0"
                  style={{ background: '#F0F0F3'}}
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
