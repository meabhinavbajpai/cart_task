import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartItem=useSelector((state)=>state?.items)
    console.log(cartItem)

    let cartTotal=()=>{
        let total=0;
        cartItem?.forEach((item)=>{
            total +=item?.price
        })
        return total?.toFixed(2)
    }
    const handleCheckout=()=>{
        alert("Checkout successfull")
    }
  return (
   <>
   <div className="container">
    {
        cartItem?.length!==0 ? <div className="divTable div-hover">
        <div className="rowTable bg-primary text-white pb-2">
          <div className="divTableCol">Product</div>
         
          <div className="divTableCol">Price</div>
          <div className="divTableCol">Actions</div>
        </div>
        {
            cartItem?.map((item,index)=>{
                return(
<div className="rowTable" key={index}>
          <div className="divTableCol">
            <div className="media">
             
              <div className="media-body">
                <h4 className="media-heading">
                  {item?.name}
                </h4>
               
               
              </div>
            </div>
          </div>
       
          <div className="divTableCol">
            <strong>{item?.price}</strong>
          </div>
        
          <div className="divTableCol">
            <button type="button" className="btn btn-danger">
              <span className="fa fa-remove" /> Remove
            </button>
          </div>
        </div>
                )
            })
        }
        
      
        
       
        <div className="rowTable">
          <div className="divTableCol" />
          <div className="divTableCol" />
          <div className="divTableCol" />
          <div className="divTableCol">
            <h3>Total</h3>
          </div>
          <div className="divTableCol">
            <h3>
              <strong>{cartTotal()}</strong>
            </h3>
          </div>
        </div>
        <div className="rowTable">
          <div className="divTableCol" />
          <div className="divTableCol" />
          <div className="divTableCol" />
          <div className="divTableCol">
            
          </div>
          <div className="divTableCol">
            <button type="button" className="btn btn-success" onClick={()=>handleCheckout()}>
              Checkout
            </button>
          </div>
        </div>
      </div>:<>No Product Added yet </>
    }
 
</div>

   </>
  )
}

export default Cart