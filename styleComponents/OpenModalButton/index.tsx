import { cloneElement, useContext } from 'react';
import { ModalContext, ModalProvider } from '@/providers/ModalProvider';

type TProps = {
  content: JSX.Element;
};

export const OpenModalButton: React.FC<TProps> = ({ content }) => {
  const { handleModal } = useContext(ModalContext);

  return cloneElement(
    <ModalProvider>
      <div>modal provider children</div>
    </ModalProvider>,
    { content }
  );
};
