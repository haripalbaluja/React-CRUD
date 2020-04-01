import React from 'react';


class Create extends React.Component {


  constructor() {
    super();
    this.state = {

      formValue : {

        title : '',
        content: '',
  
        articles : []

      }


    }
  }

  handleChange =  (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({...this.state.formValue,[name]:value })
    
  }


  handleSubmit = (event) => {
      event.preventDefault();
      this.submitArticle();
  }

  submitArticle




    render() {
        return (<React.Fragment>
          <br></br><br></br>
          <div className="text-center">
          <h1>Create Your Content</h1>

          <form onSubmit = {this.handleSubmit}>

          <div className="form-group">
            <label><b>Enter Title</b></label><br></br>
            <input name="title" type="text"></input>
            <br></br><br></br>
            <textarea name="content" rows="15" cols="70" placeholder="Enter your content"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">SUBMIT</button>

          </form>

          </div>
          </React.Fragment>
        );
    }

}

export default Create;