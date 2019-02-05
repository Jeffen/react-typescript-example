export interface Order {
  project: string;
  id: string;
  orderId: number;
  shipping: Shipping;
  items: Ticket[];
  faceTotalAmount: number;
  totalAmount: number;
}

export interface Ticket {
  ticketName: string;
  facePrice: number;
  price: number;
  quantity: number;
  restQuantity: number;
  coupon?: string;
  subtotal: number;
}

export interface Shipping {
  pickup: boolean;
  location: string; // Where to pick up the ticket
  firstName: string;
  lastName: string;
  cell: string;
  email: string;
}
export interface Coupon {
  code: string;
  description: string;
  discount: number;
}
