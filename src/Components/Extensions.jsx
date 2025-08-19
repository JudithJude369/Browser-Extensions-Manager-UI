import { useGlobalContext } from "@/Hooks/context";
import Button from "./Button";

const Extensions = () => {
  const { theme, setFilter, filter } = useGlobalContext();
  return (
    <div className="extensions-container">
      <h1 className={theme ? "text-dark" : "text-light"}>Extensions List </h1>
      <div className="btn-container">
        <Button
          onClick={() => setFilter("all")}
          className={`${theme ? "extensionsBtn-dark" : "extensionsBtn-light"} ${
            filter === "all" ? "activeBtn" : ""
          }`}
          // className={theme ? "extensionsBtn-dark" : "extensionsBtn-light"}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("active")}
          className={`${theme ? "extensionsBtn-dark" : "extensionsBtn-light"} ${
            filter === "active" ? "activeBtn" : ""
          }`}
          // className={theme ? "extensionsBtn-dark" : "extensionsBtn-light"}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter("inactive")}
          className={`${theme ? "extensionsBtn-dark" : "extensionsBtn-light"} ${
            filter === "inactive" ? "activeBtn" : ""
          }`}
          // className={theme ? "extensionsBtn-dark" : "extensionsBtn-light"}
        >
          Inactive
        </Button>
      </div>
    </div>
  );
};

export default Extensions;
