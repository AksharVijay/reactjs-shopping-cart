import React, {Component} from 'react';
export default class Addproduct extends Component{
    render(){
        return(
            <form>
                <h5>Add a new product</h5>
                <br/>
                <div className="row from-group">
                    <label className="col-lg-2 col-lg-form-label">Name :</label>
                    <div className ="col-lg-10">
                        <input type="text" className="form-control" placeholder="Groceries" required />
                    </div>
                </div>
                <div className="row from-group">
                    <label className="col-lg-2 col-lg-form-label">Price :</label>
                    <div className ="col-lg-10">
                        <input type="number" className="form-control" placeholder="2" required />
                    </div>
                </div>
                <div className="row from-group">
                   
                    <div className ="offset-2 col-10">
                        <button className="btn btn-outline-primary">Add a product</button>
                        
                    </div>
                </div>
            </form>
        )
    }
}