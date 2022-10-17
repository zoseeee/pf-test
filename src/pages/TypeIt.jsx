import TypeIt from "typeit-react";

const MakeIt = () => {
  return (
    <div className="makeIt">
      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type(": Make it")
            .pause(1200)
            .delete(6)
            .pause(750)
            .type("AKE IT COUNT!");
          // Remember to return it!
          return instance;
        }}
      />
    </div>
  );
};

export default MakeIt;
