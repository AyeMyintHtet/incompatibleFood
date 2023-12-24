import { useEffect ,useState} from "react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { AllCauseProblem } from "../../constant";
import TopArrow from '../../assets/toparrow.svg'

const ScrollToTop = {
  "background" :"gray",
  "border-radius":"50%",
  "padding":"6px",
  "cursor":"pointer",
  "width":"fit-content",
  "display":"flex",
  "justify-content":"center",
  "align-items":"center",
  "position":"fixed",
  "bottom":"20px",
  "right":"20px",
  "transition":"all 0.5s ease",
  "opacity":1
}
export function CheckboxHorizontalListGroup({ selectedItem, setSeletedItem }) {
  useEffect(() => {
    let nav = document.querySelector('.second-nav');
    let toTop = document.querySelector('.scroll-to-top')
    let prevScrollY = 0;
    const handleScroll = () => {
      if(window.scrollY > 72){
        nav.setAttribute('style',`
          
        position:fixed;
        background:white;
        top:0
        `)
      }else{
        nav.setAttribute('style',`
          
        position:unset;
        background:white
        `)
      }
      const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      toTop.setAttribute(`style`,`
      background :gray;
      border-radius:50%;
      padding:6px;
      cursor:pointer;
      width:fit-content;
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      bottom:20px;
      right:20px;
      transition:all 0.5s ease;
        opacity:0;

      `)
    } else if (currentScrollY < prevScrollY) {
      toTop.setAttribute(`style`,`
      background :gray;
      border-radius:50%;
      padding:6px;
      cursor:pointer;
      width:fit-content;
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      bottom:20px;
      right:20px;
      transition:all 0.5s ease;
        opacity:1;
      `)
      console.log('Scrolling up');
    }

    prevScrollY = currentScrollY;
    };

    // Attach the event listener to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empt


  const AddOrRemoveItem = (item, check) => {
    if (check) {
      setSeletedItem([...selectedItem, item])
    } else {
      setSeletedItem(selectedItem.filter((value) => value !== item))
    }
  }
  return (
    <Card className="w-[100vw] second-nav">
      <List className="flex-row w-[100vw] overflow-auto">
        {
          AllCauseProblem.map((item, idx) => (
            <ListItem className={`p-0 !overflow-visible`} key={idx}
            // onClick={(e) => { console.log(e) }}
            >
              <label
                htmlFor={`horizontal-list-${idx}`}
                className={`flex w-full cursor-pointer items-center px-3 py-2`}
              >
                <ListItemPrefix className={`mr-3 `}>
                  <Checkbox
                    id={`horizontal-list-${idx}`}
                    ripple={false}
                    hello='hello'
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                    onClick={(e) => AddOrRemoveItem(item, e.target.checked)}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium min-w-fit">
                  {item}
                </Typography>
              </label>
            </ListItem>
          ))
        }
      </List>
      <div className="scroll-to-top" style={ScrollToTop} onClick={()=>window.scrollTo(0,0)}>
        <img src={TopArrow} width={30} height={30} alt="" srcset="" />
        {/* <TopArrow/> */}
      </div>
    </Card>
  );
}