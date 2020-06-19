This is the component with the description of the rental, sleeping arrangments, and included amenities.

# Seeding Script
The seeding script will generate an arbitrary number of fake listings in MongoDB.
For each listing it'll generate:
- Titles
- Descriptions with multiple paragraphs
- Number of guests
- Number of bedrooms
- Number of beds
- Number of public bathrooms
- Number of private bathrooms
- 1+ Sleeping arrangement objects with:
  - Location, either:
    - "Common Space" (up to one per listing)
    - "Bedroom{n}" (ordered - no "Bedroom2" without "Bedroom1")
  - List of beds (enumerated below)
- 1+ Amenities objects wtih:
  - Type (enumerated below)
  - Amenity (enumerated below)
  - Description
- 1 Users object with:
  - User name
  - User image (a URL)

`
beds: [
  'Double',
  'Queen',
  'Single',
  'Sofa Bed',
  'King',
  'Small Double',
  'Couch',
  'Bunk Bed',
  'Floor Mattress',
  'Air Mattress',
  'Crib',
  'Toddler Bed',
  'Hammock',
  'Water Bed'
]

amenity types: [
  'Basic',
  'Facilities',
  'Dining',
  'Guest Access',
  'Safety Features',
  'Bed and Bath'
]

amenities: [
  'Kitchen',
  'Essentials',
  'Wifi',
  'TV',
  'Heat',
  'Air Conditioning',
  'Iron',
  'Shampoo',
  'Hair Dryer',
  'Breakfast,
   coffee,
   tea',
  'Desk/Workspace',
  'Fireplace',
  'Closet/Drawers',
  'Private Entrance',
  'Smoke Detector',
  'Carbon Monoxide Detector',
  'First aid kit',
  'Fire extinguisher',
  'Lock on bedroom door',
  'On-Street Parking",
  'On-Site Parking"
]

# Schema
{
  listing_id: String,
  user: {
    user_id: String,
    user_name: String,
    user_image: String
  },
  title: String,
  description: String,
  guests: Number,
  bedrooms: Number,
  beds: Number,
  publicBaths: Number,
  privateBaths: Number,
  sleepingArrangements: [
    {
      location: String,
      beds: [
        { 
          amount: Number,
          type: [
            'Double',
            'Queen',
            'Single',
            'Sofa Bed',
            'King',
            'Small Double',
            'Couch',
            'Bunk Bed',
            'Floor Mattress',
            'Air Mattress',
            'Crib',
            'Toddler Bed',
            'Hammock',
            'Water Bed'
          ]
        }
      ]
    }
  ],
  amenities: [
    {
      type: [
        'Basic',
        'Facilities',
        'Dining',
        'Safety Features',
        'Bed and Bath
      ],
      amenity: [
        'Kitchen',
        'Essentials',
        'Wifi',
        'TV',
        'Heat',
        'Air Conditioning',
        'Iron',
        'Shampoo',
        'Hair Dryer',
        'Breakfast, coffee, tea',
        'Oven',
        'Stove',
        'Microwave',
        'Refrigerator',
        'Knives',
        'Dining Table',
        'Desk/Workspace',
        'Fireplace',
        'Closet/Drawers',
        'Private Entrance',
        'Smoke Detector',
        'Carbon Monoxide Detector',
        'First aid kit',
        'Fire extinguisher',
        'Lock on bedroom door',
        'On-Street Parking",
        'On-Site Parking"
      ],
      description: String
    }
  ]
}
