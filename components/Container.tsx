interface ContainerProps {
    id: string;
    children: any;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ id, children, className }) => {
  return (
    <section id={id} className={`w-[1000px] font-playfairDisplay m-auto ${className}`}>
        {children}
    </section>
  );
}

export default Container;
