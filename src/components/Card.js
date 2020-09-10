import React from 'react'

export default function Card(props) {
  const cardDefaultStyle = {
    width: '664px',
    borderRadius: '20px',
    padding: '39px 47px',
    marginBottom: '27px'
  };

  const titleStyle = {color: '#1D39C4'}
  const contentStyle = {color: '#595959', fontSize: 14};

  return (
    <React.Fragment>
      <div style={cardDefaultStyle} class=" bg-white shadow text-left" v-for="i in 50">
        <div style={titleStyle} className="font-semibold mb-2">
          {props.title}
        </div>

        <div style={contentStyle}>
          {props.description}
        </div>
      </div>
    </React.Fragment>
  )
}
