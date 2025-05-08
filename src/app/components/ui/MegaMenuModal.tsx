interface Subcategory {
    id: string;
    name: string;
  }
  
  interface Category {
    id: string;
    name: string;
    subcategories: Subcategory[];
  }
  
  interface MegaMenuModalProps {
    data: {
      categories: Category[];
    };
    isOpen: boolean;
    onClose: () => void;
  }

export default function MegaMenuModal({ data, isOpen, onClose }: MegaMenuModalProps) {
    if (!isOpen) return null;

    return (
      <div  className="fixed top-18 left-0 w-screen h-full bg-opacity-50 z-50">
        <div  onMouseLeave={onClose} className="absolute w-full mx-auto bg-white border-1 border-gray-200 cursor-default shadow-lg p-6 pt-7 pb-13">
          <div className="flex justify-center gap-20 w-2/3 mx-auto">
            {data.categories.map((category) => (
              <div key={category.id}>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <ul className="space-y-1">
                  {category.subcategories.map((sub) => (
                    <li key={sub.id} className="text-sm text-gray-700 hover:underline cursor-pointer">
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  