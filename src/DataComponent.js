import React from 'react';
import data from './data.json';

class DataComponent extends React.Component {
  render() {
    return (
      <div>
        <br/>
      
         <h1 style={{textAlign:'center'}}>Ürünler</h1>
        {data.map(item => (
          <div key={item.id}>
            <div className='row' style={{marginLeft:'550px'}}>



                <div className="card" style={{width: "18rem"}} >
                <img style={{ width: '100px',height:'100px' }} src={item.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item.marka} - {item.model}</h5>
                    <p className="card-text">{item.aciklama}</p>
                    <a href="#" className="btn btn-primary">Satın Al</a>
                </div>
                </div>
             


                


            </div>

            </div>
       
         


          
            


        ))}
      </div>
    );
  }
}

export default DataComponent;
