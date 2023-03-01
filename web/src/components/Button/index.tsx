interface ButtonProps {
  text: string;
}

export function Button(props: ButtonProps) {
  return (
    <div className="h-16 w-48 rounded-3xl bg-purple-900 flex items-center justify-center cursor-pointer hover:opacity-90 text-white">
      {props.text}
    </div>
  )
}