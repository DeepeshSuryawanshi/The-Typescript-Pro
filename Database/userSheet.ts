
const users = [
    {
        "id": "ee784e9b-b830-45e0-8af2-0aa5652baa1d",
        "name": "Erin Walker",
        "email": "ycurry@holland-pearson.info",
        "phone": "249-482-0812x13451",
        "address": {
            "street": "226 Lopez Shoals Suite 164",
            "city": "Port Jonathanside",
            "state": "Washington",
            "zip": "93760"
        },
        "dob": "1952-11-30",
        "is_active": false,
        "created_at": "2023-05-25T13:25:04"
    },
    {
        "id": "b92a1d34-2eb2-495a-a5a8-a68913ed9e34",
        "name": "Kevin Johnson",
        "email": "taylorrandy@yahoo.com",
        "phone": "001-897-273-9076",
        "address": {
            "street": "054 Anne Views Suite 720",
            "city": "Lake Cynthiashire",
            "state": "Tennessee",
            "zip": "15458"
        },
        "dob": "2003-07-17",
        "is_active": true,
        "created_at": "2024-09-21T15:24:39"
    },
    {
        "id": "d432737c-bf7f-4219-894d-d83a2a52f849",
        "name": "Justin Oneal",
        "email": "tammy49@yahoo.com",
        "phone": "(588)462-9726x617",
        "address": {
            "street": "26603 Mcdowell Cove",
            "city": "Olivertown",
            "state": "South Carolina",
            "zip": "83158"
        },
        "dob": "2002-02-08",
        "is_active": true,
        "created_at": "2023-04-25T15:55:25"
    },
    {
        "id": "d84c1dda-2301-4f1a-b9b5-30a53f76bef2",
        "name": "Loretta Dudley",
        "email": "aaronwilson@welch-bernard.com",
        "phone": "(719)558-6424x310",
        "address": {
            "street": "19547 Joseph Center Apt. 427",
            "city": "Boothport",
            "state": "Oregon",
            "zip": "84720"
        },
        "dob": "1949-10-22",
        "is_active": true,
        "created_at": "2020-05-06T10:27:53"
    },
    {
        "id": "b048d0cd-8b53-48d1-a320-2ec7afd142b6",
        "name": "Michelle Hamilton",
        "email": "jonathan52@yahoo.com",
        "phone": "001-103-534-6662",
        "address": {
            "street": "828 Marshall Plain Apt. 044",
            "city": "Espinozaton",
            "state": "Alabama",
            "zip": "49700"
        },
        "dob": "2003-01-18",
        "is_active": false,
        "created_at": "2024-12-12T01:22:21"
    },
    {
        "id": "0a41235e-dab9-4b49-bfb3-3649fa77b200",
        "name": "Julie Rios",
        "email": "jacobrodriguez@hotmail.com",
        "phone": "218-514-7682",
        "address": {
            "street": "03491 Lauren Summit",
            "city": "East Chase",
            "state": "Wisconsin",
            "zip": "48379"
        },
        "dob": "1996-03-02",
        "is_active": false,
        "created_at": "2022-08-05T01:10:04"
    },
    {
        "id": "5d9a226f-4f4b-4504-a528-61d7f9dba033",
        "name": "William Johnson",
        "email": "jromero@gmail.com",
        "phone": "4423365694",
        "address": {
            "street": "18855 Dwayne Trace",
            "city": "Thompsonburgh",
            "state": "Kansas",
            "zip": "51124"
        },
        "dob": "1964-06-16",
        "is_active": true,
        "created_at": "2021-06-11T08:06:29"
    },
    {
        "id": "b4bb0df2-f584-440b-990f-9d0d1b74445e",
        "name": "Thomas Miller",
        "email": "ericksonlauren@mendoza.com",
        "phone": "5038374630",
        "address": {
            "street": "236 Olivia Trafficway",
            "city": "South Kenneth",
            "state": "Wisconsin",
            "zip": "55613"
        },
        "dob": "1981-03-23",
        "is_active": true,
        "created_at": "2022-04-14T10:13:04"
    },
    {
        "id": "ecd2ac6a-f39e-4959-a3d6-515b65630fa6",
        "name": "Melanie Pruitt",
        "email": "davidalvarez@gmail.com",
        "phone": "(256)911-1039x40473",
        "address": {
            "street": "414 Michael Shores",
            "city": "Dennisside",
            "state": "Utah",
            "zip": "31218"
        },
        "dob": "1962-10-19",
        "is_active": false,
        "created_at": "2021-09-24T01:33:42"
    },
    {
        "id": "dd536d6b-4545-431a-994f-6c046af20cc7",
        "name": "Annette Johnson",
        "email": "elizabethmccann@sullivan.com",
        "phone": "(746)227-2150",
        "address": {
            "street": "7235 Jacqueline Rapid",
            "city": "East Nicholas",
            "state": "Connecticut",
            "zip": "16777"
        },
        "dob": "1984-10-14",
        "is_active": false,
        "created_at": "2020-05-12T16:00:48"
    },
    {
        "id": "62225e09-fa3b-45c5-a49c-86913b6a9b53",
        "name": "Benjamin Wilson",
        "email": "juliehenderson@hotmail.com",
        "phone": "(229)846-4795x36892",
        "address": {
            "street": "7100 Jones Field",
            "city": "New Deborahfort",
            "state": "New York",
            "zip": "40466"
        },
        "dob": "1982-05-26",
        "is_active": false,
        "created_at": "2022-05-15T13:47:27"
    },
    {
        "id": "abdc7b4c-5555-472b-8c12-59623b983609",
        "name": "Tracy Estes",
        "email": "brockheather@hotmail.com",
        "phone": "+1-872-349-9592x3589",
        "address": {
            "street": "36827 Heather Isle",
            "city": "North Matthew",
            "state": "Tennessee",
            "zip": "26357"
        },
        "dob": "1999-02-28",
        "is_active": false,
        "created_at": "2021-11-30T16:30:57"
    },
    {
        "id": "6741be3e-63c4-4afc-8ff2-7866a45d59d2",
        "name": "Henry Hunter",
        "email": "halljessica@hotmail.com",
        "phone": "576.898.5956x6828",
        "address": {
            "street": "49641 Proctor Green",
            "city": "New Markshire",
            "state": "Mississippi",
            "zip": "10983"
        },
        "dob": "1971-10-22",
        "is_active": true,
        "created_at": "2022-08-31T09:22:52"
    },
    {
        "id": "88b8f7d5-cf2f-4e1c-a1f4-59d9d0ecacbd",
        "name": "Cesar Anderson",
        "email": "jamesbanks@washington-vang.net",
        "phone": "025.213.7659",
        "address": {
            "street": "34852 Thompson Extension Apt. 220",
            "city": "North Philipport",
            "state": "Iowa",
            "zip": "86508"
        },
        "dob": "1978-02-21",
        "is_active": true,
        "created_at": "2024-03-01T21:33:40"
    },
    {
        "id": "c124fe2a-228f-4e16-95d8-5cd841fde7e6",
        "name": "Megan Hines",
        "email": "shawnwalls@arnold-lopez.org",
        "phone": "698-740-0810",
        "address": {
            "street": "0360 Freeman Summit",
            "city": "Spenceton",
            "state": "Wisconsin",
            "zip": "04167"
        },
        "dob": "1984-06-16",
        "is_active": true,
        "created_at": "2024-12-18T16:23:04"
    },
    {
        "id": "ce0ae4b8-f237-4d92-bfde-e7f9dfa7be79",
        "name": "Tyler Eaton",
        "email": "donaldclark@hotmail.com",
        "phone": "545-406-6707x1684",
        "address": {
            "street": "782 Lisa Tunnel Suite 431",
            "city": "Chambersberg",
            "state": "Rhode Island",
            "zip": "28582"
        },
        "dob": "1993-02-19",
        "is_active": true,
        "created_at": "2020-12-10T07:53:47"
    },
    {
        "id": "318064b9-c473-446d-836d-2d209724bf4a",
        "name": "Elizabeth Colon",
        "email": "alexander52@gmail.com",
        "phone": "+1-064-381-5679x2388",
        "address": {
            "street": "9002 Michele Ridges Suite 099",
            "city": "South Michael",
            "state": "Maine",
            "zip": "35782"
        },
        "dob": "1947-09-09",
        "is_active": true,
        "created_at": "2020-10-16T12:46:30"
    },
    {
        "id": "fcf80809-e93e-4433-8cc7-7a140fbbafe7",
        "name": "Timothy Mccoy",
        "email": "grosschristopher@gmail.com",
        "phone": "424-045-2389",
        "address": {
            "street": "45402 Green Street Apt. 026",
            "city": "South Cathyborough",
            "state": "Hawaii",
            "zip": "09031"
        },
        "dob": "1984-01-08",
        "is_active": true,
        "created_at": "2022-02-08T09:00:36"
    },
    {
        "id": "ff87ff7c-6003-43f5-8542-3fdaba7daa07",
        "name": "Brian Jennings",
        "email": "hbrown@lowe.com",
        "phone": "377-644-0352",
        "address": {
            "street": "8705 Robert Isle Suite 558",
            "city": "New Rebeccaton",
            "state": "Alaska",
            "zip": "78501"
        },
        "dob": "1957-09-16",
        "is_active": true,
        "created_at": "2024-10-22T01:16:32"
    },
    {
        "id": "74eef8ac-bc45-4775-bb25-16378a3abf3e",
        "name": "Theresa Russell",
        "email": "brenda82@yahoo.com",
        "phone": "591-451-3984x40876",
        "address": {
            "street": "644 William Trace Suite 768",
            "city": "Port Justin",
            "state": "California",
            "zip": "56066"
        },
        "dob": "1947-10-27",
        "is_active": false,
        "created_at": "2023-05-01T19:58:48"
    }
]
export default users;