
import { CartItem } from "../services/CartItem/cart-item";

export interface Order {
  id: String,
  fName: String,
  lName: String,
  ph: String,
  address: String,
  postCode: String,
  state: String,
  email: String,
  notes: String,
  items: CartItem[],
  tracking: String
}
