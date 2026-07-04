import React from 'react'
import Button from '../Button'

function ProductManagement() {

    const list = [
        {Name:"Computer",
         Category:"Electronics",
         Price: "$1,900",
         Stock: "52"
        },
         {Name:"Computer",
         Category:"Electronics",
         Price: "$1,900",
         Stock: "52"
        },
        {Name:"Computer",
         Category:"Electronics",
         Price: "$1,900",
         Stock: "52"
        },
        {Name:"Computer",
         Category:"Electronics",
         Price: "$1,900",
         Stock: "52"
        },        {Name:"Computer",
         Category:"Electronics",
         Price: "$1,900",
         Stock: "52"
        }
    ]
    

  return (
    <>
        <div className = "flex justify-start mx-3 my-5">
            <Button content = "+ Add Product" width='w-40' heigth='h-15'></Button>
        </div>
        <div className="h-0.5 bg-neutral-300 mt-5 ml-3 rounded w-[60%]"></div>
        <div className = "flex flex-row ml-5 mt-3 w-[60%] gap-x-8">
            <span className = "font-bold flex-1">Name</span>
            <span className = "font-bold flex-1">Category</span>
            <span className = "font-bold flex-1">Price</span>
            <span className = "font-bold flex-1">Stock</span>
            <span className = "font-bold flex-1">Action</span>
        </div>
        <div className="h-0.5 bg-neutral-300 mt-5 ml-3 rounded w-[60%]"></div>

        {list.map((item,index) =>(
                        <React.Fragment key={index}>
                            <div className = "flex flex-row ml-5 mt-3 w-[60%] gap-x-8">
                                <span className = "font-semibold flex-1">{item.Name}</span>
                                <span className = "font-semibold flex-1">{item.Category}</span>
                                <span className = "font-semibold flex-1">{item.Price}</span>
                                <span className = "font-semibold flex-1">{item.Stock}</span>
                                <div className = "flex-1">
                                    <span className = "font-semibold cursor-pointer hover:underline">Edit</span>
                                </div>
                            </div>
                        {index < list.length - 1 && (
                            <div className="h-0.5 bg-neutral-300 mt-5 ml-3 rounded w-[60%]"></div>
                        )}
                        </React.Fragment>
        ))}
    </>
  )
}

export default ProductManagement