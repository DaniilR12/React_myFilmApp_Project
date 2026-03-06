export function AuthInput({ value, onChange, placeholder }: { value: string, onChange: (value: string) => void, placeholder: string }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='auth_input'
      type="text"
      placeholder={placeholder}
      required
    ></input>
  );
}
