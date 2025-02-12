interface ContainerProps {
    id: string;
    children: any;
}

const Container: React.FC<ContainerProps> = ({ id, children }) => {
  return (
    <section id={id} className="w-[1000px] pt-20 font-playfairDisplay m-auto">
        {children}
    </section>
  );
}

export default Container;
