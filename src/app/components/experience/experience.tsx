import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>1 year working as a Python Developer and automation analist, in companys such as IT4US.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years="1 year"/>
            <Skill image="/ts.png" measure={3} years="1 year"/>
            <Skill image="/js.png" measure={3} years="1 year"/>
            <Skill image="/java.png" measure={1} years="06 months"/>
          </div>
        </div>
    )
}