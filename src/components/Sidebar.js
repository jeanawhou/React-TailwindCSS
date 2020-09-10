import React from 'react';
import Chevron from "./Chevron";
import anchor from '../assets/images/anchor.png'
import user from '../assets/images/user.png'


function Sidebar(props) {

  return (
    <div className="accordion__section sidebar" style={{fontFamily: 'Montserrat'}}>
      <div className={`font-bold inline-flex pt-6`}style={{color: '#828282', fontSize: '16px', fontStyle: 'normal', fontFamily: 'Montserrat'}}>
        {props.title}
        <Chevron style={{marginTop:'16px'}} width={8} fill={"#777"} />
      </div>
      <div>
        <div
          className="relative pl-4 py-2 flex font-semibold" style={{fontSize: '14px', lineHeight: '17px', color: '#333333'}}
          >
          <svg width="18" height="16" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="absolute" d="M10.8166 0.933197H10.8347C11.5734 0.93484 12.2561 1.1805 12.805 1.5946L12.8074 1.59542L12.8082 1.59624C13.1874 1.88164 13.5002 2.24574 13.7252 2.66352L17.3953 9.04667L17.4159 9.10008L20.225 13.9698C20.5246 14.476 20.6821 15.0536 20.681 15.6418C20.681 16.106 20.5849 16.5489 20.4107 16.9498L20.4156 16.963C20.2839 17.2595 20.1083 17.5346 19.8947 17.7788C19.6516 18.0641 19.3612 18.3054 19.0361 18.492C18.5499 18.7739 17.9992 18.9258 17.4372 18.9332H17.3814C16.6702 18.9326 15.9786 18.7004 15.4111 18.2718L15.4087 18.271V18.2702H15.4078C15.0287 17.9848 14.7159 17.6207 14.4909 17.2029L10.8208 10.8197L10.8002 10.7663L7.9911 5.89659L7.98699 5.88919L7.97795 5.87358C7.68695 5.37282 7.53412 4.80377 7.5351 4.2246C7.5351 3.87623 7.58933 3.54101 7.68957 3.22633V3.22551L7.69614 3.20497L7.70436 3.18032C7.74708 3.05133 7.80048 2.90344 7.80048 2.90344C7.9303 2.6093 8.10531 2.33734 8.31482 2.09496L8.36658 2.03581L8.37808 2.02348L8.37972 2.02102L8.38055 2.0202L8.38219 2.01855L8.38958 2.01034L8.39451 2.00459C8.61635 1.76139 8.87927 1.54695 9.17998 1.37441C9.66622 1.09251 10.2169 0.940561 10.7788 0.933197H10.8166ZM4.25356 18.9332H4.20591C3.64391 18.9258 3.09328 18.7739 2.60704 18.492C2.28199 18.3054 1.99155 18.0641 1.74845 17.7788C1.53481 17.5346 1.3592 17.2595 1.22754 16.963L1.23247 16.9498C1.05352 16.537 0.961503 16.0917 0.962162 15.6418C0.962162 15.0313 1.12813 14.4595 1.41816 13.9698L4.22727 9.10008L4.24781 9.04667L6.74471 4.7036C6.80715 5.23601 6.97147 5.75609 7.23439 6.22852L7.28122 6.31068L10.0558 11.1204L10.0534 11.1122L10.1084 11.2289L10.3475 11.6454L7.15223 17.2029C6.92722 17.6207 6.61441 17.9848 6.2353 18.2702H6.23448V18.271L6.23202 18.2718C5.66456 18.7004 4.97293 18.9326 4.26178 18.9332H4.25356Z" fill="#333333"/>
          </svg>&nbsp;&nbsp;&nbsp;Google Ads
        </div>
        <div
          className="relative pl-4 py-2 flex font-semibold"
          style={{fontSize: '14px', lineHeight: '17px', color: '#BDBDBD', fontFamily: 'Montserrat'}}
        >
          <svg id="Layer_1" enable-background="new 0 0 512.418 512.418" height="16" viewBox="0 0 512.418 512.418"  xmlns="http://www.w3.org/2000/svg"><path d="m437.335 75.082c-100.1-100.102-262.136-100.118-362.252 0-100.103 100.102-100.118 262.136 0 362.253 100.1 100.102 262.136 100.117 362.252 0 100.103-100.102 100.117-262.136 0-362.253zm-10.706 325.739c-11.968-10.702-24.77-20.173-38.264-28.335 8.919-30.809 14.203-64.712 15.452-99.954h75.309c-3.405 47.503-21.657 92.064-52.497 128.289zm-393.338-128.289h75.309c1.249 35.242 6.533 69.145 15.452 99.954-13.494 8.162-26.296 17.633-38.264 28.335-30.84-36.225-49.091-80.786-52.497-128.289zm52.498-160.936c11.968 10.702 24.77 20.173 38.264 28.335-8.919 30.809-14.203 64.712-15.452 99.954h-75.31c3.406-47.502 21.657-92.063 52.498-128.289zm154.097 31.709c-26.622-1.904-52.291-8.461-76.088-19.278 13.84-35.639 39.354-78.384 76.088-88.977zm0 32.708v63.873h-98.625c1.13-29.812 5.354-58.439 12.379-84.632 27.043 11.822 56.127 18.882 86.246 20.759zm0 96.519v63.873c-30.119 1.877-59.203 8.937-86.246 20.759-7.025-26.193-11.249-54.82-12.379-84.632zm0 96.581v108.254c-36.732-10.593-62.246-53.333-76.088-88.976 23.797-10.817 49.466-17.374 76.088-19.278zm32.646 0c26.622 1.904 52.291 8.461 76.088 19.278-13.841 35.64-39.354 78.383-76.088 88.976zm0-32.708v-63.873h98.625c-1.13 29.812-5.354 58.439-12.379 84.632-27.043-11.822-56.127-18.882-86.246-20.759zm0-96.519v-63.873c30.119-1.877 59.203-8.937 86.246-20.759 7.025 26.193 11.249 54.82 12.379 84.632zm0-96.581v-108.254c36.734 10.593 62.248 53.338 76.088 88.977-23.797 10.816-49.466 17.373-76.088 19.277zm73.32-91.957c20.895 9.15 40.389 21.557 57.864 36.951-8.318 7.334-17.095 13.984-26.26 19.931-8.139-20.152-18.536-39.736-31.604-56.882zm-210.891 56.882c-9.165-5.947-17.941-12.597-26.26-19.931 17.475-15.394 36.969-27.801 57.864-36.951-13.068 17.148-23.465 36.732-31.604 56.882zm.001 295.958c8.138 20.151 18.537 39.736 31.604 56.882-20.895-9.15-40.389-21.557-57.864-36.951 8.318-7.334 17.095-13.984 26.26-19.931zm242.494 0c9.165 5.947 17.942 12.597 26.26 19.93-17.475 15.394-36.969 27.801-57.864 36.951 13.067-17.144 23.465-36.729 31.604-56.881zm26.362-164.302c-1.249-35.242-6.533-69.146-15.452-99.954 13.494-8.162 26.295-17.633 38.264-28.335 30.84 36.225 49.091 80.786 52.497 128.289z"/></svg>&nbsp;&nbsp;&nbsp;Landing Pages
        </div>
        <div
          className="relative pl-4 py-2 flex font-semibold"
          style={{fontSize: '14px', lineHeight: '17px', color: '#BDBDBD', fontFamily: 'Montserrat'}}
        >
          <img src={anchor} height="16" width="16" alt="Taglines"/>
          &nbsp;&nbsp;&nbsp;Taglines
        </div>
        <div
          className="relative pl-4 py-2 pb-4 flex font-semibold"
          style={{fontSize: '14px', lineHeight: '17px', color: '#BDBDBD', fontFamily: 'Montserrat'}}
        >
          <svg id="Layer_1" enable-background="new 0 0 512 512" height="16" viewBox="0 0 512 512" width="16" xmlns="http://www.w3.org/2000/svg"><g><path d="m410 512h-308c-25.364 0-46-20.636-46-46v-420c0-25.364 20.636-46 46-46h308c25.364 0 46 20.636 46 46v420c0 25.364-20.636 46-46 46zm-308-480c-7.72 0-14 6.28-14 14v420c0 7.72 6.28 14 14 14h308c7.72 0 14-6.28 14-14v-420c0-7.72-6.28-14-14-14z"/><path d="m368 96h-48c-8.836 0-16 7.164-16 16s7.164 16 16 16h8c0 39.701-32.299 72-72 72s-72-32.299-72-72h8c8.836 0 16-7.164 16-16s-7.164-16-16-16h-48c-8.836 0-16 7.164-16 16s7.164 16 16 16h8c0 57.346 46.654 104 104 104s104-46.654 104-104h8c8.836 0 16-7.164 16-16s-7.164-16-16-16z"/></g></svg>&nbsp;&nbsp;&nbsp;Products
        </div>
        <hr style={{marginLeft: '-50px', marginRight: '-50px'}} />
          <div className="relative pl-4 py-5 flex font-semibold"
            style={{fontSize: '14px', lineHeight: '17px', color: '#BDBDBD', fontFamily: 'Montserrat'}}
          >
            <svg height="16" viewBox="-19 -19 600 600" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m251.25 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0"/><path d="m562.5 12.5c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 213.75h-201.25v-201.25h201.25zm0 0"/><path d="m251.25 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0"/><path d="m562.5 323.75c0-6.90625-5.59375-12.5-12.5-12.5h-226.25c-6.90625 0-12.5 5.59375-12.5 12.5v226.25c0 6.90625 5.59375 12.5 12.5 12.5h226.25c6.90625 0 12.5-5.59375 12.5-12.5zm-25 212.5h-201.25v-200h201.25zm0 0"/></svg>&nbsp;&nbsp;&nbsp;Browse
          </div>
        <hr style={{marginLeft: '-50px', marginRight: '-50px'}}/>
        <div className={`inline-flex font-bold text-gray-500 py-10`} style={{color: '#828282', fontSize: 16, fontStyle: 'normal', fontFamily: 'Montserrat'}}>
          Saved Content
        <Chevron width={8} fill={"#777"} style={{marginTop:'16px'}} />
      </div>

      <hr style={{marginLeft: '-50px', marginRight: '-50px'}}/>
        <div className="relative pl-4 py-5 flex font-semibold"
          style={{fontSize: '14px', lineHeight: '17px', color: '#BDBDBD', fontFamily: 'Montserrat'}}  
        >
          <img src={user} height="16" width="16" alt="user"/>&nbsp;&nbsp;&nbsp;John Doe
        </div>
      <hr style={{marginLeft: '-50px', marginRight: '-50px'}}/>
      
      </div>
    </div>
  );
}

export default Sidebar;