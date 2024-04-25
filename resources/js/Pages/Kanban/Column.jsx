import { useState } from "react";
import AddCard from "./AddCard";
import Card from "./Card";
import DropIndicator from "./DropIndicator";
import { useForm } from '@inertiajs/react'
import Dropdown from "@/Components/Dropdown";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import UpdateColumn from "./UpdateColumn";

const Column = ({ title, headingColor, cards, column, setCards, columns, temp_id }) => {

    const { data, setData, delete: destroy, put, processing, reset } = useForm({
        column: ''
    })

    const [active, setActive] = useState(false);
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const [columnId, setColumnId] = useState(null); // State to store column ID
    const [showModal, setShowModal] = useState(false);

    const confirmUserDeletion = (columnId) => {
        setConfirmingUserDeletion(true);
        setColumnId(columnId);
    };

    const deleteColumn = (e) => {
        e.preventDefault();

        destroy(route('column.destroy', temp_id), {
            preserveScroll: true,

            // onSuccess: () => {
            //     // Remove the column from the UI
            //     removeColumn(columnId);
            //     closeModal();
            // },
        });

        removeColumn(columnId);
    };

    const removeColumn = (columnId) => {
        // Filter out the column with the specified ID
        // const cardId = e.dataTransfer.getData("cardId");

        columns((pv) => pv.filter((c) => c.temp_id !== columnId));
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId", card.id);
        e.dataTransfer.setData("card_id", card.card_id);
    };

    const handleDragEnd = (e) => {
        const cardId = e.dataTransfer.getData("card_id");

        setActive(false);
        clearHighlights();

        const indicators = getIndicators();

        data.column = column

        e.preventDefault()

        put(route('card.updateCard', cardId))

        const { element } = getNearestIndicator(e, indicators);

        const before = element.dataset.before || "-1";
        if (before !== cardId) {
        let copy = [...cards];

        let cardToTransfer = copy.find((c) => c.card_id === cardId);

        if (!cardToTransfer) return;
        cardToTransfer = { ...cardToTransfer, column };

        copy = copy.filter((c) => c.card_id !== cardId);

        const moveToBack = before === "-1";

        if (moveToBack) {
            copy.push(cardToTransfer);
        } else {
            const insertAtIndex = copy.findIndex((el) => el.id === before);
            if (insertAtIndex === undefined) return;

            copy.splice(insertAtIndex, 0, cardToTransfer);
        }

        setCards(copy);
        }
    };

  const handleDragOver = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

    const getIndicators = () => {
        return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
    };

    const handleDragLeave = () => {
        clearHighlights();
        setActive(false);
    };

    const filteredCards = cards.filter((c) => c.column === column);

    const [updatedTitle, setupdatedTitle] = useState(null)

    const setDataFromUpdateColumn = (updatedData) => {
        // Handle the updated data here
        setupdatedTitle(updatedData.title)
    };

  return (
    <div className="w-56 shrink-0">
        <div className="mb-3 flex items-center justify-between">
            <h3 className={`font-medium ${headingColor} flex items-center justify-center`}>
                <span>{ updatedTitle ? updatedTitle : title}</span>
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-400 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 capitalize"
                            >
                                <svg
                                    className="ms-2 -me-0.5 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content align="left" width="28">
                        {/* <Dropdown.Link href={route('myshop.index')}>Edit</Dropdown.Link> */}
                        <button
                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                            onClick={() => setShowModal(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                            onClick={() => confirmUserDeletion(temp_id)}
                        >
                            Delete
                        </button>
                    </Dropdown.Content>
                </Dropdown>
            </h3>

            <span className="rounded text-sm text-neutral-200">
            {filteredCards.length}
            </span>
        </div>
    <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />

      </div>

        <Modal show={confirmingUserDeletion} onClose={closeModal}>
            <form onSubmit={deleteColumn} className="p-6">
                <h2 className="text-lg font-medium text-gray-900">
                    All the data of this column will be deleted.<br></br><br></br>
                    Are you sure you want to delete this column?
                </h2>

                <div className="mt-6 flex justify-end">
                    <SecondaryButton onClick={closeModal}>No</SecondaryButton>

                    <DangerButton className="ms-3" disabled={processing}>
                        Yes
                    </DangerButton>
                </div>
            </form>
        </Modal>

        <UpdateColumn
            showModal={showModal}
            setShowModal={setShowModal}
            temp_id={temp_id}
            title={title}
            setData={setData}
            setDataFromUpdateColumn={setDataFromUpdateColumn}
        />

    </div>
  );
};

export default Column
