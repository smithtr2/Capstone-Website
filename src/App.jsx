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
            The City of Corvallis Finance Tool is a centralized web application that empowers municipal finance staff and department heads to audit budget projections and simulate "what-if" scenarios before finalizing long-term financial plans.
          </p>
          <h2>Problem Statement</h2>
          <p>
            City budgeting data is often stored in massive, static spreadsheets that are difficult to navigate and even harder to manipulate. Currently, testing how a 5% cost-of-living adjustment or a fixed-rate utility increase impacts a five-year outlook is a manual, error-prone process. This friction slows down critical decision-making and obscures the long-term fiscal impact of today’s choices.
          </p>
          <h2>So what?</h2>
          <p>
            This project transforms static data into a dynamic sandbox. By integrating real-time data exploration with instant scenario modeling, it eliminates hours of manual spreadsheet auditing, allowing the City to move from data entry to strategic forecasting with greater speed and precision.
          </p>
        </div>
      </div>
        
      <div className="right-align">
        <div className="content-div" id="key-features">
          <h1>Key Features</h1>
          <p>
            <ul>
              <li>Customizable Data Views: Instantly isolate relevant accounts or specific organizations using intuitive filters to focus only on the data that matters for your department.</li>
              <li>Dynamic Scenario Modeling: Project future budgets by applying fixed-dollar or percentage-based "assumptions" to specific accounts to see immediate fiscal outcomes.</li>
              <li>Multi-Year Impact Analysis: Compare near-term decisions against long-term forecasts in a single, unified table view that tracks projections across multiple fiscal years.</li>
              <li>Visual Change Auditing: Easily identify modified entries through visual highlighting, ensuring that every simulated change is transparent and easy to track during the review process.</li>
              <li>Streamlined Professional Interface: Navigate a clean, secure web environment that simplifies complex database operations into a user-friendly workflow for non-technical staff.</li>
            </ul>
          </p>
          <SlideShower/>
        </div>
      </div>
      
      
      <div className="left-align">
        <div className="content-div" id="access">
          <h1>Access</h1>
          <p>
            As a private department-facing backend tool built for the City of Corvallis, this project is not available for 
            public access due to NDA restrictions. The application is hosted on a remote virtual machine. 
          </p>
          <p>
            Inquiries related to access should be directed to the Corvallis City IT or Corvallis City Finance Department. 
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
