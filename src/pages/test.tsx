import { TestModal } from "@/components";
import PostDrawer from "@/components/modals/post";
import { Button } from "@/components/ui/button";
import useModal from "@/hooks/useModal";

const Test = () => {
    const { isModalOpen, toggleModal } = useModal();
    return (
        <div>
            <div className='flex items-center justify-between mb-5'>
                <h1 className='text-xl font-semibold'>Create a new test</h1>
                <Button size='lg' className='text-base' onClick={toggleModal}>
                    Create
                </Button>
            </div>
            <PostDrawer open={isModalOpen} toggleModal={toggleModal} />
            <TestModal />
        </div>
    );
};

export default Test;
