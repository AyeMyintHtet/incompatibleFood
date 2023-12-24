import { AllFoodArray } from "../../constant"


const BoxStyle = {
  "border-radius": "37px",
"background":"linear-gradient(145deg, #ffd7d7, #dab5b5)",
"box-shadow":  "rgb(164, 142, 142) 0px 1px 2px 0px, rgb(255, 236, 236) -1px -1px 10px",
"color":"black"
}
export function CardHandler({ selectedItem }) {
  const Somefunc = () => {
    let obj = []
    if (selectedItem.length >0) {
      for (let i = 0; AllFoodArray.length > i; i++) {
        selectedItem.filter((val) => val === AllFoodArray[i].Description &&
          obj.push(AllFoodArray[i]))
      }
    }else{
      obj =AllFoodArray;
    }
    return obj;
  }
  console.log('Somefunc()', Somefunc())
  console.log('handelr', selectedItem)

  return (
    <>
    {/* {
      Somefunc().map((item,idx)=>( */}
      <div className="container flex flex-wrap">
        {
          Somefunc().map((item,idx)=>(
       <div key={idx} className="flex-grow w-fit p-5 min-h-[100px] m-4" style={BoxStyle}>
        <p className="text-center mb-5">{item.FoodA} + {item.FoodB}</p> 
        
        <p className="text-center">ဖြစ်စေနိုင်သော -  <span className="d text-red-500">{item.Description}</span> </p>
       </div>
          ))
        }

      </div>
      {/* )) */}
    {/* } */}
    </>
  )
}