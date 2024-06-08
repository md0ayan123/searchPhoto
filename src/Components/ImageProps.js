import React from 'react'

export default function ImageProps(props) {
    let {imageUrl,click,description}=props
  return (

    
<div>
<div className="card my-4 mx-2" style={{ border: "1px solid black"  }}>
  <img className='photo' style={{maxWidth:'100%', aspectRatio:'3/4', objectFit:'cover'}} src={imageUrl} alt="..." />
  <div className="card-body"  >
          {/* <h5 className="card-title">{title}</h5> */}
          <p className="card-text">{description.slice(0,45)}...</p>
          {/* <p className="card-text"><small className="text-body-secondary">Author {!author ? "Unknown" : author.slice(0,70)+"..."} on {new Date(date).toLocaleDateString()}</small></p> */}
          <a rel="noreferrer" href={click} target="_blank" className="btn btn-sm btn-dark">Click to view  </a>

        </div>

</div>
</div>

   
  
  )
}




