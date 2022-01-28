interface IProps {
  type: string;
}

export function SoundIcon(props: IProps) {
  if (props.type === 'off') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M3 9v6h-1v-6h1zm13-7l-9 5v2.288l7-3.889v13.202l-7-3.889v2.288l9 5v-20zm-11 5h-5v10h5v-10zm17.324 4.993l1.646-1.659-1.324-1.324-1.651 1.67-1.665-1.648-1.316 1.318 1.67 1.657-1.65 1.669 1.318 1.317 1.658-1.672 1.666 1.653 1.324-1.325-1.676-1.656z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M22 0v24l-11-6v-2.278l9 4.909v-17.262l-9 4.91v-2.279l11-6zm-13 6v12h-7v-12h7zm-2 2h-3v8h3v-8z" />
    </svg>
  );
}
