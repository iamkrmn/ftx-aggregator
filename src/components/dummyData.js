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
    'Generate Invoice', 
    'Other Details'
];

export const appointment_headers = [
    'Customer Name',
    'Appointment Date',
    'Appointment Time',
    'Approve',
    'Reschedule',
    'Reject'
];