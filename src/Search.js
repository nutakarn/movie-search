import React from 'react';
import './App.css';
import axios from 'axios';
import FilterResults from 'react-filter-search';
import {
  Input, Card, Button, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      value: ''
    };
  }

  componentWillMount() {
    axios.get("https://demo3429976.mockable.io/movie")
      .then(res => {
        const data = res.data;
        this.setState({ data });
        console.log(res.data)
      })
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { data, value } = this.state;
    return (
      <Router>
        <div className="container">
          <br />
          <Input type="text" placeholder="Search" value={value} onChange={this.handleChange} />
          <br />
          <FilterResults
            value={value}
            data={data}
            renderResults={results => (
              <div>
                {results.map(el => (
                  <div>
                    <Card body outline color="success">
                      <CardBody>
                        <CardTitle>MovieName: {el.movieName}</CardTitle>
                        <CardText>Director: {el.director}</CardText>
                        <CardText>Year: {el.releaseYear}</CardText>
                      </CardBody>
                      <Button color="success" >
                      <Link className="detail" to="/search/detail">Detail</Link>
                      </Button>
                    </Card>
                    <br />
                  </div>
                ))}
              </div>
            )}
          />
          <Route path="/search/detail" component={Detail} />
        </div>
      </Router>
    );
  }
}
function Detail({ match }) {
  return (
    <div>
      <h2>Movie</h2>
          <Card>
          <Link className="content" to={`${match.url}/Batman Begins (2005) is the start of Christopher Nolan's Batman film series, The Dark Knight Trilogy.`}> Batmans Beginst</Link>
          <Link className="content" to={`${match.url}/Catch Me If You Can is a 2002 American biographical crime film directed and produced by Steven Spielberg from a screenplay by Jeff Nathanson. The film stars Leonardo DiCaprio and Tom Hanks, with Christopher Walken, Martin Sheen, and Nathalie Baye in supporting roles.`}>Catch Me If You can</Link>
          <Link className="content" to={`${match.url}/The Terminal is a 2004 American comedy-drama film co-produced and directed by Steven Spielberg and starring Tom Hanks, Catherine Zeta-Jones, and Stanley Tucci. The film is about an Eastern European man who becomes stuck in New York's John F. Kennedy Airport terminal when he is denied entry into the United States and at the same time cannot return to his native country because of a military coup.`}>The Terminal</Link>
      </Card>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3></h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}
export default Search;