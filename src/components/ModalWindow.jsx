import { useContext } from "react";
import { CartContext } from "../context/CartContextComp";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ModalWindow = () => {
  const {
    clearCart,
    isOpen,
    onOpenChange,
  } = useContext(CartContext);

  return (
    <>
      <Modal
        placement="center"
        backdrop="blur" 
        style={{ padding: "0px 24px" }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Очистить корзину
              </ModalHeader>
              <ModalBody>
                <p>Вы действительно хотите очистить корзину?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Отмена
                </Button>
                <Button color="primary" onClick={clearCart} onPress={onClose}>
                  Очистить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalWindow;
