import { Link } from "react-router-dom";
import { logo } from "../assets";
import Container from "./Container";

const Header = () => {

      const navigation = [
            { title: "Cancel", link: "/cancel" },
            { title: "Cart", link: "/cart" },
            { title: "Category", link: "/category" },
            { title: "Favorite", link: "/favorite" },
            { title: "NotFound", link: "/notfound" },
            { title: "Orders", link: "/orders" },
            { title: "Product", link: "/product" },
            { title: "Profile", link: "/profile" },
            { title: "Success", link: "/success" },
      ];
      
      return (
            <Container>
                  <div className="flex justify-between h-full py-4">
                      <Link to={"/"}>
                      <img className="h-10" src={logo} alt="" />
                      </Link>
                        <div className="flex gap-x-8">
                              {
                                    navigation.map((item, index) => (
                                          <ul key={index}>
                                                <Link to={item.link}>
                                                      <li className="text-[18px] hover:text-green-500 font-semibold duration-500">{item.title}</li>
                                                </Link>
                                          </ul>
                                    ))
                              }
                        </div>
                  </div>
            </Container>
      );
};

export default Header;