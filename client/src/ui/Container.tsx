
interface Props {
      children: React.ReactNode;
}
const Container = ({ children}: Props) => {
      return (
            <div className={"lg:px-0 px-6 max-w-screen-xl mx-auto"}>
                  {children}
            </div>
      );
};

export default Container;