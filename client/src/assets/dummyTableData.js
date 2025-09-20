const users = [
  {
    id: 1,
    name: "Bryan Rodriguez",
    email: "mfisher@allen.biz",
    date_joined: "2024-03-22",
    itinerary_created: 4,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    id: 2,
    name: "Dennis Murillo",
    email: "steven22@hotmail.com",
    date_joined: "2025-05-21",
    itinerary_created: 5,
    status_checked: "banned",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 3,
    name: "Molly Watson",
    email: "pbowen@villanueva.biz",
    date_joined: "2024-06-29",
    itinerary_created: 1,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 4,
    name: "William Marshall",
    email: "mitchelldiane@khan.com",
    date_joined: "2024-10-18",
    itinerary_created: 15,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/men/61.jpg"
  },
  {
    id: 5,
    name: "Jon Leonard",
    email: "donald66@yahoo.com",
    date_joined: "2023-12-15",
    itinerary_created: 7,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/men/78.jpg"
  },
  {
    id: 6,
    name: "Sophia Turner",
    email: "sophia.turner@example.com",
    date_joined: "2023-09-12",
    itinerary_created: 10,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 7,
    name: "David Johnson",
    email: "david.johnson@example.com",
    date_joined: "2024-05-02",
    itinerary_created: 6,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 8,
    name: "Emma Williams",
    email: "emma.williams@example.com",
    date_joined: "2023-11-25",
    itinerary_created: 3,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/34.jpg"
  },
  {
    id: 9,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    date_joined: "2024-08-17",
    itinerary_created: 9,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/men/48.jpg"
  },
  {
    id: 10,
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
    date_joined: "2023-07-14",
    itinerary_created: 11,
    status_checked: "banned",
    image: "https://randomuser.me/api/portraits/women/55.jpg"
  },
  {
    id: 11,
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
    date_joined: "2024-04-01",
    itinerary_created: 2,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    id: 12,
    name: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    date_joined: "2023-06-09",
    itinerary_created: 7,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    id: 13,
    name: "James Anderson",
    email: "james.anderson@example.com",
    date_joined: "2024-09-23",
    itinerary_created: 14,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/men/57.jpg"
  },
  {
    id: 14,
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
    date_joined: "2025-01-11",
    itinerary_created: 12,
    status_checked: "banned",
    image: "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    id: 15,
    name: "Liam Thomas",
    email: "liam.thomas@example.com",
    date_joined: "2024-11-28",
    itinerary_created: 5,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/men/66.jpg"
  },
  {
    id: 16,
    name: "Charlotte Hernandez",
    email: "charlotte.hernandez@example.com",
    date_joined: "2023-10-10",
    itinerary_created: 8,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/women/53.jpg"
  },
  {
    id: 17,
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
    date_joined: "2024-12-07",
    itinerary_created: 13,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/men/71.jpg"
  },
  {
    id: 18,
    name: "Amelia Martin",
    email: "amelia.martin@example.com",
    date_joined: "2025-02-16",
    itinerary_created: 0,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 19,
    name: "Henry Jackson",
    email: "henry.jackson@example.com",
    date_joined: "2023-05-20",
    itinerary_created: 6,
    status_checked: "banned",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    id: 20,
    name: "Mia White",
    email: "mia.white@example.com",
    date_joined: "2024-07-19",
    itinerary_created: 10,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/71.jpg"
  },
  {
    id: 21,
    name: "Lucas Harris",
    email: "lucas.harris@example.com",
    date_joined: "2024-01-30",
    itinerary_created: 9,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 22,
    name: "Harper Clark",
    email: "harper.clark@example.com",
    date_joined: "2023-03-04",
    itinerary_created: 7,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/84.jpg"
  },
  {
    id: 23,
    name: "Alexander Lewis",
    email: "alexander.lewis@example.com",
    date_joined: "2025-03-12",
    itinerary_created: 15,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/men/91.jpg"
  },
  {
    id: 24,
    name: "Evelyn Walker",
    email: "evelyn.walker@example.com",
    date_joined: "2023-08-29",
    itinerary_created: 4,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/women/72.jpg"
  },
  {
    id: 25,
    name: "Daniel Hall",
    email: "daniel.hall@example.com",
    date_joined: "2024-06-06",
    itinerary_created: 2,
    status_checked: "banned",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 26,
    name: "Abigail Allen",
    email: "abigail.allen@example.com",
    date_joined: "2023-04-27",
    itinerary_created: 6,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 27,
    name: "Matthew Young",
    email: "matthew.young@example.com",
    date_joined: "2024-10-05",
    itinerary_created: 3,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/men/27.jpg"
  },
  {
    id: 28,
    name: "Ella King",
    email: "ella.king@example.com",
    date_joined: "2023-09-03",
    itinerary_created: 1,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/36.jpg"
  },
  {
    id: 29,
    name: "Joseph Scott",
    email: "joseph.scott@example.com",
    date_joined: "2024-11-19",
    itinerary_created: 12,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    id: 30,
    name: "Scarlett Green",
    email: "scarlett.green@example.com",
    date_joined: "2023-02-14",
    itinerary_created: 5,
    status_checked: "banned",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 31,
    name: "Jack Adams",
    email: "jack.adams@example.com",
    date_joined: "2024-12-22",
    itinerary_created: 9,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/men/95.jpg"
  },
  {
    id: 32,
    name: "Victoria Nelson",
    email: "victoria.nelson@example.com",
    date_joined: "2025-05-09",
    itinerary_created: 7,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/women/27.jpg"
  },
  {
    id: 33,
    name: "Samuel Carter",
    email: "samuel.carter@example.com",
    date_joined: "2024-02-18",
    itinerary_created: 10,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/men/40.jpg"
  },
  {
    id: 34,
    name: "Grace Mitchell",
    email: "grace.mitchell@example.com",
    date_joined: "2023-07-23",
    itinerary_created: 8,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  },
  {
    id: 35,
    name: "Andrew Perez",
    email: "andrew.perez@example.com",
    date_joined: "2024-05-15",
    itinerary_created: 13,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    id: 36,
    name: "Chloe Roberts",
    email: "chloe.roberts@example.com",
    date_joined: "2025-01-02",
    itinerary_created: 11,
    status_checked: "banned",
    image: "https://randomuser.me/api/portraits/women/49.jpg"
  },
  {
    id: 37,
    name: "Christopher Turner",
    email: "christopher.turner@example.com",
    date_joined: "2023-06-17",
    itinerary_created: 0,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    id: 38,
    name: "Lily Phillips",
    email: "lily.phillips@example.com",
    date_joined: "2024-03-25",
    itinerary_created: 14,
    status_checked: "inactive",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    id: 39,
    name: "Anthony Campbell",
    email: "anthony.campbell@example.com",
    date_joined: "2024-09-07",
    itinerary_created: 6,
    status_checked: "pending",
    image: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    id: 40,
    name: "Sofia Parker",
    email: "sofia.parker@example.com",
    date_joined: "2023-11-01",
    itinerary_created: 3,
    status_checked: "active",
    image: "https://randomuser.me/api/portraits/women/13.jpg"
  }
];

export default users;