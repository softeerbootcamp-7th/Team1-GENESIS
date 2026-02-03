import { Icons } from '@/assets';
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
    maxTotalSize: 50 * 1024 * 1024, // 50MB
  },
  file: {
    message:
      '지원 형식: csv, xlsx\n한 번에 1개의 파일만 업로드 가능해요.\n파일 크기는 20MB을 넘을 수 없어요.',
    accept: '.csv,.xlsx',
    multiple: false,
    maxCount: 1,
    maxTotalSize: 20 * 1024 * 1024, // 20MB
  },
} as const;

const UploadBox = ({ type }: UploadBoxProps) => {
  const policy = uploadPolicy[type];

  return (
    <label className="hover:bg-background-alternative flex cursor-pointer flex-col items-center justify-center gap-5 py-10">
      {/* 실제 파일 입력 */}
      <input
        type="file"
        className="hidden"
        accept={policy.accept}
        multiple={policy.multiple}
      />

      {/* UI 영역 */}
      <Icons.UploadFile className="text-label-neutral h-16 w-16" />
      <h3 className="body2-normal-bold text-label-alternative text-center whitespace-pre-line">
        {'여기에 파일을 드래그하거나\n클릭하여 업로드하세요.'}
      </h3>
      <p className="caption1-medium text-label-alternative text-center leading-relaxed whitespace-pre-line">
        {policy.message}
      </p>
    </label>
  );
};

export default UploadBox;
