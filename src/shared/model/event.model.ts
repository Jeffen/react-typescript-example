export class Event {
  projectId: string;
  info: {
    title: string;
    coverImg: string;
    seatmapImg: string;
  };
  pickupLocations: selectItem[] = [];
  sessions: Session[] = [];
}

export interface selectItem {
  value: any;
  label: string;
}

export class Session {
  id: string;
  date: string;
  default?: boolean;
  disabled: boolean;
  theatre: string;
  address: string;
  ticketTypes: TicketType[] = [];
  discountTypes: DiscountType[] = [];
}

export class TicketType {
  ticketName: string;
  facePrice: number = 0;
  price: number = 0;
  quantity: number = 0;
  restQuantity: number = 0;
}

export class DiscountType {
  label: string;
  rate: number = 1;
}
