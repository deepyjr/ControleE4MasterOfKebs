import React from "react";
import { Switch, Route } from "react-router-dom";
import SelectionPain from "./1SelectionPain";
import SelectionViande from "./2SelectionViande";
import SelectionGarniture from "./3SelectionGarniture";
import SelectionSauces from "./4SelectionSauces";
import Recapitulatif from "./5Récapitulatif";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Cart from "../Components/Cart/Cart";
import CommandeValidee from "./CommandeValidée";
import { KebabContext } from "../Store/KebabContext";
function Layout() {
  const { kebabState } = React.useContext(KebabContext);
  return (
    <div>
      {kebabState.kebabCart !== null &&
      kebabState.kebabCart !== undefined &&
      kebabState.kebabCart.length > 0 ? (
        <Cart></Cart>
      ) : null}
      <Header></Header>
      <Switch>
        <Route exact path="/" component={SelectionPain} />
        <Route exact path="/Selection-Pain" component={SelectionPain} />
        <Route exact path="/Selection-Viande" component={SelectionViande} />
        <Route
          exact
          path="/Selection-Garniture"
          component={SelectionGarniture}
        />
        <Route exact path="/Selection-Sauces" component={SelectionSauces} />
        <Route exact path="/Récapitulatif" component={Recapitulatif} />
        <Route exact path="/Commande-validée" component={CommandeValidee} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
