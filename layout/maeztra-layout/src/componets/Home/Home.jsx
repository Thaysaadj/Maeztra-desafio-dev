import Header from "../Header/Header"
import SliderBar from "../SliderBar/SliderBar"
import Benefits from "./Benefits/Benefits"
import PartnerBrands from "./PartnerBrands/PartnerBrands"
import MostRequested from "./MostRequested/MostRequested"
import MiddleText from "./MiddleText/MiddleText"
import MiddleBanner from "./MiddleBanner/MiddleBanner"
import PreFooter from "./PreFooter/PreFooter"
import Footer from "../Footer/Footer"
import Titles from "./Titles/Titles"
import TextTop from "./TextTop/TextTop"
import style from "./style.css"
import NewsLatter from "./NewsLatter/NewsLatter"
import PreFooterDesc from "./PreFooter/PreFooterDesk"
import PopUp from "../PopUp/PopUp"

export default function Home() {
  return (
    <>
      <PopUp/>
      <Header />
      <SliderBar />
      <TextTop />
      <Benefits />
      <Titles
        title="Marcas Parceiras"
      />
      <PartnerBrands />
      <Titles
        title="As Mais Pedidas"
      />
      <MostRequested />
      <div className="middle-items">
        <MiddleText />
        <MiddleBanner />
      </div>
      <NewsLatter/>
      <PreFooter />
      <PreFooterDesc/>
      <Footer />
    </>
  )
}