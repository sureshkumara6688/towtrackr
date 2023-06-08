export const enquiriesFrom = [
    {
        type: "radio",
        layout: "col-1",
        label: "Who is Calling?",
        options: [
            {
                key: "Customer",
                value: "Customer"
            },
            {
                key: "Spotter",
                value: "Spotter"
            }
        ]
    },
    {
        type: "title",
        label: "Service Details",
    },
    {
        type: "Select",
        layout: "col-1",
        label: "Service Type",
        options: [
            {
                key: "Select service Needed",
                value: ""
            },
            {
                key: "serice 1",
                value: "serice1"
            }
        ]
    },
    {
        type: "text",
        layout: "col-2",
        margin: "maringRight",
        label: "Customer First name",
        Placeholder: "Enter First Name"
    },
    {
        type: "text",
        layout: "col-2",
        label: "Customer Last name",
        Placeholder: "Enter Last Name"
    },
    {
        type: "text",
        layout: "col-2",
        margin: "maringRight",
        label: "Customer Mobile Number",
        Placeholder: "Enter Mobile Number",

    },
    {
        type: "text",
        layout: "col-2",
        label: "Customer Email Address",
        Placeholder: "Enter Email Address"
    },
    {
        type: "text",
        margin: "maringRight",
        layout: "col-2",
        label: "Pickup Loaction",
        Placeholder: "Enter Pickup Loaction"
    },
    {
        type: "text",
        layout: "col-2",
        label: "When do you need this done?",
        Placeholder: "Please Select"
    },
    {
        type: "text",
        margin: "maringRight",
        layout: "col-2",
        label: "Type of Vehicle",
        Placeholder: "Enter Type of Vehicle"
    },
    {
        type: "text",
        layout: "col-2",
        label: "Enter Type of Model",
        Placeholder: "Enter Enter Type of Model"
    },
    {
        type: "text",
        margin: "maringRight",
        layout: "col-2",
        label: "Vehicle Identification Number",
        Placeholder: "Enter Vehicle Identification Number"
    },
    {
        type: "text",
        layout: "col-2",
        label: "Vehicle Make",
        Placeholder: "Enter Vehicle Make"
    },
    {
        type: "text",
        margin: "maringRight",
        layout: "col-2",
        label: "License Plate Number",
        Placeholder: "Enter License Plate Number"
    },
    {
        type: "text",
        layout: "col-2",
        label: "Vehicle Color",
        Placeholder: "Enter Vehicle Color"
    },
    {
        type: "text",
        margin: "maringRight",
        layout: "col-2",
        label: "If No, Location of where you left the keys? ",
        Placeholder: "Enter Location"
    },
    {
        type: "text",
        layout: "col-2",
        label: "If Yes, Enter the height of the carpark",
        Placeholder: "Enter Height of thr carpark"
    },
    {
        type: "radio",
        layout: "col-1",
        margin: "maringRight",
        label: "Has Vehicle Been Lowered?",
        options: [
            {
                key: "Yes",
                value: "No"
            },
            {
                key: "No",
                value: "No"
            }
        ]
    },
    {
        type: "radio",
        layout: "col-1",
        margin: "maringRight",
        label: "Do you have the Key?",
        options: [
            {
                key: "Yes",
                value: "No"
            },
            {
                key: "No",
                value: "No"
            }
        ]
    },
    {
        type: "radio",
        layout: "col-1",
        margin: "maringRight",
        label: "Is this in an Underground/height restricted Carpark?",
        options: [
            {
                key: "Yes",
                value: "No"
            },
            {
                key: "No",
                value: "No"
            }
        ]
    },
    {
        type: "radio",
        layout: "col-1",
        margin: "maringRight",
        label: "Are You staying with the vehicle?",
        options: [
            {
                key: "Yes",
                value: "No"
            },
            {
                key: "No",
                value: "No"
            }
        ]
    },
    {
        type: "radio",
        layout: "col-1",
        margin: "maringRight",
        label: "Steering Unlocked?",
        options: [
            {
                key: "Yes",
                value: "No"
            },
            {
                key: "No",
                value: "No"
            }
        ]
    },
    {
        type: "radio",
        layout: "col-1",
        margin: "maringRight",
        label: "Does it Roll or Can We Put it in Neutral?",
        options: [
            {
                key: "Yes",
                value: "No"
            },
            {
                key: "No",
                value: "No"
            }
        ]
    },
    {
        type: "radio",
        layout: "col-1",
        margin: "maringRight",
        label: "Access for a Tilt Tray?",
        options: [
            {
                key: "Yes",
                value: "No"
            },
            {
                key: "Yes",
                value: "Yes"
            }
        ]
    },
    {
        type: "calender",
        layout: "col-2",
        label: "Date&Time",
        Placeholder: "DD:MM:YYYY"
    },

]









export const  navigation = [
        {
            name:"Enquiries",
            url:"1"
        },
        {
            name:"Services",
            url:"2"
        },
        {
            name:"Map View",
            url:"3"
        },
        {
            name:"Customers",
            url:"4"
        },{
            name:"Spotters",
            url:"5"
        },{
            name:"Drivers",
            url:"6"
        },{
            name:"Payments",
            url:"7"
        },{
            name:"Settings",
            url:"8"
        },{
            name:"Logout",
            url:"9"
        }

]