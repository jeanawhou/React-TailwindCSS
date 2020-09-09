import React from 'react'

export default function Card(props) {
  return (
    <React.Fragment>
      <div style={{width: '664px', borderRadius: '20px'}} class=" bg-white p-10 shadow text-left my-6" v-for="i in 50">
        <div style={{color: '#1D39C4'}} className="font-semibold mb-2">
          {props.title}
        </div>

        <div style={{color: '#595959', fontSize: 14}}>
          {props.description}
        </div>
      </div>
    </React.Fragment>
  )
}
