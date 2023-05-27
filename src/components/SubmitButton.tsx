interface SubmitButtonProps {
  title: string;
  disabled?: boolean;
}

export function SubmitButton({ 
  title, 
  disabled = true
}: SubmitButtonProps) {
  return (
    <div className="flex justify-end">
      <button 
        type="submit" 
        className={`w-32 h-8 my-3 rounded-lg text-white font-bold transition-colors ${
          disabled ? 'bg-gray-500 opacity-75' : `bg-light-blue-400 hover:light-blue-600`
        }`}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  )
}