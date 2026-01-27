import { AnimatePresence, motion } from 'framer-motion';

import Button from '../Button';
import Icon from '../Icon';

interface ModalProps {
  children?: React.ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  isOpen?: boolean;
}

/**
 * Modal 컴포넌트 (Container/Wrapper)
 *
 * 모달의 UI 구조(backdrop, close 버튼, 취소/확인 버튼)만 제공합니다.
 * 실제 모달 내용은 children으로 받아서 표시합니다.
 *
 * @example
 * const [isOpen, setIsOpen] = useState(true);
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onConfirm={handleConfirm}>
 *   <LocaleConfirmModal type="country" {...props} />
 * </Modal>
 */
const Modal = ({ children, onClose, onConfirm, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // backdrop 자체를 클릭했을 때만 닫기
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Modal Content */}
            <motion.div
              className="rounded-modal-16 bg-background-normal relative z-51 flex h-fit w-fit flex-col items-center justify-center px-4 pt-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex w-full justify-end">
                <Icon iconName="Close" onClick={onClose} />
              </div>
              {children}
              <div className="flex h-20 w-full flex-row items-center justify-end gap-3">
                <Button variant="outlined" size="lg" onClick={onClose}>
                  취소
                </Button>
                <Button variant="solid" size="lg" onClick={onConfirm}>
                  확인
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
