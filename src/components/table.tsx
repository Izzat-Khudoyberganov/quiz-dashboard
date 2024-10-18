import { useState } from "react";
import { urls } from "@/utils/urls";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { truncateString } from "@/utils/helper";
import { DeleteModal, EditModal } from "./modals";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/utils/http";
import { TestDataI } from "./types";
import useModal from "@/hooks/useModal";

function TestModal() {
    const [testId, setTestId] = useState<number>(0);
    const [editTestId, setEditTestId] = useState<number>(0);

    const { data, refetch } = useQuery<TestDataI[]>({
        queryKey: ["tests"],
        queryFn: () => getData(urls.tests),
    });

    const {
        isModalOpen: editModalOpen,
        setIsModalOpen: setEditModal,
        toggleModal: editModalToggler,
    } = useModal();

    const {
        isModalOpen: deleteModalOpen,
        setIsModalOpen,
        toggleModal: deleteModalToggler,
    } = useModal();

    function handleEditModal(id: number) {
        setEditTestId(id);
        setEditModal(!editModalOpen);
    }

    function handleDeleteModal(id: number) {
        setTestId(id);
        setIsModalOpen(!deleteModalOpen);
    }

    return (
        <Table>
            <TableCaption>A list of your recent tests.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[100px]'>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Options</TableHead>
                    <TableHead>Edit</TableHead>
                    <TableHead>Delete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((el) => (
                    <TableRow key={el.ID}>
                        <TableCell className='font-medium'>{el.ID}</TableCell>
                        <TableCell className='font-medium'>
                            {truncateString(el.Title)}
                        </TableCell>
                        <TableCell className='font-medium'>
                            {el.Options}
                        </TableCell>

                        <TableCell>
                            <Button
                                size='lg'
                                variant='secondary'
                                onClick={() => handleEditModal(el.ID)}
                            >
                                Edit
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button
                                size='lg'
                                variant='destructive'
                                onClick={() => handleDeleteModal(el.ID)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                <EditModal
                    open={editModalOpen}
                    handleOpen={editModalToggler}
                    id={editTestId}
                    url={urls.tests}
                    refetch={refetch}
                />
                <DeleteModal
                    open={deleteModalOpen}
                    handleOpen={deleteModalToggler}
                    url={urls.tests}
                    id={testId}
                    refetch={refetch}
                />
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={12} className='text-center'>
                        Tests
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default TestModal;
