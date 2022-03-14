import React, { Component } from "react";

export default class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      description:"",
      dataAdded:"",
      img:"",
      error: ""
    };
  }

  onTitleChange = (e) => {
const title = e.target.value;
this.setState(()=>({title}));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(()=>({description}));
  };


  onDateChange = (e) => {
    const dataAdded = e.target.value;
    this.setState(()=>({dataAdded}));
  };

  onImgChange=(e)=>{
        const img = e.target.value;
        this.setState(()=>({img}))
  }



  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.description ) {
      this.setState({ error: "Xanalari Doldurun!" });
    }else{
        this.setState({error: ""});
        this.props.onSubmit({
            title: this.state.title,
            description:this.state.description,
            dataAdded:this.state.dataAdded,
            img:this.state.img
        })
    }
  };

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center w-100 mt-5">
        <form onSubmit={this.onSubmit}>
        {this.state.error && <p className="alert-danger">{this.state.error}</p>}
          <h5>Add Blog Page</h5>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.onTitleChange}
              value={this.state.title}

            />
            <div id="emailHelp" className="form-text">
              Add title
            </div>
          </div>


          <div className="mb-3  ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              
              onChange={this.onDescriptionChange}
            >{this.state.description}</textarea>
            <div id="emailHelp" className="form-text">
              Add description
            </div>
          </div>
     <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.onDateChange}
             

            />
            <div id="emailHelp" className="form-text">
              Add date
            </div>
          </div>

          <div className="mb-3 ">
              <input type="file"  onChange={this.onImgChange}/>
              </div>
         

          <button type="submit" className="btn btn-primary">
            Add Blog
          </button>
        </form>
      </div>
    );
  }
}
