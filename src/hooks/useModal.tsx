import { useState } from "react";

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function toggleModal(): void {
        setIsModalOpen((prev) => !prev);
    }

    return { isModalOpen, toggleModal, setIsModalOpen };
};

export default useModal;
