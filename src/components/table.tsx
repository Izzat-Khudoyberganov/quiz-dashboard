import { useEffect, useState } from "react";
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

function TestModal() {
    const [data, setData] = useState([]);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

    function handleEditModal(): void {
        setEditModalOpen(!editModalOpen);
    }

    function handleDeleteModal(): void {
        setDeleteModalOpen(!deleteModalOpen);
    }

    async function getData() {
        await fetch(`${import.meta.env.VITE_API_URL}${urls.getAllTests}`)
            .then((res) => res.json())
            .then((json) => setData(json));
    }

    useEffect(() => {
        getData();
    }, []);

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
                {data.map(({ ID, Title, Options }) => (
                    <TableRow key={ID}>
                        <TableCell className='font-medium'>{ID}</TableCell>
                        <TableCell className='font-medium'>
                            {truncateString(Title)}
                        </TableCell>
                        <TableCell className='font-medium'>{Options}</TableCell>

                        <TableCell>
                            <Button
                                size='lg'
                                variant='secondary'
                                onClick={handleEditModal}
                            >
                                Edit
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button
                                size='lg'
                                variant='destructive'
                                onClick={handleDeleteModal}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                <EditModal open={editModalOpen} handleOpen={handleEditModal} />
                <DeleteModal
                    open={deleteModalOpen}
                    handleOpen={handleDeleteModal}
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
