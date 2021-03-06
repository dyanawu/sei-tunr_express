const React = require('react');
const Template = require('./template');

class ArtistView extends Template {
  constructor(props) {
    super(props);
    this.title = props.artist.name;
  }

  renderContent() {
    let songsLink = `${this.props.artist.id}/songs`;
    let editLink = `${this.props.artist.id}/edit`;
    let deleteLink = `${this.props.artist.id}/delete`;

    let prevLink = `${this.props.prevArtistId}`;
    let prevClass = this.props.prevArtistId === 0 ?
                    "btn btn-outline-info btn-block disabled" :
                    "btn btn-info btn-block";

    let nextLink = `${this.props.nextArtistId}`;
    let nextClass = this.props.nextArtistId === 0 ?
                    "btn btn-outline-info btn-block disabled" :
                    "btn btn-info btn-block";

    return (
      <React.Fragment>
        <h4>{this.props.artist.name}</h4>
        <img src={this.props.artist.photo_url}
             width="200px"/>
        <h4>{this.props.artist.nationality}</h4>

        <div className="row my-3">
          <div className="col-3">
            <a href={prevLink}
               className={prevClass}>
              Prev Artist
            </a>
          </div>
          <div className="col-6">
            <a href={songsLink}
               className="btn btn-info btn-block">View Artist Songs</a>
          </div>
          <div className="col-3">
            <a href={nextLink}
               className={nextClass}>
              Next Artist
            </a>
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <a href={editLink}
               className="btn btn-info btn-block">Edit Artist Info</a>
          </div>
        </div>

        <div className="row my-3">
          <div className="col">
            <a href={deleteLink}
               className="btn btn-outline-danger btn-block">Delete Artist</a>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

module.exports = ArtistView;
