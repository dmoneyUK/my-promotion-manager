import React,{Component} from 'react'
import Item from '../Common//Item.js'
import ItemList from '../Common//ItemList.js'
import './PromotionEditor.css'

const ventures = [
    "JackpotJoy",
    "HeartBingo",
    "VirginGames"
  ]

const devices = [
    "desktop","mobile", "tablet"
]

class PromotionEditor extends Component{


    render(){
        let allVentures = [];
        let allDevices = [];
        ventures.forEach(e => {
            allVentures = [...allVentures, <Item message = {e}/>]
        });

        devices.forEach(e => {
            allDevices = [...allDevices, <Item message = {e}/>]
        });

        return (
            <form>
                <label className="promotion_editor">
                    Promotion Name:
                    <input type="text" name="Promotion Name"/>
                    Ventures:
                    <ItemList allItems={allVentures}/>
                    Devices:
                    <ItemList allItems={allDevices}/>
                    Duration:
                    <input type="text" name="Duration"/>
                    
                    <input type="submit" value="Save & Close" />
                    <input type="submit" value="Save & Continue" />
                    <input type="submit" value="Cancel" />
                </label>
            </form>
        )
    }
}

export default PromotionEditor