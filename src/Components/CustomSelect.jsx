import { useState } from "react"
import purple from '../assets/purple-dot.svg'
import green from '../assets/green-dot.svg'
import blue from '../assets/blue-dot.svg'
import pink from '../assets/pink-dot.svg'
import selectArrow from '../assets/select-arrow.svg'
import {useClickOutside} from '../hooks/useClickOutside.jsx'
export default function CustomSelect({onSelect}){
   

    const [selected, setSelected] = useState(null)
    const [showSelect, setShowSelect] = useState(false)
    const [flipped, setFlipped] = useState(false)
    
    const [options, setOptions] = useState([{
            value: 'WATCHING',
            label: 'Watching',
            active: false,
            id: crypto.randomUUID()
        },
        {
            value: 'COMPLETED',
            label: 'Completed',
            active: false,
            id: crypto.randomUUID()
        },
        {
            value: 'PLANNING',
            label: 'Plan to watch',
            active: false,
            id: crypto.randomUUID()
        },
        {
            value: 'DROPPED',
            label: 'Dropped',
            active: false,
            id: crypto.randomUUID()
        }])

        
    function handleSelect(option){
        
        setSelected(option)
      
    }

    const active = {
        backgroundColor: 'rgba(77, 77, 77, 0.5)',
        borderRadius: '5px'
    }

    function toggleSelect(){
        setFlipped(prev => !prev)
        setShowSelect(prev => !prev)
    }

    function handleClick(id, value){
        onSelect(value)
        setSelected(value)
     setOptions(prev => prev.map(opt => {
        
        return opt.id === id ? {...opt, active: !opt.active} : {...opt, active: false}
     }))
    
     setShowSelect(false)
     setFlipped(false)
     
    }

    function chooseDot(status){
        if(status === 'PLANNING'){
            return purple
        }

        if(status === 'COMPLETED'){
            return green
        }

        if(status === 'WATCHING'){
            return pink
        }

        if(status === 'DROPPED'){
            return blue
        }
    }

    const menuRef = useClickOutside(() => {
        setShowSelect(false)
    })
    return (
        <div className="custom-select">
             <button
              className="custom-select-control"
              onClick={toggleSelect}>
                Status: {selected ? selected : "None"}
                <img  className={flipped ? 'flipped': "arrow"} src={selectArrow} />
            </button>
             <div ref={menuRef} className="custom-select-menu">
               {showSelect && <ul className="custom-select-list">
                {options.map(opt => 
                <li 
                key={opt?.id}
                style={opt.active ? active : null}
                onClick={() => handleClick(opt?.id, opt?.value)} 
                className={`${opt.active ? 'active' : null} ${opt?.value}`}>
                <img  src={chooseDot(opt.value)}  />  
                <label>{opt.label}</label>

                </li>
                )}
               </ul>}
             </div>
        </div>
    )
}