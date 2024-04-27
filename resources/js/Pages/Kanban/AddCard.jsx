import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { usePage, useForm } from '@inertiajs/react'

const AddCard = ({ column, temp_id, setCards }) => {
    const { board_encrypted_id } = usePage().props

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        card_id: ''
    })

    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e) => {
        const cardId = text.length + Date.now().toString()
        data.title = text
        data.card_id = cardId

        e.preventDefault();

        if (!text.trim().length) return;

        const newCard = {
            column,
            title: text.trim(),
            id: cardId,
            card_id: cardId
        };

        post(`/board/${board_encrypted_id}/card/${temp_id}/${newCard.id}`)

        setCards((pv) => [...pv, newCard]);

        setAdding(false);
    };

    return (
      <>
        {adding ? (
          <motion.form layout onSubmit={handleSubmit}>
            <textarea
                name="title"
                onChange={(e) => setText(e.target.value)}
                autoFocus
                placeholder="Add new task..."
                className="w-full rounded border border-gray-400 bg-gray-400/20 p-3 text-sm text-black placeholder-gray-300 focus:outline-0"
            />
            <div className="mt-1.5 flex items-center justify-end gap-1.5">
              <button
                onClick={() => setAdding(false)}
                className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
              >
                Close
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
              >
                <span>Add</span>
                <FiPlus />
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.button
            layout
            onClick={() => setAdding(true)}
            className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
          >
            <span>Add card</span>
            <FiPlus />
          </motion.button>
        )}
      </>
    );
};

export default AddCard
