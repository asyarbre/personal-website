export default function UnorderedList({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <ul className='list-disc space-y-3 pb-2 pl-10'>{children}</ul>;
}
