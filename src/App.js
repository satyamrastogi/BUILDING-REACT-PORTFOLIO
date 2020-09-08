import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect ,Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import read_details from './utils/read_details';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Satyam Rastogi',
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects in project tab'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact  Me'
      },
      blog:{
        title : 'Projects '
      }
    }
  }

  render() {
    const userDetails = read_details();
    return (
      <Router>
        <Container fluid={true}>
          <Navbar sticky="top" className="border-bottom" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand><Link style={{color:"#FFFFFF",marginLeft:"5%"}}className="nav-link" to="/home">{this.state.title}</Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto" style={{marginRight:"5%"}}>
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/project">Project</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
          <Route path="/home" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} about={userDetails.about} skills={userDetails.skills} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/project" exact render={() => <BlogPage title={this.state.blog.title} items={userDetails.blogs.items}/>} />
          <Route render={() => <Redirect to="/home"/>}/>
          </Switch>
          <Footer userDetail={userDetails} />

        </Container>
      </Router>
    );
  }
}

export default App;
