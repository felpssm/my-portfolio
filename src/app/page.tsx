import Image from "next/image";
import { Header } from './components/header/header'

export default function Home() {
  return (

    <main>
      <Header/>
      <div className="Experience">
        <h3>Experience</h3>
        <p>Texto for experience</p>
        <div className="experience-time">

        </div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="language-infos">
            <span>🇺🇸 EN - Middleman</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
          <span>🎓</span>
          <span> Systems analysis and development - Universidade Católica de Pelotas </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
      </div>
    </main>
  )
}
