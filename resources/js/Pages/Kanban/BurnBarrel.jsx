import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { useForm } from '@inertiajs/react'

const BurnBarrel = ({ setCards }) => {

    const { delete: destroy } = useForm()

    const [active, setActive] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
      setActive(false);
    };

    const handleDragEnd = (e) => {
        const cardId = e.dataTransfer.getData("card_id");
        setCards((pv) => pv.filter((c) => c.card_id !== cardId));
        setActive(false);

        destroy(route('card.destroy', cardId), {
            preserveScroll: true,
        });
    };

    return (
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div
          onDrop={handleDragEnd}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`mt-10 grid h-20 w-full shrink-0 place-content-center rounded border text-3xl ${
            active
              ? "border-red-800 bg-red-800/20 text-red-500"
              : "border-gray-800 bg-gray-800 text-gray-500"
          }`}
        >
          {active ? <FaFire className="animate-bounce" /> : 'Drag your card here to delete' }
        </div>
      </div>
    );
};

export default BurnBarrel
