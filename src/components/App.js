import React, { Component } from 'react'

// Import Page Components
import Header from './Header'
import Hero from './Hero'
import Sections from './Sections'
import Footer from './Footer'

// Import Animation timline controls
// import { TimelineMax } from 'gsap'
import * as ScrollMagic from 'scrollmagic'

// Import Languages
import en from '../languages/en.json'
import ru from '../languages/ru.json'

// Setup languages as ES6-array so we can switch them later.
const languages = { en, ru }
const languageDefault = 'en'


// Main component - will be rendered to #root in public/index.html
class App extends Component {

  componentWillMount() {
    // Setup language for app
    const languageRequest = this.props.match.params.language
    this.lang = (languageRequest) ? languageRequest : languageDefault
    this.data = languages[this.lang]
    window.controller = new ScrollMagic.Controller(); // shouldn't do this in react, but the scope is too small, and it's only one page.
  }

  render() {
    return (
      <div className="App">
        <div className="bg-grid"></div>
        <Header data={this.data.header} />
        <Hero data={this.data.hero} />
        <Sections data={this.data.sections} />
        <Footer data={this.data.footer} />
      </div>
    );
  }
}

export default App;
