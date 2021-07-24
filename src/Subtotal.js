import React from "react";
import "./Subtotal.css";
//uncomenting cf
import CurrencyFormat from "react-currency-format";
import NumberFormat from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        // <NumberFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        thousandSeparator={true}
        // thousandsGroupStyle="lakh"
        prefix={"₹"}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}

        // decimalScale={2}
        // value={getBasketTotal(basket)}
        // displayType={"text"}
        // thousandSeperator={true}
        // prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
