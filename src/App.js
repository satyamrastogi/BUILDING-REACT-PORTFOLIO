import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
      headerLinks: [
        { title: 'Home', path: '/' },
        {title : 'Blog',path:'/blog'},
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects the make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      },
      blog:{
        title : 'Blog '
      }
    }
  }

  render() {
    const userDetails = read_details();
    return (
      <Router>
        <Container className="p-1" fluid={true} style={{backgroundColor:"green"}}>
          <Navbar sticky="top" className="border-bottom" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand><Link style={{color:"#FFFFFF"}}className="nav-link" to="/">{this.state.title}</Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/blog">Blog</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} about={userDetails.about}/>} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/blog" render={() => <BlogPage title={this.state.blog.title} items={userDetails.blogs.items}/>} />
          <Footer userDetail={userDetails} />

        </Container>
      </Router>
    );
  }
}

export default App;
