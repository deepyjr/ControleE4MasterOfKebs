import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { KebabContext } from "../../Store/KebabContext";
import Modal from "../Modal/Modal"
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function Header() {
  let history = useHistory();
  const [clicked, setClicked] = React.useState(false);
  const [modalTag, setModalTag] = React.useState("");
  const { kebabState, kebabDispatch } = React.useContext(KebabContext);
  const classique = {
    pain: "Kebab",
    viande: "Viande",
    garnitures: ["Salade", "Tomates", "Oignons"],
    sauces: ["Blanche"]
  }
  const vege = {
    pain: "Kebab",
    viande: "Tofu",
    garnitures: [],
    sauces: ["Blanche"]
  }
  const bbq = {
    pain: "Kebab",
    viande: "Viande",
    garnitures: ["Salade", "Tomates", "Oignons"],
    sauces: ["BBQ"]
  }
  const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: theme.spacing(2),
      border: "3px solid black",
      fontFamily: "Fredoka One",
      width: "15vw",
      backgroundColor: "#4D0302",
      color: "#fff",
      marginLeft:"15px",
      borderRadius:"8px",
      "&:hover": {
        backgroundColor: "#4D0302",
        color: "#fff",
      }
    },
  }));
  const classes = useStyles();

  function handleClick(tag) {
    setClicked(true);
    setModalTag(tag)
  }

  return (
    <div>
      <div>
        <button
          onClick={(e) => {
            kebabDispatch({ type: "resetCurrent" });
            history.replace("/Selection-Pain");
            window.location.reload();
          }}
          className="buttonNext commande resetCommande"
        >
          Reset commande en cours
        </button>
        <div style={{display:"flex", flexDirection:"column", width:"10%", position:"absolute", marginTop:"30vh"}}>
        <Button
          onClick={(e) => {
            handleClick("classique");
          }}
          className={classes.button}
        >
          Faites moi le classique chef !
        </Button>
        <Button
          onClick={(e) => {
            handleClick("vege");
          }}
          className={classes.button}
        >
          Faites moi le Végé chef !
        </Button>
        <Button
          onClick={(e) => {
            handleClick("bbq");
          }}
          className={classes.button}
        >
          Faites moi le BBQ chef !
        </Button>
        </div>
        
        {clicked && modalTag === "classique"? <Modal display={"premadeKebab"} onlyModal={true} setClicked={setClicked} kebab={classique}/> : null}
        {clicked && modalTag === "vege"? <Modal display={"premadeKebab"} onlyModal={true} setClicked={setClicked} kebab={vege} /> : null}
        {clicked && modalTag === "bbq"? <Modal display={"premadeKebab"} onlyModal={true} setClicked={setClicked} kebab={bbq} /> : null}
      </div>
      <img
        onClick={(e) => history.replace("/Selection-Pain")}
        className="header"
        src={process.env.PUBLIC_URL + "/Logo-MagicKebab.png"}
        alt="Logo kebab"
      />
    </div>
  );
}

export default Header;
