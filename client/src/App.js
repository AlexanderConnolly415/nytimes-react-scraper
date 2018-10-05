import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

let correctGuesses = 0;
let bestScore = 0;
let clickMessage = "Welcome Stranger"

class App extends Component {

      state = {
        matches,
        correctGuesses,
        bestScore,
        clickMessage
      };

      setClicked = id => {

      // Copy the state matches array
      const matches = this.state.matches;

      //filter for the clicked match
      const clickedMatch = matches.filter(match => match.id === id);

      //if the matched image value is already true, the game is over
      if(clickedMatch[0].clicked){


          console.log ("Correct Guesses: " + correctGuesses);
          console.log ("Best Score: " + bestScore);

          correctGuesses = 0;
          clickMessage = "Too many wrongs don't make a right, start over."

          for (let i = 0 ; i < matches.length ; i++){
              matches[i].clicked = false; 
          }

        this.setState({clickMessage});
        this.setState({ correctGuesses });
        this.setState({matches});

        //Otherwise, if clicked = false

        } else if (correctGuesses < 11) {
          
          //set value to true
          clickedMatch[0].clicked = true;

          //increment counter
          correctGuesses++;
          
          clickMessage = "Good job, keep moving forward ";
        
          if (correctGuesses > bestScore){
              bestScore = correctGuesses;
              this.setState({ bestScore });
          }

          //Shuffle array into random order
          matches.sort(function(a, b){return 0.5 - math.random()});

          // Set this.state.matches equal to the new array
          this.setState({ matches });
          this.setState({correctGuesses});
          this.setState({clickMessage});

        }
      
      };

      render()  {
        return (
          <div>
          <Wrapper>
              <Title><div id="title-div"><span id="title-words">A Picture is Worth a Thousand Words</span></div></Title>
          
          <h3 className="scoreSummary instructions">
            {this.state.clickMessage}
          </h3>

          <h3 className="scoreSummery counter">
            Correct Guesses: {this.state.correctGuesses}
            <br />
            Top Score: {this.state.bestScore}
          </h3>

          {this.state.matches.map(match => (
              <MatchCard
                  setClicked={this.setClicked}
                  id={match.id}
                  key={match.id}
                  image={match.image}

                />
          ))}
          
          </Wrapper>
          <Footer>
          <div id="footer-div"><span id="footer-words">Created by Alexander Connolly</span></div>

          </Footer>


          </div>
        )
      }


    
    }

    export default App;