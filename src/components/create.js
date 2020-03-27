import React from 'react';


class Create extends React.Component {




    render() {
        return (<React.Fragment>
          <br></br><br></br>
          <div className="text-center">
          <h1>Create Your Content</h1>

          <form>

          <div className="form-group">
            <label><b>Enter Title</b></label>
            <br></br><br></br>
            <textarea rows="15" cols="70" placeholder="Enter your content"></textarea>
          </div>

          <button type="submit" className="btn btn-primary">SUBMIT</button>

          </form>

          </div>
          </React.Fragment>
        );
    }

}

export default Create;