import React from 'react'

export default function SmallCard(props) {
  return (
    <React.Fragment>
      <div
        className="justify-items-center flex font-semibold bg-white pl-6 pt-6 shadow-lg text-left mt-6 px-4"
        v-for="i in 50"
        style={{width: '220px', height: '70px', lineHeight: '15px', fontSize:'12px', color: '#333333', borderRadius: '20px', justifyContent: 'space-between', fontFamily: 'Montserrat'}}>
				<div>
          {props.title}
          <div className="mt-1" style={{color: '#bdbdbd', fontSize: '10px', lineHeight: '12px', fontStyle: 'normal'}}>
            {props.smallDescription}
          </div>
        </div>
        <svg
          style={{marginBottom: '15px', marginRight: '6px'}}
          className="float-right"
          width="8"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="angle-right"
          class="svg-inline--fa fa-angle-right fa-w-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512">
					  <path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
				</svg>
			</div>
    </React.Fragment>
  )
}
