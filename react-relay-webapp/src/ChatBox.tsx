type TProps = {
  children: React.ReactNode;
};

export default function ChatBox({ children }: TProps) {
  return (
    <div
      className={`bg-light d-flex flex-column h-100 justify-content-between
                  p-4 rounded-3 w-25`}
    >
      {children}
    </div>
  );
}
