import { useState } from 'react'
import financeLogo from './assets/FinanceLogo.png'
import './App.css'
import SlideShower from "./SlideShower"
import TeamCredit from "./TeamCredit"

function App() {
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"})
  }

  return (
    <>
      <nav>
        <img className="logo" src={financeLogo}/>
        <div>
          <button onClick={() => {
            scrollToSection("project-description")
          }}>
            Project Description
          </button>
          <button onClick={() => {
            scrollToSection("key-features")
          }}>
            Key Features
          </button>
          <button onClick={() => {
            scrollToSection("access")
          }}>
            Access
          </button>
          <button onClick={() => {
            scrollToSection("team-credits")
          }}>
            Team Credits
          </button>
        </div>
      </nav>
      
      <div className="left-align">
        <div className="content-div" id="project-description">
          <h1>Project Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
        
      <div className="right-align">
        <div className="content-div" id="key-features">
          <h1>Key Features</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <SlideShower/>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
      
      
      <div className="left-align">
        <div className="content-div" id="access">
          <h1>Access</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
      
      <div className="right-align">
        <div className="content-div" id="team-credits">
          <h1>Team Credits</h1>
          <div className="credits-div">
            <TeamCredit
              name={"Nora Jacobi"}
              role={"Backend Developer"}
              ghImage={"https://avatars.githubusercontent.com/u/8314702?v=4"}
              ghLink={"https://github.com/AnEntireHam"}
              ghUsername={"AnEntireHam"}
              email={"jacobin@oregonstate.edu"}
            />
            <TeamCredit
              name={"Trevor Smith"}
              role={"Frontend Developer"}
              ghImage={"https://avatars.githubusercontent.com/u/90168610?v=4"}
              ghLink={"https://github.com/Holy0S"}
              ghUsername={"Holy0S"}
              email={"trevorjamessmith2005@gmail.com"}
            />
            <TeamCredit
              name={"Zachary Bull"}
              role={"Backend Developer"}
              ghImage={"https://avatars.githubusercontent.com/u/178966892?v=4"}
              ghLink={"https://github.com/ZR-Bull"}
              ghUsername={"ZR-Bull"}
              email={"bullz@oregonstate.edu"}
            />
            <TeamCredit
              name={"Hana Steffen"}
              role={"Frontend Developer"}
              ghImage={"https://avatars.githubusercontent.com/u/166073219?v=4"}
              ghLink={"https://github.com/steff-han"}
              ghUsername={"steff-han"}
              email={"steffhan@oregonstate.edu"}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
