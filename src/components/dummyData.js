export const food_data = [
    {
        order_id: '1',
        customer_details: {
            name: 'John Doe',
            address: '221B, Baker St.',
            phone: '9874563210'
        },
        order_details: 'somedata',
        other_details: '5'
    },
    {
        order_id: '2',
        customer_details: {
            name: 'John Doe',
            address: '221B, Baker St.',
            phone: '9874563210'
        },
        order_details: 'somedata',
        other_details: '5'
    },
    {
        order_id: '3',
        customer_details: {
            name: 'John Doe',
            address: '221B, Baker St.',
            phone: '9874563210'
        },
        order_details: 'somedata',
        other_details: '5'
    },
    {
        order_id: '4',
        customer_details: {
            name: 'John Doe',
            address: '221B, Baker St.',
            phone: '9874563210'
        },
        order_details: 'somedata',
        other_details: '5'
    }
];

export const appointment_data = [
    {
        customer_name: 'John Doe',
        appointment_date: new Date(),
        appointment_id: 1
    },
    {
        customer_name: 'John Doe',
        appointment_date: new Date(),
        appointment_id: 2
    },
    {
        customer_name: 'John Doe',
        appointment_date: new Date(),
        appointment_id: 3
    },
    {
        customer_name: 'John Doe',
        appointment_date: new Date(),
        appointment_id: 4
    },
]

export const food_headers = [
    'Order ID', 
    'Order Items', 
    'Customer Details', 
    'Restaurant',
    'Status',
];

export const appointment_headers = [
    'Customer Name',
    'Appointment Date',
    'Appointment Time',
    'Approve',
    'Reschedule',
    'Reject'
];


export const Menus = {
    Mcd: [
        {
            itemName: "Mc Aloo Tikki",
            itemId: "0",
            price: "100",
        },
        {
            itemName: "Paneer Wrap",
            itemId: "1",
            price: "150",
        },
        {
            itemName: "Peri Peri Fries",
            itemId: "2",
            price: "180",
        },
        {
            itemName: "Mc Flurry",
            itemId: "3",
            price: "200",
        }
    ],
    dominos: [
        {
            itemName: "Margherita",
            itemId: "0",
            price: "400",
        },
        {
            itemName: "Pepperoni",
            itemId: "1",
            price: "450",
        },
        {
            itemName: "Farmhouse",
            itemId: "2",
            price: "380",
        },
        {
            itemName: "Garlic Bread",
            itemId: "3",
            price: "120",
        }
    ],
}