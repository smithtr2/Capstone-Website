import "./TeamCredit.css"
import githubLogo from "./assets/25231.png"

export default function TeamCredit(props) {
    return (
        <div className="full-container">
            <div className="credit-container">
                <h2>{props.name}</h2>
                <h3>{props.role}</h3>
                <a href={props.ghLink}>
                <div className="github-container">
                <img className="github-image" src={githubLogo}/>
                    <p className="ghlink">{props.ghUsername}</p>
                </div>
                </a>    
                <a href="mailto:trevorjamessmith2005@gmail.com?subject=City%20of%20Corvallis%20Project">{props.email}</a>
            </div>
            <img className="profile-image" src={props.ghImage}></img>
        </div>
    )
}