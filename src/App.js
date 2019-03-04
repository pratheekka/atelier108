import React, { Component } from 'react';
import './App.css';
import walkthrough from "./media/walkthrough.mp4";

class App extends Component {

  state = {
    visible: 0,
    direction: ""
  }

  previousClickHandler = () => {
    this.setState(prevState => {
      return {
        visible: (prevState.visible === 0 ? 3 : prevState.visible - 1),
        direction: "left"
      };
    });
  };

  nextClickHandler = () => {
    this.setState(prevState => {
      return {
        visible: (prevState.visible + 1) % 4 ,
        direction: "right"
      };
    })
  };

  getDotClickHandler = index => {
    return () => {
      if (this.state.visible !== index) {
        this.setState(prevState => {
          const direction = prevState.visible < index ? "right" : "left";
          return {
            visible: index,
            direction: direction
          }
        })
      }
    }
  }

  renderDetails = () => {
    const details = [{
        id: "Project Management",
        body: [
          `There will be on-site supervisor and my personal supervision to ensure what we agree on paper is essentially
          what we deliver, and you will have a timely update on the proceeds. We coordinate with all the sub contractors,
          for example, electricials, plumbers, civil workers etc base on the sequence of work needed.`,
          `We take care of your home (even during execution period): essentially by making sure all wood work is executed off site,
          our workers do not stay at the site which avoids workers using bathrooms, kitchen etc at the project site.`
        ]
      },
      {
        id: "Vendor Selection",
        body: [
          `We get atleast two quotes from capable/competitvevendors, verify each quote before we request you to sign off.
          We also ensure contract terms with each vendor is clearly mentioned, and their deliverables written in accordance
          with the fit and finish as discusse/agreed during design phase.`
        ]
      },
      {
        id: "Meterial Selection",
        body: [
          `We go with what's best for the project. Unlike the general market practices, we do not accept kickbacks or commissions
          from any vendor. All our special discounts (a min of 10% upto 30% that we get as architects) are passed onto our clients.
          We are transparent on all our transactions and our unbiased towards our recommendations.`
        ]
      },
      {
        id: "The buck stops at our table",
        body: [
          `We take a full responsibility of the project drom design until the styling and set up your home. While you work with us,
          you will be coordinating with me directly, unlike otherwise where a junior architect who is assigned to the project. We 
          ensure this by choosing our projects and not taking more than what we are capable of handling at a particular time.
          This way, we assure the process of making your home an enjoyable experience.`,
          `Furthermore, it's a relationship we build with all our clients that does not stop at the closure of a project but continues,
          to ensure you always have your home the way it is meant to be.`
        ]
      }];

    return details.map((val, index) => {
      const className = `details ${index === this.state.visible ? `show ${this.state.direction}` : "hide"}`;
      return <div className={className}>
        <div>
          <h3>{val.id}</h3>
          {val.body.map(val => <p>{val}</p>)}
        </div>
      </div>
    });
  }

  renderNavigationDots = () => {
    const dots = [0, 1, 2, 3];
    return dots.map(val => {
      const className=`dot ${this.state.visible === val ? "selected" : ""}`;
      return <div className={className} onClick={this.getDotClickHandler(val)} ><span /></div>
    });
  }
  
  render() {
    return (
        <div className="app helvetica-font">
          <div className="banner">
            <h1>Atelier<span className="typewriter-font">108</span></h1>
            <h4>The creative difference</h4>
          </div>
          <div className="content">
            <div className="about">
              <p><span>Atelier<span className="typewriter-font">108</span></span> is a young and dynamic architecture, interior and furniture design studio based in Bangalore, India.
                The studio is a multidisciplinary practice with a diverse portfolio of urban projects that each carries
                out hallmark of creativity, innovation and experimentation.</p>

                <p>Our search for creative and effective design ideas begin with a rigorous study of the client's brief,
                the constraints and opportunities of the site and it's history.</p>

                <p>Our design process is imaginative, characterful and highly communicative and strive to create memorable
                architecture that expresses the key qualities of depth excellence and inspiration.
              </p>
            </div>
            <div className="video">
              <video controls>
                <source src={walkthrough} type="video/mp4" />
              </video>
            </div>
            <div className="carousel-container">
              <div className="navigator">
                <div className="arrow left" onClick={this.previousClickHandler} ><span /></div>
                {this.renderNavigationDots()}
                <div className="arrow right" onClick={this.nextClickHandler}><span /></div>
              </div>
              <div className="carousel">
                {this.renderDetails()}
                <div className="details dummy">
                  <div>
                    <h3>The buck stops at our table</h3>
                    <p>We take a full responsibility of the project drom design until the styling and set up your home. While you work with us,
          you will be coordinating with me directly, unlike otherwise where a junior architect who is assigned to the project. We 
          ensure this by choosing our projects and not taking more than what we are capable of handling at a particular time.
          This way, we assure the process of making your home an enjoyable experience.</p>
                    <p>Furthermore, it's a relationship we build with all our clients that does not stop at the closure of a project but continues,
          to ensure you always have your home the way it is meant to be.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="video">
              <iframe title="video"
                src="https://www.youtube.com/embed/atS_Rfs8yVA" frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            </div>
          </div>
          <div className="footer">
            <div>
              <p>Architect: ANUSHA ARUN</p>
              <p>Address: #9, SANTOSH VIHAR 1, 19th A CROSS, JAKKUR MAIN ROAD, SAHAKARNAGAR POST, BANGALORE 560092</p>
              <p>Contact: +91 96325 04400</p><p>Email: anusha.a.arun@gmail.com</p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
