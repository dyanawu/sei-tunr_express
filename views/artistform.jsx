const React = require('react');
const Head = require('./head');
const Nav = require('./nav');

class ArtistForm extends React.Component {
  render() {
    let data = this.props;
    let artistId = data.id;
    let nameValue = data.name || "";
    let photoValue = data.photo_url || "";
    let nationalityValue = data.nationality ||  "";
    let buttonText = data.new ? "Add Artist" : "Update Artist";
    let formAction = data.new ? "/artists/new" : `/artists/${data.id}?_method=put`;
    return (
      <html>
        <Head />

        <body>
          <div className="container">
            <div className="row my-3">
              <div className="col-8 offset-2">

                <div className="row my-3">
                  <div className="col">
                    <Nav />
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col">
                    <form action={formAction} method="post">
                      <div className="form-group">
                        <input type="hidden" name="id" value={artistId} />
                        <input className="form-control"
                               name="name"
                               defaultValue={nameValue}
                               placeholder="Artist Name" /><br />
                        <input className="form-control"
                               name="photo_url"
                               defaultValue={photoValue}
                               placeholder="Photo URL" /><br />
                        <input className="form-control"
                               name="nationality"
                               defaultValue={nationalityValue}
                               placeholder="Nationality" /><br />
                        <input className="btn btn-outline-info btn-block"
                               type="submit"
                               value={buttonText}/>
                      </div>
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = ArtistForm;
