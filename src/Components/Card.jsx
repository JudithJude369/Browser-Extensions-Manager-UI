import { useGlobalContext } from "@/Hooks/context";
import Button from "./Button";
import { LiaToggleOnSolid } from "react-icons/lia";
import { BsToggle2Off } from "react-icons/bs";

const Card = () => {
  const { theme, filteredUsers, handleRemove, toggleActive } =
    useGlobalContext();

  return (
    <section className="card-container">
      {filteredUsers.map((data) => {
        const { description, logo, name, isActive } = data;
        return (
          <section
            key={name}
            className={`${theme ? "card-content-dark" : "card-content-light"} ${
              !isActive ? "inactive" : ""
            }`}
          >
            <section className="card">
              <img src={logo} alt={name} />
              <div>
                <h1>{name}</h1>
                <p className={theme ? "cardParagraphDark" : "cardParagraph"}>
                  {description}
                </p>
              </div>
            </section>
            <article className="cardBtn">
              <div>
                <Button
                  onClick={() => handleRemove(name)}
                  className={
                    theme ? "extensionsBtn-dark" : "extensionsBtn-light"
                  }
                >
                  Remove
                </Button>
              </div>
              <div onClick={() => toggleActive(name)}>
                {isActive ? (
                  <LiaToggleOnSolid className="toggleBtn" />
                ) : (
                  <BsToggle2Off className="toggleBtnOff" />
                )}
              </div>
            </article>
          </section>
        );
      })}
    </section>
  );
};

export default Card;
