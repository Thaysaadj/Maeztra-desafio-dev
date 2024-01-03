import PreHeader from "../PreHeader/PreHeader";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderDesk from "./HeaderDesk/HeaderDesk"

export default function Header() {
  return (
    <>
      <PreHeader />
      <HeaderDesk/>
      <HeaderMobile />
    </>
  )
}