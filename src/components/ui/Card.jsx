function Card({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`rounded-[10px] border border-mist bg-card p-5 sm:p-6 ${className}`}>
      {children}
    </Tag>
  )
}

export default Card
