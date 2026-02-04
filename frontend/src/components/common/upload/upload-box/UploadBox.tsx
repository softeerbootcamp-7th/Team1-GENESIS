import { useCallback, useRef } from 'react';

import { Icons } from '@/assets';

import { useDragAndDrop } from './useDragAndDrop';

interface UploadBoxProps {
  type: 'image' | 'file';
}

const uploadPolicy = {
  image: {
    message:
      '지원 형식: jpg, jpeg, png\n최대 30개까지 업로드할 수 있어요.\n업로드 시 전체 파일 용량 합계는 50MB를 넘을 수 없어요.',
    accept: 'image/jpeg,image/png,image/jpg',
    multiple: true,
    maxCount: 30,
    maxTotalSize: 50 * 1024 * 1024,
  },
  file: {
    message:
      '지원 형식: csv, xlsx\n한 번에 1개의 파일만 업로드 가능해요.\n파일 크기는 20MB을 넘을 수 없어요.',
    accept: '.csv,.xlsx',
    multiple: false,
    maxCount: 1,
    maxTotalSize: 20 * 1024 * 1024,
  },
} as const;

const UploadBox = ({ type }: UploadBoxProps) => {
  const policy = uploadPolicy[type];
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validateAndProcessFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      const files = Array.from(fileList);

      // 1. 개수 제한
      if (!policy.multiple && files.length > 1) {
        alert('한 번에 하나의 파일만 업로드할 수 있어요.');
        return;
      }

      if (files.length > policy.maxCount) {
        alert(`최대 ${policy.maxCount}개까지 업로드할 수 있어요.`);
        return;
      }

      // 2. 파일 형식
      const allowed = policy.accept
        .split(',')
        .map((v) => v.trim().toLowerCase());

      const hasInvalid = files.some((file) => {
        const name = file.name.toLowerCase();
        const type = file.type.toLowerCase();

        return !allowed.some((a) =>
          a.startsWith('.') ? name.endsWith(a) : type === a,
        );
      });

      if (hasInvalid) {
        alert('지원하지 않는 파일 형식이 포함되어 있어요.');
        return;
      }

      // 3. 파일 용량
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);
      if (totalSize > policy.maxTotalSize) {
        const maxMB = policy.maxTotalSize / (1024 * 1024);
        alert(`전체 파일 용량은 ${maxMB}MB를 초과할 수 없어요.`);
        return;
      }

      console.log('업로드 준비 완료:', files);
    },
    [policy],
  );

  const {
    isDragging,
    bind: { onDragOver, onDragLeave, onDrop },
  } = useDragAndDrop(validateAndProcessFiles);

  // 클릭 업로드
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndProcessFiles(e.target.files);
    e.target.value = '';
  };

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  }, []);

  return (
    <label
      className={`
        flex cursor-pointer flex-col items-center justify-center gap-5 py-10
        border-2 border-dashed transition-colors
        ${
          isDragging
            ? 'bg-blue-50 border-blue-400'
            : 'hover:bg-background-alternative border-transparent'
        }
      `}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept={policy.accept}
        multiple={policy.multiple}
        onChange={handleChange}
      />

      <Icons.UploadFile className="text-label-neutral h-16 w-16" />
      <h3 className="body2-normal-bold text-label-alternative text-center whitespace-pre-line">
        {'여기에 파일을 드래그하거나\n클릭하여 업로드하세요.'}
      </h3>
      <p className="caption1-medium text-label-alternative text-center whitespace-pre-line">
        {policy.message}
      </p>
    </label>
  );
};

export default UploadBox;
