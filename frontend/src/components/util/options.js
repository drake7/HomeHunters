export const propertyCategories = [
    {   id: 1,
        label: 'Apartment' 
    }, 
    {
        id: 2,
        label: 'Independent House'
    }, 
    {
        id: 3,
        label: 'Independent Floor'
    }, 
    {
        id: 4,
        label: 'Studio'
    }, 
    {
        id: 5,
        label: 'Duplex'
    }, 
    {
        id: 6,
        label: 'Private Room'
    }, 
    {
        id: 7,
        label: 'Shared Room'
    },
]

export const propertyTags = [
    {
        id: 1,
        label: "utilities included",

    },
    {
        id: 2,
        label: "includes kitchen"
    },
    {
        id: 3,
        label:  "includes laundry and dryer",
    },
    {
        id: 4,
        label:  "close to transit",
    },
    {
        id: 5,
        label:  "high-speed internet",
    },
    {
        
        id: 6,
        label:  "parking available",
    },
    {
        id: 7,
        label:  "pet friendly",
    },
    {
        id: 8,
        label:  "air conditioning",
    },
    {
        id: 9,
        label:  "shared bathroom",
    },
    {
        id: 10,
        label:  "shared kitchen",
    },
    {
        id: 11,
        label:  "security system",
    },
    
    {
        id: 12,
        label:  "walk-in closets",
    },
    {
        id: 13,
        label:  "patio/balcony",
    },    
    {
        id: 14,
        label:  "microwave"
   },
   
]

export function getCategoryNameById(id){
    const catArr = propertyCategories.filter((cat)=>{
        return cat.id == id
      });
    console.log(catArr)
    return catArr.length ? catArr[0].label: "";
}

export function getTagNameById(id){
    const tagArr = propertyTags.filter((tag)=>{
        return tag.id == id
      });
    console.log(tagArr)
    return tagArr.length ? tagArr[0].label: "";
}

