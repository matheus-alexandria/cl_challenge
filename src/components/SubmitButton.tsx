interface SubmitButtonProps {
  title: string;
  disabled?: boolean;
}

export function SubmitButton({ title, disabled = true }: SubmitButtonProps) {
  return (
    <div className="flex justify-end">
      <button 
        type="submit" 
        className={`w-32 h-8 my-3 rounded-lg text-white font-bold ${
          disabled ? 'bg-gray-500' : 'bg-blue-400 hover:bg-blue-600 transition-colors'
        }`}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  )
}