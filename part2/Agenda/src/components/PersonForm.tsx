const PersonForm = ({
  newName,
  newNumber,
  onNameChange,
  onNumberChange,
  onSubmit,
}: {
  newName: string
  newNumber: string
  onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={newName} onChange={onNameChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={onNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm
