import Image from "next/image"
import { Icon, Tooltip } from "UI"
import dress from "public/assets/img/Knitted_dress.png"
import s from "styles/pages/brand-products.module.scss"
const text = "Switch an order to preparing status Do you approve your request?"

export const brandProductsTableContent = {
  headers: [
    { name: "productImage" },
    { name: "productName" },
    { name: "productCode" },
    { name: "brand" },
    { name: "commission" },
    { name: "price" },
    { name: "stock" },
    { name: "status" },
    { name: "detail" },
  ],
  rows: [
    [
      {
        value: (
          <div>
            <Image src={dress} width={46} height={83} />
          </div>
        ),
        alignCenter: true,
      },
      { value: "Black Printed Long Sleeve Midi Dress" },
      { value: "BFNSKBGDHKSF" },
      { value: "Yves Saint L" },
      { value: "%25" },
      { value: "$213" },
      { value: 32132 },
      { value: "Not available" },
      {
        value: <Icon type={"exclamation"} />,
        alignCenter: true,
      },
    ],
    [
      {
        value: (
          <div>
            <Image src={dress} width={46} height={83} />
          </div>
        ),
        alignCenter: true,
      },
      { value: "Black Printed Long Sleeve Midi Dress" },
      { value: "BFNSKBGDHKSF" },
      { value: "Yves Saint L" },
      { value: "%25" },
      { value: "$213" },
      { value: 32132 },
      { value: "Not available" },
      {
        value: <Icon type={"exclamation"} />,
        alignCenter: true,
      },
    ],
    [
      {
        value: (
          <div>
            <Image src={dress} width={46} height={83} />
          </div>
        ),
        alignCenter: true,
      },
      { value: "Black Printed Long Sleeve Midi Dress" },
      { value: "BFNSKBGDHKSF" },
      { value: "Yves Saint L" },
      { value: "%25" },
      { value: "$213" },
      { value: 32132 },
      { value: "Not available" },
      {
        value: <Icon type={"exclamation"} />,
        alignCenter: true,
      },
    ],
  ],
}

export const brandOrdOpsTableContent = {
  headers: [
    { name: "Orders No" },
    { name: "Orders Date" },
    { name: "Recipient Name" },
    { name: "Number" },
    { name: "Products" },
    { name: "Price" },
    { name: "Invoice" },
    { name: "Status" },
    { name: "Detail", alignCenter: true },
  ],
  rows: [
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
    ],
  ],
}

export const brandOrdTransTableContent = {
  headers: [
    { name: "Orders No" },
    { name: "Orders Date" },
    { name: "Recipient Name" },
    { name: "Number" },
    { name: "Products" },
    { name: "Price" },
    { name: "Invoice" },
    { name: "Status" },
    { name: "Detail", alignCenter: true },
    { name: "Process", alignCenter: true },
  ],
  rows: [
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
      {
        value: (
          <>
            <Tooltip content={text}>
              <p style={{ color: "#8100EF", marginBottom: "7px" }}>
                Getting Ready Pass
              </p>
            </Tooltip>
            <p style={{ textDecoration: "underline" }}>Cancel Order</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
      {
        value: (
          <>
            <Tooltip content={text}>
              <p style={{ color: "#8100EF", marginBottom: "7px" }}>
                Getting Ready Pass
              </p>
            </Tooltip>
            <p style={{ textDecoration: "underline" }}>Cancel Order</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
      {
        value: (
          <>
            <Tooltip content={text}>
              <p style={{ color: "#8100EF", marginBottom: "7px" }}>
                Getting Ready Pass
              </p>
            </Tooltip>
            <p style={{ textDecoration: "underline" }}>Cancel Order</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
      {
        value: (
          <>
            <Tooltip content={text}>
              <p style={{ color: "#8100EF", marginBottom: "7px" }}>
                Getting Ready Pass
              </p>
            </Tooltip>
            <p style={{ textDecoration: "underline" }}>Cancel Order</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
      {
        value: (
          <>
            <Tooltip content={text}>
              <p style={{ color: "#8100EF", marginBottom: "7px" }}>
                Getting Ready Pass
              </p>
            </Tooltip>
            <p style={{ textDecoration: "underline" }}>Cancel Order</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
      {
        value: (
          <>
            <Tooltip content={text}>
              <p style={{ color: "#8100EF", marginBottom: "7px" }}>
                Getting Ready Pass
              </p>
            </Tooltip>
            <p style={{ textDecoration: "underline" }}>Cancel Order</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      { value: 221255 },
      { value: "New Order" },
      {
        value: (
          <>
            <p className={s.table_sign_icon}>
              <Icon color={"#8100EF"} type={"exclamation"} />
            </p>
            <p style={{ marginTop: "8px" }}>New Notification</p>
          </>
        ),
        alignCenter: true,
      },
      {
        value: (
          <>
            <Tooltip content={text}>
              <p style={{ color: "#8100EF", marginBottom: "7px" }}>
                Getting Ready Pass
              </p>
            </Tooltip>
            <p style={{ textDecoration: "underline" }}>Cancel Order</p>
          </>
        ),
      },
    ],
  ],
}

export const brandCancelTableContent = {
  headers: [
    { name: "Orders No" },
    { name: "Orders Date" },
    { name: "Recipient Name" },
    { name: "Number" },
    { name: "Products" },
    { name: "Price" },
    { name: "Cancellation Date" },
    { name: "Reason For Cancellation" },
  ],
  rows: [
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      {
        value: (
          <>
            <p style={{ color: "#8100EF", marginBottom: "7px" }}>
              Customer Reason
            </p>
            <p style={{ textDecoration: "underline" }}>Small Size</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      {
        value: (
          <>
            <p style={{ color: "#8100EF", marginBottom: "7px" }}>
              Customer Reason
            </p>
            <p style={{ textDecoration: "underline" }}>Small Size</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      {
        value: (
          <>
            <p style={{ color: "#8100EF", marginBottom: "7px" }}>
              Customer Reason
            </p>
            <p style={{ textDecoration: "underline" }}>Small Size</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      {
        value: (
          <>
            <p style={{ color: "#8100EF", marginBottom: "7px" }}>
              Customer Reason
            </p>
            <p style={{ textDecoration: "underline" }}>Small Size</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      {
        value: (
          <>
            <p style={{ color: "#8100EF", marginBottom: "7px" }}>
              Customer Reason
            </p>
            <p style={{ textDecoration: "underline" }}>Small Size</p>
          </>
        ),
      },
    ],
    [
      { value: 5237980 },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      { value: "Ömer Yıldız" },
      { value: 43121 },
      {
        value: (
          <>
            <p>Black Printed Long</p>
            <p>Sleeve Midi Dress</p>
          </>
        ),
      },
      { value: "₺2125" },
      {
        value: (
          <>
            <p>February 21, 2021</p>
            <p>Time: 22.20</p>
          </>
        ),
      },
      {
        value: (
          <>
            <p style={{ color: "#8100EF", marginBottom: "7px" }}>
              Customer Reason
            </p>
            <p style={{ textDecoration: "underline" }}>Small Size</p>
          </>
        ),
      },
    ],
  ],
}
