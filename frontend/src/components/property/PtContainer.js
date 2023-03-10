import PtCard from "./PtCard";
export default function Ptcontainer() {
  const properties = [
    {
      id: 0,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Independant house Burnaby, BC",
      specs: "2 Beds,1.5 Baths",
      rent: "$2800 per weeek bitch"
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      title: "Haunted house Surrey,BC",
      specs: "5 Beds,1.5 Baths",
      rent: "$2800 per weeek bitch"
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
      title: "Lake house Vancouver,BC",
      specs: "4 Beds,1.5 Baths",
      rent: "$2800 per weeek bitch"
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80",
      title: "Nashwill house Burnaby,BC",
      specs: "1 Beds,1.5 Baths",
      rent: "$1200 per weeek bitch"
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Bath house Calgary,AB",
      specs: "1 Beds,3 Baths",
      rent: "$2800 per weeek bitch"
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1622015663319-e97e697503ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80",
      title: "Beach house LakeTown,SK",
      specs: "3 Beds,1.5 Baths",
      rent: "$6800 per weeek bitch"
    }
  ];

  return (
    
      <div className="wrapper-grid">
        {properties.map((property) => (
          <PtCard
            key={property.id}
            image={property.image}
            title={property.title}
            specs={property.specs}
            rent={property.rent}
          />
        ))}
      </div>
  
  );
}
