import React from 'react'

export default function Card(props) {
  return (
    <React.Fragment>
      <div class="p-6 shadow text-left rounded-lg ml-4 my-10" v-for="i in 50">
        <div style={{color: '#1D39C4'}} className="font-semibold">
          {props.title}
        </div>

        <br/>

        <div style={{color: '#595959', fontSize: 14}}>
          {props.description}
        </div>
      </div>
    </React.Fragment>
  )
}
