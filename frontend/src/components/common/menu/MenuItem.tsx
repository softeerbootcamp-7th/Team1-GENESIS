interface MenuItemProps {
  logo?: React.ReactNode
  label: string
  onClick: () => void
}

const MenuItem = ({ logo, label, onClick }: MenuItemProps) => {
  return (
    <div
      className="w-8 flex flex-col items-center gap-0.5 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-7 h-7 flex items-center justify-center border border-amber-600 rounded-md">
        {logo}
      </div>
      <div className="text-center text-xs">{label}</div>
    </div>
  )
}

export default MenuItem
