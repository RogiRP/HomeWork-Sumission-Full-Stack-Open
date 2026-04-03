const Filter = ({ filter, onFilterChange }: {
  filter: string
  onFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div>
    filter shown with <input value={filter} onChange={onFilterChange} />
  </div>
)

export default Filter
