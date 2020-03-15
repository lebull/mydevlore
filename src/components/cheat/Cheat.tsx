import React from 'react';
import { Category } from './Category';
import { CategoryProps } from './types/CategoryProps';



function Cheat() {
    return (
        <div className="cheat">
            {categories.map( category => <Category title={category.title} stories={category.stories}/>)}
        </div>
    );
}

export default Cheat;

const categories: Array<CategoryProps> = [
    {
        title: "Customer Obsession",
        stories: [
            "Podcast Manager UI: Focus on the backend too",
            "Fiori Excell Guy",
        ]
    },
    {
        title: "Customer Obsession",
        stories: [
            "Distance site: Temporary Fulltime Dev",
            "Make PestWeb not suck",
            "IP Launchpad: I've never done this",
        ]
    },
    {
        title: "Invent and Simplify",
        stories: [
            "Fiori Launchpad App: Build Automation",
            "Generated technical specifications from docblocks in SAPUI apps",
            "PrePost model for SAPUI5",
        ]
    },
    {
        title: "Are Right, a Lot",
        stories: [
            "Waerhauser acquisition almost-mishap",
            "Univar: SD Card Impending Doom<",
            "Document Database",
        ]
    },
    {
        title: "Learn and Be Curious",
        stories: [
            "Excell guy",
            "CGBF: Led to my first real MVC experience",
            "Casper",
        ]
    },
    {
        title: "Hire and Develop the Best",
        stories: [
            "Javascript workshop for Abapers",
            "Hired my replacement at Distance"
        ],
    },
    {
        title: "Insist on the Highest Standards",
        stories: [
            "Make PestWeb not suck (even though it's dying)",
            "Refusal for &quot;This is the way we always do it&quot; that I told Charley",
            "Adhearence to Fiori UX Guidelines",
        ]
    },
    {
        title: "Think Big",
        stories: [
            "IP's Processes suck: Casper",
            "Distance Redesign",
            "LADI: Accidentally Attempting to rewrite a php framework"
        ],
    },
    {
        title: "Bias for Action",
        stories: [
            "Casper: We are doing scrum now",
            "Make Pestweb UI Not Suck"
        ],
    },
    {
        title: "Frugality",
        stories: [
            "Using viral libraries for PrePost"
        ],
    },
    {
        title: "Earn Trust",
        stories: [
            "Univar: I am not being listened to",
            "When things got tense with Jon, I gripped about the loud door"

        ],
    },
    {
        title: "Dive Deep",
        stories: [
            "IP Launchpad:  How to iOS/Hybrid/Airwatch"
        ],
    },
    {
        title: "Have Backbone; Disagree and Commit",
        stories: ["Podcast MVC Conflict"],
    },
    {
        title: "Deliver Result",
        stories: ["Distance Redesign: Long Haul"],
    },
];
