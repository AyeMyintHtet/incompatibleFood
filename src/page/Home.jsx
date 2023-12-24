import { memo, useMemo, useState } from "react";
import { CheckboxHorizontalListGroup } from "../components/CheckBoxHorizon";
import { CardHandler as CardCollection } from "../components/CardHandler";

const Main = () => {
  const [selectedItem, setSeletedItem] = useState([])

  return (
    <>
      <CheckboxHorizontalListGroup selectedItem={selectedItem} setSeletedItem={setSeletedItem} />
      <CardCollection selectedItem={selectedItem} />

    </>
  )
}
export const Home = memo(Main)