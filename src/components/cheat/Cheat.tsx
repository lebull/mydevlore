import React from 'react';
import { Category } from './Category';



const categories = [
    {
        title: "One",
        stories: [
            "Story 1",
            "Story 2"
        ]
    }
];

function Cheat() {
    return (
        <div>
            <Category category={categories[0]}/>
        </div>

        // <div>
        //     <h2 id="1-customer-obsession">1. Customer Obsession</h2>
        //     <ul>
        //         <li>Podcast Manager UI: Focus on the backend too</li>
        //         <li>Fiori Excell Guy</li>
        //     </ul>
        //     <h2 id="2-ownership">2. Ownership</h2>
        //     <ul>
        //         <li>Distance site: Temporary Fulltime Dev</li>
        //         <li>Make PestWeb not suck</li>
        //         <li>IP Launchpad: I've never done this</li>
        //     </ul>
        //     <h2 id="3-invent-and-simplify">3. Invent and Simplify</h2>
        //     <ul>
        //         <li>Fiori Launchpad App: Build Automation</li>
        //         <li>Generated technical specifications from docblocks in SAPUI apps</li>
        //         <li>PrePost model for SAPUI5</li>
        //     </ul>
        //     <h2 id="4-are-right-a-lot">4. Are Right, a Lot</h2>
        //     <ul>
        //         <li>Waerhauser acquisition almost-mishap</li>
        //         <li>Univar: SD Card Impending Doom</li>
        //         <li>Document Database</li>
        //     </ul>
        //     <h2 id="5-learn-and-be-curious">5. Learn and Be Curious</h2>
        //     <ul>
        //         <li>Excell guy</li>
        //         <li>CGBF: Led to my first real MVC experience</li>
        //         <li>Casper</li>
        //     </ul>
        //     <h2 id="6-hire-and-develop-the-best">6. Hire and Develop the Best</h2>
        //     <ul>
        //         <li>Javascript workshop for Abapers</li>
        //         <li>Hired my replacement at Distance</li>
        //     </ul>
        //     <h2 id="7-insist-on-the-highest-standards">7. Insist on the Highest Standards</h2>
        //     <ul>
        //         <li>Make PestWeb not suck (even though it's dying)</li>
        //         <li>Refusal for &quot;This is the way we always do it&quot; that I told Charley</li>
        //         <li>Adhearence to Fiori UX Guidelines</li>
        //     </ul>
        //     <h2 id="8-think-big">8. Think Big</h2>
        //     <ul>
        //         <li>IP's Processes suck: Casper</li>
        //         <li>Distance Redesign</li>
        //         <li>LADI: Accidentally Attempting to rewrite a php framework</li>
        //     </ul>
        //     <h2 id="9-bias-for-action">9. Bias for Action</h2>
        //     <ul>
        //         <li>Casper: We are doing scrum now</li>
        //         <li>Make Pestweb UI Not Suck</li>
        //     </ul>
        //     <h2 id="10-frugality-unlikely">10. Frugality (unlikely)</h2>
        //     <ul>
        //         <li>Using viral libraries for PrePost</li>
        //     </ul>
        //     <h2 id="11-earn-trust">11. Earn Trust</h2>
        //     <ul>
        //         <li>Univar: I am not being listened to</li>
        //         <li>When things got tense with Jon, I gripped about the loud door</li>
        //     </ul>
        //     <h2 id="12-dive-deep">12. Dive Deep</h2>
        //     <ul>
        //         <li>IP Launchpad:  How to iOS/Hybrid/Airwatch</li>
        //     </ul>
        //     <h2 id="13-have-backbone-disagree-and-commit">13. Have Backbone; Disagree and Commit</h2>
        //     <ul>
        //         <li>Podcast MVC Conflict</li>
        //     </ul>
        //     <h2 id="14-deliver-result">14. Deliver Result</h2>
        //     <ul>
        //         <li>Distance Redesign: Long Haul</li>
        //     </ul>
        // </div>
    );
}

export default Cheat;