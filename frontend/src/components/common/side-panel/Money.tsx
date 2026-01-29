import Divider from '@/components/common/Divider';

const Money = () => {
  return (
    <div className="flex flex-col gap-6 w-90">
        <div className="flex flex-col gap-1.5">
            <p className="headline2-bold text-label-normal h-8">금액</p>
            <p className="body2-normal-medium text-label-alternative">현지 금액이나 기준 금액 중 하나만 입력하면 자동으로 환산돼요.</p>
        </div>
        <div className="flex flex-col gap-3">
            <div className="">현지 금액</div>
            <div className="">
                <Divider style="vertical" className="h-3"/>
                <p>환율 부분</p>
                <Divider style="vertical" className="h-3"/>
            </div>
            <div className="">기준 금액</div>
        </div>
    </div>
  )
}

export default Money