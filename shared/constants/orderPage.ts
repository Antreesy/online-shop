interface orderAddress {
    id: number,
    title: string;
    text: {
        street: string;
        number: string;
        contacts: string;
    };
    billingAddress: boolean;
}

export const addresses:orderAddress[] = [
    {
      id: 1,
      title: "Yalçın’s Home",
      text: {
        street: "Atatürk Mah. Ertuğrul Gazi Cad. Metropol İstanbul C Blok",
        number: "No.225 Ataşehir - İSTANBUL",
        contacts: "Yusuf GÜÇLÜ (535) 512 85 93"
      },
      billingAddress: true
    },
  ]

export const billingAddress:Omit<orderAddress, "billingAddress">[] = [
{
    id: 1,
    title: "Yalçın’s Home",
    text: {
    street: "Atatürk Mah. Ertuğrul Gazi Cad. Metropol İstanbul C Blok",
    number: "No.225 Ataşehir - İSTANBUL",
    contacts: "Yusuf GÜÇLÜ (535) 512 85 93"
    },
},
]

