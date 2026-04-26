import { useState } from 'react'
import financeLogo from './assets/FinanceLogo.png'
import './App.css'
import SlideShower from "./SlideShower"

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
          <ul>
            <li>Customizable Data Views: Instantly isolate relevant accounts or specific organizations using intuitive filters to focus only on the data that matters for your department.</li>
            <li>Dynamic Scenario Modeling: Project future budgets by applying fixed-dollar or percentage-based "assumptions" to specific accounts to see immediate fiscal outcomes.</li>
            <li>Multi-Year Impact Analysis: Compare near-term decisions against long-term forecasts in a single, unified table view that tracks projections across multiple fiscal years.</li>
            <li>Visual Change Auditing: Easily identify modified entries through visual highlighting, ensuring that every simulated change is transparent and easy to track during the review process.</li>
            <li>Streamlined Professional Interface: Navigate a clean, secure web environment that simplifies complex database operations into a user-friendly workflow for non-technical staff.</li>
          </ul>
          <SlideShower/>
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
    </>
  )
}

export default App
