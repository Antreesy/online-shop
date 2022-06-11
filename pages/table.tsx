import {Table1} from "../Сomponents/Table/Table1";
import Image from "next/image"
import dress from "../public/assets/img/Knitted_dress.png"
import {Icon} from "../UI";

const Table = () => {

    const headers1 = [
        {name: "Category", isSort: false},
        {name: "Net Sales", isSort: true},
        {name: "Net Turnover", isSort: true},
        {name: "Average Selling Price", isSort: true},
    ]

    const innerRows1 = [
        [{value: "clothes"}, {value: 5435}, {value: 1232}, {value: 45658},],
        [{value: "clothes"}, {value: 2}, {value: 3123}, {value: 67886},],
        [{value: "clothes"}, {value: 3123}, {value: 3111}, {value: 3454},],
        [{value: "clothes"}, {value: 117}, {value: 6688}, {value: 5346},],
    ]

    const headers2 = [
        {name: "Production Information", isSort: false},
        {name: "Net Sales", isSort: true},
        {name: "Net Turnover", isSort: true},
        {name: "Average Selling Price", isSort: true},
        {name: "Current Turnover", isSort: false},
        {name: "Day", isSort: false},
    ]

    const innerRows2 = []

    const headers3 = [
        {name: "Product Image", isSort: false, align: "center"},
        {name: "Product Name", isSort: false},
        {name: "Product Code", isSort: false},
        {name: "Brand", isSort: false},
        {name: "Commission", isSort: false},
        {name: "Price", isSort: false},
        {name: "Stock", isSort: false},
        {name: "Status", isSort: false},
        {name: "Detail", isSort: false}
    ]

    const innerRows3 = [
        [
            {
                value: <div><Image src={dress} width={46} height={83}/></div>,
                align: "center"
            }, {value: "Black Printed Long Sleeve Midi Dress"},
            {value: "BFNSKBGDHKSF"}, {value: "Yves Saint L"}, {value: "%25"}, {value: "$213"},
            {value: 32132}, {value: "Not available"}, {value: <Icon type={"exclamation"}/>, align: "center"},],

    ]

    return (
        <div style={{padding: "50px"}}>
            <div style={{width: "1279px", marginBottom: "50px"}}><Table1 headers={headers1} innerRows={innerRows1}/>
            </div>
            <div style={{width: "1279px", marginBottom: "50px"}}><Table1 headers={headers2} innerRows={innerRows2}/>
            </div>
            <div style={{width: "1279px", marginBottom: "50px"}}><Table1 headers={headers3} innerRows={innerRows3}/>
            </div>
        </div>
    )
}

export default Table
