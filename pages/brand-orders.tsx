import {useState} from "react"
import cn from "classnames"
import Head from "next/head"
import {BackButton, Table} from "Сomponents"
import {Button, Icon, Input, Pagination, Select, Tabs} from "UI"

import s from "styles/pages/brand-products.module.scss"

const tableHeaders = [
    {name: "Orders No"},
    {name: "Orders Date"},
    {name: "Recipient Name"},
    {name: "Number"},
    {name: "Products"},
    {name: "Price"},
    {name: "Invoice"},
    {name: "Status"},
    {name: "Detail", alignCenter: true},
    {name: "Process", alignCenter: true},
]

const tableInnerRows = [
    [
        {value: 5237980},
        {
            value: <><p>February 21, 2021</p><p>Time: 22.20</p></>,
        },
        {value: "Ömer Yıldız"},
        {value: 43121},
        {
            value: <><p>Black Printed Long</p><p>Sleeve Midi Dress</p></>,
        },
        {value: "₺2125"},
        {value: 221255},
        {value: "New Order"},
        {
            value: <><p style={{fontSize: "32px"}}><Icon color={"#8100EF"} type={"exclamation"}/></p><p style={{marginTop: "8px"}}>New Notification</p></>,
            alignCenter: true,
        },
        {
            value: <><p style={{color: "#8100EF", marginBottom: "7px"}}>Getting Ready Pass</p><p style={{textDecoration: "underline"}}>Cancel Order</p></>
        },
    ],
    [
        {value: 5237980},
        {
            value: <><p>February 21, 2021</p><p>Time: 22.20</p></>,
        },
        {value: "Ömer Yıldız"},
        {value: 43121},
        {
            value: <><p>Black Printed Long</p><p>Sleeve Midi Dress</p></>,
        },
        {value: "₺2125"},
        {value: 221255},
        {value: "New Order"},
        {
            value: <><p style={{fontSize: "32px"}}><Icon color={"#8100EF"} type={"exclamation"}/></p><p style={{marginTop: "8px"}}>New Notification</p></>,
            alignCenter: true,
        },
        {
            value: <><p style={{color: "#8100EF", marginBottom: "7px"}}>Getting Ready Pass</p><p style={{textDecoration: "underline"}}>Cancel Order</p></>
        },
    ],
    [
        {value: 5237980},
        {
            value: <><p>February 21, 2021</p><p>Time: 22.20</p></>,
        },
        {value: "Ömer Yıldız"},
        {value: 43121},
        {
            value: <><p>Black Printed Long</p><p>Sleeve Midi Dress</p></>,
        },
        {value: "₺2125"},
        {value: 221255},
        {value: "New Order"},
        {
            value: <><p style={{fontSize: "32px"}}><Icon color={"#8100EF"} type={"exclamation"}/></p><p style={{marginTop: "8px"}}>New Notification</p></>,
            alignCenter: true,
        },
        {
            value: <><p style={{color: "#8100EF", marginBottom: "7px"}}>Getting Ready Pass</p><p style={{textDecoration: "underline"}}>Cancel Order</p></>
        },
    ],
    [
        {value: 5237980},
        {
            value: <><p>February 21, 2021</p><p>Time: 22.20</p></>,
        },
        {value: "Ömer Yıldız"},
        {value: 43121},
        {
            value: <><p>Black Printed Long</p><p>Sleeve Midi Dress</p></>,
        },
        {value: "₺2125"},
        {value: 221255},
        {value: "New Order"},
        {
            value: <><p style={{fontSize: "32px"}}><Icon color={"#8100EF"} type={"exclamation"}/></p><p style={{marginTop: "8px"}}>New Notification</p></>,
            alignCenter: true,
        },
        {
            value: <><p style={{color: "#8100EF", marginBottom: "7px"}}>Getting Ready Pass</p><p style={{textDecoration: "underline"}}>Cancel Order</p></>
        },
    ],
    [
        {value: 5237980},
        {
            value: <><p>February 21, 2021</p><p>Time: 22.20</p></>,
        },
        {value: "Ömer Yıldız"},
        {value: 43121},
        {
            value: <><p>Black Printed Long</p><p>Sleeve Midi Dress</p></>,
        },
        {value: "₺2125"},
        {value: 221255},
        {value: "New Order"},
        {
            value: <><p style={{fontSize: "32px"}}><Icon color={"#8100EF"} type={"exclamation"}/></p><p style={{marginTop: "8px"}}>New Notification</p></>,
            alignCenter: true,
        },
        {
            value: <><p style={{color: "#8100EF", marginBottom: "7px"}}>Getting Ready Pass</p><p style={{textDecoration: "underline"}}>Cancel Order</p></>
        },
    ],
    [
        {value: 5237980},
        {
            value: <><p>February 21, 2021</p><p>Time: 22.20</p></>,
        },
        {value: "Ömer Yıldız"},
        {value: 43121},
        {
            value: <><p>Black Printed Long</p><p>Sleeve Midi Dress</p></>,
        },
        {value: "₺2125"},
        {value: 221255},
        {value: "New Order"},
        {
            value: <><p style={{fontSize: "32px"}}><Icon color={"#8100EF"} type={"exclamation"}/></p><p style={{marginTop: "8px"}}>New Notification</p></>,
            alignCenter: true,
        },
        {
            value: <><p style={{color: "#8100EF", marginBottom: "7px"}}>Getting Ready Pass</p><p style={{textDecoration: "underline"}}>Cancel Order</p></>
        },
    ],
    [
        {value: 5237980},
        {
            value: <><p>February 21, 2021</p><p>Time: 22.20</p></>,
        },
        {value: "Ömer Yıldız"},
        {value: 43121},
        {
            value: <><p>Black Printed Long</p><p>Sleeve Midi Dress</p></>,
        },
        {value: "₺2125"},
        {value: 221255},
        {value: "New Order"},
        {
            value: <><p style={{fontSize: "32px"}}><Icon color={"#8100EF"} type={"exclamation"}/></p><p style={{marginTop: "8px"}}>New Notification</p></>,
            alignCenter: true,
        },
        {
            value: <><p style={{color: "#8100EF", marginBottom: "7px"}}>Getting Ready Pass</p><p style={{textDecoration: "underline"}}>Cancel Order</p></>
        },
    ],
]

const BrandProducts: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("")
    return (
        <>
            <Head>
                <title>ILONSI SHOP | Brand Products</title>
            </Head>

            <div className={s.container}>
                <div className={s.button__wrapper}>
                    <BackButton/>
                </div>

                <div className={s.content}>
                    <Tabs
                        className={s.tabs}
                        variant="no_border"
                        labels={[
                            "All Products",
                            "New Orders",
                            "Prepared Orders",
                            "Ready to Delivery Orders",
                            "Delivered Orders",
                        ]}
                        values={[]}
                    />
                    <div className={s.content__header}>
                        <Input
                            className={s.input}
                            placeholder="Orders Code"
                            setValue={setInputValue}
                            value={inputValue}
                        />
                        <Input
                            className={s.input}
                            placeholder="Client Name"
                            setValue={setInputValue}
                            value={inputValue}
                        />
                        <Input
                            className={s.input}
                            placeholder="Order Start Date"
                            setValue={setInputValue}
                            value={inputValue}
                        />
                        <Input
                            className={s.input}
                            placeholder="Order End Date"
                            setValue={setInputValue}
                            value={inputValue}
                        />
                        <Button className={cn(s.button, s.button_black)}>
                            <Icon type={"close_cross"}/>
                        </Button>
                        <Button className={cn(s.button, s.button_purple)} iconLeft="search">
                            Search
                        </Button>
                        <Button
                            className={cn(s.button, s.button_green)}
                            iconLeft="download"
                        >
                            Excel Download
                        </Button>
                    </div>

                    <div className={s.bottom_content_header}>
                        <Select
                            placeholder={"Order date"}
                            values={[
                                {title: "Order date", value: 1},
                            ]}
                            onChange={() => {
                                return
                            }}
                        />
                        <Select
                            placeholder={"Old to New"}
                            values={[
                                {title: "Old to New", value: 1},
                            ]}
                            onChange={() => {
                                return
                            }}
                        />
                        <div>
                            <p>On Every Page</p>
                        </div>
                        <Select
                            placeholder={"20 product"}
                            values={[
                                {title: "20 product", value: 1},
                            ]}
                            onChange={() => {
                                return
                            }}
                        />
                        <Pagination className={s.pagination} pagesCount={10}/>
                    </div>

                    <Table headers={tableHeaders} innerRows={tableInnerRows}/>
                </div>
            </div>
        </>
    )
}

export default BrandProducts
