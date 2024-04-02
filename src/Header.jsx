import { useUserContext } from "./Context"


function Header() {

    const {prodectQuantity,prodectAmount} = useUserContext();

  return (
    <>
    <div className="container position-sticky Total pb-4 pt-4 ">
    <div className="row">
   <div className="col-sm-12 col-md-6 col-lg-8 mt-5"><h1 className="text-center">React useContext Task</h1></div>
   <div className=" col-sm-12 col-md-6 col-lg-4">
   <div className="card totalCard">
  <div className="card-body">
    <h5 className="card-title">Total Quantity : {prodectQuantity} qty</h5>
    <h5 className="card-title">Total Amount : $ {(prodectAmount).toFixed(2)}</h5>
    <button className="button"> <span>Pay </span></button>
  </div>
</div>
</div>
   </div>
   </div>
    </>
    
    
  )
}

export default Header