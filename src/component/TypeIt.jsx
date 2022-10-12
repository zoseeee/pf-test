import TypeIt from "typeit-react";

const TypeItTest = () => {
  return (
    <TypeIt
      getBeforeInit={(instance) => {
        instance
          .type(": Make it")
          .pause(1000)
          .delete(6)
          .pause(750)
          .type("AKE IT COUNT!");
        // Remember to return it!
        return instance;
      }}
    />
  );
};

export default TypeItTest;
