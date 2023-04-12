export const propertyCategories = [
    {   id: 1,
        label: 'Apartment' }, 
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
        id: 3,
        label: "includes kitchen"
    },
    {
        id: 4,
        label:  "includes laundry and dryer",
    },
    {
        id: 5,
        label:  "close to transit",
    },
    {
        id: 14,
        label:  "high-speed internet",
    },
    {
        
        id: 3,
        label:  "parking available",
    },
    {
        id: 2,
        label:  "pet friendly",
    },
    {
        id: 6,
        label:  "air conditioning",
    },
    {
        id: 7,
        label:  "shared bathroom",
    },
    {
        id: 8,
        label:  "shared kitchen",
    },
    {
        id: 13,
        label:  "security system",
    },
    
    {
        id: 10,
        label:  "walk-in closets",
    },
    {
        id: 11,
        label:  "patio/balcony",
    },    
    {
        id: 15,
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

