import React,{Component} from 'react'
import './PromotionEditor.css'

class PromotionEditor extends Component{

    render(){
        return (
            <form>
                <label className="promotion_editor">
                    Promotion Name:
                    <input type="text" name="Promotion Name"/>
                    Venture Name:
                    <input type="text" name="Venture Name"/>
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